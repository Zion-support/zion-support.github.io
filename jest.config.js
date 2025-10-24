import { TextEncoder, TextDecoder } from 'util";"'

export default {""
  preset: 'ts-jest","'"
  testEnvironment: 'jsdom","'"
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts"],
  globals: {
    TextEncoder,
    TextDecoder,"
  },"
  moduleNameMapper: {"'"
    '^@/(.*)$': '<rootDir>/app/$1","'"
    '^@/components/(.*)$': '<rootDir>/app/components/$1","'"
    '^@/pages/(.*)$': '<rootDir>/app/$1","'"
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1","'"
    '^@/types/(.*)$': '<rootDir>/app/types/$1","'"
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1","'"
    '^@/config/(.*)$': '<rootDir>/app/config/$1","'"
    '^@/data/(.*)$': '<rootDir>/app/data/$1","'"
    '^@/content/(.*)$': '<rootDir>/app/content/$1","'"
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy","'"
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub"
  },"
  transform: {"'"
    '^.+\\.(ts|tsx)$': ['ts-jest", {"
      tsconfig: {"'"
        jsx: 'react-jsx"
      }
    }]"
  },"
  testMatch: ["'"
    '<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)","'"
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)","'"
    '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)","'"
    '<rootDir>/**/*.(test|spec).(ts|tsx|js|jsx)","'"
    '!src/**/*.d.ts","'"
    '!src/setupTests.ts"
  ],"'"
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json"],"
  transformIgnorePatterns: ["'"
    'node_modules/(?!(.*\\.mjs$))"
  ]"
};"'"
    '^@/pages/(.*)$': '<rootDir>/app/$1',;
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',;
    '^@/types/(.*)$': '<rootDir>/app/types/$1',;
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',;
    '^@/config/(.*)$': '<rootDir>/app/config/$1',;
    '^@/data/(.*)$': '<rootDir>/app/data/$1',;
    '^@/content/(.*)$': '<rootDir>/app/content/$1',;
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',;
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub'
<<<<<<< HEAD;"
  }"
transform: "{";'"
    '^.+\\.(ts|tsx)$': ['ts-jest'",{;"
tsconfig: "{;'"
jsx: 'react-jsx'"
      "}
    }];"
  }"
testMatch: "[";'"
    '<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)'",'<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',;
=======;
  },;
  transform: {;
    '^.+\\.(ts|tsx)$': ['ts-jest', {;
      tsconfig: {;
        jsx: 'react-jsx'
      }
    }];
  },;
  testMatch: [;
    '<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)',;
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',;
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81;
    '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)',;
    '<rootDir>/**/*.(test|spec).(ts|tsx|js|jsx)',;
    '!src/**/*.d.ts',;
    '!src/setupTests.ts'
<<<<<<< HEAD;"
  ],;";'"
moduleFileExtensions: "['ts'",'tsx', 'js', 'jsx', 'json'],;"
transformIgnorePatterns: "[;
    'node_modules/(?!(.*\\.mjs$))'
  ]"
"}
=======;
  ],;
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],;
  transformIgnorePatterns: [;
    'node_modules/(?!(.*\\.mjs$))'
  ];
}
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81;"
";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
