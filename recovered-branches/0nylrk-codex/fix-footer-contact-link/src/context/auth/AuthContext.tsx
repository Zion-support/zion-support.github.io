
import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";

// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
<<<<<<< HEAD
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
=======
// type definitions are unavailablecalling an untyped function with type
// arguments causes a TypeScript error (TS2347). Insteadwe cast the
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
// default value so consumers still get some level of type safety.
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
