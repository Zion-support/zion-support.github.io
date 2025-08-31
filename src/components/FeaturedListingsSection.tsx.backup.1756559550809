<<<<<<< HEAD
import React, { useState } from 'react.ts';
import { motion, AnimatePresence           } from 'framer-motion.ts';
import { Star, Eye, Heart, ArrowRight, Clock, Users, TrendingUp, Award, Filter, Search, MapPin, Calendar import { Link           } from 'react-router-dom.ts';
=======
import React, { useState } from 'react.ts';
import { motion, AnimatePresence            } from 'framer-motion.ts';
import { Star, Eye, Heart, ArrowRight, Clock, Users, TrendingUp, Award, Filter, Search, MapPin, Calendar            } from 'lucide-react.ts';
import { Link            } from 'react-router-dom.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

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
    tags["React", "Node.js", "AI/ML", "E-commerce"],
    duration: "3-4 months",
    team: "5 experts",
    location: "Remote",
    featured: true,
    technologies["React", "Node.js", "MongoDB", "AI/ML", "AWS"],
    highlights["AI Recommendations", "Real-time Analytics", "Mobile Responsive", "SEO Optimized"]
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
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$22,000",
    tags["React Native", "Security", "FinTech", "Biometrics"],
    duration: "4-5 months",
    team: "6 experts",
    location: "Hybrid",
    featured: true,
    technologies["React Native", "Node.js", "PostgreSQL", "Biometrics", "Security"],
    highlights["Biometric Auth", "Real-time Transactions", "Security Compliance", "Cross-platform"]
  },
  {
    id: 3,
    title: "Blockchain Supply Chain Platform",
    description: "Transparent and secure supply chain management using blockchain technology.",
    category: "Blockchain",
    price: "$599/month",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
    rating: 4.7,
<<<<<<< HEAD
    reviews: 156,
    views: 3241,
    likes: 189,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    price: "$18,500",
    tags["AWS", "Docker", "Kubernetes", "CI/CD"],
    duration: "2-3 months",
    team: "4 experts",
    location: "On-site",
    featured: true,
<<<<<<< HEAD
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
    highlights: ["Zero Downtime", "Auto-scaling", "Monitoring", "Security"]

];

const featuredServices = [
  {
    title: 'AI-Powered Business Intelligence',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    category: 'AI Solutions',
    rating: 4.9,
    reviews: 127,
    price: 'From $2,500',
    image: '🤖',
    link: '/services/ai',
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards']
  },
  {
    title: 'Cloud Migration & Optimization',
    description: 'Seamlessly migrate to the cloud with our proven methodology and expert guidance.',
    category: 'Cloud & DevOps',
    rating: 4.8,
    reviews: 89,
    price: 'From $5,000',
    image: '☁️',
    link: '/services/cloud',
    features: ['Zero-downtime Migration', 'Cost Optimization', 'Security Compliance']
  },
  {
    title: 'Cybersecurity Assessment & Implementation',
    description: 'Comprehensive security evaluation and implementation for enterprise-level protection.',
    category: 'Cybersecurity',
    rating: 4.9,
    reviews: 156,
    price: 'From $3,500',
    image: '🔒',
    link: '/services/cybersecurity',
    features: ['Security Audits', 'Threat Detection', 'Incident Response']

=======
    technologies["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
    highlights["Zero Downtime", "Auto-scaling", "Monitoring", "Security"]
  }
=======
    reviews: 234
  },
  {
    id: 4,
    title: "IoT Edge Computing Platform",
    description: "Real-time IoT data processing and analytics at the edge for instant insights.",;
    category: "IoT",;
    price: "$449/month",;
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",;
    rating: 4.6,;
    reviews: 178;
  };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
];

export function FeaturedListingsSection(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredListing, setHoveredListing] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredListings = selectedCategory === "All"
    ? featuredListings: anyanyanyanyanyanyanyanyanyanyfeaturedListings.filter(listing           => listing.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1


  };

  const renderStars = (rating: anyanyanyanyanyanyanyanyanyanynumber)           => {
    return Array.from({ length: anyanyanyanyanyanyanyanyanyany5 }, (_, i)           => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className = "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index)           => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.image}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to={service.link}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"

                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  to={service.link}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center block group-hover:shadow-lg"

                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.4 






}}
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
          >
            View All Services
<<<<<<< HEAD
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )};
=======;
            <span className="text-xl">→</span>;
          </Link>;
        </motion.div>;
      </div>;
    </section>;
  );
<<<<<<< HEAD
}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
