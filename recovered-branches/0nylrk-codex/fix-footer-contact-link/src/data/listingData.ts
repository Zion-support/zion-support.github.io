import { ProductListing } from '@/types/listings';
import { SearchSuggestion } from '@/types/search';

import { ProductListing } from '@/types/listings';
import { SearchSuggestion } from '@/types/search';

import { ProductListing } from "@/types/listings";
import { SearchSuggestion } from "@/types/search";
// Shared data source for marketplace listings
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {

    id: 'ai-model-1'
    title: 'GPT-4 API Integration Package'
    description:
      'Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.'
    category: 'AI Models & APIs'
    price: 1999
    currency: '$'
    tags: ['GPT-4', 'API Integration', 'NLP']
    author: {
      name: 'AI Solutions Inc.'
      id: 'ai-solutions'
      avatarUrl:


import { ProductListing } from "@/types/listings";""
import { SearchSuggestion } from "@/types/search";"
// Shared data source for marketplace listings;
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {
"
    id: 'ai-model-1,
  title: 'GPT-4 API Integration Package
    description:
      'Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.
    category: 'AI Models & APIs,
  price: 1999;
    currency: '$,]
  tags: ['GPT-4', 'API Integration', 'NLP']
    author: {,
  name: 'AI Solutions Inc.
      id: 'ai-solutions,
  avatarUrl:
pr-12325
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 98,
  },
  {
    location: 'North America',
    availability: '4 - 6 Weeks',
    ai_score: 92,
  },
  {
    featured: true,
    location: 'Global',
    availability: '2 - 3 Weeks',
    ai_score: 95,
  },
  {
    location: 'Global',
    availability: 'Immediate',
    ai_score: 88,
  },
  {
    location: 'North America',
    availability: '1 - 2 Weeks',
    ai_score: 90,
  },
  {
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 94,
  }, ];      name: "VisionTech AI";
      id: "visiontech";
    aiScore: 94
  }
    id: "ai-model-1";
    title: "GPT-4 API Integration Package";
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.",
    category: "AI Models & APIs";
    price: 1999;
    currency: "$";
    tags: ["GPT-4", "API Integration", "NLP"],
    author: {
      name: "AI Solutions Inc.";
      id: "ai-solutions";
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto;
origin/cursor/automate-test-improve-and-merge-code-2533
];
// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [
<<<<<<< HEAD
<<<<<<< HEAD
=======

'AI models'



    'AI models'
    'GPT integration'
    'Machine learning'
    'Computer vision'
    'Speech recognition'
    'Data analysis'
    'Content generation'
    'Code assistant'
    'Virtual assistant'
    'Enterprise AI solutions'
'AI models',
    'GPT integration',
    'Machine learning',
    'Computer vision',
    'Speech recognition',
    'Data analysis',
    'Content generation',
    'Code assistant',
    'Virtual assistant',
    'Enterprise AI solutions',
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
  ];
  return suggestions.map(text => ({
    text
    type: 'product', // Use a valid type from the SearchSuggestion interface
  }));};  ];
import { ProductListing } from "@/types/listings",
import { SearchSuggestion } from "@/types/search",
<<<<<<< HEAD
=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======


