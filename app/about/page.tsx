import React from 'react';
import SEOHead from '../../components/SEOHead';
import {
  UsersIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CogIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.",
      icon: RocketLaunchIcon
    },
    {
      title: "Security Focused",
      description: "Security is built into every solution we deliver, ensuring our clients' data and systems are protected.",
      icon: ShieldCheckIcon
    },
    {
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering solutions that drive real business value.",
      icon: CheckCircleIcon
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in technology and business strategy.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Technology expert specializing in AI and cloud architecture.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Head of Cybersecurity",
      description: "Security specialist with expertise in enterprise protection.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      description: "Full-stack developer focused on scalable solutions.",
      image: "/api/placeholder/300/300"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Members", value: "50+" }
  ];

  return (
    <>
      <SEOHead
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and team. We're a leading provider of AI solutions, cybersecurity, and digital transformation services."
        keywords="about us, team, mission, values, AI solutions, cybersecurity, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to transforming businesses through innovative AI solutions, 
            robust cybersecurity, and cutting-edge digital transformation services.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, enhance security, 
                and accelerate growth. We believe technology should be a force for positive change, making businesses 
                more efficient, secure, and successful.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our mission is to bridge the gap between complex technology and practical business needs, 
                delivering solutions that are not only technically excellent but also strategically aligned 
                with our clients' goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  View Solutions
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              business strategy, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in three core areas that are essential for modern business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <CpuChipIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence services including machine learning, natural language processing, 
                computer vision, and predictive analytics to help businesses make data-driven decisions.
              </p>
              <a href="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-medium">
                Learn More →
              </a>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-300 mb-6">
                Specialized software-as-a-service applications designed for specific business needs and workflows, 
                providing scalable and cost-effective solutions.
              </p>
              <a href="/micro-saas-solutions" className="text-purple-400 hover:text-purple-300 font-medium">
                Learn More →
              </a>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <CogIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">IT Solutions</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive IT services including cloud infrastructure, cybersecurity, digital transformation, 
                and system integration to support your business operations.
              </p>
              <a href="/it-solutions" className="text-purple-400 hover:text-purple-300 font-medium">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Let's discuss how our team can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call Us: +1 302 464 0950
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <EnvelopeIcon className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
