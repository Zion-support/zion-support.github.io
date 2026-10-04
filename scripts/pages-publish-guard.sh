#!/usr/bin/env bash
# Pages publish guard — runs after scripts/prepare-pages-out.sh, before upload.
# 1) Strips internal / ops / secret material from the Pages artifact (out/).
# 2) Fails the deploy if key commercial pages are missing or stub-sized.
# Does not edit any source file; only the build artifact is touched.
# FIELD-SERVICES LOCK: no field-services HTML is removed or changed.
set -euo pipefail
OUT="${1:-out}"
MIN_BYTES="${MIN_BYTES:-1500}"

if [ ! -d "$OUT" ]; then
  echo "::error::publish dir $OUT does not exist"
  exit 1
fi

removed=0
strip() {
  local p="$1"
  if [ -e "$p" ]; then
    echo "strip: ${p#"$OUT"/}"
    rm -rf -- "$p"
    removed=$((removed + 1))
  fi
}

# Internal ops / war-room content must never be public.
strip "$OUT/ops"
strip "$OUT/pages/ops"

# Automation report JSONs that leak internal state.
strip "$OUT/api/automation-health.json"
strip "$OUT/api/automation-health-history.json"
strip "$OUT/monitoring-actions.json"
strip "$OUT/monitoring-log.json"

# Internal markdown (CEO-OPS.md, STATUS.md, briefs), credentials and keys.
while IFS= read -r -d '' f; do
  strip "$f"
done < <(find "$OUT" -type f \( -name '*.md' -o -name '.netrc' -o -name '_netrc' \
  -o -name '.env' -o -name '.env.*' -o -name '*.pem' -o -name '*.key' \
  -o -name 'id_rsa*' -o -name 'id_ed25519*' -o -name '*.jsonl' \) -print0)

echo "Stripped ${removed} internal path(s) from ${OUT}/"

# Post-strip assertions: nothing internal may remain.
if [ -e "$OUT/ops" ] || find "$OUT" -type f \( -name '.netrc' -o -name 'CEO-OPS.md' -o -name 'STATUS.md' \) | grep -q .; then
  echo "::error::internal content still present in ${OUT}/ after strip"
  exit 1
fi

# Key commercial pages must exist and not be stubs.
fail=0
for rel in index.html plans/index.html en/plans/index.html discovery/index.html enterprise/index.html; do
  f="$OUT/$rel"
  if [ ! -f "$f" ]; then
    echo "::error::missing key page ${rel}"
    fail=1
    continue
  fi
  sz=$(wc -c < "$f" | tr -d ' ')
  if [ "$sz" -lt "$MIN_BYTES" ]; then
    echo "::error::key page ${rel} is ${sz}B (< ${MIN_BYTES}B)"
    fail=1
    continue
  fi
  echo "OK key page ${rel} (${sz}B)"
done
if [ "$fail" -ne 0 ]; then
  exit 1
fi

if [ -n "${GITHUB_STEP_SUMMARY:-}" ]; then
  {
    echo "### Pages publish guard"
    echo "- stripped internal paths: ${removed}"
    echo "- key pages OK: /, /plans/, /en/plans/, /discovery/, /enterprise/"
    echo "- artifact files: $(find "$OUT" -type f | wc -l)"
  } >> "$GITHUB_STEP_SUMMARY"
fi
