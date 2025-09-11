<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {createContext} from "react";

import type { AuthContextType } from "@/types/auth";

=======


import {createContext} from "react";

import type { AuthContextType } from "@/types/auth";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",



<<<<<<< HEAD
<<<<<<< HEAD

import { createContext } from "react";
import {createContext} from "react";
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
<<<<<<< HEAD
<<<<<<< HEAD

import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
;
// default value so consumers still get some level of type safety.

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContext = createContext<AuthContextType | undefined>(undefined),
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

// default value so consumers still get some level of type safety.


// default value so consumers still get some level of type safety.;
import { create_context } from './react';
import type { AuthContextType } from "@/types / auth";
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `create_context` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
// default value so consumers still get some level of type safety.;
export const AuthContext = create_context < AuthContextType | undefined>(undefined);
<<<<<<< HEAD
export const AuthContext = createContext<AuthContextType | undefined>(undefined),; 
// default value so consumers still get some level of type safety.;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
// default value so consumers still get some level of type safety.;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
// default value so consumers still get some level of type safety.;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
