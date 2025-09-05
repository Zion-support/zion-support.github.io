
<<<<<<< HEAD
<<<<<<< HEAD
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
=======
import { createContext } from &quot;react&quot;;
import type { AuthContextType } from &quot;@/types/auth&quot;;
=======
import type {_AuthContextType} from "@/types/auth";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (_TS2347). Instead, we cast the
// default value so consumers still get some level of type safety.
<<<<<<< HEAD
export const AuthContext = createContext<AuthContextType | undefined>(undefined),
=======
export const _AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
