import { Brain, Code, Zap, Shield, CheckCircle, ArrowRight, Star, Globe } from "lucide-react";
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
      avatar: "AT"
    },
    {
      name: "Maria Garcia",
      company: "CloudScale Solutions",
      role: "CTO",
      content: "The code generation quality is exceptional. It understands context and produces production-ready code consistently.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "David Kim",
      company: "InnovateLab",
      role: "Full Stack Developer",
      content: "Multi-language support is fantastic. We can work across different tech stacks seamlessly with this tool.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Code Assistant Pro",
    "description": "Advanced AI-powered code generation and development assistance tool",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "USD"
    }
  };

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Generation",
      description: "Generate high-quality code in 50+ programming languages with intelligent context understanding",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Debugging",
      description: "Automatically identify and fix bugs with AI-powered analysis and suggestions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Analysis",
      description: "Detect security vulnerabilities and suggest secure coding practices",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimize code performance with AI-driven suggestions and best practices",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for individual developers",
      features: [
        "5,000 code generations/month",
        "10 programming languages",
        "Basic debugging assistance",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for development teams",
      features: [
        "Unlimited code generations",
        "50+ programming languages",
        "Advanced debugging & optimization",
        "Security analysis",
        "Priority support",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 299,
      period: "month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom AI model training",
        "On-premise deployment",
        "Dedicated support",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Code Assistant Pro - Advanced AI-Powered Development Tool"
            description="Revolutionize your development workflow with AI-powered code generation, intelligent debugging, and optimization across 50+ programming languages."
            keywords="AI code assistant, code generation, debugging, development tool, programming, software development"
            canonicalUrl="https://ziontechgroup.com/ai-code-assistant-pro"
          />
          <StructuredData data={structuredData} />
          
          <main className="relative">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <ResponsiveContainer className="text-center relative z-10">
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
                    href="#pricing"
                    variant="primary"
                    size="lg"
                    icon={Code}
                    iconPosition="left">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#demo"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Watch Demo
                  </FuturisticButtonEnhanced>
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

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your development needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 mb-4">{plan.description}</p>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-white">${plan.price}</span>
                          <span className="text-gray-400 ml-1">/{plan.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
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
              </ResponsiveContainer>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    What Developers Say
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Join thousands of developers who have transformed their workflow with our AI Code Assistant
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
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-gray-400 text-sm">{testimonial.role}</div>
                          <div className="text-gray-500 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <FuturisticCardEnhanced className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/30">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Development Process?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Join thousands of developers who are already using AI to write better code faster. 
                    Start your free trial today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={Zap}
                      iconPosition="left">
                      Start Free Trial
                    </FuturisticButtonEnhanced>
                    <FuturisticButtonEnhanced
                      href="/demo"
                      variant="outline"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="left">
                      Schedule Demo
                    </FuturisticButtonEnhanced>
                  </div>
                </FuturisticCardEnhanced>
              </ResponsiveContainer>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default AICodeAssistantProZionTechGroup;