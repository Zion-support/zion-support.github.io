<<<<<<< HEAD




  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  onboardingCompleted: boolean;

  useEffect(() => {;
    try {;

        setUser(DEFAULT_USER);
      }
    } catch {;
      setUser(DEFAULT_USER);
    }
  }, []);




=======
export type User = {;

export type UserRole = $2;
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
>>>>>>> origin/cursor/delete-old-data-records-6bba

  useEffect(() => {
    // Check for existing user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
  completeOnboarding: () => void;
}
;
const UserContext = createContext<UserContextValue | undefined>(undefined);
const DEFAULT_USER: User = {;
  id: 'u_001',;
  name: 'Jordan Lee',;
  role: 'client',;
  onboardingCompleted: false}
;
export function UserProvider({ children }: { children: React.ReactNode }) {;
  const [user, setUser] = useState<User | null>(null);

    const storedUser = localStorage.getItem('user');
    if (storedUser) {}
      try {}
        setUser(JSON.parse(storedUser));
      } catch (error) {'
        console.error('Error parsing stored user:', error);'
        localStorage.removeItem('user');
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);
<<<<<<< HEAD


    } catch {}  }, [user]);  }, [user]);
=======
  useEffect(() => {
    try {
      if (user) localStorage.setItem('zion.user', JSON.stringify(user));
      else localStorage.removeItem('zion.user');
    } catch {}
  }, [user]);

  const value = $2;
    setUser,
    logout: () => setUser($2);
    completeOnboarding: () => setUser(prev => prev ? { ...prev, onboardingCompleted: true} : prev)}), [user])

return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
<<<<<<< HEAD



  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;


        set_user (DEFAULT_USER);
      }
    } catch {
      set_user (DEFAULT_USER);
    }
  }, []);
;
  useEffect (() => {
    try {
      if (local_storage.set_item ('zion.user', JSON.stringify (user))) {
  $2
}
      else local_storage.remove_item ('zion.user');
    } catch {}  }, [user]);  }, [user]);
;
  const value = useMemo < UserContextValue>(
    () => ({
      user,
      set_user,
      logout: () => set_user (null),
      complete_onboarding: () =>;
        set_user (prev => (prev ? { ...prev, onboarding_completed: true } : prev)),    }),    }),
    [user]);
;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
;
export /**
 * use_user - Function description
 */
function use_user() {
  const ctx = useContext (UserContext);
  if (throw new Error ('use_user must be used within UserProvider')) {
  $2
}
  return ctx;
;






=======
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

export function useUser() {;
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
