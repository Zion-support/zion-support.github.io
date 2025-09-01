<=

      ],;"
      cta: "Contact Sales",;
      popular: false};
  ]},;
    {;"
      industry: "Automotive",;"      description: "Track spare parts, manage service inventory, and optimize supply chain for dealerships",;
      icon: Truck};
  ];

  const integrations = [
    {
"
      name: "E-commerce Platforms","
      platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce"]
    },
    {
"
      name: "Accounting Software","
      platforms: ["QuickBooks", "Xero", "Sage", "NetSuite"]
    },
    {
"
      name: "Shipping & Logistics","
      platforms: ["FedEx", "UPS", "DHL", "ShipStation"]
    },
    {
"
      name: "POS Systems","
      platforms: ["Square", "Toast", "Lightspeed", "ShopKeep"]
    },
    {
"
      name: "ERP Systems",;"
      platforms: ["SAP", "Oracle", "Microsoft Dynamics", "Infor"]},;
    {;"
      name: "Supplier Platforms",;"
      platforms: ["Alibaba", "Amazon Business", "ThomasNet", "Global Sources"]};
  ]},;
    {;"
      metric: "3x",;"
      label: "Faster Processing",;"
      description: "Improved inventory processing speed"};  ];

  return ("
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
=
=======
        title="AI Inventory Management - Zion Tech Group""        description="Optimize your inventory with AI-powered demand forecasting, real-time tracking, and automated reordering. Reduce costs and prevent stockouts."
       />
      
      {/* Hero Section */}"
      <section className="relative overflow-hidden py-20 lg:py-32">"
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20"></div>
        "
>        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20

}}
            animate = {

  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
          >"
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium mb-6">"
              <Package className="w-4 h-4 mr-2"  />              AI-Powered Inventory
            </div>"
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI Inventory"
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Management
              </span>
            </h1>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your inventory management with AI-powered forecasting, real-time tracking, and automated optimization.
              Reduce costs, prevent stockouts, and improve operational efficiency.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Play className="w-5 h-5 mr-2"  />
                Start Free Trial
              </button>"
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-lg">"
                <Download className="w-5 h-5 mr-2 inline"  />                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="grid grid-cols-2 md: anygrid-cols-4 gap-8">
            {keyMetrics.map((metric, index (
              <motion.div
                key={metric.metric}
                initial = {

  { opacity: 0,
  y: 20

}}
                whileInView = {

  { opacity: 1,
  y: 0

}}
                transition = {

  { duration: 0.5,
  delay: index * 0.1

}}
                viewport={{ once: true }}"
                className="text-center"
              >"
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {metric.metric}
                </div>"
                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>"
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20

}}
            whileInView = {

  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities designed to revolutionize your inventory management and supply chain operations.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature: unknown, index: unknown (
              <motion.div
                key={feature.title}
                initial = {

  { opacity: 0,
  y: 20

}}
                whileInView = {

  { opacity: 1,
  y: 0

}}
                transition = {

  { duration: 0.5,
  delay: index * 0.1

}}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-green-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20

}}
            whileInView = {

  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Business Benefits
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered inventory management can transform your operations and drive business growth.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(benefit: unknown, index: unknown (
              <motion.div
                key={benefit.title}
                initial = {

  { opacity: 0,
  y: 20

}}
                whileInView = {

  { opacity: 1,
  y: 0

}}
                transition = {

  { duration: 0.5,
  delay: index * 0.1

}}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-green-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20

}}
            whileInView = {

  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
            {pricingPlans.map(plan: unknown, index: unknown (
              <motion.div
                key={plan.name}
                initial = {

  { opacity: 0,
  y: 20

}}
                whileInView = {

  { opacity: 1,
  y: 0

}}
                transition = {

  { duration: 0.5,
  delay: index * 0.1

}}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
<=

                  plan.popular '
                    ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-blue-500/10' '
                    : 'border-white/10 hover:border-green-500/50'`
>                }`}
              >
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
"
                <div className="text-center mb-8">"
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>"
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}"
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </div>
"
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-center text-gray-300">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />"                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
`
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                  plan.popular'
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700''
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'`
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20

}}
            whileInView = {

  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations across industries leverage our AI inventory management to optimize operations.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={useCase.industry}
                initial = {

  { opacity: 0,
  y: 20

}}
                whileInView = {

  { opacity: 1,
  y: 0

}}
                transition = {

  { duration: 0.5,
  delay: index * 0.1

}}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-green-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20

}}
            whileInView = {

  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified inventory management experience.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map(integration: unknown, index: unknown 
              <motion.div
                key={integration.name}
                initial = {

  { opacity: 0,
  y: 20

}}
                whileInView = {

  { opacity: 1,
  y: 0

}}
                transition = {

  { duration: 0.5,
  delay: index * 0.1

}}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-green-500/50"
              >"
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {integration.name}
                </h3>"
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, platformIndex (
                    <span
                      key={platformIndex}"
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20

}}
            whileInView = {

  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Inventory?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI-powered inventory management
              to reduce costs and improve operational efficiency.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Star className="w-5 h-5 mr-2"  />                Start Free Trial
              </button>"
              <button className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-lg">"
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  )}'"`