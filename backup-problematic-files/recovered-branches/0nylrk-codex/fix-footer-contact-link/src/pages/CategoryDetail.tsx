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

    icon:<Bot className="w-6 h-6" />;
  }),;
;
  // Map of category slugs to their display data;
  const categoryData = {;
    'services':{;

      icon:<Briefcase className="w-6 h-6" />;
    },;
    'talents':{;
      title: "Talents";,,
  description: "Connect with AI experts;, developers, and tech specialists",;
      icon:<Brain className="w-6 h-6" />;
    },;
    'equipment':{;
      title: "Equipment";,,
  description: "Rent or buy specialized hardware;, servers, and devices",;
      icon:<Code className="w-6 h-6" />;
    },;
    'innovation':{;
      title: "Innovation";,,
  description: "Discover cutting-edge solutions and tech breakthroughs";,;
      icon:<Bot className="w-6 h-6" />;
    },;
    'ai-models-apis':{;
      title: "AI Models & APIs";,,
  description: "Access cutting-edge AI models with easy integration";,;
      icon:<Brain className="w-6 h-6" />;
    },;
    'content-creation':{;
      title: "Content Creation";,,
  description: "Generate high-quality content for your projects";,;
      icon:<PenLine className="w-6 h-6" />;
    },;
    'data-analysis':{;
      title: "Data Analysis";,,
  description: "Extract insights from complex datasets";,;
      icon:<BarChart className="w-6 h-6" />;
    },;
    'computer-vision':{;
      title: "Computer Vision";,,
  description: "Image and video processing solutions";,;
      icon:<Eye className="w-6 h-6" />;
    },;
    'virtual-assistants':{;
      title: "Virtual Assistants";,,
  description: "Intelligent automation for your workflow";,;
      icon:<Bot className="w-6 h-6" />;
    },;
    'voice-speech':{;
      title: "Voice & Speech";,,
  description: "Speech recognition and synthesis tools";,;
      icon:<Mic className="w-6 h-6" />;
    },;
    'developer-tools':{;
      title: "Developer Tools";,,
  description: "AI-powered coding assistance and automation";,;
      icon:<Code className="w-6 h-6" />;
    },;
    'business-solutions':{;

      icon:<Briefcase className="w-6 h-6" />;
    }
  },;
;
  useEffect(() => {;
    setIsLoading(true),;
    ;
    // Find the category data based on slug;
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {;

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

        category:currentCategory.title,;
        price:Math.floor(Math.random() * 500) + 50,;
        currency:"$",;
        tags:[`${slug}`, "ai", "tool"],;

        author:{;
          name: `Provider ${index + 1;}`,;
          id: `author-${index + 1;}`,;
          avatarUrl:undefined;
        },;
        images: [`/placeholder.svg`];,;
        createdAt: new Date().toISOString();,;
        rating: Math.floor(Math.random() * 5) + 1;,;
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

      }),;
      ;
      // Navigate to the quote request page with the listing information;
      navigate("/request-quote", {;
        state:{ ;
          serviceType: listing.category;,;
          specificItem:{;
            id: listing.id;,;
            title: listing.title;,;
            category: listing.category;,;
            image:listing.images?.[0];
          }
        }
      }),;
    }
  },;
