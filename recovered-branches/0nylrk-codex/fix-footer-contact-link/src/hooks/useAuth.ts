<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useContext  } from 'react';
import { AuthContext  } from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';

export const useAuth = (): AuthContextType => {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import {useContext} from 'react';
import {AuthContext} from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';
export const useAuth = (): AuthContextType => {;
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  // TypeScript can sometimes lose the narrowing performed above and
  // assume `context` might still be `{}`. Casting here ensures the
  // returned value matches `AuthContextType` exactly.
  return context as AuthContextType
<<<<<<< HEAD

import {useContext} from 'react';
import {AuthContext} from '@/context / auth / AuthContext';
import type { AuthContextType } from '@/types / auth';
export const use_auth = (): AuthContextType => {
  const context = useContext (AuthContext);
  // Check condition
if ( {) {
  $2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
    throw new Error ('use_auth must be used within an AuthProvider');
=======
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
