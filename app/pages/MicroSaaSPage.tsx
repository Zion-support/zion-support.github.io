import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  ExternalLink,
  TrendingUp,
  Users,
  Clock,
  DollarSign
} from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation tool with 50+ templates, SEO optimization, and multi-language support.",
      features: [
        "50+ Content Templates",
        "SEO Optimization",
        "Multi-language Support",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Social Media Integration"
      ],
      pricing: {
        starter: "$29/month",
        pro: "$79/month",
        enterprise: "$199/month"
      },
      link: "https://ziontechgroup.com/ai-content-generator",
      category: "AI Tools"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Security Audit Suite",
      description: "Comprehensive security scanning and vulnerability assessment tool for websites and applications.",
      features: [
        "Automated Security Scans",
        "Vulnerability Reports",
        "Compliance Checking",
        "Real-time Monitoring",
        "Penetration Testing",
        "Security Recommendations"
      ],
      pricing: {
        starter: "$49/month",
        pro: "$149/month",
        enterprise: "$399/month"
      },
      link: "https://ziontechgroup.com/security-audit",
      category: "Security"
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Cloud Migration Assistant",
      description: "Automated cloud migration tool that helps businesses move to AWS, Azure, or Google Cloud seamlessly.",
      features: [
        "Multi-cloud Support",
        "Cost Optimization",
        "Migration Planning",
        "Data Transfer Tools",
        "Performance Monitoring",
        "Rollback Capabilities"
      ],
      pricing: {
        starter: "$99/month",
        pro: "$299/month",
        enterprise: "$799/month"
      },
      link: "https://ziontechgroup.com/cloud-migration",
      category: "Cloud Services"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "API Management Platform",
      description: "Complete API lifecycle management with monitoring, analytics, and developer portal features.",
      features: [
        "API Gateway",
        "Rate Limiting",
        "Analytics Dashboard",
        "Developer Portal",
        "API Documentation",
        "Version Control"
      ],
      pricing: {
        starter: "$39/month",
        pro: "$119/month",
        enterprise: "$299/month"
      },
      link: "https://ziontechgroup.com/api-management",
      category: "Development"
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence and data visualization platform with custom reporting capabilities.",
      features: [
        "Real-time Dashboards",
        "Custom Reports",
        "Data Visualization",
        "Automated Alerts",
        "Multi-source Integration",
        "Export Capabilities"
      ],
      pricing: {
        starter: "$59/month",
        pro: "$179/month",
        enterprise: "$499/month"
      },
      link: "https://ziontechgroup.com/data-analytics",
      category: "Analytics"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Customer Support Automation",
      description: "AI-powered customer support system with chatbots, ticket management, and knowledge base integration.",
      features: [
        "AI Chatbots",
        "Ticket Management",
        "Knowledge Base",
        "Multi-channel Support",
        "Sentiment Analysis",
        "Performance Metrics"
      ],
      pricing: {
        starter: "$79/month",
        pro: "$199/month",
        enterprise: "$499/month"
      },
      link: "https://ziontechgroup.com/support-automation",
      category: "Customer Service"
    }
  ];

  const categories = ["All", "AI Tools", "Security", "Cloud Services", "Development", "Analytics", "Customer Service"];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions for modern businesses. AI tools, security, cloud services, and more with competitive pricing." />
        <meta name="keywords" content="micro saas, saas solutions, ai tools, security tools, cloud services, api management, data analytics" />
        <meta property="og:title" content="Micro SaaS Solutions | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SaaS solutions for modern businesses with competitive pricing." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 particle-bg">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 cyber-text neon-pulse">
                Micro SaaS Solutions
                <span className="block text-3xl lg:text-4xl mt-4 text-gray-300">
                  Powerful Tools for Modern Businesses
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Discover our comprehensive suite of micro SaaS solutions designed to streamline your business operations, 
                enhance productivity, and drive growth with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of micro SaaS tools designed to solve specific business challenges 
                with powerful features and competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                    <div className="mt-4">
                      <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Starter:</span>
                        <span className="text-cyan-400 font-bold">{service.pricing.starter}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Pro:</span>
                        <span className="text-purple-400 font-bold">{service.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Enterprise:</span>
                        <span className="text-pink-400 font-bold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button text-center inline-flex items-center justify-center"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="cyber-button-secondary text-center inline-flex items-center justify-center"
                    >
                      Contact Sales
                      <Mail className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS tools are designed with enterprise-grade features and user-friendly interfaces 
                to deliver maximum value for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-300">Average 300% return on investment within 6 months</p>
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
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
                <p className="text-gray-300">Get up and running in under 15 minutes</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support from our expert team</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our micro SaaS solutions. 
              Get started today with a free consultation and demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSPage;