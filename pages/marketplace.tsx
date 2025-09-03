const React = dynamic(() => import('react'), { ssr: false })
const Head = dynamic(() => import('next/head'), { ssr: false })
const MarketplacePage: React.FC = () => {
  const sections = [',,
    { title: 'Products', href: '/marketplace/products', description: 'AI tools, software, and platforms.' }, { title: 'Talent', href: '/marketplace/talent', description: 'Expert contractors and fractional teams.' },;
    { title: 'Equipment', href: '/marketplace/equipment', description: 'Hardware and infrastructure.' }, { title: 'Services', href: '/marketplace/services', description: 'Professional and managed services.' }];

  return (
    <MainLayout title = "Marketplace - Zion Tech Group" description="Discover products, talent, equipment, and services in our marketplace.">"
      <section className="container mx-auto px-4 py-12">"
        <h1 className="text-3xl font-bold mb-6">Marketplace</h1>"
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((s) => (",
            <Link key="{s.title}" href="{s.href}" className="block border rounded-lg p-6 bg-white shadow-sm hover: shadow-md transition-shadow">",
              <div className="text-xl font-semibold">{s.title}</div>"
              <p className="text-gray-600 mt-2">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
export default function Marketplace() {

  const categories = [
    {'
      name: 'AI Solutions','
      count: '25+ Products','
      description: 'Ready-to-use AI models, APIs, and automation tools','
      icon: '🤖'},
    {'
      name: 'SaaS Tools','
      count: '40+ Products','
      description: 'Software-as-a-Service solutions for business growth','
      icon: '💻'},
    {'
      name: 'IT Services','
      count: '30+ Services','
      description: 'Infrastructure, security, and technical support','
      icon: '🔧'},
    {'
      name: 'Templates','
      count: '50+ Templates','
      description: 'Website templates, UI kits, and design resources','
      icon: '🎨'}
  ]

  const featuredProducts = [
    {
      id: 1,'
      name: 'AI Content Generator','
      category: 'AI Solutions','
      price: '$99/month',
      rating: 4.9,
      reviews: 128,'
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.','
      image: '/products/ai-content-generator.jpg','
      features: ['Multi-language Support', 'SEO Optimized', 'Brand Voice Training', 'API Access']
},
    {
      id: 2,'
      name: 'Cloud Infrastructure Manager','
      category: 'IT Services','
      price: '$299/month',
      rating: 4.8,
      reviews: 89,'
      description: 'Comprehensive cloud management solution for AWS, Azure, and Google Cloud platforms.','
      image: '/products/cloud-manager.jpg','
      features: ['Multi-Cloud Support', 'Cost Optimization', 'Security Monitoring', 'Auto-scaling']
},
    {
      id: 3,'
      name: 'E-commerce SaaS Platform','
      category: 'SaaS Tools','
      price: '$199/month',
      rating: 4.7,
      reviews: 156,'
      description: 'Complete e-commerce solution with inventory management, payment processing, and analytics.','
      image: '/products/ecommerce-platform.jpg','
      features: ['Inventory Management', 'Payment Gateway', 'Analytics Dashboard', 'Mobile App']
},
    {
      id: 4,'
      name: 'React Dashboard Template','
      category: 'Templates','
      price: '$49',
      rating: 4.9,
      reviews: 234,'
      description: 'Modern, responsive dashboard template built with React and Tailwind CSS.','
      image: '/products/react-dashboard.jpg','
      features: ['Responsive Design', 'Dark/Light Mode', 'Component Library', 'Documentation']
}
  ]

  const stats = ['
    { number: '500+', label: 'Products Available', icon: ShoppingCart },'
    { number: '10K+', label: 'Happy Customers', icon: Users },'
    { number: '4.8/5', label: 'Average Rating', icon: Star },'
    { number: '99.9%', label: 'Uptime Guarantee', icon: TrendingUp }
  ];
;
  return (
    <>;
<Head>
        <title>Marketplace - Zion Tech Group</title>"
        <meta name = "description" content="Discover and purchase AI solutions, SaaS tools, IT services, and templates from our comprehensive marketplace." />"
        <meta name="viewport" content="width="device-width," initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      "
      <main className="min-h-screen bg-white">
        {/*   */}"
        <section className="bg-gradient-to-br from-slate-50 to-indigo-50 py-20 sm: py-32">"
          <div className="mx-auto max-w-7xl px-6 lg:px-8">"
            <div className="mx-auto max-w-3xl text-center">"
              <div className="flex items-center justify-center mb-4">"
                <ShoppingCart className="h-8 w-8 text-indigo-600 mr-3" />"
                <span className="text-base font-semibold leading-7 text-indigo-600">Marketplace</span>
              </div>"
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover & Purchase Tech Solutions,
              </h1>"
              <p className="mt-6 text-lg leading-8 text-gray-600">,
                Browse our curated marketplace of AI solutions, SaaS tools, IT services, and templates. 
                Find the perfect technology solutions to accelerate your business growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/*   */}"
        <section className="py-8 bg-white border-b border-gray-200">"
          <div className="mx-auto max-w-7xl px-6 lg: px-8">"
            <div className="flex flex-col sm:flex-row gap-4">"
              <div className="flex-1 relative">"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
                <input type="text"">
                  placeholder="Search products, services, and templates...""
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>"
              <div className="flex gap-2">"
                <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">"
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>"
                <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <span>Category</span>
                </button>
              </div>
            </div>
          </div>
        </section>
,
        {/*   */}"
        <section className="py-16 bg-gray-50">"
          <div className="mx-auto max-w-7xl px-6 lg: px-8">"
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">,
              {stats.map((stat, index) => ("
                <div key="{index}" className="text-center">"
                  <div className="flex justify-center mb-4">"
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">"
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>"
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>"
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*   */}"
        <section className="py-16 sm: py-24">"
          <div className="mx-auto max-w-7xl px-6 lg:px-8">"
            <div className="text-center mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>"
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our marketplace organized by technology categories,
              </p>
            </div>"
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">,
              {categories.map((category, index) => ("
                <div key="{index}" className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover: shadow-xl transition-shadow cursor-pointer">",
                  <div className="text-4xl mb-4">{category.icon}</div>"
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>"
                  <p className="text-indigo-600 font-medium mb-3">{category.count}</p>"
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*   */}"
        <section className="py-16 sm: py-24 bg-gray-50">"
          <div className="mx-auto max-w-7xl px-6 lg:px-8">"
            <div className="text-center mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Products</h2>"
              <p className="text-gray-600 max-w-2xl mx-auto">
                Handpicked solutions that our customers love and recommend,
              </p>
            </div>"
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredProducts.map((product) => (",
                <div key="{product.id}" className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover: shadow-xl transition-shadow">"
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">"
                    <div className="text-white text-6xl">📦</div>
                  </div>"
                  <div className="p-8">"
                    <div className="flex items-center justify-between mb-4">"
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">,
                        {product.category}
                      </span>"
                      <div className="flex items-center space-x-1">"
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />"
                        <span className="text-sm font-medium text-gray-900">{product.rating}</span>"
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>"
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>"
                    <p className="text-gray-600 mb-4">{product.description}</p>"
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, index) => ("
                        <span key="{index}" className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>"
                    <div className="flex items-center justify-between">"
                      <div className="text-2xl font-bold text-gray-900">{product.price}</div>"
                      <div className="flex space-x-2">"
                        <button className="p-2 border border-gray-300 rounded-lg hover: bg-gray-50">"
                          <Heart className="w-4 h-4" />
                        </button>"
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                          View Details,
                        </button>
                      </div>
                    </div>
                  </div>
                </div>,
              ))}
            </div>
          </div>
        </section>

        {/*   */}"
        <section className="py-16 sm: py-24">"
          <div className="mx-auto max-w-7xl px-6 lg:px-8">"
            <div className="text-center mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>"
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple steps to find and purchase the perfect solution for your needs,
              </p>
            </div>"
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">"
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">"
                  <span className="text-white font-bold text-xl">1</span>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Browse & Search</h3>"
                <p className="text-gray-600">
                  Explore our marketplace and use filters to find products that match your requirements.
                </p>
              </div>"
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">"
                  <span className="text-white font-bold text-xl">2</span>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compare & Choose</h3>"
                <p className="text-gray-600">,
                  Review product details, features, and customer ratings to make an informed decision.
                </p>
              </div>"
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">"
                  <span className="text-white font-bold text-xl">3</span>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Purchase & Deploy</h3>"
                <p className="text-gray-600">
                  Complete your purchase and get instant access to your new solution with full support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*   */}"
        <section className="py-16 sm: py-24 bg-gradient-to-br from-indigo-600 to-purple-600">"
          <div className="mx-auto max-w-7xl px-6 lg:px-8">"
            <div className="text-center">"
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Find Your Perfect Solution?
              </h2>"
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Browse our marketplace and discover technology solutions that will transform your business.
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <a href="#featured""
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Browse Marketplace</span>"
                  <ArrowRight className="w-5 h-5" />
                </a>"
                <a href="/contact""
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Need Help Finding Something?
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>",
  )};