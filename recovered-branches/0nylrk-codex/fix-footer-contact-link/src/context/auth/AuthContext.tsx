<<<<<<< HEAD
import { createContext } from 'react';
import type { AuthContextType } from '@/types/auth';

// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
// default value so consumers still get some level of type safety.
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
=======
 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Create the AuthContext and export it. We avoid providing a generic //parameter to `createContext` because in environments where the React //type definitions are unavailable, calling an untyped function with type //arguments causes a TypeScript error (TS2347) . Instead, we cast the // default value so consumers still get some level of type safety. 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
