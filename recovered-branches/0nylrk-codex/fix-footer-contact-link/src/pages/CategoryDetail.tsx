<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({
    title: ""
    description: ""
    icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
  });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }),
=======
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),  }),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),  }),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD

=======
    }
    },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'ai-models-apis': {
      title: "AI Models & APIs"
      description: "Access cutting-edge AI models with easy integration"
      icon: <Brain className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'content-creation': {
      title: "Content Creation"
      description: "Generate high-quality content for your projects"
      icon: <PenLine className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'data-analysis': {
      title: "Data Analysis"
      description: "Extract insights from complex datasets"
      icon: <BarChart className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'computer-vision': {
      title: "Computer Vision"
      description: "Image and video processing solutions"
      icon: <Eye className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'virtual-assistants': {
      title: "Virtual Assistants"
      description: "Intelligent automation for your workflow"
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'voice-speech': {
      title: "Voice & Speech"
      description: "Speech recognition and synthesis tools"
      icon: <Mic className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'developer-tools': {
      title: "Developer Tools"
      description: "AI-powered coding assistance and automation"
      icon: <Code className="w-6 h-6" />
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    },


<<<<<<< HEAD
=======
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    'business-solutions': {
      title: "Business Solutions"
      description: "Enterprise AI integrations and services"
      icon: <Briefcase className="w-6 h-6" />
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
  }
  useEffect(() => {
    setIsLoading(true);
  }
  useEffect(() => {
    setIsLoading(true);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },

  useEffect(() => {
    setIsLoading(true),
    
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />    'ai-models-apis': {
      title: "AI Models & APIs"
      description: "Access cutting-edge AI models with easy integration"
      icon: <Brain className="w-6 h-6" />    'data-analysis': {
      title: "Data Analysis"
      description: "Extract insights from complex datasets"
      icon: <BarChart className="w-6 h-6" />

    },
    'virtual-assistants': {
      title: "Virtual Assistants"
      description: "Intelligent automation for your workflow"
      icon: <Bot className="w-6 h-6" />    'developer-tools': {
      title: "Developer Tools"
      description: "AI-powered coding assistance and automation"
      icon: <Code className="w-6 h-6" />

    },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />    'ai-models-apis': {
      title: "AI Models & APIs"
      description: "Access cutting-edge AI models with easy integration"
      icon: <Brain className="w-6 h-6" />    'data-analysis': {
      title: "Data Analysis"
      description: "Extract insights from complex datasets"
      icon: <BarChart className="w-6 h-6" />

    },
    'virtual-assistants': {
      title: "Virtual Assistants"
      description: "Intelligent automation for your workflow"
      icon: <Bot className="w-6 h-6" />    'developer-tools': {
      title: "Developer Tools"
      description: "AI-powered coding assistance and automation"
      icon: <Code className="w-6 h-6" />

    },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // Find the category data based on slug
    const currentCategory = categoryData[slug as keyof typeof categoryData] |{
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') |"Category"
      description: "Explore our collection in this category"
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD

    // If we don't have real listings for this category, generate placeholder listings
    const listingsToShow = filteredListings.length > 0 ? filteredListings :
      Array(4).fill(null).map((_, index) => ({

=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
    }
    setCategory(currentCategory);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Filter listings by category
    const categoryTitle = currentCategory.title;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
<<<<<<< HEAD
    );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        id: `${slug}-${index}`,
        title: `${currentCategory.title} Product ${index + 1}`,
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
        category: currentCategory.title,
        price: Math.floor(Math.random() * 500) + 50,
        currency: "$",
        tags: [`${slug}`, "ai", "tool"],
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        author: {
          name: `Provider ${index + 1}`
          id: `author-${index + 1}`
          avatarUrl: undefined
<<<<<<< HEAD
=======
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }));
    setListings(listingsToShow);
    setIsLoading(false);
  }, [slug]);
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        }
        images: [`/placeholder.svg`]
        createdAt: new Date().toISOString()
        rating: Math.floor(Math.random() * 5) + 1
        reviewCount: Math.floor(Math.random() * 100)
      }));
    setListings(listingsToShow);
    setIsLoading(false)
  }, [slug]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        },
        images: [`/placeholder.svg`],
        createdAt: new Date().toISOString(),
        rating: Math.floor(Math.random() * 5) + 1,
        reviewCount: Math.floor(Math.random() * 100)
      })),

    setListings(listingsToShow),
    setIsLoading(false)
  }, [slug]),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Handle requesting a quote
=======
      icon: <Bot className="w-6 h-6" />  // Handle requesting a quote
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Bot className="w-6 h-6" />  // Handle requesting a quote
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId)
    if (listing) {
      toast({
        title: "Quote Requested"
<<<<<<< HEAD
<<<<<<< HEAD
        description: `Your quote request for ${listing.title} has been sent.`
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }),
      


<<<<<<< HEAD
=======
      });
      }),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Navigate to the quote request page with the listing information
