import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Mail, 
  Play, 
  Terminal, 
  GitBranch, 
  Bug, 
  FileText, 
  Cpu, 
  Cloud, 
  Brain, 
  Database } from 'lucide-react';

const AiCodeAssistantProPage = () => { const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); }, []);

  const features = [
    { icon: <Code className="w-6 h-6" />,
      title: "Intelligent Code Generation",
      description: "Generate high-quality code in 50+ programming languages with AI-powered suggestions and completions.",
      benefits: ["50+ Languages", "Context-aware suggestions", "Code completion", "Syntax optimization"] },
    { icon: <Bug className="w-6 h-6" />,
      title: "Advanced Bug Detection",
      description: "Automatically identify and fix bugs, security vulnerabilities, and performance issues in your code.",
      benefits: ["Static analysis", "Security scanning", "Performance optimization", "Error prevention"] },
    { icon: <Brain className="w-6 h-6" />,
      title: "AI Code Review",
      description: "Get intelligent code reviews with suggestions for improvements, best practices, and optimization.",
      benefits: ["Automated reviews", "Best practices", "Code quality metrics", "Learning recommendations"] },
    { icon: <FileText className="w-6 h-6" />,
      title: "Documentation Generation",
      description: "Automatically generate comprehensive documentation, comments, and API references for your code.",
      benefits: ["Auto-documentation", "API references", "Code comments", "README generation"] },
    { icon: <Cpu className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Analyze and optimize your code for better performance, memory usage, and execution speed.",
      benefits: ["Performance analysis", "Memory optimization", "Algorithm suggestions", "Bottleneck detection"] },
    { icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control Integration",
      description: "Seamlessly integrate with Git and other version control systems for collaborative development.",
      benefits: ["Git integration", "Merge conflict resolution", "Branch management", "Commit optimization"] }
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
    { name: "Developer",
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
      popular: false },
    { name: "Team",
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
      popular: true },
    { name: "Enterprise",
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
      popular: false }
  ];

  const testimonials = [
    { name: "David Kim",
      company: "DevTech Solutions",
      role: "Lead Developer",
      content: "AI Code Assistant Pro has increased our development speed by 40%. The intelligent suggestions and bug detection are game-changers.",
      rating: 5 },
    { name: "Lisa Wang",
      company: "StartupXYZ",
      role: "CTO",
      content: "The code generation and documentation features have saved us countless hours. Our code quality has improved significantly.",
      rating: 5 },
    { name: "James Rodriguez",
      company: "Enterprise Corp",
      role: "Senior Architect",
      content: "The performance optimization and security scanning features have helped us build more robust applications. Highly recommended!",
      rating: 5 }
  ];

  const useCases = [
    { title: "Web Development",
      description: "Build modern web applications with AI-powered code generation and optimization",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Express"] },
    { title: "Mobile Development",
      description: "Create cross-platform mobile apps with intelligent code suggestions and debugging",
      icon: <Terminal className="w-8 h-8" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"] },
    { title: "Data Science",
      description: "Develop machine learning models and data analysis scripts with AI assistance",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Python", "R", "TensorFlow", "PyTorch", "Pandas"] },
    { title: "DevOps & Cloud",
      description: "Automate infrastructure and deployment with intelligent DevOps code generation",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform"] }
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
        { /* Animated Background */ }
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        { /* Grid Pattern */ }
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={ {
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px' }}></div>
        </div>

        { /* Hero Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Code Assistant <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Boost developer productivity with AI-powered code generation, intelligent bug detection, 
                and automated optimization. Support for 50+ programming languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        { /* Features Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to write better code faster
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              { features.map((feature, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    { feature.icon }
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{ feature.title }</h3>
                  <p className="text-gray-300 mb-4">{ feature.description }</p>
                  <ul className="space-y-2">
                    { feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex } className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        { benefit }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        { /* Supported Languages Section */ }
        <section className="relative py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">50+ Programming Languages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From popular languages to emerging technologies
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              { supportedLanguages.map((language, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">{ language.icon }</div>
                  <div className="text-white font-semibold mb-1">{ language.name }</div>
                  <div className="text-cyan-400 text-sm">{ language.level }</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        { /* Use Cases Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Perfect for Every Development Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From web development to data science
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              { useCases.map((useCase, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-cyan-400 mb-4">
                    { useCase.icon }
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{ useCase.title }</h3>
                  <p className="text-gray-300 mb-6">{ useCase.description }</p>
                  <div className="flex flex-wrap gap-2">
                    { useCase.technologies.map((tech, techIndex) => (
                      <span key={techIndex } className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        { tech }
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        { /* Pricing Section */ }
        <section className="relative py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for developers of all sizes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              { pricingPlans.map((plan, index) => (
                <div key={index } className={ `bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-white/20' } relative`}>
                  { plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  ) }
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      { plan.price }<span className="text-lg text-gray-400">/{ plan.period }</span>
                    </div>
                    <p className="text-gray-300">{ plan.description }</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    { plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex } className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        { feature }
                      </li>
                    ))}
                  </ul>
                  <button className={ `w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' 
                      : 'bg-white/20 text-white hover:bg-white/30' }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        { /* Testimonials Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What Developers Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by thousands of developers worldwide
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              { testimonials.map((testimonial, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    { [...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{ testimonial.content }"</p>
                  <div>
                    <div className="font-semibold text-white">{ testimonial.name }</div>
                    <div className="text-cyan-400">{ testimonial.role }</div>
                    <div className="text-gray-400 text-sm">{ testimonial.company }</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        { /* CTA Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Code Smarter?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already using AI to write better code faster.
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

export default AiCodeAssistantProPage;