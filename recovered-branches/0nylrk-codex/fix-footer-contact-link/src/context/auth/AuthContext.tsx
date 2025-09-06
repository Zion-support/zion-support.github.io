
import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
// default value so consumers still get some level of type safety.
<<<<<<< HEAD
<<<<<<< HEAD
export const AuthContext = null;
=======
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