>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
import { ProductListing } from "@/types/listings",;
import { SearchSuggestion } from "@/types/search",;
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
// Shared data source for marketplace listings
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {
    id: "ai-model-1",
    title: "GPT-4 API Integration Package",
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.",
    category: "AI Models & APIs",
    price: 1999,
    currency: "$",
    tags: ["GPT-4", "API Integration", "NLP"],
    author: {
      name: "AI Solutions Inc.",
      id: "ai-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T12:30:00.000Z",
    rating: 4.9,
    reviewCount: 58,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 98
  },
  {
    id: "ai-service-2",
    title: "Custom Machine Learning Model Development",
    description: "End-to-end development of custom ML models tailored to your specific business needs. From data preparation to deployment and monitoring.",
    category: "Services",
    price: 5999,
    currency: "$",
    tags: ["Machine Learning", "Custom Development", "Data Science"],
    author: {
      name: "DataMinds",
      id: "dataminds",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:45:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    location: "North America",
    availability: "4-6 Weeks",
    aiScore: 92
  },
  {
    id: "ai-equipment-3",
    title: "AI Workstation Supercomputer",
    description: "High-performance computing rig optimized for AI model training and deep learning applications. Features NVIDIA A100 GPUs, terabytes of storage, and pre-installed ML frameworks.",
    category: "Equipment",
    price: 12999,
    currency: "$",
    tags: ["Hardware", "Deep Learning", "GPU"],
    author: {
      name: "TechGear Pro",
      id: "techgear"},
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 18,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  },
  {
    id: "ai-content-4",
    title: "AI Content Generation Suite",
    description: "Complete toolkit for generating blog posts, social media content, product descriptions, and more using advanced AI. Includes API access and user-friendly interface.",
    category: "Content Creation",
    price: 399,
    currency: "$",
    tags: ["Content Generation", "Copywriting", "Marketing"],
    author: {
      name: "ContentGenius",
      id: "contentgenius",
      avatarUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T14:20:00.000Z",
    rating: 4.6,
    reviewCount: 124,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },
  {
    id: "ai-analytics-5",
    title: "AI-Powered Business Intelligence Dashboard",
    description: "Comprehensive analytics solution with AI-driven insights, predictive capabilities, and customizable visualization tools for data-driven decision making.",
    category: "Data Analysis",
    price: 2499,
    currency: "$",
    tags: ["Analytics", "Business Intelligence", "Dashboard"],
    author: {
      name: "InsightAnalytica",
      id: "insightanalytica"},
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T11:30:00.000Z",
    rating: 4.5,
    reviewCount: 47,
    location: "North America",
    availability: "1-2 Weeks",
    aiScore: 90
  },
  {
    id: "ai-vision-6",
    title: "Computer Vision API Bundle",
    description: "Ready-to-use computer vision APIs for object detection, image recognition, facial analysis, and scene understanding with comprehensive documentation.",
    category: "Computer Vision",
    price: 999,
    currency: "$",
    tags: ["Computer Vision", "Object Detection", "Image Recognition"],
    author: {
      name: "VisionTech AI",
      id: "visiontech",
      avatarUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100"},
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-10T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 36,
    featured: true,
    location: "Global",

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
    location: "Global",

location: 'Global',
    location: 'Global',
    availability: 'Immediate',
    aiScore: 94,;
  },];      name: "VisionTech AI";
      id: "visiontech";
      avatarUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100"};
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"];
    createdAt: "2023-12-10T16:45:00.000Z";
    rating: 4.8;
    reviewCount: 36;
    featured: true;
    location: "Global";
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  }
],

// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [
    location: 'North America',
    availability: '4 - 6 Weeks',
    ai_score: 92,
    availability: '2 - 3 Weeks',
    ai_score: 95,
    ai_score: 88,
    availability: '1 - 2 Weeks',
    ai_score: 90,
    ai_score: 94,
    id: 'ai-model-1'','
  title: 'GPT-4 API Integration Package''
    description:'
      'Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.'''
    category: 'AI Models & APIs'',
  price: 1999;'
    currency: '$'',]'
  tags: ['GPT-4', 'API Integration', 'NLP']'
    author: {,'
  name: 'AI Solutions Inc.'''
      id: 'ai-solutions'',
  avatarUrl:
    featured: true,'
    location: 'Global',''
    availability: 'Immediate','
    ai_score: 98,
  },
  {'
    location: 'North America',''
    availability: '4 - 6 Weeks','
    ai_score: 92,
  },
  {
    featured: true,'
    location: 'Global',''
    availability: '2 - 3 Weeks','
    ai_score: 95,
  },
  {'
    location: 'Global',''
    availability: 'Immediate','
    ai_score: 88,
  },
  {'
    location: 'North America',''
    availability: '1 - 2 Weeks','
    ai_score: 90,
  },
  {
    featured: true,'
    location: 'Global',''
    availability: 'Immediate','
    ai_score: 94,'
  }, ];      name: "VisionTech AI";","
  id: "visiontech";"
    aiScore: 94;
  }
];
// Generate search suggestions based on existing listings;
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [


// Shared data source for marketplace listings;]
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {"
    id: "ai-model-1",""
    title: "GPT-4 API Integration Package",""
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.",""
    category: "AI Models & APIs","
    price: 1999,"
    currency: "$","]"
    tags: ["GPT-4", "API Integration", "NLP"],"
    author: {,"
  name: "AI Solutions Inc.",""
      id: "ai-solutions",""
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100"},""
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],""
    createdAt: "2024-01-10T12:30:00.000Z","
    rating: 4.9,
    reviewCount: 58,
    featured: true,"
    location: "Global",""
    availability: "Immediate","
    aiScore: 98;
  },
  {"
    id: "ai-service-2",""
    title: "Custom Machine Learning Model Development",""
    description: "End-to-end development of custom ML models tailored to your specific business needs. From data preparation to deployment and monitoring.",""
    category: "Services","
    price: 5999,"
    currency: "$",""
    tags: ["Machine Learning", "Custom Development", "Data Science"],"
    author: {,"
  name: "DataMinds",""
      id: "dataminds",""
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},""
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],""
    createdAt: "2024-02-15T10:45:00.000Z","
    rating: 4.8,
    reviewCount: 32,"
    location: "North America",""
    availability: "4-6 Weeks","
    aiScore: 92;
  },
  {"
    id: "ai-equipment-3",""
    title: "AI Workstation Supercomputer",""
    description: "High-performance computing rig optimized for AI model training and deep learning applications. Features NVIDIA A100 GPUs, terabytes of storage, and pre-installed ML frameworks.",""
    category: "Equipment","
    price: 12999,"
    tags: ["Hardware", "Deep Learning", "GPU"],"
    currency: "$",""
    tags: ["Hardware", "Deep Learning", "GPU"],"
    author: {,"
  name: "TechGear Pro",""
      id: "techgear"},""
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],""
    createdAt: "2024-03-05T09:15:00.000Z","
    rating: 4.7,
    reviewCount: 18,
    availability: "2-3 Weeks","
    aiScore: 95;
    featured: true,"
    location: "Global",""
    availability: "2-3 Weeks","
    aiScore: 95;
  },
  {"
    id: "ai-content-4",""
    title: "AI Content Generation Suite",""
    description: "Complete toolkit for generating blog posts, social media content, product descriptions, and more using advanced AI. Includes API access and user-friendly interface.",""
    category: "Content Creation","
    price: 399,"
    tags: ["Content Generation", "Copywriting", "Marketing"],"
    currency: "$",""
    tags: ["Content Generation", "Copywriting", "Marketing"],"
    author: {,"
  name: "ContentGenius",""
      id: "contentgenius",""
      avatarUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=100&h=100"},""
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],""
    createdAt: "2024-01-28T14:20:00.000Z","
    rating: 4.6,
    reviewCount: 124,"
    aiScore: 88;
    location: "Global",""
    availability: "Immediate","
    aiScore: 88;
  },
  {"
    id: "ai-analytics-5",""
    title: "AI-Powered Business Intelligence Dashboard",""
    description: "Comprehensive analytics solution with AI-driven insights, predictive capabilities, and customizable visualization tools for data-driven decision making.",""
    category: "Data Analysis","
    price: 2499,"
    tags: ["Analytics", "Business Intelligence", "Dashboard"],"
    currency: "$",""
    tags: ["Analytics", "Business Intelligence", "Dashboard"],"
    author: {,"
  name: "InsightAnalytica",""
      id: "insightanalytica"},""
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],""
    createdAt: "2024-02-02T11:30:00.000Z","
    rating: 4.5,
    reviewCount: 47,"
    availability: "1-2 Weeks","
    aiScore: 90;
    location: "North America",""
    availability: "1-2 Weeks","
    aiScore: 90;
  },
  {"
    id: "ai-vision-6",""
    title: "Computer Vision API Bundle",""
    description: "Ready-to-use computer vision APIs for object detection, image recognition, facial analysis, and scene understanding with comprehensive documentation.",""
    category: "Computer Vision","
    price: 999,"
    tags: ["Computer Vision", "Object Detection", "Image Recognition"],"
    currency: "$",""
    tags: ["Computer Vision", "Object Detection", "Image Recognition"],"
    author: {,"
  name: "VisionTech AI",""
      id: "visiontech",""
      avatarUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100"},""
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],""
    createdAt: "2023-12-10T16:45:00.000Z","
    reviewCount: 36,
],

