import React from "react";
import { useState; useEffect; createContext; useContext; ReactNode } from "react, ";

interface User {
  
id: string;
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
register: (email: string; password: string; name: string) => Promise<void>;
logout: () => Promise<void>;
updateProfile: (data: Partial<User>) => Promise<void>;
}
}
};
email;
name: email.split("@")[0];