import { useContext  } from 'react';
import { AuthContext  } from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';

export const useAuth = (): AuthContextType => {
import {useContext} from 'react';
import {AuthContext} from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';
export const useAuth = (): AuthContextType => {;
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  // TypeScript can sometimes lose the narrowing performed above and
  // assume `context` might still be `{}`. Casting here ensures the
  // returned value matches `AuthContextType` exactly.
  return context as AuthContextType
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useContext } from 'react',;
import { AuthContext } from '@/context/auth/AuthContext',;
import type { AuthContextType } from '@/types/auth',;
export const useAuth = (): AuthContextType => {;
  const context = useContext(AuthContext);
  if (context === undefined) {;
    throw new Error('useAuth must be used within an AuthProvider');

  }
  // TypeScript can sometimes lose the narrowing performed above and;
  // assume `context` might still be `{}`. Casting here ensures the;
  // returned value matches `AuthContextType` exactly.;
  return context as AuthContextType;
<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
