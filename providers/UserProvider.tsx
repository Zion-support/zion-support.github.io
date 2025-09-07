export type User = {;

export type UserRole = $2;
  name: 'Jordan Lee',
  role: 'client',
  onboardingCompleted: false}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

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

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

export function useUser() {;
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
