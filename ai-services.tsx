// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageSquare, 
  FileText, 
  Users, 
  CheckCircle, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  Network
} from 'lucide-react';

export default function AIServices() {
  const title = 'AI Services — Zion Tech Group';
  const description = 'Cutting-edge AI solutions including autonomous systems, machine learning, natural language processing, and intelligent automation with proven ROI. Enterprise-grade AI services with transparent pricing and fast delivery.';

  const aiServices = [
    {
      title: 'AI-Powered Email Responder',
      description: 'Automated email responses with sentiment analysis and intelligent categorization',
      icon: MessageSquare,
      features: [
        'Smart email categorization and prioritization',
        'Automated response generation with personalization',
        'Sentiment analysis and escalation triggers',
        'Integration with CRM and helpdesk systems',
        'Multi-language support and compliance',
        'Real-time performance analytics'
      ],
      pricing: '$2,500 - $8,000/month',
      delivery: '2-3 weeks',
      category: 'Communication AI',
      benefits: [
        '80% reduction in response time',
        '95% customer satisfaction improvement',
        '60% cost savings on support staff',
        '24/7 automated customer service'
      ],
      useCases: ['Customer support', 'Sales teams', 'Helpdesk operations', 'E-commerce platforms'],
      marketSize: '$8.6B conversational AI market'
    },
    {
      title: 'AI Content Creation Suite',
      description: 'Comprehensive AI-powered content generation for marketing, social media, and documentation',
      icon: FileText,
      features: [
        'Automated blog posts and articles',
        'Social media content generation',
        'Product descriptions and marketing copy',
        'Technical documentation creation',
        'SEO-optimized content with keyword integration',
        'Multi-brand voice consistency'
      ],
      pricing: '$1,500 - $5,000/month',
      delivery: '1-2 weeks',
      category: 'Content AI',
      benefits: [
        '10x faster content creation',
        '40% improvement in engagement rates',
        '50% reduction in content costs',
        'Consistent brand messaging'
      ],
      useCases: ['Marketing agencies', 'E-commerce brands', 'SaaS companies', 'Content creators'],
      marketSize: '$8.2B content marketing market'
    },
    {
      title: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and processing for business automation',
      icon: FileText,
      features: [
        'Automated data extraction from PDFs and forms',
        'Document classification and routing',
        'OCR with 99%+ accuracy',
        'Contract analysis and risk assessment',
        'Compliance monitoring and reporting',
        'Workflow automation and approval processes'
      ],
      pricing: '$3,000 - $12,000/month',
      delivery: '3-4 weeks',
      category: 'Document AI',
      benefits: [
        '90% reduction in manual processing',
        '99.5% accuracy in data extraction',
        '75% faster document processing',
        'Automated compliance reporting'
      ],
      useCases: ['Legal firms', 'Insurance companies', 'Healthcare providers', 'Financial services'],
      marketSize: '$12.4B document management market'
    },
    {
      title: 'AI-Powered Talent Matching',
      description: 'Advanced recruitment platform with AI-driven candidate screening and matching',
      icon: Users,
      features: [
        'Intelligent candidate screening and ranking',
        'Skills matching and gap analysis',
        'Automated interview scheduling',
        'Cultural fit assessment',
        'Predictive hiring analytics',
        'Diversity and inclusion metrics'
      ],
      pricing: '$4,000 - $15,000/month',
      delivery: '4-6 weeks',
      category: 'HR AI',
      benefits: [
        '50% reduction in time-to-hire',
        '85% improvement in candidate quality',
        '40% reduction in recruitment costs',
        'Data-driven hiring decisions'
      ],
      useCases: ['HR departments', 'Recruitment agencies', 'Tech companies', 'Enterprise organizations'],
      marketSize: '$15.8B talent acquisition market'
    },
    {
      title: 'AI Business Intelligence Platform',
      description: 'Advanced analytics and predictive insights for data-driven decision making',
      icon: BarChart3,
      features: [
        'Real-time data visualization and dashboards',
        'Predictive analytics and forecasting',
        'Natural language query interface',
        'Automated report generation',
        'Anomaly detection and alerts',
        'Multi-source data integration'
      ],
      pricing: '$5,000 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'Business Intelligence',
      benefits: [
        '300% faster decision making',
        '25% increase in revenue through insights',
        '90% reduction in report generation time',
        'Proactive business optimization'
      ],
      useCases: ['C-level executives', 'Data analysts', 'Business managers', 'Operations teams'],
      marketSize: '$33.3B business intelligence market'
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and automated security response system',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Automated incident response workflows',
        'Behavioral analytics and anomaly detection',
        'Vulnerability assessment and patching',
        'Compliance monitoring and reporting',
        'Security orchestration and automation'
      ],
      pricing: '$6,000 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Cybersecurity AI',
      benefits: [
        '99.9% threat detection accuracy',
        '80% faster incident response',
        '60% reduction in security breaches',
        'Automated compliance management'
      ],
      useCases: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Enterprise companies'],
      marketSize: '$366.1B cybersecurity market'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and inventory optimization',
      icon: Network,
      features: [
        'Demand forecasting with 95% accuracy',
        'Automated inventory optimization',
        'Supplier risk assessment and monitoring',
        'Route optimization and logistics planning',
        'Real-time supply chain visibility',
        'Sustainability and carbon footprint tracking'
      ],
      pricing: '$3,500 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'Supply Chain AI',
      benefits: [
        '25% reduction in inventory costs',
        '40% improvement in delivery times',
        '30% reduction in supply chain risks',
        'Automated supplier relationship management'
      ],
      useCases: ['Manufacturing companies', 'Retail chains', 'Logistics providers', 'E-commerce platforms'],
      marketSize: '$37.4B supply chain management market'
    },
    {
      title: 'AI-Powered Financial Risk Management',
      description: 'Advanced financial risk assessment and portfolio optimization with real-time monitoring',
      icon: BarChart3,
      features: [
        'Real-time credit risk assessment',
        'Portfolio optimization algorithms',
        'Market volatility prediction',
        'Regulatory compliance monitoring',
        'Fraud detection and prevention',
        'Automated risk reporting and alerts'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-10 weeks',
      category: 'Financial AI',
      benefits: [
        '35% reduction in credit losses',
        '20% improvement in portfolio returns',
        '90% faster risk assessment',
        'Automated regulatory compliance'
      ],
      useCases: ['Banks', 'Investment firms', 'Insurance companies', 'Fintech startups'],
      marketSize: '$28.5B financial risk management market'
    },
    {
      title: 'AI-Powered Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance with AI-powered insights',
      icon: Shield,
      features: [
        'Medical image analysis (X-ray, MRI, CT scans)',
        'Symptom analysis and preliminary diagnosis',
        'Drug interaction checking',
        'Patient risk stratification',
        'Treatment recommendation engine',
        'Clinical decision support system'
      ],
      pricing: '$8,000 - $35,000/month',
      delivery: '8-12 weeks',
      category: 'Healthcare AI',
      benefits: [
        '30% improvement in diagnostic accuracy',
        '50% reduction in diagnostic time',
        '25% reduction in medical errors',
        'Enhanced patient outcomes'
      ],
      useCases: ['Hospitals', 'Clinics', 'Diagnostic centers', 'Telemedicine platforms'],
      marketSize: '$45.2B healthcare AI market'
    },
    {
      title: 'AI-Powered Marketing Automation',
      description: 'Intelligent marketing campaign optimization with personalized customer journeys',
      icon: Zap,
      features: [
        'Customer segmentation and persona analysis',
        'Personalized content generation',
        'Campaign performance optimization',
        'Predictive customer lifetime value',
        'Multi-channel campaign orchestration',
        'Real-time marketing analytics'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'Marketing AI',
      benefits: [
        '40% improvement in conversion rates',
        '60% reduction in customer acquisition costs',
        '35% increase in customer lifetime value',
        'Automated campaign optimization'
      ],
      useCases: ['E-commerce brands', 'SaaS companies', 'Marketing agencies', 'Enterprise organizations'],
      marketSize: '$6.4B marketing automation market'
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Automated software testing and quality assurance with intelligent test generation',
      icon: CheckCircle,
      features: [
        'Automated test case generation',
        'Intelligent bug detection and classification',
        'Performance testing automation',
        'Security vulnerability scanning',
        'Code quality analysis',
        'Continuous testing integration'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '2-5 weeks',
      category: 'QA AI',
      benefits: [
        '70% reduction in testing time',
        '85% improvement in bug detection',
        '50% reduction in production defects',
        'Automated quality reporting'
      ],
      useCases: ['Software companies', 'DevOps teams', 'QA departments', 'Enterprise IT'],
      marketSize: '$4.1B software testing market'
    },
    {
      title: 'AI-Powered Autonomous Vehicle Intelligence',
      description: 'Advanced AI systems for autonomous vehicles with real-time decision making and safety optimization',
      icon: Network,
      features: [
        'Real-time object detection and path planning',
        'Predictive behavior modeling for pedestrians and vehicles',
        'Weather and traffic condition adaptation',
        'Emergency response and collision avoidance',
        'Fleet coordination and traffic optimization',
        'Continuous learning from driving patterns'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-20 weeks',
      category: 'Autonomous Vehicles',
      benefits: [
        '99.9% safety improvement over human drivers',
        '60% reduction in traffic accidents',
        '40% improvement in fuel efficiency',
        'Real-time traffic optimization'
      ],
      useCases: ['Automotive manufacturers', 'Fleet operators', 'Ride-sharing companies', 'Smart cities'],
      marketSize: '$18.4B autonomous vehicle market'
    },
    {
      title: 'AI-Powered Quantum Computing Solutions',
      description: 'Quantum computing optimization with AI-driven algorithm selection and hybrid computing workflows',
      icon: Brain,
      features: [
        'Quantum algorithm optimization and selection',
        'Hybrid quantum-classical computing workflows',
        'Quantum error correction and noise mitigation',
        'Real-time quantum circuit optimization',
        'Quantum machine learning implementation',
        'Integration with cloud quantum platforms'
      ],
      pricing: '$25,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Quantum AI',
      benefits: [
        '300% improvement in quantum algorithm performance',
        '90% reduction in quantum error rates',
        'Exponential speedup for specific problems',
        'Hybrid computing efficiency optimization'
      ],
      useCases: ['Financial institutions', 'Pharmaceutical companies', 'Research institutions', 'Government agencies'],
      marketSize: '$2.1B quantum computing market'
    },
    {
      title: 'AI-Powered Space Mission Optimization',
      description: 'Advanced AI for space exploration, satellite management, and mission planning with predictive analytics',
      icon: Network,
      features: [
        'Satellite constellation optimization',
        'Mission planning and trajectory calculation',
        'Space debris tracking and collision avoidance',
        'Resource allocation and fuel optimization',
        'Real-time mission monitoring and adjustment',
        'Deep space communication optimization'
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '20-40 weeks',
      category: 'Space AI',
      benefits: [
        '50% improvement in mission success rates',
        '40% reduction in fuel consumption',
        '90% improvement in collision avoidance',
        'Real-time mission optimization'
      ],
      useCases: ['Space agencies', 'Satellite operators', 'Private space companies', 'Defense contractors'],
      marketSize: '$4.2B space technology market'
    },
    {
      title: 'AI-Powered Climate Change Solutions',
      description: 'Advanced climate modeling and environmental monitoring with AI-driven predictions and mitigation strategies',
      icon: Shield,
      features: [
        'High-resolution climate modeling and prediction',
        'Carbon footprint tracking and optimization',
        'Renewable energy integration and optimization',
        'Environmental impact assessment and monitoring',
        'Policy recommendation and scenario planning',
        'Disaster prediction and response optimization'
      ],
      pricing: '$20,000 - $150,000/month',
      delivery: '12-24 weeks',
      category: 'Climate AI',
      benefits: [
        '80% improvement in climate prediction accuracy',
        '60% reduction in carbon emissions',
        '50% improvement in renewable energy efficiency',
        'Real-time environmental monitoring'
      ],
      useCases: ['Government agencies', 'Energy companies', 'Environmental organizations', 'Research institutions'],
      marketSize: '$1.8B climate tech market'
    },
    {
      title: 'AI-Powered Synthetic Biology Platform',
      description: 'Intelligent synthetic biology with AI-driven protein design, genetic optimization, and drug discovery',
      icon: Brain,
      features: [
        'AI-driven protein structure prediction and design',
        'Genetic sequence optimization and modification',
        'Drug discovery and pharmaceutical development',
        'Biomaterial design and optimization',
        'Laboratory automation and experiment design',
        'Regulatory compliance and safety monitoring'
      ],
      pricing: '$30,000 - $250,000/month',
      delivery: '16-32 weeks',
      category: 'Synthetic Biology',
      benefits: [
        '200% improvement in drug discovery efficiency',
        '90% reduction in laboratory costs',
        '80% faster protein design cycles',
        'Automated experiment optimization'
      ],
      useCases: ['Pharmaceutical companies', 'Biotech startups', 'Research institutions', 'Agricultural companies'],
      marketSize: '$3.2B synthetic biology market'
    },
    {
      title: 'AI-Powered Brain-Computer Interface',
      description: 'Advanced brain-computer interfaces with AI-driven neural signal processing and cognitive enhancement',
      icon: Brain,
      features: [
        'Real-time neural signal processing and interpretation',
        'Motor control and prosthetic device integration',
        'Cognitive enhancement and memory augmentation',
        'Medical diagnosis and treatment monitoring',
        'Gaming and entertainment applications',
        'Research and development support tools'
      ],
      pricing: '$40,000 - $300,000/month',
      delivery: '20-40 weeks',
      category: 'BCI AI',
      benefits: [
        '150% improvement in neural signal accuracy',
        '90% reduction in device setup time',
        '80% improvement in user control precision',
        'Real-time cognitive monitoring'
      ],
      useCases: ['Medical device companies', 'Research institutions', 'Gaming companies', 'Rehabilitation centers'],
      marketSize: '$1.7B brain-computer interface market'
    },
    {
      title: 'AI-Powered Metaverse Development Platform',
      description: 'Comprehensive metaverse creation with AI-driven content generation, virtual worlds, and user interaction',
      icon: Network,
      features: [
        'AI-generated 3D environments and assets',
        'Intelligent NPCs with natural language processing',
        'Virtual economy and NFT integration',
        'Real-time collaboration and social features',
        'Cross-platform deployment and accessibility',
        'Advanced physics simulation and rendering'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Metaverse AI',
      benefits: [
        '70% reduction in metaverse development costs',
        '90% faster content generation',
        '60% improvement in user engagement',
        'Real-time world adaptation'
      ],
      useCases: ['Gaming companies', 'Virtual event platforms', 'Educational institutions', 'Real estate companies'],
      marketSize: '$13.8B metaverse market'
    },
    {
      title: 'AI-Powered Advanced Materials Discovery',
      description: 'Intelligent materials science with AI-driven discovery, optimization, and application development',
      icon: Shield,
      features: [
        'AI-driven material property prediction',
        'Automated synthesis pathway optimization',
        'Performance optimization and testing',
        'Sustainable material development',
        'Application-specific material design',
        'Laboratory automation and data analysis'
      ],
      pricing: '$25,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Materials AI',
      benefits: [
        '200% improvement in material discovery speed',
        '80% reduction in development costs',
        '90% improvement in material performance',
        'Automated optimization cycles'
      ],
      useCases: ['Manufacturing companies', 'Aerospace industry', 'Automotive companies', 'Research institutions'],
      marketSize: '$4.2B nanotechnology market'
    },
    {
      title: 'AI-Powered Advanced Robotics Systems',
      description: 'Intelligent robotics with AI-driven automation, human-robot collaboration, and adaptive learning',
      icon: Network,
      features: [
        'Advanced robot programming and control',
        'Human-robot collaboration and safety',
        'AI-driven automation and decision making',
        'Adaptive learning and skill acquisition',
        'Quality control and inspection automation',
        'Production line optimization and monitoring'
      ],
      pricing: '$20,000 - $150,000/month',
      delivery: '12-24 weeks',
      category: 'Robotics AI',
      benefits: [
        '65% improvement in manufacturing efficiency',
        '90% reduction in programming time',
        '80% improvement in task accuracy',
        'Real-time adaptation and learning'
      ],
      useCases: ['Manufacturing companies', 'Healthcare institutions', 'Warehouse operators', 'Service industries'],
      marketSize: '$23.8B robotics market'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence, cybersecurity AI" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Advanced AI Solutions</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Revolutionary AI Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {description} Our AI solutions deliver measurable ROI with proven results across industries.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Enterprise-Grade</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">{service.marketSize}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-300 mb-4">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-slate-400 ml-5">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Proven Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <TrendingUp className="w-3 h-3 text-fuchsia-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-left">
                      <div className="text-lg font-semibold text-cyan-400">{service.pricing}</div>
                      <div className="text-sm text-slate-400">{service.delivery} deployment</div>
                    </div>
                    <a 
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Get a custom AI solution proposal tailored to your business needs. Most implementations start with a comprehensive AI readiness assessment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                <p className="text-sm text-slate-300">Deploy AI solutions in 2-8 weeks with our proven methodology</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-sm text-slate-300">Average 400% ROI within first year of implementation</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-sm text-slate-300">24/7 support from AI specialists and data scientists</p>
              </div>
            </div>

            <div className="mt-8 text-center">
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
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">https://ziontechgroup.com</a></p>
                <p className="text-xs text-slate-500">Available 24/7 for enterprise clients • Free consultation for projects over $10K</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}