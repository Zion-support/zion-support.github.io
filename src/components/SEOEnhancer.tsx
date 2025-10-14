
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet></Helmet>
        <title>SEOEnhancer - Zion Tech Group</title>
        <meta name="description" content="Professional SEOEnhancer services by Zion Tech Group." />
        <meta name="keywords" content="SEOEnhancer, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            SEOEnhancer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional SEOEnhancer services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>

      </div>
    </div>
  );
};

export default SEOEnhancerPage;