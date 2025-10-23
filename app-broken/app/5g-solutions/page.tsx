"use client&quot;;
import React from &quot;react&quot;;
import { Helmet } from &quot;react-helmet-async&quot;;
import { CheckCircle, Wifi, Zap, Shield, Globe, Smartphone } from &quot;lucide-react&quot;;

const FiveGSolutionsPage: React.FC = () => {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Helmet>
        <title>5G Solutions | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Revolutionary 5G solutions for businesses. High-speed connectivity, IoT integration, and next-generation network infrastructure.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;5G Solutions | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary 5G solutions for businesses. High-speed connectivity, IoT integration, and next-generation network infrastructure.&quot; />
      </Helmet>

      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4&quot;>
        <div className=&quot;container mx-auto max-w-6xl&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
              Next-Generation
              <span className=&quot;text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text&quot;>
                {&quot; &quot;}5G Solutions
              </span>
            </h1>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
              Transform your business with cutting-edge 5G technology. Experience ultra-fast connectivity, 
              real-time data processing, and seamless IoT integration.
            </p>
          </div>

          {/* Key Features */}
          <div className=&quot;grid md:grid-cols-3 gap-8 mb-16&quot;></div>
            <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center&quot;></div>
              <Wifi className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Ultra-Fast Speed</h3>
              <p className=&quot;text-gray-300&quot;>Up to 10x faster than 4G with ultra-low latency for real-time applications.</p>
            </div>
            <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center&quot;></div>
              <Zap className=&quot;w-12 h-12 text-purple-400 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Massive IoT</h3>
              <p className=&quot;text-gray-300&quot;>Connect millions of devices with advanced IoT integration capabilities.</p>
            </div>
            <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center&quot;></div>
              <Shield className=&quot;w-12 h-12 text-green-400 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Enhanced Security</h3>
              <p className=&quot;text-gray-300&quot;>Advanced encryption and security protocols for enterprise-grade protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className=&quot;py-20 px-4 bg-slate-800/30&quot;>
        <div className=&quot;container mx-auto max-w-6xl&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Our 5G Solutions</h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Comprehensive 5G implementation services tailored to your business needs
            </p>
          </div>

          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6&quot;></div>
              <Globe className=&quot;w-10 h-10 text-cyan-400 mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Network Infrastructure</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>Complete 5G network design, deployment, and optimization services.</p>
              <ul className=&quot;space-y-2&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Network planning and design
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Tower and antenna installation
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Performance optimization
                </li>
              </ul>
            </div>

            <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6&quot;></div>
              <Smartphone className=&quot;w-10 h-10 text-purple-400 mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Mobile Applications</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>5G-enabled mobile apps with real-time capabilities and enhanced performance.</p>
              <ul className=&quot;space-y-2&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  AR/VR applications
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Real-time streaming
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Edge computing integration
                </li>
              </ul>
            </div>

            <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6&quot;></div>
              <Zap className=&quot;w-10 h-10 text-green-400 mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>IoT Integration</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>Connect and manage IoT devices with 5G's massive device capacity.</p>
              <ul className=&quot;space-y-2&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Device connectivity
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Data analytics
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Remote monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;container mx-auto max-w-4xl text-center&quot;></div>
          <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
            Ready to Transform Your Business with 5G?
          </h2>
          <p className=&quot;text-xl text-gray-300 mb-8&quot;>
            Contact our experts to discuss your 5G implementation needs and get a customized solution.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300&quot;>
              Get Started
            </button>
            <button className=&quot;px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300&quot;>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGSolutionsPage;