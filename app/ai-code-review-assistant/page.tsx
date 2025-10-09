'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Code, Bug, AlertTriangle, CheckSquare, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AICodeReviewAssistantPage: React.FC = () => {
  const [codeInput, setCodeInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCodeAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        qualityScore: 85,
        issues: [
          { type: 'security', message: 'Potential SQL injection vulnerability detected', severity: 'high' },
          { type: 'performance', message: 'Consider using async/await instead of .then()', severity: 'medium' },
          { type: 'style', message: 'Function name should be more descriptive', severity: 'low' }
        ],
        suggestions: [
          'Add input validation for user data',
          'Implement error handling for database operations',
          'Consider using TypeScript for better type safety'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const features = [
    {
      icon: Code,
      title: 'Automated Code Analysis',
      description: 'AI-powered analysis of code quality, security vulnerabilities, and performance issues',
      benefits: ['Real-time feedback', 'Multi-language support', 'Custom rules engine']
    },
    {
      icon: Shield,
      title: 'Security Vulnerability Detection',
      description: 'Advanced security scanning to identify potential threats and vulnerabilities',
      benefits: ['OWASP compliance', 'Zero-day detection', 'Automated patching suggestions']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Intelligent recommendations to improve code performance and efficiency',
      benefits: ['Bottleneck identification', 'Memory optimization', 'Speed improvements']
    },
    {
      icon: CheckSquare,
      title: 'Best Practice Recommendations',
      description: 'AI-driven suggestions following industry best practices and coding standards',
      benefits: ['Style consistency', 'Design patterns', 'Documentation generation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams and individual developers',
      features: [
        'Up to 10,000 lines of code analyzed',
        'Basic security scanning',
        'Performance recommendations',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing development teams',
      features: [
        'Up to 50,000 lines of code analyzed',
        'Advanced security scanning',
        'Custom rule configuration',
        'Priority support',
        'Advanced integrations',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited code analysis',
        'Enterprise security scanning',
        'Custom AI model training',
        '24/7 dedicated support',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'TechCorp Inc.',
      content: 'The AI Code Review Assistant has reduced our bug count by 60% and improved our code quality significantly.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'This tool has been a game-changer for our development process. The security insights are invaluable.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Engineer',
      company: 'DevSolutions',
      content: 'The performance recommendations have helped us optimize our applications and reduce costs.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Code Review Assistant - Zion Tech Group"
        description="Automated code analysis and quality improvement with AI-powered insights. Reduce bugs, improve security, and optimize performance with our intelligent code review assistant."
        keywords={['AI code review', 'automated code analysis', 'code quality', 'security scanning', 'performance optimization', 'developer tools']}
        canonicalUrl="https://ziontechgroup.com/ai-code-review-assistant"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Code Review Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate code analysis, detect security vulnerabilities, and optimize performance with our AI-powered code review assistant. 
              Improve code quality and reduce bugs by up to 60%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Try Live Demo
              </button>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Reduction in Bugs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Security Issue Detection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Faster Development</div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section id="demo-section" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Try Our Live Demo
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Paste Your Code</h3>
                  <textarea
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    placeholder="// Paste your code here for AI analysis...
function processUserData(userInput) {
  const query = 'SELECT * FROM users WHERE id = ' + userInput;
  return database.query(query);
}"
                    className="w-full h-64 bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none font-mono text-sm"
                  />
                  <button
                    onClick={handleCodeAnalysis}
                    disabled={!codeInput.trim() || isAnalyzing}
                    className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Code'}
                  </button>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">AI Analysis Results</h3>
                  {analysisResult ? (
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">Code Quality Score</span>
                          <span className="text-2xl font-bold text-cyan-400">{analysisResult.qualityScore}/100</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${analysisResult.qualityScore}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-3">Issues Found</h4>
                        <div className="space-y-2">
                          {analysisResult.issues.map((issue, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                                issue.severity === 'high' ? 'text-red-400' : 
                                issue.severity === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                              }`} />
                              <span className="text-gray-300 text-sm">{issue.message}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-3">Suggestions</h4>
                        <div className="space-y-2">
                          {analysisResult.suggestions.map((suggestion, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 text-green-400" />
                              <span className="text-gray-300 text-sm">{suggestion}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/10 rounded-lg p-8 text-center">
                      <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400">Analysis results will appear here after you paste code and click "Analyze Code"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                } cyber-card`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Improve Your Code Quality?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of developers who trust our AI Code Review Assistant to improve their code quality and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICodeReviewAssistantPage;