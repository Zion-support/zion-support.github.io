import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, BarChart3, Users, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const saasProducts = [
    {
      name: "AI Content Writer Pro",
      description: "Advanced AI-powered content creation tool that generates high-quality articles, blogs, and marketing copy with 99.9% accuracy.",
      features: ["GPT-4 powered generation", "SEO optimization", "Multi-language support", "Brand voice customization", "Plagiarism detection", "Content scheduling"],
      price: "$29/month",
      popular: true,
      icon: <Zap className="w-8 h-8" />,
      marketPrice: "$49-99/month",
      benefits: "Save 20+ hours/week on content creation"
    },
    {
      name: "AI Analytics Dashboard Pro",
      description: "Comprehensive business intelligence dashboard with real-time data visualization, predictive analytics, and automated insights.",
      features: ["Real-time analytics", "Custom reports", "Data export", "Team collaboration", "Predictive modeling", "Custom KPIs"],
      price: "$49/month",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      marketPrice: "$99-299/month",
      benefits: "Increase decision speed by 300%"
    },
    {
      name: "AI Security Shield Pro",
      description: "Enterprise-grade security monitoring and threat detection with AI-powered behavioral analysis and automated response.",
      features: ["24/7 monitoring", "AI threat detection", "Compliance reporting", "Incident response", "Zero-trust architecture", "SOC 2 compliance"],
      price: "$79/month",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      marketPrice: "$199-499/month",
      benefits: "Reduce security incidents by 95%"
    },
    {
      name: "AI Project Manager Pro",
      description: "Intelligent project management tool with AI-powered task optimization, resource allocation, and predictive timeline management.",
      features: ["Smart scheduling", "Resource optimization", "Progress tracking", "Team communication", "Risk prediction", "Budget forecasting"],
      price: "$39/month",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      marketPrice: "$59-149/month",
      benefits: "Complete projects 40% faster"
    },
    {
      name: "AI Email Marketing Pro",
      description: "Intelligent email marketing platform with AI-powered personalization, A/B testing, and automated campaign optimization.",
      features: ["AI personalization", "Smart segmentation", "A/B testing", "Automated campaigns", "Performance analytics", "GDPR compliance"],
      price: "$59/month",
      popular: true,
      icon: <Zap className="w-8 h-8" />,
      marketPrice: "$99-299/month",
      benefits: "Increase open rates by 150%"
    },
    {
      name: "AI Customer Support Pro",
      description: "Advanced AI chatbot and customer support automation with natural language processing and sentiment analysis.",
      features: ["24/7 AI chatbot", "Multi-language support", "Sentiment analysis", "Ticket routing", "Knowledge base", "Live chat integration"],
      price: "$89/month",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      marketPrice: "$199-599/month",
      benefits: "Reduce support costs by 70%"
    },
    {
      name: "AI Code Assistant Pro",
      description: "AI-powered coding assistant with code generation, bug detection, documentation, and automated testing capabilities.",
      features: ["Code generation", "Bug detection", "Auto-documentation", "Test generation", "Code review", "Refactoring suggestions"],
      price: "$99/month",
      popular: false,
      icon: <Zap className="w-8 h-8" />,
      marketPrice: "$199-499/month",
      benefits: "Increase development speed by 200%"
    },
    {
      name: "AI Financial Advisor Pro",
      description: "Intelligent financial planning and investment analysis tool with market prediction and portfolio optimization.",
      features: ["Portfolio analysis", "Market prediction", "Risk assessment", "Tax optimization", "Goal tracking", "Investment recommendations"],
      price: "$149/month",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      marketPrice: "$299-999/month",
      benefits: "Optimize returns by 25-40%"
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    {product.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{product.name}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">{product.description}</p>
                  
                  <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Our Price:</span>
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Market Price:</span>
                      <span className="text-lg text-gray-300 line-through">{product.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">
                      {product.benefits}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col space-y-4">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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