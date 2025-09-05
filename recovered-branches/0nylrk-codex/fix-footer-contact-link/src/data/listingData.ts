
import { ProductListing } from &quot;@/types/listings&quot;;
import { SearchSuggestion } from &quot;@/types/search&quot;;

// Shared data source for marketplace listings
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
    createdAt: &quot;2024-02-15T10:45:00.000Z&quot;,
    rating: 4.8,
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
    createdAt: &quot;2024-03-05T09:15:00.000Z&quot;,
    rating: 4.7,
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
    createdAt: &quot;2024-01-28T14:20:00.000Z&quot;,
    rating: 4.6,
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
    createdAt: &quot;2024-02-02T11:30:00.000Z&quot;,
    rating: 4.5,
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
    createdAt: &quot;2023-12-10T16:45:00.000Z&quot;,
    rating: 4.8,
    reviewCount: 36,
    featured: true,
    location: &quot;Global&quot;,
    availability: &quot;Immediate&quot;,
    aiScore: 94
  }
];

// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [
    &quot;AI models&quot;,
    &quot;GPT integration&quot;,
    &quot;Machine learning&quot;,
    &quot;Computer vision&quot;,
    &quot;Speech recognition&quot;,
    &quot;Data analysis&quot;,
    &quot;Content generation&quot;,
    &quot;Code assistant&quot;,
    &quot;Virtual assistant&quot;,
    &quot;Enterprise AI solutions&quot;
  ];
  
  return suggestions.map(text => ({
    text,
    type: 'product' // Use a valid type from the SearchSuggestion interface
  }));
};

// Generate filter options for sidebar
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings
  const productTypes = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category))].sort();
  const locations = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean))].sort();
  const availability = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean))].sort();
  
  return {
    productTypes: productTypes.map(type => ({
      label: type,
      value: type
    })),
    locations: locations.map(location => ({
      label: location,
      value: location
    })),
    availabilityOptions: availability.map(item => ({
      label: item,
      value: item
    })),
    ratingOptions: [1, 2, 3, 4, 5]
  };
};

export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
