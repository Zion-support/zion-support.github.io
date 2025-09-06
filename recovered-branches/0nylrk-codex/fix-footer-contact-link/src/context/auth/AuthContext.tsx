<<<<<<< HEAD
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
=======
import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";

import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",




import { createContext } from "react";
import {createContext} from "react";
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
<<<<<<< HEAD
=======
<<<<<<< HEAD
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

// default value so consumers still get some level of type safety.
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