// Generate search suggestions based on existing listings;
  const suggestions = ["
pr-12325
    'AI models',
    'GPT integration',
    'Machine learning',
    'Computer vision',
    'Speech recognition',
    'Data analysis',
    'Content generation',
    'Code assistant',
    'Virtual assistant',
    'Enterprise AI solutions',;
  ];

type: 'product', // Use a valid type from the SearchSuggestion interface
    type: 'product', // Use a valid type from the SearchSuggestion interface
  }));};  ];
    "AI models",
    "GPT integration",
    "Machine learning",
    "Computer vision",
    "Speech recognition",
    "Data analysis",
    "Content generation",
    "Code assistant",
    "Virtual assistant",
    "Enterprise AI solutions"
  ],


ursor/fix-website-loading-errors-and-merge-6662
  
  return suggestions.map(text => ({
    text,
    type: 'product' // Use a valid type from the SearchSuggestion interface
  }))

    ...new Set(MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.category)),
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
// Generate filter options for sidebar
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings
  const productTypes = [
    ...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category))
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
  }));
};

// Generate filter options for sidebar
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings
const productTypes = [
    ...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category)),
<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
  ].sort();
  const locations = [
    ...new Set(
      MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.location).filter(Boolean)
    ),
  ].sort();
  const availability = [
    ...new Set(
      MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.availability).filter(Boolean)
    ),
  ].sort();

    productTypes: productTypes && productTypes.map(type => ({
      label: type,
      value: type,
    })),
    locations: locations && locations.map(location => ({
      label: location,
      value: location,
    })),
    availabilityOptions: availability && availability.map(item => ({
      label: item,
      value: item,
    rating: 4.8,
    reviewCount: 36,
    featured: true,"
    location: "Global",""
    location: "Global",""
    availability: "Immediate","

    aiScore: 94;
  }
],

// Generate search suggestions based on existing listings;
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = ["
    'AI models',''
    'GPT integration',''
    'Machine learning',''
    'Computer vision',''
    'Speech recognition',''
    'Data analysis',''
    'Content generation',''
    'Code assistant',''
    'Virtual assistant',''
    'Enterprise AI solutions',;']
  ];

'
    "AI models",""
    "GPT integration",""
    "Machine learning",""
    "Computer vision",""
    "Speech recognition",""
    "Data analysis",""
    "Content generation",""
    "Code assistant",""
    "Virtual assistant",""
    "Enterprise AI solutions""

  ],




  
  return suggestions.map(text => ({

    text,"
    type: 'product' // Use a valid type from the SearchSuggestion interface;')
  }))

    ...new Set(MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.category)),
  ].sort();
  const locations = [
    ...new Set()
      MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.location).filter(Boolean)
    ),]
  ].sort();
  const availability = [
    ...new Set()
      MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.availability).filter(Boolean)
    ),]
  ].sort();

    productTypes: productTypes && productTypes.map(type => ({,
  label: type,
      value: type,)
    })),
    locations: locations && locations.map(location => ({,
  label: location,
      value: location,)
    })),
    availabilityOptions: availability && availability.map(item => ({,
  label: item,
      value: item,)
    })),
    ratingOptions: [1, 2, 3, 4, 5],
  };
};

