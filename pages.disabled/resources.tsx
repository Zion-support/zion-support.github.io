import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
=======
  FileText, Download, ArrowRight, Star, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink,
  BookOpen, Video, Presentation, Database
} from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: 'Complete Platform Guide',
      description: 'Everything you need to know about our autonomous technology platform.',
      type: 'Comprehensive Guide',
      size: '15.2 MB',
      downloads: '2,847',
      rating: 4.9,
      icon: '📖',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    },
    {
      title: 'AI Implementation Playbook',
      description: 'Step-by-step guide to implementing AI automation in your organization.',
      type: 'Implementation Guide',
      size: '8.7 MB',
      downloads: '1,923',
      rating: 4.8,
      icon: '🤖',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      title: 'Performance Optimization Handbook',
      description: 'Advanced techniques for optimizing autonomous systems performance.',
      type: 'Technical Guide',
      size: '6.3 MB',
      downloads: '1,456',
      rating: 4.7,
      icon: '⚡',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
    },
  ];

  const categories = [
    { name: 'All Resources', count: resources.length, active: true },
    { name: 'AI & Consciousness', count: 1, active: false },
    { name: 'Quantum Technology', count: 1, active: false },
    { name: 'Business Automation', count: 1, active: false },
    { name: 'IT Management', count: 1, active: false },
    { name: 'Quantum AI', count: 1, active: false },
    { name: 'Cybersecurity', count: 1, active: false }
  ];

  const resourceTypes = [
    { name: 'Whitepapers', icon: <FileText className="w-6 h-6" />, count: 1 },
    { name: 'Guides', icon: <BookOpen className="w-6 h-6" />, count: 2 },
    { name: 'Reports', icon: <TrendingUp className="w-6 h-6" />, count: 2 },
    { name: 'Technical Papers', icon: <Database className="w-6 h-6" />, count: 1 }
  ];

  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
=======
        <meta name="description" content="Access exclusive whitepapers, guides, and educational resources from Zion Tech Group. Learn about AI, quantum computing, and technology innovation." />
        <meta name="keywords" content="resources, whitepapers, guides, AI guides, quantum computing resources, technology education, business automation guides" />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
=======
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Educational Resources
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Resources & Insights
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Access exclusive whitepapers, guides, and educational content to deepen your understanding 
                of AI, quantum computing, and technology innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resource Types Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Resource Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resourceTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4 text-orange-400">{type.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-400 text-sm">{type.count} resources</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resource */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Resource</h2>
              
              {resources.filter(resource => resource.featured).map((resource, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-medium rounded-full">
                          {resource.category}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{resource.title}</h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{resource.description}</p>
                      
                      <div className="flex items-center space-x-6 mb-6 text-gray-400">
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          {resource.downloadCount} downloads
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          {resource.fileSize}
                        </div>
                      </div>
                      
                      <Link 
                        href={resource.downloadUrl}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                      >
                        Download Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        {resource.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the resources you need organized by topic and type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`w-full h-32 ${category.color} flex items-center justify-center`}>
                  <span className="text-5xl">{category.icon}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {category.resources.slice(0, 3).map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">{resource.name}</span>
                        <span className="text-gray-500">{resource.size}</span>
                      </div>
                    ))}
                    {category.resources.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{category.resources.length - 3} more resources
                      </div>
                    )}
                  </div>
                  
                  <Button href={`/resources/${category.title.toLowerCase().replace(/ /g, '-')}`} variant="outline" className="w-full">
                    View All
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Access Tools */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Access Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tools and utilities to help you get started quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Resources</h3>
              <p className="text-gray-600 text-sm mb-4">Find exactly what you need</p>
              <Button href="/resources/search" variant="ghost" size="sm">
                Search Now
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Center</h3>
              <p className="text-gray-600 text-sm mb-4">Access all resources</p>
              <Button href="/resources/downloads" variant="ghost" size="sm">
                Browse All
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Support</h3>
              <p className="text-gray-600 text-sm mb-4">Expert help when you need it</p>
              <Button href="/contact" variant="ghost" size="sm">
                Contact Us
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">Stay updated on new resources</p>
              <Button href="/resources/newsletter" variant="ghost" size="sm">
                Subscribe
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Help Finding Resources?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experts is here to help you find the right resources for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get Expert Help
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Explore Services
              </Button>
            </div>
          </div>
        </section>

=======
        {/* Resources Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">All Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {resources.filter(resource => !resource.featured).map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{resource.icon}</div>
                      <div>
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 text-xs font-medium rounded-full">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{resource.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{resource.description}</p>
                    
                    <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                      <div className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {resource.downloadCount} downloads
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-3 h-3 mr-1" />
                        {resource.fileSize}
                      </div>
                    </div>
                    
                    <Link 
                      href={resource.downloadUrl}
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors duration-200"
                    >
                      Download Resource
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Informed
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for exclusive access to new resources, 
                industry insights, and technology updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Resources | Zion Tech Group" description="Guides, case studies, support, training, and market pricing links." canonical="https://ziontechgroup.com/resources/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Resources</h1>
          <p className="mt-3 text-gray-300">Docs, guides, and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' },
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' },
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' },
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' },
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map((it) => (
            <Link key={it.href} href={it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block">
              <div className="text-sm text-gray-400">Resource</div>
              <h3 className="text-xl font-semibold text-white">{it.name}</h3>
              <p className="mt-1 text-gray-300">{it.blurb}</p>
              <div className="mt-3 text-cyan-300">Open →</div>
            </Link>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  );
};

export default ResourcesPage;
