import fs from 'fs';

// Read the file
let content = fs.readFileSync('/workspace/app/data/services.ts', 'utf8');

// Fix all malformed object syntax patterns
// Pattern 1: users: 'X',}freeTrial: 'Y',},
content = content.replace(/users: ([^,]+),}freeTrial: ([^,]+),},/g, (match, users, freeTrial) => {
  return `users: ${users},\n    freeTrial: ${freeTrial}\n  },`;
});

// Pattern 2: users: 'X',}freeTrial: 'Y',}
content = content.replace(/users: ([^,]+),}freeTrial: ([^,]+),}/g, (match, users, freeTrial) => {
  return `users: ${users},\n    freeTrial: ${freeTrial}\n  }`;
});

// Pattern 3: users: 'X',}freeTrial: 'Y',} (without comma at end)
content = content.replace(/users: ([^,]+),}freeTrial: ([^,]+),}(?!,)/g, (match, users, freeTrial) => {
  return `users: ${users},\n    freeTrial: ${freeTrial}\n  }`;
});

// Write the fixed content back
fs.writeFileSync('/workspace/app/data/services.ts', content);

console.log('Fixed services.ts file with comprehensive patterns');