
<<<<<<< HEAD
<<<<<<< HEAD
import { createContext } from "react";
=======
import {createContext} from "react";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { AuthContextType } from "@/types/auth";
=======
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
<<<<<<< HEAD
=======
// default value so consumers still get some level of type safety.
<<<<<<< HEAD
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
=======

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
// default value so consumers still get some level of type safety.;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
