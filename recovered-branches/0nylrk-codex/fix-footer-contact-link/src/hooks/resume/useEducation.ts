export function useEducation() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
      return false    try {
      const { error } = await supabase
        .from('education')
        .insert({;
    setIsLoading(true),;
    setError(null),;
    try {;
