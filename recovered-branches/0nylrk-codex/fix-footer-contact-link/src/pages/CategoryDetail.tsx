<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useParams, Link } from "react-router-dom",
import { Header } from "@/components/header/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { useState, useEffect } from "react",
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",
import { MARKETPLACE_LISTINGS } from "@/data/listingData",
import { useNavigate } from "react-router-dom",
=======

import { useParams, Link } from "react-router-dom","
import { Header } from "@/components/header/Header","
import { Footer } from "@/components/Footer","
import { GradientHeading } from "@/components/GradientHeading","
import { ProductListingCard } from "@/components/ProductListingCard","
import { useState, useEffect } from "react","
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react","
import { MARKETPLACE_LISTINGS } from "@/data/listingData","
import { useNavigate } from "react-router-dom",";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),
<<<<<<< HEAD
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
=======

  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({"
    title: """
    description: """
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    icon: <Bot className="w-6 h-6" />

<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
  });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({
    title: ""
    description: ""
    icon: <Bot className="w-6 h-6" />

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Map of category slugs to their display data
  const categoryData = {
    'services': {
      title: "Services"
      description: "On-demand IT support, consulting, development, and more";
<<<<<<< HEAD
=======
  // Map of category slugs to their display data;
  const categoryData = {}
    'services': {"
      title: "Services""
      description: "On-demand IT support, consulting, development, and more";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      icon: <Briefcase className="w-6 h-6" />
    }'
    'talents': {"
      title: "Talents""
      description: "Connect with AI experts, developers, and tech specialists";"
      icon: <Brain className="w-6 h-6" />
    }'
    'equipment': {"
      title: "Equipment""
      description: "Rent or buy specialized hardware, servers, and devices";"
      icon: <Code className="w-6 h-6" />
<<<<<<< HEAD
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
=======
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
  }),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD

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
'
    'innovation': {"
      title: "Innovation""
      description: "Discover cutting-edge solutions and tech breakthroughs""
      icon: <Bot className="w-6 h-6" />


'
    'ai-models-apis': {"
      title: "AI Models & APIs""
      description: "Access cutting-edge AI models with easy integration""
      icon: <Brain className="w-6 h-6" />


'
    'content-creation': {"
      title: "Content Creation""
      description: "Generate high-quality content for your projects""
      icon: <PenLine className="w-6 h-6" />


'
    'data-analysis': {"
      title: "Data Analysis""
      description: "Extract insights from complex datasets""
      icon: <BarChart className="w-6 h-6" />


'
    'computer-vision': {"
      title: "Computer Vision""
      description: "Image and video processing solutions""
      icon: <Eye className="w-6 h-6" />


'
    'virtual-assistants': {"
      title: "Virtual Assistants""
      description: "Intelligent automation for your workflow""
      icon: <Bot className="w-6 h-6" />


'
    'voice-speech': {"
      title: "Voice & Speech""
      description: "Speech recognition and synthesis tools""
      icon: <Mic className="w-6 h-6" />


'
    'developer-tools': {"
      title: "Developer Tools""
      description: "AI-powered coding assistance and automation""
      icon: <Code className="w-6 h-6" />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


    },


<<<<<<< HEAD
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
=======


'
    'business-solutions': {"
      title: "Business Solutions""
      description: "Enterprise AI integrations and services""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },

  useEffect(() => {}
    setIsLoading(true),
    


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />

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
<<<<<<< HEAD
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
=======

=======
    },
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    'business-solutions': {
      title: "Business Solutions"
      description: "Enterprise AI integrations and services"
      icon: <Briefcase className="w-6 h-6" />
    }

}
  useEffect(() => {
    setIsLoading(true);
  }
  useEffect(() => {
    setIsLoading(true);
  },

  useEffect(() => {
    setIsLoading(true),


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // Find the category data based on slug
    const currentCategory = categoryData[slug as keyof typeof categoryData] |{
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') |"Category"
      description: "Explore our collection in this category"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

    // Find the category data based on slug;
    const currentCategory = categoryData[slug as keyof typeof categoryData] |{'"
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') |"Category""
      description: "Explore our collection in this category""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      icon: <Bot className="w-6 h-6" />

<<<<<<< HEAD
=======
      icon: <Bot className="w-6 h-6" />

}
    setCategory(currentCategory);
    // Filter listings by category
    const categoryTitle = currentCategory.title;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    );
    },
    setCategory(currentCategory),

    // Filter listings by category
    const categoryTitle = currentCategory.title,
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing => 
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    ),


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // If we don't have real listings for this category, generate placeholder listings
    const listingsToShow = filteredListings.length > 0 ? filteredListings :
      Array(4).fill(null).map((_, index) => ({

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
    }
    setCategory(currentCategory);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Filter listings by category
=======
    // Filter listings by category;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        id: `${slug}-${index}`,
        title: `${currentCategory.title} Product ${index + 1}`,
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
        category: currentCategory.title,
        price: Math.floor(Math.random() * 500) + 50,
        currency: "$",
        tags: [`${slug}`, "ai", "tool"],

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        author: {
          name: `Provider ${index + 1}`
          id: `author-${index + 1}`
          avatarUrl: undefined
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======

        author: {}`
          name: `Provider ${index + 1}``
          id: `author-${index + 1}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          avatarUrl: undefined;
=======
          avatarUrl: undefined;
        };
        images: [`/placeholder && placeholder.svg`],;
        createdAt: new Date().toISOString(),;
        rating: Math && Math.floor(Math && Math.random() * 5) + 1,;
        reviewCount: Math && Math.floor(Math && Math.random() * 100);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }));
    setListings(listingsToShow);
    setIsLoading(false);
  }, [slug]);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        }
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        images: [`/placeholder.svg`]
        createdAt: new Date().toISOString()
        rating: Math.floor(Math.random() * 5) + 1
        reviewCount: Math.floor(Math.random() * 100)
      }));
    setListings(listingsToShow);
    setIsLoading(false)
  }, [slug]);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        },
=======
        },`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        },
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        images: [`/placeholder.svg`],
        createdAt: new Date().toISOString(),
        rating: Math.floor(Math.random() * 5) + 1,
        reviewCount: Math.floor(Math.random() * 100)
      })),

    setListings(listingsToShow),
    setIsLoading(false)
  }, [slug]),
<<<<<<< HEAD
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
=======

  // Handle requesting a quote
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId)
    if (listing) {
      toast({
        title: "Quote Requested"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {}
    const listing = listings.find(item => item.id === listingId)
    if (listing) {}
      toast({"
        title: "Quote Requested"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: `Your quote request for ${listing.title} has been sent.`

<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        description: `Your quote request for ${listing.title} has been sent.`

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      }),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      });
      }),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
});
      }),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Navigate to the quote request page with the listing information
=======
        description: `Your quote request for ${listing.title} has been sent.`      // Navigate to the quote request page with the listing information
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        description: `Your quote request for ${listing.title} has been sent.`      // Navigate to the quote request page with the listing information
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      // Navigate to the quote request page with the listing information
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

<<<<<<< HEAD
import { useParams, Link } from "react-router-dom",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Header } from "@/components/header/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { ProductListingCard } from "@/components/ProductListingCard",;
import { useState, useEffect } from "react",;
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",;
import { MARKETPLACE_LISTINGS } from "@/data/listingData",;
import { useNavigate } from "react-router-dom",;
=======



      // Navigate to the quote request page with the listing information"
      navigate("/request-quote", {}
        state: {}
          serviceType: listing.category;
          specificItem: {}
            id: listing.id;
            title: listing.title;
            category: listing.category;
            image: listing.images?.[0]
"
import { useParams, Link } from "react-router-dom",;"
import { Header } from "@/components/header/Header",;"
import { Footer } from "@/components/Footer",;"
import { GradientHeading } from "@/components/GradientHeading",;"
import { ProductListingCard } from "@/components/ProductListingCard",;"
import { useState, useEffect } from "react",;"
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",;"
import { MARKETPLACE_LISTINGS } from "@/data/listingData",;"
import { useNavigate } from "react-router-dom",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "@/hooks/use-toast",;
export default function CategoryDetail() { return null; }
  const { slug } = useParams() as { slug?: string },;
  const navigate = useNavigate(),;
  const [isLoading, setIsLoading] = useState(true),;
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),;
<<<<<<< HEAD
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
<<<<<<< HEAD
      title: "Business Solutions",,
  description: "Enterprise AI integrations and services",;
=======
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({;"
    title: "",;"
    description: "",;"
    icon: <Bot className="w-6 h-6" />;
  }),;
  // Map of category slugs to their display data;
  const categoryData = {;'
    'services': {;"
      title: "Services",;"
      description: "On-demand IT support, consulting, development, and more",;"
      icon: <Briefcase className="w-6 h-6" />;
    },;'
    'talents': {;"
      title: "Talents",;"
      description: "Connect with AI experts, developers, and tech specialists",;"
      icon: <Brain className="w-6 h-6" />;
    },;'
    'equipment': {;"
      title: "Equipment",;"
      description: "Rent or buy specialized hardware, servers, and devices",;"
      icon: <Code className="w-6 h-6" />;
    },;'
    'innovation': {;"
      title: "Innovation",;"
      description: "Discover cutting-edge solutions and tech breakthroughs",;"
      icon: <Bot className="w-6 h-6" />;
    },;'
    'ai-models-apis': {;"
      title: "AI Models & APIs",;"
      description: "Access cutting-edge AI models with easy integration",;"
      icon: <Brain className="w-6 h-6" />;
    },;'
    'content-creation': {;"
      title: "Content Creation",;"
      description: "Generate high-quality content for your projects",;"
      icon: <PenLine className="w-6 h-6" />;
    },;'
    'data-analysis': {;"
      title: "Data Analysis",;"
      description: "Extract insights from complex datasets",;"
      icon: <BarChart className="w-6 h-6" />;
    },;'
    'computer-vision': {;"
      title: "Computer Vision",;"
      description: "Image and video processing solutions",;"
      icon: <Eye className="w-6 h-6" />;
    },;'
    'virtual-assistants': {;"
      title: "Virtual Assistants",;"
      description: "Intelligent automation for your workflow",;"
      icon: <Bot className="w-6 h-6" />;
    },;'
    'voice-speech': {;"
      title: "Voice & Speech",;"
      description: "Speech recognition and synthesis tools",;"
      icon: <Mic className="w-6 h-6" />;
    },;'
    'developer-tools': {;"
      title: "Developer Tools",;"
      description: "AI-powered coding assistance and automation",;"
      icon: <Code className="w-6 h-6" />;
    },;'
    'business-solutions': {;"
      title: "Business Solutions",;"
      description: "Enterprise AI integrations and services",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      title: "Business Solutions",;
      description: "Enterprise AI integrations and services",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      icon: <Briefcase className="w-6 h-6" />;
    }
  },;
  useEffect(() => {;
    setIsLoading(true),;
    // Find the category data based on slug;
<<<<<<< HEAD
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {;
<<<<<<< HEAD
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category",,
  description: "Explore our collection in this category",;
=======
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {;'"
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category",;"
      description: "Explore our collection in this category",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category",;
      description: "Explore our collection in this category",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      icon: <Bot className="w-6 h-6" />;
    },;
    setCategory(currentCategory),;
    // Filter listings by category;
    const categoryTitle = currentCategory.title,;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>;
      listing.category.toLowerCase() === categoryTitle.toLowerCase();
    ),;'
    // If we don't have real listings for this category, generate placeholder listings;
    const listingsToShow = filteredListings.length > 0 ? filteredListings :;
<<<<<<< HEAD
      Array(4).fill(null).map((_, index) => ({;
        id: `${slug}-${index}`,;
<<<<<<< HEAD
        title: `${currentCategory.title} Product ${index + 1}`,,
  description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,;
=======
      Array(4).fill(null).map((_, index) => ({;`
        id: `${slug}-${index}`,;`
        title: `${currentCategory.title} Product ${index + 1}`,;`
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: `${currentCategory.title} Product ${index + 1}`,;
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }, [slug]),;

  // Handle requesting a quote;
  const handleRequestQuote = (listingId: string) => {;
    const listing = listings && listings.find(item => item && item.id === listingId),;

    if (listing) {;
<<<<<<< HEAD
      toast({;"
        title: "Quote Requested",;`
        description: `Your quote request for ${listing && listing.title} has been sent.`;
      });

      // Navigate to the quote request page with the listing information;"
=======
      toast({;
        title: "Quote Requested",;
        description: `Your quote request for ${listing && listing.title} has been sent.`;
      });

      // Navigate to the quote request page with the listing information;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      navigate("/request-quote", {;
        state: { ;
          serviceType: listing && listing.category,;
          specificItem: {;

<<<<<<< HEAD

'
import { use_params, Link } from './react-router-dom';'
import { Header } from '@/components / header / Header';'
import { Footer } from '@/components / Footer';'
import { GradientHeading } from '@/components / GradientHeading';'
import { ProductListingCard } from '@/components / ProductListingCard';'
import { useState, useEffect } from './react';'
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from './lucide-react';'
import { MARKETPLACE_LISTINGS } from '@/data / listing_data';'
import { use_navigate } from './react-router-dom';'
import { toast } from '@/hooks / use - toast';
export default /**;
 * CategoryDetail - Function description;
 */
function CategoryDetail() {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Cast to specify the expected route param type since use_params may be untyped;
  const { slug } = use_params () as { slug?: string }
  const navigate = use_navigate ();
  const [is_loading, setIsLoading] = useState (true);
  const [listings, set_listings] = useState (MARKETPLACE_LISTINGS);
<<<<<<< HEAD
  const [category, set_category] = useState<{title: string, description: string, icon: JSX.Element}>({"
    title: "","
    description: "","
=======
  const [category, set_category] = useState<{title: string, description: string, icon: JSX.Element}>({
    title: "",
    description: "",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    icon: <Bot className="w - 6 h - 6" />;
  });
;
  // Map of category slugs to their display data;
<<<<<<< HEAD
  const category_data = {'
    'services': {"
      title: "Services","
      description: "On - demand IT support, consulting, development, and more";"
      icon: <Briefcase className="w - 6 h - 6" />;
    }'
    'talents': {"
      title: "Talents","
      description: "Connect with AI experts, developers, and tech specialists";"
      icon: <Brain className="w - 6 h - 6" />;
    }'
    'equipment': {"
      title: "Equipment","
      description: "Rent or buy specialized hardware, servers, and devices";"
      icon: <Code className="w - 6 h - 6" />;
    }'
    'innovation': {"
      title: "Innovation","
      description: "Discover cutting - edge solutions and tech breakthroughs","
      icon: <Bot className="w - 6 h - 6" />;
    }'
    'ai - models - apis': {"
      title: "AI Models & APIs","
      description: "Access cutting - edge AI models with easy integration","
      icon: <Brain className="w - 6 h - 6" />;
    }'
    'content - creation': {"
      title: "Content Creation","
      description: "Generate high - quality content for your projects","
      icon: <PenLine className="w - 6 h - 6" />;
    }'
    'data - analysis': {"
      title: "Data Analysis","
      description: "Extract insights from complex datasets","
      icon: <BarChart className="w - 6 h - 6" />;
    }'
    'computer - vision': {"
      title: "Computer Vision","
      description: "Image and video processing solutions","
      icon: <Eye className="w - 6 h - 6" />;
    }'
    'virtual - assistants': {"
      title: "Virtual Assistants","
      description: "Intelligent automation for your workflow","
      icon: <Bot className="w - 6 h - 6" />;
    }'
    'voice - speech': {"
      title: "Voice & Speech","
      description: "Speech recognition and synthesis tools","
      icon: <Mic className="w - 6 h - 6" />;
    }'
    'developer - tools': {"
      title: "Developer Tools","
      description: "AI - powered coding assistance and automation","
      icon: <Code className="w - 6 h - 6" />;
    }'
    'business - solutions': {"
      title: "Business Solutions","
      description: "Enterprise AI integrations and services","
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      icon: <Briefcase className="w - 6 h - 6" />;
    }
  }
;
<<<<<<< HEAD
  useEffect (() => {}
    setIsLoading (true);
;
    // Find the category data based on slug;
    const current_category = category_data[slug as keyof typeof category_data] || {'"
      title: slug?.split ('-').map (word => word.char_at (0).toUpperCase () + word.slice (1)).join (' ') || "Category","
      description: "Explore our collection in this category","
=======
  useEffect (() => {
    setIsLoading (true);
;
    // Find the category data based on slug;
    const current_category = category_data[slug as keyof typeof category_data] || {
      title: slug?.split ('-').map (word => word.char_at (0).toUpperCase () + word.slice (1)).join (' ') || "Category",
      description: "Explore our collection in this category",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      icon: <Bot className="w - 6 h - 6" />;
    }
;
    set_category (current_category);
;
    // Filter listings by category;
    const category_title = current_category.title;
    const filtered_listings = MARKETPLACE_LISTINGS.filter (listing =>;
      listing.category.toLowerCase () === category_title.toLowerCase ());
<<<<<<< HEAD
;'
    // If we don't have real listings for this category, generate placeholder listings;
    const listingsToShow = filtered_listings.length > 0 ? filtered_listings :;
      Array (4).fill (null).map ((_, index) => ({}`
        id: `${slug}-${index}`,`
        title: `${current_category.title} Product ${index + 1}`,`
        description: `A great ${current_category.title.toLowerCase ()} solution for your needs.`,
        category: current_category.title,
        price: Math.floor (Math.random () * 500) + 50,"
        currency: "$","`
        tags: [`${slug}`, "ai", "tool"];
        author: {}`
          name: `Provider ${index + 1}`,`
          id: `author-${index + 1}`,
          avatar_url: undefined;
        }`
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  const handleRequestQuote = (listing_id: string) =>: any {}
    const listing = listings.find (item => item.id === listing_id),
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Quote Requested",`
        description: `Your quote request for ${listing.title} has been sent.`;
      });
;
      // Navigate to the quote request page with the listing information;"
      navigate ("/request - quote", {}
        state: {}
          service_type: listing.category,
          specific_item: {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0];

            id: listing.id,;
            title: listing.title,;
            category: listing.category;
            image: listing.images?.[0];

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }
        }
      });
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  };
  },

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

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
=======
          }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
      });
    }


  },

  };
  },
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
<<<<<<< HEAD

  }
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
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

  return (

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======

;
  return (
    <>;
      <Header />;"
      <div className="min - h-screen bg - zion - blue">;"
        <div className="container mx - auto px - 4 py - 12">;"
          <div className="mb - 4">;"
            <Link to="/categories" className="text - zion - cyan hover:text - zion - cyan - light transition - colors inline - flex items - center">;
              ← Back to Categories;
            </Link>;
          </div>;"
          <div className="text - center mb - 12">;"
            <div className="flex justify - center mb - 6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <div className="text - zion - cyan p - 4 bg - zion - blue - dark rounded - full">;

  }
                {category.icon}
              </div>;
<<<<<<< HEAD
            </div>;"
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;"
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}
<<<<<<< HEAD
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
=======
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <ProductListingCard 
=======



                <ProductListingCard;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  key={listing.id} 


                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
<<<<<<< HEAD
<<<<<<< HEAD
=======          {isLoading ? (;
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

=======
                <ProductListingCard;
key={listing.id} 
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          {isLoading ? (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="flex justify-center items-center h-64">;
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;
            <div className=\"flex justify-center items-center h-64\" />;
              <div className=\"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple\" /></div>;
            </div>;
          ) : (;
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\" />;
              {listings && listings.map((listing) => (;}
                <ProductListingCard;}
key={listing && listing.id} 
                  listing={listing}
<<<<<<< HEAD
                  onRequestQuote={handleRequestQuote}                 />;
=======

    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue">;"
        <div className="container mx-auto px-4 py-12">;"
          <div className="mb-4">;"
            <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">;
              ← Back to Categories;
            </Link>;
          </div>;
"
          <div className="text-center mb-12">;"
            <div className="flex justify-center mb-6">;"
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">;
                {category && category.icon}
              </div>;
            </div>;"
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">;
              {category && category.title}
            </GradientHeading>;"
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
              {category && category.description}
            </p>;
          </div>;


          {isLoading ? (;"
            <div className="flex justify-center items-center h-64">;"
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;
            </div>;

                />;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  onRequestQuote={handleRequestQuote} 
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </div>;
      </div>;
      <Footer />;
    </>;
<<<<<<< HEAD

=======
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

              ))}
            </div>;
          )}
<<<<<<< HEAD

            </p>;
          </div>;
          {is_loading ? ("
            <div className="flex justify - center items - center h - 64">;"
              <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - purple"></div>;
            </div>) : ("
=======
            </p>;
          </div>;
          {is_loading ? (
            <div className="flex justify - center items - center h - 64">;
              <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - purple"></div>;
            </div>) : (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
}

;
  ),; export default function CategoryDetail () {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  onRequestQuote={handleRequestQuote}                 />;
              ))}
            </div>;
          )}  ),; export default function CategoryDetail () {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  //Cast to specify the expected route param type since useParams may be untyped const {
  slug 
}= useParams () as {
  slug?: string 
<<<<<<< HEAD
=======



  ),; export default function CategoryDetail () {}
  //Cast to specify the expected route param type since useParams may be untyped const {};
  slug;
}= useParams () as {}
  slug?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  //Cast to specify the expected route param type since useParams may be untyped const {}
  slug }
}= useParams () as {}
  slug?: string }





