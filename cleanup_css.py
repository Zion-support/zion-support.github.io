#!/usr/bin/env python3
"""
Script to clean up duplicate CSS keyframes and optimize the stylesheet
"""
import re

def cleanup_css():
    """Clean up duplicate CSS keyframes and optimize the stylesheet"""
    css_file = '/workspace/app/globals.css'
    
    with open(css_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all keyframe definitions
    keyframe_pattern = r'@keyframes\s+(\w+)\s*\{[^}]*\}'
    keyframes = re.findall(keyframe_pattern, content, re.DOTALL)
    
    # Keep track of unique keyframes
    unique_keyframes = {}
    keyframe_definitions = re.finditer(keyframe_pattern, content, re.DOTALL)
    
    for match in keyframe_definitions:
        name = match.group(1)
        definition = match.group(0)
        
        # Keep the first occurrence of each keyframe
        if name not in unique_keyframes:
            unique_keyframes[name] = definition
    
    # Remove all keyframe definitions
    content_without_keyframes = re.sub(keyframe_pattern, '', content, flags=re.DOTALL)
    
    # Add back unique keyframes
    keyframes_section = '\n\n'.join(unique_keyframes.values())
    
    # Find where to insert keyframes (after the root variables)
    root_end = content_without_keyframes.find('}')
    if root_end != -1:
        # Find the end of the :root block
        root_end = content_without_keyframes.find('\n', root_end) + 1
        new_content = (
            content_without_keyframes[:root_end] + 
            '\n' + keyframes_section + '\n' + 
            content_without_keyframes[root_end:]
        )
    else:
        new_content = keyframes_section + '\n\n' + content_without_keyframes
    
    # Clean up extra whitespace
    new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
    
    with open(css_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Cleaned up CSS file. Found {len(keyframes)} keyframe definitions, kept {len(unique_keyframes)} unique ones.")
    print(f"Removed {len(keyframes) - len(unique_keyframes)} duplicate keyframes.")

if __name__ == "__main__":
    cleanup_css()