import React from 'react';
import { Check, Star, Zap, Shield, Clock, Users, BarChart, Code, Cloud, Database, Globe, Smartphone, CreditCard, Headphones, Settings, ArrowRight, Brain, Target, TrendingUp, Cpu, Eye, MessageSquare, FileText, PieChart } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      name: 'AI Consulting & Strategy',
      description: 'Comprehensive AI strategy development, implementation planning, and technology roadmap creation for enterprise organizations.',
      icon: Brain,
      price: '$2,500',
      period: '/month',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Roadmap',
        'ROI Analysis & Projections',
        'Vendor Selection & Evaluation',
        'Change Management Planning',
        'Training & Knowledge Transfer',
        'Ongoing Strategic Support'
      ],
      category: 'Strategy & Consulting',
      popular: true,
      savings: '$12,000/year',
      deliverables: [
        'AI Strategy Document',
        'Technology Roadmap',
        'Implementation Timeline',
        'Budget & Resource Planning',
        'Risk Assessment Report',
        'Success Metrics Framework'
      ]
    },
    {
      id: 2,
      name: 'Machine Learning Solutions',
      description: 'Custom machine learning model development, training, and deployment for predictive analytics and intelligent automation.',
      icon: Cpu,
      price: '$1,800',
      period: '/month',
      features: [
        'Custom ML Model Development',
        'Data Preprocessing & Feature Engineering',
        'Model Training & Validation',
        'Performance Optimization',
        'Model Deployment & Integration',
        'A/B Testing & Monitoring',
        'Retraining & Updates',
        'Documentation & Support'
      ],
      category: 'Machine Learning',
      popular: true,
      savings: '$8,400/year',
      deliverables: [
        'Trained ML Models',
        'Model Performance Reports',
        'Integration Documentation',
        'Monitoring Dashboard',
        'Retraining Pipeline',
        'API Documentation'
      ]
    },
    {
      id: 3,
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding applications.',
      icon: MessageSquare,
      price: '$1,200',
      period: '/month',
      features: [
        'Text Analysis & Classification',
        'Sentiment Analysis',
        'Named Entity Recognition',
        'Language Translation',
        'Chatbot Development',
        'Document Processing',
        'API Integration',
        'Performance Monitoring'
      ],
      category: 'NLP & Text Processing',
      popular: false,
      savings: '$5,400/year',
      deliverables: [
        'NLP Models & APIs',
        'Chatbot Implementation',
        'Text Analysis Tools',
        'Integration Code',
        'Performance Metrics',
        'User Documentation'
      ]
    },
    {
      id: 4,
      name: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions including object detection, facial recognition, and visual content understanding.',
      icon: Eye,
      price: '$1,500',
      period: '/month',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition Systems',
        'Image Classification',
        'Video Analysis',
        'OCR & Document Processing',
        'Quality Control Automation',
        'Real-time Processing',
        'Custom Model Training'
      ],
      category: 'Computer Vision',
      popular: false,
      savings: '$7,200/year',
      deliverables: [
        'Vision Models & APIs',
        'Real-time Processing System',
        'Integration Components',
        'Performance Benchmarks',
        'User Interface',
        'Technical Documentation'
      ]
    },
    {
      id: 5,
      name: 'Predictive Analytics Platform',
      description: 'Advanced predictive analytics solutions for forecasting, risk assessment, and data-driven decision making.',
      icon: TrendingUp,
      price: '$2,000',
      period: '/month',
      features: [
        'Predictive Modeling',
        'Time Series Forecasting',
        'Risk Assessment Models',
        'Anomaly Detection',
        'Real-time Predictions',
        'Dashboard & Visualization',
        'Data Pipeline Automation',
        'Model Performance Monitoring'
      ],
      category: 'Analytics & Forecasting',
      popular: true,
      savings: '$9,600/year',
      deliverables: [
        'Predictive Models',
        'Analytics Dashboard',
        'Data Pipeline',
        'Forecasting Reports',
        'API Endpoints',
        'User Training Materials'
      ]
    },
    {
      id: 6,
      name: 'AI-Powered Automation',
      description: 'Intelligent process automation solutions that combine RPA with AI for complex business process optimization.',
      icon: Settings,
      price: '$1,600',
      period: '/month',
      features: [
        'Process Discovery & Analysis',
        'Workflow Automation',
        'Document Processing',
        'Decision Automation',
        'Exception Handling',
        'Performance Monitoring',
        'Scalability Management',
        'Integration with Existing Systems'
      ],
      category: 'Process Automation',
      popular: false,
      savings: '$7,800/year',
      deliverables: [
        'Automated Workflows',
        'Process Documentation',
        'Monitoring Dashboard',
        'Integration Code',
        'Training Materials',
        'Maintenance Guide'
      ]
    },
    {
      id: 7,
      name: 'AI Data Analytics',
      description: 'Advanced data analytics platform with AI-powered insights, automated reporting, and intelligent data visualization.',
      icon: PieChart,
      price: '$1,300',
      period: '/month',
      features: [
        'Automated Data Analysis',
        'Intelligent Insights Generation',
        'Custom Report Creation',
        'Data Visualization',
        'Trend Analysis',
        'Anomaly Detection',
        'Real-time Dashboards',
        'Natural Language Queries'
      ],
      category: 'Data Analytics',
      popular: false,
      savings: '$6,000/year',
      deliverables: [
        'Analytics Platform',
        'Custom Dashboards',
        'Automated Reports',
        'Data Connectors',
        'User Interface',
        'Analytics Documentation'
      ]
    },
    {
      id: 8,
      name: 'AI Content Generation',
      description: 'Intelligent content creation platform for automated text generation, content optimization, and creative writing assistance.',
      icon: FileText,
      price: '$900',
      period: '/month',
      features: [
        'Automated Content Creation',
        'Content Optimization',
        'SEO Enhancement',
        'Brand Voice Customization',
        'Multi-language Support',
        'Content Quality Analysis',
        'Plagiarism Detection',
        'Content Planning Tools'
      ],
      category: 'Content & Marketing',
      popular: false,
      savings: '$4,200/year',
      deliverables: [
        'Content Generation API',
        'Content Management System',
        'Quality Analysis Tools',
        'SEO Optimization Features',
        'Brand Guidelines Integration',
        'Content Templates'
      ]
    }
  ];

  const categories = [
    'All Categories',
    'Strategy & Consulting',
    'Machine Learning',
    'NLP & Text Processing',
    'Computer Vision',
    'Analytics & Forecasting',
    'Process Automation',
    'Data Analytics',
    'Content & Marketing'
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      title: 'Medical Image Analysis',
      description: 'AI-powered diagnostic imaging for early disease detection and treatment planning.',
      icon: Eye,
      benefits: ['40% faster diagnosis', '95% accuracy rate', 'Reduced false positives']
    },
    {
      industry: 'Finance',
      title: 'Fraud Detection',
      description: 'Real-time transaction monitoring and fraud prevention using advanced ML algorithms.',
      icon: Shield,
      benefits: ['99.9% detection rate', 'Real-time processing', 'Reduced false alarms']
    },
    {
      industry: 'Retail',
      title: 'Customer Analytics',
      description: 'AI-driven customer behavior analysis and personalized recommendation systems.',
      icon: Users,
      benefits: ['35% increase in sales', 'Improved customer satisfaction', 'Better inventory management']
    },
    {
      industry: 'Manufacturing',
      title: 'Predictive Maintenance',
      description: 'AI-powered equipment monitoring and predictive maintenance scheduling.',
      icon: Settings,
      benefits: ['30% reduction in downtime', 'Lower maintenance costs', 'Extended equipment life']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Chief Medical Officer',
      company: 'MedTech Solutions',
      content: 'The AI consulting service helped us implement a diagnostic imaging system that improved our accuracy by 40% and reduced diagnosis time significantly.',
      rating: 5,
      avatar: '👩‍⚕️'
    },
    {
      name: 'James Rodriguez',
      role: 'CTO',
      company: 'FinSecure Corp',
      content: 'Their machine learning solutions for fraud detection have been game-changing. We\'ve reduced false positives by 60% while maintaining high detection rates.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Chen',
      role: 'VP of Operations',
      company: 'RetailMax Inc',
      content: 'The predictive analytics platform has transformed our inventory management. We\'ve reduced stockouts by 45% and improved customer satisfaction.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation, efficiency, and growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Get Free AI Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                    <span className="text-green-400 text-sm">Save {service.savings}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                    Learn More
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            AI Solutions Across Industries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-green-400 text-sm">
                      <Check className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {useCase.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            What Our AI Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our AI Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Discovery & Analysis</h3>
              <p className="text-gray-300">Comprehensive assessment of your business needs, data landscape, and AI opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Solution Design</h3>
              <p className="text-gray-300">Custom AI solution architecture and implementation roadmap tailored to your requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Development & Testing</h3>
              <p className="text-gray-300">Agile development process with continuous testing and validation of AI models</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Deployment & Optimization</h3>
              <p className="text-gray-300">Seamless deployment with ongoing monitoring, optimization, and performance tuning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders who have already transformed their operations with our AI solutions. 
            Get a free AI assessment and discover your AI potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Get Free AI Assessment
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free AI readiness assessment</p>
            <p>✓ Custom AI strategy consultation</p>
            <p>✓ No-obligation project proposal</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
me="text-xl font-semibold text-white mb-3">3. Development & Testing</h3>
              <p className="text-gray-300">Agile development process with continuous testing and validation of AI models</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Deployment & Optimization</h3>
              <p className="text-gray-300">Seamless deployment with ongoing monitoring, optimization, and performance tuning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders who have already transformed their operations with our AI solutions. 
            Get a free AI assessment and discover your AI potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Get Free AI Assessment
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free AI readiness assessment</p>
            <p>✓ Custom AI strategy consultation</p>
            <p>✓ No-obligation project proposal</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
me="text-xl font-semibold text-white mb-3">3. Development & Testing</h3>
              <p className="text-gray-300">Agile development process with continuous testing and validation of AI models</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Deployment & Optimization</h3>
              <p className="text-gray-300">Seamless deployment with ongoing monitoring, optimization, and performance tuning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders who have already transformed their operations with our AI solutions. 
            Get a free AI assessment and discover your AI potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Get Free AI Assessment
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free AI readiness assessment</p>
            <p>✓ Custom AI strategy consultation</p>
            <p>✓ No-obligation project proposal</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
