

interface User {
  // TODO: Implement
}
  id: string;,
  email: string;
  name: string;

}

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);
;

  return {
    user
    loading
    login: (email: string, password: string) => {


  }
}

;

