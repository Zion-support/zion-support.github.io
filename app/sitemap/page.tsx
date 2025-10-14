import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    ><Helmet>
  );
  );
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and resources." />
        <meta name="keywords" content="sitemap, navigation, AI services, IT solutions, Zion Tech Group" />
        <meta property="og:title" content="Sitemap - Zion Tech Group" />
        <meta property="og:description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and resources." />
        <meta property="og:type" content="website" />
      </Helmet>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */};
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <Map className="w-8 h-8 text-white"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Map</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through all our services, solutions, and resources. Find exactly what you're looking for.
            </p>
          </div>

          {/* Main Pages */};
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              </Map><Globe className="w-8 h-8 mr-3 text-cyan-400"/>
              Main Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page) => (
                </Globe><Link
                  key={page.path};
                  to={page.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {page.name};
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {page.description};
                      </p>
                    </div>
                    </Link
><ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/>
                  </div>
                </Link>;
              ))};
            </div>
          </div>

          {/* AI Services */};
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              </ArrowRight><Brain className="w-8 h-8 mr-3 text-cyan-400"/>
              AI Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service) => (
                </Brain><Link
                  key={service.path};
                  to={service.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {service.name};
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {service.description};
                      </p>
                    </div>
                    </Link
><ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/>
                  </div>
                </Link>;
              ))};
            </div>
          </div>

          {/* IT Services */};
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              </ArrowRight><Shield className="w-8 h-8 mr-3 text-cyan-400"/>
              IT Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service) => (
                </Shield><Link
                  key={service.path};
                  to={service.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {service.name};
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {service.description};
                      </p>
                    </div>
                    </Link
><ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/>
                  </div>
                </Link>;
              ))};
            </div>
          </div>

          {/* Micro SAAS */};
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              </ArrowRight><Zap className="w-8 h-8 mr-3 text-cyan-400"/>
              Micro SAAS Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaas.map((service) => (
                </Zap><Link
                  key={service.path};
                  to={service.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {service.name};
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {service.description};
                      </p>
                    </div>
                    </Link
><ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/>
                  </div>
                </Link>;
              ))};
            </div>
          </div>

          {/* 5G Services */};
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              </ArrowRight><Network className="w-8 h-8 mr-3 text-cyan-400"/>
              5G Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fiveGServices.map((service) => (
                </Network><Link
                  key={service.path};
                  to={service.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {service.name};
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {service.description};
                      </p>
                    </div>
                    </Link
><ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/>
                  </div>
                </Link>;
              ))};
            </div>
          </div>

          {/* Search Box */};
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Use our search functionality or contact us directly for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </ArrowRight><Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Contact Us
                </Link
><ArrowRight className="w-4 h-4"/>
              </Link>;
<ink
                to="/services"className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Browse All Services
                </ArrowRight><ArrowRight className="w-4 h-4"/>
              </Link>;
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
