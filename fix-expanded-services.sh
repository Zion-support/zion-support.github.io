#!/bin/bash

echo "Fixing missing colons in expandedServices.jsx..."

# Fix missing colons for various properties
sed -i 's/tags\[/tags: [/g' src/data/expandedServices.jsx
sed -i 's/images\[/images: [/g' src/data/expandedServices.jsx

echo "Fixed missing colons in expandedServices.jsx"