export const MAX_PRICE = Math && Math.max(
  ...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0)
);
export const MIN_PRICE = Math && Math.min(
  ...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0)

);
reviewCount: 58;
featured: true;
location: "Global";
availability: "Immediate";
reviewCount: 18;
featured: true;
location: "Global";
availability: "2-3 Weeks";
reviewCount: 36;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 94
}];
//Generate search suggestions based on existing listings ];
  return {
    'Enterprise AI solutions',;']

    "AI models",""
    "GPT integration",""
    "Machine learning",""
    "Computer vision",""
    "Speech recognition",""
    "Data analysis",""
    "Content generation",""
    "Code assistant",""
    "Virtual assistant",""
    "Enterprise AI solutions""

  
  return suggestions.map(text => ({
    text,"
    type: 'product' // Use a valid type from the SearchSuggestion interface;')
  }))

    ...new Set(MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.category)),
  ].sort();
  const locations = [
    ...new Set()
      MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.location).filter(Boolean)
    ),]
  const availability = [
      MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.availability).filter(Boolean)

    productTypes: productTypes && productTypes.map(type => ({,
  label: type,
      value: type,)
    })),
    locations: locations && locations.map(location => ({,
  label: location,
      value: location,)
    availabilityOptions: availability && availability.map(item => ({,
  label: item,
      value: item,)
    ratingOptions: [1, 2, 3, 4, 5],
  };

export const MAX_PRICE = Math && Math.max()
  ...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0)
);
export const MIN_PRICE = Math && Math.min()

reviewCount: 58;,
  featured: true;
location: "Global";","
  availability: "Immediate";"
reviewCount: 18;,
  featured: true;"
  availability: "2-3 Weeks";"
reviewCount: 36;,
}];
//Generate search suggestions based on existing listings ];
  return {
  // TODO: Implement
pr-12325
}
ratingOptions: [1, 2, 3, 4, 5]
};export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price |0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price |0));

pr-12325

};export const MAX_PRICE = Math && Math.max(...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0));
export const MIN_PRICE = Math && Math.min(...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0));

},

// Generate filter options for sidebar
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings

      avatar_url: "https://images.unsplash.com / photo - 1600180758890 - 6b94519a8ba6?auto = format & fit = crop & w=100 & h=100"}
    images: ["https://images.unsplash.com / photo - 1624355834900 - 99cd2071585b?auto = format & fit = crop & w=800 & h=500"];
    created_at: "2023 - 12 - 10T16:45:00.000Z";
    rating: 4.8;
    review_count: 36;
    featured: true;
    location: "Global";
    availability: "Immediate",

// Generate filter options for sidebar;
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings;"
      avatar_url: "https://images.unsplash.com / photo - 1600180758890 - 6b94519a8ba6?auto = format & fit = crop & w=100 & h=100"}""
    images: ["https://images.unsplash.com / photo - 1624355834900 - 99cd2071585b?auto = format & fit = crop & w=800 & h=500"];","
  created_at: "2023 - 12 - 10T16: 45:00.000Z";",
  rating: 4.8;
    review_count: 36;,
  featured: true;"
    location: "Global";","
  availability: "Immediate","

    ai_score: 94;
  }
];
;
// Generate search suggestions based on existing listings;
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [;
    'AI models',
    'GPT integration',
    'Machine learning',
    'Computer vision',
    'Speech recognition',
    'Data analysis',
    'Content generation',
    'Code assistant',
    'Virtual assistant',
    'Enterprise AI solutions',
  ];
;
  return suggestions.map (text => ({
    text,
    type: 'product', // Use a valid type from the SearchSuggestion interface;
  }));}  ];
