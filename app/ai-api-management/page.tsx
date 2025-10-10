      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling']},
    {title: 'Automated Documentation',
    {icon: <Zap className="w-8 h-8 text-blue-500" />, value: '99.9%', label: 'Uptime' ,},
    {icon: <Shield className="w-8 h-8 text-green-500" />, value: '100%', label: 'Security' ,},
    {icon: <Users className="w-8 h-8 text-purple-500" />, value: '10K+', label: 'APIs Managed' ,},
    {icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' ,}]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">)</div>
      <Helmet />
      {/* Stats Section */} <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,</div>
            {stats.map((stat, index) => (
              <div key={index}className="text-center">
                <div className="flex justify-center mb-4">{stat.icon</div>} </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
      {/* Features Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Powerful Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive API management with AI-powered intelligence;</p>
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description</p>}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit</span>}</span>
      {/* Benefits Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our API Management?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our proven solutions;</p>
  </
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
      {/* CTA Section */} <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
</div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Contact our experts to discuss your API management requirements and get started today.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Contact Us;
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                Learn More;
