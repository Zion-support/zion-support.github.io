
=======

import {useContext} from 'react';
import {AuthContext} from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';
export const useAuth = (): AuthContextType => {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  // TypeScript can sometimes lose the narrowing performed above and
  // assume `context` might still be `{}`. Casting here ensures the
  // returned value matches `AuthContextType` exactly.
  return context as AuthContextType

<<<<<<< HEAD
};
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
