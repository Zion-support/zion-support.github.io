const fs = require('fs');

// Read the file
let content = fs.readFileSync('pages/micro-saas.tsx', 'utf8');

// Fix patterns where icon: appears without proper object structure
// Look for patterns like:
// 'some text'
// 
// icon: SomeIcon,
// and replace with:
// 'some text'
// ],
// category: 'SomeCategory'
// },
// {
// icon: SomeIcon,

// This regex finds the pattern and fixes it
content = content.replace(
  /(\s+'[^']+'\s*)\n\s*\n\s*icon:\s*([A-Za-z]+),/g,
  (match, text, icon) => {
    // Extract the last word from the text to determine category
    const lastLine = text.trim();
    let category = 'General';
    
    if (lastLine.includes('AI') || lastLine.includes('Machine Learning')) {
      category = 'AI & Machine Learning';
    } else if (lastLine.includes('Email') || lastLine.includes('Marketing')) {
      category = 'Marketing';
    } else if (lastLine.includes('Security') || lastLine.includes('Cybersecurity')) {
      category = 'Security';
    } else if (lastLine.includes('E-commerce') || lastLine.includes('Return')) {
      category = 'E-commerce';
    } else if (lastLine.includes('Event') || lastLine.includes('Calendar')) {
      category = 'Event Management';
    } else if (lastLine.includes('Video') || lastLine.includes('Content')) {
      category = 'Content Creation';
    } else if (lastLine.includes('Support') || lastLine.includes('Helpdesk')) {
      category = 'Customer Support';
    } else if (lastLine.includes('Lead') || lastLine.includes('Scoring')) {
      category = 'Sales';
    } else if (lastLine.includes('Healthcare') || lastLine.includes('Hospital')) {
      category = 'Healthcare';
    } else if (lastLine.includes('Talent') || lastLine.includes('HR')) {
      category = 'Human Resources';
    } else if (lastLine.includes('Workflow') || lastLine.includes('Automation')) {
      category = 'Automation';
    } else if (lastLine.includes('Quantum') || lastLine.includes('Computing')) {
      category = 'Advanced Computing';
    }
    
    return `${text}
      ],
      category: '${category}'
    },
    {
      icon: ${icon},`;
  }
);

// Write the fixed content back
fs.writeFileSync('pages/micro-saas.tsx', content);

console.log('Fixed syntax errors in micro-saas.tsx');