import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ArrowRight } from 'lucide-react';

export default function AiDrugDiscoveryProPage() {
  return (
    <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug discovery platform. Accelerate pharmaceutical research with advanced machine learning and molecular modeling." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, molecular modeling, drug development, clinical trials, biotechnology" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativ e py-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="tex t-center mb-16">
            <h1 className="tex t-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Drug Discovery Pro
            </h1>
            <p className="tex t-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform.
              Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
            </p>
            <div className="fle x flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="m l-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="tex t-center mb-16">
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Drug Discovery Features
            </h2>
            <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology to accelerate pharmaceutical research and development.
            </p>
          </div>

          <div className="gri d grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="b g-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="m b-4">{feature.icon}</div>
                <h3 className="tex t-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="tex t-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Applications Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="b g-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="tex t-center mb-12">
              <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4">
                Research Applications
              </h2>
              <p className="tex t-xl text-gray-300">
                Our AI drug discovery platform supports research across multiple therapeutic areas
              </p>
            </div>

            <div className="gri d grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="fle x items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 tex t-green-400 mr-3 flex-shrink-0" />
                  <span className="tex t-sm">{application}</span>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="b g-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="tex t-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Drug Discovery?
            </h2>
            <p className="tex t-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your pharmaceutical research with our AI-powered drug discovery platform.
            </p>
            <div className="fle x flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Our Experts
              </Link>
              <Link
                to="/ai-services"
                className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All AI Services
              </Link>
            </div>
        </div>
      </section>    <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug discovery platform. Accelerate pharmaceutical research with advanced machine learning and molecular modeling." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, molecular modeling, drug development, clinical trials, biotechnology" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativ e py-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="tex t-center mb-16">
            <h1 className="tex t-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Drug Discovery Pro
            </h1>
            <p className="tex t-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform.
              Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
            </p>
            <div className="fle x flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="m l-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="tex t-center mb-16">
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Drug Discovery Features
            </h2>
            <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology to accelerate pharmaceutical research and development.
            </p>
          </div>

          <div className="gri d grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="b g-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="m b-4">{feature.icon}</div>
                <h3 className="tex t-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="tex t-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Applications Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="b g-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="tex t-center mb-12">
              <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4">
                Research Applications
              </h2>
              <p className="tex t-xl text-gray-300">
                Our AI drug discovery platform supports research across multiple therapeutic areas
              </p>
            </div>

            <div className="gri d grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="fle x items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 tex t-green-400 mr-3 flex-shrink-0" />
                  <span className="tex t-sm">{application}</span>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="b g-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="tex t-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Drug Discovery?
            </h2>
            <p className="tex t-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your pharmaceutical research with our AI-powered drug discovery platform.
            </p>
            <div className="fle x flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Our Experts
              </Link>
              <Link
                to="/ai-services"
                className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All AI Services
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}