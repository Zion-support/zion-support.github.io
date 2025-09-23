#!/bin/bash

# Minimal automatic merge conflict resolver
set -e

echo "🔧 Starting automatic merge conflict resolution..."

resolve_file_conflicts() {
	local file="$1"
	[ ! -f "$file" ] && return 0
	if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
		echo "🔧 Resolving conflicts in $file"
		cp "$file" "${file}.conflict-backup.$(date +%s)" 2>/dev/null || true
		case "$file" in
			package.json|package-lock.json)
				sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
				sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
				;;
			next.config.js|tsconfig.json|tailwind.config.js)
				sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
				sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
				;;
			*)
				# Drop ours section and markers, keep incoming
				sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file" 2>/dev/null || true
				sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
				;;
		esac
		echo "✅ Resolved $file"
	fi
}

CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
if [ -z "$CONFLICTED_FILES" ]; then
	echo "✅ No conflicted files found"
	exit 0
fi

echo "📋 Found conflicted files:\n$CONFLICTED_FILES"
for file in $CONFLICTED_FILES; do
	resolve_file_conflicts "$file"
done

echo "📦 Adding resolved files..."
git add -A

if git diff --name-only --diff-filter=U | grep -q .; then
	echo "⚠️  Some conflicts remain unresolved."
	exit 1
fi

echo "💾 Committing merge..."
git commit -m "Resolve merge conflicts automatically - $(date)" || true

echo "🎉 Merge conflicts resolved and committed!"