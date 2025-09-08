}}}
<<<<<<< HEAD
}
=======
}}};
}}}
;
}}}
;
import React from 'react';

interface Jest.configProps {
  // Add props here as needed
}

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: [,
  <rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom,
  moduleNameMapper: {,
  ^@/(.*)$': '<rootDir>/$1
  },
  collectCoverageFrom: [,
  components/**/*.{js,jsx,ts,tsx},pages/**/*.{js,jsx,ts,tsx},utils/**/*.{js,jsx,ts,tsx},!**/*.d.ts',!**/node_modules/**
  '
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/,<rootDir>/node_modules/',<rootDir>/out/
  ',<rootDir>/__tests__.disabled/',<rootDir>/tests.disabled/
  ',<rootDir>/src_backup/',<rootDir>/test.disabled/
  ',<rootDir>/plugins.disabled/',<rootDir>/supabase.disabled/
  ',<rootDir>/dao/',<rootDir>/pages.disabled/'
  ]
};
export default function Jest.config({ }: Jest.configProps) {
  return (
    <div>
      <h1>Jest.config</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
}
}
}
}
>>>>>>> origin/main
}}}
}}};
}}}
;
}}}
;
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/main
