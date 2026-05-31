#!/usr/bin/env python3
"""Add missing href and industry fields to services that lack them"""
import re

path = "/data/data/com.termux/files/home/zion-support.github.io/app/data/servicesData.ts"

with open(path, 'r') as f:
    content = f.read()

# Find all service blocks and add missing fields
def fix_service_blocks(text):
    # Pattern to match service objects
    pattern = r'(\{\s*\n\s*id:\s*"([^"]+)",.*?category:\s*"([^"]+)",\s*\n\s*(popular:\s*(?:true|false)\s*,?\s*\n\s*)?)(\},\s*\n\s*(?=\{|\]))'
    
    def replacer(m):
        prefix = m.group(1)
        service_id = m.group(2)
        category = m.group(3)
        popular_part = m.group(4) or ""
        
        # Check if href is already present
        if 'href:' in prefix:
            return m.group(0)
        
        # Generate href from id
        href = f"/services/{service_id}"
        
        # Determine industry based on category/id
        industry_map = {
            "ai": "Technology", "saas": "Technology", "it": "Technology",
            "automation": "Technology"
        }
        industry = industry_map.get(category, "Technology")
        
        # Add href and industry before the closing
        insert = f'    href: "{href}",\n    industry: "{industry}",\n'
        
        return prefix + insert + "  },\n\n"
    
    # Better approach: find each service block and check/fixed individually
    # Split by service boundaries
    blocks = re.split(r'(\{\s*\n\s*id:\s*")', text)
    
    result = blocks[0]  # Everything before first service
    i = 1
    fixed_count = 0
    while i < len(blocks):
        if i + 1 < len(blocks):
            # Find the id
            id_match = re.match(r'^([^"]+)"', blocks[i+1])
            if id_match:
                service_id = id_match.group(1)
                # Find the end of this service block (look for category + closing)
                rest = blocks[i+1]
                # Find category line
                cat_match = re.search(r'category:\s*"([^"]+)"', rest)
                if cat_match and 'href:' not in rest[:cat_match.end()+100]:
                    # Need to add href and industry
                    category = cat_match.group(1)
                    industry_map = {"ai":"Technology","saas":"Technology","it":"Technology","automation":"Technology"}
                    industry = industry_map.get(category,"Technology")
                    
                    # Find where to insert: after category line, before popular or closing
                    insert_after = cat_match.end()
                    # Find the end of the category line
                    line_end = rest.find('\n', insert_after)
                    if line_end >= 0:
                        # Insert href and industry after category line
                        new_rest = rest[:line_end+1] + f'    href: "/services/{service_id}",\n    industry: "{industry}",\n' + rest[line_end+1:]
                        blocks[i+1] = new_rest
                        fixed_count += 1
        i += 2
    
    result = "".join(blocks)
    print(f"Fixed {fixed_count} service blocks")
    return result

new_content = fix_service_blocks(content)

with open(path, 'w') as f:
    f.write(new_content)

# Verify
with open(path, 'r') as f:
    updated = f.read()

href_count = updated.count('href:')
industry_count = updated.count('industry:')
print(f"Total href: {href_count}, Total industry: {industry_count}")
