export default {
<<<<<<< HEAD
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@/components/(.*)$": "<rootDir>/app/components/$1",
    "^@/content/(.*)$": "<rootDir>/content/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: [
    "<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)",
    "<rootDir>/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/index.{ts,tsx}",
    "!app/**/*.d.ts",
=======
  // TODO: Add properties
}
  // TODO: Add properties
}
  testEnvironment: 'jsdom','
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],'
  moduleNameMapper: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    '^@/(.*)$': '<rootDir>/app/$1','
    '^@/components/(.*)$': '<rootDir>/app/components/$1','
    '^@/pages/(.*)$': '<rootDir>/app/$1','
    '^@/utils/(.*)$': '<rootDir>/utils/$1','
    '^@/types/(.*)$': '<rootDir>/types/$1','
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1','
    '^@/config/(.*)$': '<rootDir>/config/$1','
    '^@/data/(.*)$': '<rootDir>/data/$1','
    '^@/content/(.*)$': '<rootDir>/content/$1''
  },
  transform: {
  // TODO: Add properties
}
  // TODO: Add properties
}
>>>>>>> origin/main
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', {'
      presets: [
  // TODO: Add items
]
  // TODO: Add items
]
        ['@babel/preset-env', { targets: { node: 'current' } }],'
        ['@babel/preset-react', { runtime: 'automatic' }],'
        '@babel/preset-typescript''
      ]
    }]

>>>>>>> origin/main
>>>>>>> origin/main
  },
  testMatch: [
  // TODO: Add items
]
  // TODO: Add items
]
    '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)','
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)''
  ],
  collectCoverageFrom: [
  // TODO: Add items
]
  // TODO: Add items
]
    'app/**/*.{ts,tsx}','
    '!app/**/*.d.ts','
    '!app/**/*.stories.{ts,tsx}','
    '!app/**/index.{ts,tsx}''
  ],
  coverageDirectory: 'coverage','
  coverageReporters: ['text', 'lcov', 'html'],'
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],'
  testPathIgnorePatterns: [
  // TODO: Add items
]
  // TODO: Add items
]
    '<rootDir>/node_modules/','
    '<rootDir>/dist/','
    '<rootDir>/.next/','
    '<rootDir>/out/''
>>>>>>> cursor/delete-records-a75e
  ],
  testPathIgnorePatterns: ["<rootDir>/out/", "<rootDir>/node_modules/"],
  transformIgnorePatterns: [
<<<<<<< HEAD
    "node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))",
  ],
=======
  // TODO: Add items
]
  // TODO: Add items
]
    'node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))''
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],'
  globals: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    'ts-jest': {'
      useESM: true
    }
  }
>>>>>>> cursor/delete-records-a75e
};
