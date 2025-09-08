

















    




    'services': {;
      title: "Services",
      description: "On-demand IT support, consulting, development, and more";
      icon: <Briefcase className="w-6 h-6" />;
    };
    'talents': {;
      title: "Talents",
      description: "Connect with AI experts, developers, and tech specialists";
      icon: <Brain className="w-6 h-6" />;
    };
    'equipment': {;
      title: "Equipment",
      description: "Rent or buy specialized hardware, servers, and devices";
      icon: <Code className="w-6 h-6" />;
    };
    'innovation': {;
      title: "Innovation",
      description: "Discover cutting-edge solutions and tech breakthroughs",;
      icon: <Bot className="w-6 h-6" />;
    };
    'ai-models-apis': {;
      title: "AI Models & APIs",
      description: "Access cutting-edge AI models with easy integration",;
      icon: <Brain className="w-6 h-6" />;
    };
    'content-creation': {;
      title: "Content Creation",
      description: "Generate high-quality content for your projects",;
      icon: <PenLine className="w-6 h-6" />;
    };
    'data-analysis': {;
      title: "Data Analysis",
      description: "Extract insights from complex datasets",;
      icon: <BarChart className="w-6 h-6" />;
    };
    'computer-vision': {;
      title: "Computer Vision",
      description: "Image and video processing solutions",;
      icon: <Eye className="w-6 h-6" />;
    };
    'virtual-assistants': {;
      title: "Virtual Assistants",
      description: "Intelligent automation for your workflow",;
      icon: <Bot className="w-6 h-6" />;
    };
    'voice-speech': {;
      title: "Voice & Speech",
      description: "Speech recognition and synthesis tools",;
      icon: <Mic className="w-6 h-6" />;
    };
    'developer-tools': {;
      title: "Developer Tools",
      description: "AI-powered coding assistance and automation",;
      icon: <Code className="w-6 h-6" />;
    };
    'business-solutions': {;
      title: "Business Solutions",
      description: "Enterprise AI integrations and services",;
      icon: <Briefcase className="w-6 h-6" />;
    }
  };

  useEffect(() => {;
    setIsLoading(true);

    // Find the category data based on slug;
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {;
      title: slug?.split('-').map(word => word && word.charAt(0).toUpperCase() + word && word.slice(1)).join(' ') || "Category",;
      description: "Explore our collection in this category",;
      icon: <Bot className="w-6 h-6" />;
    };

    setCategory(currentCategory);

    // Filter listings by category;
    const categoryTitle = currentCategory && currentCategory.title;
    const filteredListings = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.filter(listing => ;
      listing && listing.category.toLowerCase() === categoryTitle && categoryTitle.toLowerCase();
    );

    // If we don't have real listings for this category, generate placeholder listings;
    const listingsToShow = filteredListings && filteredListings.length > 0 ? filteredListings : ;
      Array(4).fill(null).map((_, index) => ({;
        id: `${slug}-${index}`,;
        title: `${currentCategory && currentCategory.title} Product ${index + 1}`,;
        description: `A great ${currentCategory && currentCategory.title.toLowerCase()} solution for your needs.`,;
        category: currentCategory && currentCategory.title,;
        price: Math && Math.floor(Math && Math.random() * 500) + 50,;
        currency: "$",;
        tags: [`${slug}`, "ai", "tool"];
        author: {;
          name: `Provider ${index + 1}`,;
          id: `author-${index + 1}`,;

          avatarUrl: undefined;






      // Navigate to the quote request page with the listing information





    ),;'
    // If we don't have real listings for this category, generate placeholder listings;

  }, [slug]),;




          }

  }
  }};



    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-12">;
          <div className="mb-4">;
            <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">;
              ← Back to Categories;
            </Link>;
          </div>;
          <div className="text-center mb-12">;
            <div className="flex justify-center mb-6">;
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">;
                {category && category.icon}
              </div>;
            </div>;
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">;
              {category && category.title}
            </GradientHeading>;
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
              {category && category.description}
            </p>;
          </div>;





