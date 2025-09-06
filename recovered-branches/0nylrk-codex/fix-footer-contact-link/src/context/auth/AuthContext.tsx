import React from 'react';

import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";
<<<<<<< HEAD
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the
// default value so consumers still get some level of type safety.

=======
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
// default value so consumers still get some level of type safety.;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

