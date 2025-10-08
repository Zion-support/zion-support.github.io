#!/bin/bash

echo "Fixing blog pages metadata..."

# Find all blog pages and fix metadata syntax
find /workspace/app/blog -name "page.tsx" -exec sed -i '
/^\/\/ export const metadata: Metadata = { \/\/ Removed for Vite$/,/^};$/ {
  s/^  /\/\/  /
  s/^  description:/\/\/  description:/
  s/^  keywords:/\/\/  keywords:/
  s/^  openGraph:/\/\/  openGraph:/
  s/^    title:/\/\/    title:/
  s/^    description:/\/\/    description:/
  s/^    type:/\/\/    type:/
  s/^    authors:/\/\/    authors:/
  s/^  },/\/\/  },/
  s/^  twitter:/\/\/  twitter:/
  s/^    card:/\/\/    card:/
  s/^    title:/\/\/    title:/
  s/^    description:/\/\/    description:/
  s/^    images:/\/\/    images:/
  s/^  }/\/\/  }/
  s/^};/\/\/ };/
}' {} \;

echo "Blog pages fixed!"