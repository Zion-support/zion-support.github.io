import { use_router } from 'next / router';
import Link from 'next / link';
import { toast } from '@/hooks / use - toast';
import {NextSeo} from '@/components / NextSeo';
import { Header } from '@/components / Header';
import ListingGridSkeleton from '@/components / skeletons / ListingGridSkeleton';
import {logErrorToProduction} from '@/utils / production_logger';
const AUTO_SERVICE_TITLES = [;
  "AI - Powered Customer Support";
  "Cloud Infrastructure Management";
  "Predictive Analytics Consulting";
  "Cybersecurity Automation Suite";
  "Robotic Process Automation";
  "Machine Learning Model Tuning";
  "IoT Device Integration Service";
  "Blockchain Data Solutions";
];
function generateInnovationListing (index: number): ProductListing {
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] || 'AI Service';
  const price = Math.floor (Math.random () * 9500) + 500, // $500 - $10, 000;
  const rating = Math.floor (Math.random () * 2) + 4, // 4 - 5 stars;
  const params = router.query as { slug?: string }
  const slug = slug_prop ?? params.slug;
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
    }          icon: <Bot className="w - 6 h - 6" />},
        set_category (current_category);
        innovationCounterRef.current = 0;
    : 'Category | Zion Marketplace';
  const seo_description =;
    category.description || 'Explore listings in this category.';
  return (
    <>;
      <NextSeo title={seo_title} description={seo_description} />;
      <Header />;
      <Suspense fallback={<ListingGridSkeleton />}>;
        <div className="min - h-screen bg - zion - blue">;
          <div className="container mx - auto px - 4 py - 12">;
          <div className="mb - 4">;
            <Link href="/categories" className="text - zion - cyan hover:text - zion - cyan - light transition - colors inline - flex items - center">;
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
import { useRouter } from 'next/router';
import Link from 'next/link';
import {toast} from "@/hooks/use-toast";
import {NextSeo} from '@/components/NextSeo';
import {Header} from "@/components/Header";
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import {logErrorToProduction} from '@/utils/productionLogger';
const AUTO_SERVICE_TITLES = [;
  "AI-Powered Customer Support";
  "Cloud Infrastructure Management";
  "Predictive Analytics Consulting";
  "Cybersecurity Automation Suite";
  "Robotic Process Automation";
  "Machine Learning Model Tuning";
  "IoT Device Integration Service";
  "Blockchain Data Solutions";
];
function generateInnovationListing(): any (index: number): ProductListing {;
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES && AUTO_SERVICE_TITLES.length] || 'AI Service';
  const price = Math && Math.floor(Math && Math.random() * 9500) + 500, // $500 - $10,000;
  const rating = Math && Math.floor(Math && Math.random() * 2) + 4, // 4-5 stars;
  const params = router && router.query as { slug?: string };
  const slug = slugProp ?? params && params.slug;
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
    };          icon: <Bot className="w-6 h-6" />},;
        setCategory(currentCategory);
        innovationCounterRef && innovationCounterRef.current = 0;
    : 'Category | Zion Marketplace';
  const seoDescription =;
    category && category.description || 'Explore listings in this category.';
  return (
    <>;
      <NextSeo title={seoTitle} description={seoDescription} />;
      <Header />;
      <Suspense fallback={<ListingGridSkeleton />}> ;
        <div className="min-h-screen bg-zion-blue">;
          <div className="container mx-auto px-4 py-12">;
          <div className="mb-4">;
            <Link href="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">;
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
          {isLoading ? (;
            <ListingGridSkeleton />;
          ) : (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
              {listings && listings.map((listing,) => (;
                <ProductListingCard
                  key = {listing && listing.id,}
                  listing = {listing,}
                  onRequestQuote = {handleRequestQuote,}
                  detailBasePath="/marketplace/listing"
                />;
              ))}
            </div>;
          )}
          </div>;
        </div>;
      </Suspense>;
    </>;
  );
}
            </p>;
          </div>;
          {is_loading ? (
            <ListingGridSkeleton />) : (
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6">;
              {listings.map ((listing, ) => (
                <ProductListingCard;
                  key = {listing.id, }
                  listing = {listing, }
                  onRequestQuote = {handleRequestQuote, }
                  detailBasePath="/marketplace / listing";
                />))}
            </div>)}
          </div>;
        </div>;
      </Suspense>;
    </>);
}