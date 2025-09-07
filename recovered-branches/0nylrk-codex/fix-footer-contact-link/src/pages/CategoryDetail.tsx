<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useParams, Link } from "react-router-dom",
import { Header } from "@/components/header/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { useState, useEffect } from "react",
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",
import { MARKETPLACE_LISTINGS } from "@/data/listingData",
import { useNavigate } from "react-router-dom",
import { toast } from "@/hooks/use-toast";
export default function CategoryDetail() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { slug } = useParams() as { slug?: string },
  const navigate = useNavigate($2);
  const [isLoading, setIsLoading] = useState($2);
  const [listings, setListings] = useState($2);
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({
    title: "",
    description: "",
    icon: <Bot className = $2;
  // Map of category slugs to their display data
  const categoryData = $2;
      description: "On-demand IT support, consulting, development, and more",
      icon: <Briefcase className = $2;
    'talents': {
      title: "Talents",
      description: "Connect with AI experts, developers, and tech specialists",
      icon: <Brain className = $2;
    'equipment': {
      title: "Equipment",
      description: "Rent or buy specialized hardware, servers, and devices",
      icon: <Code className = $2;
    'innovation': {
      title: "Innovation",
      description: "Discover cutting-edge solutions and tech breakthroughs",
      icon: <Bot className = $2;
    'ai-models-apis': {
      title: "AI Models & APIs",
      description: "Access cutting-edge AI models with easy integration",
      icon: <Brain className = $2;
    'content-creation': {
      title: "Content Creation",
      description: "Generate high-quality content for your projects",
      icon: <PenLine className = $2;
    'data-analysis': {
      title: "Data Analysis",
      description: "Extract insights from complex datasets",
      icon: <BarChart className = $2;
    'computer-vision': {
      title: "Computer Vision",
      description: "Image and video processing solutions",
      icon: <Eye className = $2;
    'virtual-assistants': {
      title: "Virtual Assistants",
      description: "Intelligent automation for your workflow",
      icon: <Bot className = $2;
    'voice-speech': {
      title: "Voice & Speech",
      description: "Speech recognition and synthesis tools",
      icon: <Mic className = $2;
    'developer-tools': {
      title: "Developer Tools",
      description: "AI-powered coding assistance and automation",
      icon: <Code className = $2;
    'business-solutions': {
      title: "Business Solutions",
      description: "Enterprise AI integrations and services",
      icon: <Briefcase className = $2;
  useEffect(() => {
    setIsLoading($2);
    // Find the category data based on slug
    const currentCategory = $2;
      description: "Explore our collection in this category",
      icon: <Bot className = $2;
    setCategory($2);
    // Filter listings by category
    const categoryTitle = $2;
    const filteredListings = $2;
    // If we don't have real listings for this category, generate placeholder listings
    const listingsToShow = filteredListings.length > 0 ? filteredListings :
      Array(4).fill(null).map((_, index) => ({
        id: `${slug}-${index}`
        title: `${currentCategory.title} Product ${index + 1}`
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`
        category: currentCategory.title
        price: Math.floor(Math.random() * 500) + 50
        currency: "$"
        tags: [`${slug}`, "ai", "tool"];
        author: {
          name: `Provider ${index + 1}`,
          id: `author-${index + 1}`,
          avatarUrl: undefined},
        images: [`/placeholder.svg`],
        createdAt: new Date().toISOString($2);
        rating: Math.floor(Math.random() * 5) + 1,
        reviewCount: Math.floor(Math.random() * 100)
      })),
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    setListings($2);
    setIsLoading(false)
  }, [slug]),

  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find($2);
    if (listing) {
      toast($2);
      // Navigate to the quote request page with the listing information
=======
<<<<<<< HEAD

<<<<<<< HEAD
    const listing = listings.find(item => item.id === listingId)
    if (listing) {
      }
      toast({
=======
<<<<<<< HEAD
import {useParams, Link} from "react-router-dom";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/Footer";
import {GradientHeading} from "@/components/GradientHeading";
import {ProductListingCard} from "@/components/ProductListingCard";
import {useState, useEffect} from "react";
import {Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase} from "lucide-react";
import {MARKETPLACE_LISTINGS} from "@/data/listingData";
import {useNavigate} from "react-router-dom";
import {toast} from "@/hooks/use-toast";
export default function CategoryDetail() {
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
import { useParams, Link } from "react-router-dom",
import { Header } from "@/components/header/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { useState, useEffect } from "react",
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",
import { MARKETPLACE_LISTINGS } from "@/data/listingData",
import { useNavigate } from "react-router-dom",

<<<<<<< HEAD
=======


import { toast } from "@/hooks/use-toast";
export default function CategoryDetail() {
  // Cast to specify the expected route param type since useParams may be untyped

  const { slug } = useParams() as { slug?: string }
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
import { toast } from "@/hooks/use-toast",
export default function CategoryDetail() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { slug } = useParams() as { slug?: string },
  const navigate = useNavigate(),
  const [isLoading, setIsLoading] = useState(true),
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
import {useParams, Link} from "react-router-dom";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/Footer";
import {GradientHeading} from "@/components/GradientHeading";
import {ProductListingCard} from "@/components/ProductListingCard";
import {useState, useEffect} from "react";
import {Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase} from "lucide-react";
import {MARKETPLACE_LISTINGS} from "@/data/listingData";
import {useNavigate} from "react-router-dom";
import {toast} from "@/hooks/use-toast";
export default function CategoryDetail() {
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);

import { useParams, Link } from "react-router-dom",
import { Header } from "@/components/header/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { useState, useEffect } from "react",
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",
import { MARKETPLACE_LISTINGS } from "@/data/listingData",
import { useNavigate } from "react-router-dom",

import { toast } from "@/hooks/use-toast";
export default function CategoryDetail() {};
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string }
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);"
import { toast } from "@/hooks/use-toast",
export default function CategoryDetail() {};
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string },
  const navigate = useNavigate(),
  const [isLoading, setIsLoading] = useState(true),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({
    title: ""
    description: ""

    icon: <Bot className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
  });
  // Map of category slugs to their display data
  const categoryData = {
    'services': {
      title: "Services"
      description: "On-demand IT support, consulting, development, and more";
      icon: <Briefcase className="w-6 h-6" />
    }
    'talents': {
      title: "Talents"
      description: "Connect with AI experts, developers, and tech specialists";
      icon: <Brain className="w-6 h-6" />
    }
    'equipment': {
      title: "Equipment"
      description: "Rent or buy specialized hardware, servers, and devices";
      icon: <Code className="w-6 h-6" />
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Map of category slugs to their display data
  const categoryData = {
    'services': {
      title: "Services",
      description: "On-demand IT support, consulting, development, and more",
      icon: <Briefcase className="w-6 h-6" />
    },
    'talents': {
      title: "Talents",
      description: "Connect with AI experts, developers, and tech specialists",
      icon: <Brain className="w-6 h-6" />
    },
    'equipment': {
      title: "Equipment",
      description: "Rent or buy specialized hardware, servers, and devices",
      icon: <Code className="w-6 h-6" />
    },
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'ai-models-apis': {
      title: "AI Models & APIs"
      description: "Access cutting-edge AI models with easy integration"
      icon: <Brain className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'content-creation': {
      title: "Content Creation"
      description: "Generate high-quality content for your projects"
      icon: <PenLine className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'data-analysis': {
      title: "Data Analysis"
      description: "Extract insights from complex datasets"
      icon: <BarChart className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'computer-vision': {
      title: "Computer Vision"
      description: "Image and video processing solutions"
      icon: <Eye className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'virtual-assistants': {
      title: "Virtual Assistants"
      description: "Intelligent automation for your workflow"
      icon: <Bot className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'voice-speech': {
      title: "Voice & Speech"
      description: "Speech recognition and synthesis tools"
      icon: <Mic className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'developer-tools': {
      title: "Developer Tools"
      description: "AI-powered coding assistance and automation"
      icon: <Code className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD
    }
    },
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    },

    'business-solutions': {
      title: "Business Solutions"
      description: "Enterprise AI integrations and services"

      icon: <Briefcase className="w-6 h-6" />
    }

  },

  useEffect(() => {}
    setIsLoading(true),

    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    },

},

    }
    },
    'ai-models-apis': {
      title: "AI Models & APIs"
      description: "Access cutting-edge AI models with easy integration"
      icon: <Brain className="w-6 h-6" />

    },

},

    }
    },
    'content-creation': {
      title: "Content Creation"
      description: "Generate high-quality content for your projects"
      icon: <PenLine className="w-6 h-6" />

    },

},

    }
    },
    'data-analysis': {
      title: "Data Analysis"
      description: "Extract insights from complex datasets"
      icon: <BarChart className="w-6 h-6" />

    },

},

    }
    },
    'computer-vision': {
      title: "Computer Vision"
      description: "Image and video processing solutions"
      icon: <Eye className="w-6 h-6" />

    },

},

    }
    },
    'virtual-assistants': {
      title: "Virtual Assistants"
      description: "Intelligent automation for your workflow"
      icon: <Bot className="w-6 h-6" />

    },

},

    }
    },
    'voice-speech': {
      title: "Voice & Speech"
      description: "Speech recognition and synthesis tools"
      icon: <Mic className="w-6 h-6" />

    },

},

    }
    },
    'developer-tools': {
      title: "Developer Tools"
      description: "AI-powered coding assistance and automation"
      icon: <Code className="w-6 h-6" />
}
    },

    },

<<<<<<< HEAD
=======
<<<<<<< HEAD
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'business-solutions': {
      title: "Business Solutions"
      description: "Enterprise AI integrations and services"
      icon: <Briefcase className="w-6 h-6" />
    }

<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======

<<<<<<< HEAD
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {
    setIsLoading(true);
  }
  useEffect(() => {
    setIsLoading(true);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  useEffect(() => {
    setIsLoading(true),
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Find the category data based on slug
    const currentCategory = categoryData[slug as keyof typeof categoryData] |{
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') |"Category"
      description: "Explore our collection in this category"

      icon: <Bot className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
    }
    setCategory(currentCategory);
    // Filter listings by category
    const categoryTitle = currentCategory.title;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
    
    setCategory(currentCategory),

    // Filter listings by category
    const categoryTitle = currentCategory.title,
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing => 
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    ),
    
<<<<<<< HEAD
    // If we don't have real listings for this category, generate placeholder listings
    const listingsToShow = filteredListings.length > 0 ? filteredListings :
      Array(4).fill(null).map((_, index) => ({
        id: `${slug}-${index}`
        title: `${currentCategory.title} Product ${index + 1}`
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`
        category: currentCategory.title
        price: Math.floor(Math.random() * 500) + 50
        currency: "$"
        tags: [`${slug}`, "ai", "tool"];
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // If we don't have real listings for this category, generate placeholder listings
    const listingsToShow = filteredListings.length > 0 ? filteredListings :
      Array(4).fill(null).map((_, index) => ({

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Filter listings by category

    const categoryTitle = currentCategory.title;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>
      listing.category.toLowerCase() === categoryTitle.toLowerCase()

        id: `${slug}-${index}`,`
        title: `${currentCategory.title} Product ${index + 1}`,`
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
        category: currentCategory.title,
        price: Math.floor(Math.random() * 500) + 50,"
        currency: "$","`
        tags: [`${slug}`, "ai", "tool"],

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        id: `${slug}-${index}`,
        title: `${currentCategory.title} Product ${index + 1}`,
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
        category: currentCategory.title,
        price: Math.floor(Math.random() * 500) + 50,
        currency: "$",
        tags: [`${slug}`, "ai", "tool"],
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        author: {
          name: `Provider ${index + 1}`
          id: `author-${index + 1}`
          avatarUrl: undefined

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useParams, Link} from "react-router-dom";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/Footer";
import {GradientHeading} from "@/components/GradientHeading";
import {ProductListingCard} from "@/components/ProductListingCard";
import {useState, useEffect} from "react";
import {Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase} from "lucide-react";
import {MARKETPLACE_LISTINGS} from "@/data/listingData";
import {useNavigate} from "react-router-dom";
import {toast} from "@/hooks/use-toast";
export default function CategoryDetail() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX && JSX.Element}>({;
    title: "",
    description: "",;
    icon: <Bot className="w-6 h-6" />;
  });

  // Map of category slugs to their display data;
  const categoryData = {;
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }));
    setListings(listingsToShow);
    setIsLoading(false);
  }, [slug]);
<<<<<<< HEAD
=======
<<<<<<< HEAD
        }
        images: [`/placeholder.svg`]
        createdAt: new Date().toISOString()
        rating: Math.floor(Math.random() * 5) + 1
        reviewCount: Math.floor(Math.random() * 100)
      }));
    setListings(listingsToShow);
    setIsLoading(false)
  }, [slug]);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        images: [`/placeholder.svg`]
        createdAt: new Date().toISOString()
        rating: Math.floor(Math.random() * 5) + 1
        reviewCount: Math.floor(Math.random() * 100)
      }));
    setListings(listingsToShow);
    setIsLoading(false)
  }, [slug]);

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        },

        images: [`/placeholder.svg`],
        createdAt: new Date().toISOString(),
        rating: Math.floor(Math.random() * 5) + 1,
        reviewCount: Math.floor(Math.random() * 100)
      })),

    setListings(listingsToShow),
    setIsLoading(false)
  }, [slug]),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Handle requesting a quote

  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId)
    if (listing) {
      toast({
        title: "Quote Requested"

        description: `Your quote request for ${listing.title} has been sent.`

<<<<<<< HEAD
      // Navigate to the quote request page with the listing information

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),
      


<<<<<<< HEAD
      });
      }),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Navigate to the quote request page with the listing information

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      navigate("/request-quote", {
        state: {
          serviceType: listing.category
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useParams, Link } from "react-router-dom",;

      icon: <Briefcase className="w-6 h-6" />;
    }
  },;
  useEffect(() => {;
    setIsLoading(true),;
    // Find the category data based on slug;

      icon: <Bot className="w-6 h-6" />;
    },;
    setCategory(currentCategory),;
>>>>>>> origin/chore/fix-lint-and-merge
    // Filter listings by category;
    const categoryTitle = currentCategory.title,
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>;
      listing.category.toLowerCase() === categoryTitle.toLowerCase();
<<<<<<< HEAD

    setIsLoading(false);
  }, [slug])}
