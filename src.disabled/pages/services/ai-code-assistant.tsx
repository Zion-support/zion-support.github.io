import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Users, 
  Shield, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Lightbulb, 
  Sparkles, 
  Brain,
  Terminal,
  GitBranch,
  Bug,
  TestTube,
  FileText,
  Search,
  Copy,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Database,
  Server,
  Cpu,
  Layers
} from 'lucide-react';

const AICodeAssistant: React.FC = () => {
  const features = [
  {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate high-quality code in multiple languages with natural language prompts',
      color: 'from-blue-500 to-cyan-500'
    }, {
      icon: Bug,
      title: 'Intelligent Debugging',
      description: 'AI-powered bug detection and fixing suggestions with detailed explanations',
      color: 'from-green-500 to-emerald-500'
    }, {
      icon: TestTube,
      title: 'Auto Test Generation',
      description: 'Automatically generate unit tests, integration tests, and test cases',
      color: 'from-purple-500 to-pink-500'
    }, {
      icon: Search,
      title: 'Code Analysis',
      description: 'Deep code analysis with performance optimization and security recommendations',
      color: 'from-yellow-500 to-orange-500'
    }, {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Seamless Git integration with intelligent commit messages and branch management',
      color: 'from-red-500 to-pink-500'
    }, {
      icon: Terminal,
      title: 'CLI Integration',
      description: 'Command-line interface for developers who prefer terminal workflows',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const developmentTools = [
  {
      title: 'Code Generation',
      description: 'AI-powered code generation for faster development and prototyping',
      icon: Code,
      benefits: ['Multi-language support,Context-aware generation,Code completion,Snippet library'],
      pricing: '$29/month',
      color: 'from-blue-500 to-cyan-500'
    }, {
      title: 'Debug Assistant',
      description: 'Intelligent debugging with error analysis and fix suggestions',
      icon: Bug,
      benefits: ['Error detection,Fix suggestions,Performance analysis,Security scanning'],
      pricing: '$39/month',
      color: 'from-green-500 to-emerald-500'
    }, {
      title: 'Test Automation',
      description: 'Automated test generation and execution for comprehensive coverage',
      icon: TestTube,
      benefits: ['Unit test generation,Integration tests,Coverage analysis,CI/CD integration'],
      pricing: '$49/month',
      color: 'from-purple-500 to-pink-500'
    }, {
      title: 'Code Review',
      description: 'AI-powered code review with best practices and optimization suggestions',
      icon: Search,
      benefits: ['Code quality analysis,Best practices,Performance optimization,Security review'],
      pricing: '$59/month',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Write code 3x faster,Reduce bugs by 70%,Improve code quality,Automated testing,Real-time assistance,Multi-language support,IDE integration,Team collaboration'
  ];

  const supportedLanguages = [
    'JavaScript/TypeScript,Python,Java,C#,Go,Rust,PHP,Ruby,Swift,Kotlin,C++,React/Vue/Angular'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Code Assistant - Zion Tech Group"
        description="Revolutionary AI-powered code assistant for developers. Generate code, debug issues, write tests, and optimize performance with intelligent AI assistance."
        keywords="AI code assistant, code generation, debugging, test automation, developer tools, programming assistant, Zion Tech Group"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                <Brain className="w-4 h-4" />
                AI Code Assistant
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                AI Code
                <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Assistant
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Supercharge your development workflow with our AI-powered code assistant. Generate code, debug issues, write tests, and optimize performance with intelligent AI assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-futuristic bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                  <Code className="w-5 h-5" />
                  Start Coding
                </button>
                <button className="btn-futuristic-outline">
                  <Terminal className="w-5 h-5" />
                  Try CLI
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl border border-green-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Code Assistant</h3>
                    <p className="text-gray-300">Intelligent Development</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Powerful Development Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Code Assistant combines advanced artificial intelligence with developer-friendly tools to accelerate your coding workflow.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Tools Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Development Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered tools for every aspect of software development, from coding to testing and deployment.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developmentTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{tool.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-2">{tool.description}</p>
                    <div className="text-2xl font-bold text-green-400">{tool.pricing}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {tool.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose AI Code Assistant?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of software development with AI-powered tools that enhance productivity and code quality.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-green-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Supported Languages & Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Code Assistant supports the most popular programming languages and frameworks used by developers worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {supportedLanguages.map((language, index) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-green-500/50 transition-all duration-300 hover:bg-slate-700/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{language}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-cyan-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Supercharge Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers using AI Code Assistant to write better code faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                <MessageCircle className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="btn-futuristic-outline">
                <Phone className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get Started Today
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your development workflow? Our AI Code Assistant team is here to help you implement intelligent coding tools that boost productivity.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request Developer Demo</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your development needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                >
                  <MessageCircle className="w-5 h-5" />
                  Request Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )};

export default AICodeAssistant;
  );
};