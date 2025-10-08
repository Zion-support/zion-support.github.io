import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink, Play, Phone, Mail, MapPin, Award, Target, BarChart3, Lightbulb, Rocket, DollarSign } from 'lucide-react';
import '../styles/futuristic.css';

const ServicesAdvertisingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);

  // Comprehensive Service Categories with Real Pricing and Features
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning Services',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      icon: '🤖',
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000-8,000/month',
      features: [
        'Custom AI model development',
        'Natural Language Processing (NLP)',
        'Computer Vision solutions',
        'Predictive Analytics',
        'Chatbot and virtual assistants',
        'Recommendation engines',
        'Fraud detection systems',
        'Process automation with AI'
      ],
      benefits: [
        'Increase efficiency by 300%',
        'Reduce operational costs by 50%',
        'Improve decision making accuracy by 95%',
        'Automate 80% of repetitive tasks'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'AWS SageMaker', 'Azure ML'],
      caseStudies: [
        {
          client: 'Fortune 500 Retailer',
          result: 'Increased sales by 40% with AI-powered recommendation engine',
          savings: '$2.5M annually'
        },
        {
          client: 'Financial Services Company',
          result: 'Reduced fraud by 90% with machine learning detection',
          savings: '$5M in prevented losses'
        }
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          company: 'TechCorp Inc',
          role: 'CTO',
          quote: 'Zion Tech Group\'s AI solutions transformed our operations. ROI of 400% in just 6 months.',
          rating: 5
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Infrastructure & Cloud Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management.',
      icon: '⚙️',
      price: 'Starting at $1,200/month',
      marketPrice: '$2,500-6,000/month',
      features: [
        'Cloud migration and optimization',
        'Cybersecurity implementation',
        'DevOps and CI/CD pipelines',
        'Database administration',
        'Network infrastructure design',
        'Disaster recovery planning',
        '24/7 monitoring and support',
        'Compliance management (SOC2, GDPR)'
      ],
      benefits: [
        'Reduce IT costs by 40%',
        'Improve system reliability by 99.9%',
        'Enhance security posture by 95%',
        'Accelerate deployment by 300%'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      caseStudies: [
        {
          client: 'Healthcare Provider',
          result: 'Achieved 99.99% uptime with cloud infrastructure',
          savings: '$1.8M in operational costs'
        },
        {
          client: 'E-commerce Platform',
          result: 'Handled 10x traffic increase during peak season',
          savings: '$3.2M in potential lost revenue'
        }
      ],
      testimonials: [
        {
          name: 'Michael Chen',
          company: 'HealthTech Solutions',
          role: 'IT Director',
          quote: 'Their cloud migration saved us $1.8M annually while improving performance.',
          rating: 5
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
      icon: '⚛️',
      price: 'Custom Pricing',
      marketPrice: '$50,000-500,000/project',
      features: [
        'Quantum algorithm development',
        'Quantum machine learning',
        'Cryptography and security',
        'Optimization problems solving',
        'Quantum simulation',
        'Quantum annealing',
        'Research and development',
        'Quantum software development'
      ],
      benefits: [
        'Solve problems 1000x faster',
        'Breakthrough in optimization',
        'Revolutionary security solutions',
        'Future-proof technology'
      ],
      technologies: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Rigetti Forest', 'D-Wave'],
      caseStudies: [
        {
          client: 'Pharmaceutical Company',
          result: 'Discovered new drug compounds 100x faster',
          savings: '$50M in R&D costs'
        },
        {
          client: 'Logistics Company',
          result: 'Optimized delivery routes saving 30% fuel costs',
          savings: '$15M annually'
        }
      ],
      testimonials: [
        {
          name: 'Dr. Emily Rodriguez',
          company: 'Quantum Research Lab',
          role: 'Research Director',
          quote: 'Their quantum solutions opened new possibilities we never imagined.',
          rating: 5
        }
      ]
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems & Robotics',
      description: 'Self-managing and self-optimizing systems for enterprise operations and infrastructure.',
      icon: '🔄',
      price: 'Starting at $2,500/month',
      marketPrice: '$5,000-15,000/month',
      features: [
        'Self-healing infrastructure',
        'Automated operations management',
        'Intelligent monitoring systems',
        'Adaptive learning algorithms',
        'Robotic process automation (RPA)',
        'Autonomous decision making',
        'Predictive maintenance',
        'Smart resource allocation'
      ],
      benefits: [
        'Reduce manual intervention by 90%',
        'Improve system reliability by 99.5%',
        'Lower operational costs by 60%',
        'Enable 24/7 autonomous operations'
      ],
      technologies: ['ROS', 'TensorFlow', 'OpenCV', 'Gazebo', 'Custom AI Models'],
      caseStudies: [
        {
          client: 'Manufacturing Plant',
          result: 'Achieved 99.5% uptime with autonomous systems',
          savings: '$4.2M in downtime costs'
        },
        {
          client: 'Data Center',
          result: 'Reduced energy consumption by 40% with smart cooling',
          savings: '$2.8M annually'
        }
      ],
      testimonials: [
        {
          name: 'James Wilson',
          company: 'Industrial Solutions',
          role: 'Operations Manager',
          quote: 'Our systems now run themselves. Unprecedented efficiency gains.',
          rating: 5
        }
      ]
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3 Solutions',
      description: 'Decentralized applications, smart contracts, and Web3 solutions for the future of the internet.',
      icon: '🔗',
      price: 'Starting at $8,000/project',
      marketPrice: '$15,000-100,000/project',
      features: [
        'Smart contract development',
        'DeFi protocol creation',
        'NFT marketplace development',
        'Web3 application development',
        'Blockchain integration',
        'Cryptocurrency solutions',
        'Decentralized identity',
        'Cross-chain interoperability'
      ],
      benefits: [
        'Enable decentralized operations',
        'Reduce transaction costs by 80%',
        'Increase transparency and trust',
        'Create new revenue streams'
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Polygon', 'Binance Smart Chain'],
      caseStudies: [
        {
          client: 'Financial Services',
          result: 'Created DeFi protocol with $100M TVL',
          savings: '$20M in transaction fees'
        },
        {
          client: 'Gaming Company',
          result: 'Launched NFT marketplace with 1M+ users',
          savings: '$50M in new revenue'
        }
      ],
      testimonials: [
        {
          name: 'Alex Thompson',
          company: 'Crypto Ventures',
          role: 'CEO',
          quote: 'Their blockchain solutions gave us first-mover advantage in the market.',
          rating: 5
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance.',
      icon: '🛡️',
      price: 'Starting at $2,500/month',
      marketPrice: '$5,000-20,000/month',
      features: [
        'Threat detection and prevention',
        'Penetration testing',
        'Zero Trust security architecture',
        'SOC services (24/7 monitoring)',
        'Incident response planning',
        'Compliance management (SOC2, ISO27001)',
        'Security awareness training',
        'Vulnerability assessments'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 95%',
        'Ensure compliance with regulations',
        'Protect brand reputation'
      ],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'CrowdStrike', 'Splunk'],
      caseStudies: [
        {
          client: 'Government Agency',
          result: 'Prevented 1000+ cyber attacks monthly',
          savings: '$50M in potential damages'
        },
        {
          client: 'Healthcare Provider',
          result: 'Achieved HIPAA compliance with zero violations',
          savings: '$10M in potential fines'
        }
      ],
      testimonials: [
        {
          name: 'Lisa Martinez',
          company: 'SecureCorp',
          role: 'CISO',
          quote: 'Their security solutions protected us from sophisticated attacks.',
          rating: 5
        }
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,500/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI implementation',
        'Cloud migration support',
        'Monthly security review',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI solutions',
        'Full cloud infrastructure',
        '24/7 security monitoring',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Monthly strategy sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      description: 'For large organizations',
      features: [
        'Complete digital transformation',
        'Quantum computing solutions',
        'Dedicated security team',
        '24/7 phone support',
        'Custom development',
        'On-site consulting',
        'Executive reporting',
        'Unlimited integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { label: 'Clients Served', value: '500+', icon: Users },
    { label: 'Projects Completed', value: '1,200+', icon: Target },
    { label: 'Cost Savings Delivered', value: '$50M+', icon: DollarSign },
    { label: 'Success Rate', value: '99.5%', icon: Award }
  ];

  return (
    <div className="min-h-screen futuristic-theme">
      <Helmet>
        <title>Professional IT & AI Services - Zion Tech Group</title>
        <meta name="description" content="Leading provider of AI, IT, and technology solutions. Transform your business with our proven strategies delivering $50M+ annual savings and 95% process automation." />
        <meta name="keywords" content="AI services, IT solutions, digital transformation, cloud services, cybersecurity, quantum computing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="cyber-grid absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 holographic">
            Professional IT & AI Services
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300 max-w-5xl mx-auto">
            Transform your business with cutting-edge technology solutions. 
            <span className="neon-text-green"> $50M+ annual savings</span> and 
            <span className="neon-text-purple"> 95% process automation</span> guaranteed.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="futuristic-card text-center group">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-neon-blue group-hover:neon-text transition-all" />
                <div className="text-3xl font-bold neon-text mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button text-lg px-8 py-4">
              <Rocket className="w-6 h-6 mr-2" />
              Get Free Consultation
            </button>
            <button className="glass-card px-8 py-4 text-white border border-white/20 hover:border-neon-blue transition-all text-lg">
              <Play className="w-6 h-6 mr-2" />
              Watch Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((service) => (
              <div key={service.id} className="futuristic-card group">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold neon-text-green">{service.price}</div>
                    <div className="text-sm text-gray-400">vs {service.marketPrice}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-text transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-neon-blue mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-neon-purple mb-3">Proven Benefits:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="text-sm bg-neon-blue/20 text-neon-blue px-3 py-2 rounded">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Studies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-neon-pink mb-3">Success Stories:</h4>
                  <div className="space-y-2">
                    {service.caseStudies.map((study, index) => (
                      <div key={index} className="text-sm bg-dark-surface-2 p-3 rounded">
                        <div className="font-semibold text-white">{study.client}</div>
                        <div className="text-gray-300">{study.result}</div>
                        <div className="text-neon-green font-semibold">Savings: {study.savings}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 neon-button">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="glass-card px-4 py-2 text-white hover:border-neon-green transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`futuristic-card relative ${tier.popular ? 'ring-2 ring-neon-blue' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-neon-blue text-dark-bg px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold neon-text-green mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.popular 
                    ? 'neon-button' 
                    : 'glass-card text-white hover:border-neon-blue'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Why Choose Zion Tech Group?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="futuristic-card text-center group">
              <div className="text-5xl mb-4 group-hover:neon-text transition-all">🏆</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300 text-sm">
                $50M+ in cost savings delivered to clients with 99.5% success rate
              </p>
            </div>

            <div className="futuristic-card text-center group">
              <div className="text-5xl mb-4 group-hover:neon-text transition-all">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Implementation</h3>
              <p className="text-gray-300 text-sm">
                Deploy solutions in weeks, not months with our proven methodologies
              </p>
            </div>

            <div className="futuristic-card text-center group">
              <div className="text-5xl mb-4 group-hover:neon-text transition-all">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security and compliance for your critical business data
              </p>
            </div>

            <div className="futuristic-card text-center group">
              <div className="text-5xl mb-4 group-hover:neon-text transition-all">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Global Support</h3>
              <p className="text-gray-300 text-sm">
                24/7 support across all time zones with dedicated account managers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ companies already using our technology solutions. 
            Get your free consultation and custom proposal today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="futuristic-card text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-neon-blue" />
              <div className="font-semibold text-white mb-1">Call Us</div>
              <div className="text-gray-300 text-sm">+1 302 464 0950</div>
            </div>
            <div className="futuristic-card text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-neon-purple" />
              <div className="font-semibold text-white mb-1">Email Us</div>
              <div className="text-gray-300 text-sm">kleber@ziontechgroup.com</div>
            </div>
            <div className="futuristic-card text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-neon-green" />
              <div className="font-semibold text-white mb-1">Visit Us</div>
              <div className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="neon-button text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call Now for Free Consultation
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="glass-card px-8 py-4 text-white border border-white/20 hover:border-neon-blue transition-all text-lg inline-flex items-center justify-center"
            >
              <Mail className="w-6 h-6 mr-2" />
              Get Custom Proposal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAdvertisingPage;