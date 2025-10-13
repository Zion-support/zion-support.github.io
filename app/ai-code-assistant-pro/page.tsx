import { Brain, Code, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
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
  const testimonials = [
    {
      name: "Alex Thompson",
      company: "TechStart Inc",
      role: "Lead Developer",
      content: "Zion's AI Code Assistant has revolutionized our development process. It's like having a senior developer available 24/7.",
      rating: 5,
      avatar: "AT",
    },
    {
      name: "Maria Garcia",
      company: "CloudScale Solutions",
      role: "CTO",
      content: "The code generation quality is exceptional. It understands context and produces production-ready code consistently.",
      rating: 5,
      avatar: "MG",
    },
    {
      name: "David Kim",
      company: "DataFlow Systems",
      role: "Senior Engineer",
      content: "The debugging capabilities are incredible. It finds issues I would have spent hours tracking down manually.",
      rating: 5,
      avatar: "DK",
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "AI Code Generation",
      description: "Generate high-quality code in 50+ programming languages with intelligent context understanding.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Smart Debugging",
      description: "Automatically detect and fix bugs with AI-powered analysis and suggestions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Code Optimization",
      description: "Optimize your code for performance, readability, and best practices.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Security Analysis",
      description: "Identify security vulnerabilities and suggest secure coding practices.",
      color: "from-red-500 to-orange-500",
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
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Code Assistant Pro - AI-Powered Development Tool"
            description="Revolutionize your development workflow with AI-powered code generation, intelligent debugging, and optimization across 50+ programming languages."
            keywords="AI code assistant, code generation, debugging, programming, development tools, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/ai-code-assistant-pro"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <Brain className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-blue-400 text-sm font-medium">AI-Powered Development Tool</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI Code Assistant Pro
                  </FuturisticTextEnhanced>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Revolutionize your development workflow with AI-powered code generation, intelligent debugging, 
                    and optimization across 50+ programming languages.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right">
                      Start Free Trial
                    </FuturisticButtonEnhanced>
                    <Link 
                      to="/demo" 
                      className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      View Demo
                      <Target className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
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
                        aria-hidden="true">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
      </section>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by Developers Worldwide
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what developers are saying about Zion AI Code Assistant Pro
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <FuturisticCardEnhanced key={index} className="text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                        </div>
                      </div>
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