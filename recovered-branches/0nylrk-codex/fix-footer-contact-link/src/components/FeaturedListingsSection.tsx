
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ProductListingCard } from '@/components / ProductListingCard';
import { GradientHeading } from '@/components / GradientHeading';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';

=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface FeaturedListingsSectionProps {
  show_title?: boolean;
}
export /**
 * FeaturedListingsSection - Function description
 */
function FeaturedListingsSection() {
  const featured_listings = [;
    {
<<<<<<< HEAD


<<<<<<< HEAD
import {ProductListingCard} from "@/components/ProductListingCard";
import {GradientHeading} from "@/components/GradientHeading";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import { ProductListingCard } from "@/components/ProductListingCard",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
interface FeaturedListingsSectionProps {
  showTitle?: boolean
}

export function FeaturedListingsSection({ showTitle = true }: FeaturedListingsSectionProps) {
  const featuredListings = [
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: "advanced-nlp-model"
      title: "Advanced NLP Model for Text Analysis"
      description: "State-of-the-art natural language processing with 98% accuracy"
      price: 4999
      currency: "$"
      category: "AI Models"
      tags: ["AI", "NLP", "Machine Learning"];
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"]
      createdAt: "2023-11-15T14:48:00.000Z"
      rating: 4.8
      reviewCount: 124
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: "advanced-nlp-model",
      title: "Advanced NLP Model for Text Analysis",
      description: "State-of-the-art natural language processing with 98% accuracy",
      price: 4999,
      currency: "$",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      category: "AI Models",;
      tags: ["AI", "NLP", "Machine Learning"];
      category: "AI Models",
      tags: ["AI", "NLP", "Machine Learning"],
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-11-15T14:48:00.000Z",
      rating: 4.8,
      reviewCount: 124,
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      author: {
        name: "TechAI Labs"
        id: "tech-ai-labs"
        avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format"
      }
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      id: "image-generation-service"
      title: "AI Image Generation Service"
      description: "Create stunning visuals with our advanced AI image generator"
      price: 2499
      currency: "$"
      category: "Content Creation"
      tags: ["AI", "Images", "Generation"];
      images: ["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"]
      createdAt: "2023-10-20T11:15:00.000Z"
      rating: 4.7
      reviewCount: 89
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      id: "image-generation-service",
      title: "AI Image Generation Service",
      description: "Create stunning visuals with our advanced AI image generator",
      price: 2499,
      currency: "$",
      category: "Content Creation",
      tags: ["AI", "Images", "Generation"],
      images: ["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-10-20T11:15:00.000Z",
      rating: 4.7,
      reviewCount: 89,
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      author: {
        name: "VisualAI"
        id: "visual-ai"
      }
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
    {
      id: "fullstack-ai-dev"
      title: "Full-Stack AI Development"
      description: "End-to-end development for AI-powered applications"
      price: null, // Custom pricing
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      currency: "$"
      category: "Services"
      tags: ["Development", "Full-stack", "AI"];
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"]
      createdAt: "2023-12-15T09:45:00.000Z"
      rating: 4.9
      reviewCount: 56
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      currency: "$",
      category: "Services",
      tags: ["Development", "Full-stack", "AI"],
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-12-15T09:45:00.000Z",
      rating: 4.9,
      reviewCount: 56,
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      author: {
        name: "DataMinds Consulting"
        id: "dataminds-consulting"
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {ProductListingCard} from "@/components/ProductListingCard";
import {GradientHeading} from "@/components/GradientHeading";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      id: "sentiment-analysis-api"
      title: "Sentiment Analysis API"
      description: "Real-time sentiment analysis for social media monitoring"
      price: 1299
      currency: "$"
      category: "APIs"
      tags: ["API", "Sentiment", "Analytics"];
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]
      createdAt: "2024-01-05T11:15:00.000Z"
      rating: 4.6
      reviewCount: 72
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      id: "sentiment-analysis-api",
      title: "Sentiment Analysis API",
      description: "Real-time sentiment analysis for social media monitoring",
      price: 1299,
      currency: "$",
      category: "APIs",
      tags: ["API", "Sentiment", "Analytics"],
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2024-01-05T11:15:00.000Z",
      rating: 4.6,
      reviewCount: 72,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      author: {
        name: "SocialAI"
        id: "social-ai"
      }
    }],

  return (
    <section id="featured" className="py-12 px-4 bg-zion-blue-dark">
      <div className="container mx-auto">
        {showTitle && (
          <div className="text-center mb-12">
            <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Discover our handpicked selection of top AI products and services
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <ProductListingCard
              key={listing.id}
              listing={listing}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              view="grid"
import { ProductListingCard } from "@/components/ProductListingCard",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD
<<<<<<< HEAD
interface FeaturedListingsSectionProps {;
  showTitle?: boolean;
}
;
export function FeaturedListingsSection({ showTitle = true }: FeaturedListingsSectionProps) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface FeaturedListingsSectionProps {;
  showTitle?: boolean;
}

export function FeaturedListingsSection(): any ({ showTitle = true }: FeaturedListingsSectionProps) {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const featuredListings = [;
    {;
      id: "advanced-nlp-model",;
      title: "Advanced NLP Model for Text Analysis",;
      description: "State-of-the-art natural language processing with 98% accuracy",;
      price: 4999,;
      currency: "$",;
      category: "AI Models",;
<<<<<<< HEAD
<<<<<<< HEAD
      tags: ["AI", "NLP", "Machine Learning"],;
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-11-15T14:48:00.000Z",;
      rating: 4.8,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      tags: ["AI", "NLP", "Machine Learning"];
      images: ["https://images && images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-11-15T14:48:00 && 00.000Z",;
      rating: 4 && 4.8,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      reviewCount: 124,;
      author: {;
        name: "TechAI Labs",;
        id: "tech-ai-labs",;
<<<<<<< HEAD
<<<<<<< HEAD
        avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format";
      }
    },;
=======
        avatarUrl: "https://images && images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format";
      }
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        avatarUrl: "https://images && images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format";
      }
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "image-generation-service",;
      title: "AI Image Generation Service",;
      description: "Create stunning visuals with our advanced AI image generator",;
      price: 2499,;
      currency: "$",;
      category: "Content Creation",;
<<<<<<< HEAD
<<<<<<< HEAD
      tags: ["AI", "Images", "Generation"],;
      images: ["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-10-20T11:15:00.000Z",;
      rating: 4.7,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      tags: ["AI", "Images", "Generation"];
      images: ["https://images && images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-10-20T11:15:00 && 00.000Z",;
      rating: 4 && 4.7,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      reviewCount: 89,;
      author: {;
        name: "VisualAI",;
        id: "visual-ai";
      }
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "fullstack-ai-dev",;
      title: "Full-Stack AI Development",;
      description: "End-to-end development for AI-powered applications",;
      price: null, // Custom pricing;
      currency: "$",;
      category: "Services",;
<<<<<<< HEAD
<<<<<<< HEAD
      tags: ["Development", "Full-stack", "AI"],;
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-12-15T09:45:00.000Z",;
      rating: 4.9,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      tags: ["Development", "Full-stack", "AI"];
      images: ["https://images && images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-12-15T09:45:00 && 00.000Z",;
      rating: 4 && 4.9,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      reviewCount: 56,;
      author: {;
        name: "DataMinds Consulting",;
        id: "dataminds-consulting";
      }
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "sentiment-analysis-api",;
      title: "Sentiment Analysis API",;
      description: "Real-time sentiment analysis for social media monitoring",;
      price: 1299,;
      currency: "$",;
      category: "APIs",;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {featuredListings && featuredListings.map((listing) => (;
            <ProductListingCard
              key={listing && listing.id}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      tags: ["API", "Sentiment", "Analytics"];
      images: ["https://images && images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2024-01-05T11:15:00 && 00.000Z",;
      rating: 4 && 4.6,;
      reviewCount: 72,;
      author: {;
        name: "SocialAI",;
        id: "social-ai";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      id: "advanced - nlp - model",
      title: "Advanced NLP Model for Text Analysis",
      description: "State - of - the - art natural language processing with 98% accuracy",
      price: 4999,
      currency: "$",
      category: "AI Models",
      tags: ["AI", "NLP", "Machine Learning"];
      images: ["https://images.unsplash.com / photo - 1488590528505 - 98d2b5aba04b?auto = format & fit = crop & w=800 & h=500"],
      created_at: "2023 - 11 - 15T14:48:00.000Z",
      rating: 4.8,
      review_count: 124,
      author: {
        name: "TechAI Labs",
        id: "tech - ai - labs",
        avatar_url: "https://images.unsplash.com / photo - 1531297484001 - 80022131f5a1?w = 64 & h=64 & fit = crop & auto = format";
      }
    }
    {
      id: "image - generation - service",
      title: "AI Image Generation Service",
      description: "Create stunning visuals with our advanced AI image generator",
      price: 2499,
      currency: "$",
      category: "Content Creation",
      tags: ["AI", "Images", "Generation"];
      images: ["https://images.unsplash.com / photo - 1579403124614 - 197f69d8187b?auto = format & fit = crop & w=800 & h=500"],
      created_at: "2023 - 10 - 20T11:15:00.000Z",
      rating: 4.7,
      review_count: 89,
      author: {
        name: "VisualAI",
        id: "visual - ai";
      }
    }
    {
      id: "fullstack - ai - dev",
      title: "Full - Stack AI Development",
      description: "End - to - end development for AI - powered applications",
      price: null, // Custom pricing;
      currency: "$",
      category: "Services",
      tags: ["Development", "Full - stack", "AI"];
      images: ["https://images.unsplash.com / photo - 1485827404703 - 89b55fcc595e?auto = format & fit = crop & w=800 & h=500"],
      created_at: "2023 - 12 - 15T09:45:00.000Z",
      rating: 4.9,
      review_count: 56,
      author: {
        name: "DataMinds Consulting",
        id: "dataminds - consulting";
      }
    }
    {
      id: "sentiment - analysis - api",
      title: "Sentiment Analysis API",
      description: "Real - time sentiment analysis for social media monitoring",
      price: 1299,
      currency: "$",
      category: "APIs",
      tags: ["API", "Sentiment", "Analytics"];
      images: ["https://images.unsplash.com / photo - 1551288049 - bebda4e38f71?auto = format & fit = crop & w=800 & h=500"],
      created_at: "2024 - 01 - 05T11:15:00.000Z",
      rating: 4.6,
      review_count: 72,
      author: {
        name: "SocialAI",
        id: "social - ai";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    }];
;
  return (


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {featuredListings && featuredListings.map((listing) => (;

            <ProductListingCard
              key={listing && listing.id}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section id="featured" className="py - 12 px - 4 bg - zion - blue - dark">;
      <div className="container mx - auto">;
        {show_title && (
          <div className="text - center mb - 12">;
            <GradientHeading className="text - 3xl md:text - 4xl font - bold mb - 4">;
              Featured Listings;
            </GradientHeading>;
            <p className="text - zion - slate - light max - w-3xl mx - auto">;
              Discover our handpicked selection of top AI products and services;
            </p>;
          </div>)}
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
          {featured_listings.map ((listing) => (
<<<<<<< HEAD
<<<<<<< HEAD

import { ProductListingCard } from "@/components/ProductListingCard",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
;
interface FeaturedListingsSectionProps {;
  showTitle?:boolean,;
}
;
export function FeaturedListingsSection({ showTitle = true } FeaturedListingsSectionProps) {;
  const featuredListings = [;
    {;
      id:"advanced-nlp-model",;
      title:"Advanced NLP Model for Text Analysis",;
      description:"State-of-the-art natural language processing with 98% accuracy",;
      price:4999,;
      currency:"$",;
      category:"AI Models",;
      tags:["AI", "NLP", "Machine Learning"],;
      images:["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],;
      createdAt:"2023-11-15T14:48:00.000Z",;
      rating:4.8,;
      reviewCount:124,;
      author:{;
        name:"TechAI Labs",;
        id:"tech-ai-labs",;
        avatarUrl:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format";
      }
    },;
    {;
      id:"image-generation-service",;
      title:"AI Image Generation Service",;
      description:"Create stunning visuals with our advanced AI image generator",;
      price:2499,;
      currency:"$",;
      category:"Content Creation",;
      tags:["AI", "Images", "Generation"],;
      images:["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],;
      createdAt:"2023-10-20T11:15:00.000Z",;
      rating:4.7,;
      reviewCount:89,;
      author:{;
        name:"VisualAI",;
        id:"visual-ai";
      }
    },;
    {;
      id:"fullstack-ai-dev",;
      title:"Full-Stack AI Development",;
      description:"End-to-end development for AI-powered applications",;
      price:null, // Custom pricing;
      currency:"$",;
      category:"Services",;
      tags:["Development", "Full-stack", "AI"],;
      images:["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],;
      createdAt:"2023-12-15T09:45:00.000Z",;
      rating:4.9,;
      reviewCount:56,;
      author:{;
        name:"DataMinds Consulting",;
        id:"dataminds-consulting";
      }
    },;
    {;
      id:"sentiment-analysis-api",;
      title:"Sentiment Analysis API",;
      description:"Real-time sentiment analysis for social media monitoring",;
      price:1299,;
      currency:"$",;
      category:"APIs",;
      tags:["API", "Sentiment", "Analytics"],;
      images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;
      createdAt:"2024-01-05T11:15:00.000Z",;
      rating:4.6,;
      reviewCount:72,;
      author:{;
        name:"SocialAI",;
        id:"social-ai";
      }
    }],;
;
      tags: ["API", "Sentiment", "Analytics"],;
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2024-01-05T11:15:00.000Z",;
      rating: 4.6,;
      reviewCount: 72,;
      author: {;
        name: "SocialAI";
        id: "social-ai";
      }
    }];
  return (;
    <section id="featured" className="py-12 px-4 bg-zion-blue-dark">;
      <div className="container mx-auto">;
        {showTitle && (;
          <div className="text-center mb-12">;
            <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">;
              Featured Listings;
            </GradientHeading>;
            <p className="text-zion-slate-light max-w-3xl mx-auto">;
              Discover our handpicked selection of top AI products and services;
            </p>;
          </div>;
        )}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <ProductListingCard;
              key={listing.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              listing={listing}
              view="grid";
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <ProductListingCard
              key={listing.id}
              listing={listing}

<<<<<<< HEAD
<<<<<<< HEAD
              view="grid"
              onRequestQuote={() => {}}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <ProductListingCard
              key={listing.id}
              listing={listing}
              view="grid"
              onRequestQuote={() => {}}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6"
            asChild
          >
            <Link to="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )




        </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              view="grid"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              onRequestQuote={() => {}}




=======
        </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mt-10 text-center">;
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6"
            asChild>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />))}
        </div>;
        <div className="mt - 10 text - center">;
          <Button;
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white px - 8 py - 6";
            as_child;
<<<<<<< HEAD
            />;
          ))}
        </div>;
        ;
        <div className="mt-10 text-center">;
          <Button ;
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-6";
            asChild;
}
        </div>;
        <div className="mt-10 text-center">;
          <Button;
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6";
            asChild;
          >;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link to="/marketplace">View All Listings</Link>;
          </Button>;
        </div>;
      </div>;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </section>);
}
    </section>);
}
    </section>;
  );}
 interface FeaturedListingsSectionProps {
  showTitle?: boolean 
}showTitle = true 
}: FeaturedListingsSectionProps) {
  const featuredListings = [ {
  Featured Listings </GradientHeading> <p className="text-zion-slate-light max-w-3xl mx-auto" > Discover our handpicked selection of top AI products and services </p> </div>) 
}/>) ) 
}</div> <div className="mt-10 text-center" > <Button asChild > <Link to="/marketplace" >View All Listings</Link> </Button> </div> </div> </section>) 
}
    </section>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </section>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
