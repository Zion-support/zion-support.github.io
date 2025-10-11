      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with our AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.company}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 text-center">
                    <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Impact Summary</h3>
                    <p className="text-gray-300">
                      This project demonstrates the transformative power of AI and IT solutions in modern business operations.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default CaseStudiesPage