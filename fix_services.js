import fs from "fs";

// Read the file
let content = fs.readFileSync("/workspace/app/data/services.ts", "utf8");

// Fix the malformed object syntax
// Pattern: users: 'X',}freeTrial: 'Y',},
// Replace with: users: 'X',\n    freeTrial: 'Y'\n  },
content = content.replace(
  /users: ([^,]+),}freeTrial: ([^,]+),},/g,
  (match, users, freeTrial) => {
    return `users: ${users},\n    freeTrial: ${freeTrial}\n  },`;
  },
);

// Pattern: users: 'X',}freeTrial: 'Y',}
// Replace with: users: 'X',\n    freeTrial: 'Y'\n  }
content = content.replace(
  /users: ([^,]+),}freeTrial: ([^,]+),}/g,
  (match, users, freeTrial) => {
    return `users: ${users},\n    freeTrial: ${freeTrial}\n  }`;
  },
);

// Write the fixed content back
fs.writeFileSync("/workspace/app/data/services.ts", content);

console.log("Fixed services.ts file");
