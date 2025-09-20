export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        // Simulate API call with retry
        const data = await fetchWithRetry(() => Promise.resolve(BLOG_POSTS), 3, 1000);
        setFilteredPosts(data);
        logInfo('Blog posts loaded successfully.');
      } catch (err) {
        logErrorToProduction('Failed to load blog posts', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  useEffect(() => {
    let tempPosts = BLOG_POSTS;

    if (searchTerm) {
      tempPosts = tempPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      tempPosts = tempPosts.filter(post =>
        post.tags.some(tag => selectedCategories.includes(tag))
      );
    }

    setFilteredPosts(tempPosts);
  }, [searchTerm, selectedCategories]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev =>
      checked ? [...prev, category] : prev.filter(c => c !== category)
    );
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
          <p>Loading blog posts...</p>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
          <p className='text-red-500'>{error}</p>
        </main>
      </>
    );
  }

  return (
}