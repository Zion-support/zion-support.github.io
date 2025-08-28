import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp
} from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  budget: string;
  rating: number;
  reviews: number;
  skills: string[];
  client: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  posted: string;
  proposals: number;
  featured: boolean;
}

const featuredListings: Listing[] = [
  {
    id: '1',
    title: 'AI-Powered E-commerce Platform Development',
    description: 'Build a modern e-commerce platform with AI-driven product recommendations, personalized shopping experiences, and advanced analytics.',
    location: 'Remote',
    duration: '3-6 months',
    budget: '$15,000 - $25,000',
    rating: 4.9,
    reviews: 127,
    skills: ['React', 'Node.js', 'AI/ML', 'AWS', 'MongoDB'],
    client: {
      name: 'TechCorp Inc.',
      avatar: '/images/client-1.jpg',
      verified: true
    },
    posted: '2 days ago',
    proposals: 23,
    featured: true
  },
  {
    id: '2',
    title: 'Cybersecurity Infrastructure Audit & Implementation',
    description: 'Comprehensive security assessment and implementation of enterprise-grade cybersecurity solutions including threat detection and compliance.',
    location: 'Hybrid',
    duration: '2-4 months',
    budget: '$20,000 - $35,000',
    rating: 4.8,
    reviews: 89,
    skills: ['Cybersecurity', 'Compliance', 'Network Security', 'Penetration Testing'],
    client: {
      name: 'SecureBank Ltd.',
      avatar: '/images/client-2.jpg',
      verified: true
    },
    posted: '1 week ago',
    proposals: 18,
    featured: true
  },
  {
    id: '3',
    title: 'Cloud Migration & DevOps Automation',
    description: 'Migrate legacy systems to cloud infrastructure with automated CI/CD pipelines, monitoring, and scalable architecture.',
    location: 'Remote',
    duration: '4-8 months',
    budget: '$25,000 - $40,000',
    rating: 4.7,
    reviews: 156,
    skills: ['AWS/Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    client: {
      name: 'CloudTech Solutions',
      avatar: '/images/client-3.jpg',
      verified: true
    },
    posted: '3 days ago',
    proposals: 31,
    featured: true
  }
];

export const FeaturedListingsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exciting opportunities from top clients. These featured projects showcase 
            the diverse range of technology challenges we help solve.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {featuredListings.map((listing) => (
            <motion.div
              key={listing.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:transform hover:scale-105">
                {/* Featured Badge */}
                {listing.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Client Info */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold mr-4">
                    {listing.client.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold flex items-center">
                      {listing.client.name}
                      {listing.client.verified && (
                        <CheckCircle className="w-4 h-4 text-cyan-400 ml-2" />
                      )}
                    </h4>
                    <p className="text-gray-400 text-sm">{listing.posted}</p>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {listing.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {listing.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-3" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-3" />
                    <span className="text-sm">{listing.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="w-4 h-4 mr-3" />
                    <span className="text-sm">{listing.budget}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3">Required Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {listing.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{listing.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({listing.reviews})</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.proposals} proposals</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/projects/${listing.id}`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  View Project
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};