import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Star,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  BarChart3,
  Globe,
  Shield,
  Cloud,
  Code,
  Database,
  Cpu,
  Sparkles,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  Clock,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Innovation Showcase 2026 | Zion Tech Group - Cutting-Edge AI Solutions',
  description: 'Explore our revolutionary AI and machine learning solutions. From automation to predictive analytics, discover how AI can transform your business operations and drive unprecedented growth.',
  keywords: [
    'AI solutions',
    'machine learning',
    'artificial intelligence',
    'business automation',
    'predictive analytics',
    'AI consulting',
    'intelligent automation',
    'AI transformation',
    'machine learning platform',
    'AI services'
  ],
  openGraph: {
    title: 'AI Innovation Showcase 2026 | Zion Tech Group',
    description: 'Revolutionary AI and machine learning solutions that transform businesses worldwide.',
    type: 'website',
    url: 'https://ziontechgroup.com/ai-innovation-showcase-2026',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Innovation Showcase 2026'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Innovation Showcase 2026 | Zion Tech Group',
    description: 'Revolutionary AI and machine learning solutions that transform businesses worldwide.',
    images: ['/api/placeholder/1200/630']
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-innovation-showcase-2026'
  }
};

const AIInnovationShowcase2026 = () => {
  const aiServices = [
    {
      id: 1,
      title: "AI-Powered Business Process Automation Suite",
      description: "Revolutionary automation platform that reduces operational costs by 40-60% and increases productivity by 300% with guaranteed ROI within 3 months.",
      price: "$299/month",
      marketPrice: "$500-800/month",
      features: [
        "Intelligent workflow automation",
        "Natural language processing",
        "Predictive analytics",
        "Real-time optimization",
        "Multi-language support",
        "Custom AI model training"
      ],
      benefits: [
        "40-60% cost reduction",
        "300% productivity increase",
        "3-month ROI guarantee",
        "24/7 automated operations"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.9,
      reviews: 1247,
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      icon: Brain,
      category: "Automation"
    },
    {
      id: 2,
      title: "Enterprise AI Content Generation Platform",
      description: "Advanced AI content creation platform that saves 80% on content creation time and improves SEO rankings by 200% with consistent brand messaging.",
      price: "$199/month",
      marketPrice: "$300-600/month",
      features: [
        "Multi-language content generation",
        "SEO optimization",
        "Brand voice customization",
        "Plagiarism-free content",
        "Content scheduling",
        "Analytics and insights"
      ],
      benefits: [
        "80% time savings",
        "200% SEO improvement",
        "Consistent brand voice",
        "Scalable content production"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.8,
      reviews: 892,
      badge: "Content Leader",
      badgeColor: "bg-gradient-to-r from-blue-400 to-cyan-500",
      icon: Code,
      category: "Content"
    },
    {
      id: 3,
      title: "AI Customer Behavior Analytics & Insights Platform",
      description: "Advanced analytics platform that increases customer retention by 35% and boosts customer lifetime value by 200% with AI-powered insights.",
      price: "$449/month",
      marketPrice: "$600-1200/month",
      features: [
        "Behavioral pattern analysis",
        "Predictive customer modeling",
        "Real-time insights",
        "Personalization engine",
        "Churn prediction",
        "Revenue optimization"
      ],
      benefits: [
        "35% retention increase",
        "200% lifetime value boost",
        "50% churn reduction",
        "Data-driven decisions"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.7,
      reviews: 1156,
      badge: "Analytics Pro",
      badgeColor: "bg-gradient-to-r from-green-400 to-emerald-500",
      icon: BarChart3,
      category: "Analytics"
    },
    {
      id: 4,
      title: "AI-Powered Legal Contract Analysis & Risk Assessment",
      description: "Intelligent contract analysis platform that reduces contract review time by 80% and identifies risks with 95% accuracy using advanced NLP.",
      price: "$1,100/month",
      marketPrice: "$1100-3800/month",
      features: [
        "Contract risk analysis",
        "Clause identification",
        "Compliance checking",
        "Automated summaries",
        "Risk scoring",
        "Legal insights"
      ],
      benefits: [
        "80% time reduction",
        "95% accuracy rate",
        "Risk identification",
        "Compliance assurance"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.9,
      reviews: 743,
      badge: "Legal Tech",
      badgeColor: "bg-gradient-to-r from-purple-400 to-pink-500",
      icon: Shield,
      category: "Legal"
    },
    {
      id: 5,
      title: "AI-Powered Educational Personalization & Learning Analytics",
      description: "Personalized learning platform that improves student performance by 35% and increases engagement by 50% through adaptive AI algorithms.",
      price: "$750/month",
      marketPrice: "$750-2800/month",
      features: [
        "Personalized learning paths",
        "Adaptive content delivery",
        "Progress tracking",
        "Performance analytics",
        "Learning recommendations",
        "Engagement optimization"
      ],
      benefits: [
        "35% performance improvement",
        "50% engagement increase",
        "Personalized learning",
        "Data-driven insights"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.8,
      reviews: 634,
      badge: "EdTech Leader",
      badgeColor: "bg-gradient-to-r from-indigo-400 to-purple-500",
      icon: Lightbulb,
      category: "Education"
    },
    {
      id: 6,
      title: "AI-Powered Marketing Automation & Customer Journey Orchestration",
      description: "Advanced marketing automation that increases conversion rates by 50% and reduces marketing costs by 40% through intelligent customer journey mapping.",
      price: "$850/month",
      marketPrice: "$850-3200/month",
      features: [
        "Customer journey mapping",
        "Multi-channel automation",
        "Personalization engine",
        "Campaign optimization",
        "Lead scoring",
        "ROI tracking"
      ],
      benefits: [
        "50% conversion increase",
        "40% cost reduction",
        "Automated campaigns",
        "Personalized experiences"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.7,
      reviews: 967,
      badge: "Marketing Pro",
      badgeColor: "bg-gradient-to-r from-pink-400 to-rose-500",
      icon: Target,
      category: "Marketing"
    }
  ];

  const aiStats = [
    { label: "AI Models Deployed", value: "10,000+", icon: Brain },
    { label: "Businesses Transformed", value: "5,000+", icon: Rocket },
    { label: "Cost Savings Generated", value: "$1.2B+", icon: TrendingUp },
    { label: "Accuracy Rate", value: "98.5%", icon: Award }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Zion's AI automation suite transformed our operations completely. We achieved 45% cost reduction and 280% productivity increase within just 2 months. The ROI was immediate.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
      company: "TechCorp"
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "The AI marketing automation platform revolutionized our campaigns. We saw 55% increase in conversions and 45% reduction in marketing costs. Game-changer!",
      rating: 5,
      avatar: "/api/placeholder/60/60",
      company: "GrowthCo"
    },
    {
      name: "Dr. Emily Watson",
      role: "Principal, Innovation Academy",
      content: "Our students' performance improved by 40% after implementing the AI personalization platform. Engagement levels are at an all-time high.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
      company: "Innovation Academy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <Brain className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">AI Innovation Showcase 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Revolutionary AI
              </span>
              <br />
              <span className="text-slate-800">Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Discover our cutting-edge AI and machine learning solutions that are transforming businesses worldwide. 
              From intelligent automation to predictive analytics, we deliver AI innovations that drive real results.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {aiStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200"
                >
                  <stat.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-800">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Explore AI Solutions
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our AI Solutions Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI services designed to transform every aspect of your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 ${service.badgeColor} text-white text-xs font-bold rounded-full`}>
                  {service.badge}
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="px-3 py-1 bg-blue-100 border border-blue-200 rounded-full">
                      <span className="text-sm font-medium text-blue-800">{service.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-slate-600">{service.rating}</span>
                      <span className="text-sm text-slate-400">({service.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-green-600 flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-slate-800">{service.price}</div>
                      <div className="text-sm text-slate-500">Market: {service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">Save up to 70%</div>
                      <div className="text-xs text-slate-400">vs market rate</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                      Learn More
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our AI Clients Say</h2>
            <p className="text-xl text-slate-600">Real results from businesses using our AI solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our revolutionary AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Start AI Transformation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIInnovationShowcase2026;