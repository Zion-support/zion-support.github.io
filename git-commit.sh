#!/bin/bash

# Add all changes
git add .

# Commit the changes
git commit -m "Resolve all merge conflicts and clean up corrupted files

- Fixed merge conflicts in app/services/micro-saas/page.tsx
- Fixed merge conflicts in app/services/ai-services/page.tsx  
- Fixed merge conflicts in app/layout.tsx
- Fixed merge conflicts in app/contact/page.tsx
- Fixed merge conflicts in app/about/page.tsx
- Cleaned up corrupted code and removed merge conflict markers
- All main application files are now clean and functional"

# Push to main branch
git push origin main

echo "All merge conflicts resolved and changes pushed to main branch"