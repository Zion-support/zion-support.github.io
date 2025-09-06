import React from "react";

const searchResults = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'Comprehensive analytics solution with AI-powered insights and real-time reporting.',
    category: 'AI Services',
    type: 'Service',
    url: '/ai-services',
    date: '2024-01-20'
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Management',
    description: 'Complete cloud infrastructure setup, management, and optimization services.',
    category: 'IT Services',
    type: 'Service',
    url: '/it-services',
    date: '2024-01-18'
  },
  {
    id: 3,
    title: 'Workflow Automation Pro',
    description: 'Automate repetitive tasks and streamline your business processes.',
    category: 'Micro SaaS',
    type: 'Product',
    url: '/micro-saas',
    date: '2024-01-15'
  },
  {
    id: 4,
    title: 'Cybersecurity Solutions',
    description: 'Advanced cybersecurity services to protect your business from threats.',
    category: 'IT Services',
    type: 'Service',
    url: '/it-services',
    date: '2024-01-12'
  },
  {
    id: 5,
    title: 'Social Media Scheduler',
    description: 'Schedule and manage your social media posts across multiple platforms.',
    category: 'Micro SaaS',
    type: 'Product',
    url: '/micro-saas',
    date: '2024-01-10'
  }
];

const categories = ['All', 'AI Services', 'IT Services', 'Micro SaaS', 'Products', 'Services'];
const types = ['All', 'Product', 'Service'];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [filteredResults, setFilteredResults] = useState(searchResults);

  useEffect(() => {
    const { q } = router.query;
    if (q) {
      setQuery(q as string);
    }
  }, [router.query]);

  useEffect(() => {
    let results = searchResults;

    if (query) {
      results = results.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      results = results.filter(result => result.category === selectedCategory);
    }

    if (selectedType !== 'All') {
      results = results.filter(result => result.type === selectedType);
    }

    setFilteredResults(results);
  }, [query, selectedCategory, selectedType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
<div className={className || ""}>
      <h1>Search</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Search;
