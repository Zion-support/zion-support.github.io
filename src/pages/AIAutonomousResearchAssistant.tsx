import { Link } from 'react-router-dom';
      description: "Instant analysis and insights as new data becomes available"
    },
    {
      icon: Globe,
      title: "Multi-source Integration",
      description: "Connect to academic databases, research papers, and industry reports"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Transform complex research data into clear, actionable visualizations"
      description: "Advanced machine learning algorithms that understand context and generate insights from vast datasets"
    },
    {
      icon: Search,
      title: "Intelligent Discovery",
      description: "Automated literature review, hypothesis generation, and research gap identification"
    },
    {
      icon: Database,
      title: "Multi-Source Integration",
      description: "Seamlessly connects academic databases, research papers, and real-time data sources"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecasts research trends and identifies emerging opportunities in your field"
    },
    {
      icon: Users,
      title: "Collaborative Research",
      icon: Database,
      title: "Multi-Source Integration",
      description: "Seamlessly connects academic databases, research papers, and real-time data sources"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecasts research trends and identifies emerging opportunities in your field"
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "Facilitates team collaboration with shared research spaces and real-time updates"
    },
    {
      icon: Globe,
      title: "Global Knowledge Access",
      description: "Access to international research databases and cross-cultural insights"
    {
      title: "Academic Research",
      description: "Comprehensive academic research with citation management",
      icon: BookOpen,
      features: ["Peer-reviewed papers", "Citation tracking", "Literature synthesis", "Research gaps identification"]
    },
    {
      title: "Market Research",
      description: "Industry and market analysis with competitive intelligence",
      icon: BarChart3,
      features: ["Market trends", "Competitor analysis", "Industry reports", "Market sizing"]
    },
    {
      title: "Technical Research",
      description: "Deep technical research and technology assessment",
      icon: Code,
      features: ["Technology evaluation", "Patent research", "Technical specifications", "Innovation tracking"]
    },
    {
      title: "Business Intelligence",
      description: "Business research and strategic intelligence gathering",
      icon: Building,
      features: ["Company research", "Financial analysis", "Strategic insights", "Risk assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white">
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="AI Autonomous Research Assistant - Zion Tech Group"
        description="Revolutionary AI-powered research assistant that autonomously conducts research, analyzes data, and generates insights across multiple domains."
        keywords="AI research assistant, autonomous research, research automation, AI analysis, research insights, automated research"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Autonomous Research Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your research capabilities with our revolutionary AI-powered assistant that autonomously 
            conducts research, analyzes data, and generates insights across multiple domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/ai-autonomous-systems"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous Research Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered research assistant autonomously discovers, analyzes, and 
              synthesizes information with unprecedented speed and accuracy.
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-green-600 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
            ))}
          </div>
        </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Research Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered autonomous research.
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Research Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From initial discovery to final publication, our AI assistant handles every aspect of the research process.
            </p>
          </motion.div>
          
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research support across all major domains and disciplines.
      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant is designed for organizations that need comprehensive, 
              fast, and accurate research capabilities.
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research coverage across all major industries and domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {area.description}
                </p>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the future of autonomous research with Zion Tech Group.
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Research?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who have already transformed their work with our AI-powered 
              research assistant. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-purple px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
