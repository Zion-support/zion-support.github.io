#!/usr/bin/env python3
import re

# Read the file
with open('app/components/AdvancedSEOOptimizer.tsx', 'r') as f:
    content = f.read()

# Fix the trackPageView call to include keywords
old_call = """    trackPageView({
      title: config.title,
      description: config.description,
      url: config.canonicalUrl,
      canonicalUrl: config.canonicalUrl,
    });"""

new_call = """    trackPageView({
      title: config.title,
      description: config.description,
      keywords: config.keywords,
      url: config.canonicalUrl,
      canonicalUrl: config.canonicalUrl,
    });"""

content = content.replace(old_call, new_call)

# Write the file back
with open('app/components/AdvancedSEOOptimizer.tsx', 'w') as f:
    f.write(content)

print("Fixed AdvancedSEOOptimizer.tsx")