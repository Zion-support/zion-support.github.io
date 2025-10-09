'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Users, Award, Globe, Lock, CheckCircle, ArrowRight, Brain, Cloud, Zap, Target, BarChart, Phone, Mail, MapPin, Clock, Star, TrendingUp, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 Type II compliance, end-to-end encryption, and 24/7 monitoring',
      features: ['SOC 2 Type II Certified', 'End-to-end encryption', '24/7 security monitoring', 'Multi-factor authentication']
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Dedicated account managers and 24/7 technical support for enterprise clients',
      features: ['Dedicated account manager', '24/7 technical support', 'Priority response times', 'Custom training programs']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide deployment capabilities with local data centers and compliance',
      features: ['Global data centers', 'Local compliance', 'Multi-region deployment', 'Disaster recovery']
    },
    {
      icon: Award,
      title: 'SLA Guarantees',
      description: '99.99% uptime guarantee with comprehensive service level agreements',
      features: ['99.99% uptime SLA', 'Performance guarantees', 'Financial penalties', 'Regular reporting']
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: ['AI-powered diagnostics', 'Medical imaging analysis', 'Drug discovery', 'Patient monitoring'],
      benefits: ['Improved patient outcomes', 'Reduced diagnostic time', 'Cost savings', 'Enhanced accuracy']
    },
    {
      industry: 'Financial Services',
      icon: BarChart,
      solutions: ['Fraud detection', 'Risk assessment', 'Algorithmic trading', 'Credit scoring'],
      benefits: ['Reduced fraud losses', 'Better risk management', 'Increased efficiency', 'Regulatory compliance']
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      solutions: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation'],
      benefits: ['Reduced downtime', 'Improved quality', 'Cost optimization', 'Increased productivity']
    },
    {
      industry: 'Retail',
      icon: ShoppingCart,
      solutions: ['Demand forecasting', 'Inventory optimization', 'Customer analytics', 'Personalization'],
      benefits: ['Reduced waste', 'Better customer experience', 'Increased sales', 'Optimized inventory']
    },
    {
      industry: 'Transportation',
      icon: Car,
      solutions: ['Route optimization', 'Fleet management', 'Predictive maintenance', 'Autonomous systems'],
      benefits: ['Reduced fuel costs', 'Improved safety', 'Better efficiency', 'Lower maintenance costs']
    },
    {
      industry: 'Education',
      icon: GraduationCap,
      solutions: ['Personalized learning', 'Student analytics', 'Content generation', 'Assessment automation'],
      benefits: ['Improved learning outcomes', 'Personalized education', 'Reduced administrative burden', 'Better engagement']
    }
  ];

  const enterpriseServices = [
    {
      category: 'AI Solutions',
      icon: Brain,
      services: [
        { name: 'Custom AI Models', description: 'Tailored AI solutions for your specific needs', price: 'Custom' },
        { name: 'Machine Learning Platform', description: 'Complete ML infrastructure and tools', price: 'From $50K/month' },
        { name: 'Natural Language Processing', description: 'Advanced text analysis and generation', price: 'From $25K/month' },
        { name: 'Computer Vision', description: 'Image and video analysis solutions', price: 'From $30K/month' }
      ]
    },
    {
      category: 'IT Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', description: 'Seamless migration to cloud infrastructure', price: 'From $100K' },
        { name: 'DevOps & CI/CD', description: 'Automated deployment and operations', price: 'From $75K/month' },
        { name: 'Cybersecurity Suite', description: 'Comprehensive security solutions', price: 'From $40K/month' },
        { name: 'Data Management', description: 'Enterprise data warehousing and analytics', price: 'From $60K/month' }
      ]
    },
    {
      category: 'Consulting',
      icon: Briefcase,
      services: [
        { name: 'Digital Transformation', description: 'Complete business transformation strategy', price: 'From $150K' },
        { name: 'AI Strategy', description: 'AI implementation roadmap and planning', price: 'From $75K' },
        { name: 'Technology Assessment', description: 'Comprehensive technology evaluation', price: 'From $50K' },
        { name: 'Change Management', description: 'Organizational change and training', price: 'From $100K' }
      ]
    }
  ];

  const caseStudies = [
    {
      company: 'Fortune 500 Healthcare',
      industry: 'Healthcare',
      challenge: 'Reduce diagnostic time and improve accuracy',
      solution: 'AI-powered medical imaging analysis',
      results: ['40% faster diagnostics', '25% improvement in accuracy', '$2M annual savings', '99.9% uptime']
    },
    {
      company: 'Global Financial Institution',
      industry: 'Financial Services',
      challenge: 'Detect and prevent fraud in real-time',
      solution: 'Advanced fraud detection AI system',
      results: ['60% reduction in fraud losses', 'Real-time detection', '99.5% accuracy', '$5M annual savings']
    },
    {
      company: 'Manufacturing Giant',
      industry: 'Manufacturing',
      challenge: 'Optimize production and reduce downtime',
      solution: 'Predictive maintenance and process optimization',
      results: ['30% reduction in downtime', '20% increase in productivity', '$3M annual savings', '50% fewer defects']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group | AI & IT for Large Organizations</title>
        <meta name="description" content="Enterprise-grade AI and IT solutions for large organizations. Custom implementations, dedicated support, and global deployment capabilities." />
        <meta name="keywords" content="enterprise AI, enterprise IT, large organization solutions, custom AI, enterprise support, global deployment" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              AI & IT Solutions for Large Organizations
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your enterprise with our comprehensive AI and IT solutions. 
              Custom implementations, dedicated support, and global deployment capabilities 
              designed for large organizations.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Enterprise Clients</div>
              </div>
              <div className="cyber-card hologram-card p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
                <div className="text-sm text-gray-300">Uptime SLA</div>
              </div>
              <div className="cyber-card hologram-card p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
              <div className="cyber-card hologram-card p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Request Enterprise Demo
              </a>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Enterprise Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-12 h-12 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <industry.icon className="w-10 h-10 text-cyan-400 mr-4" />
                  <h3 className="text-xl font-bold text-white">{industry.industry}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solutions</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-gray-300">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Services */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Enterprise Services
          </h2>
          
          <div className="space-y-12">
            {enterpriseServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="w-12 h-12 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-colors">
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-400 font-medium">{service.price}</span>
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Enterprise Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                  <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Process */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Implementation Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Discovery</h3>
              <p className="text-gray-300 text-sm">Comprehensive assessment of your needs and current infrastructure</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Strategy</h3>
              <p className="text-gray-300 text-sm">Custom solution design and implementation roadmap</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm">Phased deployment with dedicated project management</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Support</h3>
              <p className="text-gray-300 text-sm">Ongoing support, monitoring, and optimization</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
            <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Contact our enterprise team to discuss your specific needs and discover how our 
              AI and IT solutions can drive transformation in your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-cyan-400 font-medium">enterprise@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-cyan-400 font-medium">Middletown, DE</p>
                <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnterprisePage;