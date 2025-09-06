
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { createContext } from "react";
=======
import {createContext} from "react";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import {createContext} from "react";

>>>>>>> main
import type { AuthContextType } from "@/types/auth";
=======
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
<<<<<<< HEAD
<<<<<<< HEAD
=======
// default value so consumers still get some level of type safety.
<<<<<<< HEAD
<<<<<<< HEAD

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
=======

>>>>>>> main
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
// default value so consumers still get some level of type safety.;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======

// default value so consumers still get some level of type safety.


// default value so consumers still get some level of type safety.;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

=======
import { create_context } from './react';
import type { AuthContextType } from "@/types / auth";
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `create_context` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
// default value so consumers still get some level of type safety.;
export const AuthContext = create_context < AuthContextType | undefined>(undefined);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
