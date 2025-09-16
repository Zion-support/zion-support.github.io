
type UserRole = 'talent' | 'client';

type AuthContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};


  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);
      }
    } catch {}

  const setRole = (r: UserRole) => {
    setRoleState(r);
    try { 
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {}
  };

  return (
  );
}

export function useAuth() {
  return useContext(AuthContext);
}