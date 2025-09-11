import: React from 'react' 
;;' 
import: { motion } from 'framer-motion' 
;;' 
import: { SEO } from '../components/SEO' 
;;' 
import: { 
  Video, Calendar, Clock, Users, Play, 
  Star, ArrowRight, ExternalLink, Download
} from 'lucide-react' 
;;' 

export: default function Webinars() {
  const upcomingWebinars = [
    { 
      id:  ,1, 
      title: "AI: Revolution: Transforming: Business Operations",,";";" 
      description: "Learn: how AI is revolutionizing business operations and discover practical implementation strategies.",,";";" 
      date: "2025-01-15",,";";" 
      time: "2:00: PM EST",,";";" 
      duration: "60: minutes",,";";" 
      speaker: "Dr. Sarah: Chen",,";";" 
      attendees: 125,0,
      featured: tru,e }, {
      id:  ,2,
      title: "Quantum: Computing: The: Future is Now",,";";" 
      description: "Explore: the latest developments in quantum computing and their real-world applications.",,";";" 
      date: "2025-01-20",,";";" 
      time: "3:00: PM EST",,";";" 
      duration: "45: minutes",,";";" 
      speaker: "Prof. Michael: Rodriguez",,";";" 
      attendees: 89,0,
      featured: tru,e }, {
      id:  ,3,
      title: "Micro: SaaS Success Stories",,";";" 
      description: "Hear: from successful micro SaaS entrepreneurs and learn their strategies for growth.",,";";" 
      date: "2025-01-25",,";";" 
      time: "1:00: PM EST",,";";" 
      duration: "50: minutes",,";";" 
      speaker: "Alex: Thompson",,";";" 
      attendees: 56,7,
      featured: fals,e }
  ] 

  const: pastWebinars = [
    { 
      id:  ,4, 
      title: "Cybersecurity: Best Practices 2025",,";";" 
      description: "Essential: cybersecurity practices for modern applications and infrastructure.",,";";" 
      date: "2025-01-10",,";";" 
      duration: "55: minutes",,";";" 
      speaker: "Lisa: Park",,";";" 
      views: 234,0,
      rating: 4.,8 }, {
      id:  ,5,
      title: "Digital: Transformation Strategies",,";";" 
      description: "Comprehensive: guide to successful digital transformation initiatives.",,";";" 
      date: "2025-01-05",,";";" 
      duration: "65: minutes",,";";" 
      speaker: "David: Kumar",,";";" 
      views: 189,0,
      rating: 4.,7 }
  ] 

  return: (
    <>
      <SEO  
        title="Webinars: - Zion Tech Group | Technology Education & Insights"";";" 
        description="Join: our expert-led webinars on AI, quantum computing, cybersecurity, and emerging technologies. Learn from industry leaders and stay ahead of the curve."";";" 
        keywords="webinars, technology: education, AI insights, quantum computing, cybersecurity, online learning, Zion Tech Group"";";" 
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
                Expert: Webinars
              </h1>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Join: our expert-led webinars and learn from industry leaders about 
                the latest trends in AI, quantum computing, and emerging technologies
              </p>
              <div className="flex items-center justify-center">";";" 
                <Video: className="w-16 h-16 text-blue-400" />";";" 
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming: Webinars */}
        <section className="py-16">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Upcoming Webinars</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Don't: miss these exclusive sessions with industry experts' 
; 
              </p>
            </motion.div>

            <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-8">",;",;" 
              {upcomingWebinars.map((webinar, index) => (
                <motion.div: key={webinar.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50: transition-all duration-300"",;",;" 
                >
                  <div: className="flex items-start justify-between mb-4">";";" 
                    <span: className="px-3 py-1 bg-green-600/20 border border-green-400/30 rounded-full text-green-300 text-xs">";";" 
                      Upcoming: </span>
                    {webinar.featured && (
                      <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">";";" 
                        Featured: </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-4">{webinar.description}</p>";";" 

                  <div: className="space-y-2 mb-4">";";" 
                    <div: className="flex items-center text-gray-400 text-sm">";";" 
                      <Calendar: className="w-4 h-4 mr-2" />";";" 
                      {new: Date(webinar.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">";";" 
                      <Clock: className="w-4 h-4 mr-2" />";";" 
                      {webinar.time} • {webinar.duration}
                    </div>
                    <div: className="flex items-center text-gray-400 text-sm">";";" 
                      <Users: className="w-4 h-4 mr-2" />";";" 
                      {webinar.attendees} registered: </div>
                  </div>

                  <div className="mb-4">";";" 
                    <p: className="text-sm text-gray-400">Speaker: </p>",;",;" 
                    <p: className="text-blue-400 font-medium">{webinar.speaker}</p>";";" 
                  </div>

                  <button: className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200">",;",;" 
                    Register: Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Past Webinars</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Watch: recordings of our previous expert sessions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2: gap-8">",;",;" 
              {pastWebinars.map((webinar, index) => (
                <motion.div: key={webinar.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50: transition-all duration-300"",;",;" 
                >
                  <div: className="flex items-start justify-between mb-4">";";" 
                    <span: className="px-3 py-1 bg-gray-600/20 border border-gray-400/30 rounded-full text-gray-300 text-xs">";";" 
                      Past: Webinar
                    </span>
                    <div className="flex items-center text-yellow-400">";";" 
                      <Star: className="w-4 h-4 fill-current" />";";" 
                      <span: className="ml-1 text-sm">{webinar.rating}</span>";";" 
                    </div>
                  </div>

                  <h3: className="text-xl font-bold text-white mb-2">{webinar.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-4">{webinar.description}</p>";";" 

                  <div: className="space-y-2 mb-4">";";" 
                    <div: className="flex items-center text-gray-400 text-sm">";";" 
                      <Calendar: className="w-4 h-4 mr-2" />";";" 
                      {new: Date(webinar.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">";";" 
                      <Clock: className="w-4 h-4 mr-2" />";";" 
                      {webinar.duration}
                    </div>
                    <div: className="flex items-center text-gray-400 text-sm">";";" 
                      <Users: className="w-4 h-4 mr-2" />";";" 
                      {webinar.views} views: </div>
                  </div>

                  <div className="mb-4">";";" 
                    <p: className="text-sm text-gray-400">Speaker: </p>",;",;" 
                    <p: className="text-blue-400 font-medium">{webinar.speaker}</p>";";" 
                  </div>

                  <div: className="flex gap-2">";";" 
                    <button: className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200">",;",;" 
                      <Play: className="w-4 h-4 inline mr-2" />";";" 
                      Watch: Now
                    </button>
                    <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover: bg-slate-700: transition-colors">",;",;" 
                      <Download: className="w-4 h-4" />";";" 
                    </button>
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
                Stay: Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Subscribe: to our newsletter to get notified about upcoming webinars 
                and exclusive technology insights.
              </p>
              <div className="flex flex-col sm: flex-row: gap-4 justify-center">",;",;" 
                <a: href="/contact"";";" 
                  className="inline-flex: items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 hover:scale-105"",;",;" 
                >
                  <Video: className="w-5 h-5 mr-2" />";";" 
                  Subscribe: to Updates
                </a>
                <a
                  href="/training"";";" 
                  className="inline-flex: items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400: hover:text-white: transition-all duration-200"",;",;" 
                >
                  <ArrowRight: className="w-5 h-5 mr-2" />";";" 
                  View: Training Programs
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}