import React from 'react';

import { ProductListingCard } from "@/components/ProductListingCard";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeaturedListingsSectionProps {
  showTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function FeaturedListingsSection({
  showTitle = true,
  className,
  style,
}: FeaturedListingsSectionProps) {
  const featuredListings = [
    {
      id: "advanced-nlp-model",
      title: "Advanced NLP Model for Text Analysis",
      description: "State-of-the-art natural language processing with 98% accuracy",
      price: 4999,
      currency: "$",
      category: "AI Models",
      tags: ["AI", "NLP", "Machine Learning"],
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-11-15T14:48:00.000Z",
      rating: 4.8,
      reviewCount: 124,
      author: {
        name: "TechAI Labs",
        id: "tech-ai-labs",
        avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format"
      }
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
      author: {
        name: "VisualAI",
        id: "visual-ai"
      }
    },
    {
      id: "fullstack-ai-dev",
      title: "Full-Stack AI Development",
      description: "End-to-end development for AI-powered applications",
      price: null, // Custom pricing
      currency: "$",
      category: "Services",
      tags: ["Development", "Full-stack", "AI"],
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-12-15T09:45:00.000Z",
      rating: 4.9,
      reviewCount: 56,
      author: {
        name: "DataMinds Consulting",
        id: "dataminds-consulting"
      }
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
      author: {
        name: "SocialAI",
        id: "social-ai"
      }
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Featured Listings
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Discover our handpicked selection of top services and solutions.
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-6"
            asChild
          >
            <Link href="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};