import {useParams, Link} from "react-router-dom";""
import {Header} from "@/components/header/Header";""
import {Footer} from "@/components/Footer";""
import {GradientHeading} from "@/components/GradientHeading";""
import {ProductListingCard} from "@/components/ProductListingCard";""
import {useState, useEffect} from "react";""
import {Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase} from "lucide-react";""
import {MARKETPLACE_LISTINGS} from "@/data/listingData";""
import {useNavigate} from "react-router-dom";""
import {toast} from "@/hooks/use-toast";"
export default function CategoryDetail() {
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);"
import { useParams, Link } from "react-router-dom",""
import { Header } from "@/components/header/Header",""
import { Footer } from "@/components/Footer",""
import { GradientHeading } from "@/components/GradientHeading",""
import { ProductListingCard } from "@/components/ProductListingCard",""
import { useState, useEffect } from "react",""
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",""
import { MARKETPLACE_LISTINGS } from "@/data/listingData",""
import { useNavigate } from "react-router-dom",""
import { toast } from "@/hooks/use-toast";"
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string }
import { toast } from "@/hooks/use-toast","
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string },
  const navigate = useNavigate(),
  const [isLoading, setIsLoading] = useState(true),
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({"
    title: ""","
  description: """"
    icon: <Bot className="w-6 h-6" />"
"
      icon: <Briefcase className="w-6 h-6" />"
      icon: <Brain className="w-6 h-6" />"
      icon: <Code className="w-6 h-6" />"
      icon: <PenLine className="w-6 h-6" />"
      icon: <BarChart className="w-6 h-6" />"
      icon: <Eye className="w-6 h-6" />"
      icon: <Mic className="w-6 h-6" />"

  const [category, setCategory] = useState<{title: string, description: string, icon: JSX && JSX.Element}>({;"
    title: "",;""
    description: "",;""
    icon: <Bot className="w-6 h-6" />;"
      icon: <Briefcase className="w-6 h-6" />;"
      icon: <Brain className="w-6 h-6" />;"
      icon: <Code className="w-6 h-6" />;"
      icon: <PenLine className="w-6 h-6" />;"
      icon: <BarChart className="w-6 h-6" />;"
      icon: <Eye className="w-6 h-6" />;"
      icon: <Mic className="w-6 h-6" />;"

  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({;"

  const [category, set_category] = useState<{title: string, description: string, icon: JSX.Element}>({"
    title: "",""
    description: "",""
    icon: <Bot className="w - 6 h - 6" />;"
      icon: <Briefcase className="w - 6 h - 6" />;"
      icon: <Brain className="w - 6 h - 6" />;"
      icon: <Code className="w - 6 h - 6" />;"
      icon: <PenLine className="w - 6 h - 6" />;"
      icon: <BarChart className="w - 6 h - 6" />;"
      icon: <Eye className="w - 6 h - 6" />;"
      icon: <Mic className="w - 6 h - 6" />;"

    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue">;"
</div>"
        <div className="container mx - auto px - 4 py - 12">;"
          <div className="mb - 4">;"
            <Link to="/categories" className="text - zion - cyan hover:text - zion - cyan - light transition - colors inline - flex items - center">;"

            ;
          </div>;"
          <div className="text - center mb - 12">;"
            <div className="flex justify - center mb - 6">;"
              <div className="text - zion - cyan p - 4 bg - zion - blue - dark rounded - full">;"
</div>
              </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;"

            ;"
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;"
</p>


                <ProductListingCard;
                  key={listing.id} 


                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />

      <div className="min-h-screen bg-zion-blue">;"
        <div className="container mx-auto px-4 py-12">;"
          <div className="mb-4">;"
            <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">;"

          <div className="text-center mb-12">;"
            <div className="flex justify-center mb-6">;"
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">;"
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">;"

            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;"
            </p>;
            <div className="flex justify-center items-center h-64">;"
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;"
                  key={listing && listing.id} 
                />;

      <Footer />;

    </>;)
  );
}

              ))}
            <div className="flex justify - center items - center h - 64">;"
              <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - purple"></div>;"
            </div>) : ("
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6">;"
                  onRequestQuote={handleRequestQuote})
                />))}

            </div>)}

    </>);

  ),; export default function CategoryDetail () {
  //Cast to specify the expected route param type since useParams may be untyped const {
  // TODO: Implement
  slug;
}= useParams () as {
  // TODO: Implement
  slug?: string;
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
const navigate = useNavigate ();
const [isLoading, setIsLoading] = useState (true);
const [listings, setListings] = useState (MARKETPLACE LISTINGS);
<<<<<<< HEAD
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
;

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
=======
const [category, setCategory] = useState< {}
  title: string, description: string, icon: JSX.Element;
}> ({}
  //Map of category slugs to their display data const categoryData = {'
  'services': {"
  title: "Services";"
description: "On-demand IT support, consulting, development, and more";"
icon: <Briefcase className="w-6 h-6" /> 
};'
'talents': {"
  title: "Talents";"
description: "Connect with AI experts, developers, and tech specialists";"
icon: <Brain className="w-6 h-6" /> 
};'
'equipment': {"
  title: "Equipment";"
description: "Rent or buy specialized hardware, servers, and devices";"
icon: <Code className="w-6 h-6" /> 
};'
'innovation': {"
  title: "Innovation";"
description: "Discover cutting-edge solutions and tech breakthroughs";"
icon: <Bot className="w-6 h-6" /> 
};'
'ai-models-apis': {"
  title: "AI Models & APIs";"
description: "Access cutting-edge AI models with easy integration";"
icon: <Brain className="w-6 h-6" /> 
};'
'content-creation': {"
  title: "Content Creation";"
description: "Generate high-quality content for your projects";"
icon: <PenLine className="w-6 h-6" /> 
};'
'data-analysis': {"
  title: "Data Analysis";"
description: "Extract insights from complex datasets";"
icon: <BarChart className="w-6 h-6" /> 
};'
'computer-vision': {"
  title: "Computer Vision";"
description: "Image and video processing solutions";"
icon: <Eye className="w-6 h-6" /> 
};'
'virtual-assistants': {"
  title: "Virtual Assistants";"
description: "Intelligent automation for your workflow";"
icon: <Bot className="w-6 h-6" /> 
};'
'voice-speech': {"
  title: "Voice & Speech";"
description: "Speech recognition and synthesis tools";"
icon: <Mic className="w-6 h-6" /> 
};'
'developer-tools': {"
  title: "Developer Tools";"
description: "AI-powered coding assistance and automation";"
icon: <Code className="w-6 h-6" /> 
};'
'business-solutions': {"
  title: "Business Solutions";"
description: "Enterprise AI integrations and services";"
icon: <Briefcase className="w-6 h-6" /> 
}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

const [category, setCategory] = useState< {
  title: string, description: string, icon: JSX.Element;
}> ({
  //Map of category slugs to their display data const categoryData = {"
  'services': {
  title: "Services";","
  description: "On-demand IT support, consulting, development, and more";""
return (<> <Header /> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto px-4 py-12" > <div className="mb-4" > <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center" > ← Back to Categories  </div> {"
)
  listings.map ( (listing) => (<ProductListingCard key= {
  listing.id;
}listing= {
  listing;
}onRequestQuote= {
  handleRequestQuote;)

}/>) ) 

}</div>) 
}</div> </div> <Footer /> </>) 
pr-12325
}
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
