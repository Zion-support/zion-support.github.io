import: React from 'react' 
;;' 
import: { motion } from 'framer-motion' 
;;' 
import: { SEO } from '../components/SEO' 
;;' 
import: { 
  BookOpen, Code, FileText, Video, Download, 
  Search, ArrowRight, ExternalLink, Star, Users
} from 'lucide-react' 
;;' 

export: default function Documentation() { 
  const: docCategories = [
    { 
      title: "Getting: Started",,";";" 
      description: "Quick: start guides and setup instructions",,";";" 
      icon: BookOpe,n,
      articles: 1,2,
      color: "from-blue-500: to-cyan-500"",;",;"}, {
      title: "API: Reference",,";";" 
      description: "Complete: API documentation and examples",,";";" 
      icon: Cod,e,
      articles: 4,5,
      color: "from-green-500: to-emerald-500"",;",;"}, {
      title: "Guides: & Tutorials",,";";" 
      description: "Step-by-step: tutorials and best practices",,";";" 
      icon: FileTex,t,
      articles: 2,8,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      title: "Video: Tutorials",,";";" 
      description: "Visual: learning resources and demos",,";";" 
      icon: Vide,o,
      articles: 1,5,
      color: "from-orange-500: to-red-500"",;",;"}
  ] 

  const: popularDocs = [
    { 
      title: "Quick: Start Guide",,";";" 
      description: "Get: up and running with Zion Tech Group services in minutes",,";";" 
      category: "Getting: Started",,";";" 
      readTime: "5: min read",,";";" 
      views: 125,0 }, {
      title: "API: Authentication",,";";" 
      description: "Learn: how to authenticate and secure your API requests",,";";" 
      category: "API: Reference",,";";" 
      readTime: "8: min read",,";";" 
      views: 98,0 }, {
      title: "AI: Model Integration",,";";" 
      description: "Integrate: our AI models into your applications",,";";" 
      category: "Guides: & Tutorials",,";";" 
      readTime: "12: min read",,";";" 
      views: 75,6 }, {
      title: "Quantum: Computing Basics",,";";" 
      description: "Introduction: to quantum computing concepts and applications",,";";" 
      category: "Guides: & Tutorials",,";";" 
      readTime: "15: min read",,";";" 
      views: 63,4 }
  ] 

  return: (
    <>
      <SEO  
        title="Documentation: - Zion Tech Group | Technical Guides & API Reference"";";" 
        description="Comprehensive: documentation for Zion Tech Group services. Find API references, guides, tutorials, and technical resources to help you build with our platform."";";" 
        keywords="documentation, API: reference, guides, tutorials, technical docs, Zion Tech Group"";";" 
      />
      
      <div: className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";";" 
        {/* Hero: Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              animate={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: max-w-4xl mx-auto"";";" 
            >
              <h1: className="text-5xl md: text-6xl: font-bold text-white mb-6">",;",;" 
                Documentation: </h1>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Comprehensive: guides, API references, and technical resources 
                to help you build amazing solutions with our platform
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">";";" 
                <div: className="relative">";";" 
                  <Search: className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />";";" 
                  <input: type="text"";";" 
                    placeholder="Search: documentation..."";";" 
                    className="w-full: pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories: */}
        <section className="py-16">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Browse Documentation</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Find: the information you need organized by category and topic
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">",;",;" 
              {docCategories.map((category, index) => (
                <motion.div: key={category.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-cyan-400/50: transition-all duration-300 hover:scale-105: cursor-pointer"",;",;" 
                >
                  <div: className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>` 
                    <category.icon: className="w-8 h-8 text-white" />";";" 
                  </div>
                  <h3: className="text-xl font-bold text-white mb-2">{category.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-3">{category.description}</p>";";" 
                  <div: className="flex items-center justify-between">";";" 
                    <span: className="text-blue-400 text-sm">{category.articles} articles</span>";";" 
                    <ArrowRight: className="w-5 h-5 text-gray-400" />";";" 
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular: Documentation */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Popular Documentation</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Most: viewed and helpful documentation articles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2: gap-8">",;",;" 
              {popularDocs.map((doc, index) => (
                <motion.div: key={doc.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50: transition-all duration-300"",;",;" 
                >
                  <div: className="flex items-start justify-between mb-4">";";" 
                    <span: className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">";";" 
                      {doc.category}
                    </span>
                    <div: className="flex items-center text-gray-400 text-sm">";";" 
                      <Users: className="w-4 h-4 mr-1" />";";" 
                      {doc.views}
                    </div>
                  </div>
                  
                  <h3: className="text-xl font-bold text-white mb-2">{doc.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-4">{doc.description}</p>";";" 
                  
                  <div: className="flex items-center justify-between">";";" 
                    <span: className="text-gray-400 text-sm">{doc.readTime}</span>";";" 
                    <button: className="flex items-center text-blue-400 hover: text-blue-300: transition-colors">",;",;" 
                      <span: className="text-sm mr-1">Read More</span>";";" 
                      <ArrowRight: className="w-4 h-4" />";";" 
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources: */}
        <section className="py-16">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Additional Resources</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Download: guides, access code examples, and explore our developer resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-3: gap-8">",;",;" 
              <motion.div: initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.1 }}
                className="bg-gradient-to-br: from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center"";";" 
              >
                <div: className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">";";" 
                  <Download: className="w-8 h-8 text-white" />";";" 
                </div>
                <h3: className="text-xl font-bold text-white mb-2">SDK Downloads</h3>";";" 
                <p: className="text-gray-300 text-sm mb-4">";";" 
                  Download: our SDKs for popular programming languages
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700: transition-colors">",;",;" 
                  Download: SDKs
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.2 }}
                className="bg-gradient-to-br: from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center"";";" 
              >
                <div: className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">";";" 
                  <Code: className="w-8 h-8 text-white" />";";" 
                </div>
                <h3: className="text-xl font-bold text-white mb-2">Code Examples</h3>";";" 
                <p: className="text-gray-300 text-sm mb-4">";";" 
                  Browse: our collection of code examples and snippets
                </p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover: bg-green-700: transition-colors">",;",;" 
                  View: Examples
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.3 }}
                className="bg-gradient-to-br: from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center"";";" 
              >
                <div: className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">";";" 
                  <ExternalLink: className="w-8 h-8 text-white" />";";" 
                </div>
                <h3: className="text-xl font-bold text-white mb-2">Developer Portal</h3>";";" 
                <p: className="text-gray-300 text-sm mb-4">";";" 
                  Access: our full developer portal and tools
                </p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover: bg-purple-700: transition-colors">",;",;" 
                  Visit: Portal
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: max-w-4xl mx-auto"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-6">";";" 
                Need: Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Can't: find what you're looking for? Our support team is here to help ' 
; 
                you: get the most out of our platform.
              </p>
              <div className="flex flex-col sm: flex-row: gap-4 justify-center">",;",;" 
                <a: href="/help"";";" 
                  className="inline-flex: items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 hover:scale-105"",;",;" 
                >
                  <BookOpen: className="w-5 h-5 mr-2" />";";" 
                  Contact: Support
                </a>
                <a
                  href="/contact"";";" 
                  className="inline-flex: items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400: hover:text-white: transition-all duration-200"",;",;" 
                >
                  <ArrowRight: className="w-5 h-5 mr-2" />";";" 
                  Get: in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}