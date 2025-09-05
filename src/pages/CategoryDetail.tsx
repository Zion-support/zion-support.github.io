<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { useState, useEffect, useRef, Suspense } from "react",
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from 'lucide-react'
import { MARKETPLACE_LISTINGS } from "@/data/listingData",
import { ProductListing } from "@/types/listings",
import { useRouter } from 'next/router',
import Link from 'next/link',
import { toast } from "@/hooks/use-toast",
import { NextSeo } from '@/components/NextSeo',
import { Header } from "@/components/Header",
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton',
import {logErrorToProduction} from '@/utils/productionLogger',
const AUTO_SERVICE_TITLES = [
=======
import Link from 'next/link';
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';


const _AUTO_SERVICE_TITLES = [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  "AI-Powered Customer Support",
  "Cloud Infrastructure Management",
  "Predictive Analytics Consulting",
  "Cybersecurity Automation Suite",
  "Robotic Process Automation",
  "Machine Learning Model Tuning",
  "IoT Device Integration Service",
  "Blockchain Data Solutions"
],
=======
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { ProductListingCard } from &quot;@/components/ProductListingCard&quot;;
import { useState, useEffect, useRef, Suspense } from &quot;react&quot;;
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from 'lucide-react'
import { MARKETPLACE_LISTINGS } from &quot;@/data/listingData&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from &quot;@/hooks/use-toast&quot;;
import { NextSeo } from '@/components/NextSeo';
import { Header } from &quot;@/components/Header&quot;;
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import {logErrorToProduction} from '@/utils/productionLogger';


const AUTO_SERVICE_TITLES = [
  &quot;AI-Powered Customer Support&quot;,
  &quot;Cloud Infrastructure Management&quot;,
  &quot;Predictive Analytics Consulting&quot;,
  &quot;Cybersecurity Automation Suite&quot;,
  &quot;Robotic Process Automation&quot;,
  &quot;Machine Learning Model Tuning&quot;,
  &quot;IoT Device Integration Service&quot;,
  &quot;Blockchain Data Solutions&quot;
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
function generateInnovationListing(index: number): ProductListing {
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] || 'AI Service',
  const price = Math.floor(Math.random() * 9500) + 500, // $500 - $10,000
  const rating = Math.floor(Math.random() * 2) + 4, // 4-5 stars
  const reviewCount = Math.floor(Math.random() * 50) + 10,
=======
function generateInnovationListing(_index: number): ProductListing {_const _title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] || 'AI Service';
  const _price = Math.floor(Math.random() * 9500) + 500; // $500 - $10, _000
  const _rating = Math.floor(Math.random() * 2) + 4; // 4-5 stars
  const _reviewCount = Math.floor(Math.random() * 50) + 10;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return {
    id: `innovation-auto-${index}`,
    title,
<<<<<<< HEAD
    description: `Professional ${title} package with expert support and global delivery. Ideal for businesses seeking modern IT and AI solutions at competitive market rates.`,
    category: &quot;Innovation&quot;,
    price,
    currency: &quot;$&quot;,
    tags: [&quot;innovation&quot;, &quot;ai&quot;, &quot;service&quot;],
    author: {
      name: &quot;AutoGen Solutions&quot;,
      id: &quot;autogen&quot;
    },
    images: [&quot;https://source.unsplash.com/random/800x500?technology&quot;],
=======
    description: `Professional ${_title} package with expert support and global delivery. Ideal for businesses seeking modern IT and AI solutions at competitive market rates.`,
    category: "Innovation",
    price,
    currency: "$",
    tags: ["innovation", "ai", "service"],
    author: {_name: "AutoGen Solutions", _id: "autogen"},
    images: ["https://source.unsplash.com/random/800x500?technology"],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    createdAt: new Date().toISOString(),
    rating,
    reviewCount,
    location: &quot;Global&quot;,
    availability: &quot;Immediate&quot;,
    aiScore: Math.floor(Math.random() * 20) + 80
  }
}

<<<<<<< HEAD
interface CategoryDetailProps {
  slug?: string
}

export default function CategoryDetail({ slug: slugProp }: CategoryDetailProps = {}) {
  const router = useRouter(),
  // Get slug from Next.js router query params
  const params = router.query as { slug?: string },
  const slug = slugProp ?? params.slug,

  // Redirect to categories list if slug is missing
  if (!slug) {
    router.push('/categories'),
    return null
  }
  const [isLoading, setIsLoading] = useState(true),
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({
<<<<<<< HEAD
    title: "",
    description: "",
    icon: <Bot className="w-6 h-6" />
  }),
  const innovationCounterRef = useRef(0),
=======
    title: "&quot;,
    description: "&quot;,
    icon: <Bot className=&quot;w-6 h-6&quot; />
  });
  const innovationCounterRef = useRef(0);
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
    async function load() {
      setIsLoading(true),
=======
interface CategoryDetailProps {_slug?: string;}

export default function CategoryDetail(_{_slug: slugProp}: CategoryDetailProps = {}) {_const _router = useRouter();
  // Get slug from Next.js router query params
  const _params = router.query as { slug?: string};
  const _slug = slugProp ?? params.slug;

  // Redirect to categories list if slug is missing
  if (!slug) {_router.push('/categories');
    return null;}
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [category, setCategory] = useState<{_title: string, _description: string, _icon: JSX.Element}>({_title: "", _description: "", _icon: <Bot className="w-6 h-6" />});
  const _innovationCounterRef = useRef(0);

  // Map of category slugs to their display data
  const _categoryData = {_'services': {
      title: "Services", _description: "On-demand IT support, _consulting, _development, _and more", _icon: <Briefcase className="w-6 h-6" />},
    'talents': {_title: "Talents", _description: "Connect with AI experts, _developers, _and tech specialists", _icon: <Brain className="w-6 h-6" />},
    'equipment': {_title: "Equipment", _description: "Rent or buy specialized hardware, _servers, _and devices", _icon: <Code className="w-6 h-6" />},
    'innovation': {_title: "Innovation", _description: "Discover cutting-edge solutions and tech breakthroughs", _icon: <Bot className="w-6 h-6" />},
    'ai-models-apis': {_title: "AI Models & APIs", _description: "Access cutting-edge AI models with easy integration", _icon: <Brain className="w-6 h-6" />},
    'content-creation': {_title: "Content Creation", _description: "Generate high-quality content for your projects", _icon: <PenLine className="w-6 h-6" />},
    'data-analysis': {_title: "Data Analysis", _description: "Extract insights from complex datasets", _icon: <BarChart className="w-6 h-6" />},
    'computer-vision': {_title: "Computer Vision", _description: "Image and video processing solutions", _icon: <Eye className="w-6 h-6" />},
    'virtual-assistants': {_title: "Virtual Assistants", _description: "Intelligent automation for your workflow", _icon: <Bot className="w-6 h-6" />},
    'voice-speech': {_title: "Voice & Speech", _description: "Speech recognition and synthesis tools", _icon: <Mic className="w-6 h-6" />},
    'developer-tools': {_title: "Developer Tools", _description: "AI-powered coding assistance and automation", _icon: <Code className="w-6 h-6" />},
    'business-solutions': {_title: "Business Solutions", _description: "Enterprise AI integrations and services", _icon: <Briefcase className="w-6 h-6" />}
  };

  useEffect__(() => {_async function load() {
      setIsLoading(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      try {
        // Find the category data based on slug
        const _currentCategory = categoryData[slug as keyof typeof categoryData] || {
          title: slug
            ?.split('-')
<<<<<<< HEAD
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || 'Category',
          description: 'Explore our collection in this category',
<<<<<<< HEAD
          icon: <Bot className="w-6 h-6" />},
=======
          icon: <Bot className=&quot;w-6 h-6&quot; />};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            .map(_(word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || 'Category', _description: 'Explore our collection in this category', _icon: <Bot className="w-6 h-6" />};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        setCategory(currentCategory),
        innovationCounterRef.current = 0,

        // Filter listings by category
<<<<<<< HEAD
        const categoryTitle = currentCategory.title,
        const filteredListings = MARKETPLACE_LISTINGS.filter(
          (listing) => listing.category.toLowerCase() === categoryTitle.toLowerCase()
        ),
=======
        const _categoryTitle = currentCategory.title;
        const _filteredListings = MARKETPLACE_LISTINGS.filter(_(listing) => listing.category.toLowerCase() === categoryTitle.toLowerCase()
        );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // If we don't have real listings for this category, generate placeholder listings
        const _listingsToShow =
          filteredListings.length > 0
            ? filteredListings
            : Array(4)
                .fill(null)
                .map(_(_, _index) => ({_id: `${slug}-${_index}`,
                  title: `${_currentCategory.title} Product ${_index + 1}`,
                  description: `A great ${_currentCategory.title.toLowerCase()} solution for your needs.`,
                  category: currentCategory.title,
                  price: Math.floor(Math.random() * 500) + 50,
                  currency: '$',
<<<<<<< HEAD
                  tags: [`${slug}`, 'aitool'],
                  author: {
                    name: `Provider ${index + 1}`,
                    id: `author-${index + 1}`,
=======
                  tags: [`${_slug}`, 'ai', 'tool'],
                  author: {_name: `Provider ${index + 1}`,
                    id: `author-${_index + 1}`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    avatarUrl: undefined},
                  images: [`/placeholder.svg`],
                  createdAt: new Date().toISOString(),
                  rating: Math.floor(Math.random() * 5) + 1,
                  reviewCount: Math.floor(Math.random() * 100)})),

<<<<<<< HEAD
        setListings(listingsToShow)
      } catch (err) {
        logErrorToProduction('Category load error:', { data: err }),
        toast({ title: 'Error', description: 'Failed to load category' })
      } finally {
        setIsLoading(false)
      }
=======
        setListings(listingsToShow);
      } catch (err) {_logErrorToProduction('Category load error:', _{ data: err});
        toast({_title: 'Error', _description: 'Failed to load category'});
      } finally {_setIsLoading(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    load()
  }, [slug]),

<<<<<<< HEAD
  useEffect(() => {
    if (slug !== 'innovation') return,

    const interval = setInterval(() => {
      innovationCounterRef.current += 1,
      setListings((prev) => [
        generateInnovationListing(innovationCounterRef.current),
        ...prev])
    }, 120000), // every 2 minutes
=======
  useEffect__(() => {_if (slug !== 'innovation') return;

    const _interval = setInterval__(() => {
      innovationCounterRef.current += 1;
      setListings(_(prev) => [
        generateInnovationListing(innovationCounterRef.current), _...prev]);}, 120000); // every 2 minutes
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return () => clearInterval(interval)
  }, [slug]),

  // Handle requesting a quote
<<<<<<< HEAD
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId),
    
    if (listing) {
      toast({
        title: &quot;Quote Requested&quot;,
        description: `Your quote request for ${listing.title} has been sent.`
      }),
      
      // Navigate to the quote request page with the listing information
      const queryParams = new URLSearchParams({
        serviceType: listing.category,
        itemId: listing.id,
        itemTitle: listing.title,
        itemCategory: listing.category,
        ...(listing.images?.[0] && { itemImage: listing.images[0] })
      }),
      
      router.push(`/request-quote?${queryParams.toString()}`)
=======
  const _handleRequestQuote = (_listingId: string) => {_const _listing = listings.find(item => item.id === listingId);
    
    if (listing) {
      toast({
        title: "Quote Requested", _description: `Your quote request for ${listing.title} has been sent.`
      });
      
      // Navigate to the quote request page with the listing information
      const _queryParams = new URLSearchParams({_serviceType: listing.category, _itemId: listing.id, _itemTitle: listing.title, _itemCategory: listing.category, _...(listing.images?.[0] && { itemImage: listing.images[0]})
      });
      
      router.push(`/request-quote?${_queryParams.toString()}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const seoTitle = category.title
    ? `${category.title} | Zion Marketplace`
    : 'Category | Zion Marketplace',
  const seoDescription =
    category.description || 'Explore listings in this category.',
=======
  const _seoTitle = category.title
    ? `${_category.title} | Zion Marketplace`
    : 'Category | Zion Marketplace';
  const _seoDescription =
    category.description || 'Explore listings in this category.';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <NextSeo title={_seoTitle} description={_seoDescription} />
      <Header />
<<<<<<< HEAD
      <Suspense fallback={<ListingGridSkeleton />}> 
        <div className=&quot;min-h-screen bg-zion-blue&quot;>
          <div className=&quot;container mx-auto px-4 py-12&quot;>
          <div className=&quot;mb-4&quot;>
            <Link href=&quot;/categories&quot; className=&quot;text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center&quot;>
=======
      <Suspense fallback={_<ListingGridSkeleton />}> 
        <div className="min-h-screen bg-zion-blue">
          <div className="container mx-auto px-4 py-12">
          <div className="mb-4">
            <Link href="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ← Back to Categories
            </Link>
          </div>
          
<<<<<<< HEAD
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
=======
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">
                {_category.icon}
              </div>
            </div>
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              {_category.title}
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              {_category.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
          
          {_isLoading ? (
            <ListingGridSkeleton />
<<<<<<< HEAD
          ) : (
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>
              {listings.map((listing) => (
                <ProductListingCard
                  key={listing.id}
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                  detailBasePath=&quot;/marketplace/listing&quot;
=======
          ) : (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing) => (
                <ProductListingCard
                  key={listing.id}
                  listing={_listing}
                  onRequestQuote={_handleRequestQuote}
                  detailBasePath="/marketplace/listing"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              ))}
            </div>
          )}
          </div>
        </div>
      </Suspense>
    </>
  )
}
