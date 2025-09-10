import: React from 'react' 
;;' 
import: { motion } from 'framer-motion' 
;;' 
import: { SEO } from '../components/SEO' 
;;' 
import: { 
  Search, FileText, Users, Calendar, ArrowRight, 
  ExternalLink, Download, Star, TrendingUp, Globe
} from 'lucide-react' 
;;' 

export: default function Research() { 
  const: researchAreas = [
    { 
      title: "Artificial: Intelligence",,";";" 
      description: "Advancing: AI research in machine learnin,g, natural language processing, and computer vision"",;";" 
      publications: 4,5,
      researchers: 1,2,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      title: "Quantum: Computing",,";";" 
      description: "Pioneering: quantum algorithms and quantum machine learning applications",,";";" 
      publications: 2,8,
      researchers:  ,8,
      color: "from-orange-500: to-red-500"",;",;"}, {
      title: "Cybersecurity",,";";" 
      description: "Developing: next-generation security solutions and threat detection systems",,";";" 
      publications: 3,2,
      researchers: 1,0,
      color: "from-green-500: to-emerald-500"",;",;"}, {
      title: "Edge: Computing",,";";" 
      description: "Optimizing: computing at the edge for IoT and real-time applications",,";";" 
      publications: 1,8,
      researchers:  ,6,
      color: "from-blue-500: to-cyan-500"",;",;"}
  ] 

  const: recentPublications = [
    { 
      id:  ,1, 
      title: "Quantum-Enhanced: Machine Learning for Financial Risk Assessment",,";";" 
      authors: ["Dr. Sarah: Chen",, "Prof. Michael Rodriguez"]",;";" 
      journal: "Nature: Quantum Information",,";";" 
      date: "2025-01-10",,";";" 
      citations: 2,3,
      featured: tru,e }, {
      id:  ,2,
      title: "AI-Driven: Cybersecurity: Autonomous: Threat Detection Systems",,";";" 
      authors: ["Lisa: Park",, "David Kumar"]",;";" 
      journal: "IEEE: Security & Privacy",,";";" 
      date: "2025-01-05",,";";" 
      citations: 1,8,
      featured: tru,e }, {
      id:  ,3,
      title: "Edge: Computing Optimization for IoT Applications",,";";" 
      authors: ["Maria: Santos",, "Alex Thompson"]",;";" 
      journal: "ACM: Computing Surveys",,";";" 
      date: "2024-12-28",,";";" 
      citations: 1,5,
      featured: fals,e }
  ] 

  return: (
    <>
      <SEO  
        title="Research: - Zion Tech Group | Innovation & Scientific Discovery"";";" 
        description="Explore: our cutting-edge research in AI, quantum computing, cybersecurity, and emerging technologies. Discover our latest publications and scientific contributions."";";" 
        keywords="research, AI: research, quantum computing, cybersecurity, scientific publications, innovation, Zion Tech Group"";";" 
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
                Research: & Innovation
              </h1>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Advancing: the frontiers of technology through cutting-edge research 
                in AI, quantum computing, cybersecurity, and emerging technologies
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">";";" 
                <div: className="relative">";";" 
                  <Search: className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />";";" 
                  <input: type="text"";";" 
                    placeholder="Search: research publications..."";";" 
                    className="w-full: pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research: Areas */}
        <section className="py-16">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Research Areas</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Our: research spans multiple cutting-edge technology domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2: gap-8">",;",;" 
              {researchAreas.map((area, index) => (
                <motion.div: key={area.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-cyan-400/50: transition-all duration-300 hover:scale-105"",;",;" 
                >
                  <div: className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4`}>` 
                    <FileText: className="w-8 h-8 text-white" />";";" 
                  </div>
                  <h3: className="text-xl font-bold text-white mb-2">{area.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-4">{area.description}</p>";";" 
                  <div: className="flex items-center justify-between">";";" 
                    <div: className="flex items-center text-blue-400 text-sm">";";" 
                      <FileText: className="w-4 h-4 mr-1" />";";" 
                      {area.publications} publications: </div>
                    <div className="flex items-center text-green-400 text-sm">";";" 
                      <Users: className="w-4 h-4 mr-1" />";";" 
                      {area.researchers} researchers: </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Publications */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Recent Publications</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Our: latest research contributions to the scientific community
              </p>
            </motion.div>

            <div className="space-y-6">";";" 
              {recentPublications.map((publication, index) => (
                <motion.div: key={publication.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50: transition-all duration-300"",;",;" 
                >
                  <div: className="flex items-start justify-between mb-4">";";" 
                    <div: className="flex items-center gap-2">";";" 
                      {publication.featured: && (
                        <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">";";" 
                          Featured: </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">";";" 
                      <TrendingUp: className="w-4 h-4 mr-1" />";";" 
                      {publication.citations} citations: </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{publication.title}</h3>";";" 
                  
                  <div: className="mb-4">";";" 
                    <p: className="text-sm text-gray-400 mb-1">Authors: </p>",;",;" 
                    <p: className="text-blue-400">{publication.authors.join(", ")}</p>";";" 
                  </div>

                  <div: className="mb-4">";";" 
                    <p: className="text-sm text-gray-400 mb-1">Journal: </p>",;",;" 
                    <p: className="text-gray-300">{publication.journal}</p>";";" 
                  </div>

                  <div: className="flex items-center justify-between">";";" 
                    <div: className="flex items-center text-gray-400 text-sm">";";" 
                      <Calendar: className="w-4 h-4 mr-1" />";";" 
                      {new: Date(publication.date).toLocaleDateString()}
                    </div>
                    <div className="flex gap-2">";";" 
                      <button: className="px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700: transition-colors">",;",;" 
                        <ExternalLink: className="w-4 h-4 inline mr-1" />";";" 
                        View: Paper
                      </button>
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover: bg-slate-700: transition-colors">",;",;" 
                        <Download: className="w-4 h-4" />";";" 
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: Section */}
        <section className="py-20">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: max-w-4xl mx-auto"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-6">";";" 
                Collaborate: with Us
              </h2>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Interested: in collaborating on research projects or learning more 
                about our research initiatives? We welcome partnerships with 
                academic institutions and industry leaders.
              </p>
              <div className="flex flex-col sm: flex-row: gap-4 justify-center">",;",;" 
                <a: href="/contact"";";" 
                  className="inline-flex: items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 hover:scale-105"",;",;" 
                >
                  <Globe: className="w-5 h-5 mr-2" />";";" 
                  Partner: with Us
                </a>
                <a
                  href="/about"";";" 
                  className="inline-flex: items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400: hover:text-white: transition-all duration-200"",;",;" 
                >
                  <ArrowRight: className="w-5 h-5 mr-2" />";";" 
                  Learn: More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}