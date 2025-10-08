import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 1,
      name: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with AI-driven insights, predictive analytics, and automated reporting.",
      features: [
        "Real-time data visualization",
        "AI-powered predictive analytics",
        "Custom dashboard creation",
        "Automated report generation",
        "Multi-platform integration",
        "Advanced data filtering"
      ],
      pricing: "$299/month",
      category: "Analytics",
      icon: "📊",
      popular: true
    },
    {
      id: 2,
      name: "Smart Customer Support Bot",
      description: "Intelligent chatbot with natural language processing, multi-language support, and seamless human handoff.",
      features: [
        "24/7 automated support",
        "Multi-language support",
        "Sentiment analysis",
        "Ticket routing",
        "Knowledge base integration",
        "Performance analytics"
      ],
      pricing: "$199/month",
      category: "Customer Service",
      icon: "🤖",
      popular: false
    },
    {
      id: 3,
      name: "Automated Social Media Manager",
      description: "AI-driven social media management with content generation, scheduling, and engagement optimization.",
      features: [
        "AI content generation",
        "Multi-platform posting",
        "Engagement optimization",
        "Hashtag research",
        "Performance tracking",
        "Brand voice consistency"
      ],
      pricing: "$149/month",
      category: "Marketing",
      icon: "📱",
      popular: true
    },
    {
      id: 4,
      name: "Intelligent Email Marketing Platform",
      description: "Advanced email marketing with AI segmentation, personalization, and automated campaign optimization.",
      features: [
        "AI-powered segmentation",
        "Dynamic content personalization",
        "A/B testing automation",
        "Behavioral triggers",
        "Deliverability optimization",
        "ROI tracking"
      ],
      pricing: "$179/month",
      category: "Marketing",
      icon: "📧",
      popular: false
    },
    {
      id: 5,
      name: "Smart Inventory Management System",
      description: "AI-powered inventory optimization with demand forecasting, automated reordering, and waste reduction.",
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Waste reduction analytics",
        "Supplier optimization",
        "Real-time tracking",
        "Cost optimization"
      ],
      pricing: "$399/month",
      category: "Operations",
      icon: "📦",
      popular: false
    },
    {
      id: 6,
      name: "AI-Powered HR Management Suite",
      description: "Comprehensive HR solution with AI recruitment, performance analytics, and employee engagement tools.",
      features: [
        "AI resume screening",
        "Performance analytics",
        "Employee engagement tracking",
        "Automated scheduling",
        "Compliance monitoring",
        "Skills gap analysis"
      ],
      pricing: "$249/month",
      category: "Human Resources",
      icon: "👥",
      popular: true
    },
    {
      id: 7,
      name: "Smart Financial Planning Tool",
      description: "AI-driven financial planning with budget optimization, expense tracking, and investment recommendations.",
      features: [
        "Automated expense categorization",
        "Budget optimization",
        "Investment recommendations",
        "Financial goal tracking",
        "Risk assessment",
        "Tax optimization"
      ],
      pricing: "$129/month",
      category: "Finance",
      icon: "💰",
      popular: false
    },
    {
      id: 8,
      name: "Intelligent Project Management Platform",
      description: "AI-enhanced project management with resource optimization, timeline prediction, and risk assessment.",
      features: [
        "AI timeline prediction",
        "Resource optimization",
        "Risk assessment",
        "Task prioritization",
        "Team collaboration tools",
        "Progress tracking"
      ],
      pricing: "$199/month",
      category: "Project Management",
      icon: "📋",
      popular: true
    },
    {
      id: 9,
      name: "Smart Document Processing System",
      description: "AI-powered document management with OCR, classification, and automated workflow processing.",
      features: [
        "OCR text extraction",
        "Document classification",
        "Automated workflows",
        "Version control",
        "Search and retrieval",
        "Compliance tracking"
      ],
      pricing: "$159/month",
      category: "Document Management",
      icon: "📄",
      popular: false
    },
    {
      id: 10,
      name: "AI-Powered Lead Generation Engine",
      description: "Intelligent lead generation with automated prospecting, qualification, and nurturing campaigns.",
      features: [
        "Automated prospecting",
        "Lead scoring",
        "Email sequence automation",
        "CRM integration",
        "Conversion tracking",
        "ROI optimization"
      ],
      pricing: "$229/month",
      category: "Sales",
      icon: "🎯",
      popular: true
    },
    {
      id: 11,
      name: "Smart Website Performance Optimizer",
      description: "AI-driven website optimization with speed enhancement, SEO improvement, and user experience analysis.",
      features: [
        "Speed optimization",
        "SEO enhancement",
        "User experience analysis",
        "A/B testing",
        "Performance monitoring",
        "Conversion optimization"
      ],
      pricing: "$179/month",
      category: "Web Development",
      icon: "⚡",
      popular: false
    },
    {
      id: 12,
      name: "Intelligent Data Backup & Recovery",
      description: "AI-powered backup solution with automated scheduling, intelligent deduplication, and instant recovery.",
      features: [
        "Automated backups",
        "Intelligent deduplication",
        "Instant recovery",
        "Cross-platform sync",
        "Security encryption",
        "Compliance reporting"
      ],
      pricing: "$99/month",
      category: "Data Management",
      icon: "💾",
      popular: false
    }
  ];

  const categories = [...new Set(microSAASServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Powerful, Affordable, AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business operations with our comprehensive suite of micro SAAS solutions. 
            Each tool is designed to solve specific business challenges with cutting-edge AI technology 
            and enterprise-grade security.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-3 text-lg">Quick Setup</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Deploy in minutes with our plug-and-play solutions. No complex configurations required.</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-lg">Cost Effective</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Starting from $99/month with no hidden fees. Scale as you grow with flexible pricing.</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Bank-level security with SOC 2 compliance and end-to-end encryption.</p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="cyber-button">All Services</button>
            {categories.map(category => (
              <button key={category} className="cyber-card hover:bg-cyan-500/10 transition-colors">
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map(service => (
              <div key={service.id} className={`cyber-card hologram-card relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {service.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{service.pricing}</div>
                  <button className="cyber-button w-full mb-3">
                    Start Free Trial
                  </button>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Up to 3 micro SAAS tools
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Basic AI features
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Email support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  10GB storage
                </li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card ring-2 ring-cyan-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Up to 10 micro SAAS tools
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Advanced AI features
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Priority support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  100GB storage
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  API access
                </li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Unlimited micro SAAS tools
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Custom AI models
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  24/7 dedicated support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Unlimited storage
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  White-label solutions
                </li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
            increase efficiency, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
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
            <p>✓ 14-day free trial on all plans</p>
            <p>✓ No setup fees or hidden costs</p>
            <p>✓ Cancel anytime with 30-day notice</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;