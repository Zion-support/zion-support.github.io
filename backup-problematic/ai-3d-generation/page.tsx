import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ArrowRight } from 'lucide-react';

export default function Ai3dGenerationPage() {
  return (
    <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Create stunning 3D models with AI-powered generation. Transform text descriptions and images into detailed 3D assets instantly." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, text-to-3D, image-to-3D, 3D assets, AI modeling" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativ e py-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="tex t-center mb-16">
            <h1 className="tex t-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="tex t-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into stunning 3D models with our advanced AI-powered generation technology.
              Create detailed 3D assets from text descriptions or 2D images in seconds.
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
                Try Demo
              </Link>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="tex t-center mb-16">
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4">
              Powerful 3D Generation Features
            </h2>
            <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional 3D models with AI assistance.
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

      {/* Use Cases Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="b g-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="tex t-center mb-12">
              <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="tex t-xl text-gray-300">
                Our AI 3D generation technology excels in various industries and applications
              </p>
            </div>

            <div className="gri d grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="fle x items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 tex t-green-400 mr-3 flex-shrink-0" />
                  <span className="tex t-sm">{useCase}</span>
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
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="tex t-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start generating professional 3D models with our AI-powered technology today.
            </p>
            <div className="fle x flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
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
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Create stunning 3D models with AI-powered generation. Transform text descriptions and images into detailed 3D assets instantly." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, text-to-3D, image-to-3D, 3D assets, AI modeling" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativ e py-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="tex t-center mb-16">
            <h1 className="tex t-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="tex t-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into stunning 3D models with our advanced AI-powered generation technology.
              Create detailed 3D assets from text descriptions or 2D images in seconds.
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
                Try Demo
              </Link>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="tex t-center mb-16">
            <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4">
              Powerful 3D Generation Features
            </h2>
            <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional 3D models with AI assistance.
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

      {/* Use Cases Section */}
      <section className="p y-20 px-4 sm:px-6 lg:px-8">
        <div className="ma x-w-7xl mx-auto">
          <div className="b g-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="tex t-center mb-12">
              <h2 className="tex t-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="tex t-xl text-gray-300">
                Our AI 3D generation technology excels in various industries and applications
              </p>
            </div>

            <div className="gri d grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="fle x items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 tex t-green-400 mr-3 flex-shrink-0" />
                  <span className="tex t-sm">{useCase}</span>
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
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="tex t-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start generating professional 3D models with our AI-powered technology today.
            </p>
            <div className="fle x flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
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