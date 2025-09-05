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

function generateInnovationListing(index: number): ProductListing {
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] || 'AI Service',
  const price = Math.floor(Math.random() * 9500) + 500, // $500 - $10,000
  const rating = Math.floor(Math.random() * 2) + 4, // 4-5 stars
  const reviewCount = Math.floor(Math.random() * 50) + 10,

  return {
    id: `innovation-auto-${index}`,
    title,
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
    createdAt: new Date().toISOString(),
    rating,
    reviewCount,
    location: &quot;Global&quot;,
    availability: &quot;Immediate&quot;,
    aiScore: Math.floor(Math.random() * 20) + 80
  }
}

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
      try {
        // Find the category data based on slug
        const currentCategory = categoryData[slug as keyof typeof categoryData] || {
          title: slug
            ?.split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || 'Category',
          description: 'Explore our collection in this category',
<<<<<<< HEAD
          icon: <Bot className="w-6 h-6" />},
=======
          icon: <Bot className=&quot;w-6 h-6&quot; />};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

        setCategory(currentCategory),
        innovationCounterRef.current = 0,

        // Filter listings by category
        const categoryTitle = currentCategory.title,
        const filteredListings = MARKETPLACE_LISTINGS.filter(
          (listing) => listing.category.toLowerCase() === categoryTitle.toLowerCase()
        ),

        // If we don't have real listings for this category, generate placeholder listings
        const listingsToShow =
          filteredListings.length > 0
            ? filteredListings
            : Array(4)
                .fill(null)
                .map((_, index) => ({
                  id: `${slug}-${index}`,
                  title: `${currentCategory.title} Product ${index + 1}`,
                  description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
                  category: currentCategory.title,
                  price: Math.floor(Math.random() * 500) + 50,
                  currency: '$',
                  tags: [`${slug}`, 'aitool'],
                  author: {
                    name: `Provider ${index + 1}`,
                    id: `author-${index + 1}`,
                    avatarUrl: undefined},
                  images: [`/placeholder.svg`],
                  createdAt: new Date().toISOString(),
                  rating: Math.floor(Math.random() * 5) + 1,
                  reviewCount: Math.floor(Math.random() * 100)})),

        setListings(listingsToShow)
      } catch (err) {
        logErrorToProduction('Category load error:', { data: err }),
        toast({ title: 'Error', description: 'Failed to load category' })
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [slug]),

  useEffect(() => {
    if (slug !== 'innovation') return,

    const interval = setInterval(() => {
      innovationCounterRef.current += 1,
      setListings((prev) => [
        generateInnovationListing(innovationCounterRef.current),
        ...prev])
    }, 120000), // every 2 minutes

    return () => clearInterval(interval)
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
      const queryParams = new URLSearchParams({
        serviceType: listing.category,
        itemId: listing.id,
        itemTitle: listing.title,
        itemCategory: listing.category,
        ...(listing.images?.[0] && { itemImage: listing.images[0] })
      }),
      
      router.push(`/request-quote?${queryParams.toString()}`)
    }
  },

  const seoTitle = category.title
    ? `${category.title} | Zion Marketplace`
    : 'Category | Zion Marketplace',
  const seoDescription =
    category.description || 'Explore listings in this category.',

  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Header />
      <Suspense fallback={<ListingGridSkeleton />}> 
        <div className=&quot;min-h-screen bg-zion-blue&quot;>
          <div className=&quot;container mx-auto px-4 py-12&quot;>
          <div className=&quot;mb-4&quot;>
            <Link href=&quot;/categories&quot; className=&quot;text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center&quot;>
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
            <ListingGridSkeleton />
          ) : (
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>
              {listings.map((listing) => (
                <ProductListingCard
                  key={listing.id}
                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                  detailBasePath=&quot;/marketplace/listing&quot;
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