;
  return suggestions.map (text => ({
    text;
    type: 'product' // Use a valid type from the SearchSuggestion interface;
  const suggestions = [;"
    'AI models',''
    'GPT integration',''
    'Machine learning',''
    'Computer vision',''
    'Speech recognition',''
    'Data analysis',''
    'Content generation',''
    'Code assistant',''
    'Virtual assistant',''
    'Enterprise AI solutions',']
  ];
;
  return suggestions.map (text => ({

    text,'
    type: 'product', // Use a valid type from the SearchSuggestion interface;')
  }));}  ];
;
  return suggestions.map (text => ({
    text;'
    type: 'product' // Use a valid type from the SearchSuggestion interface;')

  }));
}
;
// Generate filter options for sidebar;
export const generateFilterOptions = () =>: any {
  // Extract unique categories, locations, and availability options from listings;
  const product_types = [;
    ...new Set (MARKETPLACE_LISTINGS.map (listing => listing.category)),
  ].sort ();
  const locations = [;
    ...new Set (
      MARKETPLACE_LISTINGS.map (listing => listing.location).filter (Boolean)),
  ].sort ();
  const availability = [;
    ...new Set (
      MARKETPLACE_LISTINGS.map (listing => listing.availability).filter (Boolean)),
  ].sort ();
;
    product_types: product_types.map (type => ({
const productTypes = [
  const productTypes = [
    ...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category)),;
  ].sort();
  const locations = [
    ...new Set(
      MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean)
    ),
  ].sort();
  const availability = [
    ...new Set(
      MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean)
    ),
  ].sort();

  const productTypes = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category))].sort(),
  const locations = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean))].sort(),
  const availability = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean))].sort(),
  
  return {
    productTypes: productTypes.map(type => ({
      label: type,
      value: type,
    })),
    locations: locations.map (location => ({
      label: location,
      value: location,
    })),
    availability_options: availability.map (item => ({
      label: item,
      value: item,
  // TODO: Implement
}
  // Extract unique categories, locations, and availability options from listings;
  const product_types = [;
    ...new Set (MARKETPLACE_LISTINGS.map (listing => listing.category)),]
  ].sort ();
  const locations = [;
    ...new Set ()
      MARKETPLACE_LISTINGS.map (listing => listing.location).filter (Boolean)),]
  ].sort ();
  const availability = [;
    ...new Set ()
      MARKETPLACE_LISTINGS.map (listing => listing.availability).filter (Boolean)),]
  ].sort ();
;

    product_types: product_types.map (type => ({,
  label: type,
      value: type,)
    })),
    locations: locations.map (location => ({,
  label: location,
      value: location,)
    })),
    availability_options: availability.map (item => ({,
  label: item,
      value: item,)
    })),
    rating_options: [1, 2, 3, 4, 5],
  }
}
;
export const MAX_PRICE = Math.max (
  ...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
export const MIN_PRICE = Math.min (
  ...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
review_count: 58;
ratingOptions: [1, 2, 3, 4, 5],
    ratingOptions: [1, 2, 3, 4, 5],
  };
};

export const MAX_PRICE = Math.max(
  ...MARKETPLACE_LISTINGS.map(listing => listing.price || 0);
);
export const MIN_PRICE = Math.min(
  ...MARKETPLACE_LISTINGS.map(listing => listing.price || 0);
);
reviewCount: 58;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 98 
};
featured: true;
location: "Global";
availability: "Immediate";
ai_score: 98;
}
rating: 4.8;
review_count: 32;
location: "North America";
availability: "4 - 6 Weeks";
ai_score: 92;
}
rating: 4.7;
review_count: 18;
featured: true;
location: "Global";
availability: "2 - 3 Weeks";
ai_score: 95;
}
rating: 4.6;
review_count: 124;
location: "Global";
availability: "Immediate";
ai_score: 88;
}
rating: 4.5;
review_count: 47;
location: "North America";
availability: "1 - 2 Weeks";
ai_score: 90;
}
rating: 4.8;
review_count: 36;
featured: true;
location: "Global";
availability: "Immediate";
ai_score: 94;
}];
//Generate search suggestions based on existing listings ];
  return {
  product_types: product_types.map (type => ({
  label: type, value: type;
}) );
locations: locations.map (location => ({
  label: location, value: location;
}) );
availability_options: availability.map (item => ({
  label: item, value: item;
}) );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
rating_options: [1, 2, 3, 4, 5];
}export const MAX_PRICE = Math.max (...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
export const MIN_PRICE = Math.min (...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
;
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee

export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));


export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
ursor/fix-website-loading-errors-and-merge-6662
ratingOptions: [1, 2, 3, 4, 5] 

};export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
    ratingOptions: [1, 2, 3, 4, 5]
