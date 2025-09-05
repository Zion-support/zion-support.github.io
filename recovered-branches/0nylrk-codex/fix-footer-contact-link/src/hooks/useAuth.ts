<<<<<<< HEAD
import { useContext } from 'react',;
import { AuthContext } from '@/context/auth/AuthContext',;
import type { AuthContextType } from '@/types/auth',;
;
export const useAuth = ():AuthContextType => {;
  const context = useContext(AuthContext),;
  if (context === undefined) {;
    throw new Error('useAuth must be used within an AuthProvider'),;
  }
  // TypeScript can sometimes lose the narrowing performed above and;
  // assume `context` might still be `{}`. Casting here ensures the;
  // returned value matches `AuthContextType` exactly.;
  return context as AuthContextType,;
},;
=======
import { useContext } from 'react',
import { AuthContext } from '@/context/auth/AuthContext',
import type { AuthContextType } from '@/types/auth',
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext),
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }  // TypeScript can sometimes lose the narrowing performed above and
  // assume `context` might still be `{}`. Casting here ensures the
  // returned value matches `AuthContextType` exactly.
  return context as AuthContextType
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
