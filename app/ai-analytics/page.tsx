import React from "react";"
import { Helmet } from "react-helmet-async";

const AiAnalyticsPage = () => {
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>"
        <meta name="description" content="Advanced AI analytics solutions by Zion Tech Group." />"
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      "
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center">"
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            AI Analytics
          </h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI analytics solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
        "
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">"
            <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>"
            <p className="text-gray-300">
              Leverage machine learning to predict future trends and make data-driven decisions.
            </p>
          </div>
          "
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">"
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Insights</h3>"
            <p className="text-gray-300">
              Get instant insights from your data with real-time processing and visualization.
            </p>
          </div>
          "
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">"
            <h3 className="text-xl font-semibold text-white mb-3">Custom Dashboards</h3>"
            <p className="text-gray-300">
              Tailored analytics dashboards designed specifically for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Analytics?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Processing</h3>
                    <p className="text-gray-300">Get instant insights as your data changes with our real-time processing capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Scalable Infrastructure</h3>
                    <p className="text-gray-300">Handle any amount of data with our cloud-based, scalable analytics platform.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Integrations</h3>
                    <p className="text-gray-300">Seamlessly integrate with your existing tools and data sources.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Contact us today to learn how our AI analytics can transform your business.
              </p>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );,
};
"
export default AiAnalyticsPage;
