import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  SignalIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const microSaaSServices = [
    {
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation platform with multi-language support, SEO optimization, and brand voice customization.",
      features: ["Multi-language support", "SEO optimization", "Brand voice training", "Content scheduling", "Analytics dashboard"],
      pricing: "Starting at $29/month",
      href: "/ai-content-generator",
      icon: DocumentTextIcon,
      category: "AI & Content"
    },
    {
      name: "Smart Analytics Dashboard",
      description: "Real-time business intelligence platform with predictive analytics, custom reporting, and automated insights.",
      features: ["Real-time analytics", "Predictive modeling", "Custom reports", "Data visualization", "API integration"],
      pricing: "Starting at $49/month",
      href: "/ai-analytics-dashboard",
      icon: ChartBarIcon,
      category: "Analytics & BI"
    },
    {
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot solution with natural language processing, multi-channel support, and seamless human handoff.",
      features: ["NLP processing", "Multi-channel support", "Human handoff", "Knowledge base integration", "Performance analytics"],
      pricing: "Starting at $39/month",
      href: "/ai-customer-support-bot",
      icon: UserGroupIcon,
      category: "Customer Service"
    },
    {
      name: "Code Security Auditor",
      description: "Automated code security scanning and vulnerability assessment with compliance reporting and remediation guidance.",
      features: ["Automated scanning", "Vulnerability detection", "Compliance reporting", "Remediation guidance", "CI/CD integration"],
      pricing: "Starting at $79/month",
      href: "/ai-code-security-auditor",
      icon: ShieldCheckIcon,
      category: "Security & Compliance"
    },
    {
      name: "AI Marketing Automation",
      description: "End-to-end marketing automation platform with AI-driven campaign optimization and customer journey mapping.",
      features: ["Campaign automation", "AI optimization", "Journey mapping", "A/B testing", "ROI tracking"],
      pricing: "Starting at $59/month",
      href: "/ai-marketing-automation",
      icon: RocketLaunchIcon,
      category: "Marketing"
    },
    {
      name: "Smart Inventory Manager",
      description: "AI-powered inventory optimization with demand forecasting, automated reordering, and supply chain analytics.",
      features: ["Demand forecasting", "Automated reordering", "Supply chain analytics", "Multi-location support", "Integration APIs"],
      pricing: "Starting at $69/month",
      href: "/ai-inventory-manager",
      icon: CogIcon,
      category: "Operations"
    }
  ];

  const aiServices = [
    {
      name: "AI Consulting & Strategy",
      description: "Strategic AI implementation consulting to identify opportunities and develop comprehensive AI roadmaps.",
      features: ["AI readiness assessment", "Strategy development", "Technology selection", "Implementation planning", "ROI analysis"],
      pricing: "Custom pricing",
      href: "/ai-consulting",
      icon: CpuChipIcon,
      category: "Consulting"
    },
    {
      name: "Machine Learning Development",
      description: "Custom ML model development and deployment with continuous learning and performance optimization.",
      features: ["Custom model development", "Data preprocessing", "Model training", "Deployment & scaling", "Performance monitoring"],
      pricing: "Starting at $5,000/project",
      href: "/machine-learning-development",
      icon: CpuChipIcon,
      category: "Development"
    },
    {
      name: "Computer Vision Solutions",
      description: "Advanced computer vision applications for image recognition, object detection, and visual analytics.",
      features: ["Image recognition", "Object detection", "Visual analytics", "Real-time processing", "Custom training"],
      pricing: "Starting at $3,000/project",
      href: "/computer-vision-solutions",
      icon: CpuChipIcon,
      category: "Computer Vision"
    },
    {
      name: "Natural Language Processing",
      description: "NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Conversational AI", "Document processing"],
      pricing: "Starting at $4,000/project",
      href: "/natural-language-processing",
      icon: CpuChipIcon,
      category: "NLP"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud infrastructure setup, migration, and ongoing management across AWS, Azure, and GCP.",
      features: ["Cloud migration", "Infrastructure setup", "Cost optimization", "Security hardening", "24/7 monitoring"],
      pricing: "Starting at $2,500/month",
      href: "/cloud-infrastructure-management",
      icon: CloudIcon,
      category: "Cloud Services"
    },
    {
      name: "Cybersecurity Solutions",
      description: "End-to-end cybersecurity services including threat assessment, security implementation, and ongoing monitoring.",
      features: ["Threat assessment", "Security implementation", "Penetration testing", "Compliance auditing", "Incident response"],
      pricing: "Starting at $1,500/month",
      href: "/cybersecurity-solutions",
      icon: ShieldCheckIcon,
      category: "Security"
    },
    {
      name: "Digital Transformation",
      description: "Complete digital transformation services to modernize business processes and enhance operational efficiency.",
      features: ["Process analysis", "Technology integration", "Change management", "Training & support", "Performance monitoring"],
      pricing: "Custom pricing",
      href: "/digital-transformation",
      icon: RocketLaunchIcon,
      category: "Transformation"
    },
    {
      name: "5G Network Solutions",
      description: "5G network implementation and optimization for enhanced connectivity and IoT applications.",
      features: ["5G planning", "Network optimization", "IoT integration", "Performance testing", "Maintenance support"],
      pricing: "Starting at $10,000/project",
      href: "/5g-network-solutions",
      icon: SignalIcon,
      category: "5G & IoT"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Comprehensive AI solutions, IT services, and micro SaaS platforms. Transform your business with cutting-edge technology from Zion Tech Group." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud computing, cybersecurity, digital transformation, 5G solutions" />
        <meta property="og:title" content="Services - Zion Tech Group | AI, IT & Micro SaaS Solutions" />
        <meta property="og:description" content="Comprehensive AI solutions, IT services, and micro SaaS platforms. Transform your business with cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SaaS Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-deploy micro SaaS platforms designed to solve specific business challenges with scalable, cost-effective solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-400">{service.pricing}</span>
                    <Link 
                      to={service.href}
                      className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 text-sm group-hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence solutions to transform your business operations and drive innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-cyan-400">{service.pricing}</span>
                    <Link 
                      to={service.href}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-sm group-hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions to optimize your infrastructure, enhance security, and drive digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                    <Link 
                      to={service.href}
                      className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-1 text-sm group-hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can accelerate your growth and innovation. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesPage;
