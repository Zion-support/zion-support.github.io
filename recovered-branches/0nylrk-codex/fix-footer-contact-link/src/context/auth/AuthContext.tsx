<<<<<<< HEAD
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
=======
import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";

import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import { createContext } from "react";
import {createContext} from "react";
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
<<<<<<< HEAD
<<<<<<< HEAD

=======

import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
;
// default value so consumers still get some level of type safety.
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
<<<<<<< HEAD
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

// default value so consumers still get some level of type safety.
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
