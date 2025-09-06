#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const hooksDir = './hooks';

// List of hook files that need to be fixed
const hookFiles = [
  'useApi.ts',
  'useAutoTranslate.ts', 
  'useCurrentUser.ts'
];

// Basic hook template
const createHookTemplate = (hookName, content) => `import { useState, useEffect, useCallback } from 'react';

${content}

export default ${hookName};`;

// Hook contents
const hookContents = {
  'useApi.ts': `interface UseApiOptions<T = unknown> {
  immediate?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export const useApi = <T = unknown>(
  apiFunction: (...args: unknown[]) => Promise<T>,
  options: UseApiOptions<T> = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (...args: unknown[]) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      options.onError?.(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [apiFunction, options]);

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, [execute, options.immediate]);

  return { data, loading, error, execute };
};`,

  'useAutoTranslate.ts': `interface UseAutoTranslateOptions {
  sourceLanguage?: string;
  targetLanguage?: string;
  onTranslate?: (text: string, translatedText: string) => void;
}

export const useAutoTranslate = (options: UseAutoTranslateOptions = {}) => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedText, setTranslatedText] = useState<string>('');

  const translate = useCallback(async (text: string) => {
    if (!text.trim()) return;

    setIsTranslating(true);
    try {
      // Mock translation - replace with actual translation service
      const mockTranslation = \`Translated: \${text}\`;
      setTranslatedText(mockTranslation);
      options.onTranslate?.(text, mockTranslation);
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [options]);

  return {
    isTranslating,
    translatedText,
    translate
  };
};`,

  'useCurrentUser.ts': `interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface UseCurrentUserOptions {
  onUserChange?: (user: User | null) => void;
}

export const useCurrentUser = (options: UseCurrentUserOptions = {}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Mock user loading - replace with actual authentication logic
    const loadUser = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Mock user data
        const mockUser: User = {
          id: '1',
          email: 'user@example.com',
          name: 'John Doe',
          avatar: 'https://via.placeholder.com/150'
        };
        setUser(mockUser);
        options.onUserChange?.(mockUser);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load user'));
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [options]);

  const logout = () => {
    setUser(null);
    options.onUserChange?.(null);
  };

  return {
    user,
    loading,
    error,
    logout
  };
};`
};

function fixHookFile(filename) {
  const filePath = path.join(hooksDir, filename);
  
  try {
    const content = hookContents[filename];
    if (content) {
      const hookName = filename.replace('.ts', '');
      const fullContent = createHookTemplate(hookName, content);
      fs.writeFileSync(filePath, fullContent);
      console.log(`✅ Fixed ${filename}`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filename}:`, error.message);
    return false;
  }
  
  return false;
}

function main() {
  console.log('🔧 Fixing hook files...');
  
  let fixedCount = 0;
  
  for (const filename of hookFiles) {
    if (fixHookFile(filename)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed ${fixedCount} hook files`);
  console.log('🎉 Hook fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixHookFile };