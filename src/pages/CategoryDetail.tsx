<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useRouter } from 'next/router'
import Link from 'next/link'
import {toast} from "@/hooks/use-toast"
import {NextSeo} from '@/components/NextSeo'
import {Header} from "@/components/Header"
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton'
import {logErrorToProduction} from '@/utils/productionLogger'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { useRouter } from 'next/router'
import Link from 'next/link'
import {toast} from "@/hooks/use-toast"
import {NextSeo} from '@/components/NextSeo'
import {Header} from "@/components/Header"
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton'
import {logErrorToProduction} from '@/utils/productionLogger'
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const AUTO_SERVICE_TITLES = [
  "AI-Powered Customer Support"
  "Cloud Infrastructure Management"
  "Predictive Analytics Consulting"
  "Cybersecurity Automation Suite"
  "Robotic Process Automation"
  "Machine Learning Model Tuning"
  "IoT Device Integration Service"
  "Blockchain Data Solutions"
<<<<<<< HEAD
]
function generateInnovationListing(index: number): ProductListing {
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] |'AI Service'
  const price = Math.floor(Math.random() * 9500) + 500, // $500 - $10,000
  const rating = Math.floor(Math.random() * 2) + 4, // 4-5 stars
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
]
function generateInnovationListing(index: number): ProductListing {
<<<<<<< HEAD
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] |'AI Service'
  const price = Math.floor(Math.random() * 9500) + 500, // $500 - $10,000
  const rating = Math.floor(Math.random() * 2) + 4, // 4-5 stars
  const params = router.query as { slug?: string }
  const slug = slugProp ?? params.slug
      icon: <Briefcase className="w-6 h-6" />
    }
    'talents': {
      title: "Talents"
      description: "Connect with AI experts, developers, and tech specialists"
      icon: <Brain className="w-6 h-6" />
    }
    'equipment': {
      title: "Equipment"
      description: "Rent or buy specialized hardware, servers, and devices"
      icon: <Code className="w-6 h-6" />
    }
=======
<<<<<<< HEAD
=======
],

function generateInnovationListing(index: number): ProductListing {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const title = AUTO_SERVICE_TITLES[index % AUTO_SERVICE_TITLES.length] || 'AI Service',
  const price = Math.floor(Math.random() * 9500) + 500, // $500 - $10,000
  const rating = Math.floor(Math.random() * 2) + 4, // 4-5 stars
  const reviewCount = Math.floor(Math.random() * 50) + 10,

  return {
    id: `innovation-auto-${index}`,
    title,
    description: `Professional ${title} package with expert support and global delivery. Ideal for businesses seeking modern IT and AI solutions at competitive market rates.`,
    category: "Innovation",
    price,
    currency: "$",
    tags: ["innovation", "ai", "service"],
    author: {
      name: "AutoGen Solutions",
      id: "autogen"
    },
    images: ["https://source.unsplash.com/random/800x500?technology"],
    createdAt: new Date().toISOString(),
    rating,
    reviewCount,
    location: "Global",
    availability: "Immediate",
    aiScore: Math.floor(Math.random() * 20) + 80
import { GradientHeading } from "@/components/GradientHeading",;
import { ProductListingCard } from "@/components/ProductListingCard",;
import { useState, useEffect, useRef, Suspense } from "react",;
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from 'lucide-react';
import { MARKETPLACE_LISTINGS } from "@/data/listingData",;
import { ProductListing } from "@/types/listings",;
import { useRouter } from 'next/router',;
import Link from 'next/link',;
import { toast } from "@/hooks/use-toast",;
import { NextSeo } from '@/components/NextSeo',;
import { Header } from "@/components/Header",;
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton',;
import {logErrorToProduction} from '@/utils/productionLogger',;
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

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const params = router.query as { slug?: string }
  const slug = slug_prop ?? params.slug;
      icon: <Briefcase className="w - 6 h - 6" />;
    }
    'talents': {
<<<<<<< HEAD
      title: "Talents"
      description: "Connect with AI experts, developers, and tech specialists"
      icon: <Brain className="w-6 h-6" />
    }
    'equipment': {
      title: "Equipment"
      description: "Rent or buy specialized hardware, servers, and devices"
      icon: <Code className="w-6 h-6" />
    }
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    'innovation': {
      title: "Innovation"
      description: "Discover cutting-edge solutions and tech breakthroughs"
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD
    }
=======


    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    'ai-models-apis': {
      title: "AI Models & APIs"
      description: "Access cutting-edge AI models with easy integration"
      icon: <Brain className="w-6 h-6" />
<<<<<<< HEAD
    }
=======


    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    'content-creation': {
      title: "Content Creation"
      description: "Generate high-quality content for your projects"
      icon: <PenLine className="w-6 h-6" />
<<<<<<< HEAD
    }
=======


    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    'data-analysis': {
      title: "Data Analysis"
      description: "Extract insights from complex datasets"
      icon: <BarChart className="w-6 h-6" />
<<<<<<< HEAD
    }
=======


    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    'computer-vision': {
      title: "Computer Vision"
      description: "Image and video processing solutions"
      icon: <Eye className="w-6 h-6" />
<<<<<<< HEAD
    }
=======


    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    'virtual-assistants': {
      title: "Virtual Assistants"
      description: "Intelligent automation for your workflow"
      icon: <Bot className="w-6 h-6" />
<<<<<<< HEAD
    }
=======


    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    'voice-speech': {
      title: "Voice & Speech"
      description: "Speech recognition and synthesis tools"
      icon: <Mic className="w-6 h-6" />
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
    }
<<<<<<< HEAD
=======
    },

