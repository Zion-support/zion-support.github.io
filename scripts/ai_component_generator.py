#!/usr/bin/env python3
"""
AI Component Generator for Next.js
Generates new components from text descriptions using AI.
Usage: python3 scripts/ai_component_generator.py "A responsive hero section with CTA button"
"""

import sys
import os
import json
from datetime import datetime

TEMPLATES = {
    "react_component": """'use client';

import React from 'react';

interface {name}Props {{
  className?: string;
  children?: React.ReactNode;
}}

export default function {name}({{ className, children }}: {name}Props) {{
  return (
    <div className={{className}}>
      {children}
    </div>
  );
}}
""",
    "next_page": """import {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{title}',
  description: '{description}',
}};

export default function {name}Page() {{
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </main>
  );
}}
""",
    "api_route": """import {{ NextRequest, NextResponse }} from 'next/server';

export async function GET(request: NextRequest) {{
  return NextResponse.json({{ message: '{name} API endpoint' }});
}}

export async function POST(request: NextRequest) {{
  try {{
    const body = await request.json();
    return NextResponse.json({{ success: true, data: body }});
  }} catch (error) {{
    return NextResponse.json({{ error: 'Invalid request' }}, {{ status: 400 }});
  }}
}}
""",
    "test_file": """import {{ render, screen }} from '@testing-library/react';
import {name} from './{import_path}';

describe('{name}', () => {{
  it('renders without crashing', () => {{
    render(<{name} />);
    expect(screenInTheDocument()).toBeTruthy();
  }});
}});
""",
}

def generate_component(name: str, component_type: str = "react_component", **kwargs) -> str:
    template = TEMPLATES.get(component_type, TEMPLATES["react_component"])
    
    replacements = {
        "name": name,
        "title": kwargs.get("title", name.replace("-", " ").title()),
        "description": kwargs.get("description", f"{name} page for Zion Tech Group"),
        "import_path": kwargs.get("import_path", f"./{name}"),
    }
    
    result = template
    for key, value in replacements.items():
        result = result.replace(f"{{{key}}}", value)
    
    return result

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 ai_component_generator.py <component_name> [type] [title] [description]")
        print(f"Types: {', '.join(TEMPLATES.keys())}")
        sys.exit(1)
    
    name = sys.argv[1]
    component_type = sys.argv[2] if len(sys.argv) > 2 else "react_component"
    title = sys.argv[3] if len(sys.argv) > 3 else name.replace("-", " ").title()
    description = sys.argv[4] if len(sys.argv) > 4 else f"{name} - Zion Tech Group"
    
    code = generate_component(name, component_type, title=title, description=description)
    
    # Determine output path
    type_dirs = {
        "react_component": "app/components",
        "next_page": "app/pages",
        "api_route": "app/api",
        "test_file": "__tests__",
    }
    
    ext = ".tsx" if component_type != "api_route" else ".ts"
    output_dir = type_dirs.get(component_type, "app/components")
    output_path = os.path.join(output_dir, f"{name}{ext}")
    
    print(f"Generated {component_type}: {name}")
    print(f"Would write to: {output_path}")
    print("\n--- CODE ---\n")
    print(code)
    
    # Save to file if --save flag
    if "--save" in sys.argv:
        os.makedirs(output_dir, exist_ok=True)
        with open(output_path, "w") as f:
            f.write(code)
        print(f"\n✅ Saved to {output_path}")

if __name__ == "__main__":
    main()
