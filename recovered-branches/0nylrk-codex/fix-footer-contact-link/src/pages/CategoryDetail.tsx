
<<<<<<< HEAD
<<<<<<< HEAD
import { useParams, Link } from "react-router-dom",
import { Header } from "@/components/header/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { useState, useEffect } from "react",
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",
import { MARKETPLACE_LISTINGS } from "@/data/listingData",
import { useNavigate } from "react-router-dom",
import { toast } from "@/hooks/use-toast",
=======
import { useParams, Link } from &quot;react-router-dom&quot;;
import { Header } from &quot;@/components/header/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { ProductListingCard } from &quot;@/components/ProductListingCard&quot;;
import { useState, useEffect } from &quot;react&quot;;
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from &quot;lucide-react&quot;;
import { MARKETPLACE_LISTINGS } from &quot;@/data/listingData&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function CategoryDetail() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { slug } = useParams() as { slug?: string },
  const navigate = useNavigate(),
  const [isLoading, setIsLoading] = useState(true),
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({
<<<<<<< HEAD
    title: "",
    description: "",
    icon: <Bot className="w-6 h-6" />
  }),
=======
    title: "&quot;,
    description: "&quot;,
    icon: <Bot className=&quot;w-6 h-6&quot; />
  });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Map of category slugs to their display data
  const categoryData = {
    'services': {
      title: &quot;Services&quot;,
      description: &quot;On-demand IT support, consulting, development, and more&quot;,
      icon: <Briefcase className=&quot;w-6 h-6&quot; />
    },
    'talents': {
      title: &quot;Talents&quot;,
      description: &quot;Connect with AI experts, developers, and tech specialists&quot;,
      icon: <Brain className=&quot;w-6 h-6&quot; />
    },
    'equipment': {
      title: &quot;Equipment&quot;,
      description: &quot;Rent or buy specialized hardware, servers, and devices&quot;,
      icon: <Code className=&quot;w-6 h-6&quot; />
    },
    'innovation': {
      title: &quot;Innovation&quot;,
      description: &quot;Discover cutting-edge solutions and tech breakthroughs&quot;,
      icon: <Bot className=&quot;w-6 h-6&quot; />
    },
    'ai-models-apis': {
      title: &quot;AI Models & APIs&quot;,
      description: &quot;Access cutting-edge AI models with easy integration&quot;,
      icon: <Brain className=&quot;w-6 h-6&quot; />
    },
    'content-creation': {
      title: &quot;Content Creation&quot;,
      description: &quot;Generate high-quality content for your projects&quot;,
      icon: <PenLine className=&quot;w-6 h-6&quot; />
    },
    'data-analysis': {
      title: &quot;Data Analysis&quot;,
      description: &quot;Extract insights from complex datasets&quot;,
      icon: <BarChart className=&quot;w-6 h-6&quot; />
    },
    'computer-vision': {
      title: &quot;Computer Vision&quot;,
      description: &quot;Image and video processing solutions&quot;,
      icon: <Eye className=&quot;w-6 h-6&quot; />
    },
    'virtual-assistants': {
      title: &quot;Virtual Assistants&quot;,
      description: &quot;Intelligent automation for your workflow&quot;,
      icon: <Bot className=&quot;w-6 h-6&quot; />
    },
    'voice-speech': {
      title: &quot;Voice & Speech&quot;,
      description: &quot;Speech recognition and synthesis tools&quot;,
      icon: <Mic className=&quot;w-6 h-6&quot; />
    },
    'developer-tools': {
      title: &quot;Developer Tools&quot;,
      description: &quot;AI-powered coding assistance and automation&quot;,
      icon: <Code className=&quot;w-6 h-6&quot; />
    },
    'business-solutions': {
      title: &quot;Business Solutions&quot;,
      description: &quot;Enterprise AI integrations and services&quot;,
      icon: <Briefcase className=&quot;w-6 h-6&quot; />
    }
  },

  useEffect(() => {
    setIsLoading(true),
    
    // Find the category data based on slug
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {
<<<<<<< HEAD
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category",
      description: "Explore our collection in this category",
      icon: <Bot className="w-6 h-6" />
    },
=======
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || &quot;Category&quot;,
      description: &quot;Explore our collection in this category&quot;,
      icon: <Bot className=&quot;w-6 h-6&quot; />
    };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    setCategory(currentCategory),

    // Filter listings by category
    const categoryTitle = currentCategory.title,
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing => 
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    ),
    
    // If we don't have real listings for this category, generate placeholder listings
    const listingsToShow = filteredListings.length > 0 ? filteredListings : 
      Array(4).fill(null).map((_, index) => ({
        id: `${slug}-${index}`,
        title: `${currentCategory.title} Product ${index + 1}`,
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
        category: currentCategory.title,
        price: Math.floor(Math.random() * 500) + 50,
        currency: &quot;$&quot;,
        tags: [`${slug}`, &quot;ai&quot;, &quot;tool&quot;],
        author: {
          name: `Provider ${index + 1}`,
          id: `author-${index + 1}`,
          avatarUrl: undefined
        },
        images: [`/placeholder.svg`],
        createdAt: new Date().toISOString(),
        rating: Math.floor(Math.random() * 5) + 1,
        reviewCount: Math.floor(Math.random() * 100)
      })),

    setListings(listingsToShow),
    setIsLoading(false)
  }, [slug]),

  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId),
    
    if (listing) {
      toast({
        title: &quot;Quote Requested&quot;,
        description: `Your quote request for ${listing.title} has been sent.`
      }),
      
      // Navigate to the quote request page with the listing information
      navigate(&quot;/request-quote&quot;, {
        state: { 
          serviceType: listing.category,
          specificItem: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]
=======
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
            id: listing.id,;
            title: listing.title,;
            category: listing.category;
            image: listing.images?.[0];
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          }
        }
      });
    }
<<<<<<< HEAD
  },

  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue&quot;>
        <div className=&quot;container mx-auto px-4 py-12&quot;>
          <div className=&quot;mb-4&quot;>
            <Link to=&quot;/categories&quot; className=&quot;text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center&quot;>
              ← Back to Categories
            </Link>
          </div>
          
          <div className=&quot;text-center mb-12&quot;>
            <div className=&quot;flex justify-center mb-6&quot;>
              <div className=&quot;text-zion-cyan p-4 bg-zion-blue-dark rounded-full&quot;>
                {category.icon}
              </div>
            </div>
            <GradientHeading className=&quot;text-4xl md:text-5xl font-bold mb-4&quot;>
              {category.title}
            </GradientHeading>
            <p className=&quot;text-zion-slate-light text-lg max-w-3xl mx-auto&quot;>
              {category.description}
            </p>
          </div>
          
          {isLoading ? (
            <div className=&quot;flex justify-center items-center h-64&quot;>
              <div className=&quot;animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple&quot;></div>
            </div>
          ) : (
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>
              {listings.map((listing) => (
                <ProductListingCard 
                  key={listing.id} 
=======
  };
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
          {isLoading ? (;
            <div className="flex justify-center items-center h-64">;
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;
            </div>;
          ) : (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
              {listings.map((listing) => (;
                <ProductListingCard;
                  key={listing.id} ;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  listing={listing}
                  onRequestQuote={handleRequestQuote} ;
                />;
              ))}
            </div>;
          )}
        </div>;
      </div>;
      <Footer />;
    </>;
  );
}
;