import { ProductListing } from "@/types/listings",;
import { SearchSuggestion } from "@/types/search",;
// Shared data source for marketplace listings;
export const MARKETPLACE_LISTINGS: ProductListing[] = [;
  {;
    id: "ai-model-1",;
    title: "GPT-4 API Integration Package",;
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.",;
    category: "AI Models & APIs",;
    price: 1999,;
    currency: "$",;
    tags: ["GPT-4", "API Integration", "NLP"],;
    author: {;
      name: "AI Solutions Inc.",;
      id: "ai-solutions",;
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2024-01-10T12:30:00.000Z",;
    rating: 4.9,;
    reviewCount: 58,;
    featured: true,;
    location: "Global",;
    availability: "Immediate",;
    aiScore: 98;
  },;
  {;
    id: "ai-service-2",;
    title: "Custom Machine Learning Model Development",;
    description: "End-to-end development of custom ML models tailored to your specific business needs. From data preparation to deployment and monitoring.",;
    category: "Services",;
    price: 5999,;
    currency: "$",;
    tags: ["Machine Learning", "Custom Development", "Data Science"],;
    author: {;
      name: "DataMinds",;
      id: "dataminds",;
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2024-02-15T10:45:00.000Z",;
    rating: 4.8,;
    reviewCount: 32,;
    location: "North America",;
    availability: "4-6 Weeks",;
    aiScore: 92;
  },;
  {;
    id: "ai-equipment-3",;
    title: "AI Workstation Supercomputer",;
    description: "High-performance computing rig optimized for AI model training and deep learning applications. Features NVIDIA A100 GPUs, terabytes of storage, and pre-installed ML frameworks.",;
    category: "Equipment",;
    price: 12999,;
    currency: "$",;
    tags: ["Hardware", "Deep Learning", "GPU"],;
    author: {;
      name: "TechGear Pro",;
      id: "techgear"},;
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2024-03-05T09:15:00.000Z",;
    rating: 4.7,;
    reviewCount: 18,;
    featured: true,;
    location: "Global",;
    availability: "2-3 Weeks",;
    aiScore: 95;
  },;
  {;
    id: "ai-content-4",;
    title: "AI Content Generation Suite",;
    description: "Complete toolkit for generating blog posts, social media content, product descriptions, and more using advanced AI. Includes API access and user-friendly interface.",;
    category: "Content Creation",;
    price: 399,;
    currency: "$",;
    tags: ["Content Generation", "Copywriting", "Marketing"],;
    author: {;
      name: "ContentGenius",;
      id: "contentgenius",;
      avatarUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2024-01-28T14:20:00.000Z",;
    rating: 4.6,;
    reviewCount: 124,;
    location: "Global",;
    availability: "Immediate",;
    aiScore: 88;
  },;
  {;
    id: "ai-analytics-5",;
    title: "AI-Powered Business Intelligence Dashboard",;
    description: "Comprehensive analytics solution with AI-driven insights, predictive capabilities, and customizable visualization tools for data-driven decision making.",;
    category: "Data Analysis",;
    price: 2499,;
    currency: "$",;
    tags: ["Analytics", "Business Intelligence", "Dashboard"],;
    author: {;
      name: "InsightAnalytica",;
      id: "insightanalytica"},;
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2024-02-02T11:30:00.000Z",;
    rating: 4.5,;
    reviewCount: 47,;
    location: "North America",;
    availability: "1-2 Weeks",;
    aiScore: 90;
  },;
  {;
    id: "ai-vision-6",;
    title: "Computer Vision API Bundle",;
    description: "Ready-to-use computer vision APIs for object detection, image recognition, facial analysis, and scene understanding with comprehensive documentation.",;
    category: "Computer Vision",;
    price: 999,;
    currency: "$",;
    tags: ["Computer Vision", "Object Detection", "Image Recognition"],;
    author: {;
      name: "VisionTech AI",;
      id: "visiontech",;
      avatarUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100"},;
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],;
    createdAt: "2023-12-10T16:45:00.000Z",;
    rating: 4.8,;
    reviewCount: 36,;
    featured: true,;
    location: "Global",;
    availability: "Immediate",;
    aiScore: 94;
  }
],;
// Generate search suggestions based on existing listings;
export const generateSearchSuggestions = (): SearchSuggestion[] => {;
  const suggestions = [;
    "AI models",;
    "GPT integration",;
    "Machine learning",;
    "Computer vision",;
    "Speech recognition",;
    "Data analysis",;
    "Content generation",;
    "Code assistant",;
    "Virtual assistant",;
    "Enterprise AI solutions";
  ],;
  return suggestions.map(text => ({;
    text,;
    type: 'product' // Use a valid type from the SearchSuggestion interface;
  }));
},;

// Generate filter options for sidebar;
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings;"
      avatar_url: "https://images.unsplash.com / photo - 1600180758890 - 6b94519a8ba6?auto = format & fit = crop & w=100 & h=100"}""
    images: ["https://images.unsplash.com / photo - 1624355834900 - 99cd2071585b?auto = format & fit = crop & w=800 & h=500"];","
  created_at: "2023 - 12 - 10T16: 45:00.000Z";",
  rating: 4.8;
    review_count: 36;,
    ai_score: 94;
;
// Generate search suggestions based on existing listings;
  const suggestions = [;"
    'Enterprise AI solutions',']
  return suggestions.map (text => ({
    text,
    type: 'product', // Use a valid type from the SearchSuggestion interface;')
  }));}  ];
    text;
  }));
