import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Shield, 
  Leaf, 
  Sprout, 
  Box, 
  Link as LinkIcon,
  ArrowRight,
  CheckCircle,
  Users,
  Mail,
  CheckSquare
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "AI Accounting Assistant",
      description: "Intelligent accounting software that automates financial processes and provides insights.",
      href: "/ai-accounting-assistant",
      features: ["Automated Bookkeeping", "Financial Reporting", "Tax Preparation", "Expense Tracking"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Content Moderation Pro",
      description: "Advanced content moderation platform using AI to maintain safe online environments.",
      href: "/ai-content-moderation-pro",
      features: ["Automated Moderation", "Real-time Detection", "Multi-language Support", "Custom Rules"]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "AI Climate Solutions Pro",
      description: "Environmental monitoring and sustainability solutions powered by artificial intelligence.",
      href: "/ai-climate-solutions-pro",
      features: ["Carbon Tracking", "Environmental Monitoring", "Sustainability Reporting", "Green Analytics"]
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "AI Agricultural Intelligence Pro",
      description: "Smart farming solutions that optimize agricultural processes using AI and IoT.",
      href: "/ai-agricultural-intelligence-pro",
      features: ["Crop Monitoring", "Yield Prediction", "Soil Analysis", "Weather Integration"]
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "AI 3D Generation",
      description: "AI-powered 3D modeling and generation tools for design and visualization.",
      href: "/ai-3d-generation",
      features: ["3D Model Generation", "Texture Creation", "Animation Tools", "Export Options"]
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: "AI Blockchain Solutions",
      description: "Blockchain-based solutions enhanced with artificial intelligence capabilities.",
      href: "/ai-blockchain-solutions",
      features: ["Smart Contracts", "Decentralized AI", "Token Management", "Security Protocols"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Social Media Manager",
      description: "Automated social media management with AI-powered content generation and scheduling.",
      href: "/ai-social-media-manager",
      features: ["Content Automation", "Smart Scheduling", "Analytics", "Multi-platform Support"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "AI Email Marketing Pro",
      description: "Intelligent email marketing automation with AI-powered segmentation and optimization.",
      href: "/ai-email-marketing-pro",
      features: ["Smart Segmentation", "Subject Line AI", "Send Time Optimization", "Predictive Analytics"]
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "AI Project Management Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation.",
      href: "/ai-project-management-pro",
      features: ["Task Prioritization", "Team Analytics", "Predictive Planning", "Risk Management"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | Specialized Software Solutions</title>
        <meta name="description" content="Specialized micro SAAS solutions including AI accounting, content moderation, climate solutions, agricultural intelligence, 3D generation, and blockchain technologies." />
        <meta name="keywords" content="micro SAAS, AI accounting, content moderation, climate solutions, agricultural intelligence, 3D generation, blockchain" />
        <meta property="og:title" content="Micro SAAS - Zion Tech Group" />
        <meta property="og:description" content="Discover our specialized micro SAAS solutions for niche markets." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Specialized software-as-a-service solutions designed for niche markets and specific industries. 
                Our micro SAAS products provide targeted functionality with AI-powered capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized software solutions for specific industries and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Micro SAAS Solution?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can create a specialized software solution for your specific industry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
