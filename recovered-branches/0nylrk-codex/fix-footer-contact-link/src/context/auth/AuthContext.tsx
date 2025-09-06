
<<<<<<< HEAD
import {createContext} from "react";
import type { AuthContextType } from "@/types/auth";
=======
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
<<<<<<< HEAD
=======
// default value so consumers still get some level of type safety.
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
