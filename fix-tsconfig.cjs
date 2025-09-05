const fs = require('fs');
<<<<<<< HEAD
;
// Create a clean tsconfig.json;
const cleanTsconfig = `{;
  "compilerOptions":{;
    "target":"es5",;
    "lib":[;
      "dom",;
      "dom.iterable",;
      "es6";
    ],;
    "allowJs":true,;
    "skipLibCheck":true,;
    "strict":true,;
    "forceConsistentCasingInFileNames":true,;
    "noEmit":true,;
    "esModuleInterop":true,;
    "module":"esnext",;
    "moduleResolution":"node",;
    "resolveJsonModule":true,;
    "isolatedModules":true,;
    "jsx":"preserve",;
    "incremental":true,;
    "plugins":[;
      {;
        "name":"next";
      }
    ],;
    "baseUrl":".",;
    "paths":{;
      "@/*":["./*"];
    }
  },;
  "include":[;
    "next-env.d.ts",;
    "**/*.ts",;
    "**/*.tsx",;
    ".next/types/**/*.ts";
  ],;
  "exclude":[;
    "node_modules";
  ];
=======

// Create a clean tsconfig.json
const cleanTsconfig = `{
  "compilerOptions": {
    "target": "es5";
    "lib": [
      "dom";
      "dom.iterable";
      "es6"
    ];
    "allowJs": true;
    "skipLibCheck": true;
    "strict": true;
    "forceConsistentCasingInFileNames": true;
    "noEmit": true;
    "esModuleInterop": true;
    "module": "esnext";
    "moduleResolution": "node";
    "resolveJsonModule": true;
    "isolatedModules": true;
    "jsx": "preserve";
    "incremental": true;
    "plugins": [
      {
        "name": "next"
      }
    ];
    "baseUrl": ".";
    "paths": {
      "@/*": ["./*"]
    }
  };
  "include": [
    "next-env.d.ts";
    "**/*.ts";
    "**/*.tsx";
    ".next/types/**/*.ts"
  ];
  "exclude": [
    "node_modules"
  ]
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}`;
;
// Write the clean tsconfig.json;
fs.writeFileSync('tsconfig.json', cleanTsconfig);
;
console.log('Clean tsconfig.json created!');
