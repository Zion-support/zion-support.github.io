import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const featuredListings = [;
  {;
    id: 1,title: "AI-Powered Business Intelligence",description: "Transform your data into actionable insights with our advanced AI analytics platform.",category: "AI Services",price: "$299/month",image: "https://[^;]*
    link: "/services/ai-analytics"
  };
  {;
    id: 2,title: "Quantum Computing Solutions",description: "Next-generation quantum computing services for complex optimization problems.",category: "Emerging Tech",price: "$1,999/month",;
    image: "https://[^;]*
    link: "/services/quantum-computing"
  };
  {;
    id: 3,title: "Blockchain Supply Chain Platform",description: "Transparent and secure supply chain management using blockchain technology.",category: "Blockchain",price: "$599/month",image: "https://[^;]*
    link: "/services/blockchain"
  };
  {;
    id: 4,title: "IoT Edge Computing Platform",description: "Real-time IoT data processing and analytics at the edge for instant insights.",category: "IoT",price: "$449/month",image: "https://[^;]*
    link: "/services/iot-platform"
  };
];
export function FeaturedListingsSection() {;
  const [selectedCategory, setSelectedCategory] = useState("All"),;
  const [hoveredListing, setHoveredListing] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false)
  const filteredListings = selectedCategory === "All"
    ? featuredListings;
    : featuredListings.filter(listing => listing.category === selectedCategory)
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1,transition: {;
        staggerChildren: 0.15,delayChildren: 0.1;
      };
    };
  };
  const renderStars = (rating: number) => {;
    return Array.from({ length: 5 }, (_, i) => (;
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★;
      </[^>]*>
    )),;
  };
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6 }};
        >;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">;
            Featured Services;
          </[^>]*>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">;
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {filteredListings.map((listing, index) => (;
            <motion.div ;
              key={listing.id} ;
              className="[^"]*"
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              viewport={{ once: true }};
              transition={{ duration: 0.6, delay: index * 0.1 }};
              onHoverStart={() => setHoveredListing(listing.id)};
              onHoverEnd={() => setHoveredListing(null)};
            >;
              <div className="p-6">;
                <div className="flex items-center justify-between mb-4">;
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">;
                    {listing.category};
                  </[^>]*>
                  <div className="flex items-center gap-1">;
                    {renderStars(listing.rating)};
                    <span className="text-sm text-gray-500">({listing.reviews})</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">;
                  {listing.image ? (;
                    <[^>]*/>
                  ) : (;
                    <span className="text-white text-2xl">🚀</[^>]*>
                  )};
                </[^>]*>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">;
                  {listing.title};
                </[^>]*>

                <p className="text-gray-600 mb-4 leading-relaxed">;
                  {listing.description};
                </[^>]*>

                <div className="mb-4">;
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</[^>]*>
                  <ul className="space-y-1">;
                    {listing.features.map((feature, idx) => (;
                      <li key={idx} className="flex items-center text-sm text-gray-600">;
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></[^>]*>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                <div className="flex items-center justify-between mb-4">;
                  <span className="text-2xl font-bold text-gray-900">{listing.price}</[^>]*>
                  <Link;
                    to={listing.link};
                    className="[^"]*"
                  >;
                    Learn More →;
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              <div className="px-6 pb-6">;
                <Link;
                  to={listing.link};
                  className="[^"]*"
                >;
                  Get Started;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.4 }};
        >;
          <Link ;
            to="/services"
            className="[^"]*"
          >;
            View All Services;
            <span className="text-xl">→</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};