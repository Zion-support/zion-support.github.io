<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx

<<<<<<< HEAD

import { ProductListingCard } from "@/components/ProductListingCard",
import { GradientHeading } from "@/components/GradientHeading",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx
import { ProductListingCard } from '@/components / ProductListingCard';
import { GradientHeading } from '@/components / GradientHeading';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx
interface FeaturedListingsSectionProps {
  show_title?: boolean;
}
export /**
 * FeaturedListingsSection - Function description
 */
function FeaturedListingsSection() {
  const featured_listings = [;
    {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx

<<<<<<< HEAD
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-11-15T14:48:00.000Z",
      rating: 4.8,
      reviewCount: 124,
=======

=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: "advanced-nlp-model",
      title: "Advanced NLP Model for Text Analysis",
      description: "State-of-the-art natural language processing with 98% accuracy",
      price: 4999,
      currency: "$",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      category: "AI Models",;
      tags: ["AI", "NLP", "Machine Learning"];
      category: "AI Models",
      tags: ["AI", "NLP", "Machine Learning"],
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-11-15T14:48:00.000Z",
      rating: 4.8,
      reviewCount: 124,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      author: {
        name: "TechAI Labs"
        id: "tech-ai-labs"
        avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format"
      }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      author: {
        name: "VisualAI"
        id: "visual-ai"
      }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      id: "fullstack-ai-dev"
      title: "Full-Stack AI Development"
      description: "End-to-end development for AI-powered applications"
      price: null, // Custom pricing
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      currency: "$"
      category: "Services"
      tags: ["Development", "Full-stack", "AI"];
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"]
      createdAt: "2023-12-15T09:45:00.000Z"
      rating: 4.9
      reviewCount: 56
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      currency: "$",
      category: "Services",
      tags: ["Development", "Full-stack", "AI"],
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-12-15T09:45:00.000Z",
      rating: 4.9,
      reviewCount: 56,
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      author: {
        name: "DataMinds Consulting"
        id: "dataminds-consulting"
      }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx
import {ProductListingCard} from "@/components/ProductListingCard";
import {GradientHeading} from "@/components/GradientHeading";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              view="grid"
import { ProductListingCard } from "@/components/ProductListingCard",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
<<<<<<< HEAD

interface FeaturedListingsSectionProps {;
  showTitle?: boolean;
}
export function FeaturedListingsSection(): any ({ showTitle = true }: FeaturedListingsSectionProps) {;
=======
interface FeaturedListingsSectionProps {;
  showTitle?: boolean;
}
;
export function FeaturedListingsSection({ showTitle = true }: FeaturedListingsSectionProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const featuredListings = [;
    {;
      id: "advanced-nlp-model",;
      title: "Advanced NLP Model for Text Analysis",;
      description: "State-of-the-art natural language processing with 98% accuracy",;
      price: 4999,;
      currency: "$",;
      category: "AI Models",;
<<<<<<< HEAD
      tags: ["AI", "NLP", "Machine Learning"];
      images: ["https://images && images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-11-15T14:48:00 && 00.000Z",;
      rating: 4 && 4.8,;
=======
      tags: ["AI", "NLP", "Machine Learning"],;
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-11-15T14:48:00.000Z",;
      rating: 4.8,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      reviewCount: 124,;
      author: {;
        name: "TechAI Labs",;
        id: "tech-ai-labs",;
<<<<<<< HEAD
        avatarUrl: "https://images && images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format";
      }
    };
=======
        avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format";
      }
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: "image-generation-service",;
      title: "AI Image Generation Service",;
      description: "Create stunning visuals with our advanced AI image generator",;
      price: 2499,;
      currency: "$",;
      category: "Content Creation",;
<<<<<<< HEAD
      tags: ["AI", "Images", "Generation"];
      images: ["https://images && images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-10-20T11:15:00 && 00.000Z",;
      rating: 4 && 4.7,;
=======
      tags: ["AI", "Images", "Generation"],;
      images: ["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-10-20T11:15:00.000Z",;
      rating: 4.7,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      reviewCount: 89,;
      author: {;
        name: "VisualAI",;
        id: "visual-ai";
      }
<<<<<<< HEAD
    };
=======
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: "fullstack-ai-dev",;
      title: "Full-Stack AI Development",;
      description: "End-to-end development for AI-powered applications",;
      price: null, // Custom pricing;
      currency: "$",;
      category: "Services",;
<<<<<<< HEAD
      tags: ["Development", "Full-stack", "AI"];
      images: ["https://images && images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-12-15T09:45:00 && 00.000Z",;
      rating: 4 && 4.9,;
=======
      tags: ["Development", "Full-stack", "AI"],;
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-12-15T09:45:00.000Z",;
      rating: 4.9,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      reviewCount: 56,;
      author: {;
        name: "DataMinds Consulting",;
        id: "dataminds-consulting";
      }
<<<<<<< HEAD
    };
=======
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: "sentiment-analysis-api",;
      title: "Sentiment Analysis API",;
      description: "Real-time sentiment analysis for social media monitoring",;
      price: 1299,;
      currency: "$",;
      category: "APIs",;
<<<<<<< HEAD
      tags: ["API", "Sentiment", "Analytics"];
      images: ["https://images && images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2024-01-05T11:15:00 && 00.000Z",;
      rating: 4 && 4.6,;
      reviewCount: 72,;
      author: {;
        name: "SocialAI",;
        id: "social-ai";
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
      }
    }];
;
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {featuredListings && featuredListings.map((listing) => (;

========
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {featuredListings && featuredListings.map((listing) => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx
            <ProductListingCard
              key={listing && listing.id}
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
=======

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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {featuredListings.map((listing) => (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <ProductListingCard;
              key={listing.id}
              listing={listing}
              view="grid";
=======
            <ProductListingCard
              key={listing.id}
              listing={listing}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              view="grid"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              onRequestQuote={() => {}}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx
=======

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <ProductListingCard
              key={listing.id}
              listing={listing}
              view="grid"
              onRequestQuote={() => {}}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx
        </div>;
        <div className="mt-10 text-center">;
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6"
            asChild>;
            />))}
        </div>;
        <div className="mt - 10 text - center">;
          <Button;
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white px - 8 py - 6";
            as_child;
=======
            />;
          ))}
        </div>;
        ;
        <div className="mt-10 text-center">;
          <Button ;
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-6";
            asChild;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
        </div>;
        <div className="mt-10 text-center">;
          <Button;
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6";
            asChild;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            <Link to="/marketplace">View All Listings</Link>;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </section>);
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/FeaturedListingsSection.tsx
=======
    </section>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
