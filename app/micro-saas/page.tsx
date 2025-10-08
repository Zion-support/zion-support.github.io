import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Settings, Lock, ArrowRight } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSAASServices = [
    {
      id: 1,
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation platform with 50+ templates, multi-language support, and SEO optimization.",
      price: "$29",
      period: "/month",
      features: [
        "50+ Content Templates",
        "Multi-language Support (25+ languages)",
        "SEO Optimization Tools",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Social Media Integration",
        "Analytics Dashboard",
        "API Access"
      ],
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      popular: true,
      category: "Content Creation"
    },
    {
      id: 2,
      name: "Smart Analytics Dashboard",
      description: "Real-time business intelligence platform with predictive analytics, custom reports, and automated insights.",
      price: "$49",
      period: "/month",
      features: [
        "Real-time Data Visualization",
        "Predictive Analytics",
        "Custom Report Builder",
        "Automated Insights",
        "Multi-source Data Integration",
        "Mobile App",
        "White-label Options",
        "24/7 Support"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-teal-600",
      popular: false,
      category: "Analytics"
    },
    {
      id: 3,
      name: "Email Marketing Automation",
      description: "Complete email marketing solution with AI-powered segmentation, A/B testing, and advanced automation workflows.",
      price: "$19",
      period: "/month",
      features: [
        "AI-Powered Segmentation",
        "A/B Testing Tools",
        "Advanced Automation",
        "Template Library (100+ templates)",
        "Deliverability Optimization",
        "Performance Analytics",
        "Integration Hub",
        "Compliance Tools"
      ],
      icon: <Mail className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      popular: false,
      category: "Marketing"
    },
    {
      id: 4,
      name: "Project Management Suite",
      description: "Comprehensive project management with AI task prioritization, team collaboration, and resource optimization.",
      price: "$39",
      period: "/month",
      features: [
        "AI Task Prioritization",
        "Team Collaboration Tools",
        "Resource Management",
        "Time Tracking",
        "Gantt Charts",
        "File Sharing",
        "Mobile Apps",
        "Integration APIs"
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
      popular: true,
      category: "Productivity"
    },
    {
      id: 5,
      name: "Customer Support AI",
      description: "Intelligent customer support platform with chatbot automation, sentiment analysis, and ticket management.",
      price: "$59",
      period: "/month",
      features: [
        "AI Chatbot Builder",
        "Sentiment Analysis",
        "Ticket Management",
        "Knowledge Base",
        "Multi-channel Support",
        "Performance Metrics",
        "Custom Integrations",
        "Training & Support"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      popular: false,
      category: "Customer Service"
    },
    {
      id: 6,
      name: "Social Media Scheduler",
      description: "AI-powered social media management with content scheduling, hashtag optimization, and performance tracking.",
      price: "$25",
      period: "/month",
      features: [
        "Multi-platform Scheduling",
        "AI Hashtag Optimization",
        "Content Calendar",
        "Performance Analytics",
        "Team Collaboration",
        "Brand Monitoring",
        "Influencer Tracking",
        "ROI Reporting"
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      popular: false,
      category: "Social Media"
    },
    {
      id: 7,
      name: "Inventory Management AI",
      description: "Smart inventory management with demand forecasting, automated reordering, and supply chain optimization.",
      price: "$79",
      period: "/month",
      features: [
        "Demand Forecasting",
        "Automated Reordering",
        "Supply Chain Optimization",
        "Multi-location Support",
        "Barcode Scanning",
        "Reporting Suite",
        "Integration APIs",
        "Mobile Access"
      ],
      icon: <Database className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      popular: true,
      category: "E-commerce"
    },
    {
      id: 8,
      name: "HR Management Platform",
      description: "Complete HR solution with AI recruitment, employee onboarding, performance tracking, and payroll integration.",
      price: "$69",
      period: "/month",
      features: [
        "AI Recruitment Tools",
        "Employee Onboarding",
        "Performance Tracking",
        "Payroll Integration",
        "Time & Attendance",
        "Benefits Management",
        "Compliance Tools",
        "Analytics Dashboard"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      popular: false,
      category: "Human Resources"
    },
    {
      id: 9,
      name: "Financial Planning AI",
      description: "Intelligent financial planning and budgeting tool with expense tracking, investment analysis, and goal setting.",
      price: "$35",
      period: "/month",
      features: [
        "Expense Tracking",
        "Investment Analysis",
        "Goal Setting",
        "Budget Planning",
        "Tax Optimization",
        "Bill Reminders",
        "Financial Reports",
        "Bank Integration"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      popular: false,
      category: "Finance"
    },
    {
      id: 10,
      name: "Website Builder AI",
      description: "AI-powered website builder with drag-and-drop interface, SEO optimization, and mobile responsiveness.",
      price: "$45",
      period: "/month",
      features: [
        "Drag-and-Drop Builder",
        "AI Design Suggestions",
        "SEO Optimization",
        "Mobile Responsive",
        "E-commerce Integration",
        "Analytics Integration",
        "Custom Domain",
        "24/7 Support"
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "from-violet-500 to-purple-600",
      popular: true,
      category: "Web Development"
    }
  ];

  const categories = ["All", "Content Creation", "Analytics", "Marketing", "Productivity", "Customer Service", "Social Media", "E-commerce", "Human Resources", "Finance", "Web Development"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-16">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS tools designed to streamline your business operations and boost productivity. 
              Choose from our comprehensive suite of AI-powered solutions.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${
                  service.popular ? 'ring-2 ring-purple-400/50' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  {service.icon}
                </div>

                <div className="mb-4">
                  <span className="text-purple-400 text-sm font-medium">{service.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">Billed monthly • Cancel anytime</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can create a bespoke micro SAAS solution tailored to your specific business needs. 
              Get a custom quote and see how we can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;