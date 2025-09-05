
import { ProductListing } from "@/types/listings",
import { SearchSuggestion, FilterOptions } from "@/types/search",
// Mock marketplace listings with more realistic data
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {
    id: &quot;ai-model-1&quot;,
    title: &quot;GPT-4 API Integration Package&quot;,
    description: &quot;Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.&quot;,
    category: &quot;AI Models & APIs&quot;,
    price: 1999,
    currency: &quot;$&quot;,
    tags: [&quot;GPT-4&quot;, &quot;API Integration&quot;, &quot;NLP&quot;],
    author: {
      name: &quot;AI Solutions Inc.&quot;,
      id: &quot;ai-solutions&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-10T12:30:00.000Z&quot;,

// Mock marketplace listings with more realistic data
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {_id: "ai-model-1", _title: "GPT-4 API Integration Package", _description: "Complete integration solution for GPT-4 API with ready-made templates, _connectors, _and usage optimization tools. Includes 10 hours of expert implementation support.", _category: "AI Models & APIs", _price: 1999, _currency: "$", _tags: ["GPT-4", _"API Integration", _"NLP"], _author: {
      name: "AI Solutions Inc.", _id: "ai-solutions", _avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T12:30:00.000Z",
    rating: 4.9,
    reviewCount: 58,
    featured: true,
    location: &quot;Global&quot;,
    availability: &quot;Immediate&quot;,
    aiScore: 98
  },
  {
    id: &quot;ai-service-2&quot;,
    title: &quot;Custom Machine Learning Model Development&quot;,
    description: &quot;End-to-end development of custom ML models tailored to your specific business needs. From data preparation to deployment and monitoring.&quot;,
    category: &quot;Services&quot;,
    price: 5999,
    currency: &quot;$&quot;,
    tags: [&quot;Machine Learning&quot;, &quot;Custom Development&quot;, &quot;Data Science&quot;],
    author: {
      name: &quot;DataMinds&quot;,
      id: &quot;dataminds&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-02-15T10:45:00.000Z&quot;,    rating: 4.8,
    reviewCount: 32,
    location: &quot;North America&quot;,
    availability: &quot;4-6 Weeks&quot;,
    aiScore: 92
  },
  {
    id: &quot;ai-equipment-3&quot;,
    title: &quot;AI Workstation Supercomputer&quot;,
    description: &quot;High-performance computing rig optimized for AI model training and deep learning applications. Features NVIDIA A100 GPUs, terabytes of storage, and pre-installed ML frameworks.&quot;,
    category: &quot;Equipment&quot;,
    price: 12999,
    currency: &quot;$&quot;,
    tags: [&quot;Hardware&quot;, &quot;Deep Learning&quot;, &quot;GPU&quot;],
    author: {
      name: &quot;TechGear Pro&quot;,
      id: &quot;techgear&quot;},
    images: [&quot;https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-03-05T09:15:00.000Z&quot;,    rating: 4.7,
    reviewCount: 18,
    featured: true,
    location: &quot;Global&quot;,
    availability: &quot;2-3 Weeks&quot;,
    aiScore: 95
  },
  {
    id: &quot;ai-content-4&quot;,
    title: &quot;AI Content Generation Suite&quot;,
    description: &quot;Complete toolkit for generating blog posts, social media content, product descriptions, and more using advanced AI. Includes API access and user-friendly interface.&quot;,
    category: &quot;Content Creation&quot;,
    price: 399,
    currency: &quot;$&quot;,
    tags: [&quot;Content Generation&quot;, &quot;Copywriting&quot;, &quot;Marketing&quot;],
    author: {
      name: &quot;ContentGenius&quot;,
      id: &quot;contentgenius&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-28T14:20:00.000Z&quot;,    rating: 4.6,
    reviewCount: 124,
    location: &quot;Global&quot;,
    availability: &quot;Immediate&quot;,
    aiScore: 88
  },
  {
    id: &quot;ai-analytics-5&quot;,
    title: &quot;AI-Powered Business Intelligence Dashboard&quot;,
    description: &quot;Comprehensive analytics solution with AI-driven insights, predictive capabilities, and customizable visualization tools for data-driven decision making.&quot;,
    category: &quot;Data Analysis&quot;,
    price: 2499,
    currency: &quot;$&quot;,
    tags: [&quot;Analytics&quot;, &quot;Business Intelligence&quot;, &quot;Dashboard&quot;],
    author: {
      name: &quot;InsightAnalytica&quot;,
      id: &quot;insightanalytica&quot;},
    images: [&quot;https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-02-02T11:30:00.000Z&quot;,    rating: 4.5,
    reviewCount: 47,
    location: &quot;North America&quot;,
    availability: &quot;1-2 Weeks&quot;,
    aiScore: 90
  },
  {
    id: &quot;ai-vision-6&quot;,
    title: &quot;Computer Vision API Bundle&quot;,
    description: &quot;Ready-to-use computer vision APIs for object detection, image recognition, facial analysis, and scene understanding with comprehensive documentation.&quot;,
    category: &quot;Computer Vision&quot;,
    price: 999,
    currency: &quot;$&quot;,
    tags: [&quot;Computer Vision&quot;, &quot;Object Detection&quot;, &quot;Image Recognition&quot;],
    author: {
      name: &quot;VisionTech AI&quot;,
      id: &quot;visiontech&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-12-10T16:45:00.000Z&quot;,    rating: 4.8,
    reviewCount: 36,
    featured: true,
    location: &quot;Global&quot;,
    availability: &quot;Immediate&quot;,
    aiScore: 94
  },
  {
    id: &quot;ai-assistant-7&quot;,
    title: &quot;Custom AI Assistant Development&quot;,
    description: &quot;End-to-end solution for creating your own branded AI assistant tailored to your specific industry and business needs. Includes voice customization and knowledge base integration.&quot;,
    category: &quot;Virtual Assistants&quot;,
    price: 3499,
    currency: &quot;$&quot;,
    tags: [&quot;Chatbot&quot;, &quot;Voice Assistant&quot;, &quot;Conversational AI&quot;],
    author: {
      name: &quot;AssistantCraft&quot;,
      id: &quot;assistantcraft&quot;},
    images: [&quot;https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-03-12T13:10:00.000Z&quot;,    rating: 4.7,
    reviewCount: 29,
    location: &quot;Europe&quot;,
    availability: &quot;3-4 Weeks&quot;,
    aiScore: 91
  },
  {
    id: &quot;ai-speech-8&quot;,
    title: &quot;Advanced Speech Recognition System&quot;,
    description: &quot;High-accuracy speech recognition system with multi-language support, noise cancellation, and specialized terminology adaptation for various industries.&quot;,
    category: &quot;Voice & Speech&quot;,
    price: 1799,
    currency: &quot;$&quot;,
    tags: [&quot;Speech Recognition&quot;, &quot;Voice Processing&quot;, &quot;Transcription&quot;],
    author: {
      name: &quot;VoiceIntelligence&quot;,
      id: &quot;voiceintelligence&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1590742084231-a778c92b8842?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-05T10:20:00.000Z&quot;,    rating: 4.6,
    reviewCount: 41,
    location: &quot;Global&quot;,
    availability: &quot;1-2 Weeks&quot;,
    aiScore: 89
  },
  {
    id: &quot;ai-code-9&quot;,
    title: &quot;AI Code Assistant & Generator Pro&quot;,
    description: &quot;Powerful AI-powered code generation and optimization tool with support for 20+ programming languages, code review capabilities, and IDE plugins.&quot;,
    category: &quot;Developer Tools&quot;,
    price: 749,
    currency: &quot;$&quot;,
    tags: [&quot;Code Generation&quot;, &quot;Developer Tools&quot;, &quot;Automation&quot;],
    author: {
      name: &quot;CodeGenius&quot;,
      id: &quot;codegenius&quot;},
    images: [&quot;https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-02-20T09:45:00.000Z&quot;,    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: &quot;Global&quot;,
    availability: &quot;Immediate&quot;,
    aiScore: 97
  },
  {
    id: &quot;ai-business-10&quot;,
    title: &quot;Enterprise AI Transformation Package&quot;,
    description: &quot;Comprehensive solution for businesses looking to integrate AI across operations. Includes AI readiness assessment, strategy development, implementation roadmap, and staff training.&quot;,
    category: &quot;Business Solutions&quot;,
    price: 15000,
    currency: &quot;$&quot;,
    tags: [&quot;Enterprise&quot;, &quot;Digital Transformation&quot;, &quot;AI Strategy&quot;],
    author: {
      name: &quot;BusinessAI Consultants&quot;,
      id: &quot;businessai&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-03-01T11:00:00.000Z&quot;,    rating: 4.8,
    reviewCount: 22,
    location: &quot;North America&quot;,
    availability: &quot;4-6 Weeks&quot;,
    aiScore: 96
  },
  {
    id: &quot;ai-research-11&quot;,
    title: &quot;AI Research Papers Database Access&quot;,
    description: &quot;Subscription-based access to the world's largest collection of AI research papers with advanced search capabilities, citation tools, and summarization features.&quot;,
    category: &quot;Research&quot;,
    price: 299,
    currency: &quot;$&quot;,
    tags: [&quot;Research&quot;, &quot;Academic&quot;, &quot;Machine Learning&quot;],
    author: {
      name: &quot;AI Research Hub&quot;,
      id: &quot;airesearch&quot;},
    images: [&quot;https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-15T15:30:00.000Z&quot;,    rating: 4.7,
    reviewCount: 65,
    location: &quot;Global&quot;,
    availability: &quot;Immediate&quot;,
    aiScore: 88
  },
  {
    id: &quot;ai-robotics-12&quot;,
    title: &quot;Intelligent Robotics Control System&quot;,
    description: &quot;Advanced AI-powered control system for industrial and commercial robots with reinforcement learning capabilities, adaptive motion planning, and remote management interface.&quot;,
    category: &quot;Robotics&quot;,
    price: 8999,
    currency: &quot;$&quot;,
    tags: [&quot;Robotics&quot;, &quot;Automation&quot;, &quot;Control Systems&quot;],
    author: {
      name: &quot;RoboticsMind&quot;,
      id: &quot;roboticsmind&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-02-25T12:15:00.000Z&quot;,    rating: 4.8,
    reviewCount: 19,
    featured: true,
    location: &quot;Asia&quot;,
    availability: &quot;3-4 Weeks&quot;,
    aiScore: 93
  },
  // Adding equipment listings so they're available in marketplace too
  {
    id: &quot;equipment-1&quot;,
    title: &quot;High-Performance AI Workstation&quot;,
    description: &quot;Professional-grade workstation optimized for machine learning and AI model training with NVIDIA RTX GPUs.&quot;,
    category: &quot;Workstations&quot;,
    price: 4999,
    currency: &quot;$&quot;,
    tags: [&quot;GPU&quot;, &quot;Machine Learning&quot;, &quot;Workstation&quot;],
    author: {
      name: &quot;TechGear Solutions&quot;,
      id: &quot;techgear&quot;,
      avatarUrl: &quot;https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=100&h=100&quot;},
    images: [&quot;https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-11-10T12:30:00.000Z&quot;,    rating: 4.8,
    reviewCount: 32,
    featured: true,
    location: &quot;Global&quot;,
    availability: &quot;1-2 Weeks&quot;
  },
  {
    id: &quot;equipment-2&quot;,
    title: &quot;Enterprise GPU Server Rack&quot;,
    description: &quot;Scalable server rack solution with multiple NVIDIA A100 GPUs ideal for large-scale AI model training and deployment.&quot;,
    category: &quot;Servers&quot;,
    price: 24999,
    currency: &quot;$&quot;,
    tags: [&quot;Server&quot;, &quot;Enterprise&quot;, &quot;GPU Cluster&quot;],
    author: {
      name: &quot;ServerPro Systems&quot;,
      id: &quot;serverpro&quot;},
    images: [&quot;https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2023-12-15T09:45:00.000Z&quot;,    rating: 4.9,
    reviewCount: 18,
    featured: true,
    location: &quot;North America&quot;,
    availability: &quot;2-4 Weeks&quot;
  }
],

// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [
    "AI models",
    "GPT integration",
    "Machine learning",
    "Computer vision",
    "Speech recognition",
    "Data analysis",
    "Content generation",
    "Code assistant",
    "Virtual assistant",
    "Enterprise AI solutions",
    "Robotics",
    "AI workstation",
    "Business intelligence",
    "Custom model development",
    "Server rack",
    "GPU cluster",
    "Edge computing",
    "High performance storage"
  ],  ];
  
  // Convert strings to SearchSuggestion objects
  return suggestions.map(text => ({
    text,
    type: 'product' // Use a valid type from the updated SearchSuggestion interface
  }))
},

// Generate filter options for sidebar
export const generateFilterOptions = (): FilterOptions => {
  // Extract unique categories, locations, and availability options from listings
  const productTypes = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category))].sort(),
  const locations = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean))].sort(),
  const availability = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean))].sort(),  
  return {
    productTypes: productTypes.map(type => ({
      label: type, _value: type})),
    locations: locations.map(location => ({_label: location, _value: location})),
    availabilityOptions: availability.map(item => ({_label: item, _value: item})),
    ratingOptions: [1, 2, 3, 4, 5] // Add rating options
  }
},

export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0)),
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0)),