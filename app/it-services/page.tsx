'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Server, Shield, Cloud, Database, Code, Smartphone, 
  Settings, BarChart, Users, Clock, CheckCircle, ArrowRight, 
  Star, Award, TrendingUp, Zap, Globe, Lock, Wifi, 
  Monitor, Package, Cpu, Network, FileText, MessageSquare
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Infrastructure & Migration',
      description: 'Seamless cloud migration and infrastructure management across AWS, Azure, and Google Cloud.',
      price: 'Starting at $2,999/month',
      features: ['Zero-downtime migration', 'Cost optimization', '24/7 monitoring', 'Auto-scaling'],
      benefits: ['40% cost reduction', '99.9% uptime', 'Unlimited scalability', 'Enhanced security'],
      link: '/cloud-infrastructure',
      category: 'cloud'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and ensure compliance.',
      price: 'Starting at $1,999/month',
      features: ['Threat detection', 'Vulnerability assessment', 'Security audits', 'Incident response'],
      benefits: ['99.8% threat detection', '50% faster response', 'Zero breaches', 'Compliance ready'],
      link: '/cybersecurity-solutions',
      category: 'security'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      price: 'Starting at $3,999',
      features: ['React, Next.js, Vue.js', 'Mobile-first design', 'SEO optimization', 'Performance tuning'],
      benefits: ['50% faster loading', 'Mobile responsive', 'SEO optimized', 'Scalable architecture'],
      link: '/web-development',
      category: 'development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      price: 'Starting at $5,999',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'App store optimization', 'Push notifications'],
      benefits: ['Native performance', 'Faster development', 'Single codebase', 'App store ready'],
      link: '/mobile-development',
      category: 'development'
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with modern DevOps practices and automation.',
      price: 'Starting at $2,499/month',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Automated testing'],
      benefits: ['75% faster deployment', '90% error reduction', 'Automated scaling', 'Continuous delivery'],
      link: '/devops-cicd',
      category: 'devops'
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services for all major databases.',
      price: 'Starting at $1,499/month',
      features: ['Performance optimization', 'Data backup & recovery', 'Security hardening', 'Query optimization'],
      benefits: ['60% performance boost', 'Zero data loss', 'Enhanced security', '24/7 monitoring'],
      link: '/database-management',
      category: 'data'
    },
    {
      icon: <BarChart className="w-8 h-8 text-pink-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      price: 'Starting at $2,299/month',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Custom reports'],
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom dashboards', 'ROI tracking'],
      link: '/data-analytics-bi',
      category: 'data'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-400" />,
      title: 'Network Infrastructure',
      description: 'Robust network solutions for reliable connectivity, security, and performance.',
      price: 'Starting at $1,799/month',
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Disaster recovery'],
      benefits: ['99.9% uptime', 'Enhanced security', 'Faster speeds', 'Scalable infrastructure'],
      link: '/network-infrastructure',
      category: 'infrastructure'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: <Server className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud Services', icon: <Cloud className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'development', name: 'Development', icon: <Code className="w-5 h-5" /> },
    { id: 'devops', name: 'DevOps', icon: <Settings className="w-5 h-5" /> },
    { id: 'data', name: 'Data & Analytics', icon: <BarChart className="w-5 h-5" /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Network className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Server className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '150+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-purple-400" /> }
  ];

  const technologies = [
    { name: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Vultr'] },
    { name: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust'] },
    { name: 'Frameworks', items: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Django'] },
    { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'DynamoDB'] },
    { name: 'DevOps Tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible'] },
    { name: 'Security Tools', items: ['OWASP', 'Nessus', 'Burp Suite', 'Wireshark', 'Splunk', 'CrowdStrike'] }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan with timelines and milestones.',
      icon: <FileText className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the optimal solution architecture for your specific needs and requirements.',
      icon: <Settings className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and thoroughly test your solution using industry best practices and methodologies.',
      icon: <Code className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance, monitoring, and support.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    }
  ];

  const filteredServices = activeTab === 'overview' 
    ? itServices 
    : itServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including web development, cloud migration, cybersecurity, DevOps, and infrastructure management. Trusted by businesses worldwide." />
        <meta name="keywords" content="IT services, web development, cloud migration, cybersecurity, DevOps, database management, network infrastructure, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Services",
            "description": "Comprehensive technology solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "1499",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-400/30">
              <Server className="w-4 h-4" />
              <span>Professional IT Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              From web development to cloud migration, we provide end-to-end IT solutions 
              that drive business growth and digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Tabs */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to modernize your infrastructure
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg shadow-emerald-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="text-emerald-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Business Benefits:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies We <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Master</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest and most reliable technologies in the industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-6">{tech.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {tech.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 px-4 py-2 rounded-lg text-sm font-medium border border-emerald-400/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful IT project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-emerald-400 font-bold text-lg mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT services can help modernize your infrastructure and accelerate your digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View All Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;