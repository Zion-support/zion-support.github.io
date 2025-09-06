<<<<<<< HEAD
<<<<<<< HEAD
import { useContext  } from 'react';
import { AuthContext  } from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';

export const useAuth = (): AuthContextType => {
=======
import {useContext} from 'react';
import {AuthContext} from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';
export const useAuth = (): AuthContextType => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  // TypeScript can sometimes lose the narrowing performed above and
  // assume `context` might still be `{}`. Casting here ensures the
  // returned value matches `AuthContextType` exactly.
  return context as AuthContextType
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