// Generate filter options for sidebar;
export const generateFilterOptions = () =>: any {
  // TODO: Implement
  // Extract unique categories, locations, and availability options from listings;
  const product_types = [;
    ...new Set (MARKETPLACE_LISTINGS.map (listing => listing.category)),]
  ].sort ();
  const locations = [;
    ...new Set ()
      MARKETPLACE_LISTINGS.map (listing => listing.location).filter (Boolean)),]
  const availability = [;
      MARKETPLACE_LISTINGS.map (listing => listing.availability).filter (Boolean)),]
    product_types: product_types.map (type => ({,
    locations: locations.map (location => ({,
    availability_options: availability.map (item => ({,
    rating_options: [1, 2, 3, 4, 5],
export const MAX_PRICE = Math.max ()
  ...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
export const MIN_PRICE = Math.min ()
review_count: 58;,
export const MAX_PRICE = Math.max ()
  ...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
export const MIN_PRICE = Math.min ()
  ...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
review_count: 58;,
  featured: true;'
location: "Global";","
  availability: "Immediate";"
aiScore: 98;
};
featured: true;,"
  location: "Global";""
availability: "Immediate";",
  ai_score: 98;
}
rating: 4.8;,
  review_count: 32;"
location: "North America";","
  availability: "4 - 6 Weeks";"
ai_score: 92;
rating: 4.7;,
  review_count: 18;
availability: "2 - 3 Weeks";",
  ai_score: 95;
rating: 4.6;,
  review_count: 124;"
ai_score: 88;
rating: 4.5;,
  review_count: 47;"
  availability: "1 - 2 Weeks";"
ai_score: 90;
  review_count: 36;
//Generate search suggestions based on existing listings ];
  // TODO: Implement
  label: type, value: type;)
}) );
  label: location, value: location;)
  label: item, value: item;)
rating_options: [1, 2, 3, 4, 5];
}export const MAX_PRICE = Math.max (...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
export const MIN_PRICE = Math.min (...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));


export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
}
rating: 4.7;,
  review_count: 18;
featured: true;,"
  location: "Global";""
availability: "2 - 3 Weeks";",
  ai_score: 95;
}
rating: 4.6;,
  review_count: 124;"
location: "Global";","
  availability: "Immediate";"
ai_score: 88;
}
rating: 4.5;,
  review_count: 47;"
location: "North America";","
  availability: "1 - 2 Weeks";"
ai_score: 90;
}
rating: 4.8;,
  review_count: 36;
featured: true;,"
  location: "Global";""
availability: "Immediate";",
  ai_score: 94;
}];
//Generate search suggestions based on existing listings ];
  return {
  // TODO: Implement
}
  product_types: product_types.map (type => ({,
  label: type, value: type;)
}) );
locations: locations.map (location => ({,
  label: location, value: location;)
}) );
availability_options: availability.map (item => ({,
  label: item, value: item;)

}) );


export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));


ratingOptions: [1, 2, 3, 4, 5] 

};export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));

    ratingOptions: [1, 2, 3, 4, 5]"
