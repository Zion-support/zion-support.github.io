const AUTO_SERVICE_TITLES = [
  "AI-Powered Customer Support"
  "Cloud Infrastructure Management"
  "Predictive Analytics Consulting"
  "Cybersecurity Automation Suite"
  "Robotic Process Automation"
  "Machine Learning Model Tuning"
  "IoT Device Integration Service"
  "Blockchain Data Solutions"
    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />
    'ai-models-apis': {
      title: "AI Models & APIs"
      description: "Access cutting-edge AI models with easy integration"
      icon: <Brain className="w-6 h-6" />
    'content-creation': {
      title: "Content Creation"
      description: "Generate high-quality content for your projects"
      icon: <PenLine className="w-6 h-6" />
    'data-analysis': {
      title: "Data Analysis"
      description: "Extract insights from complex datasets"
      icon: <BarChart className="w-6 h-6" />
    'computer-vision': {
      title: "Computer Vision"
      description: "Image and video processing solutions"
      icon: <Eye className="w-6 h-6" />
    'virtual-assistants': {
      title: "Virtual Assistants"
      description: "Intelligent automation for your workflow"
      icon: <Bot className="w-6 h-6" />
    'voice-speech': {
      title: "Voice & Speech"
      description: "Speech recognition and synthesis tools"
      icon: <Mic className="w-6 h-6" />



    },
    'business-solutions': {
      title: "Business Solutions",
      description: "Enterprise AI integrations and services",
      icon: <Briefcase className="w-6 h-6" />
    }
  },

  useEffect(() => {
    async function load() {
      setIsLoading(true),
      try {
        // Find the category data based on slug
        const currentCategory = categoryData[slug as keyof typeof categoryData] || {
          title: slug
            ?.split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || 'Category',
          description: 'Explore our collection in this category',
          icon: <Bot className="w-6 h-6" />},

        setCategory(currentCategory),
        innovationCounterRef.current = 0,

        // Filter listings by category
        const categoryTitle = currentCategory.title,
        const filteredListings = MARKETPLACE_LISTINGS.filter(
          (listing) => listing.category.toLowerCase() === categoryTitle.toLowerCase()
        ),

        // If we don't have real listings for this category, generate placeholder listings
        const listingsToShow =
          filteredListings.length > 0
            ? filteredListings
            : Array(4)
                .fill(null)
                .map((_, index) => ({
                  id: `${slug}-${index}`,
                  title: `${currentCategory.title} Product ${index + 1}`,
                  description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
                  category: currentCategory.title,
                  price: Math.floor(Math.random() * 500) + 50,
                  currency: '$',
                  tags: [`${slug}`, 'aitool'],
                  author: {
                    name: `Provider ${index + 1}`,
                    id: `author-${index + 1}`,
                    avatarUrl: undefined},
                  images: [`/placeholder.svg`],
                  createdAt: new Date().toISOString(),
                  rating: Math.floor(Math.random() * 5) + 1,
                  reviewCount: Math.floor(Math.random() * 100)})),

        setListings(listingsToShow)
      } catch (err) {
        logErrorToProduction('Category load error:', { data: err }),
        toast({ title: 'Error', description: 'Failed to load category' })
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [slug]),

  useEffect(() => {
    if (slug !== 'innovation') return,

    const interval = setInterval(() => {
      innovationCounterRef.current += 1,
      setListings((prev) => [
        generateInnovationListing(innovationCounterRef.current),
        ...prev])
    }, 120000), // every 2 minutes

    return () => clearInterval(interval)
  }, [slug]),

  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId),
    
    if (listing) {
      toast({
        title: "Quote Requested",
        description: `Your quote request for ${listing.title} has been sent.`
      }),
      
      // Navigate to the quote request page with the listing information
      const queryParams = new URLSearchParams({
        serviceType: listing.category,
        itemId: listing.id,
        itemTitle: listing.title,
        itemCategory: listing.category,
        ...(listing.images?.[0] && { itemImage: listing.images[0] })
      }),
      
      router.push(`/request-quote?${queryParams.toString()}`)
    }
  },

  const seoTitle = category.title
    ? `${category.title} | Zion Marketplace`
    : 'Category | Zion Marketplace',
  const seoDescription =
    category.description || 'Explore listings in this category.',
        setCategory(currentCategory)
        innovationCounterRef.current = 0
    : 'Category | Zion Marketplace'
  const seoDescription = null;
    category.description || 'Explore listings in this category.'
  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Header />

      <Suspense fallback={<ListingGridSkeleton />}> 


          <div className="container mx-auto px-4 py-12">
          <div className="mb-4">
            <Link href="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
               Back to Categories
            </Link>
          </div>
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}
                <ProductListingCard
                  key = {listing && listing.id,}
                  listing = {listing,}
                  onRequestQuote = {handleRequestQuote,}
                  detailBasePath="/marketplace/listing"
                />;
              ))}
            </div>;
          )}
          </div>;
        </div>;
      </Suspense>;
    </>;
  );
}
