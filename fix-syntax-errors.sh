#!/bin/bash

# Fix common syntax errors in TypeScript/React files
echo "Fixing syntax errors in TypeScript/React files..."

# Find and fix files with unterminated string literals
find app -name "*.tsx" -type f -exec sed -i "s/import React from 'react;/import React from 'react';/g" {} \;
find app -name "*.tsx" -type f -exec sed -i "s/import { Helmet } from 'react-helmet-async;/import { Helmet } from 'react-helmet-async';/g" {} \;
find app -name "*.tsx" -type f -exec sed -i "s/import { Link } from 'react-router-dom;/import { Link } from 'react-router-dom';/g" {} \;
find app -name "*.tsx" -type f -exec sed -i "s/import { useState } from 'react;/import { useState } from 'react';/g" {} \;
find app -name "*.tsx" -type f -exec sed -i "s/import { useEffect } from 'react;/import { useEffect } from 'react';/g" {} \;
find app -name "*.tsx" -type f -exec sed -i "s/import { Component } from 'react;/import { Component } from 'react';/g" {} \;

# Fix other common import issues
find app -name "*.tsx" -type f -exec sed -i "s/from 'lucide-react;/from 'lucide-react';/g" {} \;
find app -name "*.tsx" -type f -exec sed -i "s/from '@heroicons\/react\/24\/outline;/from '@heroicons\/react\/24\/outline';/g" {} \;
find app -name "*.tsx" -type f -exec sed -i "s/from '@heroicons\/react\/24\/solid;/from '@heroicons\/react\/24\/solid';/g" {} \;

# Fix common syntax issues
find app -name "*.tsx" -type f -exec sed -i "s/const.*: React.FC = () => {;/const Component: React.FC = () => {/g" {} \;
find app -name "*.tsx" -type f -exec sed -i "s/export default.*;/export default Component;/g" {} \;

echo "Syntax errors fixed!"