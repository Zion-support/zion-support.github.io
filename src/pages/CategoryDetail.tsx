<<<<<<< HEAD
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] || 'AI Service';
  const price = Math.floor(Math.random() * 9500) + 500, // $500 - $10,000
  const rating = Math.floor(Math.random() * 2) + 4, // 4-5 stars
<<<<<<< HEAD
  const params = router.query as { slug?: string };
  const slug = slugProp ?? params.slug;

<<<<<<< HEAD
      icon: <Briefcase className="w-6 h-6" />
    };
    'talents': {
      title: "Talents",
      description: "Connect with AI experts, developers, and tech specialists";
      icon: <Brain className="w-6 h-6" />
    };
    'equipment': {
      title: "Equipment",
      description: "Rent or buy specialized hardware, servers, and devices";
      icon: <Code className="w-6 h-6" />
    };
    'innovation': {
      title: "Innovation",
      description: "Discover cutting-edge solutions and tech breakthroughs",
      icon: <Bot className="w-6 h-6" />
    };
    'ai-models-apis': {
      title: "AI Models & APIs",
      description: "Access cutting-edge AI models with easy integration",
      icon: <Brain className="w-6 h-6" />
    };
    'content-creation': {
      title: "Content Creation",
      description: "Generate high-quality content for your projects",
      icon: <PenLine className="w-6 h-6" />
    };
    'data-analysis': {
      title: "Data Analysis",
      description: "Extract insights from complex datasets",
      icon: <BarChart className="w-6 h-6" />
    };
    'computer-vision': {
      title: "Computer Vision",
      description: "Image and video processing solutions",
      icon: <Eye className="w-6 h-6" />
    };
    'virtual-assistants': {
      title: "Virtual Assistants",
      description: "Intelligent automation for your workflow",
      icon: <Bot className="w-6 h-6" />
    };
    'voice-speech': {
      title: "Voice & Speech",
      description: "Speech recognition and synthesis tools",
      icon: <Mic className="w-6 h-6" />
    };
    'developer-tools': {
      title: "Developer Tools",
      description: "AI-powered coding assistance and automation",
      icon: <Code className="w-6 h-6" />
    };
<<<<<<< HEAD
          icon: <Bot className="w-6 h-6" />},

        setCategory(currentCategory);
        innovationCounterRef.current = 0;

<<<<<<< HEAD
    
<<<<<<< HEAD
      
<<<<<<< HEAD
      
<<<<<<< HEAD
    : 'Category | Zion Marketplace';
  const seoDescription =
    category.description || 'Explore listings in this category.';

