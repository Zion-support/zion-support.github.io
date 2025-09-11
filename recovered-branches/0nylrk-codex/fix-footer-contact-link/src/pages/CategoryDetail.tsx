
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({
    title: ""
    description: ""
    icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }),

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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'ai-models-apis': {
      title: "AI Models & APIs"
      description: "Access cutting-edge AI models with easy integration"
      icon: <Brain className="w-6 h-6" />
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'content-creation': {
      title: "Content Creation"
      description: "Generate high-quality content for your projects"
      icon: <PenLine className="w-6 h-6" />
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'data-analysis': {
      title: "Data Analysis"
      description: "Extract insights from complex datasets"
      icon: <BarChart className="w-6 h-6" />
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'computer-vision': {
      title: "Computer Vision"
      description: "Image and video processing solutions"
      icon: <Eye className="w-6 h-6" />
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'virtual-assistants': {
      title: "Virtual Assistants"
      description: "Intelligent automation for your workflow"
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'voice-speech': {
      title: "Voice & Speech"
      description: "Speech recognition and synthesis tools"
      icon: <Mic className="w-6 h-6" />
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'developer-tools': {
      title: "Developer Tools"
      description: "AI-powered coding assistance and automation"
      icon: <Code className="w-6 h-6" />
<<<<<<< HEAD
<<<<<<< HEAD
    }
    },
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    },


<<<<<<< HEAD
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'business-solutions': {
      title: "Business Solutions"
      description: "Enterprise AI integrations and services"
      icon: <Briefcase className="w-6 h-6" />
    }
<<<<<<< HEAD


<<<<<<< HEAD
  }
  useEffect(() => {
    setIsLoading(true);
  }
  useEffect(() => {
    setIsLoading(true);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  useEffect(() => {
    setIsLoading(true);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  useEffect(() => {
    setIsLoading(true),
    
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Find the category data based on slug
    const currentCategory = categoryData[slug as keyof typeof categoryData] |{
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') |"Category"
      description: "Explore our collection in this category"
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    setCategory(currentCategory);
    // Filter listings by category
    const categoryTitle = currentCategory.title;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    );
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    
    setCategory(currentCategory),

    // Filter listings by category
    const categoryTitle = currentCategory.title,
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing => 
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    ),
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

    // If we don't have real listings for this category, generate placeholder listings
    const listingsToShow = filteredListings.length > 0 ? filteredListings :
      Array(4).fill(null).map((_, index) => ({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        id: `${slug}-${index}`,
        title: `${currentCategory.title} Product ${index + 1}`,
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
        category: currentCategory.title,
        price: Math.floor(Math.random() * 500) + 50,
        currency: "$",
        tags: [`${slug}`, "ai", "tool"],
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        author: {
          name: `Provider ${index + 1}`
          id: `author-${index + 1}`
          avatarUrl: undefined
<<<<<<< HEAD

<<<<<<< HEAD
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
export default function CategoryDetail() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX && JSX.Element}>({;
    title: "",;
    description: "",;
    icon: <Bot className="w-6 h-6" />;
  });

  // Map of category slugs to their display data;
  const categoryData = {;
    'services': {;
      title: "Services",;
      description: "On-demand IT support, consulting, development, and more";
      icon: <Briefcase className="w-6 h-6" />;
    };
    'talents': {;
      title: "Talents",;
      description: "Connect with AI experts, developers, and tech specialists";
      icon: <Brain className="w-6 h-6" />;
    };
    'equipment': {;
      title: "Equipment",;
      description: "Rent or buy specialized hardware, servers, and devices";
      icon: <Code className="w-6 h-6" />;
    };
    'innovation': {;
      title: "Innovation",;
      description: "Discover cutting-edge solutions and tech breakthroughs",;
      icon: <Bot className="w-6 h-6" />;
    };
    'ai-models-apis': {;
      title: "AI Models & APIs",;
      description: "Access cutting-edge AI models with easy integration",;
      icon: <Brain className="w-6 h-6" />;
    };
    'content-creation': {;
      title: "Content Creation",;
      description: "Generate high-quality content for your projects",;
      icon: <PenLine className="w-6 h-6" />;
    };
    'data-analysis': {;
      title: "Data Analysis",;
      description: "Extract insights from complex datasets",;
      icon: <BarChart className="w-6 h-6" />;
    };
    'computer-vision': {;
      title: "Computer Vision",;
      description: "Image and video processing solutions",;
      icon: <Eye className="w-6 h-6" />;
    };
    'virtual-assistants': {;
      title: "Virtual Assistants",;
      description: "Intelligent automation for your workflow",;
      icon: <Bot className="w-6 h-6" />;
    };
    'voice-speech': {;
      title: "Voice & Speech",;
      description: "Speech recognition and synthesis tools",;
      icon: <Mic className="w-6 h-6" />;
    };
    'developer-tools': {;
      title: "Developer Tools",;
      description: "AI-powered coding assistance and automation",;
      icon: <Code className="w-6 h-6" />;
    };
    'business-solutions': {;
      title: "Business Solutions",;
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
        };
        images: [`/placeholder && placeholder.svg`],;
        createdAt: new Date().toISOString(),;
        rating: Math && Math.floor(Math && Math.random() * 5) + 1,;
        reviewCount: Math && Math.floor(Math && Math.random() * 100);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }));
    setListings(listingsToShow);
    setIsLoading(false);
  }, [slug]);
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
        images: [`/placeholder.svg`]
        createdAt: new Date().toISOString()
        rating: Math.floor(Math.random() * 5) + 1
        reviewCount: Math.floor(Math.random() * 100)
      }));
    setListings(listingsToShow);
<<<<<<< HEAD
    setIsLoading(false)
  }, [slug]);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    setIsLoading(false);
  }, [slug]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId)
    if (listing) {
      toast({
        title: "Quote Requested"
        description: `Your quote request for ${listing.title} has been sent.`
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),
      


<<<<<<< HEAD
      });
      }),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      });
      }),
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {
        state: {
          serviceType: listing.category
          specificItem: {
            id: listing.id
            title: listing.title
            category: listing.category
            image: listing.images?.[0]
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
export default function CategoryDetail() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string },;
  const navigate = useNavigate(),;
  const [isLoading, setIsLoading] = useState(true),;
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),;
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({;
    title: "",;
    description: "",;
    icon: <Bot className="w-6 h-6" />;
  }),;
  // Map of category slugs to their display data;
  const categoryData = {;
    'services': {;
      title: "Services",;
      description: "On-demand IT support, consulting, development, and more",;
      icon: <Briefcase className="w-6 h-6" />;
    },;
    'talents': {;
      title: "Talents",;
      description: "Connect with AI experts, developers, and tech specialists",;
      icon: <Brain className="w-6 h-6" />;
    },;
    'equipment': {;
      title: "Equipment",;
      description: "Rent or buy specialized hardware, servers, and devices",;
      icon: <Code className="w-6 h-6" />;
    },;
    'innovation': {;
      title: "Innovation",;
      description: "Discover cutting-edge solutions and tech breakthroughs",;
      icon: <Bot className="w-6 h-6" />;
    },;
    'ai-models-apis': {;
      title: "AI Models & APIs",;
      description: "Access cutting-edge AI models with easy integration",;
      icon: <Brain className="w-6 h-6" />;
    },;
    'content-creation': {;
      title: "Content Creation",;
      description: "Generate high-quality content for your projects",;
      icon: <PenLine className="w-6 h-6" />;
    },;
    'data-analysis': {;
      title: "Data Analysis",;
      description: "Extract insights from complex datasets",;
      icon: <BarChart className="w-6 h-6" />;
    },;
    'computer-vision': {;
      title: "Computer Vision",;
      description: "Image and video processing solutions",;
      icon: <Eye className="w-6 h-6" />;
    },;
    'virtual-assistants': {;
      title: "Virtual Assistants",;
      description: "Intelligent automation for your workflow",;
      icon: <Bot className="w-6 h-6" />;
    },;
    'voice-speech': {;
      title: "Voice & Speech",;
      description: "Speech recognition and synthesis tools",;
      icon: <Mic className="w-6 h-6" />;
    },;
    'developer-tools': {;
      title: "Developer Tools",;
      description: "AI-powered coding assistance and automation",;
      icon: <Code className="w-6 h-6" />;
    },;
    'business-solutions': {;
      title: "Business Solutions",;
      description: "Enterprise AI integrations and services",;
      icon: <Briefcase className="w-6 h-6" />;
    }
  },;
  useEffect(() => {;
    setIsLoading(true),;
    // Find the category data based on slug;
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {;
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category",;
      description: "Explore our collection in this category",;
      icon: <Bot className="w-6 h-6" />;
    },;
    setCategory(currentCategory),;
    // Filter listings by category;
    const categoryTitle = currentCategory.title,;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>;
      listing.category.toLowerCase() === categoryTitle.toLowerCase();
    ),;
    // If we don't have real listings for this category, generate placeholder listings;
    const listingsToShow = filteredListings.length > 0 ? filteredListings :;
      Array(4).fill(null).map((_, index) => ({;
        id: `${slug}-${index}`,;
        title: `${currentCategory.title} Product ${index + 1}`,;
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,;
        category: currentCategory.title,;
        price: Math.floor(Math.random() * 500) + 50,;
        currency: "$",;
        tags: [`${slug}`, "ai", "tool"],;
        author: {;
          name: `Provider ${index + 1}`,;
          id: `author-${index + 1}`,;
          avatarUrl: undefined;
        },;
        images: [`/placeholder.svg`],;
        createdAt: new Date().toISOString(),;
        rating: Math.floor(Math.random() * 5) + 1,;
        reviewCount: Math.floor(Math.random() * 100);
      })),;
    setListings(listingsToShow),;
    setIsLoading(false);
  }, [slug]),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = listings && listings.find(item => item && item.id === listingId),;
