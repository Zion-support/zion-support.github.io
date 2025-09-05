
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductListingCard } from "@/components/ProductListingCard",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
=======
import { ProductListingCard } from &quot;@/components/ProductListingCard&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface FeaturedListingsSectionProps {
  showTitle?: boolean
}
=======

interface FeaturedListingsSectionProps {_showTitle?: boolean;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function FeaturedListingsSection(_{_showTitle = true}: FeaturedListingsSectionProps) {_const _featuredListings = [
    {
<<<<<<< HEAD
      id: &quot;advanced-nlp-model&quot;,
      title: &quot;Advanced NLP Model for Text Analysis&quot;,
      description: &quot;State-of-the-art natural language processing with 98% accuracy&quot;,
      price: 4999,
      currency: &quot;$&quot;,
      category: &quot;AI Models&quot;,
      tags: [&quot;AI&quot;, &quot;NLP&quot;, &quot;Machine Learning&quot;],
      images: [&quot;https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500&quot;],
      createdAt: &quot;2023-11-15T14:48:00.000Z&quot;,
      rating: 4.8,
      reviewCount: 124,
      author: {
        name: &quot;TechAI Labs&quot;,
        id: &quot;tech-ai-labs&quot;,
        avatarUrl: &quot;https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format&quot;
      }
    },
    {
      id: &quot;image-generation-service&quot;,
      title: &quot;AI Image Generation Service&quot;,
      description: &quot;Create stunning visuals with our advanced AI image generator&quot;,
      price: 2499,
      currency: &quot;$&quot;,
      category: &quot;Content Creation&quot;,
      tags: [&quot;AI&quot;, &quot;Images&quot;, &quot;Generation&quot;],
      images: [&quot;https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500&quot;],
      createdAt: &quot;2023-10-20T11:15:00.000Z&quot;,
      rating: 4.7,
      reviewCount: 89,
      author: {
        name: &quot;VisualAI&quot;,
        id: &quot;visual-ai&quot;
      }
    },
    {
      id: &quot;fullstack-ai-dev&quot;,
      title: &quot;Full-Stack AI Development&quot;,
      description: &quot;End-to-end development for AI-powered applications&quot;,
      price: null, // Custom pricing
      currency: &quot;$&quot;,
      category: &quot;Services&quot;,
      tags: [&quot;Development&quot;, &quot;Full-stack&quot;, &quot;AI&quot;],
      images: [&quot;https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500&quot;],
      createdAt: &quot;2023-12-15T09:45:00.000Z&quot;,
      rating: 4.9,
      reviewCount: 56,
      author: {
        name: &quot;DataMinds Consulting&quot;,
        id: &quot;dataminds-consulting&quot;
      }
    },
    {
      id: &quot;sentiment-analysis-api&quot;,
      title: &quot;Sentiment Analysis API&quot;,
      description: &quot;Real-time sentiment analysis for social media monitoring&quot;,
      price: 1299,
      currency: &quot;$&quot;,
      category: &quot;APIs&quot;,
      tags: [&quot;API&quot;, &quot;Sentiment&quot;, &quot;Analytics&quot;],
      images: [&quot;https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500&quot;],
      createdAt: &quot;2024-01-05T11:15:00.000Z&quot;,
      rating: 4.6,
      reviewCount: 72,
      author: {
        name: &quot;SocialAI&quot;,
        id: &quot;social-ai&quot;
      }
    }],

  return (
    <section id=&quot;featured&quot; className=&quot;py-12 px-4 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto&quot;>
        {showTitle && (
          <div className=&quot;text-center mb-12&quot;>
            <GradientHeading className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
=======
      id: "advanced-nlp-model", _title: "Advanced NLP Model for Text Analysis", _description: "State-of-the-art natural language processing with 98% accuracy", _price: 4999, _currency: "$", _category: "AI Models", _tags: ["AI", _"NLP", _"Machine Learning"], _images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"], _createdAt: "2023-11-15T14:48:00.000Z", _rating: 4.8, _reviewCount: 124, _author: {
        name: "TechAI Labs", _id: "tech-ai-labs", _avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format"}
    },
    {_id: "image-generation-service", _title: "AI Image Generation Service", _description: "Create stunning visuals with our advanced AI image generator", _price: 2499, _currency: "$", _category: "Content Creation", _tags: ["AI", _"Images", _"Generation"], _images: ["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"], _createdAt: "2023-10-20T11:15:00.000Z", _rating: 4.7, _reviewCount: 89, _author: {
        name: "VisualAI", _id: "visual-ai"}
    },
    {_id: "fullstack-ai-dev", _title: "Full-Stack AI Development", _description: "End-to-end development for AI-powered applications", _price: null, _// Custom pricing
      currency: "$", _category: "Services", _tags: ["Development", _"Full-stack", _"AI"], _images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"], _createdAt: "2023-12-15T09:45:00.000Z", _rating: 4.9, _reviewCount: 56, _author: {
        name: "DataMinds Consulting", _id: "dataminds-consulting"}
    },
    {_id: "sentiment-analysis-api", _title: "Sentiment Analysis API", _description: "Real-time sentiment analysis for social media monitoring", _price: 1299, _currency: "$", _category: "APIs", _tags: ["API", _"Sentiment", _"Analytics"], _images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"], _createdAt: "2024-01-05T11:15:00.000Z", _rating: 4.6, _reviewCount: 72, _author: {
        name: "SocialAI", _id: "social-ai"}
    }];

  return (
    <section id="featured" className="py-12 px-4 bg-zion-blue-dark">
      <div className="container mx-auto">
        {_showTitle && (
          <div className="text-center mb-12">
            <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Featured Listings
            </GradientHeading>
            <p className=&quot;text-zion-slate-light max-w-3xl mx-auto&quot;>
              Discover our handpicked selection of top AI products and services
            </p>
          </div>
        )}

<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {featuredListings.map((listing) => (
            <ProductListingCard
              key={listing.id}
              listing={listing}
              view=&quot;grid&quot;
              onRequestQuote={() => {}}
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {_featuredListings.map(_(listing) => (_<ProductListingCard
              key={listing.id}
              listing={_listing}
              view="grid"
              onRequestQuote={_() => {}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          ))}
        </div>
        
        <div className=&quot;mt-10 text-center&quot;>
          <Button 
<<<<<<< HEAD
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6"
=======
            className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-6&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            asChild
          >
            <Link to=&quot;/marketplace&quot;>View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
