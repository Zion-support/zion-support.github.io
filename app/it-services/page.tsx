'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: [
        'Cloud migration and setup',
        'Infrastructure as Code',
        'Auto-scaling solutions',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: 'Starting at $3,000',
      features: [
        'Security assessment',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Staff training'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built to scale',
      price: 'Starting at $8,000',
      features: [
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Maintenance support',
        'Mobile optimization',
        'Cross-browser compatibility'
      ],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration',
      price: 'Starting at $4,000',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'API documentation',
        'Rate limiting',
        'Authentication',
        'Performance monitoring'
      ],
      icon: LinkIcon,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance',
      price: 'Starting at $2,500',
      features: [
        'Database design',
        'Performance optimization',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        '24/7 monitoring'
      ],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      price: 'Starting at $6,000',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring and logging',
        'Security scanning',
        'Performance optimization'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      category: 'DevOps'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      price: 'Starting at $1,500/month',
      features: [
        '24/7 technical support',
        'Remote monitoring',
        'Preventive maintenance',
        'Hardware support',
        'Software updates',
        'User training'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      category: 'Support'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'DevOps', 'Support'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                IT Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  & Solutions
=======
      <Helmet />
        <title   />IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta const name = "description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps. Transform your business with our expert IT solutions." / / />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900-via-cyan-900to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hiddenpt-20-pb-16" />
          <div className="absoluteinset-0-opacity-20" / />
          <div className="relative max-w-7 xl mx-auto px-4-sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                IT Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400-bg-clip-texttext-transparent"  />& Solutions
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive IT services to build, secure, and optimize your technology infrastructure. 
                From cloud migration to cybersecurity, we have the expertise you need.
              </p>
<<<<<<< HEAD
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
=======
              <div className="{`flex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700  hover:to-blue-700 transition-all duration-300 transform hover:scale-105-shadow-lghover:shadow-xl" />
                  Get Started Today
                  <ArrowRight className="ml-2-h-5w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300-transformhover:scale-105" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
<<<<<<< HEAD
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
=======
        <section className="py-8-bg-gray-900/50" />
          <div className="max-w-7 xl mx-auto px-4-sm:px-6 lg:px-8">
            <div className="flex flex-wrapjustify-centergap-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500"
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
=======
        <section className="py-16" />
          <div className="max-w-7 xl mx-auto px-4-sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3-xl:grid-cols-4gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key="{index}"
                  className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 borderborder-gray-700-hover:border-cyan-500" />
                  <div className="text-center mb-6">
                    <div className="{`inline-flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`} />
                      <service.icon className="h-8-w-8text-white" / />
                    </div>
                    <h3 className="text-xl font-boldtext-white mb-2"   />{service.title}</h3>
                    <p className="text-gray-300-text-smmb-4" />{service.description}</p>
                    <div className="text-2 xl font-boldtext-cyan-400-mb-4"   />{service.price}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
<<<<<<< HEAD
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
=======
                      <div key="{idx}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="h-4 w-4 text-green-400-mr-3flex-shrink-0" / />
                        <span   />{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
<<<<<<< HEAD
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
=======
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700  hover:to-blue-700 transition-all duration-300-transformhover:scale-105" />
                      Get Quote
                      <ArrowRight className="ml-2-h-4w-4" />
                    </Link>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-whitetransition-all duration-300">Learn More
                            </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-br from-gray-900 to-cyan-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our expert team help you build, secure, and optimize your technology infrastructure 
              for maximum performance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
=======
        <section className="py-20 bg-gradient-to-brfrom-gray-900-to-cyan-900" />
          <div className="max-w-7 xl mx-auto px-4 sm:px-6-lg:px-8 text-center">
            <h2 className="text-3 xl md:text-4 xl font-boldtext-white mb-4"  />Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3-xlmx-auto" />
              Let our expert team help you build, secure, and optimize your technology infrastructure 
              for maximum performance and security.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4-justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700  hover:to-blue-700 transition-all duration-300 transform hover:scale-105-shadow-lghover:shadow-xl" />
                Get Started Today
                <ArrowRight className="ml-2-h-5w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300-transformhover:scale-105" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8-text-gray-400">
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-boldtext-white mb-6" />
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400-bg-clip-texttext-transparent"   />IT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
                End-to-end IT services designed to modernize your infrastructure and accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-3gap-8">
              {services.map((service, index) => (
                <div 
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8-h-8text-white" / />
                  </div>
                  
                  <h3 className="text-2 xl font-bold text-white mb-4-group-hover:text-cyan-400transition-colors"  />{service.title}
                  </h3>
                  
                  <p className="text-gray-300-mb-6leading-relaxed" />
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6" />
                    {service.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400-mr-2flex-shrink-0" / />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-centerjustify-between mb-6">
                    <span className="text-2 xlfont-boldtext-cyan-400"   />{service.price}</span>
                    <Link to="{service.link}" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1-inline-flex items-center" />
                      Learn More <ArrowRight className="w-4-h-4ml-1" />
                            </Link>
      </div>
    </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-rfrom-slate-800/30-to-slate-900/30" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-boldtext-white mb-6" />
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400-bg-clip-texttext-transparent"   />Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
                A proven methodology that ensures successful project delivery and maximum value for your investment
              </p>
            </div>

            <div className="grid grid-cols-1-md:grid-cols-5gap-8">
              {process.map((step, index) => (
                <div key="{index}" className="text-centergroup" />
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110-transition-transformduration-300">
                    <span className="text-2 xlfont-boldtext-cyan-400"   />{step.step}</span>
                  </div>
                  <h3 className="text-xl font-boldtext-white mb-4"   />{step.title}</h3>
                  <p className="text-gray-300-text-smleading-relaxed" />{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-boldtext-white mb-6" />
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400-bg-clip-texttext-transparent"   />Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
                We deliver exceptional IT solutions through expertise, innovation, and unwavering commitment to your success
              </p>
            </div>

            <div className="grid grid-cols-1-md:grid-cols-3gap-8">
              <div className="text-centergroup">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110-transition-transformduration-300">
                  <Zap className="w-10-h-10text-cyan-400" / />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"   />Rapid Deployment</h3>
                <p className="text-gray-300-leading-relaxed" />
                  Fast implementation with minimal downtime. We get your solutions up and running quickly.
                </p>
              </div>

              <div className="text-centergroup">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110-transition-transformduration-300">
                  <Users className="w-10-h-10text-purple-400" / />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"   />Expert Team</h3>
                <p className="text-gray-300-leading-relaxed" />
                  Certified professionals with years of experience in enterprise IT solutions and cloud technologies.
                </p>
              </div>

              <div className="text-centergroup">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110-transition-transformduration-300">
                  <Award className="w-10-h-10text-green-400" / />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"   />Proven Results</h3>
                <p className="text-gray-300-leading-relaxed" />
                  Track record of successful projects with measurable business impact and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12 text-center">
              <h2 className="text-4 xl font-boldtext-white mb-6"  />Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2-xlmx-auto" />
                Let's discuss your IT needs and create a customized solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300-transformhover:scale-105">Start Your Project
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300-transformhover:scale-105">Learn More About Us
                        </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;