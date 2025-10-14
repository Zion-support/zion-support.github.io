const HomePage = () => {
  return (
<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      <Helmet></Helmet>"

        <meta name="description" content="Professional services by Zion Tech Group." />")}
")
}
"
          </div>
        
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p>Leverage machine learning to predict future trends and make data-driven decisions.</p>
            </div>
          
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Insights</h3>
              <p>Get instant analytics and monitoring with our real-time data processing capabilities.</p>
            </div>
          
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Custom Dashboards</h3>
              <p>Visualize your data with interactive dashboards tailored to your business needs.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Unlock Your Data&apos;s Potential?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let our AI analytics platform transform your data into actionable insights. 
                Get started with a free consultation and see the power of intelligent analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Analytics Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>

      <Footer />
    </div>
  );
};

export default AIAnalyticsPage;
