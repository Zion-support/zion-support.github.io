<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
import { motion } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
=======
import React from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802

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
    tags: ["React", "Node.js", "AI/ML", "E-commerce"]
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
    tags: ["React Native", "Security", "FinTech", "Biometrics"]
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
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  }
];

interface FeaturedListingsSectionProps {
  showTitle?: boolean;
}

export function FeaturedListingsSection({ showTitle = true }: FeaturedListingsSectionProps) {
  const featuredListings = [
    {
      id: "advanced-nlp-model",
      title: "Advanced NLP Model for Text Analysis",
      description: "State-of-the-art natural language processing with 98% accuracy and multilingual support",
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
      },
<<<<<<< HEAD
      badge: "Trending",
      badgeColor: "from-zion-purple to-zion-purple-dark"
=======
      badge: "Top Rated",
      badgeColor: "from-yellow-500 to-orange-500"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
    },
    {
      id: "image-generation-service",
      title: "AI Image Generation Service",
      description: "Create stunning visuals with our advanced AI image generator and editing tools",
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
      },
      badge: "Popular",
<<<<<<< HEAD
      badgeColor: "from-zion-cyan to-zion-blue"
=======
      badgeColor: "from-purple-500 to-pink-500"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
    },
    {
<<<<<<< HEAD
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
<<<<<<< HEAD
      badge: "Premium",
      badgeColor: "from-zion-cyan-light to-zion-cyan"
=======
      badge: "Expert",
      badgeColor: "from-blue-500 to-cyan-500"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
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
<<<<<<< HEAD
      badgeColor: "from-zion-blue to-zion-blue-dark"
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Listings", icon: TrendingUp },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Zap },
    { number: "150+", label: "Countries Served", icon: Globe }
  ];

=======
      badgeColor: "from-green-500 to-emerald-500"
    },
  ];

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
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
<<<<<<< HEAD
=======
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      category: 'Cybersecurity',
      price: '$3,499',
      image: '/images/cybersecurity-audit.jpg'
    }
  ];
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802

  return (
    <section id="featured" className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
=======

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="featured" className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
<<<<<<< HEAD
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
              Discover our handpicked selection of top AI products, services, and cutting-edge solutions 
              from verified providers worldwide
            </p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
                <stat.icon className="w-10 h-10 text-zion-cyan" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-zion-slate-light text-sm md:text-base">{stat.label}</div>
=======
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our handpicked selection of top AI products and services. 
              Curated by experts for quality and innovation.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan">500+</div>
                <div className="text-sm text-zion-slate-light">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple">98%</div>
                <div className="text-sm text-zion-slate-light">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-blue">24/7</div>
                <div className="text-sm text-zion-slate-light">Support Available</div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredListings.map((listing, index) => (
            <motion.div key={listing.id} variants={itemVariants}>
              <div className="relative group">
                {/* Badge */}
                {listing.badge && (
                  <div className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${listing.badgeColor} shadow-lg`}>
                    {listing.badge}
                  </div>
                )}
                
                {/* View count indicator */}
                <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-medium text-white bg-zion-slate-dark/80 backdrop-blur-sm flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {Math.floor(Math.random() * 1000) + 100}
                </div>
                
                <ProductListingCard
                  key={listing.id}
                  listing={listing}
                  onRequestQuote={(listingId: string) => {
                    // Handle quote request - could navigate to quote form or open modal
                    console.log('Requesting quote for:', listingId);
                  }}
                />
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
            </motion.div>
          ))}
        </motion.div>

<<<<<<< HEAD
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
<<<<<<< HEAD
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
=======
          {featuredListings.map((listing) => (
            <motion.div key={listing.id} variants={itemVariants}>
              <div className="group bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-cyan/20">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={listing.image} 
                    alt={listing.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue transition-colors duration-300">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-xs font-medium">
                      {listing.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {listing.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {listing.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 rounded-md bg-zion-slate/30 text-zion-slate-light text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{listing.rating}</span>
                      <span>({listing.reviews})</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{listing.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{listing.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-cyan">
                      {listing.price}
                    </span>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{listing.rating}</span>
                  <span className="text-zion-slate-light text-sm">({listing.reviews})</span>
                </div>
                <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{listing.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{listing.likes}</span>
                  </div>
                </div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-zion-blue/20 text-zion-cyan text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
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
=======
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
        </motion.div>
      </div>
    </section>
  );
}
=======
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Star, MapPin, Clock } from 'lucide-react';

export function FeaturedListingsSection() {
  return (
    <section className="py-16 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Listings
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Discover top-rated tech professionals and services featured by our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-zion-blue border-zion-blue-lighter">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Senior Full-Stack Developer</CardTitle>
                <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Remote</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Full-time</span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-zion-slate-light ml-2">5.0</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                View Profile
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-zion-blue border-zion-blue-lighter">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">UI/UX Design Agency</CardTitle>
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">New York, NY</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Project-based</span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-zion-slate-light ml-2">4.9</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                View Agency
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-zion-blue border-zion-blue-lighter">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">DevOps Engineer</CardTitle>
                <Badge variant="secondary" className="bg-zion-cyan-light/20 text-zion-cyan-light">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light mb-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Contract</span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-zion-slate-light ml-2">4.8</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                View Profile
              </Button>
            </CardContent>
          </Card>
        </div>
=======
        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-zion-cyan" />
              <h3 className="text-xl font-bold text-white">Trending Now</h3>
            </div>
            <p className="text-zion-slate-light mb-6">
              Join thousands of tech professionals discovering amazing opportunities every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25 transform hover:scale-105 flex items-center gap-2">
                  Explore Marketplace
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </div>
    </section>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
