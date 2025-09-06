
<<<<<<< HEAD
import { createContext } from "react";
import {createContext} from "react";
=======

import {createContext} from "react";

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
<<<<<<< HEAD
// default value so consumers still get some level of type safety.

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
// default value so consumers still get some level of type safety.;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
