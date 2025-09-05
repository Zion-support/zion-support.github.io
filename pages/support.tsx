import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

const supportOptions = [
  {
    title: 'Live Chat Support', description: 'Get instant help with our live chat support available 24/7.', icon: MessageCircle, color: 'from-blue-500 to-cyan-500', availability: '24/7', responseTime: 'Instant', features: ['Real-time chat', 'Screen sharing', 'File sharing', 'Chat history'] },;
  {
    title: 'Email Support', description: 'Send us detailed questions and get comprehensive responses.', icon: Mail, color: 'from-green-500 to-emerald-500', availability: '24/7', responseTime: '4 hours', features: ['Detailed responses', 'File attachments', 'Priority queuing', 'Email tracking'] },;
  {
    title: 'Phone Support', description: 'Speak directly with our technical experts for immediate assistance.', icon: Phone, color: 'from-purple-500 to-pink-500', availability: 'Business Hours', responseTime: 'Immediate', features: ['Direct communication', 'Screen sharing', 'Call recording', 'Follow-up'] }]

const faqs = [{
    question: 'How do I get started with your services?', answer: 'You can get started by contacting our sales team through our contact form or by calling us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.' }, ;
  {
    question: 'What is your response time for support requests?', answer: 'Our response times vary by support channel: Live chat is instant, email support responds within 4 hours, and phone support is available during business hours.' }, ;
  {
    question: 'Do you offer training for your solutions?', answer: 'Yes, we provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions with our experts.' }]

export default function SupportPage() {
  return(<Layout
      title="Support - Zion Tech Group"
      description="Get help and support for all your technology needs. 24/7 support available through multiple channels."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */ }
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
                We're Here to
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  { " " }Help You Succeed;
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the support you need when you need it. Our expert team is available 24/7;
                through multiple channels to help you maximize the value of our solutions.;
              </p>
            </motion.div>
          </div>
        </section>
        { /* Support Options */ }
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
                Choose Your Support Channel
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the help you need, when you need it;
              </p>
            </motion.div>
            <div className="grid md: grid-cols-3 gap-8">
              { supportOptions.map((option, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, y: 20 }}
                  whileInView={{opacity: 1, y: 0 }}
                  transition={{duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover: bg-white/20 transition-all duration-300"
                >
                  <div className={ `w-16 h-16 rounded-lg bg-gradient-to-r ${option.color } flex items-center justify-center mb-6`}>
                    <option.icon className="h-8 w-8 text-white"  />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    { option.title }
                  </h3>
                  <p className="text-gray-300 mb-6">
                    { option.description }
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 mr-2"  />
                      <span className="text-sm">Available: { option.availability }</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 mr-2"  />
                      <span className="text-sm">Response: { option.responseTime }</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    { option.features.map((feature, featureIndex) => (;
                      <li key={featureIndex } className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-400"  />
                        { feature }
                      </li>))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4"  />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        { /* FAQ Section */ }
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to common questions
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                { faqs.map((faq, index) => (;
                  <motion.div;
                    key={index }
                    initial={{opacity: 0, y: 20 }}
                    whileInView={{opacity: 1, y: 0 }}
                    transition={{duration: 0.8, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      { faq.question }
                    </h3>
                    <p className="text-gray-300">
                      { faq.answer }
                    </p>
                  </motion.div>))}
              </div>
            </div>
          </div>
        </section>
        { /* Contact CTA */ }
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our support team is ready to assist you with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Contact Support
                  <ArrowRight className="ml-2 h-5 w-5"  />
                </button>
                <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}