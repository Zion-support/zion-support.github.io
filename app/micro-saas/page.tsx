import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Code, 
  Database,
  Globe,
  Smartphone,
  Cloud,
  Lock,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 1,
      name: "AI Content Writer Pro",
      description: "Advanced AI-powered content generation for blogs, social media, emails, and marketing materials with 50+ templates.",
      icon: FileText,
      price: "$79",
      period: "/month",
      features: [
        "50+ Content Templates",
        "Multi-language Support",
        "SEO Optimization",
        "Brand Voice Training",
        "Plagiarism Checker",
        "Social Media Scheduler"
      ],
      category: "Content Creation",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30"
    },
    {
      id: 2,
      name: "Smart Analytics Dashboard",
      description: "Real-time business intelligence with AI-powered insights, custom reports, and automated alerts.",
      icon: BarChart,
      price: "$149",
      period: "/month",
      features: [
        "Real-time Analytics",
        "Custom Dashboards",
        "AI Insights",
        "Automated Reports",
        "Data Visualization",
        "Mobile App Access"
      ],
      category: "Analytics",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      id: 3,
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing, 24/7 availability, and seamless human handoff.",
      icon: Users,
      price: "$199",
      period: "/month",
      features: [
        "24/7 Availability",
        "Multi-language Support",
        "Human Handoff",
        "Knowledge Base Integration",
        "Sentiment Analysis",
        "Custom Training"
      ],
      category: "Customer Service",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      id: 4,
      name: "Email Marketing Automation",
      description: "AI-driven email campaigns with personalization, A/B testing, and advanced segmentation capabilities.",
      icon: Mail,
      price: "$99",
      period: "/month",
      features: [
        "AI Personalization",
        "A/B Testing",
        "Advanced Segmentation",
        "Drip Campaigns",
        "Analytics & Reporting",
        "Template Library"
      ],
      category: "Marketing",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      id: 5,
      name: "Image & Video AI Editor",
      description: "AI-powered image and video editing with automatic enhancement, background removal, and style transfer.",
      icon: Image,
      price: "$129",
      period: "/month",
      features: [
        "Auto Enhancement",
        "Background Removal",
        "Style Transfer",
        "Batch Processing",
        "Cloud Storage",
        "API Integration"
      ],
      category: "Media",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      id: 6,
      name: "Smart Project Manager",
      description: "AI-powered project management with automated task assignment, progress tracking, and resource optimization.",
      icon: Calendar,
      price: "$179",
      period: "/month",
      features: [
        "AI Task Assignment",
        "Progress Tracking",
        "Resource Optimization",
        "Team Collaboration",
        "Time Tracking",
        "Gantt Charts"
      ],
      category: "Productivity",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 7,
      name: "AI Code Assistant",
      description: "Intelligent coding assistant with code generation, debugging, documentation, and best practice suggestions.",
      icon: Code,
      price: "$199",
      period: "/month",
      features: [
        "Code Generation",
        "Debugging Assistant",
        "Auto Documentation",
        "Best Practices",
        "Multi-language Support",
        "IDE Integration"
      ],
      category: "Development",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      id: 8,
      name: "Smart Database Manager",
      description: "AI-powered database management with automated optimization, backup, and performance monitoring.",
      icon: Database,
      price: "$249",
      period: "/month",
      features: [
        "Auto Optimization",
        "Smart Backups",
        "Performance Monitoring",
        "Query Optimization",
        "Security Scanning",
        "Cloud Integration"
      ],
      category: "Database",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    },
    {
      id: 9,
      name: "AI Website Builder",
      description: "Intelligent website builder with AI design suggestions, content generation, and SEO optimization.",
      icon: Globe,
      price: "$149",
      period: "/month",
      features: [
        "AI Design Suggestions",
        "Content Generation",
        "SEO Optimization",
        "Mobile Responsive",
        "E-commerce Ready",
        "Analytics Integration"
      ],
      category: "Web Development",
      color: "text-teal-400",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/30"
    },
    {
      id: 10,
      name: "Mobile App AI Assistant",
      description: "AI-powered mobile app development with automated UI generation, testing, and deployment.",
      icon: Smartphone,
      price: "$299",
      period: "/month",
      features: [
        "Auto UI Generation",
        "Automated Testing",
        "Cross-platform Support",
        "Push Notifications",
        "Analytics Integration",
        "App Store Deployment"
      ],
      category: "Mobile Development",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    }
  ];

  const categories = [
    "All",
    "Content Creation",
    "Analytics",
    "Customer Service",
    "Marketing",
    "Media",
    "Productivity",
    "Development",
    "Database",
    "Web Development",
    "Mobile Development"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState(microSAASServices);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredServices(microSAASServices);
    } else {
      setFilteredServices(microSAASServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Powerful AI-driven tools for modern businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from 50+ ready-to-use applications designed to streamline your business operations 
            and boost productivity with cutting-edge AI technology.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="quantum-card p-6 energy-pulse">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-white mb-3 text-lg">Instant Setup</h3>
              <p className="text-sm text-gray-300">Get started in minutes with our plug-and-play solutions</p>
            </div>
            <div className="quantum-card p-6 energy-pulse">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-300">Bank-level security and compliance for all your data</p>
            </div>
            <div className="quantum-card p-6 energy-pulse">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="font-bold text-white mb-3 text-lg">Proven ROI</h3>
              <p className="text-sm text-gray-300">Average 300% ROI within the first 6 months</p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'cyber-button'
                    : 'quantum-card text-gray-300 hover:text-white hover:neon-glow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 energy-pulse ${service.borderColor} border-2`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${service.bgColor} ${service.color}`}>
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <button className="cyber-button flex-1 text-center py-3">
                    Start Free Trial
                  </button>
                  <button className={`quantum-card ${service.borderColor} border-2 px-4 py-3 hover:neon-glow transition-all duration-300`}>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="quantum-card p-8 energy-pulse">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  3 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Templates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Get Started
              </button>
            </div>

            <div className="quantum-card p-8 energy-pulse border-2 border-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  10 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Premium Templates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Phone & Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Get Started
              </button>
            </div>

            <div className="quantum-card p-8 energy-pulse">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$499</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise Deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA Guarantee
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 quantum-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our Micro SAAS solutions to boost productivity and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;