import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  const heroStats = [
    { value: '6+', label: 'Micro SaaS Services', color: 'text-cyan-400' },
    { value: '14-Day', label: 'Free Trial', color: 'text-fuchsia-400' },
    { value: 'AI-Powered', label: 'Solutions', color: 'text-blue-400' },
    { value: 'Competitive', label: 'Pricing', color: 'text-green-400' },
  ];

  const heroStats = marketStats;

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Market-Driven Solutions',
      description: 'Real micro SaaS services with competitive pricing, market analysis, and proven business models.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
      price: 'Starting at $49/month',
      marketSize: '$45B+ global market',
      competitors: 'Salesforce, HubSpot, Adobe'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation for social media, SEO, email marketing, and business intelligence.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      price: 'Starting at $199/month',
      marketSize: '$200B+ global market',
      competitors: 'OpenAI, Google AI, Microsoft AI'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'Clear pricing tiers with competitive rates, feature comparisons, and market positioning.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      price: 'Starting at $299/month',
      marketSize: '$100B+ global market',
      competitors: 'AWS, Azure, Google Cloud'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Targeted Use Cases',
      description: 'Specific solutions for marketing agencies, e-commerce, SaaS companies, and content creators.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      price: 'Starting at $99/month',
      marketSize: '$25B+ global market',
      competitors: 'Shopify, Wix, Squarespace'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Features',
      description: 'Advanced security, compliance, white-label solutions, and SLA guarantees for large organizations.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      price: 'Starting at $399/month',
      marketSize: '$150B+ global market',
      competitors: 'CrowdStrike, Palo Alto, Fortinet'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Market Intelligence',
      description: 'Comprehensive market analysis, competitive positioning, and growth opportunity insights.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      price: 'Starting at $49/month',
      marketSize: '$50B+ global market',
      competitors: 'Stripe, PayPal, Square'
