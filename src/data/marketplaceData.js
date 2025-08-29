export function generateSearchSuggestions() {
  return [
    "AI Services",
    "Cloud Computing",
    "Cybersecurity",
    "Micro SAAS",
    "IT Infrastructure",
    "Quantum Computing",
    "Blockchain Solutions",
    "IoT Services",
    "Data Analytics",
    "Machine Learning",
    "DevOps Services",
    "Mobile Development",
    "Web Development",
    "Digital Transformation",
    "Enterprise Solutions",
    "Startup Services",
    "Consulting",
    "Training",
    "Support",
    "Maintenance"
  ];
}

// Marketplace items data
export const marketplaceItems = [
  {
    id: 1,
    title: "AI-Powered Business Intelligence Platform",
    description: "Advanced analytics and insights powered by machine learning algorithms",
    category: "AI Services",
    price: "$2,500/month",
    rating: 4.8,
    location: "Global",
    availability: "Available",
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"],
    images: ["/images/ai-bi-platform.jpg"]
  },
  {
    id: 2,
    title: "Quantum-Safe Cybersecurity Suite",
    description: "Next-generation security solutions resistant to quantum computing attacks",
    category: "Cybersecurity",
    price: "$1,800/month",
    rating: 4.9,
    location: "Global",
    availability: "Available",
    tags: ["Cybersecurity", "Quantum Computing", "Security", "Encryption"],
    images: ["/images/quantum-security.jpg"]
  },
  {
    id: 3,
    title: "Blockchain Supply Chain Platform",
    description: "Transparent and secure supply chain management using blockchain technology",
    category: "Blockchain Solutions",
    price: "$3,200/month",
    rating: 4.7,
    location: "Global",
    availability: "Available",
    tags: ["Blockchain", "Supply Chain", "Transparency", "Security"],
    images: ["/images/blockchain-supply.jpg"]
  },
  {
    id: 4,
    title: "IoT Smart City Infrastructure",
    description: "Comprehensive IoT solutions for modern smart city development",
    category: "IoT Services",
    price: "$4,500/month",
    rating: 4.6,
    location: "Global",
    availability: "Available",
    tags: ["IoT", "Smart City", "Infrastructure", "Automation"],
    images: ["/images/iot-smart-city.jpg"]
  },
  {
    id: 5,
    title: "Cloud-Native Microservices Platform",
    description: "Scalable microservices architecture for modern applications",
    category: "Cloud Computing",
    price: "$2,800/month",
    rating: 4.8,
    location: "Global",
    availability: "Available",
    tags: ["Cloud", "Microservices", "Scalability", "Architecture"],
    images: ["/images/cloud-microservices.jpg"]
  }
];

// Marketplace filters configuration
export const marketplaceFilters = {
  productTypes: [
    "AI Services",
    "Cloud Computing", 
    "Cybersecurity",
    "Micro SAAS",
    "IT Infrastructure",
    "Quantum Computing",
    "Blockchain Solutions",
    "IoT Services",
    "Data Analytics",
    "Machine Learning",
    "DevOps Services",
    "Mobile Development",
    "Web Development",
    "Digital Transformation",
    "Enterprise Solutions",
    "Startup Services",
    "Consulting",
    "Training",
    "Support",
    "Maintenance"
  ],
  locations: [
    "Global",
    "North America",
    "Europe",
    "Asia Pacific",
    "Latin America",
    "Middle East",
    "Africa"
  ],
  availability: [
    "Available",
    "Coming Soon",
    "Limited Availability",
    "Custom Development"
  ]
};