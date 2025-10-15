import React from 'react';

  return (<>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Website Directory</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, micro SAAS solutions, _5G technology, and company information." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate through our complete website directory. Find all our AI services, _micro SAAS solutions, _5G technology, and company information.
            </p>
          </div>
        </div>

        {/* Main Pages */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 mr-3 text-cyan-400" />
                Main Pages
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">{page.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* AI Services */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 mr-3 text-purple-400" />
                AI Services
              </h2>
              <p className="text-gray-300">Advanced artificial intelligence solutions for every business need</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Micro SAAS Services */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                Micro SAAS Solutions
              </h2>
              <p className="text-gray-300">Ready-to-use business software solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {microSaasServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm group-hover:text-yellow-300 transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 5G Solutions */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-3 text-cyan-400" />
                5G Solutions
              </h2>
              <p className="text-gray-300">Next-generation 5G technology solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fiveGServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Pages */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 mr-3 text-gray-400" />
                Legal & Policies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-lg font-semibold group-hover:text-gray-300 transition-colors">
                      {page.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Contact us and we'll help you navigate to the right page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/support"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
