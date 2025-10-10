import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  BarChart, 
  Zap,
  Bot,
  Database,
  FileText,
  Stethoscope,
  DollarSign,
  Shield,
  Eye,
  MessageSquare,
  Cpu,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Activity,
  Target,
  Users,
  Globe,
  Settings,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics',
      icon: BarChart,
      features: [
        'Predictive Analytics & Forecasting',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Advanced Data Visualization',
        'Machine Learning Models',
        'Statistical Analysis & Reporting'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify trends and opportunities',
        'Reduce manual analysis time by 80%',
        'Improve accuracy of predictions'
      ],
      href: '/ai-analytics'
    },
    {
      name: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions',
      icon: Zap,
      features: [
        'Workflow Automation',
        'Process Optimization',
        'Smart Task Scheduling',
        'Document Processing',
        'Email Automation',
        'Data Entry Automation'
      ],
      benefits: [
        'Reduce operational costs by 60%',
        'Eliminate human errors',
        'Scale operations efficiently',
        'Free up staff for strategic work'
      ],
      href: '/ai-automation'
    },
    {
      name: 'AI Customer Support',
      description: 'Revolutionary customer support powered by natural language processing',
      icon: Bot,
      features: [
        '24/7 AI Chatbots',
        'Voice Assistant Integration',
        'Multi-language Support',
        'Sentiment Analysis',
        'Escalation Management',
        'Knowledge Base Integration'
      ],
      benefits: [
        'Provide instant customer support',
        'Reduce response time by 90%',
        'Handle multiple queries simultaneously',
        'Improve customer satisfaction scores'
      ],
      href: '/ai-customer-support'
    },
    {
      name: 'AI Data Analytics',
      description: 'Advanced data analytics platform for comprehensive business intelligence',
      icon: Database,
      features: [
        'Big Data Processing',
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Mining & Discovery',
        'Automated Reporting',
        'Data Quality Management'
      ],
      benefits: [
        'Process massive datasets efficiently',
        'Discover hidden patterns in data',
        'Generate accurate forecasts',
        'Make informed business decisions'
      ],
      href: '/ai-data-analytics'
    },
    {
      name: 'AI Content Generation',
      description: 'Create high-quality, engaging content with AI assistance',
      icon: FileText,
      features: [
        'Automated Content Writing',
        'SEO Optimization',
        'Multi-format Support',
        'Brand Voice Matching',
        'Content Personalization',
        'Plagiarism Detection'
      ],
      benefits: [
        'Scale content production 10x',
        'Maintain consistent brand voice',
        'Optimize for search engines',
        'Reduce content creation costs'
      ],
      href: '/ai-content-generation'
    },
    {
      name: 'AI Healthcare',
      description: 'Revolutionary healthcare solutions powered by artificial intelligence',
      icon: Stethoscope,
      features: [
        'Medical Image Analysis',
        'Drug Discovery Support',
        'Patient Risk Assessment',
        'Treatment Recommendation',
        'Clinical Decision Support',
        'Health Monitoring Systems'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Accelerate drug development',
        'Personalize treatment plans',
        'Reduce healthcare costs'
      ],
      href: '/ai-healthcare'
    },
    {
      name: 'AI Fintech',
      description: 'Financial technology solutions with advanced AI integration',
      icon: DollarSign,
      features: [
        'Fraud Detection & Prevention',
        'Algorithmic Trading',
        'Credit Risk Assessment',
        'Automated Underwriting',
        'Real-time Risk Monitoring',
        'Regulatory Compliance'
      ],
      benefits: [
        'Detect fraud with 99.9% accuracy',
        'Automate financial processes',
        'Reduce risk exposure',
        'Ensure regulatory compliance'
      ],
      href: '/ai-fintech'
    },
    {
      name: 'AI Cybersecurity',
      description: 'Advanced cybersecurity solutions powered by machine learning',
      icon: Shield,
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Behavioral Analysis',
        'Incident Response Automation',
        'Security Monitoring',
        'Compliance Management'
      ],
      benefits: [
        'Detect threats in real-time',
        'Prevent security breaches',
        'Automate incident response',
        'Maintain compliance standards'
      ],
      href: '/ai-cybersecurity'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Activity },
    { number: '50+', label: 'Industries Served', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, customer support, data processing, content generation, healthcare, fintech, and cybersecurity solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Explore Our AI Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 mr-3 text-cyan-400" />
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive artificial intelligence services designed to solve complex business challenges
            </p>
          </div>

          <div className="space-y-16">
            {aiServices.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{service.name}</h3>
                  </div>
                  <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Business Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={service.href}
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Learn More About {service.name}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-cyan-400/30">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h4>
                      <p className="text-gray-300 mb-6">
                        Contact our AI experts to discuss how {service.name} can transform your business
                      </p>
                      <div className="space-y-3">
                        <a
                          href="/contact"
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                        >
                          <MessageSquare className="w-5 h-5 mr-2" />
                          Get Free Consultation
                        </a>
                        <a
                          href="/consultation"
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Schedule a Call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts help you identify the best solutions for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Your AI Journey
            </a>
            <a
              href="/consultation"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;