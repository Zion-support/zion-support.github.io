
const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and technical documentation",
    icon: FileText,
    href: "/docs",
    color: "from-blue-500 to-blue-600",
    items: ["API Documentation", "Integration Guides", "Best Practices", "Troubleshooting"]
  },
  {
    title: "Case Studies",
    description: "Real-world success stories and implementations",
    icon: BarChart3,
    href: "/case-studies",
    color: "from-green-500 to-green-600",
    items: ["Client Success Stories", "Implementation Examples", "ROI Analysis", "Lessons Learned"]
  },
  {
    title: "Blog",
    description: "Latest insights, trends, and technical articles",
    icon: MessageSquare,
    href: "/blog",
    color: "from-purple-500 to-purple-600",
    items: ["Technology Trends", "Industry Insights", "Technical Tutorials", "Company News"]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: Settings,
    href: "/api-docs",
    color: "from-orange-500 to-orange-600",
    items: ["REST API", "GraphQL", "SDKs", "Code Examples"]
  }
];

const quickLinks = [
  { title: "Getting Started", href: "/docs/getting-started", icon: BookOpen },
  { title: "Video Tutorials", href: "/tutorials", icon: Video },
  { title: "Download SDKs", href: "/downloads", icon: Download },
  { title: "Support Center", href: "/support", icon: MessageSquare }
];

export default function ResourcesPage() {
  return (
    <Layout
      title="Resources - Zion Tech Group"
      description="Comprehensive resources including documentation, case studies, blog posts, and API references for developers and businesses."
      keywords="documentation, case studies, blog, API reference, resources, tutorials, guides"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Resources &{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Everything you need to succeed with our technology solutions. 
                Documentation, guides, case studies, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Browse Documentation
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Resource Center
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive resources to help you succeed
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {resource.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-indigo-500" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={resource.href}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${resource.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                    >
                      <span>Explore {resource.title}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Popular resources and quick access to important information
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {link.title}
                    </h3>
                    
                    <Link
                      href={link.href}
                      className="text-indigo-600 hover:text-indigo-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                    >
                      <span>Access Now</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Need More Help?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Can't find what you're looking for? Our support team is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Browse Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}