
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {ProductListingCard} from "@/components/ProductListingCard";
import {GradientHeading} from "@/components/GradientHeading";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ProductListingCard } from "@/components/ProductListingCard",
import { GradientHeading } from "@/components/GradientHeading",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
=======
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface FeaturedListingsSectionProps {
<<<<<<< HEAD
  showTitle?: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
  showTitle?: boolean;
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

export function FeaturedListingsSection({ showTitle = true }: FeaturedListingsSectionProps) {
  const featuredListings = [
    {
<<<<<<< HEAD
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
=======
      id: "advanced-nlp-model",
      title: "Advanced NLP Model for Text Analysis",
      description: "State-of-the-art natural language processing with 98% accuracy",
      price: 4999,
      currency: "$",
<<<<<<< HEAD
      category: "AI Models",;
      tags: ["AI", "NLP", "Machine Learning"];
=======
      category: "AI Models",
      tags: ["AI", "NLP", "Machine Learning"],
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-11-15T14:48:00.000Z",
      rating: 4.8,
      reviewCount: 124,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      author: {
        name: "TechAI Labs"
        id: "tech-ai-labs"
        avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format"
      }
<<<<<<< HEAD
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
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      author: {
        name: "VisualAI"
        id: "visual-ai"
      }
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    {
      id: "fullstack-ai-dev"
      title: "Full-Stack AI Development"
      description: "End-to-end development for AI-powered applications"
      price: null, // Custom pricing
<<<<<<< HEAD
      currency: "$"
      category: "Services"
      tags: ["Development", "Full-stack", "AI"];
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"]
      createdAt: "2023-12-15T09:45:00.000Z"
      rating: 4.9
      reviewCount: 56
=======
      currency: "$",
      category: "Services",
      tags: ["Development", "Full-stack", "AI"],
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-12-15T09:45:00.000Z",
      rating: 4.9,
      reviewCount: 56,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      author: {
        name: "DataMinds Consulting"
        id: "dataminds-consulting"
      }
<<<<<<< HEAD
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
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
              view="grid"
import { ProductListingCard } from "@/components/ProductListingCard",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
interface FeaturedListingsSectionProps {;
  showTitle?: boolean;
}
;
export function FeaturedListingsSection({ showTitle = true }: FeaturedListingsSectionProps) {;
  const featuredListings = [;
    {;
      id: "advanced-nlp-model",;
      title: "Advanced NLP Model for Text Analysis",;
      description: "State-of-the-art natural language processing with 98% accuracy",;
      price: 4999,;
      currency: "$",;
      category: "AI Models",;
      tags: ["AI", "NLP", "Machine Learning"],;
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-11-15T14:48:00.000Z",;
      rating: 4.8,;
      reviewCount: 124,;
      author: {;
        name: "TechAI Labs",;
        id: "tech-ai-labs",;
        avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format";
      }
    },;
    {;
      id: "image-generation-service",;
      title: "AI Image Generation Service",;
      description: "Create stunning visuals with our advanced AI image generator",;
      price: 2499,;
      currency: "$",;
      category: "Content Creation",;
      tags: ["AI", "Images", "Generation"],;
      images: ["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-10-20T11:15:00.000Z",;
      rating: 4.7,;
      reviewCount: 89,;
      author: {;
        name: "VisualAI",;
        id: "visual-ai";
      }
    },;
    {;
      id: "fullstack-ai-dev",;
      title: "Full-Stack AI Development",;
      description: "End-to-end development for AI-powered applications",;
      price: null, // Custom pricing;
      currency: "$",;
      category: "Services",;
      tags: ["Development", "Full-stack", "AI"],;
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],;
      createdAt: "2023-12-15T09:45:00.000Z",;
      rating: 4.9,;
      reviewCount: 56,;
      author: {;
        name: "DataMinds Consulting",;
        id: "dataminds-consulting";
      }
    },;
    {;
      id: "sentiment-analysis-api",;
      title: "Sentiment Analysis API",;
      description: "Real-time sentiment analysis for social media monitoring",;
      price: 1299,;
      currency: "$",;
      category: "APIs",;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <ProductListingCard
              key={listing.id}
              listing={listing}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        </div>;
        <div className="mt-10 text-center">;
          <Button;
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6";
            asChild;
          >;
            <Link to="/marketplace">View All Listings</Link>;
          </Button>;
        </div>;
      </div>;
    </section>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
