import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Smartphone
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 1,
      name: "AI Content Writer Pro",
      description: "Advanced AI content generation with multi-language support, SEO optimization, and brand voice customization. Perfect for blogs, social media, and marketing materials.",
      features: ["Multi-language support (50+ languages)", "SEO optimization with keyword research", "Brand voice customization", "Content scheduling & automation", "Plagiarism detection", "Content performance analytics"],
      price: "$49/month",
      marketPrice: "$99/month",
      savings: "50%",
      popular: true,
      icon: <Brain className="w-8 h-8" />,
      category: "Content Creation",
      trialDays: 14,
      featuresCount: "50+ templates"
    },
    {
      id: 2,
      name: "AI Project Manager Enterprise",
      description: "Comprehensive project management with AI-powered task allocation, resource optimization, and predictive analytics for team productivity.",
      features: ["Smart task assignment & prioritization", "Resource optimization algorithms", "Predictive deadline management", "Team collaboration tools", "Progress analytics & reporting", "Integration with 100+ tools"],
      price: "$79/month",
      marketPrice: "$149/month",
      savings: "47%",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      category: "Project Management",
      trialDays: 21,
      featuresCount: "Unlimited projects"
    },
    {
      id: 3,
      name: "AI Email Marketing Suite",
      description: "Complete email marketing automation with AI-driven personalization, A/B testing, and advanced analytics for maximum engagement.",
      features: ["AI-powered personalization engine", "Advanced A/B testing", "Behavioral trigger campaigns", "Real-time analytics dashboard", "Template library (500+ designs)", "Deliverability optimization"],
      price: "$59/month",
      marketPrice: "$119/month",
      savings: "50%",
      popular: false,
      icon: <Zap className="w-8 h-8" />,
      category: "Email Marketing",
      trialDays: 14,
      featuresCount: "Unlimited emails"
    },
    {
      id: 4,
      name: "Business Intelligence Dashboard",
      description: "Comprehensive business analytics with real-time insights, predictive modeling, and custom reporting for data-driven decisions.",
      features: ["Real-time data visualization", "Predictive analytics & forecasting", "Custom report builder", "Data integration (50+ sources)", "Automated insights", "Mobile-responsive dashboards"],
      price: "$89/month",
      marketPrice: "$199/month",
      savings: "55%",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      category: "Analytics",
      trialDays: 30,
      featuresCount: "100+ data sources"
    },
    {
      id: 5,
      name: "AI Document Processor Pro",
      description: "Advanced document processing with OCR, data extraction, and automated workflow management for maximum efficiency.",
      features: ["Advanced OCR technology (99.9% accuracy)", "Intelligent data extraction", "Multi-format conversion", "Batch processing (1000+ docs)", "Workflow automation", "API integration"],
      price: "$99/month",
      marketPrice: "$199/month",
      savings: "50%",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      category: "Document Management",
      trialDays: 14,
      featuresCount: "Unlimited processing"
    },
    {
      id: 6,
      name: "AI Customer Support Hub",
      description: "24/7 AI-powered customer support with natural language processing, multi-channel support, and seamless human handoff.",
      features: ["Advanced NLP & sentiment analysis", "Multi-channel support (chat, email, phone)", "Intelligent ticket routing", "Knowledge base integration", "Performance analytics", "Human agent escalation"],
      price: "$129/month",
      marketPrice: "$249/month",
      savings: "48%",
      popular: false,
      icon: <Globe className="w-8 h-8" />,
      category: "Customer Support",
      trialDays: 21,
      featuresCount: "Unlimited conversations"
    },
    {
      id: 7,
      name: "AI Social Media Manager",
      description: "Complete social media management with AI-powered content creation, scheduling, and performance optimization across all platforms.",
      features: ["AI content generation for all platforms", "Optimal posting time optimization", "Hashtag research & suggestions", "Engagement analytics", "Competitor analysis", "Automated responses"],
      price: "$69/month",
      marketPrice: "$139/month",
      savings: "50%",
      popular: false,
      icon: <Smartphone className="w-8 h-8" />,
      category: "Social Media",
      trialDays: 14,
      featuresCount: "All major platforms"
    },
    {
      id: 8,
      name: "AI Accounting Assistant",
      description: "Intelligent accounting automation with expense tracking, invoice generation, and financial reporting for small to medium businesses.",
      features: ["Automated expense categorization", "Invoice generation & tracking", "Financial reporting & insights", "Tax preparation assistance", "Receipt scanning & OCR", "Multi-currency support"],
      price: "$39/month",
      marketPrice: "$79/month",
      savings: "51%",
      popular: false,
      icon: <TrendingUp className="w-8 h-8" />,
      category: "Accounting",
      trialDays: 30,
      featuresCount: "Unlimited transactions"
    },
    {
      id: 9,
      name: "AI Lead Generation Engine",
      description: "Automated lead generation with AI-powered prospecting, qualification, and nurturing for maximum conversion rates.",
      features: ["AI-powered lead scoring", "Automated prospecting", "Email sequence automation", "Lead qualification", "CRM integration", "Conversion tracking"],
      price: "$79/month",
      marketPrice: "$159/month",
      savings: "50%",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      category: "Sales & Marketing",
      trialDays: 14,
      featuresCount: "Unlimited leads"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Start small and scale as your business grows with our flexible micro SAAS offerings."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Deployment",
      description: "Get up and running in minutes with our pre-built, ready-to-use solutions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with data encryption, secure APIs, and compliance standards."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Ready",
      description: "Access your tools anywhere with our responsive design and mobile apps."
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Products" },
    { number: "10K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions powered by AI. From content creation to project management, we have the tools to automate and optimize your business processes." />
        <meta name="keywords" content="micro saas, AI tools, business automation, content creation, project management, email marketing, analytics" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="AI-powered micro SAAS solutions to automate and optimize your business" />
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
                Powerful AI-driven micro SAAS tools designed to automate, optimize, and scale your business operations.
                Choose from our comprehensive suite of specialized solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View All Products
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Micro SAAS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered business tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {microSaasProducts.map((product) => (
                <div key={product.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border transition-all duration-300 hover:scale-105 ${
                  product.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/40'
                }`}>
                  {product.popular && (
                    <div className="flex items-center justify-center mb-4">
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
                    <div className="text-right">
                      <div className="text-xs text-gray-400 mb-1">{product.category}</div>
                      <div className="text-xs text-cyan-400">{product.featuresCount}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-xs text-cyan-400 ml-5">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="text-2xl font-bold text-white">
                        {product.price}
                      </div>
                      <div className="text-sm text-gray-400 line-through">
                        {product.marketPrice}
                      </div>
                    </div>
                    <div className="text-xs text-green-400 font-semibold">
                      Save {product.savings} • {product.trialDays}-day free trial
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    product.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SAAS?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses that need powerful, flexible, and cost-effective solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
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
                No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Demo
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