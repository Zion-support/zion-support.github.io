import type {_AuthContextType} from '@/types/auth';

export const _useAuth = (): AuthContextType => {_const _context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');}
  // TypeScript can sometimes lose the narrowing performed above and
  // assume `context` might still be `{}`. Casting here ensures the
  // returned value matches `AuthContextType` exactly.
  return context as AuthContextType;
};
