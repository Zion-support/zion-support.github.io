#!/bin/bash

echo "Fixing syntax errors in components..."

# Fix duplicate "use client" directives
find components -name "*.tsx" -exec sed -i 's/"use client";\s*'"'"'use client'"'"';/'"'"'use client'"'"';/g' {} \;

# Fix malformed React imports
find components -name "*.tsx" -exec sed -i 's/import React{ useStateuseEffect }/import React, { useState, useEffect }/g' {} \;

# Fix malformed motion imports
find components -name "*.tsx" -exec sed -i 's/import { motionAnimatePresence }/import { motion, AnimatePresence }/g' {} \;

# Fix missing commas in object properties
find components -name "*.tsx" -exec sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\)'\''\([a-zA-Z_][a-zA-Z0-9_]*\)/'\''\1'\'', '\''\2/g' {} \;

# Fix missing commas in icon imports
find components -name "*.tsx" -exec sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\)\n\([a-zA-Z_][a-zA-Z0-9_]*\)/\1,\n\2/g' {} \;

echo "Syntax errors fixed!"