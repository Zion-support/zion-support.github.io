'use client';

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
  SparklesIcon,
  BoltIcon,
  StarIcon,
  FireIcon,
  MapPinIcon,
  ServerIcon,
  WifiIcon,
  DatabaseIcon,
  CodeBracketIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Cloud Infrastructure & Migration",
      description: "Comprehensive cloud infrastructure solutions with seamless migration, auto-scaling, and enterprise-grade security for modern businesses.",
      icon: CloudIcon,
      features: [
        "Multi-cloud architecture design",
        "Seamless cloud migration",
        "Auto-scaling & load balancing",
        "High availability & disaster recovery",
        "Cost optimization & monitoring",
        "Security compliance (SOC 2, ISO 27001)",
        "24/7 infrastructure monitoring",
        "DevOps & CI/CD implementation"
      ],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      price: "$3,999/month",
      originalPrice: "$5,999/month",
      savings: "Save $2,000/month",
      benefits: ["99.9% uptime", "50% cost reduction", "Unlimited scalability", "Enhanced security"],
      useCases: ["Cloud migration", "Web hosting", "Application hosting", "Data storage"],
      href: "/cloud-infrastructure",
      popular: true,
      category: "Infrastructure"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Advanced cybersecurity solutions with threat detection, vulnerability assessment, and compliance management to protect your digital assets.",
      icon: ShieldCheckIcon,
      features: [
        "Advanced threat detection & response",
        "Vulnerability assessment & penetration testing",
        "Security monitoring & incident response",
        "Compliance management (GDPR, HIPAA, SOX)",
        "Security awareness training",
        "Zero-trust architecture implementation",
        "Endpoint protection & EDR",
        "Security operations center (SOC)"
      ],
      color: "from-red-500 via-pink-500 to-rose-500",
      price: "$4,999/month",
      originalPrice: "$7,999/month",
      savings: "Save $3,000/month",
      benefits: ["99.9% threat detection", "Zero breach guarantee", "Full compliance", "24/7 monitoring"],
      useCases: ["Data protection", "Network security", "Compliance", "Incident response"],
      href: "/cybersecurity",
      popular: true,
      category: "Security"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting services to help you make informed technology decisions, digital transformation, and technology roadmaps.",
      icon: LightBulbIcon,
      features: [
        "Technology assessment & audit",
        "Digital transformation strategy",
        "IT roadmap development",
        "Vendor evaluation & selection",
        "Implementation planning & guidance",
        "Change management & training",
        "ROI analysis & business case",
        "Ongoing strategic advisory"
      ],
      color: "from-green-500 via-emerald-500 to-teal-500",
      price: "$2,499/month",
      originalPrice: "$3,999/month",
      savings: "Save $1,500/month",
      benefits: ["Expert guidance", "Cost optimization", "Risk mitigation", "Strategic planning"],
      useCases: ["Technology planning", "Digital transformation", "System integration", "Vendor selection"],
      href: "/it-consulting",
      popular: false,
      category: "Consulting"
    },
    {
      title: "Network Solutions & SD-WAN",
      description: "Advanced networking solutions including SD-WAN, network security, and performance optimization for reliable and secure connectivity.",
      icon: WifiIcon,
      features: [
        "SD-WAN design & implementation",
        "Network security & firewalls",
        "Performance optimization & monitoring",
        "Disaster recovery & redundancy",
        "Remote access & VPN solutions",
        "Network automation & management",
        "Bandwidth optimization",
        "Quality of Service (QoS) management"
      ],
      color: "from-purple-500 via-indigo-500 to-blue-500",
      price: "$3,499/month",
      originalPrice: "$4,999/month",
      savings: "Save $1,500/month",
      benefits: ["99.9% uptime", "Enhanced security", "Performance optimization", "Cost reduction"],
      useCases: ["Office networking", "Remote work", "Data centers", "Branch connectivity"],
      href: "/network-solutions",
      popular: false,
      category: "Networking"
    },
    {
      title: "Data Management & Analytics",
      description: "Comprehensive data management solutions including data lakes, analytics platforms, and business intelligence for data-driven decisions.",
      icon: DatabaseIcon,
      features: [
        "Data lake & warehouse design",
        "ETL/ELT pipeline development",
        "Real-time analytics & reporting",
        "Data governance & quality management",
        "Backup & disaster recovery",
        "Data security & encryption",
        "Business intelligence dashboards",
        "Machine learning data pipelines"
      ],
      color: "from-orange-500 via-red-500 to-pink-500",
      price: "$4,499/month",
      originalPrice: "$6,999/month",
      savings: "Save $2,500/month",
      benefits: ["Real-time insights", "Data security", "Compliance", "Scalable architecture"],
      useCases: ["Business intelligence", "Data analytics", "Compliance", "Machine learning"],
      href: "/data-management",
      popular: true,
      category: "Data & Analytics"
    },
    {
      title: "IT Support & Managed Services",
      description: "Comprehensive IT support and managed services to keep your systems running smoothly with 24/7 monitoring and support.",
      icon: UserGroupIcon,
      features: [
        "24/7 help desk & support",
        "Remote monitoring & management",
        "Proactive maintenance & updates",
        "Software & hardware support",
        "User training & onboarding",
        "Incident management & resolution",
        "Performance optimization",
        "Security patch management"
      ],
      color: "from-cyan-500 via-blue-500 to-indigo-500",
      price: "$1,999/month",
      originalPrice: "$2,999/month",
      savings: "Save $1,000/month",
      benefits: ["99.9% uptime", "Expert support", "Cost efficiency", "Proactive maintenance"],
      useCases: ["Help desk", "System maintenance", "User support", "IT operations"],
      href: "/it-support",
      popular: false,
      category: "Support"
    },
    {
      title: "Software Development & Integration",
      description: "Custom software development, API integration, and system modernization services to enhance your business applications.",
      icon: CodeBracketIcon,
      features: [
        "Custom software development",
        "API development & integration",
        "Legacy system modernization",
        "Microservices architecture",
        "Database design & optimization",
        "Mobile app development",
        "Web application development",
        "Third-party integrations"
      ],
      color: "from-teal-500 via-cyan-500 to-blue-500",
      price: "$5,999/month",
      originalPrice: "$8,999/month",
      savings: "Save $3,000/month",
      benefits: ["Custom solutions", "Modern architecture", "Scalable development", "Expert developers"],
      useCases: ["Custom applications", "System integration", "Legacy modernization", "API development"],
      href: "/software-development",
      popular: true,
      category: "Development"
    },
    {
      title: "DevOps & Automation",
      description: "DevOps implementation, CI/CD pipelines, and infrastructure automation to accelerate development and deployment processes.",
      icon: CommandLineIcon,
      features: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Container orchestration (Kubernetes)",
        "Monitoring & logging solutions",
        "Automated testing & deployment",
        "Configuration management",
        "Performance optimization",
        "Security automation"
      ],
      color: "from-yellow-500 via-orange-500 to-red-500",
      price: "$3,999/month",
      originalPrice: "$5,999/month",
      savings: "Save $2,000/month",
      benefits: ["Faster deployments", "Reduced errors", "Automated processes", "Better collaboration"],
      useCases: ["DevOps transformation", "CI/CD implementation", "Infrastructure automation", "Monitoring"],
      href: "/devops-automation",
      popular: false,
      category: "DevOps"
    }
  ];

  const features = [
    {
      title: "Expert IT Solutions",
      description: "Our team of certified professionals delivers cutting-edge IT solutions with industry best practices and proven methodologies.",
      icon: CpuChipIcon,
      color: "from-purple-500 to-cyan-500"
    },
    {
      title: "Scalable Architecture",
      description: "Solutions designed to grow with your business and adapt to changing needs with flexible, modular architectures.",
      icon: CloudIcon,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "24/7 Support & Monitoring",
      description: "Round-the-clock support and monitoring to ensure your systems are always running at peak performance.",
      icon: UserGroupIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Security First Approach",
      description: "Security is built into every solution we deliver with enterprise-grade protection and compliance standards.",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Cost Optimization",
      description: "We help optimize your IT costs through efficient resource utilization and strategic technology investments.",
      icon: CurrencyDollarIcon,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Future-Ready Technology",
      description: "We implement cutting-edge technologies that prepare your business for future growth and innovation.",
      icon: RocketLaunchIcon,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Assessment & Planning",
      description: "We conduct a comprehensive assessment of your current IT infrastructure and develop a strategic roadmap.",
      icon: LightBulbIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "2",
      title: "Solution Design",
      description: "We design custom IT solutions tailored to your specific needs, budget, and business objectives.",
      icon: CogIcon,
      color: "from-cyan-500 to-blue-500"
    },
    {
      step: "3",
      title: "Implementation & Migration",
      description: "Our experts implement and migrate your systems with minimal downtime and maximum efficiency.",
      icon: RocketLaunchIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "4",
      title: "Support & Optimization",
      description: "We provide ongoing support, monitoring, and optimization to ensure peak performance and reliability.",
      icon: UserGroupIcon,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const categories = [
    "All Solutions",
    "Infrastructure",
    "Security",
    "Consulting",
    "Networking",
    "Data & Analytics",
    "Support",
    "Development",
    "DevOps"
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group | Comprehensive Technology Services</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network solutions, data management, and IT consulting services." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, IT consulting, network solutions, data management, software development" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with comprehensive IT solutions. Cloud, security, networking, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 mb-8">
                <SparklesIcon className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-semibold text-lg">Comprehensive IT Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                IT Solutions
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Comprehensive <span className="text-cyan-400 font-semibold">IT solutions</span> designed to modernize your infrastructure, 
                enhance security, and drive business growth with cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                >
                  <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                  Get IT Consultation
                </Link>
                <Link 
                  to="/demo" 
                  className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                >
                  <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                  View IT Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-400">IT Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-gray-400">Certifications</div>
                </div>
              </div>
            </div>
          </section>

          {/* IT Solutions Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our IT Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Comprehensive IT solutions designed to transform your technology infrastructure and drive business success.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-3 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 border border-slate-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                    {/* Popular Badge */}
                    {solution.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <StarIcon className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="inline-block bg-slate-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {solution.category}
                    </div>

                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-white">{solution.price}</span>
                        <span className="text-lg text-gray-400 line-through">{solution.originalPrice}</span>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-semibold">
                          {solution.savings}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">per month, billed annually</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <BoltIcon className="w-5 h-5 text-yellow-400 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        <li className="text-sm text-cyan-400 font-medium">
                          +{solution.features.length - 4} more features
                        </li>
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <FireIcon className="w-5 h-5 text-orange-400 mr-2" />
                        Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to={solution.href}
                      className="group/btn w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold"
                    >
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Choose Our IT Solutions?
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Built with industry best practices and designed for enterprise-scale performance and reliability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our IT Implementation Process
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  A proven methodology for successful IT implementation and deployment in your organization.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Join thousands of businesses already using our IT solutions to modernize their infrastructure and drive growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link 
                    to="/contact" 
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                  >
                    <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                    Get IT Consultation
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                  >
                    <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                    Schedule IT Demo
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div>+1 (302) 464-0950</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div>kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ITSolutionsPage;