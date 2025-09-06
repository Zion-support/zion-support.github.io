<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {createContext} from "react";

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
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
<<<<<<< HEAD

=======

import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
;
// default value so consumers still get some level of type safety.

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

// default value so consumers still get some level of type safety.


// default value so consumers still get some level of type safety.;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { create_context } from './react';
import type { AuthContextType } from "@/types / auth";
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `create_context` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
// default value so consumers still get some level of type safety.;
export const AuthContext = create_context < AuthContextType | undefined>(undefined);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
export const AuthContext = createContext<AuthContextType | undefined>(undefined),; 
// default value so consumers still get some level of type safety.;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
// default value so consumers still get some level of type safety.;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
