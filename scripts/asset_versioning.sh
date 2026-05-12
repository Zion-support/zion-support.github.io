#!/usr/bin/env bash
# run after successful build
set -e
cd $(git rev-parse --show-toplevel)
# Generate hash-manifest if using Next.js custom webpack config
# Assume next.config.js is already configured to output hashed filenames
# Commit the manifest and trigger CDN purge
git diff --name-only --exit-code scripts || exit 0  # nothing changed → exit
git checkout -B asset-versioning-branch
# Assuming the build creates a public/_next/static/ folder
# copy manifest file
cp .next/BUILD_ID build_id.txt
# Create a summary artifact
echo "Build ID: $(cat build_id.txt)" > asset_version_report.txt
git add .next/BUILD_ID asset_version_report.txt
git commit -m "chore: asset version bump – build id $(cat build_id.txt)"
# Push branch and trigger CDN purge via repository_dispatch
TOKEN=$(gh secret list -R Zion-support/zion.app | awk '/GITHUB_TOKEN/ {print $3}')
BRANCH=asset-versioning-branch
# Push branch
git push -f origin $BRANCH
# Trigger dispatch
curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: token $TOKEN" \
  https://api.github.com/repos/Zion-support/zion.app/dispatches \
  -d \'{"event_type":"manual_build","client_payload":{"msg":"Asset version bump"}}\'