=======
        description: `Your quote request for ${listing.title} has been sent.`      // Navigate to the quote request page with the listing information
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        description: `Your quote request for ${listing.title} has been sent.`      // Navigate to the quote request page with the listing information
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useParams, Link } from "react-router-dom",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
    title: "",,
  description: "",;
    icon: <Bot className="w-6 h-6" />;
  }),;
  // Map of category slugs to their display data;
  const categoryData = {;
    'services': {;
      title: "Services",,
  description: "On-demand IT support, consulting, development, and more",;
      icon: <Briefcase className="w-6 h-6" />;
    },;
    'talents': {;
      title: "Talents",,
  description: "Connect with AI experts, developers, and tech specialists",;
      icon: <Brain className="w-6 h-6" />;
    },;
    'equipment': {;
      title: "Equipment",,
  description: "Rent or buy specialized hardware, servers, and devices",;
      icon: <Code className="w-6 h-6" />;
    },;
    'innovation': {;
      title: "Innovation",,
  description: "Discover cutting-edge solutions and tech breakthroughs",;
      icon: <Bot className="w-6 h-6" />;
    },;
    'ai-models-apis': {;
      title: "AI Models & APIs",,
  description: "Access cutting-edge AI models with easy integration",;
      icon: <Brain className="w-6 h-6" />;
    },;
    'content-creation': {;
      title: "Content Creation",,
  description: "Generate high-quality content for your projects",;
      icon: <PenLine className="w-6 h-6" />;
    },;
    'data-analysis': {;
      title: "Data Analysis",,
  description: "Extract insights from complex datasets",;
      icon: <BarChart className="w-6 h-6" />;
    },;
    'computer-vision': {;
      title: "Computer Vision",,
  description: "Image and video processing solutions",;
      icon: <Eye className="w-6 h-6" />;
    },;
    'virtual-assistants': {;
      title: "Virtual Assistants",,
  description: "Intelligent automation for your workflow",;
      icon: <Bot className="w-6 h-6" />;
    },;
    'voice-speech': {;
      title: "Voice & Speech",,
  description: "Speech recognition and synthesis tools",;
      icon: <Mic className="w-6 h-6" />;
    },;
    'developer-tools': {;
      title: "Developer Tools",,
  description: "AI-powered coding assistance and automation",;
      icon: <Code className="w-6 h-6" />;
    },;
    'business-solutions': {;
      title: "Business Solutions",,
  description: "Enterprise AI integrations and services",;
      icon: <Briefcase className="w-6 h-6" />;
    }
  },;
  useEffect(() => {;
    setIsLoading(true),;
    // Find the category data based on slug;
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {;
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category",,
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
        title: `${currentCategory.title} Product ${index + 1}`,,
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
<<<<<<< HEAD
<<<<<<< HEAD
  }, [slug]),;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = listings && listings.find(item => item && item.id === listingId),;

    if (listing) {;
      toast({;
        title: "Quote Requested",;
        description: `Your quote request for ${listing && listing.title} has been sent.`;
      });

      // Navigate to the quote request page with the listing information;
      navigate("/request-quote", {;
        state: { ;
          serviceType: listing && listing.category,;
          specificItem: {;
<<<<<<< HEAD

=======
            id: listing && listing.id,;
            title: listing && listing.title,;
            category: listing && listing.category,;
            image: listing && listing.images?.[0];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            id: listing.id,;
            title: listing.title,;
            category: listing.category;
            image: listing.images?.[0];
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }
        }
      });
    }
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };
  },

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
  }, [slug]),;          }
        }
      });
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  },
  };
  },

=======
  }, [slug]),;          }
        }
      });
    }

  },
  };
  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (

  }
;
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion-blue">;
        <div className="container mx - auto px - 4 py-12">;
          <div className="mb-4">;
            <Link to="/categories" className="text - zion - cyan hover:text - zion - cyan - light transition - colors inline - flex items-center">;
              ← Back to Categories;
            </Link>;
          </div>;
          <div className="text - center mb-12">;
            <div className="flex justify - center mb-6">;
              <div className="text - zion - cyan p - 4 bg - zion - blue - dark rounded-full">;
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb-4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx-auto">;
              {category.description}
          }
        }
      })
    }
  }
  },
  };
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

  }
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}
<<<<<<< HEAD
=======
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
  return (

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <ProductListingCard 
                  key={listing.id} 

                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
=======          {isLoading ? (;
            <div className="flex justify-center items-center h-64">;
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;
            </div>;
          ) : (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
              {listings && listings.map((listing) => (;
                <ProductListingCard
                  key={listing && listing.id} 
                  listing={listing}
                  onRequestQuote={handleRequestQuote}                 />;
              ))}
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          )}
<<<<<<< HEAD

=======
                <ProductListingCard
                  key={listing.id}
                <ProductListingCard 
                  key={listing.id} 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>;
      </div>;
      <Footer />;
    </>;
<<<<<<< HEAD
  );
}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              ))}
            </div>;
          )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ),; export default function CategoryDetail () {
=======
          )}  ),; export default function CategoryDetail () {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          )}  ),; export default function CategoryDetail () {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  title: "Services",
  description: "On-demand IT support, consulting, development, and more";
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
  description: "Discover cutting-edge solutions and tech breakthroughs";
icon: <Bot className="w-6 h-6" /> 
};
'ai-models-apis': {
  title: "AI Models & APIs",
  description: "Access cutting-edge AI models with easy integration";
icon: <Brain className="w-6 h-6" /> 
};
'content-creation': {
  title: "Content Creation",
  description: "Generate high-quality content for your projects";
icon: <PenLine className="w-6 h-6" /> 
};
'data-analysis': {
  title: "Data Analysis",
  description: "Extract insights from complex datasets";
icon: <BarChart className="w-6 h-6" /> 
};
'computer-vision': {
  title: "Computer Vision",
  description: "Image and video processing solutions";
icon: <Eye className="w-6 h-6" /> 
};
'virtual-assistants': {
  title: "Virtual Assistants",
  description: "Intelligent automation for your workflow";
icon: <Bot className="w-6 h-6" /> 
};
'voice-speech': {
  title: "Voice & Speech",
  description: "Speech recognition and synthesis tools";
icon: <Mic className="w-6 h-6" /> 
};
'developer-tools': {
  title: "Developer Tools",
  description: "AI-powered coding assistance and automation";
icon: <Code className="w-6 h-6" /> 
};
'business-solutions': {
  title: "Business Solutions",
  description: "Enterprise AI integrations and services";
icon: <Briefcase className="w-6 h-6" /> 
}

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
}`,
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
