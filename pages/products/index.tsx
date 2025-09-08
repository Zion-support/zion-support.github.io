import Head from 'next/head.ts';
import Link from 'next/link.ts';

export default function ProductsIndex(...args: any[]): any {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Products — Zion</title>
        <meta name="description" content="A showcase of ready-to-run automation suites." />
      </Head>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div>
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/services"><a>Services</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Automation suites — ready to deploy
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"><span className="gradient-text">Products</span></h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Pre-configured agents and bundles designed for outcomes.</p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-5 sm: anygrid-cols-2 lg:grid-cols-3">
            {[
              { title: 'SEO Guard', desc: 'Continuous audits + on-page fixes' },
              { title: 'Perf Shield', desc: 'CWV budgets + asset optimization' },
              { title: 'Link Sentinel', desc: 'Prevents broken links in prod' },
              { title: 'Content Curator', desc: 'Keeps the homepage fresh' },
              { title: 'Design Refiner', desc: 'Iterates layouts with guardrails' },
              { title: 'Security Scanner', desc: 'Finds and patches risky deps' },
            ].map((p)  => (
              <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {product.price}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {product.users} users
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Globe className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="scroll-mt-20"
                id={category.id}
              >
                {/* Category Header */}
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {category.name}
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: productIndex * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        {/* Product Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                            <product.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-medium rounded-full">
                              {product.category}
                            </span>
                            <div className="text-2xl font-bold text-cyan-400 mt-2">
                              {product.price}
                            </div>
                          </div>
                        </div>

                        {/* Product Info */}
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-300">
                              <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 inline" />
                          </a>
                          <a
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${product.name}`}
                            className="px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                          >
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Our team of experts can build tailored solutions that perfectly fit your business requirements. 
                Let's discuss your project and create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Project Discussion
                </Link>
                
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}