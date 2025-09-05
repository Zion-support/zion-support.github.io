import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Head from 'next/head'
import { Plus, Minus, HelpCircle, Search } from 'lucide-react'

const faqs = [
  {
    category: "General", questions: [
      {
        question: "What services does Zion Tech Group offer?", answer: "We offer comprehensive AI solutions, IT services, cloud computing, cybersecurity, and micro SaaS solutions. Our services include machine learning, natural language processing, cloud infrastructure, and custom software development." }, ;
      {
        question: "How can I get started with your services?", answer: "Getting started is easy! Simply contact us through our contact form, schedule a consultation, or call us directly. We'll assess your needs and provide a customized solution plan." }, ;
      {
        question: "Do you offer 24/7 support?", answer: "Yes, we provide 24/7 support for all our clients. Our dedicated support team is always available to help with any technical issues or questions you may have." }]},;
  {
    category: "AI Services", questions: [
      {
        question: "What AI technologies do you specialize in?", answer: "We specialize in machine learning, natural language processing, computer vision, predictive analytics, and custom AI solutions. Our team has expertise in various AI frameworks and technologies." }, ;
      {
        question: "How long does it take to implement an AI solution?", answer: "Implementation time varies depending on the complexity of the project. Simple AI solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months." }, ;
      {
        question: "Do you provide AI training and consultation?", answer: "Yes, we offer comprehensive AI training programs and consultation services to help your team understand and implement AI technologies effectively." }]},;
  {
    category: "IT Services", questions: [
      {
        question: "What IT infrastructure services do you provide?", answer: "We provide cloud infrastructure setup, network configuration, cybersecurity solutions, database management, system administration, and DevOps services." }, ;
      {
        question: "Do you work with specific cloud providers?", answer: "Yes, we work with all major cloud providers including AWS, Azure, Google Cloud, and can help you choose the best platform for your needs." }, ;
      {
        question: "How do you ensure data security?", answer: "We implement comprehensive security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA." }]},;
  {
    category: "Pricing", questions: [
      {
        question: "How do you price your services?", answer: "Our pricing is based on project complexity, scope, and duration. We offer flexible pricing models including fixed-price projects, hourly rates, and subscription-based services." }, ;
      {
        question: "Do you offer free consultations?", answer: "Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create accurate project estimates." }, ;
      {
        question: "Are there any hidden costs?", answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we'll discuss any potential additional costs upfront." }]}]

export default function FAQPage() {
import React, { useState } from 'react'
import MainLayout from '../src/components/layout/MainLayout'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, Search, Filter, ArrowRight } from 'lucide-react'

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState(new Set())

  const categories = [{ id: 'all', name: 'All Questions' }, ;
    { id: 'general', name: 'General' }, ;
    { id: 'services', name: 'Services' }, ;
    { id: 'billing', name: 'Billing' }, ;
    { id: 'technical', name: 'Technical' }, ;
    { id: 'support', name: 'Support' }]

  const faqs = [
    {
      id: 1, question: 'What services does Zion Tech Group offer?', answer: 'We offer a comprehensive range of technology services including AI and machine learning solutions, cloud infrastructure, cybersecurity, custom software development, database solutions, and digital transformation consulting. Our services are designed to help businesses of all sizes leverage technology for growth and efficiency.', ;
      category: 'general', tags: ['services', 'overview', 'technology'] },;
    {
      id: 2, question: 'How do I get started with your services?', answer: 'Getting started is easy! Simply contact us through our contact form, call us directly, or schedule a consultation. We\'ll discuss your needs, assess your current technology stack, and recommend the best solutions for your business. Our team will guide you through the entire process from initial consultation to implementation.', ;
      category: 'general', tags: ['getting-started', 'consultation', 'process'] },;
    {
      id: 3, question: 'Do you offer custom development services?', answer: 'Yes! We specialize in custom software development tailored to your specific business needs. Our team can build web applications, mobile apps, APIs, microservices, and more. We work with modern technologies and follow best practices to ensure scalable, maintainable, and secure solutions.', ;
      category: 'services', tags: ['custom-development', 'software', 'applications'] },;
    {
      id: 4, question: 'What is your response time for support requests?', answer: 'We aim to respond to all support requests within 24 hours during business days. For critical issues, we provide 24/7 emergency support for our enterprise clients. Our support team is available via email, phone, and live chat to help you resolve any issues quickly.', ;
      category: 'support', tags: ['support', 'response-time', 'emergency'] },;
    {
      id: 5, question: 'What security measures do you have in place?', answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001. We also follow OWASP security guidelines and conduct regular penetration testing to ensure the highest level of security.', ;
      category: 'technical', tags: ['security', 'encryption', 'compliance'] },;
    {
      id: 6, question: 'Can I integrate your services with my existing systems?', answer: 'Absolutely! We provide comprehensive integration services and APIs that allow you to seamlessly connect our solutions with your existing business systems and workflows. Our team has experience with a wide range of technologies and can help you integrate with virtually any system.', category: 'technical', tags: ['integration', 'APIs', 'existing-systems'] },;
    {
      id: 7, question: 'What are your pricing models?', answer: 'We offer flexible pricing models to suit different business needs. Our pricing is based on project scope, complexity, and ongoing support requirements. We provide transparent pricing with no hidden fees and offer both fixed-price and time-and-materials options. Contact us for a detailed quote tailored to your specific needs.', ;
      category: 'billing', tags: ['pricing', 'cost', 'billing'] },;
    {
      id: 8, question: 'Do you provide training for your solutions?', answer: 'Yes! We provide comprehensive training for all our solutions to ensure your team can effectively use and maintain them. Our training includes documentation, video tutorials, hands-on workshops, and ongoing support. We also offer customized training programs based on your specific requirements.', ;
      category: 'support', tags: ['training', 'documentation', 'workshops'] },;
    {
      id: 9, question: 'What technologies do you work with?', answer: 'We work with a wide range of modern technologies including React, Node.js, Python, Java, .NET, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. Our team stays up-to-date with the latest technologies and best practices to provide you with cutting-edge solutions.', ;
      category: 'technical', tags: ['technologies', 'programming', 'cloud'] },;
    {
      id: 10, question: 'How do you ensure project quality?', answer: 'We follow rigorous quality assurance processes including code reviews, automated testing, manual testing, and continuous integration. Our team uses industry-standard tools and methodologies to ensure high-quality deliverables. We also provide regular project updates and involve you in the review process.', ;
      category: 'services', tags: ['quality', 'testing', 'process'] },;
    {
      id: 11, question: 'Do you offer maintenance and support after project completion?', answer: 'Yes! We provide ongoing maintenance and support services to ensure your solutions continue to perform optimally. Our support includes bug fixes, updates, security patches, performance monitoring, and technical assistance. We offer various support packages to meet your specific needs.', ;
      category: 'support', tags: ['maintenance', 'support', 'updates'] },;
    {
      id: 12, question: 'Can you help with digital transformation?', answer: 'Absolutely! Digital transformation is one of our core services. We help businesses modernize their processes, adopt new technologies, and create digital-first strategies. Our approach includes assessment, strategy development, implementation, and change management to ensure successful transformation.', ;
      category: 'services', tags: ['digital-transformation', 'modernization', 'strategy'] }]

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory: selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory })

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems)
    if(newExpanded.has(id)) {
      newExpanded.delete(id) } else {
      newExpanded.add(id) }
    setExpandedItems(newExpanded)}

  const popularQuestions = faqs.filter(faq =>
    faq.tags.includes('getting-started') ||;
    faq.tags.includes('services') ||;
    faq.tags.includes('pricing')
  )

  return(<MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about our services, pricing, support, and more. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, help, support, services, pricing, technical questions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        { /* Hero Section */ }
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Frequently Asked{ ' ' }
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Questions;
                </span>
              </h1>
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, support, and more.;
                Can't find what you're looking for? Contact us directly.;
              </p>
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    ) }

  const filteredFaqs = faqs.map(category => ({
    ...category, ;
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ) })).filter(category => category.questions.length > 0)

