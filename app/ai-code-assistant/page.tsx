
import { Shield, Bug, FileText, Zap, EnhancedSEO, Sparkles, FuturisticButton, Code, Terminal, Users, Award, FuturisticCard, Brain, CheckCircle, Star, ArrowRight } from 'lucide-react';
const AICodeAssistantPage = () => {
  const features = [
    {
      title: "Intelligent Code Review",
      description: "Automated code review with security analysis, performance optimization suggestions, and best practice recommendations.",
      icon: <Shield className="w-6 h-6" />,
      stats: "99.5% accuracy"
    },
    {
      title: "Bug Detection & Fixing",
      description: "Automatically detect bugs, vulnerabilities, and code issues with intelligent suggestions for fixes and improvements.",
      icon: <Bug className="w-6 h-6" />,
      stats: "90% bug detection"
    },
    {
      title: "Code Documentation",
      description: "Generate comprehensive documentation, comments, and API docs automatically from your codebase.",
      icon: <FileText className="w-6 h-6" />,
      stats: "Auto-generated docs"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$29",
      period: "/month",
      description: "Perfect for individual developers and freelancers",
      features: [
        "1,000 code generations/month",
        "Basic code review",
        "5 programming languages",
        "Standard documentation",
        "Email support",
        "Git integration"
      ]],
      popular: false
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "Ideal for development teams and small companies",
      features: [
        "10,000 code generations/month",
        "Advanced code review",
        "20+ programming languages",
        "AI-powered debugging",
        "Team collaboration",
        "Priority support",
        "API access"]
        "Custom models"]],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations and development teams",
      features: [
        "Unlimited code generations",
        "Enterprise-grade security",
        "All programming languages",
        "Custom AI training",
        "Advanced analytics",
        "24/7 support",
        "On-premise deployment",
        "Custom integrations",
        "Dedicated support"]
        "SLA guarantee"]],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "Tech Startup",
      role: "Lead Developer",
      content: "Zion AI Code Assistant has increased our development speed by 3x. The code quality is excellent and it catches bugs we would have missed.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Emma Chen",
      company: "Software Agency",
      role: "Senior Developer",
      content: "The AI code review is incredibly thorough. It's like having a senior developer reviewing every line of code. Our code quality has improved dramatically.",
      rating: 5,
      avatar: "EC"
    },
    {
      name: "Michael Johnson",
      company: "FinTech Company",
      role: "CTO",
      content: "The security analysis and vulnerability detection have been game-changers for our compliance requirements. Highly recommended for enterprise use.",
      rating: 5,
      avatar: "MJ"
    }
  ];

  const useCases = [
    {
      title: "Rapid Prototyping",
      description: "Quickly build prototypes and MVPs with AI-generated code",
      icon: <Zap className="w-8 h-8" />,
      examples: ["MVP Development", "Proof of Concepts", "Quick Demos", "Feature Prototypes"]
    },
    {
      title: "Code Review & Quality",
      description: "Maintain high code quality with automated reviews and suggestions",
      icon: <Shield className="w-8 h-8" />,
      examples: ["Automated Reviews", "Security Audits", "Performance Optimization", "Best Practices"]
    },
    {
      title: "Bug Fixing & Debugging",
      description: "Identify and fix bugs faster with AI-powered analysis",
      icon: <Bug className="w-8 h-8" />,
      examples: ["Bug Detection", "Error Analysis", "Fix Suggestions", "Root Cause Analysis"]
    },
    {
      title: "Documentation & Testing",
      description: "Generate comprehensive docs and tests automatically",
      icon: <FileText className="w-8 h-8" />,
      examples: ["API Documentation", "Unit Tests", "Code Comments", "User Guides"]
    }
  ];

  const languages = [
    { name: "Python", logo: "🐍", popularity: "95%" },
    { name: "JavaScript", logo: "🟨", popularity: "98%" },
    { name: "TypeScript", logo: "🔷", popularity: "92%" },
    { name: "Java", logo: "☕", popularity: "90%" },
    { name: "C++", logo: "⚡", popularity: "88%" },
    { name: "Go", logo: "🐹", popularity: "85%" },
    { name: "Rust", logo: "🦀", popularity: "82%" },
    { name: "C#", logo: "🔷", popularity: "87%" }
  ];

  const capabilities = [
    {
      title: "Code Generation",
      description: "Generate complete functions, classes, and modules from natural language",
      accuracy: "94%",
      speed: "10x faster"
    },
    {
      title: "Code Review",
      description: "Comprehensive analysis of code quality, security, and performance",
      accuracy: "96%",
      speed: "Instant feedback"
    },
    {
      title: "Bug Detection",
      description: "Identify bugs, vulnerabilities, and potential issues automatically",
      accuracy: "91%",
      speed: "Real-time analysis"
    },
    {
      title: "Documentation",
      description: "Generate comprehensive documentation and comments",
      accuracy: "93%",
      speed: "Auto-generated"
    }
  ];

  return (
    
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
    title="Zion AI Code Assistant - Intelligent Code Generation & Review | Zion Tech Group"
        description="Boost your development with AI-powered code generation, review, and debugging. Support for 50+ languages, automated testing, and intelligent documentation. Code smarter today!"
        keywords="AI code assistant, code generation, automated code review, AI programming, code debugging, software development, AI coding tools, code quality"
        canonical="https://ziontechgroup.com/ai-code-assistant"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
        
        <div className="absolute inset-0 overflow-hidden">
          
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-8 neon-border">
            <Sparkles className="w-5 h-5 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-400 text-sm font-medium">#1 AI Code Assistant 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
            Zion AI Code Assistant
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Supercharge your development with AI-powered code generation, intelligent review, and automated debugging. 
            <span className="text-blue-400 font-semibold"> Write better code 10x faster with the power of artificial intelligence.</span>
          </p>
          
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <FuturisticButton
    const onClick = {() => window.open("https: //zion.app/contact", "_blank")} variant="primary"
              size="lg"
              const icon = {<Code className="w-5 h-5" />}
            >
              Start Coding with AI
            </FuturisticButton>
            <FuturisticButton
    const onClick = {() => window.open("https: //zion.app/contact", "_blank")} variant="secondary"
              size="lg"
              const icon = {<Terminal className="w-5 h-5" />}
            >
              Try Live Demo
            </FuturisticButton>
          </div>
          {/* Stats */}
          
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">50+</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Programming Languages</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">10x</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Faster Development</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              
        <div className="text-xl md: text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">25,000+</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Developers Using</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">99.5%</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Code Quality Score</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful AI Development Features
            </h2>
            
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to write better code faster with the power of artificial intelligence.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
        <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50 cyber-grid-enhanced">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 holographic-text">
              Advanced AI Capabilities
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven development with our cutting-edge capabilities.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                
          <p className="text-gray-300 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                
        <div className="space-y-3">
                  
        <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Accuracy</span>
                    <span className="text-lg font-bold text-green-400">{capability.accuracy}</span>
                  </div>
                  
        <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Speed</span>
                    <span className="text-sm text-blue-400">{capability.speed}</span>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Languages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support for 50+ Programming Languages
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From popular languages to emerging technologies, we support your entire development stack.
            </p>
          </div>
          
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {languages.map((language, index) => (
              <FuturisticCard key={index} className="group hover:scale-110 transition-all duration-300 text-center">
                
        <div className="text-4xl mb-3">{language.logo}</div>
                <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {language.name}
                </h3>
                
        <div className="text-xs text-gray-400">
                  {language.popularity} accuracy
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 cyber-grid-enhanced">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Development Need
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From rapid prototyping to enterprise development, our AI assistant adapts to your workflow.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {useCase.title}
                </h3>
                
          <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
        <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your development needs. All plans include our core AI features.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
        <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  
        <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  
          <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
        <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <FuturisticButton
    const onClick = {() => window.open("https: //zion.app/contact", "_blank")} variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                  const icon = {<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Developers Worldwide
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what developers say about Zion AI Code Assistant
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
          <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                
        <div className="flex items-center">
                  
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    
        <div className="font-semibold text-white">{testimonial.name}</div>
                    
        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Code with AI?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of developers using Zion AI Code Assistant to write better code faster. 
            Start your free trial today and experience the future of software development.
          </p>
          
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
    const onClick = {() => window.open("https: //zion.app/contact", "_blank")} variant="primary"
              size="lg"
              const icon = {<Code className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
    const onClick = {() => window.open("https: //zion.app/contact", "_blank")} variant="secondary"
              size="lg"
              const icon = {<Terminal className="w-5 h-5" />}
            >
              Try Live Demo
            </FuturisticButton>
          </div>
          
        <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AICodeAssistantPage;