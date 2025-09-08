import { motion } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
      id: "fullstack-ai-dev",
      title: "Full-Stack AI Development",
      description: "End-to-end development for AI-powered applications with deployment support",
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
      },
      badge: "Premium",
      badgeColor: "from-zion-cyan-light to-zion-cyan"
    },
    {
      id: "sentiment-analysis-api",
      title: "Sentiment Analysis API",
      description: "Real-time sentiment analysis for social media monitoring and customer feedback",
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
      },
      badge: "New",
      badgeColor: "from-zion-blue to-zion-blue-dark"
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Listings", icon: TrendingUp },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Zap },
    { number: "150+", label: "Countries Served", icon: Globe }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
          {featuredListings.map((listing, index) => (
            <motion.div key={listing.id} variants={itemVariants}>
              <div className="relative group">
                {/* Badge */}
                {listing.badge && (
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r ${listing.badgeColor} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {listing.badge}
                  </div>
                )}
                
                <ProductListingCard
                  listing={listing}
                  view="grid"
                  onRequestQuote={() => {}}
                />
        <div className="text-center mt-12">
          <Link 
            to="/comprehensive-services"
            className="inline-block bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};
        >
          <Button 
            className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl shadow-zion-purple/25 transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/marketplace" className="flex items-center gap-3">
              Explore All Listings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <p className="text-zion-slate-light mt-4 text-sm">
            Join 10,000+ companies already using Zion
          </p>
