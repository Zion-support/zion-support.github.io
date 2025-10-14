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
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  SignalIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      title: "AI Solutions",
      description: "Comprehensive artificial intelligence services including machine learning, NLP, computer vision, and predictive analytics.",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500",
      href: "/ai-solutions",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Chatbots", "Content Generation"],
      price: "Starting at $1,200/month"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Specialized software-as-a-service applications designed to solve specific business challenges with AI-powered automation.",
      icon: GlobeAltIcon,
      color: "from-cyan-500 to-blue-500",
      href: "/micro-saas-solutions",
      features: ["Analytics Dashboards", "Content Management", "Customer Support", "Project Management", "E-commerce Tools", "HR Systems"],
      price: "Starting at $99/month"
    },
    {
      title: "IT Solutions",
      description: "Complete IT infrastructure and technology solutions including cloud computing, cybersecurity, and digital transformation.",
      icon: WrenchScrewdriverIcon,
      color: "from-green-500 to-emerald-500",
      href: "/it-solutions",
      features: ["Cloud Infrastructure", "Cybersecurity", "Network Management", "Data Center Solutions", "IT Consulting", "System Integration"],
      price: "Starting at $2,500/month"
    },
    {
      title: "5G Solutions",
      description: "Next-generation 5G technology solutions for enhanced connectivity, IoT applications, and ultra-low latency services.",
      icon: SignalIcon,
      color: "from-indigo-500 to-purple-500",
      href: "/5g-solutions",
      features: ["5G Network Infrastructure", "IoT Solutions", "Edge Computing", "Mobile Applications", "Smart City Solutions", "Private Networks"],
      price: "Starting at $5,000/month"
    }
  ];

  const additionalServices = [
    {
      title: "Cybersecurity Services",
      description: "Advanced security solutions to protect your digital assets and infrastructure from evolving threats.",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-pink-500",
      href: "/cybersecurity",
      price: "Starting at $1,800/month"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management to optimize performance and reduce costs.",
      icon: CloudIcon,
      color: "from-blue-500 to-cyan-500",
      href: "/cloud-solutions",
      price: "Starting at $2,200/month"
    },
    {
      title: "Digital Transformation",
      description: "Strategic digital transformation services to modernize your business processes and enhance customer experiences.",
      icon: RocketLaunchIcon,
      color: "from-orange-500 to-yellow-500",
      href: "/digital-transformation",
      price: "Starting at $3,500/month"
    },
    {
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence solutions for data-driven decision making.",
      icon: ChartBarIcon,
      color: "from-teal-500 to-green-500",
      href: "/data-analytics",
      price: "Starting at $1,500/month"
    },
    {
      title: "Software Development",
      description: "Custom software development services for web applications, mobile apps, and enterprise solutions.",
      icon: CogIcon,
      color: "from-violet-500 to-purple-500",
      href: "/software-development",
      price: "Starting at $4,000/month"
    },
    {
      title: "Consulting Services",
      description: "Expert technology consulting to help you make informed decisions and optimize your IT strategy.",
      icon: AcademicCapIcon,
      color: "from-amber-500 to-orange-500",
      href: "/consulting",
      price: "Starting at $200/hour"
    }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing",
    "Retail & E-commerce",
    "Education",
    "Government",
    "Real Estate",
    "Transportation & Logistics",
    "Energy & Utilities",
    "Media & Entertainment"
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, micro SaaS applications, IT infrastructure, cybersecurity, cloud computing, and digital transformation. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="technology services, AI solutions, micro SaaS, IT services, cybersecurity, cloud computing, digital transformation, software development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From AI-powered solutions to cloud infrastructure, we provide end-to-end technology services that help businesses innovate, scale, and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that drive innovation and business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
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
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized services to complement your technology stack
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-lg font-bold text-green-400">{service.price}</span>
                  </div>
                  <Link
                    to={service.href}
                    className="text-purple-400 hover:text-purple-300 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have experience across multiple industries and understand the unique challenges each sector faces
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={industry} className="bg-gradient-to-br from-slate-800 to-slate-700 p-4 rounded-lg text-center hover:bg-gradient-to-br hover:from-purple-800 hover:to-slate-700 transition-all duration-300">
                <span className="text-gray-300 text-sm font-medium">{industry}</span>
              </div>
            ))}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and methodologies to deliver innovative solutions that give you a competitive edge.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team of experienced professionals brings deep expertise in AI, cloud computing, and digital transformation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300">
                We have successfully delivered 500+ projects for clients across various industries with a 99% satisfaction rate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support and monitoring to ensure your systems run smoothly and efficiently at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
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
};

export default ServicesPage;