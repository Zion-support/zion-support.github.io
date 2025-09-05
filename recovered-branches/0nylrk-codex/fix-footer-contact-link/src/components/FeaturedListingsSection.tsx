

interface FeaturedListingsSectionProps {_showTitle?: boolean;}

export function FeaturedListingsSection(_{_showTitle = true}: FeaturedListingsSectionProps) {_const _featuredListings = [
    {
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
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Discover our handpicked selection of top AI products and services
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {_featuredListings.map(_(listing) => (_<ProductListingCard
              key={listing.id}
              listing={_listing}
              view="grid"
              onRequestQuote={_() => {}}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-6"
            asChild
          >
            <Link to="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
