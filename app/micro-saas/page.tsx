import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp, Brain, Database, Cloud, Smartphone, Globe, Lock, BarChart3, MessageSquare, FileText, Settings, Target, Lightbulb } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform that generates high-quality articles, blog posts, social media content, and marketing copy.',
      icon: <Brain className="w-8 h-8" />,
      price: '$79/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      benefits: [
        'Save 80% content creation time',
        'Increase engagement by 300%',
        'SEO-optimized content',
        'Consistent brand voice'
      ],
      popular: true,
      category: 'Content & Marketing'
    },
    {
      id: 'smart-analytics-dashboard',
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboard builder',
        'Automated reports',
        'Data integration (50+ sources)',
        'Mobile app included',
        'Team collaboration tools',
        'White-label options'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends 3x faster',
        'Reduce reporting time by 90%',
        'Increase revenue by 25%'
      ],
      popular: true,
      category: 'Analytics & BI'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer service platform with chatbots, ticket management, and automated response systems.',
      icon: <MessageSquare className="w-8 h-8" />,
      price: '$149/month',
      features: [
        'AI-powered chatbots',
        'Multi-channel support',
        'Sentiment analysis',
        'Auto-ticket routing',
        'Knowledge base management',
        'Live chat integration',
        'Performance analytics',
        '24/7 availability'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Increase customer satisfaction',
        'Handle 10x more inquiries'
      ],
      popular: false,
      category: 'Customer Service'
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation Engine',
      description: 'No-code automation platform that streamlines business processes and eliminates manual tasks.',
      icon: <Settings className="w-8 h-8" />,
      price: '$129/month',
      features: [
        'Visual workflow builder',
        '500+ integrations',
        'Conditional logic',
        'Email automation',
        'Document processing',
        'API connections',
        'Team collaboration',
        'Custom triggers'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce errors by 95%',
        'Save 20 hours per week',
        'Scale operations efficiently'
      ],
      popular: true,
      category: 'Automation'
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Pro',
      description: 'Intelligent email marketing platform with AI-driven personalization, A/B testing, and advanced segmentation.',
      icon: <Target className="w-8 h-8" />,
      price: '$89/month',
      features: [
        'AI-powered personalization',
        'Advanced segmentation',
        'A/B testing automation',
        'Send time optimization',
        'Subject line generator',
        'Email templates (100+)',
        'Deliverability monitoring',
        'ROI tracking'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates',
        'Maximize email ROI'
      ],
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'document-ai-processor',
      title: 'Document AI Processor',
      description: 'Intelligent document processing platform that extracts, analyzes, and organizes data from any document type.',
      icon: <FileText className="w-8 h-8" />,
      price: '$199/month',
      features: [
        'OCR technology',
        'Data extraction',
        'Document classification',
        'Form processing',
        'Invoice automation',
        'Contract analysis',
        'Compliance checking',
        'API integration'
      ],
      benefits: [
        'Process documents 50x faster',
        'Reduce manual data entry by 95%',
        'Improve accuracy by 99%',
        'Ensure compliance automatically'
      ],
      popular: false,
      category: 'Document Management'
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Comprehensive social media management platform with AI-powered content creation, scheduling, and analytics.',
      icon: <Globe className="w-8 h-8" />,
      price: '$119/month',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Optimal timing analysis',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Influencer identification',
        'Campaign management'
      ],
      benefits: [
        'Increase followers by 200%',
        'Boost engagement by 150%',
        'Save 15 hours per week',
        'Improve brand visibility'
      ],
      popular: true,
      category: 'Social Media'
    },
    {
      id: 'ai-inventory-manager',
      title: 'AI Inventory Manager',
      description: 'Smart inventory management system with predictive analytics, automated reordering, and demand forecasting.',
      icon: <Database className="w-8 h-8" />,
      price: '$159/month',
      features: [
        'Real-time inventory tracking',
        'Demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Mobile app included'
      ],
      benefits: [
        'Reduce stockouts by 80%',
        'Lower inventory costs by 30%',
        'Improve cash flow',
        'Eliminate manual counting'
      ],
      popular: false,
      category: 'Inventory Management'
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management platform with AI-powered resource allocation, timeline optimization, and risk prediction.',
      icon: <Users className="w-8 h-8" />,
      price: '$139/month',
      features: [
        'AI resource allocation',
        'Timeline optimization',
        'Risk prediction',
        'Task automation',
        'Team collaboration',
        'Progress tracking',
        'Budget management',
        'Reporting dashboard'
      ],
      benefits: [
        'Complete projects 25% faster',
        'Reduce project costs by 20%',
        'Improve team productivity',
        'Minimize project risks'
      ],
      popular: true,
      category: 'Project Management'
    },
    {
      id: 'ai-lead-scoring',
      title: 'AI Lead Scoring Engine',
      description: 'Advanced lead qualification platform that uses AI to score, prioritize, and route leads for maximum conversion.',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$109/month',
      features: [
        'AI lead scoring',
        'Behavioral tracking',
        'Lead prioritization',
        'Automated routing',
        'CRM integration',
        'Conversion prediction',
        'Lead nurturing',
        'ROI tracking'
      ],
      benefits: [
        'Increase conversion rates by 45%',
        'Reduce sales cycle by 30%',
        'Improve lead quality',
        'Maximize sales efficiency'
      ],
      popular: false,
      category: 'Sales & CRM'
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense management platform with receipt scanning, automated categorization, and compliance monitoring.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$79/month',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Expense approval workflow',
        'Policy compliance',
        'Tax preparation',
        'Multi-currency support',
        'Mobile app',
        'Integration with accounting'
      ],
      benefits: [
        'Save 10 hours per month',
        'Reduce errors by 90%',
        'Ensure compliance',
        'Simplify tax preparation'
      ],
      popular: false,
      category: 'Finance'
    },
    {
      id: 'ai-recruitment-assistant',
      title: 'AI Recruitment Assistant',
      description: 'Intelligent hiring platform that automates resume screening, candidate matching, and interview scheduling.',
      icon: <Users className="w-8 h-8" />,
      price: '$169/month',
      features: [
        'Resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Skill assessment',
        'Background checks',
        'Onboarding automation',
        'Diversity tracking',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce hiring time by 70%',
        'Improve candidate quality',
        'Eliminate bias',
        'Streamline onboarding'
      ],
      popular: true,
      category: 'HR & Recruitment'
    }
  ];

  const categories = [
    'All Categories',
    'Content & Marketing',
    'Analytics & BI',
    'Customer Service',
    'Automation',
    'Marketing',
    'Document Management',
    'Social Media',
    'Inventory Management',
    'Project Management',
    'Sales & CRM',
    'Finance',
    'HR & Recruitment'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Powerful AI-Powered Tools for Modern Businesses
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with our comprehensive suite of micro SAAS solutions. 
            From AI content generation to smart analytics, we provide the tools you need to scale efficiently.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-300">Ready-to-Use Tools</div>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$79</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">30s</div>
              <div className="text-gray-300">Setup Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI-powered micro SAAS tools designed to streamline your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="text-cyan-400 mr-3">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2">
                  <a
                    href={`/contact?service=${service.id}`}
                    className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center"
                  >
                    Get Started Now
                  </a>
                  <a
                    href={`/contact?service=${service.id}&demo=true`}
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-colors text-center"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 24/7 support and 30-day money-back guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card hologram-card text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$79</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1 Micro SAAS Tool
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
              </ul>
              <a href="/contact" className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card text-center ring-2 ring-cyan-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$199</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Phone & Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <a href="/contact" className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">Custom</div>
              <div className="text-gray-400 mb-6">contact us</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Phone Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label Options
                </li>
              </ul>
              <a href="/contact" className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
            <p>✓ 30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
