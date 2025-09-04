const fs = require('fs');

// Read the file
let content = fs.readFileSync('pages/micro-saas.tsx', 'utf8');

// Fix missing commas in benefits arrays
// Look for patterns where a string is followed by another string without a comma
content = content.replace(
  /(\s+'[^']+'\s*)\n\s*(\s+'[^']+'\s*)/g,
  '$1,\n$2'
);

// Fix missing commas before closing brackets in benefits arrays
content = content.replace(
  /(\s+'[^']+'\s*)\n\s*(\s+\],)/g,
  '$1,\n$2'
);

// Fix missing commas before icon declarations
content = content.replace(
  /(\s+'[^']+'\s*)\n\s*(\s+icon:\s*[A-Za-z]+,)/g,
  '$1,\n$2'
);

// Fix missing closing brackets and commas before new objects
content = content.replace(
  /(\s+'[^']+'\s*)\n\s*(\s+icon:\s*[A-Za-z]+,)/g,
  (match, text, icon) => {
    // Extract category from the text
    let category = 'General';
    
    if (text.includes('AI') || text.includes('Machine Learning')) {
      category = 'AI & Machine Learning';
    } else if (text.includes('Email') || text.includes('Marketing')) {
      category = 'Marketing';
    } else if (text.includes('Security') || text.includes('Cybersecurity')) {
      category = 'Security';
    } else if (text.includes('E-commerce') || text.includes('Return')) {
      category = 'E-commerce';
    } else if (text.includes('Event') || text.includes('Calendar')) {
      category = 'Event Management';
    } else if (text.includes('Video') || text.includes('Content')) {
      category = 'Content Creation';
    } else if (text.includes('Support') || text.includes('Helpdesk')) {
      category = 'Customer Support';
    } else if (text.includes('Lead') || text.includes('Scoring')) {
      category = 'Sales';
    } else if (text.includes('Healthcare') || text.includes('Hospital')) {
      category = 'Healthcare';
    } else if (text.includes('Talent') || text.includes('HR')) {
      category = 'Human Resources';
    } else if (text.includes('Workflow') || text.includes('Automation')) {
      category = 'Automation';
    } else if (text.includes('Quantum') || text.includes('Computing')) {
      category = 'Advanced Computing';
    }
    
    return `${text}
      ],
      category: '${category}'
    },
    {
      ${icon}`;
  }
);

// Write the fixed content back
fs.writeFileSync('pages/micro-saas.tsx', content);

console.log('Fixed all syntax errors in micro-saas.tsx');