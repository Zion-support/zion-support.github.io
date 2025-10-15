import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions tailored to your business needs with 99.9% uptime guarantee.",
      icon: CloudIcon,
      features: [
        "AWS, Azure, GCP migration",
        "Auto-scaling infrastructure",
        "Disaster recovery planning",
        "Cost optimization",
        "24/7 monitoring",
        "Security compliance"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "Cost savings", "Scalability"],
      useCases: ["Enterprise migration", "Startup scaling", "Hybrid cloud"],
      href: "/cloud-migration"
    },
    {
      title: "DevOps & CI/CD",
      description: "Streamline your development workflow with automated deployment pipelines and infrastructure as code.",
      icon: CogIcon,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Container orchestration",
        "Automated testing",
        "Monitoring & alerting",
        "Security scanning"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,000/month",
      benefits: ["Faster deployments", "Reduced errors", "Team productivity"],
      useCases: ["Software development", "Microservices", "Legacy modernization"],
      href: "/devops"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessment",
        "Penetration testing",
        "Vulnerability management",
        "Incident response",
        "Compliance auditing",
        "Security training"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $4,000/month",
      benefits: ["Threat protection", "Compliance ready", "Risk mitigation"],
      useCases: ["Financial services", "Healthcare", "E-commerce"],
      href: "/cybersecurity"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      icon: ChartBarIcon,
      features: [
        "Data warehousing",
        "ETL/ELT pipelines",
        "Real-time analytics",
        "Machine learning integration",
        "Custom dashboards",
        "Data governance"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $3,500/month",
      benefits: ["Data-driven decisions", "Real-time insights", "Competitive advantage"],
      useCases: ["Business intelligence", "Customer analytics", "Operational efficiency"],
      href: "/data-analytics"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      icon: GlobeAltIcon,
      features: [
        "Responsive design",
        "Progressive Web Apps",
        "API development",
        "Performance optimization",
        "SEO optimization",
        "Accessibility compliance"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $2,000/month",
      benefits: ["Modern design", "Fast performance", "Mobile-first"],
      useCases: ["Corporate websites", "E-commerce", "Web applications"],
      href: "/web-development"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions and optimize your infrastructure.",
      icon: UserGroupIcon,
      features: [
        "Technology assessment",
        "Architecture planning",
        "Vendor evaluation",
        "Cost analysis",
        "Implementation planning",
        "Change management"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $1,500/month",
      benefits: ["Expert guidance", "Cost optimization", "Strategic planning"],
      useCases: ["Digital transformation", "Technology adoption", "Process improvement"],
      href: "/it-consulting"
    }
  ];

  const benefits = [
    "Expert IT professionals with years of experience",
    "Cutting-edge technologies and best practices",
    "24/7 support and monitoring",
    "Scalable solutions that grow with your business",
    "Cost-effective solutions tailored to your budget",
    "Proven track record of successful implementations"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, DevOps, cybersecurity, and data analytics." />
        <meta name="keywords" content="IT solutions, cloud computing, DevOps, cybersecurity, data analytics, web development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions to drive your business forward
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, our expert IT team delivers 
              scalable, secure, and innovative solutions that help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of IT solutions designed to solve complex business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-blue-400/10"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
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

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300">
                We deliver IT solutions that are not just technologically advanced, but also practical and results-driven.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our IT solutions can modernize your technology stack and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your IT Journey
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              View Case Studies
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;
