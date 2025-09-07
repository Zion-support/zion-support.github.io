  id: string;
  name: string;
  email: string;
  role: UserRole;

  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
