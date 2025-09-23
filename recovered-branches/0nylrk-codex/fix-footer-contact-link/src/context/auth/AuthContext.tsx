
import { createContext } from "react";
import type { AuthContextType } from "@/types/auth";

// Create the AuthContext and export it. We avoid providing a generic
// parameter to `createContext` because in environments where the React