=======

  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = listings && listings.find(item => item && item.id === listingId),;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (listing) {;
      toast({;
        title: "Quote Requested",;
        description: `Your quote request for ${listing && listing.title} has been sent.`;
      });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Navigate to the quote request page with the listing information;
      navigate("/request-quote", {;
        state: { ;
          serviceType: listing && listing.category,;
          specificItem: {;
<<<<<<< HEAD
            id: listing && listing.id,;
            title: listing && listing.title,;
            category: listing && listing.category,;
            image: listing && listing.images?.[0];
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  // Cast to specify the expected route param type since use_params may be untyped;
  const { slug } = use_params () as { slug?: string }
  const navigate = use_navigate ();
  const [is_loading, setIsLoading] = useState (true);
  const [listings, set_listings] = useState (MARKETPLACE_LISTINGS);
  const [category, set_category] = useState<{title: string, description: string, icon: JSX.Element}>({
    title: "",
    description: "",
    icon: <Bot className="w - 6 h - 6" />;
  });
;
  // Map of category slugs to their display data;
  const category_data = {
    'services': {
      title: "Services",
      description: "On - demand IT support, consulting, development, and more";
      icon: <Briefcase className="w - 6 h - 6" />;
    }
    'talents': {
      title: "Talents",
      description: "Connect with AI experts, developers, and tech specialists";
      icon: <Brain className="w - 6 h - 6" />;
    }
    'equipment': {
      title: "Equipment",
      description: "Rent or buy specialized hardware, servers, and devices";
      icon: <Code className="w - 6 h - 6" />;
    }
    'innovation': {
      title: "Innovation",
      description: "Discover cutting - edge solutions and tech breakthroughs",
      icon: <Bot className="w - 6 h - 6" />;
    }
    'ai - models - apis': {
      title: "AI Models & APIs",
      description: "Access cutting - edge AI models with easy integration",
      icon: <Brain className="w - 6 h - 6" />;
    }
    'content - creation': {
      title: "Content Creation",
      description: "Generate high - quality content for your projects",
      icon: <PenLine className="w - 6 h - 6" />;
    }
    'data - analysis': {
      title: "Data Analysis",
      description: "Extract insights from complex datasets",
      icon: <BarChart className="w - 6 h - 6" />;
    }
    'computer - vision': {
      title: "Computer Vision",
      description: "Image and video processing solutions",
      icon: <Eye className="w - 6 h - 6" />;
    }
    'virtual - assistants': {
      title: "Virtual Assistants",
      description: "Intelligent automation for your workflow",
      icon: <Bot className="w - 6 h - 6" />;
    }
    'voice - speech': {
      title: "Voice & Speech",
      description: "Speech recognition and synthesis tools",
      icon: <Mic className="w - 6 h - 6" />;
    }
    'developer - tools': {
      title: "Developer Tools",
      description: "AI - powered coding assistance and automation",
      icon: <Code className="w - 6 h - 6" />;
    }
    'business - solutions': {
      title: "Business Solutions",
      description: "Enterprise AI integrations and services",
      icon: <Briefcase className="w - 6 h - 6" />;
    }
  }
;
  useEffect (() => {
    setIsLoading (true);
;
    // Find the category data based on slug;
    const current_category = category_data[slug as keyof typeof category_data] || {
      title: slug?.split ('-').map (word => word.char_at (0).toUpperCase () + word.slice (1)).join (' ') || "Category",
      description: "Explore our collection in this category",
      icon: <Bot className="w - 6 h - 6" />;
    }
;
    set_category (current_category);
;
    // Filter listings by category;
    const category_title = current_category.title;
    const filtered_listings = MARKETPLACE_LISTINGS.filter (listing =>;
      listing.category.toLowerCase () === category_title.toLowerCase ());
;
    // If we don't have real listings for this category, generate placeholder listings;
    const listingsToShow = filtered_listings.length > 0 ? filtered_listings :;
      Array (4).fill (null).map ((_, index) => ({
        id: `${slug}-${index}`,
        title: `${current_category.title} Product ${index + 1}`,
        description: `A great ${current_category.title.toLowerCase ()} solution for your needs.`,
        category: current_category.title,
        price: Math.floor (Math.random () * 500) + 50,
        currency: "$",
        tags: [`${slug}`, "ai", "tool"];
        author: {
          name: `Provider ${index + 1}`,
          id: `author-${index + 1}`,
          avatar_url: undefined;
        }
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
  const handleRequestQuote = (listing_id: string) =>: any {
    const listing = listings.find (item => item.id === listing_id),
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Quote Requested",
        description: `Your quote request for ${listing.title} has been sent.`;
      });
;
      // Navigate to the quote request page with the listing information;
      navigate ("/request - quote", {
        state: {
          service_type: listing.category,
          specific_item: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0];
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            id: listing.id,;
            title: listing.title,;
            category: listing.category;
            image: listing.images?.[0];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
        }
      });
    }

<<<<<<< HEAD
  },

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  },

<<<<<<< HEAD

  return (

  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  },

=======
  };
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </p>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing) => (
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                <ProductListingCard 
                  key={listing.id} 


                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
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
          {isLoading ? (;
            <div className="flex justify-center items-center h-64">;
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;
            </div>;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </div>;
      <Footer />;
    </>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
}

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
