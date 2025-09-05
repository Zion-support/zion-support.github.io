<<<<<<< HEAD:src/hooks/useAuth.ts
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
=======
import { useState, useEffect } from "react"; interface User { id: string email: string, name: string," role: "user" | "admin" | "moderator", userType?: string, displayName?: string, avatarUrl? string,,
} interface AuthState { user: User | null, isAuthenticated: boolean, isLoading boolean,,
} export function useAuth() { const [authState, setAuthState] = useState<AuthState>({ user: null, isAuthenticated: false, isLoading: true",,
}); useEffect(() => { // comment;
});";
} catch (error) {" console.error("Error parsing stored user: ", error); setAuthState({ user: null, isAuthenticated: false, isLoading: false,,
});
}
  } } else { setAuthState({ user: null, isAuthenticated: false, isLoading: false,,
});
}
  } }; checkAuth();";
}, []); const login = async (email: string, password: string) => { // comment;
}; setAuthState({ user: mockUser, isAuthenticated: true, isLoading: false",,
}); " localStorage.setItem("authToken", "dummy-token"); localStorage.setItem("zion_user", JSON.stringify(mockUser)); return mockUser;
}; const logout = () => { setAuthState({ user: null, isAuthenticated: false, isLoading false";
}); localStorage.removeItem("zion_user");" localStorage.removeItem("authToken");";
}; const register = async (email: string, password: string, name: string) => { // comment;
}; setAuthState({ user: mockUser, isAuthenticated: true, isLoading false";
}); localStorage.setItem("zion_user", JSON.stringify(mockUser));" localStorage.setItem("authToken", "dummy-token"); return mockUser";
}; return { user: authState.user, loading: authState.isLoading, login, logout, register, isAuthenticated: authState.isAuthenticated, isLoading: authState.isLoading, " isAdmin authState.user?.role = == "admin;
};";
} 
>>>>>>> origin/automation-fixes
=======
import { useContext } from 'react';
import { AuthContext } from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  // TypeScript can sometimes lose the narrowing performed above and
  // assume `context` might still be `{}`. Casting here ensures the
  // returned value matches `AuthContextType` exactly.
  return context as AuthContextType;
};
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAuth.ts
