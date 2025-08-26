#!/bin/bash

echo "🚀 Starting comprehensive merge conflict cleanup..."

# Function to clean merge conflicts from a file
clean_conflicts() {
	local file="$1"
	if [ -f "$file" ]; then
		echo "🧹 Cleaning conflicts in: $file"
		
		# Create backup
		cp "$file" "${file}.cleanup-backup.$(date +%s)"
		
		# Remove all merge conflict markers
		sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
		sed -i '/^>>>>>>> /d' "$file"
		
		# Remove any remaining incomplete markers
		sed -i '/^<<<<<<< HEAD/d' "$file"
		sed -i '/^=======/d' "$file"
		sed -i '/^>>>>>>> /d' "$file"
		
		echo "✅ Cleaned: $file"
	fi
}

echo "📁 Cleaning conflicts in critical files..."

# Clean critical files
clean_conflicts "package.json"
clean_conflicts "package-lock.json"
clean_conflicts "tsconfig.json"
clean_conflicts "next.config.js"
clean_conflicts "tailwind.config.js"
clean_conflicts "vite.config.ts"

# Also remove simple markers in src using fast path
find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
	if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
		clean_conflicts "$file"
	fi
done

# Clean page files
find pages -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" 2>/dev/null | while read file; do
	if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
		clean_conflicts "$file"
	fi
done

echo "🔍 Checking for remaining conflicts..."

# Check if there are any remaining conflicts
remaining_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" 2>/dev/null | wc -l)

if [ "$remaining_conflicts" -eq 0 ]; then
	echo "✅ All conflicts cleaned!"
	
	echo "📝 Adding cleaned files..."
	git add .
	
	echo "💾 Committing cleaned state..."
	git commit -m "chore: clean up merge conflict markers across repo"
	
	echo "🎉 Successfully cleaned all conflicts!"
else
	echo "⚠️  Still have $remaining_conflicts conflicts to clean"
	echo "Files with remaining conflicts:"
	grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" 2>/dev/null | head -20
fi
