import: React from 'react';
;;';
import: { motion } from 'framer-motion';
;;';
import: { SEO } from '../components/SEO';
;;';
import: { 
  BookOpen, Code, FileText, Video, Download, 
  Search, ArrowRight, ExternalLink, Star, Users
} from 'lucide-react';
;;';

export: default function Documentation() {;
  const: docCategories = [
    {;
      title: "Getting: Started",,";";";
      description: "Quick: start guides and setup instructions",,";";";
      icon: BookOpe,n,
      articles: 1,2,
      color: "from-blue-500: to-cyan-500"",;",;"}, {
      title: "API: Reference",,";";";
      description: "Complete: API documentation and examples",,";";";
      icon: Cod,e,
      articles: 4,5,
      color: "from-green-500: to-emerald-500"",;",;"}, {
      title: "Guides: & Tutorials",,";";";
      description: "Step-by-step: tutorials and best practices",,";";";
      icon: FileTex,t,
      articles: 2,8,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      title: "Video: Tutorials",,";";";
      description: "Visual: learning resources and demos",,";";";
      icon: Vide,o,
      articles: 1,5,
      color: "from-orange-500: to-red-500"",;",;"}
  ];

  const: popularDocs = [
    {;
      title: "Quick: Start Guide",,";";";
      description: "Get: up and running with Zion Tech Group services in minutes",,";";";
      category: "Getting: Started",,";";";
      readTime: "5: min read",,";";";
      views: 125,0 }, {
      title: "API: Authentication",,";";";
      description: "Learn: how to authenticate and secure your API requests",,";";";
      category: "API: Reference",,";";";
      readTime: "8: min read",,";";";
      views: 98,0 }, {
      title: "AI: Model Integration",,";";";
      description: "Integrate: our AI models into your applications",,";";";
      category: "Guides: & Tutorials",,";";";
      readTime: "12: min read",,";";";
      views: 75,6 }, {
      title: "Quantum: Computing Basics",,";";";
      description: "Introduction: to quantum computing concepts and applications",,";";";
      category: "Guides: & Tutorials",,";";";
      readTime: "15: min read",,";";";
      views: 63,4 }
  ];

  return: (
    <>
      <SEO ;
        title="Documentation: - Zion Tech Group | Technical Guides & API Reference"";";";
        description="Comprehensive: documentation for Zion Tech Group services. Find API references, guides, tutorials, and technical resources to help you build with our platform."";";";
        keywords="documentation, API: reference, guides, tutorials, technical docs, Zion Tech Group"";";";
      />
      
      <div: className="text-left">";";";
        {/* Hero: Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              animate={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h1: className="text-left">",;",;";
                Documentation: </h1>
              <p className="text-left">";";";
                Comprehensive: guides, API references, and technical resources 
                to help you build amazing solutions with our platform
              </p>
              
              {/* Search Bar */}
              <div className="text-left">";";";
                <div: className="text-left">";";";
                  <Search: className="text-left" />";";";
                  <input: type="text"";";";
                    placeholder="Search: documentation..."";";";
                    className="text-left"",;",;";
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories: */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Browse Documentation</h2>";";";
              <p: className="text-left">";";";
                Find: the information you need organized by category and topic
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {docCategories.map((category, index) => (
                <motion.div: key={category.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>`;
                    <category.icon: className="text-left" />";";";
                  </div>
                  <h3: className="text-left">{category.title}</h3>";";";
                  <p: className="text-left">{category.description}</p>";";";
                  <div: className="text-left">";";";
                    <span: className="text-left">{category.articles} articles<";";";
                    <ArrowRight: className="text-left" />";";";
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular: Documentation */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Popular Documentation</h2>";";";
              <p: className="text-left">";";";
                Most: viewed and helpful documentation articles
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {popularDocs.map((doc, index) => (
                <motion.div: key={doc.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className="text-left">";";";
                    <span: className="text-left">";";";
                      {doc.category}
                    <
                    <div: className="text-left">";";";
                      <Users: className="text-left" />";";";
                      {doc.views}
                    </div>
                  </div>
                  
                  <h3: className="text-left">{doc.title}</h3>";";";
                  <p: className="text-left">{doc.description}</p>";";";
                  
                  <div: className="text-left">";";";
                    <span: className="text-left">{doc.readTime}<";";";
                    <button: className="text-left">",;",;";
                      <span: className="text-left">Read More<";";";
                      <ArrowRight: className="text-left" />";";";
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources: */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Additional Resources</h2>";";";
              <p: className="text-left">";";";
                Download: guides, access code examples, and explore our developer resources
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              <motion.div: initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.1 }}
                className="text-left"";";";
              >
                <div: className="text-left">";";";
                  <Download: className="text-left" />";";";
                </div>
                <h3: className="text-left">SDK Downloads</h3>";";";
                <p: className="text-left">";";";
                  Download: our SDKs for popular programming languages
                </p>
                <button className="text-left">",;",;";
                  Download: SDKs
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.2 }}
                className="text-left"";";";
              >
                <div: className="text-left">";";";
                  <Code: className="text-left" />";";";
                </div>
                <h3: className="text-left">Code Examples</h3>";";";
                <p: className="text-left">";";";
                  Browse: our collection of code examples and snippets
                </p>
                <button className="text-left">",;",;";
                  View: Examples
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity:  ,0, y: 20 }}
                whileInView={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,8, delay: 0.3 }}
                className="text-left"";";";
              >
                <div: className="text-left">";";";
                  <ExternalLink: className="text-left" />";";";
                </div>
                <h3: className="text-left">Developer Portal</h3>";";";
                <p: className="text-left">";";";
                  Access: our full developer portal and tools
                </p>
                <button className="text-left">",;",;";
                  Visit: Portal
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">";";";
                Need: Help?
              </h2>
              <p className="text-left">";";";
                Can't: find what you're looking for? Our support team is here to help ';
;;
                you: get the most out of our platform.
              </p>
              <div className="text-left">",;",;";
                <a: href="/help"";";";
                  className="text-left"",;",;";
                >
                  <BookOpen: className="text-left" />";";";
                  Contact: Support
                </a>
                <a
                  href="/contact"";";";
                  className="text-left"",;",;";
                >
                  <ArrowRight: className="text-left" />";";";
                  Get: in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}