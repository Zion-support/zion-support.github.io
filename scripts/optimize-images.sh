#!/bin/bash
# Image optimization script

echo "🖼️  Optimizing images..."

# Install image optimization tools if not present
if ! command -v imagemin &> /dev/null; then
  echo "Installing image optimization tools..."
  npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant imagemin-webp
fi

# Optimize images in public directory
find public -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read file; do
  echo "Optimizing: $file"
  imagemin "$file" --out-dir=public/optimized --plugin=mozjpeg --plugin=pngquant
done

echo "✅ Image optimization completed!"
