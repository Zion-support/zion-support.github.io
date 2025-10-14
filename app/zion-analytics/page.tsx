import ResponsiveContainer from '../components/ResponsiveContainer'
const ZionAnalytics = () => {
  return (
    <>
      <Helmet>
        <title>Zion Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced analytics platform powered by Zion AI technology." />
      </Helmet>
"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <section className="py-20">
          <ResponsiveContainer>"
            <div className="text-center">"
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">"
                Zion <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Analytics</span>
              </h1>"
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced analytics platform powered by Zion AI technology for comprehensive business intelligence.
              </p>"
              <Link to="/contact">"
                <FuturisticButton size="lg">
                  Get Started"
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  )
}
export default ZionAnalytics'"