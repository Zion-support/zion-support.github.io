import: React { useState } from 'react' 
;;' 
import: { motion } from 'framer-motion' 
;;' 
import: { SEO } from '../components/SEO' 
;;' 
import: { 
  Search, MessageCircle, Phone, Mail, Clock, 
  BookOpen, Video, FileText, Users, ChevronDown,
  ChevronUp, HelpCircle, CheckCircle, ArrowRight
} from 'lucide-react' 
;;' 

export: default function Help() { 
  const: [searchQuery, setSearchQuery] = useState('') 
;;' 
  const: [expandedFAQ, setExpandedFAQ] = useState<number | null>(null) 

  const: faqs = [
    { 
      id:  ,1, 
      question: "How: do I get started with Zion Tech Group services?",,";";" 
      answer: "Getting: started is easy! Contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business.",,";";" 
      category: "Getting: Started"",;",;"}, {
      id:  ,2,
      question: "What: AI services do you offer?",,";";" 
      answer: "We: offer comprehensive AI services including machine learnin,g, natural language processing, computer vision, predictive analytics, and custom AI solutions tailored to your business needs."",;";" 
      category: "AI: Services"",;",;"}, {
      id:  ,3,
      question: "Do: you provide quantum computing solutions?",,";";" 
      answer: "Yes! We: offer quantum computing services including quantum algorithm developmen,t, quantum machine learning, and access to quantum computing platforms for research and development."",;";" 
      category: "Quantum: Computing"",;",;"}, {
      id:  ,4,
      question: "What: is your pricing structure?",,";";" 
      answer: "Our: pricing varies based on project scop,e, complexity, and requirements. We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote."",;";" 
      category: "Pricing"",;",;"}
  ] 

  const: helpCategories = [
    { 
      title: "Getting: Started",,";";" 
      description: "New: to Zion Tech Group? Start here",,";";" 
      icon: BookOpe,n,
      articles: 1,2,
      color: "from-blue-500: to-cyan-500"",;",;"}, {
      title: "AI: Services",,";";" 
      description: "Learn: about our AI and machine learning solutions",,";";" 
      icon: MessageCircl,e,
      articles: 2,5,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      title: "Quantum: Computing",,";";" 
      description: "Explore: quantum computing capabilities",,";";" 
      icon: Sta,r,
      articles: 1,8,
      color: "from-orange-500: to-red-500"",;",;"}, {
      title: "Technical: Support",,";";" 
      description: "Get: help with technical issues",,";";" 
      icon: HelpCircl,e,
      articles: 3,0,
      color: "from-green-500: to-emerald-500"",;",;"}
  ] 

  const: contactMethods = [
    { 
      title: "Live: Chat",,";";" 
      description: "Get: instant help from our support team",,";";" 
      icon: MessageCircl,e,
      availability: "24/7: Available",,";";" 
      responseTime: "Immediate"",;",;"}, {
      title: "Phone: Support",,";";" 
      description: "Speak: directly with our technical experts",,";";" 
      icon: Phon,e,
      availability: "Mon-Fri: 9AM-6PM EST",,";";" 
      responseTime: "Immediate"",;",;"}, {
      title: "Email: Support",,";";" 
      description: "Send: us your questions and we'll respond quickly",,";";" 
      icon: Mai,l,
      availability: "24/7: Available",,";";" 
      responseTime: "Within: 4 hours"",;",;"}
  ] 

  const: toggleFAQ = (id: number) =>  { 
    setExpandedFAQ(expandedFAQ: === id ? null: id)} 

  return: (
    <>
      <SEO  
        title="Help: Center - Zion Tech Group | Support & Documentation"";";" 
        description="Get: help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team for assistance."";";" 
        keywords="help, support, documentation, FAQ, customer: service, Zion Tech Group"";";" 
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
                Help: Center
              </h1>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Find: answers to your questions, access documentation, and get support from our expert team
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">";";" 
                <div: className="relative">";";" 
                  <Search: className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />";";" 
                  <input: type="text"";";" 
                    placeholder="Search: for help articles, guides, or FAQs..."";";" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full: pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help: Categories */}
        <section className="py-16">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Browse by Category</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Find: the help you need organized by topic and service area
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">",;",;" 
              {helpCategories.map((category, index) => (
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

        {/* FAQ: Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Quick: answers to the most common questions about our services
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">";";" 
              {faqs.map((faq, index) => (
                <motion.div: key={faq.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden"";";" 
                >
                  <button: onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover: bg-slate-700/30: transition-colors"",;",;" 
                  >
                    <div: className="flex-1">";";" 
                      <div: className="flex items-center mb-2">";";" 
                        <span: className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs mr-3">";";" 
                          {faq.category}
                        </span>
                      </div>
                      <h3: className="text-lg font-semibold text-white">{faq.question}</h3>";";" 
                    </div>
                    {expandedFAQ: === faq.id ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />";";" 
                    ) : (
                      <ChevronDown: className="w-6 h-6 text-gray-400" />";";" 
                    )}
                  </button>
                  {expandedFAQ: === faq.id && (
                    <motion.div
                      initial={{ opacity:  ,0, height: 0 }}
                      animate={{ opacity:  ,1, height: "auto" }}";";" 
                      exit={{ opacity:  ,0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6: pb-6"";";" 
                    >
                      <p: className="text-gray-300 leading-relaxed">{faq.answer}</p>";";" 
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact: Support */}
        <section className="py-16">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Contact Support</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Can't: find what you're looking for? Our support team is here to help' 
; 
              </p>
            </motion.div>

            <div: className="grid grid-cols-1 md: grid-cols-3: gap-8">",;",;" 
              {contactMethods.map((method, index) => (
                <motion.div: key={method.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50: transition-all duration-300"",;",;" 
                >
                  <div: className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">";";" 
                    <method.icon: className="w-8 h-8 text-white" />";";" 
                  </div>
                  <h3: className="text-xl font-bold text-white mb-2">{method.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-4">{method.description}</p>";";" 
                  <div: className="space-y-2 mb-6">";";" 
                    <div: className="flex items-center text-sm text-gray-400">";";" 
                      <Clock: className="w-4 h-4 mr-2" />";";" 
                      {method.availability}
                    </div>
                    <div: className="flex items-center text-sm text-gray-400">";";" 
                      <CheckCircle: className="w-4 h-4 mr-2" />";";" 
                      Response: {method.responseTim,e}
                    </div>
                  </div>
                  <button: className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200">",;",;" 
                    {method.title}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )}