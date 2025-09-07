<<<<<<< HEAD
import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";

import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",




=======
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { createContext } from "react";
import {createContext} from "react";
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
<<<<<<< HEAD

=======
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// default value so consumers still get some level of type safety.
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