import { ProductListing } from "@/types/listings",;""
import { SearchSuggestion } from "@/types/search",;"
// Shared data source for marketplace listings;
export const MARKETPLACE_LISTINGS: ProductListing[] = [;
  {;"
    id: "ai-model-1",;""
    title: "GPT-4 API Integration Package",;""
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.",;""
    category: "AI Models & APIs",;"
    price: 1999,;"
    currency: "$",;"]"
    tags: ["GPT-4", "API Integration", "NLP"],;"
    author: {;,"
  name: "AI Solutions Inc.",;""
      id: "ai-solutions",;""
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100"},;""
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],;""
    createdAt: "2024-01-10T12:30:00.000Z",;"
    rating: 4.9,;
    reviewCount: 58,;
    featured: true,;"
    location: "Global",;""
    availability: "Immediate",;"
  },;
    id: "ai-service-2",;""
    title: "Custom Machine Learning Model Development",;""
    description: "End-to-end development of custom ML models tailored to your specific business needs. From data preparation to deployment and monitoring.",;""
    category: "Services",;"
    price: 5999,;"
    currency: "$",;""
    tags: ["Machine Learning", "Custom Development", "Data Science"],;"
  name: "DataMinds",;""
      id: "dataminds",;""
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100"},;""
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],;""
    createdAt: "2024-02-15T10:45:00.000Z",;"
    rating: 4.8,;
    reviewCount: 32,;"
    location: "North America",;""
    availability: "4-6 Weeks",;"
    id: "ai-equipment-3",;""
    title: "AI Workstation Supercomputer",;""
    description: "High-performance computing rig optimized for AI model training and deep learning applications. Features NVIDIA A100 GPUs, terabytes of storage, and pre-installed ML frameworks.",;""
    category: "Equipment",;"
    price: 12999,;"
    tags: ["Hardware", "Deep Learning", "GPU"],;"
  name: "TechGear Pro",;""
      id: "techgear"},;""
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],;""
    createdAt: "2024-03-05T09:15:00.000Z",;"
    rating: 4.7,;
    reviewCount: 18,;
    availability: "2-3 Weeks",;"
    id: "ai-content-4",;""
    title: "AI Content Generation Suite",;""
    description: "Complete toolkit for generating blog posts, social media content, product descriptions, and more using advanced AI. Includes API access and user-friendly interface.",;""
    category: "Content Creation",;"
    price: 399,;"
    tags: ["Content Generation", "Copywriting", "Marketing"],;"
  name: "ContentGenius",;""
      id: "contentgenius",;""
      avatarUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=100&h=100"},;""
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],;""
    createdAt: "2024-01-28T14:20:00.000Z",;"
    rating: 4.6,;
    reviewCount: 124,;"
    id: "ai-analytics-5",;""
    title: "AI-Powered Business Intelligence Dashboard",;""
    description: "Comprehensive analytics solution with AI-driven insights, predictive capabilities, and customizable visualization tools for data-driven decision making.",;""
    category: "Data Analysis",;"
    price: 2499,;"
    tags: ["Analytics", "Business Intelligence", "Dashboard"],;"
  name: "InsightAnalytica",;""
      id: "insightanalytica"},;""
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;""
    createdAt: "2024-02-02T11:30:00.000Z",;"
    rating: 4.5,;
    reviewCount: 47,;"
    availability: "1-2 Weeks",;"
    id: "ai-vision-6",;""
    title: "Computer Vision API Bundle",;""
    description: "Ready-to-use computer vision APIs for object detection, image recognition, facial analysis, and scene understanding with comprehensive documentation.",;""
    category: "Computer Vision",;"
    price: 999,;"
    tags: ["Computer Vision", "Object Detection", "Image Recognition"],;"
  name: "VisionTech AI",;""
      id: "visiontech",;""
      avatarUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100"},;""
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],;""
    createdAt: "2023-12-10T16:45:00.000Z",;"
    reviewCount: 36,;
],;
// Generate search suggestions based on existing listings;
export const generateSearchSuggestions = (): SearchSuggestion[] => {;
    featured: true,;"
    location: "Global",;""
    availability: "Immediate",;"

    aiScore: 94;
  }
],;
// Generate search suggestions based on existing listings;
export const generateSearchSuggestions = (): SearchSuggestion[] => {;

  const suggestions = [;"
    "AI models",;""
    "GPT integration",;""
    "Machine learning",;""
    "Computer vision",;""
    "Speech recognition",;""
    "Data analysis",;""
    "Content generation",;""
    "Code assistant",;""
    "Virtual assistant",;""
    "Enterprise AI solutions";"]
  return suggestions.map(text => ({;
    text,;"
pr-12325
    type: 'product' // Use a valid type from the SearchSuggestion interface;')

  }));
},;
// Generate filter options for sidebar;
export const generateFilterOptions = (;
  // Extract unique categories, locations, and availability options from listings;
  const productTypes = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category))].sort(),;
  const locations = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean))].sort(),;
  const availability = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean))].sort(),;
  return {;
    productTypes: productTypes.map(type => ({;
      label: type,;
      value: type;
    })),;
    locations: locations.map(location => ({;
      label: location,;
      value: location;
    })),;
    availabilityOptions: availability.map(item => ({;
      label: item,;
      value: item;

    productTypes: productTypes.map(type => ({;,
  label: type,;
      value: type;)
    })),;
    locations: locations.map(location => ({;,
  label: location,;
      value: location;)
    })),;
    availabilityOptions: availability.map(item => ({;,
  label: item,;
      value: item;)

    })),;
    ratingOptions: [1, 2, 3, 4, 5];
  }
},;
export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));

export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
  productTypes: productTypes.map (type => ({
  label: type, value: type
}) );
locations: locations.map (location => ({
  label: location, value: location
}) );
availabilityOptions: availability.map (item => ({
  label: item, value: item
}) );
ratingOptions: [1, 2, 3, 4, 5] 

};
origin/cursor/automate-test-improve-and-merge-code-2533
    productTypes: productTypes.map(type => ({;,
  label: type,;
      value: type;)
    })),;
    locations: locations.map(location => ({;,
  label: location,;
      value: location;)
    availabilityOptions: availability.map(item => ({;,
  label: item,;
      value: item;)
    ratingOptions: [1, 2, 3, 4, 5];
export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));

pr-12325

export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
'