=======
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Code Review Assistant',
      description: 'AI-powered code analysis with security, performance, and maintainability insights. Support for JavaScript, Python, and TypeScript.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      pricing: 'Free tier, Pro from $29/month'
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'API Rate Limiter',
      description: 'Intelligent rate limiting with configurable policies, real-time analytics, and Express.js middleware support.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      pricing: 'Free tier, Enterprise from $99/month'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Email Validator',
      description: 'Comprehensive email validation with security risk assessment, disposable email detection, and MX record validation.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
      pricing: 'Free tier, Pro from $19/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Password Strength Checker',
      description: 'Advanced password analysis with security recommendations, policy enforcement, and strong password generation.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      pricing: 'Free tier, Pro from $15/month'
    },
    {
      icon: <Link className="w-8 h-8 text-white" />,
      title: 'URL Shortener',
      description: 'Professional URL shortening with analytics, custom aliases, password protection, and expiration dates.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      pricing: 'Free tier, Pro from $25/month'
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'JSON Formatter',
      description: 'Advanced JSON processing with validation, transformation, schema generation, and performance optimization.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: 'Free tier, Pro from $20/month'
    },
    {
      icon: <QrCode className="w-8 h-8 text-white" />,
      title: 'QR Code Generator',
      description: 'Professional QR code creation with customization, security validation, and multiple content types support.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
      pricing: 'Free tier, Pro from $30/month'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'File Type Detector',
      description: 'Intelligent file analysis with security scanning, metadata extraction, and magic number detection.',
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      gradient: 'from-amber-400 to-orange-500',
      pricing: 'Free tier, Pro from $35/month'
    }
  ];

  const microSaasServices = [
    {
      icon: '📝',
      title: 'AI Content Generator',
      description: 'Generate high-quality, SEO-optimized content in seconds with advanced AI writing assistance.',
      href: '/ai-content-generator',
      color: 'from-purple-500 to-indigo-600',
      stats: ['50+ Languages', '10M+ Words Generated', '99.9% Plagiarism-Free']
    },
    {
      icon: '👁️',
      title: 'Cloud Monitoring & Analytics',
      description: 'Real-time infrastructure monitoring with AI-powered insights and intelligent alerting.',
      href: '/cloud-monitoring',
      color: 'from-green-500 to-emerald-600',
      stats: ['99.99% Uptime', '1M+ Metrics Tracked', '<100ms Latency']
    },
    {
      icon: '🔍',
      title: 'AI-Powered SEO Suite',
      description: 'Comprehensive SEO tools with AI-powered optimization, keyword research, and analytics.',
      href: '/ai-seo-suite',
      color: 'from-blue-500 to-cyan-600',
      stats: ['+150% Organic Traffic', '+45% Search Rankings', '400% ROI']
    }
  ];

  const microSaasServices = [
    { 
      name: 'Social Media Analytics', 
      category: 'Marketing', 
      icon: '📊',
      price: 'From $49/month',
      description: 'AI-powered social media performance tracking'
    },
    { 
      name: 'SEO Content Optimization', 
      category: 'SEO', 
      icon: '🔍',
      price: 'From $39/month',
      description: 'AI-driven content optimization for better rankings'
    },
    { 
      name: 'Email Marketing Automation', 
      category: 'Marketing', 
      icon: '📧',
      price: 'From $29/month',
      description: 'Intelligent email automation with AI segmentation'
    },
    { 
      name: 'Customer Feedback Platform', 
      category: 'Analytics', 
      icon: '🎯',
      price: 'From $19/month',
      description: 'AI-powered feedback collection and analysis'
    },
    { 
      name: 'Business Intelligence', 
      category: 'Analytics', 
      icon: '📈',
      price: 'From $79/month',
      description: 'Real-time BI dashboards and reporting'
    },
    { 
      name: 'AI Chatbot Builder', 
      category: 'Automation', 
      icon: '🤖',
      price: 'From $25/month',
      description: 'No-code AI chatbot platform'
    }
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡' },
    { name: 'React', category: 'Library', icon: '⚛️' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
    { name: 'PyTorch', category: 'AI/ML', icon: '🔥' },
    { name: 'Express.js', category: 'Backend', icon: '🚀' }
  ];

  const useCases = [
    {
      title: 'Development Teams',
      description: 'Improve code quality, security, and team collaboration with our development tools.',
      icon: '👥',
      services: ['Code Review', 'Git Management', 'JSON Processing']
    },
    {
      title: 'Security & Compliance',
      description: 'Enhance your security posture with validation, threat detection, and compliance tools.',
      icon: '🔒',
      services: ['Email Validation', 'Password Security', 'File Analysis']
    },
    {
      title: 'Marketing & Analytics',
      description: 'Track campaigns, generate QR codes, and analyze performance with our utility services.',
      icon: '📊',
      services: ['URL Shortening', 'QR Generation', 'Analytics']
    },
    {
      title: 'API Protection',
      description: 'Secure your APIs with intelligent rate limiting and threat prevention.',
      icon: '🛡️',
      services: ['Rate Limiting', 'Security Scanning', 'Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider | AI, Cloud & Digital Transformation</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with innovative micro SAAS solutions." />
        <meta name="keywords" content="technology solutions, AI services, cloud migration, web development, mobile apps, cybersecurity, micro SAAS, digital transformation" />
      </Head>
      
      <Header />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative micro SAAS services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Explore Our Services
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              View Products
            </Link>
            <a href="tel:+13024640950" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions that drive innovation and transform businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`relative p-6 rounded-xl bg-gradient-to-br ${service.color} hover:scale-105 transition-all duration-300 cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-white">
                    <service.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Leading-edge technology with proven results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Advanced Services Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              2025 Advanced Services Portfolio
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of cutting-edge micro SAAS services, AI solutions, 
              quantum technologies, and revolutionary IT services
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                🧠 AI & Machine Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                ⚛️ Quantum Computing
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                🛡️ Cybersecurity
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm">
                🚀 Space Technology
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm">
                🌐 Edge Computing
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm">
                🧬 Neural Interfaces
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/2025-advanced-services-showcase"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/comprehensive-2025-services-showcase"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                View Service Catalog
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "AI Autonomous DevOps Orchestrator",
                description: "Self-healing DevOps with intelligent automation and predictive maintenance",
                price: "$1,299/month",
                icon: "🤖",
                color: "from-emerald-500 to-teal-600",
                features: ["Autonomous CI/CD", "Predictive scaling", "Self-healing deployments"],
                link: "/2025-advanced-services-showcase"
              },
              {
                title: "Quantum Financial Modeling Platform",
                description: "Quantum-powered financial modeling for unprecedented accuracy and speed",
                price: "$4,999/month",
                icon: "💰",
                color: "from-green-500 to-emerald-600",
                features: ["Quantum simulations", "Portfolio optimization", "Risk modeling"],
                link: "/2025-advanced-services-showcase"
              },
              {
                title: "AI-Powered Threat Hunting Platform",
                description: "Proactive threat detection with autonomous hunting and response",
                price: "$2,199/month",
                icon: "🔍",
                color: "from-red-500 to-pink-600",
                features: ["Autonomous hunting", "AI behavioral analysis", "Real-time intelligence"],
                link: "/2025-advanced-services-showcase"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <span className="text-xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <div className="mb-4">
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href={service.link}
                  className="inline-flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
