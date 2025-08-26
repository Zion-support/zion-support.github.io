import React, { useState } from 'react';
import { Star, Eye, Heart, ArrowRight, Clock, Users } from 'lucide-react';

const featuredListings = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with AI-driven product recommendations and personalized shopping experience",
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$15,000",
    tags: ["React", "Node.js", "AI/ML", "E-commerce"],
    duration: "3-4 months",
    team: "5 experts",
    location: "Remote",
    featured: true,
    technologies: ["React", "Node.js", "MongoDB", "AI/ML", "AWS"],
    highlights: ["AI Recommendations", "Real-time Analytics", "Mobile Responsive", "SEO Optimized"]
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    category: "Mobile Development",
    description: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions",
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$22,000",
    tags: ["React Native", "Security", "FinTech", "Biometrics"],
    duration: "4-5 months",
    team: "6 experts",
    location: "Hybrid",
    featured: true,
    technologies: ["React Native", "Node.js", "PostgreSQL", "Biometrics", "Security"],
    highlights: ["Biometric Auth", "Real-time Transactions", "Security Compliance", "Cross-platform"]
  },
  {
    id: 3,
    title: "Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    description: "Complete migration from on-premise to cloud with automated CI/CD pipelines and monitoring",
    rating: 4.7,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    price: "$18,500",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    duration: "2-3 months",
    team: "4 experts",
    location: "On-site",
    featured: true,
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
    highlights: ["Zero Downtime", "Auto-scaling", "Monitoring", "Security"]
  }
];

export function FeaturedListingsSection() {
  const [hoveredListing, setHoveredListing] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our most successful and innovative projects that showcase our expertise 
            and commitment to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredListings.map((listing, index) => (
            <div 
              key={listing.id}
              className="bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
              onMouseEnter={() => setHoveredListing(listing.id)}
              onMouseLeave={() => setHoveredListing(null)}
            >
              {/* Image placeholder */}
              <div className="h-48 bg-zion-blue-light/20 flex items-center justify-center">
                <span className="text-zion-slate-light text-lg">{listing.image}</span>
              </div>

              <div className="p-6">
                {/* Category badge */}
                <div className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full mb-3">
                  {listing.category}
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {listing.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                  {listing.description}
                </p>

                {/* Duration and team */}
                <div className="flex items-center gap-4 mb-4 text-xs text-zion-slate-light">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3"/>
                    <span>{listing.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3"/>
                    <span>{listing.team}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 rounded-md bg-zion-slate/30 text-zion-slate-light text-xs">
                      {tag}
                    </span>
                  ))}
                  {listing.tags.length > 3 && (
                    <span className="text-zion-cyan/60 text-xs">
                      +{listing.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    <span>{listing.rating}</span>
                    <span>({listing.reviews})</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4"/>
                      <span>{listing.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4"/>
                      <span>{listing.likes}</span>
                    </div>
                  </div>
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-zion-cyan">
                    {listing.price}
                  </span>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    View Details
                    <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>

                {/* Expanded details on hover */}
                {hoveredListing === listing.id && (
                  <div className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30">
                    <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Highlights:</h4>
                    <div className="space-y-2 mb-4">
                      {listing.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-zion-cyan font-semibold text-sm mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {listing.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your next project?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                View All Projects
                <ArrowRight className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}