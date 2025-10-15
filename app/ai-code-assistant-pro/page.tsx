
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Globe, CheckCircle, ArrowRight, Star, Phone, Mail, Play, Terminal, GitBranch, Bug, FileText, Cpu, Cloud, Brain, Database } from 'lucide-react';

const AiCodeAssistantProPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Intelligent Code Generation",
      description: "Generate high-quality code in 50+ programming languages with AI-powered suggestions and completions.",
      benefits: ["50+ Languages", "Context-aware suggestions", "Code completion", "Syntax optimization"]
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Advanced Bug Detection",
      description: "Automatically identify and fix bugs, security vulnerabilities, and performance issues in your code.",
      benefits: ["Static analysis", "Security scanning", "Performance optimization", "Error prevention"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Code Review",
      description: "Get intelligent code reviews with suggestions for improvements, best practices, and optimization.",
      benefits: ["Automated reviews", "Best practices", "Code quality metrics", "Learning recommendations"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation Generation",
      description: "Automatically generate comprehensive documentation, comments, and API references for your code.",
      benefits: ["Auto-documentation", "API references", "Code comments", "README generation"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Analyze and optimize your code for better performance, memory usage, and execution speed.",
      benefits: ["Performance analysis", "Memory optimization", "Algorithm suggestions", "Bottleneck detection"]
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control Integration",
      description: "Seamlessly integrate with Git and other version control systems for collaborative development.",
      benefits: ["Git integration", "Merge conflict resolution", "Branch management", "Commit optimization"]
    }
  ];

  const supportedLanguages = [
    { name: "JavaScript", icon: "🟨", level: "Expert" },
    { name: "Python", icon: "🐍", level: "Expert" },
    { name: "TypeScript", icon: "🔷", level: "Expert" },
    { name: "Java", icon: "☕", level: "Expert" },
    { name: "C++", icon: "⚡", level: "Advanced" },
    { name: "C#", icon: "🔵", level: "Advanced" },
    { name: "Go", icon: "🐹", level: "Advanced" },
    { name: "Rust", icon: "🦀", level: "Advanced" },
    { name: "PHP", icon: "🐘", level: "Advanced" },
    { name: "Ruby", icon: "💎", level: "Advanced" },
    { name: "Swift", icon: "🍎", level: "Advanced" },
    { name: "Kotlin", icon: "🟣", level: "Advanced" }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$199",
      period: "month",
      description: "Perfect for individual developers and freelancers",
      features: [
        "50+ programming languages",
        "Basic code generation",
        "Bug detection & fixes",
        "Documentation generation",
        "Email support",
        "10 projects max"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$399",
      period: "month",
      description: "Ideal for development teams and small companies",
      features: [
        "All Developer features",
        "Advanced AI suggestions",
        "Code review automation",
        "Performance optimization",
        "Priority support",
        "Unlimited projects",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "month",
      description: "Complete solution for large development organizations",
      features: [
        "All Team features",
        "Custom AI models",
        "On-premise deployment",
        "Advanced security",
        "24/7 dedicated support",
        "Custom training",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "DevTech Solutions",
      role: "Lead Developer",
      content: "AI Code Assistant Pro has increased our development speed by 40%. The intelligent suggestions and bug detection are game-changers.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "StartupXYZ",
      role: "CTO",
      content: "The code generation and documentation features have saved us countless hours. Our code quality has improved significantly.",
      rating: 5
    },
    {
      name: "James Rodriguez",
      company: "Enterprise Corp",
      role: "Senior Architect",
      content: "The performance optimization and security scanning features have helped us build more robust applications. Highly recommended!",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "Web Development",
      description: "Build modern web applications with AI-powered code generation and optimization",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Express"]
    },
    {
      title: "Mobile Development",
      description: "Create cross-platform mobile apps with intelligent code suggestions and debugging",
      icon: <Terminal className="w-8 h-8" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      title: "Data Science",
      description: "Develop machine learning models and data analysis scripts with AI assistance",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Python", "R", "TensorFlow", "PyTorch", "Pandas"]
    },
    {
      title: "DevOps & Cloud",
      description: "Automate infrastructure and deployment with intelligent DevOps code generation",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant Pro - Intelligent Development Platform | Zion Tech Group</title>
        <meta name="description" content="Boost developer productivity with AI-powered code generation, bug detection, and optimization. Support for 50+ programming languages with intelligent suggestions and automation." />
        <meta name="keywords" content="AI code assistant, code generation, bug detection, programming, development tools, code optimization, IDE integration" />
        <meta property="og:title" content="AI Code Assistant Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent development platform with AI-powered code generation and optimization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-code-assistant-pro" />
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
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Development Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Code Assistant Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Supercharge your development with AI-powered code generation, intelligent debugging, 
                  and automated optimization. Support for 50+ programming languages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Powerful Development Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to write better code faster with AI-powered assistance.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
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

          {/* Supported Languages Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    50+ Programming Languages
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Get AI-powered assistance for all your favorite programming languages and frameworks.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {supportedLanguages.map((language, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-4xl mb-3">{language.icon}</div>
                    <div className="text-white font-semibold mb-1">{language.name}</div>
                    <div className="text-cyan-400 text-sm">{language.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Perfect for Every Development Need
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  From web development to data science, our AI assistant adapts to your specific use case.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Choose Your Plan
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Flexible pricing plans designed for developers of all sizes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Developer Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how developers worldwide are boosting their productivity with AI Code Assistant Pro.
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
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Code Smarter?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of developers who are already using AI Code Assistant Pro to build better software faster.
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
                    Get Free Trial
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

export default AiCodeAssistantProPage;

