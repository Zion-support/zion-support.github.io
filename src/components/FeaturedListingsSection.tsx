import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, Zap, TrendingUp, Award, Clock } from 'lucide-react';

interface FeaturedListing {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'service' | 'talent' | 'product';
  rating: number;
  price?: string;
  location?: string;
  skills?: string[];
  badge?: string;
  image?: string;
}

const featuredListings: FeaturedListing[] = [
  {
    id: '1',
    title: 'AI-Powered Business Intelligence Platform',
    description: 'Comprehensive business intelligence solution with advanced analytics and predictive modeling capabilities.',
    category: 'AI Services',
    type: 'service',
    rating: 4.9,
    price: '$2,500/month',
    badge: 'Featured',
    skills: ['Machine Learning', 'Data Analytics', 'Business Intelligence']
  },
  {
    id: '2',
    title: 'Senior Full-Stack Developer',
    description: 'Experienced developer specializing in React, Node.js, and cloud architecture with 8+ years of experience.',
    category: 'Talent',
    type: 'talent',
    rating: 4.8,
    location: 'Remote',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript']
  },
  {
    id: '3',
    title: 'Cybersecurity Assessment Package',
    description: 'Comprehensive security audit including penetration testing, vulnerability assessment, and compliance review.',
    category: 'Security',
    type: 'service',
    rating: 4.9,
    price: '$5,000',
    badge: 'Popular',
    skills: ['Penetration Testing', 'Compliance', 'Risk Assessment']
  },
  {
    id: '4',
    title: 'Quantum Computing Research Consultant',
    description: 'PhD-level consultant specializing in quantum algorithms and quantum machine learning applications.',
    category: 'Consulting',
    type: 'talent',
    rating: 5.0,
    location: 'San Francisco',
    skills: ['Quantum Computing', 'Machine Learning', 'Research']
  },
  {
    id: '5',
    title: 'IoT Edge Computing Solution',
    description: 'End-to-end IoT platform with edge computing capabilities for industrial automation and smart cities.',
    category: 'IoT',
    type: 'service',
    rating: 4.7,
    price: '$3,200/month',
    skills: ['IoT', 'Edge Computing', 'Industrial Automation']
  },
  {
    id: '6',
    title: 'Blockchain Development Team',
    description: 'Expert team specializing in DeFi protocols, smart contracts, and enterprise blockchain solutions.',
    category: 'Blockchain',
    type: 'service',
    rating: 4.8,
    price: '$8,000/month',
    badge: 'New',
    skills: ['Smart Contracts', 'DeFi', 'Enterprise Blockchain']
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'service':
      return <Zap className="h-5 w-5 text-blue-500" />;
    case 'talent':
      return <Users className="h-5 w-5 text-green-500" />;
    case 'product':
      return <TrendingUp className="h-5 w-5 text-purple-500" />;
    default:
      return <Star className="h-5 w-5 text-yellow-500" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'service':
      return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    case 'talent':
      return 'bg-green-500/10 text-green-600 border-green-500/20';
    case 'product':
      return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
    default:
      return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
  }
};

export const FeaturedListingsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Marketplace Listings
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discover top-rated services, exceptional talent, and innovative solutions from our curated marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredListings.map((listing) => (
            <Card key={listing.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(listing.type)}
                    <Badge variant="outline" className={getTypeColor(listing.type)}>
                      {listing.type}
                    </Badge>
                  </div>
                  {listing.badge && (
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {listing.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white">{listing.title}</CardTitle>
                <CardDescription className="text-slate-300">
                  {listing.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Category</span>
                    <span className="text-white text-sm font-medium">{listing.category}</span>
                  </div>
                  
                  {listing.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Price</span>
                      <span className="text-cyan-400 text-sm font-bold">{listing.price}</span>
                    </div>
                  )}
                  
                  {listing.location && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Location</span>
                      <span className="text-white text-sm">{listing.location}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-white text-sm font-medium">{listing.rating}</span>
                    </div>
                  </div>
                  
                  {listing.skills && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {listing.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-white/5 text-slate-300 border-white/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>

              <div className="px-6 pb-6">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white border-0">
                  View Details
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/marketplace">
            <Button variant="outline" size="lg" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50">
              Explore All Listings
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListingsSection;