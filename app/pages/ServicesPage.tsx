import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  ArrowRight, 
  Phone, 
  Mail, 
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Clock,
  Target,
  BarChart,
  MessageSquare,
  Cpu,
  Eye,
  Mic,
  FileText,
  Search,
  Settings,
  Server,
  Network,
  Lock,
  Monitor,
  Smartphone,
  Globe
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    { 
      icon: <Zap className="w-8 h-8 text-purple-400" />, 
      title: "AI Solutions", 
      description: "Cutting-edge artificial intelligence solutions for business automation and intelligence.", 
      link: "/ai-solutions",
      features: ["Machine Learning", "Computer Vision", "NLP", "Predictive Analytics"],
      pricing: "From $199/month"
    }, 
    { 
      icon: <Shield className="w-8 h-8 text-cyan-400" />, 
      title: "Cybersecurity", 
      description: "Comprehensive security solutions to protect your digital assets and data.", 
      link: "/cybersecurity",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance", "Incident Response"],
      pricing: "From $149/month"
    }, 
    { 
      icon: <Cloud className="w-8 h-8 text-green-400" />, 
      title: "Cloud Solutions", 
      description: "Scalable cloud infrastructure and migration services for modern businesses.", 
      link: "/cloud-solutions",
      features: ["AWS/Azure/GCP", "Migration", "Cost Optimization", "24/7 Monitoring"],
      pricing: "From $299/month"
    }, 
    { 
      icon: <Code className="w-8 h-8 text-yellow-400" />, 
      title: "5G Solutions", 
      description: "Next-generation 5G infrastructure and implementation services.", 
      link: "/5g-solutions",
      features: ["Network Design", "Implementation", "IoT Integration", "Performance Optimization"],
      pricing: "From $499/month"
    }, 
    { 
      icon: <Database className="w-8 h-8 text-red-400" />, 
      title: "Data Analytics", 
      description: "Advanced data analytics and business intelligence solutions.", 
      link: "/data-analytics",
      features: ["Real-time Dashboards", "Predictive Modeling", "Data Visualization", "Custom Reports"],
      pricing: "From $179/month"
    },
    { 
      icon: <Server className="w-8 h-8 text-indigo-400" />, 
      title: "Micro SaaS", 
      description: "Specialized software solutions for specific business needs and workflows.", 
      link: "/micro-saas",
      features: ["Custom Development", "API Integration", "Scalable Architecture", "User Management"],
      pricing: "From $79/month"
    }
  ];

  const itServices = [
    {
      icon: <Network className="w-8 h-8 text-blue-400" />,
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network solutions for enterprise environments.",
      features: ["LAN/WAN Design", "Security Implementation", "Performance Optimization", "24/7 Support"],
      pricing: "From $199/month"
    },
    {
      icon: <Monitor className="w-8 h-8 text-green-400" />,
      title: "IT Support & Maintenance",
      description: "Comprehensive IT support services to keep your systems running smoothly.",
      features: ["Help Desk Support", "System Maintenance", "Software Updates", "Hardware Support"],
      pricing: "From $99/month"
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: "Security Consulting",
      description: "Expert security consulting to protect your organization from cyber threats.",
      features: ["Security Audits", "Risk Assessment", "Compliance Review", "Training Programs"],
      pricing: "From $299/month"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms.",
      features: ["Native Development", "Cross-platform", "UI/UX Design", "App Store Deployment"],
      pricing: "From $5,000/project"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Web Development",
      description: "Modern web applications and websites built with cutting-edge technologies.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Maintenance"],
      pricing: "From $3,000/project"
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: "System Integration",
      description: "Seamlessly integrate disparate systems and applications for improved efficiency.",
      features: ["API Development", "Data Migration", "Workflow Automation", "Testing & QA"],
      pricing: "From $2,500/project"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services to transform your business. AI solutions, cybersecurity, cloud services, and more." />
        <meta name="keywords" content="ai services, it services, cybersecurity, cloud solutions, data analytics, micro saas, web development" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT services to transform your business." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 particle-bg">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 cyber-text neon-pulse">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Core Technology Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our flagship services that drive digital transformation and business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-cyan-400 font-bold">{service.pricing}</span>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                IT Services & Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to support your business operations and technology infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-purple-400 font-bold">{service.pricing}</span>
                  </div>
                  
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that transform businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Average 300% ROI with measurable business impact</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with SOC 2 Type II compliance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">PhD-level researchers and experienced specialists</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support from our expert team</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg border border-slate-700 cyber-card">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your project requirements and discover how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;