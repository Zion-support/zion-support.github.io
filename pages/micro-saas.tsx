import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  Brain, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin
} from 'lucide-react';

const microSaaSServices = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time business intelligence with predictive analytics and automated reporting for data-driven decisions.",
    icon: BarChart3,
    category: "Analytics & BI",
    price: "$299/month",
    features: [
      "Real-time data visualization",
      "Predictive analytics engine",
      "Custom report generation",
      "API integrations",
      "Mobile-responsive design",
      "White-label options"
    ],
    benefits: [
      "Increase decision speed by 40%",
      "Reduce manual reporting by 80%",
      "Improve data accuracy by 95%"
    ],
    marketPrice: "$400-600/month",
    targetUsers: "SMBs, Enterprises, Agencies",
    setupTime: "1-2 weeks"
  },
  {
    id: 2,
    title: "Smart Document Processing",
    description: "Automated document extraction, classification, and data entry using advanced AI and OCR technology.",
    icon: FileText,
    category: "Productivity",
    price: "$199/month",
    features: [
      "OCR technology with 99% accuracy",
      "Smart document classification",
      "Automated data extraction",
      "Workflow automation",
      "Multi-format support (PDF, images, scans)",
      "Integration with 50+ apps"
    ],
    benefits: [
      "Reduce data entry time by 90%",
      "Eliminate manual errors",
      "Process 1000+ documents/hour"
    ],
    marketPrice: "$300-500/month",
    targetUsers: "Legal firms, Healthcare, Finance",
    setupTime: "3-5 days"
  },
  {
    id: 3,
    title: "Customer Experience Platform",
    description: "Omnichannel customer engagement with AI chatbots, sentiment analysis, and automated support workflows.",
    icon: MessageSquare,
    category: "Customer Service",
    price: "$399/month",
    features: [
      "AI-powered chatbots",
      "Sentiment analysis",
      "Multi-channel support (email, chat, social)",
      "Automated ticket routing",
      "Customer journey mapping",
      "Real-time analytics dashboard"
    ],
    benefits: [
      "Increase customer satisfaction by 35%",
      "Reduce response time by 70%",
      "Handle 80% of queries automatically"
    ],
    marketPrice: "$500-800/month",
    targetUsers: "E-commerce, SaaS, Service businesses",
    setupTime: "1-2 weeks"
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "Smart inventory tracking with demand forecasting, automated reordering, and multi-location support.",
    icon: Package,
    category: "Operations",
    price: "$249/month",
    features: [
      "Real-time inventory tracking",
      "AI demand forecasting",
      "Automated reorder points",
      "Multi-location management",
      "Barcode scanning",
      "Supplier integration"
    ],
    benefits: [
      "Reduce stockouts by 60%",
      "Lower inventory costs by 25%",
      "Improve order accuracy by 95%"
    ],
    marketPrice: "$350-600/month",
    targetUsers: "Retailers, Manufacturers, Distributors",
    setupTime: "1-2 weeks"
  },
  {
    id: 5,
    title: "Social Media Management Suite",
    description: "AI-powered social media scheduling, content creation, and performance analytics across all platforms.",
    icon: Globe,
    category: "Marketing",
    price: "$179/month",
    features: [
      "Content scheduling across platforms",
      "AI content suggestions",
      "Performance analytics",
      "Hashtag optimization",
      "Competitor analysis",
      "Team collaboration tools"
    ],
    benefits: [
      "Increase engagement by 45%",
      "Save 10+ hours/week",
      "Improve content performance by 30%"
    ],
    marketPrice: "$250-400/month",
    targetUsers: "Marketing agencies, SMBs, Influencers",
    setupTime: "2-3 days"
  },
  {
    id: 6,
    title: "Project Management Suite",
    description: "Advanced project tracking with AI-powered resource allocation, timeline optimization, and team collaboration.",
    icon: Calendar,
    category: "Project Management",
    price: "$329/month",
    features: [
      "Task management & tracking",
      "AI resource allocation",
      "Timeline optimization",
      "Team collaboration tools",
      "Progress reporting",
      "Integration with 100+ tools"
    ],
    benefits: [
      "Increase project delivery by 30%",
      "Reduce project overruns by 50%",
      "Improve team productivity by 25%"
    ],
    marketPrice: "$450-700/month",
    targetUsers: "Agencies, Consultants, Enterprises",
    setupTime: "1 week"
  }
];

const categories = [
  { name: "All", count: microSaaSServices.length },
  { name: "Analytics & BI", count: microSaaSServices.filter(s => s.category === "Analytics & BI").length },
  { name: "Productivity", count: microSaaSServices.filter(s => s.category === "Productivity").length },
  { name: "Customer Service", count: microSaaSServices.filter(s => s.category === "Customer Service").length },
  { name: "Operations", count: microSaaSServices.filter(s => s.category === "Operations").length },
  { name: "Marketing", count: microSaaSServices.filter(s => s.category === "Marketing").length },
  { name: "Project Management", count: microSaaSServices.filter(s => s.category === "Project Management").length }
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = microSaaSServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Discover our comprehensive collection of innovative micro SaaS solutions designed to solve specific business challenges. From AI-powered analytics to automated workflows, we have the tools to accelerate your business growth."
      keywords="micro SaaS, SaaS solutions, business automation, AI tools, productivity software, business intelligence"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Innovative Micro SaaS Solutions
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Powerful, ready-to-use micro SaaS platforms designed to solve specific business challenges. 
                Each solution comes with real-time pricing, market analysis, and proven ROI.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid md:grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">85+</div>
                  <div className="text-gray-300">Micro SaaS Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">1,200+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-sm text-blue-600 font-medium">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Proven Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-green-600">
                            <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and Info */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                          <div className="text-sm text-gray-500">vs market: {service.marketPrice}</div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>Setup: {service.setupTime}</div>
                          <div>Target: {service.targetUsers}</div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link 
                          href="/contact" 
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Get Started
                        </Link>
                        <Link 
                          href={`/contact?service=${encodeURIComponent(service.title)}`} 
                          className="flex-1 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our micro SaaS solutions and discover how they can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}