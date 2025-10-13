import { Brain, Code, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const AICodeAssistantProZionTechGroup = () => {
  const features = [
    {
      title: "AI Code Generation",
      description: "Generate high-quality code in 50+ programming languages with advanced AI models",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Debugging",
      description: "Automatically detect and fix bugs with intelligent debugging assistance",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Code Optimization",
      description: "Optimize your code for performance, security, and best practices",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Language Support",
      description: "Support for 50+ programming languages and frameworks",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$29",
      period: "month",
      description: "Perfect for individual developers",
      features: [
        "Unlimited code generation",
        "Basic debugging assistance",
        "10 programming languages",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "month",
      description: "For professional development teams",
      features: [
        "Advanced AI models",
        "50+ programming languages",
        "Priority support",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom AI training",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Code Assistant Pro",
    "description": "AI-powered code generation, debugging, and optimization with support for 50+ programming languages",
    "url": "https://ziontechgroup.com/ai-code-assistant-pro",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="AI Code Assistant Pro - Zion Tech Group"
            description="Advanced AI-powered code generation, debugging, and optimization tool with support for 50+ programming languages. Boost your development productivity with intelligent coding assistance."
            keywords="AI code assistant, code generation, debugging, programming, development tools, AI coding"
            canonicalUrl="https://ziontechgroup.com/ai-code-assistant-pro"
          />
          <StructuredData data={structuredData} />
          
          <Helmet>
            <title>AI Code Assistant Pro - Zion Tech Group</title>
            <meta name="description" content="Advanced AI-powered code generation, debugging, and optimization tool with support for 50+ programming languages." />
            <meta name="keywords" content="AI code assistant, code generation, debugging, programming, development tools" />
            <link rel="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro" />
          </Helmet>

          <main>
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer>
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                    <Brain className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-blue-400 text-sm font-medium">AI-Powered Development Tool</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6">
                    AI Code Assistant Pro
                  </FuturisticTextEnhanced>
                  
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                    Revolutionize your development workflow with our advanced AI-powered code generation, 
                    debugging, and optimization tools. Support for 50+ programming languages.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right">
                      Start Free Trial
                    </FuturisticButtonEnhanced>
                    <FuturisticButtonEnhanced
                      href="/demo"
                      variant="outline"
                      size="lg"
                      icon={Code}
                      iconPosition="right">
                      Watch Demo
                    </FuturisticButtonEnhanced>
                  </div>
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
                    Harness the power of artificial intelligence to accelerate your development process 
                    and create better code faster.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your development needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-white">{plan.price}</span>
                          <span className="text-gray-400 ml-1">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300 mt-2">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        href="/contact"
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Development?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of developers using Zion AI Code Assistant Pro to write better code faster. 
                  Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/demo"
                    variant="outline"
                    size="lg"
                    icon={Code}
                    iconPosition="right">
                    Schedule Demo
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default AICodeAssistantProZionTechGroup;