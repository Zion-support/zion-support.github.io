import fs from "fs";

// Read the file
let content = fs.readFileSync("/workspace/app/data/services.ts", "utf8");

// Count how many patterns we need to fix
const pattern1 = /users: ([^,]+),}freeTrial: ([^,]+),},/g;
const pattern2 = /users: ([^,]+),}freeTrial: ([^,]+),}/g;

let matches1 = [...content.matchAll(pattern1)];
let matches2 = [...content.matchAll(pattern2)];

console.log(`Found ${matches1.length} matches for pattern 1`);
console.log(`Found ${matches2.length} matches for pattern 2`);

// Fix pattern 1: users: 'X',}freeTrial: 'Y',},
content = content.replace(
  /users: ([^,]+),}freeTrial: ([^,]+),},/g,
  (match, users, freeTrial) => {
    return `users: ${users},\n    freeTrial: ${freeTrial}\n  },`;
  },
);

// Fix pattern 2: users: 'X',}freeTrial: 'Y',}
content = content.replace(
  /users: ([^,]+),}freeTrial: ([^,]+),}/g,
  (match, users, freeTrial) => {
    return `users: ${users},\n    freeTrial: ${freeTrial}\n  }`;
  },
);

// Write the fixed content back
fs.writeFileSync("/workspace/app/data/services.ts", content);

console.log("Fixed services.ts file");