;
  return (;
  const [category, setCategory] = useState<{title: string;, description: string;, icon: JSX.Element;}>({;"
    title: "";,;""
    description: "";,;""
    icon:<Bot className="w-6 h-6" />;"
"
      icon:<Briefcase className="w-6 h-6" />;"
      icon:<Brain className="w-6 h-6" />;"
      icon:<Code className="w-6 h-6" />;"
      icon:<PenLine className="w-6 h-6" />;"
      icon:<BarChart className="w-6 h-6" />;"
      icon:<Eye className="w-6 h-6" />;"
      icon:<Mic className="w-6 h-6" />;"
pr-12325
    <>;
      <Header />;

            </Link>;
          </div>;
          ;
          <div className="text-center mb-12">;
            <div className="flex justify-center mb-6">;
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">;
                {category.icon}

              </div>;
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">;"
            ;"
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;"
</p>
            </p>;

          {isLoading ? (;
            <div className="flex justify-center items-center h-64">;
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;
            </div>;

                <ProductListingCard ;
                  key={listing.id} ;                  listing={listing}
                  onRequestQuote={handleRequestQuote} ;

                />;

      <Footer />;

  ),; export default function CategoryDetail () {
  //Cast to specify the expected route param type since useParams may be untyped const {
  // TODO: Implement;
}
  slug;
}= useParams () as {
  // TODO: Implement
  slug?: string;
};
const navigate = useNavigate ();
const [isLoading, setIsLoading] = useState (true);
const [listings, setListings] = useState (MARKETPLACE LISTINGS);
const [category, setCategory] = useState< {
  title: string;, description: string;, icon: JSX.Element;
}> ({
  //Map of category slugs to their display data const categoryData = {"
  'services': {
  title: "Services";,
  description: "On-demand IT support;, consulting, development, and more";
icon: <Briefcase className="w-6 h-6" /> ;
};
'talents': {
  title: "Talents";,
  description: "Connect with AI experts;, developers, and tech specialists";
icon: <Brain className="w-6 h-6" /> ;
};
'equipment': {
  title: "Equipment";,
  description: "Rent or buy specialized hardware;, servers, and devices";
icon: <Code className="w-6 h-6" /> ;
};
'innovation': {
  title: "Innovation";,
  description: "Discover cutting-edge solutions and tech breakthroughs";
icon: <Bot className="w-6 h-6" /> ;
};
'ai-models-apis': {
  title: "AI Models & APIs";,
  description: "Access cutting-edge AI models with easy integration";
icon: <Brain className="w-6 h-6" /> ;
};
'content-creation': {
  title: "Content Creation";,
  description: "Generate high-quality content for your projects";
icon: <PenLine className="w-6 h-6" /> ;
};
'data-analysis': {
  title: "Data Analysis";,
  description: "Extract insights from complex datasets";
icon: <BarChart className="w-6 h-6" /> ;
};
'computer-vision': {
  title: "Computer Vision";,
  description: "Image and video processing solutions";
icon: <Eye className="w-6 h-6" /> ;
};
'virtual-assistants': {
  title: "Virtual Assistants";,
  description: "Intelligent automation for your workflow";
icon: <Bot className="w-6 h-6" /> ;
};
'voice-speech': {
  title: "Voice & Speech";,
  description: "Speech recognition and synthesis tools";
icon: <Mic className="w-6 h-6" /> ;
};
'developer-tools': {
  title: "Developer Tools";,
  description: "AI-powered coding assistance and automation";
icon: <Code className="w-6 h-6" /> ;
};
'business-solutions': {
  title: "Business Solutions";,
  description: "Enterprise AI integrations and services";
icon: <Briefcase className="w-6 h-6" /> ;
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
avatarUrl: undefined ;
};
images: [`/placeholder.svg`];
createdAt: new Date () .toISOString ();
rating: Math.floor (Math.random () * 5) + 1;
reviewCount: Math.floor (Math.random () * 100) ;
}) );
setListings (listingsToShow);
setIsLoading (false) 
}, [slug]);
//Handle requesting a quote 
}
}) 
}
};
return (<> <Header /> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto px-4 py-12" > <div className="mb-4" > <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center" >  Back to Categories </Link> </div> {
  title: "Services";","
  description: "On-demand IT support;, consulting, development, and more";""
icon: <Briefcase className="w-6 h-6" />"
icon: <Brain className="w-6 h-6" />"
icon: <Code className="w-6 h-6" />"
icon: <Bot className="w-6 h-6" />"
icon: <PenLine className="w-6 h-6" />"
icon: <BarChart className="w-6 h-6" />"
icon: <Eye className="w-6 h-6" />"
icon: <Mic className="w-6 h-6" />"
return (<> <Header /> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto px-4 py-12" > <div className="mb-4" > <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center" >  Back to Categories  </div> {"
)
pr-12325
  listings.map ( (listing) => (<ProductListingCard key= {
  listing.id;
}listing= {
  listing;
}onRequestQuote= {
  handleRequestQuote;)
}/>) ) 

}</div>)