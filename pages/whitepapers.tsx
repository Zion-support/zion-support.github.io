const React = dynamic(() => import('react'), { ssr: false })
const Head = dynamic(() => import('next/head'), { ssr: false })
const Link = dynamic(() => import('next/link'), { ssr: false })
  ];
;
  const categories = ['All', 'Artificial Intelligence', 'Cloud Computing', 'Software Development', 'Cybersecurity', 'Data Analytics'];
  const [selectedCategory, setSelectedCategory] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredWhitepapers = whitepapers.filter(paper => {;
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         paper.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch});

  return (
    <MainLayout title = "Whitepapers - Zion Tech Group""
      description="Download our comprehensive whitepapers and research reports on technology trends and best practices."
    >
      {/*   */}"
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">"
        <div className="container mx-auto px-4 text-center">"
          <h1 className="text-5xl md: text-6xl font-bold mb-6">"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Whitepapers</span>
          </h1>"
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">,
            In-depth research and insights on technology trends, best practices, and industry innovations.
          </p>
          
          {/*   */}"
          <div className="max-w-2xl mx-auto">"
            <div className="relative">"
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
              <input type="text""
                placeholder="Search whitepapers...""
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-400"
              />;
    <>,