import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional services for businesses"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* AI Services */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Services</h3>
                <p className="text-gray-300 mb-4">Cutting-edge artificial intelligence solutions for business automation and optimization.</p>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More →
                </Link>
              </div>

              {/* Cloud Infrastructure */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">Scalable cloud solutions for modern businesses and enterprise applications.</p>
                <Link
                  to="/cloud-infrastructure"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More →
                </Link>
              </div>

              {/* Cybersecurity */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">Advanced security solutions to protect your business from cyber threats.</p>
                <Link
                  to="/cybersecurity-solutions"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More →
                </Link>
              </div>

              {/* 5G Solutions */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">5G</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">5G Solutions</h3>
                <p className="text-gray-300 mb-4">Next-generation connectivity and infrastructure for the future.</p>
                <Link
                  to="/5g-solutions"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
                <p className="text-gray-300 text-sm">Custom web applications and responsive websites.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Mobile Development</h3>
                <p className="text-gray-300 text-sm">iOS and Android applications for all platforms.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Data Engineering</h3>
                <p className="text-gray-300 text-sm">Data pipelines and analytics infrastructure.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Custom Software</h3>
                <p className="text-gray-300 text-sm">Tailored software solutions for your business needs.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Database Management</h3>
                <p className="text-gray-300 text-sm">Optimized database design and management services.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Micro SAAS</h3>
                <p className="text-gray-300 text-sm">Ready-to-use software solutions for immediate deployment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your project requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
