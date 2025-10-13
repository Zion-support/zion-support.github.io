import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign,
  ArrowRight,
  Star,
  Users,
  BarChart3,
  Zap,
  Brain,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIContractAnalyzerPage = () => {
  const features = [
    {
      title: 'AI-Powered Contract Analysis',
      description: 'Advanced natural language processing to analyze contract terms, clauses, and potential risks automatically.',
      icon: <Brain className="w-6 h-6" />,
      benefits: [
        '99.7% accuracy in clause identification',
        'Real-time risk assessment',
        'Multi-language support',
        'Custom legal templates'
      ]
    },
    {
      title: 'Risk Detection & Alerts',
      description: 'Intelligent risk detection system that identifies problematic clauses, hidden terms, and compliance issues.',
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: [
        'Automated risk scoring',
        'Compliance checking',
        'Deadline tracking',
        'Renewal notifications'
      ]
    },
    {
      title: 'Contract Comparison',
      description: 'Side-by-side contract comparison with highlighted differences, version tracking, and change analysis.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: [
        'Version control',
        'Change tracking',
        'Difference highlighting',
        'Approval workflows'
      ]
    },
    {
      title: 'Automated Summaries',
      description: 'Generate comprehensive contract summaries with key terms, obligations, and deadlines in plain English.',
      icon: <FileText className="w-6 h-6" />,
      benefits: [
        'Executive summaries',
        'Key term extraction',
        'Obligation tracking',
        'Deadline management'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 contracts/month',
        'Basic risk analysis',
        'Standard templates',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and legal teams',
      features: [
        'Up to 200 contracts/month',
        'Advanced AI analysis',
        'Custom templates',
        'Priority support',
        'Advanced reporting',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited contracts',
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Contracts Analyzed', icon: <FileText className="w-6 h-6" /> },
    { number: '99.7%', label: 'Accuracy Rate', icon: <Shield className="w-6 h-6" /> },
    { number: '85%', label: 'Time Saved', icon: <Clock className="w-6 h-6" /> },
    { number: '500+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'LegalTech Solutions',
      role: 'General Counsel',
      content: 'Zion AI Contract Analyzer has revolutionized our contract review process. We now analyze contracts 10x faster with 99.7% accuracy.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Enterprise Corp',
      role: 'Legal Director',
      content: 'The risk detection features are incredible. We caught several problematic clauses that would have cost us millions.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Startup Ventures',
      role: 'Founder',
      content: 'As a non-legal founder, this tool gives me confidence in understanding complex contracts. It\'s like having a legal expert on demand.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Contract Analyzer - AI-Powered Legal Document Analysis | Zion Tech Group"
        description="Revolutionary AI-powered contract analysis tool that automates legal document review, risk detection, and compliance checking. Save 85% time with 99.7% accuracy."
        keywords="AI contract analysis, legal document review, contract risk detection, legal AI, document automation, compliance checking"
        canonical="https://ziontechgroup.com/zion-ai-contract-analyzer"
      />
      
      <Helmet>
        <title>Zion AI Contract Analyzer - AI-Powered Legal Document Analysis</title>
        <meta name="description" content="Revolutionary AI-powered contract analysis tool for legal teams and businesses" />
      </Helmet>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Legal Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Zion AI Contract Analyzer
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your contract review process with AI-powered analysis. 
              Detect risks, ensure compliance, and save 85% of your time with 99.7% accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={Zap}
                iconPosition="left"
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={FileText}
                iconPosition="left"
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our advanced AI technology provides comprehensive contract analysis with unmatched accuracy and speed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group"
                  glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to meet your contract analysis needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  className={`relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
                  glowColor={plan.popular ? 'cyan' : 'purple'}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Legal Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what legal experts say about our AI contract analyzer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Contract Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of legal teams already using our AI contract analyzer to save time and reduce risks. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/micro-saas"
                variant="outline"
                size="lg"
                icon={Zap}
                iconPosition="right"
              >
                View All Solutions
              </FuturisticButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ZionAIContractAnalyzerPage;