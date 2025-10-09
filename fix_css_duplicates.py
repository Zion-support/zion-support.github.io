#!/usr/bin/env python3
"""
Script to fix duplicate CSS keyframes and optimize the stylesheet
"""
import re

def fix_css_duplicates():
    """Fix duplicate CSS keyframes and optimize the stylesheet"""
    css_file = '/workspace/app/globals.css'
    
    with open(css_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split content into lines for easier processing
    lines = content.split('\n')
    new_lines = []
    seen_keyframes = set()
    in_keyframe = False
    current_keyframe = []
    keyframe_name = None
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if we're starting a new keyframe
        if line.strip().startswith('@keyframes'):
            # If we were in a keyframe, save it if it's unique
            if in_keyframe and keyframe_name and keyframe_name not in seen_keyframes:
                new_lines.extend(current_keyframe)
                seen_keyframes.add(keyframe_name)
            elif in_keyframe and keyframe_name and keyframe_name in seen_keyframes:
                # Skip this duplicate keyframe
                pass
            
            # Start new keyframe
            keyframe_name = line.strip().split()[1]
            current_keyframe = [line]
            in_keyframe = True
            
        elif in_keyframe:
            current_keyframe.append(line)
            # Check if keyframe ends
            if line.strip() == '}':
                if keyframe_name not in seen_keyframes:
                    new_lines.extend(current_keyframe)
                    seen_keyframes.add(keyframe_name)
                # Reset for next keyframe
                in_keyframe = False
                current_keyframe = []
                keyframe_name = None
        else:
            new_lines.append(line)
        
        i += 1
    
    # Handle the last keyframe if we were in one
    if in_keyframe and keyframe_name and keyframe_name not in seen_keyframes:
        new_lines.extend(current_keyframe)
    
    # Join lines and clean up extra whitespace
    new_content = '\n'.join(new_lines)
    new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
    
    with open(css_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Fixed CSS duplicates. Kept {len(seen_keyframes)} unique keyframes.")

if __name__ == "__main__":
    fix_css_duplicates()