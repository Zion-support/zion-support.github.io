

// Mock marketplace listings with more realistic data
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {_id: "ai-model-1", _title: "GPT-4 API Integration Package", _description: "Complete integration solution for GPT-4 API with ready-made templates, _connectors, _and usage optimization tools. Includes 10 hours of expert implementation support.", _category: "AI Models & APIs", _price: 1999, _currency: "$", _tags: ["GPT-4", _"API Integration", _"NLP"], _author: {
      name: "AI Solutions Inc.", _id: "ai-solutions", _avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T12:30:00.000Z",
    rating: 4.9,
    reviewCount: 58,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 98
  },
  {_id: "ai-service-2", _title: "Custom Machine Learning Model Development", _description: "End-to-end development of custom ML models tailored to your specific business needs. From data preparation to deployment and monitoring.", _category: "Services", _price: 5999, _currency: "$", _tags: ["Machine Learning", _"Custom Development", _"Data Science"], _author: {
      name: "DataMinds", _id: "dataminds", _avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:45:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    location: "North America",
    availability: "4-6 Weeks",
    aiScore: 92
  },
  {_id: "ai-equipment-3", _title: "AI Workstation Supercomputer", _description: "High-performance computing rig optimized for AI model training and deep learning applications. Features NVIDIA A100 GPUs, _terabytes of storage, _and pre-installed ML frameworks.", _category: "Equipment", _price: 12999, _currency: "$", _tags: ["Hardware", _"Deep Learning", _"GPU"], _author: {
      name: "TechGear Pro", _id: "techgear"},
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 18,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  },
  {_id: "ai-content-4", _title: "AI Content Generation Suite", _description: "Complete toolkit for generating blog posts, _social media content, _product descriptions, _and more using advanced AI. Includes API access and user-friendly interface.", _category: "Content Creation", _price: 399, _currency: "$", _tags: ["Content Generation", _"Copywriting", _"Marketing"], _author: {
      name: "ContentGenius", _id: "contentgenius", _avatarUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T14:20:00.000Z",
    rating: 4.6,
    reviewCount: 124,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },
  {_id: "ai-analytics-5", _title: "AI-Powered Business Intelligence Dashboard", _description: "Comprehensive analytics solution with AI-driven insights, _predictive capabilities, _and customizable visualization tools for data-driven decision making.", _category: "Data Analysis", _price: 2499, _currency: "$", _tags: ["Analytics", _"Business Intelligence", _"Dashboard"], _author: {
      name: "InsightAnalytica", _id: "insightanalytica"},
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T11:30:00.000Z",
    rating: 4.5,
    reviewCount: 47,
    location: "North America",
    availability: "1-2 Weeks",
    aiScore: 90
  },
  {_id: "ai-vision-6", _title: "Computer Vision API Bundle", _description: "Ready-to-use computer vision APIs for object detection, _image recognition, _facial analysis, _and scene understanding with comprehensive documentation.", _category: "Computer Vision", _price: 999, _currency: "$", _tags: ["Computer Vision", _"Object Detection", _"Image Recognition"], _author: {
      name: "VisionTech AI", _id: "visiontech", _avatarUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-10T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 36,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {_id: "ai-assistant-7", _title: "Custom AI Assistant Development", _description: "End-to-end solution for creating your own branded AI assistant tailored to your specific industry and business needs. Includes voice customization and knowledge base integration.", _category: "Virtual Assistants", _price: 3499, _currency: "$", _tags: ["Chatbot", _"Voice Assistant", _"Conversational AI"], _author: {
      name: "AssistantCraft", _id: "assistantcraft"},
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-12T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 29,
    location: "Europe",
    availability: "3-4 Weeks",
    aiScore: 91
  },
  {_id: "ai-speech-8", _title: "Advanced Speech Recognition System", _description: "High-accuracy speech recognition system with multi-language support, _noise cancellation, _and specialized terminology adaptation for various industries.", _category: "Voice & Speech", _price: 1799, _currency: "$", _tags: ["Speech Recognition", _"Voice Processing", _"Transcription"], _author: {
      name: "VoiceIntelligence", _id: "voiceintelligence", _avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1590742084231-a778c92b8842?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T10:20:00.000Z",
    rating: 4.6,
    reviewCount: 41,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 89
  },
  {_id: "ai-code-9", _title: "AI Code Assistant & Generator Pro", _description: "Powerful AI-powered code generation and optimization tool with support for 20+ programming languages, _code review capabilities, _and IDE plugins.", _category: "Developer Tools", _price: 749, _currency: "$", _tags: ["Code Generation", _"Developer Tools", _"Automation"], _author: {
      name: "CodeGenius", _id: "codegenius"},
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 97
  },
  {_id: "ai-business-10", _title: "Enterprise AI Transformation Package", _description: "Comprehensive solution for businesses looking to integrate AI across operations. Includes AI readiness assessment, _strategy development, _implementation roadmap, _and staff training.", _category: "Business Solutions", _price: 15000, _currency: "$", _tags: ["Enterprise", _"Digital Transformation", _"AI Strategy"], _author: {
      name: "BusinessAI Consultants", _id: "businessai", _avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T11:00:00.000Z",
    rating: 4.8,
    reviewCount: 22,
    location: "North America",
    availability: "4-6 Weeks",
    aiScore: 96
  },
  {_id: "ai-research-11", _title: "AI Research Papers Database Access", _description: "Subscription-based access to the world's largest collection of AI research papers with advanced search capabilities, _citation tools, _and summarization features.", _category: "Research", _price: 299, _currency: "$", _tags: ["Research", _"Academic", _"Machine Learning"], _author: {
      name: "AI Research Hub", _id: "airesearch"},
    images: ["https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 65,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },
  {_id: "ai-robotics-12", _title: "Intelligent Robotics Control System", _description: "Advanced AI-powered control system for industrial and commercial robots with reinforcement learning capabilities, _adaptive motion planning, _and remote management interface.", _category: "Robotics", _price: 8999, _currency: "$", _tags: ["Robotics", _"Automation", _"Control Systems"], _author: {
      name: "RoboticsMind", _id: "roboticsmind", _avatarUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:15:00.000Z",
    rating: 4.8,
    reviewCount: 19,
    featured: true,
    location: "Asia",
    availability: "3-4 Weeks",
    aiScore: 93
  },
  // Adding equipment listings so they're available in marketplace too
  {_id: "equipment-1", _title: "High-Performance AI Workstation", _description: "Professional-grade workstation optimized for machine learning and AI model training with NVIDIA RTX GPUs.", _category: "Workstations", _price: 4999, _currency: "$", _tags: ["GPU", _"Machine Learning", _"Workstation"], _author: {
      name: "TechGear Solutions", _id: "techgear", _avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-10T12:30:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks"
  },
  {_id: "equipment-2", _title: "Enterprise GPU Server Rack", _description: "Scalable server rack solution with multiple NVIDIA A100 GPUs ideal for large-scale AI model training and deployment.", _category: "Servers", _price: 24999, _currency: "$", _tags: ["Server", _"Enterprise", _"GPU Cluster"], _author: {
      name: "ServerPro Systems", _id: "serverpro"},
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-15T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 18,
    featured: true,
    location: "North America",
    availability: "2-4 Weeks"
  }
];

// Generate search suggestions based on existing listings
export const _generateSearchSuggestions = (): SearchSuggestion[] => {_const _suggestions = [
    "AI models", _"GPT integration", _"Machine learning", _"Computer vision", _"Speech recognition", _"Data analysis", _"Content generation", _"Code assistant", _"Virtual assistant", _"Enterprise AI solutions", _"Robotics", _"AI workstation", _"Business intelligence", _"Custom model development", _"Server rack", _"GPU cluster", _"Edge computing", _"High performance storage"
  ];
  
  // Convert strings to SearchSuggestion objects
  return suggestions.map(text => ({
    text, _type: 'product' // Use a valid type from the updated SearchSuggestion interface}));
};

// Generate filter options for sidebar
export const _generateFilterOptions = (): FilterOptions => {_// Extract unique categories, _locations, _and availability options from listings
  const _productTypes = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category))].sort();
  const _locations = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean))].sort();
  const _availability = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean))].sort();
  
  return {
    productTypes: productTypes.map(type => ({
      label: type, _value: type})),
    locations: locations.map(location => ({_label: location, _value: location})),
    availabilityOptions: availability.map(item => ({_label: item, _value: item})),
    ratingOptions: [1, 2, 3, 4, 5] // Add rating options
  };
};

export const _MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const _MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
