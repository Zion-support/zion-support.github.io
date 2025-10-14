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
  SignalIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      title: "AI Solutions",
      description: "Comprehensive artificial intelligence services including machine learning, NLP, computer vision, and predictive analytics.",
      icon: CpuChipIcon,
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
        "AI Content Generation"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,200/month",
      href: "/ai-solutions"
    },
    {
      title: "IT Solutions",
      description: "Complete IT infrastructure management, cloud migration, cybersecurity, and software development services.",
      icon: CogIcon,
      features: [
        "IT Infrastructure Management",
        "Cloud Migration & Management",
        "Cybersecurity Solutions",
        "Database Management",
        "Network Security & Monitoring",
        "IT Support & Helpdesk"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $800/month",
      href: "/it-solutions"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Scalable micro SaaS applications designed to solve specific business challenges with AI-powered features.",
      icon: GlobeAltIcon,
      features: [
        "AI-Powered Analytics Dashboard",
        "AI Content Management System",
        "AI Customer Support Bot",
        "AI Project Management Suite",
        "AI E-commerce Optimizer",
        "AI HR Management System"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $99/month",
      href: "/micro-saas-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Advanced cybersecurity solutions to protect your digital assets and ensure compliance with industry standards.",
      icon: ShieldCheckIcon,
      features: [
        "Security Assessments",
        "Threat Monitoring",
        "Incident Response",
        "Compliance Management",
        "Security Training",
        "Penetration Testing"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $2,200/month",
      href: "/cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management for optimal performance and cost efficiency.",
      icon: CloudIcon,
      features: [
        "Cloud Migration Planning",
        "Multi-cloud Strategies",
        "Cost Optimization",
        "Security Implementation",
        "Performance Monitoring",
        "Backup & Recovery"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $3,000/month",
      href: "/cloud-solutions"
    },
    {
      title: "Digital Transformation",
      description: "Strategic digital transformation services to modernize your business processes and enhance customer experiences.",
      icon: RocketLaunchIcon,
      features: [
        "Digital Strategy Planning",
        "Process Automation",
        "Technology Integration",
        "Change Management",
        "Performance Optimization",
        "Continuous Innovation"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $2,500/month",
      href: "/digital-transformation"
    },
    {
      title: "5G Solutions",
      description: "Next-generation 5G technology solutions for enhanced connectivity, IoT applications, and ultra-low latency services.",
      icon: SignalIcon,
      features: [
        "5G Network Infrastructure",
        "IoT Solutions",
        "Edge Computing",
        "Smart City Solutions",
        "Mobile Applications",
        "Private Networks"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $4,000/month",
      href: "/5g-solutions"
    }
  ];

  const additionalServices = [
    {
      title: "AI Analytics Dashboard",
      description: "Real-time business analytics with AI-driven insights and predictive modeling.",
      price: "$299/month",
      href: "/ai-analytics-dashboard"
    },
    {
      title: "AI Content Management",
      description: "Intelligent content management with AI-powered optimization and SEO tools.",
      price: "$199/month",
      href: "/ai-content-management"
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent customer support automation with natural language processing.",
      price: "$149/month",
      href: "/ai-customer-support-bot"
    },
    {
      title: "AI Project Management",
      description: "Smart project management with AI-powered task optimization and resource allocation.",
      price: "$249/month",
      href: "/ai-project-management"
    },
    {
      title: "AI E-commerce Optimizer",
      description: "Complete e-commerce optimization with AI-powered recommendations and pricing strategies.",
      price: "$399/month",
      href: "/ai-ecommerce-optimizer"
    },
    {
      title: "AI HR Management",
      description: "Intelligent HR management with AI-powered recruitment and employee analytics.",
      price: "$179/month",
      href: "/ai-hr-management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, micro SaaS applications, cybersecurity, cloud infrastructure, and digital transformation. Expert technology solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cybersecurity, cloud infrastructure, digital transformation, technology consulting, software development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From AI-powered solutions to cloud infrastructure, our expert team delivers 
              cutting-edge technology services that drive innovation and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of technology services designed for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link
                      to={service.href}
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

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI-powered applications designed to solve specific business challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={service.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-400">{service.price}</span>
                  <Link
                    to={service.href}
                    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology and expert guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and AI-powered solutions to deliver superior results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock monitoring and support to ensure your systems are always running optimally.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security measures and compliance standards to protect your critical business data.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored solutions designed specifically for your business requirements and growth objectives.
              </p>
            </div>
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
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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