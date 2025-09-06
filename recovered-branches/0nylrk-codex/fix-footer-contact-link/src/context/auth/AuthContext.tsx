

<<<<<<< HEAD
=======
import {createContext} from "react";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { AuthContextType } from "@/types/auth";

import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the

<<<<<<< HEAD
export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
<<<<<<< HEAD
=======
=======

// default value so consumers still get some level of type safety.

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

// default value so consumers still get some level of type safety.;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
