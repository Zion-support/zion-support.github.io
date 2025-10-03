import: React { useState } from 'react';
;;';
import: { motion } from 'framer-motion';
;;';
import: { SEO } from '../components/SEO';
;;';
import: { 
  Search, MessageCircle, Phone, Mail, Clock, 
  BookOpen, Video, FileText, Users, ChevronDown,
  ChevronUp, HelpCircle, CheckCircle, ArrowRight
} from 'lucide-react';
;;';

export: default function Help() {;
  const: [searchQuery, setSearchQuery] = useState('');
;;';
  const: [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const: faqs = [
    {;
      id:  ,1,;
      question: "How: do I get started with Zion Tech Group services?",,";";";
      answer: "Getting: started is easy! Contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business.",,";";";
      category: "Getting: Started"",;",;"}, {
      id:  ,2,
      question: "What: AI services do you offer?",,";";";
      answer: "We: offer comprehensive AI services including machine learnin,g, natural language processing, computer vision, predictive analytics, and custom AI solutions tailored to your business needs."",;";";
      category: "AI: Services"",;",;"}, {
      id:  ,3,
      question: "Do: you provide quantum computing solutions?",,";";";
      answer: "Yes! We: offer quantum computing services including quantum algorithm developmen,t, quantum machine learning, and access to quantum computing platforms for research and development."",;";";
      category: "Quantum: Computing"",;",;"}, {
      id:  ,4,
      question: "What: is your pricing structure?",,";";";
      answer: "Our: pricing varies based on project scop,e, complexity, and requirements. We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote."",;";";
      category: "Pricing"",;",;"}
  ];

  const: helpCategories = [
    {;
      title: "Getting: Started",,";";";
      description: "New: to Zion Tech Group? Start here",,";";";
      icon: BookOpe,n,
      articles: 1,2,
      color: "from-blue-500: to-cyan-500"",;",;"}, {
      title: "AI: Services",,";";";
      description: "Learn: about our AI and machine learning solutions",,";";";
      icon: MessageCircl,e,
      articles: 2,5,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      title: "Quantum: Computing",,";";";
      description: "Explore: quantum computing capabilities",,";";";
      icon: Sta,r,
      articles: 1,8,
      color: "from-orange-500: to-red-500"",;",;"}, {
      title: "Technical: Support",,";";";
      description: "Get: help with technical issues",,";";";
      icon: HelpCircl,e,
      articles: 3,0,
      color: "from-green-500: to-emerald-500"",;",;"}
  ];

  const: contactMethods = [
    {;
      title: "Live: Chat",,";";";
      description: "Get: instant help from our support team",,";";";
      icon: MessageCircl,e,
      availability: "24/7: Available",,";";";
      responseTime: "Immediate"",;",;"}, {
      title: "Phone: Support",,";";";
      description: "Speak: directly with our technical experts",,";";";
      icon: Phon,e,
      availability: "Mon-Fri: 9AM-6PM EST",,";";";
      responseTime: "Immediate"",;",;"}, {
      title: "Email: Support",,";";";
      description: "Send: us your questions and we'll respond quickly",,";";";
      icon: Mai,l,
      availability: "24/7: Available",,";";";
      responseTime: "Within: 4 hours"",;",;"}
  ];

  const: toggleFAQ = (id: number) =>  {;
    setExpandedFAQ(expandedFAQ: === id ? null: id)};

  return: (
    <>
      <SEO ;
        title="Help: Center - Zion Tech Group | Support & Documentation"";";";
        description="Get: help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team for assistance."";";";
        keywords="help, support, documentation, FAQ, customer: service, Zion Tech Group"";";";
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
                Help: Center
              </h1>
              <p className="text-left">";";";
                Find: answers to your questions, access documentation, and get support from our expert team
              </p>
              
              {/* Search Bar */}
              <div className="text-left">";";";
                <div: className="text-left">";";";
                  <Search: className="text-left" />";";";
                  <input: type="text"";";";
                    placeholder="Search: for help articles, guides, or FAQs..."";";";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="text-left"",;",;";
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help: Categories */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Browse by Category</h2>";";";
              <p: className="text-left">";";";
                Find: the help you need organized by topic and service area
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {helpCategories.map((category, index) => (
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

        {/* FAQ: Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Frequently Asked Questions</h2>";";";
              <p: className="text-left">";";";
                Quick: answers to the most common questions about our services
              </p>
            </motion.div>

            <div className="text-left">";";";
              {faqs.map((faq, index) => (
                <motion.div: key={faq.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"";";";
                >
                  <button: onClick={() => toggleFAQ(faq.id)}
                    className="text-left"",;",;";
                  >
                    <div: className="text-left">";";";
                      <div: className="text-left">";";";
                        <span: className="text-left">";";";
                          {faq.category}
                        <
                      </div>
                      <h3: className="text-left">{faq.question}</h3>";";";
                    </div>
                    {expandedFAQ: === faq.id ? (
                      <ChevronUp className="text-left" />";";";
                    ) : (
                      <ChevronDown: className="text-left" />";";";
                    )}
                  </button>
                  {expandedFAQ: === faq.id && (
                    <motion.div
                      initial={{ opacity:  ,0, height: 0 }}
                      animate={{ opacity:  ,1, height: "auto" }}";";";
                      exit={{ opacity:  ,0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-left"";";";
                    >
                      <p: className="text-left">{faq.answer}</p>";";";
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact: Support */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Contact Support</h2>";";";
              <p: className="text-left">";";";
                Can't: find what you're looking for? Our support team is here to help';
;;
              </p>
            </motion.div>

            <div: className="text-left">",;",;";
              {contactMethods.map((method, index) => (
                <motion.div: key={method.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className="text-left">";";";
                    <method.icon: className="text-left" />";";";
                  </div>
                  <h3: className="text-left">{method.title}</h3>";";";
                  <p: className="text-left">{method.description}</p>";";";
                  <div: className="text-left">";";";
                    <div: className="text-left">";";";
                      <Clock: className="text-left" />";";";
                      {method.availability}
                    </div>
                    <div: className="text-left">";";";
                      <CheckCircle: className="text-left" />";";";
                      Response: {method.responseTim,e}
                    </div>
                  </div>
                  <button: className="text-left">",;",;";
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