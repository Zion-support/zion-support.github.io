
"use client";"
import React from "react";"
import { Helmet } from "react-helmet-async";"
import { Link } from "react-router-dom";"
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
  ChatBubbleLeftRightIcon,DocumentTextIcon,LightBulbIcon}from "@heroicons/react/24/outline";"
const ITSolutionsPage: React.FC = () => {"
  const solutions = [
    {
      title: "Cloud Infrastructure","
      description: "Scalable and secure cloud infrastructure solutions for modern businesses.","
      icon: "CloudIcon",
      features: [
        "Scalable architecture","
        "High availability","
        "Security compliance","
        "Cost optimization","
        "24/7 monitoring","
        "Disaster recovery""
      ],
      color: "from-blue-50 to-cyan-50","
      price: "Starting at $1",50/month","
      benefits: ["Scalability", "Reliability", "Cost efficiency"],"
      useCases: ["Web hosting", "Data storage", "Application hosting"],"
      href: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions","
      description: "Comprehensive cybersecurity solutions to protect your digital assets and data.","
      icon: "ShieldCheckIcon",
      features: [
        "Threat detection","
        "Vulnerability assessment","
        "Security monitoring","
        "Incident response","
        "Compliance management","
        "Security training""
      ],
      color: "from-red-50 to-pink-50","
      price: "Starting at $2",20/month","
      benefits: ["Enhanced security", "Risk mitigation", "Compliance"],"
      useCases: ["Data protection", "Network security", "Compliance"],"
      href: "/cybersecurity"
    },
    {
      title: "IT Consulting","
      description: "Strategic IT consulting to help you make informed technology decisions.","
      icon: "LightBulbIcon",
      features: [
        "Technology assessment","
        "Strategic planning","
        "Vendor selection","
        "Implementation guidance","
        "Change management","
        "Training and support""
      ],
      color: "from-green-50 to-emerald-50","
      price: "Starting at $1",20/month","
      benefits: ["Expert guidance", "Cost savings", "Risk reduction"],"
      useCases: ["Technology planning", "Digital transformation", "System integration"],"
      href: "/it-consulting"
    },
    {
      title: "Network Solutions","
      description: "Advanced networking solutions for reliable and secure connectivity.","
      icon: "GlobeAltIcon",
      features: [
        "Network design","
        "Security implementation","
        "Performance optimization","
        "Monitoring and maintenance","
        "Disaster recovery","
        "Remote access""
      ],
      color: "from-purple-50 to-indigo-50","
      price: "Starting at $1",80/month","
      benefits: ["Reliable connectivity", "Enhanced security", "Performance"],"
      useCases: ["Office networking", "Remote work", "Data centers"],"
      href: "/network-solutions"
    },
    {
      title: "Data Management","
      description: "Comprehensive data management solutions for storage", processing, and analytics.","
      icon: "ChartBarIcon",
      features: [
        "Data storage","
        "Data processing","
        "Analytics and reporting","
        "Data security","
        "Backup and recovery","
        "Data governance""
      ],
      color: "from-orange-50 to-red-50","
      price: "Starting at $2",00/month","
      benefits: ["Better insights", "Data security", "Compliance"],"
      useCases: ["Business intelligence", "Data analytics", "Compliance"],"
      href: "/data-management"
    },
    {
      title: "IT Support","
      description: "Comprehensive IT support services to keep your systems running smoothly.","
      icon: "UserGroupIcon",
      features: [
        "24/7 support","
        "Remote assistance","
        "System maintenance","
        "Software updates","
        "Hardware support","
        "User training""
      ],
      color: "from-cyan-50 to-blue-50","
      price: "Starting at $1",00/month","
      benefits: ["Reduced downtime", "Expert support", "Cost efficiency"],"
      useCases: ["Help desk", "System maintenance", "User support"],";
      href: "/it-support"}];
  const features = [
    {
      title: "Expert Solutions","
      description: "Our team of certified professionals delivers cutting-edge IT solutions.","
      icon: "CpuChipIcon"
    },
    {
      title: "Scalable Architecture","
      description: "Solutions that grow with your business and adapt to changing needs.","
      icon: "CloudIcon"
    },
    {
      title: "24/7 Support","
      description: "Round-the-clock support to ensure your systems are always running.","
      icon: "UserGroupIcon"
    },
    {
      title: "Security First","
      description: "Security is built into every solution we deliver.",";
      icon: "ShieldCheckIcon;"
    }];
import React from "react";"
import { Helmet } from "react-helmet-async";"
import React from "react";"
import { Helmet } from "react-helmet-async";"
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, and consulting services." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, IT consulting, network solutions" />
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-90 mb-6">
              IT Solutions
            </h$1>
            <p className="text-xl text-gray-60 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to=""/contact" "
                className="bg-blue-60 text-white px-8 py-3 rounded-lg hover:bg-blue-70 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to=""/demo" "
                className="border border-blue-60 text-blue-60 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-90 mb-12">
              Our IT Solutions
            </h$1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map(solution, index) => (
                <div key={index} className="bg-white border border-gray-20 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    <solution.icon className="w-6 h-6 text-white"` />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-90 mb-3">{solution.title}</h$1>
                  <p className="text-gray-60 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <p className="text-blue-60 font-semibold">{solution.price}</p>
                  </div>
                  <Link 
                    to={solution.href}
                    className="text-blue-60 hover:text-blue-70 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>)}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-90 mb-12">
              Why Choose Our IT Solutions?
            </h$1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map(feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-90 mb-3">{feature.title}</h$1>
                  <p className="text-gray-60">{feature.description}</p>
                </div>)}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-90 mb-6">
              Ready to Transform Your IT Infrastructure?
            </h$1>
            <p className="text-lg text-gray-60 mb-8">
              Let"s discuss how our IT solutions can help you achieve your business goals."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to=""/contact" "
                className="bg-blue-60 text-white px-8 py-3 rounded-lg hover:bg-blue-70 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to=""/demo" "
                className="border border-blue-60 text-blue-60 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud migration, cybersecurity, database management, and more. Expert IT services for modern businesses." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud migration, cybersecurity, database management, IT support, network security" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-90 via-purple-90 to-slate-90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              IT Solutions
            </h$1>
            <p className="text-xl text-gray-30 mb-8 leading-relaxed">
              Comprehensive IT solutions to power your business infrastructure
            </p>
            <p className="text-lg text-gray-40 max-w-3xl mx-auto">
              From infrastructure management to cybersecurity, our expert IT solutions 
              ensure your technology infrastructure is secure, scalable, and optimized for performance.
            </p>
          </div>
        </div>
      </section>
      {/* IT Services Grid */}
      <section className="py-20 bg-slate-90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {itServices.map(service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-80 to-slate-70 p-8 rounded-xl border border-slate-60 hover:border-purple-50 transition-all duration-30 hover-lift hover-glow glass-dark">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover: "scale-110 transition-transform floating`"}>
                    <Icon className="w-8 h-8 text-white"` />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h$1>
                  <p className="text-gray-30 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-green-40">{service.price}</span>
                  </div>
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-40 mb-3">Key Features: "</h$1>",
                      {service.features.map(feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-30">
                          <CheckCircleIcon className="w-4 h-4 text-green-40 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-40 mb-2">Benefits: "</h$1>",
                      {service.benefits.map(benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-90"/30 text-green-30 px-2 py-1 rounded-full">
                          {benefit}
                        </span>)}
                    </div>
                  </div>
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-40 mb-2">Perfect for: "</h$1>",
                      {service.useCases.map(useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-90"/30 text-blue-30 px-2 py-1 rounded-full">
                          {useCase}
                        </span>)}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-40 hover: text-purple-30 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-purple-40"/10"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to=""/contact""
                      className="bg-gradient-to-r from-purple-60 to-cyan-60 text-white px-4 py-2 rounded-lg hover: from-purple-70 hover:to-cyan-70 transition-all duration-30 font-semibold"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              )})}
          </div>
        </div>
      </section>
      {/* Why Choose Our IT Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-90 to-purple-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Solutions?
            </h$1>
            <p className="text-xl text-gray-30 max-w-3xl mx-auto">
              Expert IT services backed by years of experience and cutting-edge technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ServerIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h$1>
              <p className="text-gray-30">
                Certified IT professionals with extensive experience in enterprise infrastructure and cloud technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h$1>
              <p className="text-gray-30">
                Round-the-clock monitoring and support to ensure your IT infrastructure runs smoothly at all times.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h$1>
              <p className="text-gray-30">
                Bank-level security measures and compliance standards to protect your critical business data.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h$1>
              <p className="text-gray-30">
                Flexible IT solutions that grow with your business and adapt to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* IT Implementation Process */}
      <section className="py-20 bg-slate-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Implementation Process
            </h$1>
            <p className="text-xl text-gray-30 max-w-3xl mx-auto">
              A systematic approach to delivering reliable and efficient IT solutions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h$1>
              <p className="text-gray-30">
                We assess your current IT infrastructure and develop a comprehensive implementation plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design & Configuration</h$1>
              <p className="text-gray-30">
                We design and configure your IT solutions according to best practices and your requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation & Testing</h$1>
              <p className="text-gray-30">
                We implement the solutions and conduct thorough testing to ensure everything works perfectly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Monitoring & Support</h$1>
              <p className="text-gray-30">
                We provide ongoing monitoring, maintenance, and support to keep your systems running optimally.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-90 to-purple-90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Optimize Your IT Infrastructure?
            </h$1>
            <p className="text-xl text-gray-30 mb-12">
              Let"s discuss how our IT solutions can enhance your business operations and security'
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to=""/contact""
                className="bg-gradient-to-r from-purple-60 to-cyan-60 text-white px-8 py-4 rounded-lg font-semibold hover: from-purple-70 hover:to-cyan-70 transition-all duration-30 transform hover:scale-10o5 flex items-center justify-center gap-2"
              >
                Get Free IT Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to=""/demo""
                className="border-2 border-purple-40 text-purple-30 px-8 py-4 rounded-lg font-semibold hover: bg-purple-40 hover:text-white transition-all duration-30 flex items-center justify-center gap-2"
              >
                Schedule IT Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-30">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-40" />
                <span>+1-30o2-464-0o950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-40" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )}export default ITSolutionsPage;
