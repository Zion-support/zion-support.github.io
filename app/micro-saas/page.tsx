import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, BarChart3, Users, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const saasProducts = [
    {
      name: "AI Content Writer Pro",
      description: "Advanced AI-powered content creation tool that generates high-quality articles, blogs, and marketing copy with SEO optimization.",
      features: ["Natural language generation", "SEO optimization", "Multi-language support", "Brand voice customization", "Plagiarism detection", "Content scheduling"],
      price: "$49/month",
      popular: true,
      icon: <Zap className="w-8 h-8" />,
      marketPrice: "$99/month",
      savings: "50% off",
      category: "Content Creation",
      useCases: ["Blog writing", "Social media", "Email marketing", "Product descriptions"],
      integrations: ["WordPress", "HubSpot", "Mailchimp", "Hootsuite"]
    },
    {
      name: "AI Analytics Dashboard Pro",
      description: "Comprehensive business intelligence dashboard with real-time data visualization, AI insights, and predictive analytics.",
      features: ["Real-time analytics", "AI-powered insights", "Custom reports", "Data export", "Team collaboration", "Mobile app"],
      price: "$99/month",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      marketPrice: "$199/month",
      savings: "50% off",
      category: "Analytics",
      useCases: ["Sales tracking", "Marketing ROI", "Customer behavior", "Performance metrics"],
      integrations: ["Google Analytics", "Salesforce", "Stripe", "Shopify"]
    },
    {
      name: "AI Security Shield Pro",
      description: "Enterprise-grade security monitoring and threat detection with AI-powered anomaly detection and automated response.",
      features: ["24/7 AI monitoring", "Threat detection", "Compliance reporting", "Incident response", "Security scoring", "Risk assessment"],
      price: "$149/month",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      marketPrice: "$299/month",
      savings: "50% off",
      category: "Security",
      useCases: ["Threat prevention", "Compliance", "Incident response", "Risk management"],
      integrations: ["AWS", "Azure", "Google Cloud", "Slack"]
    },
    {
      name: "AI Project Manager Pro",
      description: "Intelligent project management tool with AI-powered task optimization, resource allocation, and team coordination.",
      features: ["Smart scheduling", "Resource optimization", "Progress tracking", "Team communication", "Risk prediction", "Budget management"],
      price: "$79/month",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      marketPrice: "$159/month",
      savings: "50% off",
      category: "Project Management",
      useCases: ["Team coordination", "Resource planning", "Timeline management", "Budget tracking"],
      integrations: ["Jira", "Asana", "Trello", "Microsoft Teams"]
    },
    {
      name: "AI Email Marketing Pro",
      description: "Intelligent email marketing platform with AI-powered personalization, A/B testing, and automated campaigns.",
      features: ["AI personalization", "A/B testing", "Automated campaigns", "Analytics", "List management", "Template library"],
      price: "$69/month",
      popular: false,
      icon: <Zap className="w-8 h-8" />,
      marketPrice: "$139/month",
      savings: "50% off",
      category: "Marketing",
      useCases: ["Email campaigns", "Lead nurturing", "Customer retention", "Sales automation"],
      integrations: ["Mailchimp", "Constant Contact", "Salesforce", "HubSpot"]
    },
    {
      name: "AI Customer Support Pro",
      description: "Advanced AI-powered customer support system with chatbots, ticket management, and sentiment analysis.",
      features: ["AI chatbots", "Ticket management", "Sentiment analysis", "Knowledge base", "Multi-channel support", "Performance analytics"],
      price: "$89/month",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      marketPrice: "$179/month",
      savings: "50% off",
      category: "Customer Support",
      useCases: ["24/7 support", "Ticket management", "Customer satisfaction", "Issue resolution"],
      integrations: ["Zendesk", "Freshdesk", "Intercom", "Slack"]
    },
    {
      name: "AI Document Processor Pro",
      description: "Intelligent document processing and management system with OCR, data extraction, and automated workflows.",
      features: ["OCR processing", "Data extraction", "Document classification", "Automated workflows", "Version control", "Search & retrieval"],
      price: "$59/month",
      popular: true,
      icon: <Zap className="w-8 h-8" />,
      marketPrice: "$119/month",
      savings: "50% off",
      category: "Document Management",
      useCases: ["Invoice processing", "Contract management", "Data entry automation", "Compliance"],
      integrations: ["Google Drive", "Dropbox", "SharePoint", "Box"]
    },
    {
      name: "AI Social Media Manager Pro",
      description: "Comprehensive social media management platform with AI-powered content scheduling, engagement analysis, and growth optimization.",
      features: ["Content scheduling", "Engagement analysis", "Hashtag optimization", "Competitor tracking", "Performance metrics", "Auto-posting"],
      price: "$79/month",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      marketPrice: "$159/month",
      savings: "50% off",
      category: "Social Media",
      useCases: ["Content planning", "Engagement tracking", "Growth optimization", "Brand monitoring"],
      integrations: ["Facebook", "Instagram", "Twitter", "LinkedIn"]
    },
    {
      name: "AI Inventory Manager Pro",
      description: "Smart inventory management system with AI-powered demand forecasting, automated reordering, and supply chain optimization.",
      features: ["Demand forecasting", "Automated reordering", "Supply chain optimization", "Real-time tracking", "Cost analysis", "Vendor management"],
      price: "$129/month",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      marketPrice: "$259/month",
      savings: "50% off",
      category: "Inventory Management",
      useCases: ["Stock optimization", "Demand planning", "Cost reduction", "Supply chain"],
      integrations: ["QuickBooks", "SAP", "Oracle", "NetSuite"]
    },
    {
      name: "AI HR Assistant Pro",
      description: "Intelligent human resources management platform with AI-powered recruitment, employee analytics, and performance tracking.",
      features: ["Resume screening", "Candidate matching", "Performance analytics", "Employee engagement", "Payroll integration", "Compliance tracking"],
      price: "$99/month",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      marketPrice: "$199/month",
      savings: "50% off",
      category: "Human Resources",
      useCases: ["Recruitment", "Performance management", "Employee engagement", "Compliance"],
      integrations: ["Workday", "BambooHR", "ADP", "Paychex"]
    },
    {
      name: "AI Financial Advisor Pro",
      description: "Advanced financial planning and analysis tool with AI-powered insights, budgeting, and investment recommendations.",
      features: ["Financial planning", "Budget optimization", "Investment analysis", "Risk assessment", "Tax optimization", "Reporting"],
      price: "$149/month",
      popular: true,
      icon: <BarChart3 className="w-8 h-8" />,
      marketPrice: "$299/month",
      savings: "50% off",
      category: "Finance",
      useCases: ["Financial planning", "Investment analysis", "Budget management", "Tax optimization"],
      integrations: ["QuickBooks", "Xero", "Mint", "Personal Capital"]
    },
    {
      name: "AI Lead Generator Pro",
      description: "Intelligent lead generation and qualification system with AI-powered prospecting, scoring, and nurturing automation.",
      features: ["Lead scoring", "Prospect identification", "Email sequences", "CRM integration", "Conversion tracking", "ROI analysis"],
      price: "$89/month",
      popular: false,
      icon: <Zap className="w-8 h-8" />,
      marketPrice: "$179/month",
      savings: "50% off",
      category: "Sales & Marketing",
      useCases: ["Lead generation", "Prospect qualification", "Sales automation", "Conversion optimization"],
      integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Setup",
      description: "Get started in minutes with our intuitive onboarding process"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and data encryption"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Grow with confidence - our solutions scale with your business"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert technical team"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our suite of AI-powered micro SAAS solutions designed to streamline your business operations. From content creation to analytics, we have the tools you need." />
        <meta name="keywords" content="micro saas, ai tools, business automation, content creation, analytics, project management, security" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="AI-powered micro SAAS solutions for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Powerful AI-driven tools designed to streamline your business operations and boost productivity. 
                Choose from our suite of specialized micro SAAS applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Micro SAAS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our carefully crafted suite of AI-powered business tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {saasProducts.map((product, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative group ${product.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400">
                      {product.icon}
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-cyan-400 text-sm font-medium">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Integrations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.integrations.slice(0, 3).map((integration, integrationIndex) => (
                        <span key={integrationIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {integration}
                        </span>
                      ))}
                      {product.integrations.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                          +{product.integrations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-white">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">{product.marketPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">{product.savings}</span>
                    </div>
                    <p className="text-sm text-gray-400">Billed monthly • Cancel anytime • 14-day free trial</p>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SAAS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with modern businesses in mind, our solutions offer unmatched value and performance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;