=======
    ),;'
    // If we don't have real listings for this category, generate placeholder listings;
    const listingsToShow = filteredListings.length > 0 ? filteredListings :;

        category: currentCategory.title,;
        price: Math.floor(Math.random() * 500) + 50,;"
        currency: "$",;"`
        tags: [`${slug}`, "ai", "tool"],;
        author: {;`
          name: `Provider ${index + 1}`,;`
          id: `author-${index + 1}`,;
          avatarUrl: undefined;
        },;`
        images: [`/placeholder.svg`],;
        createdAt: new Date().toISOString(),;
        rating: Math.floor(Math.random() * 5) + 1,;
        reviewCount: Math.floor(Math.random() * 100);
      })),;
    setListings(listingsToShow),;
    setIsLoading(false);

  }, [slug]),;
<<<<<<< HEAD

  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = listings && listings.find(item => item && item.id === listingId),;

    if (listing) {;

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = listings && listings.find(item => item && item.id === listingId),;
    if (listing) {;
<<<<<<< HEAD

=======
      toast({;
        title: "Quote Requested",;
        description: `Your quote request for ${listing && listing.title} has been sent.`;
      });
      // Navigate to the quote request page with the listing information;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      navigate("/request-quote", {;
        state: { ;
          serviceType: listing && listing.category,;
          specificItem: {;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
            id: listing && listing.id,;
            title: listing && listing.title,;
            category: listing && listing.category,;
            image: listing && listing.images?.[0];
import { use_params, Link } from './react-router-dom';
import { Header } from '@/components / header / Header';
import { Footer } from '@/components / Footer';
import { GradientHeading } from '@/components / GradientHeading';
import { ProductListingCard } from '@/components / ProductListingCard';
import { useState, useEffect } from './react';
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from './lucide-react';
import { MARKETPLACE_LISTINGS } from '@/data / listing_data';
import { use_navigate } from './react-router-dom';
import { toast } from '@/hooks / use - toast';
export default /**
 * CategoryDetail - Function description
 */
function CategoryDetail() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Cast to specify the expected route param type since use_params may be untyped;
  const { slug } = use_params () as { slug?: string }
  const navigate = use_navigate ();
  const [is_loading, setIsLoading] = useState (true);
  const [listings, set_listings] = useState (MARKETPLACE_LISTINGS);

    icon: <Bot className="w - 6 h - 6" />;
  });
;
  // Map of category slugs to their display data;

      icon: <Briefcase className="w - 6 h - 6" />;
    }
  }
;

      icon: <Bot className="w - 6 h - 6" />;
    }
;
    set_category (current_category);
;
    // Filter listings by category;
    const category_title = current_category.title;
    const filtered_listings = MARKETPLACE_LISTINGS.filter (listing =>;
      listing.category.toLowerCase () === category_title.toLowerCase ());

        images: [`/placeholder.svg`],
        created_at: new Date ().toISOString (),
        rating: Math.floor (Math.random () * 5) + 1,
        review_count: Math.floor (Math.random () * 100);
      }));
;
    set_listings (listingsToShow);
    setIsLoading (false);
  }, [slug]);
;
  // Handle requesting a quote;

            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0];
<<<<<<< HEAD

=======
<<<<<<< HEAD
  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = listings.find(item => item.id === listingId),;
    if (listing) {;
      toast({;
        title: "Quote Requested",;
        description: `Your quote request for ${listing.title} has been sent.`;
      }),;
      // Navigate to the quote request page with the listing information;
      navigate("/request-quote", {;
        state: {;
          serviceType: listing.category,;
          specificItem: {;
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            id: listing.id,;
            title: listing.title,;
            category: listing.category;
            image: listing.images?.[0];
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          }
>>>>>>> origin/chore/fix-lint-and-merge
        }
      });
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {category.description}
>>>>>>> merged-prs-20250907-203621
          }
        }
      })
    }
<<<<<<< HEAD
  },

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
                {category.icon}
              </div>
            </div>
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              {category.title}
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing) => (
                <ProductListingCard
                  key={listing.id}
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
=======
  }
  }};
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },
return (;
                <ProductListingCard,
key={listing.id}
                  listing={listing}

<<<<<<< HEAD
              {listings && listings.map((listing) => (;
                <ProductListingCard
}
key={listing && listing.id}
=======
<<<<<<< HEAD
  };
  },

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  },

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        }
      });
    }

  },

  };
  },
<<<<<<< HEAD

  return (

=======
=======
<<<<<<< HEAD

  return (

  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue">;
        <div className="container mx - auto px - 4 py - 12">;
          <div className="mb - 4">;
            <Link to="/categories" className="text - zion - cyan hover:text - zion - cyan - light transition - colors inline - flex items - center">;
              ← Back to Categories;
            </Link>;
          </div>;
          <div className="text - center mb - 12">;
            <div className="flex justify - center mb - 6">;

              <div className="text - zion - cyan p - 4 bg - zion - blue - dark rounded - full">;
<<<<<<< HEAD

  }
                {category.icon}
              </div>;
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
  }
                {category.icon}
              </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}
<<<<<<< HEAD
          }
        }
      })
    }
  }
  },
  };
  },

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
                {category.icon}
              </div>
            </div>
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              {category.title}
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                <ProductListingCard 

                  key={listing.id} 

                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { useParams, Link } from "react-router-dom",;
import { Header } from "@/components/header/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ProductListingCard } from "@/components/ProductListingCard",;
import { useState, useEffect } from "react",;
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",;
import { MARKETPLACE_LISTINGS } from "@/data/listingData",;
import { useNavigate } from "react-router-dom",;
import { toast } from "@/hooks/use-toast",;
;
export default function CategoryDetail() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?:string },;
  const navigate = useNavigate(),;
  const [isLoading, setIsLoading] = useState(true),;
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),;
  const [category, setCategory] = useState<{title:string, description:string, icon:JSX.Element}>({;
    title:"",;
    description:"",;
    icon:<Bot className="w-6 h-6" />;
  }),;
;
  // Map of category slugs to their display data;
  const categoryData = {;
    'services':{;
      title:"Services",;
      description:"On-demand IT support, consulting, development, and more",;
      icon:<Briefcase className="w-6 h-6" />;
    },;
    'talents':{;
      title:"Talents",;
      description:"Connect with AI experts, developers, and tech specialists",;
      icon:<Brain className="w-6 h-6" />;
    },;
    'equipment':{;
      title:"Equipment",;
      description:"Rent or buy specialized hardware, servers, and devices",;
      icon:<Code className="w-6 h-6" />;
    },;
    'innovation':{;
      title:"Innovation",;
      description:"Discover cutting-edge solutions and tech breakthroughs",;
      icon:<Bot className="w-6 h-6" />;
    },;
    'ai-models-apis':{;
      title:"AI Models & APIs",;
      description:"Access cutting-edge AI models with easy integration",;
      icon:<Brain className="w-6 h-6" />;
    },;
    'content-creation':{;
      title:"Content Creation",;
      description:"Generate high-quality content for your projects",;
      icon:<PenLine className="w-6 h-6" />;
    },;
    'data-analysis':{;
      title:"Data Analysis",;
      description:"Extract insights from complex datasets",;
      icon:<BarChart className="w-6 h-6" />;
    },;
    'computer-vision':{;
      title:"Computer Vision",;
      description:"Image and video processing solutions",;
      icon:<Eye className="w-6 h-6" />;
    },;
    'virtual-assistants':{;
      title:"Virtual Assistants",;
      description:"Intelligent automation for your workflow",;
      icon:<Bot className="w-6 h-6" />;
    },;
    'voice-speech':{;
      title:"Voice & Speech",;
      description:"Speech recognition and synthesis tools",;
      icon:<Mic className="w-6 h-6" />;
    },;
    'developer-tools':{;
      title:"Developer Tools",;
      description:"AI-powered coding assistance and automation",;
      icon:<Code className="w-6 h-6" />;
    },;
    'business-solutions':{;
      title:"Business Solutions",;
      description:"Enterprise AI integrations and services",;
      icon:<Briefcase className="w-6 h-6" />;
    }
  },;
;
  useEffect(() => {;
    setIsLoading(true),;
    ;
    // Find the category data based on slug;
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {;
      title:slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category",;
      description:"Explore our collection in this category",;
      icon:<Bot className="w-6 h-6" />;
    },;
    ;
    setCategory(currentCategory),;
;
    // Filter listings by category;
    const categoryTitle = currentCategory.title,;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing => ;
      listing.category.toLowerCase() === categoryTitle.toLowerCase();
    ),;
    ;
    // If we don't have real listings for this category, generate placeholder listings;
    const listingsToShow = filteredListings.length > 0 ? filteredListings :;
      Array(4).fill(null).map((_, index) => ({;
        id:`${slug}-${index}`,;
        title:`${currentCategory.title} Product ${index + 1}`,;
        description:`A great ${currentCategory.title.toLowerCase()} solution for your needs.`,;
        category:currentCategory.title,;
        price:Math.floor(Math.random() * 500) + 50,;
        currency:"$",;
        tags:[`${slug}`, "ai", "tool"],;
        author:{;
          name:`Provider ${index + 1}`,;
          id:`author-${index + 1}`,;
          avatarUrl:undefined;
        },;
        images:[`/placeholder.svg`],;
        createdAt:new Date().toISOString(),;
        rating:Math.floor(Math.random() * 5) + 1,;
        reviewCount:Math.floor(Math.random() * 100);
      })),;
;
    setListings(listingsToShow),;
    setIsLoading(false),;
  }, [slug]),;
;
  // Handle requesting a quote;
  const handleRequestQuote = (listingId:string) => {;
    const listing = listings.find(item => item.id === listingId),;
    ;
    if (listing) {;
      toast({;
        title:"Quote Requested",;
        description:`Your quote request for ${listing.title} has been sent.`;
      }),;
      ;
      // Navigate to the quote request page with the listing information;
      navigate("/request-quote", {;
        state:{ ;
          serviceType:listing.category,;
          specificItem:{;
            id:listing.id,;
            title:listing.title,;
            category:listing.category,;
            image:listing.images?.[0];
          }
        }
      }),;
    }
  },;
;
  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-12">;
          <div className="mb-4">;
            <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">;
              ← Back to Categories;
            </Link>;
          </div>;
          ;
          <div className="text-center mb-12">;
            <div className="flex justify-center mb-6">;
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">;
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">;
              {category.title}
            </GradientHeading>;
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
              {category.description}
            </p>;
          </div>;
          ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {isLoading ? (;

            <div className="flex justify-center items-center h-64">;
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;
            <div className=\"flex justify-center items-center h-64\" />;
              <div className=\"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple\" /></div>;
            </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          ) : (;
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\" />;
              {listings && listings.map((listing) => (;}
                <ProductListingCard;}
key={listing && listing.id} 
>>>>>>> origin/chore/fix-lint-and-merge
                  listing={listing}

              ))}
            </div>;

<<<<<<< HEAD
  //Cast to specify the expected route param type since useParams may be untyped const {
  }
  slug
}= useParams () as {

const navigate = useNavigate ();
const [isLoading, setIsLoading] = useState (true);
const [listings, setListings] = useState (MARKETPLACE LISTINGS);
const [category, setCategory] = useState< {
  }
  "title": string, "description": string, "icon": JSX.Element
}> ({
  //Map of category slugs to their display data const categoryData = {

}

}
useEffect ( () => {
  }
  setIsLoading (true);
//Find the category data based on slug const currentCategory = categoryData[slug as keyof typeof categoryData] || {
  //Filter listings by category listing.category.toLowerCase () === categoryTitle.toLowerCase () );
//If we don't have real listings for this category, generate placeholder listings const listingsToShow = filteredListings.length > 0 ? filteredListings : Array (4) .fill (null) .map ( (, index) => ({'
  }
  "id": `$ {`  }
  slug
}-$ {
  }
  index
}`;`"title": `$ {`  }
  currentCategory.title
}Product $ {

}) );
setListings (listingsToShow);
setIsLoading (false)
}, [slug]);
//Handle requesting a quote
}
})
}

  listings.map ( (listing) => (<ProductListingCard key= {
  }
  listing.id
}listing= {
  }
  listing
}onRequestQuote= {
  }
  handleRequestQuote
} />) )
}</div>)
}</div> </div> <Footer /> </>)
}
  );
}

=======
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
              ))}
            </div>
          )}
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

  ),; export default function CategoryDetail () {

};
const navigate = useNavigate ();
const [isLoading, setIsLoading] = useState (true);
const [listings, setListings] = useState (MARKETPLACE LISTINGS);
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
          ) :(;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
              {listings.map((listing) => (;
                <ProductListingCard ;
                  key={listing.id} ;                  listing={listing}
                  onRequestQuote={handleRequestQuote} ;
                />;
              ))}
            </div>;
          )}
<<<<<<< HEAD
                <ProductListingCard
                  key={listing.id}
                <ProductListingCard 
                  key={listing.id} 
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </div>;
      <Footer />;
    </>;
<<<<<<< HEAD
=======
  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </p>;
          </div>;
          {is_loading ? (
            <div className="flex justify - center items - center h - 64">;
              <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - purple"></div>;
            </div>) : (
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6">;
              {listings.map ((listing) => (
                <ProductListingCard;
                  key={listing.id}
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />))}
            </div>)}
        </div>;
      </div>;
      <Footer />;
    </>);
  ),; export default function CategoryDetail () {
  //Cast to specify the expected route param type since useParams may be untyped const {
  slug 
}= useParams () as {
  slug?: string 
};
const navigate = useNavigate ();
const [isLoading, setIsLoading] = useState (true);
const [listings, setListings] = useState (MARKETPLACE LISTINGS);
const [category, setCategory] = useState< {
  title: string, description: string, icon: JSX.Element 
}> ({
  //Map of category slugs to their display data const categoryData = {
  'services': {
  title: "Services";
description: "On-demand IT support, consulting, development, and more";
icon: <Briefcase className="w-6 h-6" /> 
};
'talents': {
  title: "Talents";
description: "Connect with AI experts, developers, and tech specialists";
icon: <Brain className="w-6 h-6" /> 
};
'equipment': {
  title: "Equipment";
description: "Rent or buy specialized hardware, servers, and devices";
icon: <Code className="w-6 h-6" /> 
};
'innovation': {
  title: "Innovation";
description: "Discover cutting-edge solutions and tech breakthroughs";
icon: <Bot className="w-6 h-6" /> 
};
'ai-models-apis': {
  title: "AI Models & APIs";
description: "Access cutting-edge AI models with easy integration";
icon: <Brain className="w-6 h-6" /> 
};
'content-creation': {
  title: "Content Creation";
description: "Generate high-quality content for your projects";
icon: <PenLine className="w-6 h-6" /> 
};
'data-analysis': {
  title: "Data Analysis";
description: "Extract insights from complex datasets";
icon: <BarChart className="w-6 h-6" /> 
};
'computer-vision': {
  title: "Computer Vision";
description: "Image and video processing solutions";
icon: <Eye className="w-6 h-6" /> 
};
'virtual-assistants': {
  title: "Virtual Assistants";
description: "Intelligent automation for your workflow";
icon: <Bot className="w-6 h-6" /> 
};
'voice-speech': {
  title: "Voice & Speech";
description: "Speech recognition and synthesis tools";
icon: <Mic className="w-6 h-6" /> 
};
'developer-tools': {
  title: "Developer Tools";
description: "AI-powered coding assistance and automation";
icon: <Code className="w-6 h-6" /> 
};
'business-solutions': {
  title: "Business Solutions";
description: "Enterprise AI integrations and services";
icon: <Briefcase className="w-6 h-6" /> 
}
;

<<<<<<< HEAD
};
useEffect ( () => {
  setIsLoading (true);
//Find the category data based on slug const currentCategory = categoryData[slug as keyof typeof categoryData] || {
  //Filter listings by category listing.category.toLowerCase () === categoryTitle.toLowerCase () );
//If we don't have real listings for this category, generate placeholder listings const listingsToShow = filteredListings.length > 0 ? filteredListings : Array (4) .fill (null) .map ( (, index) => ({
  id: `$ {
  slug 
}-$ {
  index 
}`;
title: `$ {
  currentCategory.title 
}Product $ {
  index + 1 
}`;
description: `A great $ {
  currentCategory.title.toLowerCase () 
}solution for your needs.`;
category: currentCategory.title;
price: Math.floor (Math.random () * 500) + 50;
avatarUrl: undefined 
};
images: [`/placeholder.svg`];
createdAt: new Date () .toISOString ();
rating: Math.floor (Math.random () * 5) + 1;
reviewCount: Math.floor (Math.random () * 100) 
}) );
setListings (listingsToShow);
setIsLoading (false) 
}, [slug]);
//Handle requesting a quote 
}
}) 
}
};
return (<> <Header /> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto px-4 py-12" > <div className="mb-4" > <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center" > ← Back to Categories </Link> </div> {
  listings.map ( (listing) => (<ProductListingCard key= {
  listing.id 
}listing= {
  listing 
}onRequestQuote= {
  handleRequestQuote 
}/>) ) 
}</div>) 
}</div> </div> <Footer /> </>) 
}
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
