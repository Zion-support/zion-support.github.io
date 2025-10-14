import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Brain, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  Download,
  Play,
  Settings,
  Target,
  Bug,
  FileText,
  GitBranch,
  Terminal,
  Cpu,
  Database
} from 'lucide-react';

const AICodeAssistantPro: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Intelligent Code Generation",
      description: "Generate high-quality code in 50+ programming languages with AI-powered suggestions and completions.",
      benefits: ["50+ Languages", "Context-aware suggestions", "Code completion", "Syntax highlighting"]
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Advanced Bug Detection",
      description: "Automatically detect and fix bugs, security vulnerabilities, and performance issues in your code.",
      benefits: ["Static analysis", "Security scanning", "Performance optimization", "Error prevention"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Code Review",
      description: "Get intelligent code reviews with suggestions for improvements, best practices, and optimization.",
      benefits: ["Automated reviews", "Best practices", "Code quality metrics", "Refactoring suggestions"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation Generation",
      description: "Automatically generate comprehensive documentation, comments, and API references for your code.",
      benefits: ["Auto-documentation", "API references", "Code comments", "README generation"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Git Integration",
      description: "Seamlessly integrate with Git workflows, commit analysis, and branch management.",
      benefits: ["Commit analysis", "Branch management", "Merge conflict resolution", "Version control"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Ensure your code meets security standards and compliance requirements with automated checks.",
      benefits: ["Security scanning", "Compliance checks", "Vulnerability detection", "Standards compliance"]
    }
  ];

  const pricingTiers = [
    {
      name: "Developer",
      price: "$199",
      period: "per month",
      description: "Perfect for individual developers and small teams",
      features: [
        "Up to 5 projects",
        "50+ programming languages",
        "Basic AI suggestions",
        "Bug detection",
        "Email support",
        "10GB storage"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$399",
      period: "per month",
      description: "Ideal for development teams and growing companies",
      features: [
        "Up to 25 projects",
        "Advanced AI features",
        "Code review automation",
        "Team collaboration",
        "Priority support",
        "50GB storage",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited projects",
        "All AI features",
        "Custom AI models",
        "On-premise deployment",
        "24/7 dedicated support",
        "Unlimited storage",
        "Full API access",
        "Custom security protocols",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Senior Developer, DevCorp",
      content: "AI Code Assistant Pro has revolutionized our development process. We've increased productivity by 300% and reduced bugs by 80%.",
      rating: 5,
      company: "DevCorp"
    },
    {
      name: "Maria Garcia",
      role: "CTO, StartupTech",
      content: "The intelligent code generation and bug detection features are game-changers. Our code quality has improved dramatically.",
      rating: 5,
      company: "StartupTech"
    },
    {
      name: "David Kim",
      role: "Lead Engineer, BigTech Inc.",
      content: "Outstanding tool! The AI code review and documentation generation have saved us countless hours and improved our code standards.",
      rating: 5,
      company: "BigTech Inc."
    }
  ];

  const supportedLanguages = [
    "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "PHP", "Ruby",
    "Swift", "Kotlin", "Dart", "Scala", "R", "MATLAB", "Perl", "Lua", "Haskell", "Clojure",
    "Elixir", "Erlang", "F#", "OCaml", "Julia", "Nim", "Crystal", "Zig", "V", "D"
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group | Intelligent Development Tools</title>
        <meta name="description" content="Boost developer productivity with AI Code Assistant Pro. Intelligent code generation, bug detection, and automated reviews for 50+ programming languages." />
        <meta name="keywords" content="AI code assistant, code generation, bug detection, code review, programming, development tools, IDE integration" />
        <meta property="og:title" content="AI Code Assistant Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent development tools powered by AI for modern developers." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 pt-32">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-6xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Code className="w-4 h-4 mr-2" />
                  AI-Powered Development Tools
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Code Assistant Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Boost developer productivity by 300% with intelligent code generation, 
                  automated bug detection, and AI-powered code reviews for 50+ programming languages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Demo
                  </a>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">300%</div>
                    <div className="text-gray-400 text-sm">Productivity Boost</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Bug className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">80%</div>
                    <div className="text-gray-400 text-sm">Bug Reduction</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-gray-400 text-sm">Languages</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">10K+</div>
                    <div className="text-gray-400 text-sm">Developers</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Supported Languages Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Supported Languages
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Write code in 50+ programming languages with AI-powered assistance
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                {supportedLanguages.map((language, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-cyan-400 font-semibold text-sm">{language}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Powerful Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Everything you need to write better code faster with AI assistance
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Simple Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your development needs. All plans include 24/7 support and regular updates.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      tier.popular 
                        ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="tel:+13024640950"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What Developers Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of developers who have transformed their coding experience with AI Code Assistant Pro.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-cyan-500/20 pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Code Smarter?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of developers who have revolutionized their coding workflow with AI Code Assistant Pro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AICodeAssistantPro;