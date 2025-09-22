
=======
import { createContext } from "react",;
import type { AuthContextType } from "@/types/auth",;
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
// Create the AuthContext and export it. We avoid providing a generic;
// parameter to `createContext` because in environments where the React;
// type definitions are unavailable, calling an untyped function with type;
// arguments causes a TypeScript error (TS2347). Instead, we cast the;
// default value so consumers still get some level of type safety.;
<<<<<<< HEAD
