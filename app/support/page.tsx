import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Mail, FileText, HelpCircle, Clock } from 'lucide-react'
const SupportPage: React.FC = () => {
  const supportOptions = [{]      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond within 24 hours',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    },
    {icon: FileText,
      title: 'Documentation',
      description: 'Browse our comprehensive knowledge base',
      action: 'View Docs',
      color: 'from-orange-500 to-red-500'}
  ]
  const faqs = [{]      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support, implementation assistance, training, and ongoing maintenance for all our solutions.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary depending on the complexity of your project. Simple solutions can be deployed in days, while complex enterprise systems may take weeks or months.'
    },
    {question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training programs for your team to ensure you get the most out of our solutions.'}
  ]
  return (
    <div className="min-h-screen bg-white>"
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description content="Get help and support for your Zion Tech Group solutions." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you succeed. Get the support you need for all your AI and IT solutions.
          </p>
        </div>
        {/* Support Options */}
        <div className=grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">"
          {supportOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <div key={index} className=bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">"
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center mb-4`}>``                  <Icon className=w-6 h-6 text-white" />"
                </div>
                <h3 className=text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>"
                <p className=text-gray-600 mb-4">{option.description}</p>"
                <button className=w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">"
                  {option.action}
                </button>
              </div>
  );
          })}
        </div>
        {/* FAQ Section */}
        <div className=max-w-4xl mx-auto">"
          <h2 className=text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>"
          <div className=space-y-6">"
            {faqs.map((faq, index) => (
              <div key={index} className=bg-white p-6 rounded-lg shadow-lg border border-gray-200">"
                <h3 className=text-lg font-semibold text-gray-900 mb-3 flex items-center">"
                  <HelpCircle className=w-5 h-5 text-blue-600 mr-2" />"
                  {faq.question}
                </h3>
                <p className=text-gray-600">{faq.answer}</p>"
              </div>
            ))}
          </div>
        </div>
        {/* Contact CTA */}
        <div className=mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">"
          <h2 className=text-3xl font-bold mb-4">Still Need Help?</h2>"
          <p className=text-xl mb-8">"
            Can't find what you're looking for? Our support team is ready to assist you.
          </p>
          <div className=flex flex-col sm:flex-row gap-4 justify-center">"
            <Link>
              to=/contact""
              className=bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors""
            >
              Contact Support
            </Link>
            <button className=border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">"
              Schedule Call
            </button>
          </div>
        </div>
      </div></div>
  );
export default SupportPage;