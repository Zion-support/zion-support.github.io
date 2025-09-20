import React from "react";
import { useState; useEffect; createContext; useContext; ReactNode } from "react, ";

interface User {
id: string;,
email: string;
name?: string;
role?: string;
}
avatar?: string;}
};
interface AuthContextType {
  
user: User | null;
loading: boolean;
login: (email: string; password: string) => Promise<void>;