import Head from 'next/head'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Phone } from 'lucide-react'
import Layout from '../components/Layout'

const faqs = [{
    question: 'What services does Zion Tech Group offer?', answer: 'We offer a comprehensive range of technology services including AI solutions, cloud migration, custom development, digital transformation, cybersecurity, and consulting services.' }, ;
  {
    question: 'How long does a typical project take?', answer: 'Project timelines vary depending on complexity and scope. Simple projects can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase.' }, ;
  {
    question: 'Do you work with small businesses?', answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We tailor our solutions to fit your budget and requirements.' }, ;
  {
    question: 'What technologies do you specialize in?', answer: 'We specialize in modern technologies including React, Next.js, Node.js, Python, AI/ML, cloud platforms(AWS, Azure, GCP), and various databases and frameworks.' }, ;
  {
    question: 'Do you provide ongoing support?', answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after deployment.' }, ;
  {
    question: 'How do you ensure data security?', answer: 'We follow industry best practices for data security, including encryption, secure coding practices, regular security audits, and compliance with relevant regulations.' }]

export default function FAQ() {
  return(<Layout>
      <Head>
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about our services, processes, and solutions."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services and solutions.
              </p>
            </motion.div>
          </div>
        </section>
        { /* Search and Filter */ }
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div;
                className="text-center mb-12"
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                { faqs.map((faq, index) => (;
                  <motion.div;
                    key={index }
                    className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow duration-300"
                    initial={{opacity: 0, y: 30 }}
                    whileInView={{opacity: 1, y: 0 }}
                    transition={{duration: 0.8, delay: index * 0.1 }}
                    viewport={{once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <ChevronDown className="w-6 h-6 text-blue-600 mr-3"  />
                      { faq.question }
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{ faq.answer }</p>
                  </motion.div>))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div;
                initial={{opacity: 0, y: 30 }}
                whileInView={{opacity: 1, y: 0 }}
                transition={{duration: 0.8 }}
                viewport={{once: true }}
            </div>
          </div>
        </section>
        { /* Contact CTA */ }
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              viewport={{once: true }}
            >
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help.
                Contact us directly and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
        { /* FAQ Sections */ }
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            { filteredFaqs.map((category, categoryIndex) => (;
              <motion.div;
                key={categoryIndex }
                initial={{opacity: 0, y: 20 }}
                animate={{opacity: 1, y: 0 }}
                transition={{duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <HelpCircle className="w-6 h-6 mr-2 text-blue-600"  />
                  { category.category }
                </h2>
                <div className="space-y-4">
                  { category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(globalIndex)

                    return(<div
                        key={faqIndex }
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          onClick={ () => toggleItem(globalIndex) }
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover: bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900">{ faq.question }</span>
                          { isOpen ? (;
                            <Minus className="w-5 h-5 text-blue-600" />) : (;
                            <Plus className="w-5 h-5 text-blue-600" />) }
                        </button>
                        <AnimatePresence>
                          { isOpen && (;
                            <motion.div;
                              initial={{height: 0, opacity: 0 }}
                              animate={{height: 'auto', opacity: 1 }}
                              exit={{height: 0, opacity: 0 }}
                              transition={{duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-gray-600">
                                { faq.answer }
                              </div>
                            </motion.div>)}
                        </AnimatePresence>
                      </div>
                    )})}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div;
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Contact our team and we'll be happy to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2"  />
                </a>
                <a
                  href="/help"
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  Visit Help Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              viewport={{once: true }}
            >
              <h2 className="text-3xl md: text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Have more questions or ready to begin your project?
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
    </>
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our team is here to help. Get in touch with us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hello@ziontechgroup.com"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2"  />
                    Email Us
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2"  />
                    Call Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}}}
)