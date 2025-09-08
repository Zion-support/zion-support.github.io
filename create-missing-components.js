import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of missing UI components that are commonly used
const missingComponents = [
  'select',
  'tabs', 
  'badge',
  'skeleton',
  'input',
  'button',
  'dialog',
  'dropdown-menu',
  'popover',
  'tooltip',
  'alert-dialog',
  'checkbox',
  'radio-group',
  'switch',
  'slider',
  'progress',
  'separator',
  'scroll-area',
  'sheet',
  'table',
  'form',
  'label',
  'alert',
  'accordion',
  'aspect-ratio',
  'calendar',
  'carousel',
  'collapsible',
  'command',
  'context-menu',
  'hover-card',
  'menubar',
  'navigation-menu',
  'pagination',
  'resizable',
  'skeleton',
  'sonner',
  'toast',
  'toggle',
  'toggle-group'
];

// Create a basic component template
function createComponentTemplate(componentName) {
  const className = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  
  return `import * as React from "react"
import { cn } from "@/lib/utils"

const ${className} = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
${className}.displayName = "${className}"

export { ${className} }
`;
}

// Create the components directory if it doesn't exist
const uiDir = path.join(__dirname, 'src', 'components', 'ui');
if (!fs.existsSync(uiDir)) {
  fs.mkdirSync(uiDir, { recursive: true });
}

// Create all missing components
missingComponents.forEach(componentName => {
  const filePath = path.join(uiDir, `${componentName}.tsx`);
  
  // Only create if it doesn't exist
  if (!fs.existsSync(filePath)) {
    const content = createComponentTemplate(componentName);
    fs.writeFileSync(filePath, content);
    console.log(`Created ${componentName}.tsx`);
  } else {
    console.log(`${componentName}.tsx already exists`);
  }
});

console.log('All missing components created!');