=======
    'developer-tools': {
      title: "Developer Tools",
      description: "AI-powered coding assistance and automation",;
      icon: <Code className="w-6 h-6" />;
    };          icon: <Bot className="w-6 h-6" />},
=======
    },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    'developer-tools': {
      title: "Developer Tools"
      description: "AI-powered coding assistance and automation"
      icon: <Code className="w-6 h-6" />
<<<<<<< HEAD
    };          icon: <Bot className="w-6 h-6" />}
        setCategory(currentCategory)
        innovationCounterRef.current = 0
    : 'Category | Zion Marketplace'
  const seoDescription =
    category.description |'Explore listings in this category.'

=======
<<<<<<< HEAD
<<<<<<< HEAD
    };          icon: <Bot className="w-6 h-6" />}
        setCategory(currentCategory)
        innovationCounterRef.current = 0
    : 'Category | Zion Marketplace'
  const seoDescription =
    category.description |'Explore listings in this category.'
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    },
    'business-solutions': {
      title: "Business Solutions",
      description: "Enterprise AI integrations and services",
      icon: <Briefcase className="w-6 h-6" />
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
          icon: <Bot className="w-6 h-6" />},

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
        title: "Quote Requested",
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

        setCategory(currentCategory)
        innovationCounterRef.current = 0
    : 'Category | Zion Marketplace'
  const seoDescription = null;
    category.description || 'Explore listings in this category.'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Header />
      <Suspense fallback={<ListingGridSkeleton />}>
        <div className="min-h-screen bg-zion-blue">
          <div className="container mx-auto px-4 py-12">
          <div className="mb-4">
            <Link href="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
               Back to Categories
            </Link>
          </div>
<<<<<<< HEAD
=======


          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}
            </p>
          </div>
          {isLoading ? (
            <ListingGridSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing,) => (
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
               Back to Categories;
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
<<<<<<< HEAD
              ))}
            </div>;
          )}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              ))}
            </div>;
          )}
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          </div>
        </div>
      </Suspense>
    </>
  )
<<<<<<< HEAD
}

=======
}
<<<<<<< HEAD
=======
          </div>;
        </div>;
      </Suspense>;
    </>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
;

=======

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
