'use client'
    images.forEach((img) => {
  
      if (img.loading !== 'lazy') {
      }
    })


    // Intersection Observer for lazyloadingconstobserver= new IntersectionObserver(
      (entries) => {
  
        entries.forEach((entry) => {
  
          if (entry.isIntersecting) {
          }
        })
      },

    // Dynamic imports for codesplittingconstloadComponent= async (componentName: string) => {
  
      try {
    try {
      await Promise.all([
        optimizeImages(),
        enableLazyLoadingOptimization(),
        enablePreloadingOptimization(),
        enableCodeSplittingOptimization(),

  return (
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
  );
};

>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
