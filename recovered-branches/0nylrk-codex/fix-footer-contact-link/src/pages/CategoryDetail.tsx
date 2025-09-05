

export default function CategoryDetail() {_// Cast to specify the expected route param type since useParams may be untyped
  const { slug} = useParams() as {_slug?: string};
  const _navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [category, setCategory] = useState<{_title: string, _description: string, _icon: JSX.Element}>({_title: "", _description: "", _icon: <Bot className="w-6 h-6" />});

  // Map of category slugs to their display data
  const _categoryData = {_'services': {
      title: "Services", _description: "On-demand IT support, _consulting, _development, _and more", _icon: <Briefcase className="w-6 h-6" />},
    'talents': {_title: "Talents", _description: "Connect with AI experts, _developers, _and tech specialists", _icon: <Brain className="w-6 h-6" />},
    'equipment': {_title: "Equipment", _description: "Rent or buy specialized hardware, _servers, _and devices", _icon: <Code className="w-6 h-6" />},
    'innovation': {_title: "Innovation", _description: "Discover cutting-edge solutions and tech breakthroughs", _icon: <Bot className="w-6 h-6" />},
    'ai-models-apis': {_title: "AI Models & APIs", _description: "Access cutting-edge AI models with easy integration", _icon: <Brain className="w-6 h-6" />},
    'content-creation': {_title: "Content Creation", _description: "Generate high-quality content for your projects", _icon: <PenLine className="w-6 h-6" />},
    'data-analysis': {_title: "Data Analysis", _description: "Extract insights from complex datasets", _icon: <BarChart className="w-6 h-6" />},
    'computer-vision': {_title: "Computer Vision", _description: "Image and video processing solutions", _icon: <Eye className="w-6 h-6" />},
    'virtual-assistants': {_title: "Virtual Assistants", _description: "Intelligent automation for your workflow", _icon: <Bot className="w-6 h-6" />},
    'voice-speech': {_title: "Voice & Speech", _description: "Speech recognition and synthesis tools", _icon: <Mic className="w-6 h-6" />},
    'developer-tools': {_title: "Developer Tools", _description: "AI-powered coding assistance and automation", _icon: <Code className="w-6 h-6" />},
    'business-solutions': {_title: "Business Solutions", _description: "Enterprise AI integrations and services", _icon: <Briefcase className="w-6 h-6" />}
  };

  useEffect__(() => {_setIsLoading(true);
    
    // Find the category data based on slug
    const _currentCategory = categoryData[slug as keyof typeof categoryData] || {
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category", _description: "Explore our collection in this category", _icon: <Bot className="w-6 h-6" />};
    
    setCategory(currentCategory);

    // Filter listings by category
    const _categoryTitle = currentCategory.title;
    const _filteredListings = MARKETPLACE_LISTINGS.filter(listing => 
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    );
    
    // If we don't have real listings for this category, generate placeholder listings
    const _listingsToShow = filteredListings.length > 0 ? filteredListings : 
      Array(4).fill(null).map(_(_, _index) => ({_id: `${slug}-${_index}`,
        title: `${_currentCategory.title} Product ${_index + 1}`,
        description: `A great ${_currentCategory.title.toLowerCase()} solution for your needs.`,
        category: currentCategory.title,
        price: Math.floor(Math.random() * 500) + 50,
        currency: "$",
        tags: [`${_slug}`, "ai", "tool"],
        author: {_name: `Provider ${index + 1}`,
          id: `author-${_index + 1}`,
          avatarUrl: undefined
        },
        images: [`/placeholder.svg`],
        createdAt: new Date().toISOString(),
        rating: Math.floor(Math.random() * 5) + 1,
        reviewCount: Math.floor(Math.random() * 100)
      }));

    setListings(listingsToShow);
    setIsLoading(false);
  }, [slug]);

  // Handle requesting a quote
  const _handleRequestQuote = (_listingId: string) => {_const _listing = listings.find(item => item.id === listingId);
    
    if (listing) {
      toast({
        title: "Quote Requested", _description: `Your quote request for ${listing.title} has been sent.`
      });
      
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {_state: { 
          serviceType: listing.category, _specificItem: {
            id: listing.id, _title: listing.title, _category: listing.category, _image: listing.images?.[0]}
        }
      });
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-4">
            <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
              ← Back to Categories
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">
                {_category.icon}
              </div>
            </div>
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              {_category.title}
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              {_category.description}
            </p>
          </div>
          
          {_isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>
            </div>
          ) : (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing) => (
                <ProductListingCard 
                  key={listing.id} 
                  listing={_listing}
                  onRequestQuote={_handleRequestQuote} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
