<<<<<<< HEAD

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Wifi className="w-4 h-4 text-blue-40 mr-2" />
              <span className="text-blue-40 text-sm font-medium">Next-Gen Connectivity</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-40 to-purple-40">Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with ultra-fast 5G connectivity. Experience lightning-fast speeds, 
              low latency, and seamless IoT integration for the digital future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-60 to-purple-60 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-70 hover:to-purple-70 transition-all duration-30 flex items-center">
                Get Started
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-40 text-blue-40 px-8 py-3 rounded-lg font-semibold hover:bg-blue-40 hover:text-white transition-all duration-30">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G technology delivers unmatched performance, reliability, and innovation for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-slate-8/50 backdrop-blur-sm rounded-xl p-6 border border-slate-70 hover:border-blue-50 transition-all duration-30">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-40">
                        <Circle className="w-3 h-3 text-blue-40 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-80/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect 5G solution for your business size and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-8/50 backdrop-blur-sm rounded-xl p-8 border border-slate-70 hover:border-blue-50 transition-all duration-30">
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-40">
                      <Circle className="w-4 h-4 text-blue-40 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-60 to-purple-60 text-white py-3 rounded-lg font-semibold hover:from-blue-70 hover:to-purple-70 transition-all duration-30">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the 5G revolution and transform your business with ultra-fast connectivity.
          </p>
          <button className="bg-gradient-to-r from-blue-60 to-purple-60 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-70 hover:to-purple-70 transition-all duration-30">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default FiveGSolutionsPage
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">5G Solutions</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutionsPage;
