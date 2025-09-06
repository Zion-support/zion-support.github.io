  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    borderColor: 'border-violet-500/30'
  }
=======
    color: 'from - violet - 500 to - purple - 600',
    bg_color: 'from - violet - 900 / 20 to - purple - 900 / 20',
    border_color: 'border - violet - 500 / 30';
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeITServices2025,
    icon: Shield,
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
];

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function CuttingEdgeServices2025() {
  return (
    <Layout>
      <Head>
        <title>Cutting-Edge Services 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary cutting-edge services including AI consciousness, quantum computing, enterprise IT, and micro SAAS solutions for 2025." />
        <meta name="keywords" content="cutting-edge services, AI consciousness, quantum computing, enterprise IT, micro SAAS, 2025 technology" />
        <meta property="og:title" content="Cutting-Edge Services 2025 - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary technology services for the future. AI consciousness, quantum computing, enterprise IT, and micro SAAS solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/cutting-edge-services-2025" />
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,73,153,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Cutting-Edge Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary services that combine AI consciousness

              quantum computing, enterprise IT, and innovative micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Service Categories */}
      <section className="py - 20 bg - gradient - to - b from - gray - 900 to - black">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Revolutionary Technology Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of cutting-edge services designed to transform your business
              and give you a competitive advantage in the digital age.
            </p>
          </motion.div>
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <motion.div
=======
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - purple - 600 bg - clip - text text - transparent">;
              Revolutionary Technology Categories;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Explore our comprehensive portfolio of cutting - edge services designed to transform your business;
              and give you a competitive advantage in the digital age.;
            </p>;
          </motion.div>;
          <div className="space - y-16">;
            {service_categories.map ((category, index) => (
              <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                key={category.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} p-5 mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, coordinate_y: 20 }}
                      whileInView={{ opacity: 1, coordinate_y: 0 }}
                      transition={{ duration: 0.6, delay: service_index * 0.1 }}
                      viewport={{ once: true }}
                      className="group";
                    >;
                      <div className={`bg - gradient - to - br ${category.bg_color} p - 8 rounded - 2xl border ${category.border_color} hover:border - cyan - 500 / 50 transition - all duration - 300 hover:transform hover:scale - 105`}>;
                        <div className="flex items - start justify - between mb - 4">;
                          <h4 className="text - xl font - semibold text - white group - hover:text - cyan - 400 transition - colors">;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                            {service.name}
                          </h4>;
                          <div className="text - right">;
                            <div className="text - 2xl font - bold text - cyan - 400">;
                              ${service.pricing.starter.price}
      {/* Pricing Comparison */}
      <section className="py - 20 bg - black">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include our cutting-edge technology
              and expert support.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['StarterProfessionalEnterprise'].map((plan, index) => (
              <motion.div
=======
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - purple - 400 to - pink - 600 bg - clip - text text - transparent">;
              Transparent Pricing Plans;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Choose the plan that best fits your business needs. All plans include our cutting - edge technology;
              and expert support.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {['StarterProfessionalEnterprise'].map ((plan, index) => (
              <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                key={plan}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan}</h3>
                  <div className="space-y-4 mb-8">
=======
                className="group";
              >;
                <div className="bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 p - 8 rounded - 2xl border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:transform hover:scale - 105">;
                  <h3 className="text - 2xl font - bold text - white mb - 4">{plan}</h3>;
                  <div className="space - y-4 mb - 8">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    {plan === 'Starter' && (
                      <>
                        <div className="text-sm text-gray-400">For large enterprises and organizations</div>
                        <div className="text-sm text-gray-400">Full platform access and custom development</div>
                        <div className="text-sm text-gray-400">Dedicated specialists and 24/7 support</div>
                      </>
                    )}
                  </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan === 'Starter' ? 'From $149' : plan === 'Professional' ? 'From $499' : 'From $999'}
                    </div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py - 20 bg - gradient - to - r from - cyan - 900 / 20 to - blue - 900 / 20">;
        <div className="max - w-4xl mx - auto text - center px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team of experts to learn how our cutting-edge services can transform your business
              and give you a competitive advantage in the digital age.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-cyan-400">{contactInfo.mobile}</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-purple-400">{contactInfo.email}</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-green-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover: bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
=======
          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 600 bg - clip - text text - transparent">;
              Ready to Experience the Future?;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8">;
              Contact our team of experts to learn how our cutting - edge services can transform your business;
              and give you a competitive advantage in the digital age.;
            </p>;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8">;
              <div className="text - center">;
                <Phone className="w - 8 h - 8 text - cyan - 400 mx - auto mb - 3" />;
                <div className="text - white font - semibold">Call Us</div>;
                <div className="text - cyan - 400">{contact_info.mobile}</div>;
              </div>;
              <div className="text - center">;
                <Mail className="w - 8 h - 8 text - purple - 400 mx - auto mb - 3" />;
                <div className="text - white font - semibold">Email Us</div>;
                <div className="text - purple - 400">{contact_info.email}</div>;
              </div>;
              <div className="text - center">;
                <MapPin className="w - 8 h - 8 text - green - 400 mx - auto mb - 3" />;
                <div className="text - white font - semibold">Visit Us</div>;
                <div className="text - green - 400 text - sm">{contact_info.address}</div>;
              </div>;
            </div>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center">;
              <motion.a;
                href="/contact";
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - xl hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 300 shadow - lg hover:shadow - xl";
              >;
                Get Started Today;
                <ArrowRight className="ml - 2 w - 5 h - 5" />;
              </motion.a>;
              <motion.a;
                href="tel:+13024640950";
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - xl hover: bg - cyan - 500 hover:text - white transition - all duration - 300";
              >;
                <Phone className="mr - 2 w - 5 h - 5" />;
                Call Now;
              </motion.a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
