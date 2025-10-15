import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WifiIcon,
  CircleStackIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services to transform your business",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500",
      services: [
        "Machine Learning Models",
        "Natural Language Processing", 
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
        "AI Content Generation",
        "AI Data Analytics",
        "AI Process Automation",
        "AI Recommendation Engines",
        "AI Fraud Detection",
        "AI Voice Recognition",
        "AI Business Intelligence"
      ],
      href: "/ai-solutions",
      price: "Starting at $1,200/month"
    },
    {
      title: "IT Solutions",
      description: "Comprehensive IT services for modern business infrastructure",
      icon: ServerIcon,
      color: "from-blue-500 to-cyan-500",
      services: [
        "IT Infrastructure Management",
        "Cloud Migration & Management",
        "Cybersecurity Solutions",
        "Database Management",
        "Network Security & Monitoring",
        "IT Support & Helpdesk",
        "Software Development",
        "IT Consulting & Strategy",
        "Data Backup & Recovery",
        "IT Asset Management",
        "Remote Work Solutions",
        "IT Compliance & Governance"
      ],
      href: "/it-solutions",
      price: "Starting at $800/month"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Specialized software solutions for specific business needs",
      icon: GlobeAltIcon,
      color: "from-green-500 to-emerald-500",
      services: [
        "AI-Powered Analytics Dashboard",
        "AI Content Management System",
        "AI Customer Support Bot",
        "AI Project Management Suite",
        "AI E-commerce Optimizer",
        "AI HR Management System",
        "AI Financial Analytics",
        "AI Marketing Automation",
        "AI Inventory Management",
        "AI Document Processing",
        "AI Social Media Manager",
        "AI Email Marketing Suite"
      ],
      href: "/micro-saas-solutions",
      price: "Starting at $99/month"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-orange-500",
      services: [
        "Security Assessments",
        "Threat Monitoring",
        "Incident Response",
        "Compliance Management",
        "Security Training",
        "Penetration Testing",
        "AI-Powered Security",
        "Zero Trust Architecture",
        "Security Operations Center",
        "Vulnerability Management",
        "Identity & Access Management",
        "Data Loss Prevention"
      ],
      href: "/cybersecurity",
      price: "Starting at $2,200/month"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for optimal performance and cost efficiency",
      icon: CloudIcon,
      color: "from-cyan-500 to-blue-500",
      services: [
        "Cloud Migration Planning",
        "Multi-cloud Strategies",
        "Cost Optimization",
        "Security Implementation",
        "Performance Monitoring",
        "Backup & Recovery",
        "Container Orchestration",
        "Serverless Architecture",
        "Cloud-Native Development",
        "Disaster Recovery",
        "Cloud Security",
        "Hybrid Cloud Solutions"
      ],
      href: "/cloud-solutions",
      price: "Starting at $3,000/month"
    },
    {
      title: "Digital Transformation",
      description: "Strategic digital transformation to modernize your business",
      icon: CogIcon,
      color: "from-yellow-500 to-orange-500",
      services: [
        "Digital Strategy Planning",
        "Process Automation",
        "Legacy System Modernization",
        "Data Integration",
        "Workflow Optimization",
        "Change Management",
        "Technology Assessment",
        "Digital Adoption",
        "Innovation Consulting",
        "Digital Culture Development",
        "Technology Roadmapping",
        "Digital Performance Metrics"
      ],
      href: "/digital-transformation",
      price: "Starting at $2,500/month"
    },
    {
      title: "5G Solutions",
      description: "Next-generation 5G technology for enhanced connectivity",
      icon: SignalIcon,
      color: "from-indigo-500 to-purple-500",
      services: [
        "5G Network Infrastructure",
        "5G IoT Solutions",
        "5G Edge Computing",
        "5G Mobile Applications",
        "5G Private Networks",
        "5G Smart City Solutions",
        "5G Data Analytics",
        "5G Implementation",
        "5G Testing & Optimization",
        "5G Security",
        "5G Performance Monitoring",
        "5G Future-Proofing"
      ],
      href: "/5g-solutions",
      price: "Starting at $4,000/month"
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience in cutting-edge technologies",
      icon: UserGroupIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for uninterrupted operations",
      icon: ClockIcon
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations and measurable business outcomes",
      icon: CheckCircleIcon
    },
    {
      title: "Scalable Solutions",
      description: "Flexible solutions that grow with your business and adapt to changing needs",
      icon: ChartBarIcon
    },
    {
      title: "Security First",
      description: "Bank-level security and compliance with industry standards and regulations",
      icon: ShieldCheckIcon
    },
    {
      title: "Cost Effective",
      description: "Competitive pricing with transparent costs and excellent ROI",
      icon: CurrencyDollarIcon
    }
  ];

  const implementationProcess = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your current systems, processes, and requirements to identify opportunities for improvement and optimization.",
      icon: LightBulbIcon
    },
    {
      step: "2", 
      title: "Solution Design",
      description: "We design custom solutions tailored to your specific business needs, goals, and technical requirements.",
      icon: CogIcon
    },
    {
      step: "3",
      title: "Implementation",
      description: "Our expert team implements the solution with minimal disruption to your business operations.",
      icon: WrenchScrewdriverIcon
    },
    {
      step: "4",
      title: "Support & Optimization",
      description: "We provide ongoing support, monitoring, and optimization to ensure peak performance and continuous improvement.",
      icon: RocketLaunchIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, micro SaaS, cybersecurity, cloud infrastructure, digital transformation, and 5G solutions. Expert technology consulting for modern businesses." />
        <meta name="keywords" content="AI solutions, IT services, micro SaaS, cybersecurity, cloud infrastructure, digital transformation, 5G solutions, technology consulting, software development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions to transform your business
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From AI and machine learning to cloud infrastructure and cybersecurity, 
              we provide end-to-end technology services that drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology services designed to meet all your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-green-400">{category.price}</span>
                  </div>
                  
                  {/* Services List */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Services Include:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {category.services.slice(0, 6).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                      {category.services.length > 6 && (
                        <div className="text-xs text-gray-400 mt-2">
                          +{category.services.length - 6} more services
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={category.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology and expert guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful technology implementation and deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {implementationProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our technology solutions can accelerate your growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
