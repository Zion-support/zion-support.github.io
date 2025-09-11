export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Products — Intelligent Tools</title>
        <meta name="description" content="A showcase of intelligent, autonomous products and toolkits." />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div>
      </div>
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide"><span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span></div>
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/site-health"><a>Site Health</a></Link>
          </div>
        </nav>
      </header>
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"><span className="gradient-text">Products — Intelligent Tools</span></h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">A showcase of intelligent, autonomous products and toolkits.</p>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-20">
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {[{title:'Automation Dashboard',href:'/automation'},{title:'Site Health',href:'/site-health'},{title:'AI Trends',href:'/reports/ai-trends'}].map((p)=> (
      <Link key={p.title} href={p.href}><a className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30"><div className="text-lg font-semibold">{p.title}</div><div className="mt-1 text-sm text-white/75">Open →</div></a></Link>
    ))}
  </div>
</section>
      </main>
    </div>
  );
}



import React from 'react';
import { NextPage } from 'next';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final

  return (
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    <Layout
      title="Products - Zion Tech Group"
      description="Discover our comprehensive suite of technology products designed to transform your business operations."
      keywords="products, technology solutions, AI, cloud, security, automation, collaboration">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}

        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>;
          </div>;

          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Comprehensive technology products designed to transform your business operations and drive growth.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;


        {/* Search and Filter Section */}
        <section className="py-12 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto">;
              {/* Search Bar */}
              <div className="mb-8">;
                <div className="relative">;
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}

                    onChange={(e) => setSearchTerm(e && e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                  />;
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                </div>;
              </div>;


              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">;
                {categories && categories.map((category) => (;
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${;
                      selectedCategory === category;
                        ? 'bg-blue-600 text-white';
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
                    }`}
                  >;
                    {category}
                  </button>;
                ))}

              </div>;

              <div className="text-center">;

                <button
                  onClick={() => {;
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}

                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold";
                >;
                  Clear Filters;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
                      </div>;
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">;
                      {product && product.name}
                    </h3>;
                    <p className="text-gray-600 mb-4 leading-relaxed">;
                      {product && product.description}
                    </p>;

                      </div>;
                    </div>;

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">;
                      {product && product.name}
                    </h3>;

                    <p className="text-gray-600 mb-4 leading-relaxed">;
                      {product && product.description}
                    </p>;
                    <div className="space-y-2 mb-4">;
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>;
                      <ul className="space-y-1">;
                        {product && product.features.map((feature, idx) => (;
                          <li key={idx} className="flex items-center text-sm text-gray-600">;
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />;
                            {feature}
                          </li>;
                        ))}
                      </ul>;
                    </div>;
                    <div className="space-y-2 mb-6">;
                      <h4 className="font-semibold text-gray-900 text-sm">Benefits:</h4>;
                      <ul className="space-y-1">;
                        {product && product.benefits.map((benefit, idx) => (;
                          <li key={idx} className="flex items-center text-sm text-gray-600">;
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />;
                            {benefit}
                          </li>;
                        ))}
                      </ul>;
                    </div>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
          <div className="container mx-auto px-4 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">;
                Discover how our products can help you achieve your business goals and drive growth.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">;
                  <ArrowRight className="w-5 h-5 mr-2" />;
                  Get Started;
                </button>;
                <Link
                  href="/contact"




                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  Contact Sales;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
};




        <meta name="description" content="Index page" />
      </Head>
      

import type { NextPage } from 'next';
import Head from 'next/head';
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name='description' content='Index page' />
      </Head>
ursor/integrate-build-improve-and-re-verify-8f7d

export default ProductsIndex;
import type { NextPage } from 'next';
import Head from 'next/head';>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <main>
        <h1>Index</h1>
        <p>This page is under construction.</p>
      </main>
    </div>

  );
}
export default ProductsIndex;

  );
};


export default Index;

  )
  ),
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
  );
ursor/integrate-build-improve-and-re-verify-8f7d};

export default Index;



;
export default ProductsIndex);
}
;
export default Index;
;
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Index page&quot; />
      </Head>
      
const products = [
  {
    id: 'ai-analytics-suite'
    name: 'ZionAI Analytics Suite'
    description: 'Comprehensive business intelligence platform with AI-powered insights and predictive analytics.'
    category: 'AI & Analytics'
    pricing: '$2,999/month'
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration']
    benefits: ['Data-Driven Decisions', 'Improved Efficiency', 'Competitive Advantage', 'Scalable Solutions']
    icon: Award
    popular: true
  }
  {
    id: 'cloud-infrastructure'
    name: 'ZionCloud Infrastructure'
    description: 'Scalable cloud infrastructure solutions with enterprise-grade security and performance.'
    category: 'Cloud Services'
    pricing: '$4,999/month'
    features: ['Auto-scaling', '99.9% Uptime', 'Global CDN', 'Security Compliance']
    benefits: ['Cost Optimization', 'High Availability', 'Global Performance', 'Secure Operations']
    icon: Globe
    popular: true
  }
  {
    id: 'cybersecurity-suite'
    name: 'ZionShield Security'
    description: 'Advanced cybersecurity solutions with threat detection and prevention capabilities.'
    category: 'Security'
    pricing: '$3,999/month'
    features: ['Threat Detection', 'Real-time Monitoring', 'Incident Response', 'Compliance Management']
    benefits: ['Enhanced Security', 'Risk Mitigation', 'Compliance Ready', 'Peace of Mind']
    icon: Shield
    popular: false
  }
  {
    id: 'automation-platform'
    name: 'ZionAutomate Platform'
    description: 'Intelligent automation platform for streamlining business processes and workflows.'
    category: 'Automation'
    pricing: '$2,499/month'
    features: ['Workflow Automation', 'Process Optimization', 'Integration Hub', 'Analytics Dashboard']
    benefits: ['Increased Productivity', 'Reduced Errors', 'Cost Savings', 'Better Efficiency']
    icon: Zap
    popular: false
  }
  {
    id: 'collaboration-suite'
    name: 'ZionCollaborate Suite'
    description: 'Comprehensive collaboration platform for teams and organizations.'
    category: 'Collaboration'
    pricing: '$1,999/month'
    features: ['Team Chat', 'Video Conferencing', 'File Sharing', 'Project Management']
    benefits: ['Better Communication', 'Improved Collaboration', 'Remote Work Ready', 'Enhanced Productivity']
    icon: Users
    popular: false
  }
  {
    id: 'data-management'
    name: 'ZionData Manager'
    description: 'Advanced data management and governance platform for enterprise data needs.'
    category: 'Data Management'
    pricing: '$3,499/month'
    features: ['Data Governance', 'Quality Management', 'Compliance Tools', 'Analytics Integration']
    benefits: ['Data Quality', 'Compliance Ready', 'Better Insights', 'Risk Reduction']
    icon: Star
    popular: false
  }
];
const categories = [
  'All'
  'AI & Analytics'
  'Cloud Services'
  'Security'
  'Automation'
  'Collaboration'
  'Data Management'
];
const ProductsIndex: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' |product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final

  return (
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    <Layout
      title="Products - Zion Tech Group"
      description="Discover our comprehensive suite of technology products designed to transform your business operations."
      keywords="products, technology solutions, AI, cloud, security, automation, collaboration"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology products designed to transform your business operations and drive growth.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <product.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                        {product.popular && (
                          <span className="ml-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Pricing:</span>
                        <span className="text-lg font-bold text-blue-600">{product.pricing}</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Discover how our products can help you achieve your business goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductsIndex;
  )
};

export default Index;
import type { NextPage } from 'next',
import Head from 'next/head',
const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name='description' content='Index page' />
      </Head>
ursor/integrate-build-improve-and-re-verify-8f7d

export default ProductsIndex;
import type { NextPage } from 'next';
import Head from 'next/head';
      <main>
        <h1>Index</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  ),
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
  );
ursor/integrate-build-improve-and-re-verify-8f7d
};

export default Index;
}
export default ProductsIndex;
origin/main
  )
}
export default Index;

},
export default Index,
export default ProductsIndex;

  )


},
export default Index,

