 //Mock marketplace listings with more realistic data export const MARKETPLACE LISTINGS: ProductListing[] = [ {
  id: "ai-model-1";
title: "GPT-4 API Integration Package";
description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.";
category: "AI Models & APIs";
price: 1999;
currency: "$";
tags: ["GPT-4", "API Integration", "NLP" ];
author: {
  name: "AI Solutions Inc.";
id: "ai-solutions";
avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100" 
};
images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500" ];
createdAt: "2024-01-10T12:30:00.000Z";
reviewCount: 58;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 98 
};
rating: 4.8;
reviewCount: 32;
location: "North America";
availability: "4-6 Weeks";
aiScore: 92 
};
rating: 4.7;
reviewCount: 18;
featured: true;
location: "Global";
availability: "2-3 Weeks";
aiScore: 95 
};
rating: 4.6;
reviewCount: 124;
location: "Global";
availability: "Immediate";
aiScore: 88 
};
rating: 4.5;
reviewCount: 47;
location: "North America";
availability: "1-2 Weeks";
aiScore: 90 
};
rating: 4.8;
reviewCount: 36;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 94 
};
rating: 4.7;
reviewCount: 29;
location: "Europe";
availability: "3-4 Weeks";
aiScore: 91 
};
rating: 4.6;
reviewCount: 41;
location: "Global";
availability: "1-2 Weeks";
aiScore: 89 
};
rating: 4.9;
reviewCount: 89;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 97 
};
rating: 4.8;
reviewCount: 22;
location: "North America";
availability: "4-6 Weeks";
aiScore: 96 
};
rating: 4.7;
reviewCount: 65;
location: "Global";
availability: "Immediate";
aiScore: 88 
};
rating: 4.8;
reviewCount: 19;
featured: true;
location: "Asia";
availability: "3-4 Weeks";
aiScore: 93 
};
//Adding equipment listings so they're available in marketplace too rating: 4.8;
reviewCount: 32;
featured: true;
location: "Global";
availability: "1-2 Weeks" 
};
rating: 4.9;
reviewCount: 18;
featured: true;
location: "North America";
availability: "2-4 Weeks" 
}];
//Generate search suggestions based on existing listings ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Convert strings to SearchSuggestion objects return suggestions.map (text => ({
  return {
  productTypes: productTypes.map (type => ({
  label: type, value: type 
}) );
locations: locations.map (location => ({
  label: location, value: location 
}) );
availabilityOptions: availability.map (item => ({
  label: item, value: item 
}) );
ratingOptions: [1, 2, 3, 4, 5] // Add rating options 
}
};
