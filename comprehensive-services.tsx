import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Network, 
  Server, 
  BarChart3, 
  Settings, 
  Zap, 
  Monitor, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  Globe,
  Target,
  Rocket,
  Atom
} from 'lucide-react';

export default function ComprehensiveServices() {
  const title = 'Comprehensive AI, IT & Micro SaaS Services — Zion Tech Group';
  const description = 'Complete suite of cutting-edge AI services, comprehensive IT solutions, and innovative micro SaaS platforms. Enterprise-grade solutions with proven ROI and transparent pricing.';

  const serviceCategories = [
    {
      id: 'cutting-edge-ai',
      title: 'Cutting-Edge AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Revolutionary AI solutions pushing the boundaries of technology',
      services: [
        {
          name: 'AI-Powered Autonomous Vehicle Intelligence',
          description: 'Advanced AI systems for autonomous vehicles with real-time decision making',
          price: '$15,000 - $100,000/month',
          marketSize: '$18.4B autonomous vehicle market',
          roi: '99.9% safety improvement over human drivers',
          features: ['Real-time object detection', 'Predictive behavior modeling', 'Emergency response systems']
        },
        {
          name: 'AI-Powered Quantum Computing Solutions',
          description: 'Quantum computing optimization with AI-driven algorithm selection',
          price: '$25,000 - $200,000/month',
          marketSize: '$2.1B quantum computing market',
          roi: '300% improvement in quantum algorithm performance',
          features: ['Quantum algorithm optimization', 'Hybrid computing workflows', 'Error correction systems']
        },
        {
          name: 'AI-Powered Space Mission Optimization',
          description: 'Advanced AI for space exploration and satellite management',
          price: '$50,000 - $500,000/month',
          marketSize: '$4.2B space technology market',
          roi: '50% improvement in mission success rates',
          features: ['Satellite constellation optimization', 'Mission planning', 'Collision avoidance']
        },
        {
          name: 'AI-Powered Brain-Computer Interface',
          description: 'Advanced BCI with AI-driven neural signal processing',
          price: '$40,000 - $300,000/month',
          marketSize: '$1.7B brain-computer interface market',
          roi: '150% improvement in neural signal accuracy',
          features: ['Real-time neural processing', 'Motor control integration', 'Cognitive enhancement']
        },
        {
          name: 'AI-Powered Synthetic Biology Platform',
          description: 'Intelligent synthetic biology with AI-driven protein design',
          price: '$30,000 - $250,000/month',
          marketSize: '$3.2B synthetic biology market',
          roi: '200% improvement in drug discovery efficiency',
          features: ['Protein structure prediction', 'Genetic optimization', 'Drug discovery automation']
        }
      ]
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT Solutions',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      description: 'Comprehensive IT infrastructure and enterprise solutions',
      services: [
        {
          name: 'Quantum-Safe Security Implementation',
          description: 'Future-proof security solutions resistant to quantum attacks',
          price: '$15,000 - $150,000/project',
          marketSize: '$2.8B quantum security market',
          roi: '100% protection against quantum attacks',
          features: ['Quantum-safe cryptography', 'Post-quantum algorithms', 'Security assessment']
        },
        {
          name: 'Neuromorphic Computing Systems',
          description: 'Brain-inspired computing for ultra-efficient AI processing',
          price: '$25,000 - $250,000/project',
          marketSize: '$1.2B neuromorphic computing market',
          roi: '90% reduction in power consumption',
          features: ['Neuromorphic chip integration', 'Spiking neural networks', 'Ultra-low power processing']
        },
        {
          name: 'Satellite Internet & Global Connectivity',
          description: 'Comprehensive satellite internet with global coverage',
          price: '$50,000 - $500,000/project',
          marketSize: '$8.4B satellite internet market',
          roi: '80% improvement in global connectivity',
          features: ['Satellite constellation design', 'Global coverage', 'Low latency communication']
        },
        {
          name: 'Advanced Robotics & Automation',
          description: 'Intelligent robotics with AI-driven automation',
          price: '$20,000 - $200,000/project',
          marketSize: '$23.8B robotics market',
          roi: '65% improvement in manufacturing efficiency',
          features: ['Industrial robot programming', 'Human-robot collaboration', 'Quality control automation']
        },
        {
          name: 'Advanced Materials & Nanotechnology',
          description: 'Cutting-edge materials science with nanotechnology',
          price: '$30,000 - $300,000/project',
          marketSize: '$4.2B nanotechnology market',
          roi: '200% improvement in material performance',
          features: ['Nanomaterial synthesis', 'Smart materials', 'Advanced coatings']
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Innovative Micro SaaS',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      description: 'Cutting-edge micro SaaS solutions for modern businesses',
      services: [
        {
          name: 'AI-Powered Competitive Intelligence Platform',
          description: 'Real-time competitive analysis with automated monitoring',
          price: '$299 - $1,999/month',
          marketSize: '$4.8B competitive intelligence market',
          roi: '45% improvement in strategic decision speed',
          features: ['Automated competitor monitoring', 'Market positioning analysis', 'Strategic recommendations']
        },
        {
          name: 'Smart Contract Lifecycle Management',
          description: 'End-to-end smart contract development and monitoring',
          price: '$499 - $3,999/month',
          marketSize: '$2.3B smart contract market',
          roi: '70% reduction in development time',
          features: ['Visual contract builder', 'Automated testing', 'Gas optimization']
        },
        {
          name: 'AI-Powered Customer Onboarding Automation',
          description: 'Intelligent customer onboarding with personalized journeys',
          price: '$199 - $999/month',
          marketSize: '$3.2B customer onboarding market',
          roi: '60% improvement in customer activation rates',
          features: ['Personalized journeys', 'Automated workflows', 'Progress tracking']
        },
        {
          name: 'Smart Contract Insurance Platform',
          description: 'Automated smart contract insurance with risk assessment',
          price: '$599 - $4,999/month',
          marketSize: '$1.2B DeFi insurance market',
          roi: '90% faster claims processing',
          features: ['Risk assessment', 'Dynamic premiums', 'Instant claims processing']
        },
        {
          name: 'AI-Powered Subscription Analytics',
          description: 'Advanced subscription analytics with churn prediction',
          price: '$299 - $1,999/month',
          marketSize: '$4.2B subscription management market',
          roi: '35% improvement in customer retention',
          features: ['Churn prediction', 'Revenue optimization', 'Customer lifetime value analysis']
        }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      description: 'Next-generation technologies shaping the future',
      services: [
        {
          name: 'AI-Powered Metaverse Development Platform',
          description: 'Comprehensive metaverse creation with AI-driven content',
          price: '$15,000 - $100,000/month',
          marketSize: '$13.8B metaverse market',
          roi: '70% reduction in metaverse development costs',
          features: ['AI-generated 3D environments', 'Intelligent NPCs', 'Virtual economy integration']
        },
        {
          name: 'AI-Powered Climate Change Solutions',
          description: 'Advanced climate modeling and environmental monitoring',
          price: '$20,000 - $150,000/month',
          marketSize: '$1.8B climate tech market',
          roi: '80% improvement in climate prediction accuracy',
          features: ['Climate modeling', 'Carbon tracking', 'Renewable energy optimization']
        },
        {
          name: 'AI-Powered Advanced Materials Discovery',
          description: 'Intelligent materials science with AI-driven discovery',
          price: '$25,000 - $200,000/month',
          marketSize: '$4.2B nanotechnology market',
          roi: '200% improvement in material discovery speed',
          features: ['Material property prediction', 'Synthesis optimization', 'Performance testing']
        },
        {
          name: 'Edge Computing & 5G Infrastructure',
          description: 'Advanced edge computing with 5G integration',
          price: '$8,000 - $75,000/project',
          marketSize: '$15.7B edge computing market',
          roi: '60% improvement in response times',
          features: ['Edge infrastructure design', '5G integration', 'Low-latency processing']
        }
      ]
    }
  ];

  const stats = [
    { label: 'Services Available', value: '100+', icon: Settings },
    { label: 'Market Segments', value: '25+', icon: Target },
    { label: 'Average ROI', value: '300%', icon: TrendingUp },
    { label: 'Delivery Time', value: '2-20 weeks', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, enterprise technology, cutting-edge AI, quantum computing, space technology, brain-computer interface" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Comprehensive Technology Solutions</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Cutting-Edge AI, IT & Micro SaaS Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {description} From quantum computing to brain-computer interfaces, we deliver the most advanced technology solutions with proven ROI and transparent pricing.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                    <Icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>100+ Services</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Enterprise-Grade</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Proven ROI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-12">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                      <p className="text-slate-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, index) => (
                      <div key={index} className="group bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-slate-300 mb-4">{service.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-400">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Price:</span>
                            <span className="font-semibold text-cyan-400">{service.price}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Market:</span>
                            <span className="text-slate-300">{service.marketSize}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">ROI:</span>
                            <span className="font-semibold text-green-400">{service.roi}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <a 
                            href="/contact"
                            className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Get a custom solution proposal tailored to your specific needs. Our team of experts is ready to help you implement cutting-edge technology solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Response</h3>
                <p className="text-sm text-slate-300">Get a detailed proposal within 24-48 hours of your inquiry</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Transparent Pricing</h3>
                <p className="text-sm text-slate-300">Clear, upfront pricing with no hidden fees or surprises</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-sm text-slate-300">24/7 support from industry-leading technology experts</p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-sm text-slate-400 space-y-2">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">https://ziontechgroup.com</a></p>
                <p className="text-xs text-slate-500">Available 24/7 for enterprise clients • Free consultation for projects over $10K</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}