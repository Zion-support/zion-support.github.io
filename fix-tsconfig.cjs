const fs = require('fs');

// Create a clean tsconfig.json
const cleanTsconfig = `{
  "compilerOptions": {
    "target": "es5",
    "lib": [



    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [




  ],
  "exclude": [

  ]
}`;

// Write the clean tsconfig.json
fs.writeFileSync('tsconfig.json', cleanTsconfig);

console.log('Clean tsconfig.json created!');
