import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Server, Shield, Cloud, Database, Network, Code, Monitor, 
  Smartphone, Wrench, BarChart3, Eye, CheckCircle, ArrowRight,
  Sparkles, Layers, Award, Lightbulb, CircuitBoard, Atom, 
  Satellite, Zap, Target, Users, DollarSign, Phone, Mail, 
  MapPin, Calendar, Timer, Globe, TrendingUp, Star
} from 'lucide-react';

export default function ITServicesPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React, Next.js, Vue.js', 'Responsive Design', 'SEO Optimization', 'Performance Tuning'],
      href: '/web-development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native, Flutter', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications'],
      href: '/mobile-development'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud.',
      features: ['AWS, Azure, GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
      href: '/cloud-infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
      href: '/cybersecurity-solutions'
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'Database Management',
      description: 'Database design, optimization, and management services.',
      features: ['SQL, NoSQL', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      href: '/database-management'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-400" />,
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and management solutions.',
      features: ['Network Design', 'Security Implementation', 'Performance Monitoring', 'Troubleshooting'],
      href: '/network-infrastructure'
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration solutions.',
      features: ['Docker, Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'],
      href: '/devops-cicd'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions.',
      features: ['Data Visualization', 'ETL Processes', 'Machine Learning', 'Real-time Analytics'],
      href: '/data-analytics-bi'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current infrastructure and identify opportunities for improvement.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy tailored to your business needs and goals.',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with minimal disruption to your business operations.',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure optimal performance.',
      icon: <Wrench className="w-6 h-6" />
    }
  ];

  const technologies = [
    { name: 'AWS', icon: <Cloud className="w-6 h-6" />, category: 'Cloud' },
    { name: 'Azure', icon: <Cloud className="w-6 h-6" />, category: 'Cloud' },
    { name: 'Google Cloud', icon: <Cloud className="w-6 h-6" />, category: 'Cloud' },
    { name: 'Docker', icon: <Layers className="w-6 h-6" />, category: 'DevOps' },
    { name: 'Kubernetes', icon: <Layers className="w-6 h-6" />, category: 'DevOps' },
    { name: 'React', icon: <Code className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Node.js', icon: <Code className="w-6 h-6" />, category: 'Backend' },
    { name: 'Python', icon: <Code className="w-6 h-6" />, category: 'Backend' },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'Redis', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'Terraform', icon: <CircuitBoard className="w-6 h-6" />, category: 'Infrastructure' }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Improved Performance',
      description: 'Optimize your systems for maximum efficiency and speed.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enhanced Security',
      description: 'Protect your data and systems with enterprise-grade security.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Scalability',
      description: 'Scale your infrastructure as your business grows.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: 'Cost Optimization',
      description: 'Reduce operational costs through efficient resource management.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and more. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, DevOps, database management" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Services",
            "description": "Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and more",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "serviceType": "IT Services",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">IT Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT solutions to transform your business infrastructure and drive digital innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for delivering successful IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-cyan-400 font-bold text-lg mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Use</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies and tools for modern IT solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105 text-center"
                >
                  <div className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {tech.icon}
                  </div>
                  <div className="text-white font-medium text-sm">{tech.name}</div>
                  <div className="text-gray-400 text-xs mt-1">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The benefits of partnering with Zion Tech Group for your IT needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT services can optimize your systems and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}