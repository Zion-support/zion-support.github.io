#!/bin/bash

# Add all changes
git add .

# Commit changes
git commit -m "Fix syntax errors in service files

- Fixed malformed JSX syntax in AIHealthcare.tsx
- Fixed malformed JSX syntax in AIHealthcareRevenueCycle.tsx  
- Fixed malformed JSX syntax in AIIdentityManagement.tsx
- Fixed malformed JSX syntax in AIIncidentResponse.tsx
- Fixed malformed JSX syntax in AIInsurance.tsx
- Removed duplicate content and malformed syntax
- Added proper React component structure
- Added proper TypeScript types and imports"

# Push to current branch
git push origin cursor/fix-syntax-push-and-merge-to-main-1bad

# Switch to main branch
git checkout main

# Merge the fix branch
git merge cursor/fix-syntax-push-and-merge-to-main-1bad

# Push to main
git push origin main

echo "Successfully fixed syntax errors and merged to main branch"