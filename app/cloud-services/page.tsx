    { icon: <TrendingUp className="w-6 h-6" />, title: 'Cost Optimization', description: 'Reduce IT costs by up to 40% with efficient cloud solutions' },
    { icon: <Zap className="w-6 h-6" />, title: 'Scalability', description: 'Scale resources instantly based on demand' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global Reach', description: 'Access your applications from anywhere in the world' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Support', description: 'Round-the-clock technical support and monitoring' }
  ];
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Migration & Infrastructure</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive cloud services. Expert cloud migration, infrastructure management, and security solutions from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cloud Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to management, 
              we provide end-to-end cloud services that drive growth and efficiency.
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Free Consultation
            <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you migrate to the cloud and unlock new possibilities for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Cloud Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
