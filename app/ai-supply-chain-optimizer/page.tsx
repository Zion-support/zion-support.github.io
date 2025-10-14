import React from "react";
const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management. Reduce costs by up to 30%." />
        <meta name="keywords" content="supply chain optimization, AI forecasting, inventory management, route optimization, logistics, supply chain analytics" />
      </Helmet>

      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            AI Supply Chain Optimizer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, 
            and enhance visibility across your entire supply network.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">{benefit.metric}</div>
                <div className="text-gray-400">{benefit.label}</div>
                <div className="text-sm text-gray-500">{benefit.description}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton size="lg">
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <FuturisticButton variant="outline" size="lg">
              View Demo <Globe className="w-5 h-5 ml-2" />
            </FuturisticButton>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Powerful Supply Chain Optimization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Optimization Features */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Comprehensive Optimization Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {optimizationFeatures.map((category, index) => (
              <FuturisticCard key={index} className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Choose Your Optimization Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard key={index} className={`p-8 ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm text-center mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-blue-400 mb-6">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton className="w-full">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start optimizing your supply chain today and experience the power of AI-driven logistics management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton size="lg">
              Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <FuturisticButton variant="outline" size="lg">
              Contact Sales <Globe className="w-5 h-5 ml-2" />
            </FuturisticButton>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};
export default Page;
