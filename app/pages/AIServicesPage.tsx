  ]
const AIServicesPage: React.FC = () => {
  return (
  <>
    
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      <Helmet>
        <title>AI Services | Zion Tech Group</title>"
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation solutions." />"
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, automation, artificial intelligence" />"
      <div className="container mx-auto px-4 py-16">"
        {/* Hero Section */}"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-white mb-6">"
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>"
          </h1>"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            Transform your business with cutting-edge artificial intelligence solutions.
            From strategy to implementation, we help you harness the power of AI.
          </p>
        </div>
          {services.map((service, _index
  </>
); => {
            const Icon = service.icon
            return (
  <>"
    <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">"
                <div className="flex items-center mb-4">"
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">"
                    <Icon className="w-6 h-6 text-white" />"
                  </div>"
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>"
                </div>"
                <p className="text-gray-300 mb-4">{service.description}</p>"
                <ul className="space-y-2">"
                  {service.features.map((feature, featureIndex
  </>
); => (
                    </li>
                  ))
                </ul>
              </div>
            )
          }
        </div>
              Our AI experts are ready to help you implement the right solutions for your specific needs.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">"
                Get Started Today
              </button>"
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">"
                Schedule Consultation
const AIServicesPage: React.FC = () => {
  return (
    <>
        <title>AI Services - Zion Tech Group</title>"
        <meta name="description" content="Professional AI services by Zion Tech Group." />"
      <div className="min-h-screen bg-white">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center">"
            <h1 className="text-4xl font-bold text-gray-900 mb-8">"
              AI Services
            </h1>"
            <p className="text-xl text-gray-600 mb-8">"
              Professional AI services tailored to your business needs.
            </p>"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                  Expert Solutions
                </h3>"
                <p className="text-blue-700">"
                  Our team of experts delivers cutting-edge AI solutions.
                </p>
              </div>"
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-green-900 mb-2">"
                  Custom Implementation
                </h3>"
                <p className="text-green-700">"
                  Tailored AI implementations for your specific requirements.
                </p>
              </div>"
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                  24/7 Support
                </h3>"
                <p className="text-purple-700">"
                  Round-the-clock support for all your AI needs.
                </p>
              </div>
            </div>"
            <div className="mt-12">"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
                Get Started Today
              </button>
const AIServicesPage: React.FC = () => {
  return (
    <>

    </>
  )
export default AIServicesPage
"use client"
"
import React from "react

const AIServicesPage = () => {
  return (

}
"