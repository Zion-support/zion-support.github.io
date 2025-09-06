

import {createContext} from "react";

import type { AuthContextType } from "@/types/auth";
=======
import { createContext } from "react",
import type { AuthContextType } from "@/types/auth",


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
// type definitions are unavailable, calling an untyped function with type
// arguments causes a TypeScript error (TS2347). Instead, we cast the

// default value so consumers still get some level of type safety.

// default value so consumers still get some level of type safety.;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
