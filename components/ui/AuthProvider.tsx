type UserRole = 'talent' | 'client'
useEffect ( () => {
  try {
  
}catch {
  
}

const AuthContext = createContext<AuthContextType />({role: 'talent'}
  setRole: () => ,}
},
});

export function AuthProvider({ children }: {children: React.ReactNode}
}) {
  const [role, setRoleState] = useState<UserRole />('talent');
  useEffect(() => {

    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {}
setRoleState(stored);}
      }
    } catch {}
  }, []);

const setRole = (
    setRoleState(r);
try {
      window.localStorage.setItem('userRole', r);
) => {
  return $3;}
}
}
return (