'use client'
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, BarChart, Shield, Zap, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, Star, Settings, Calendar, CheckSquare, FileText  } from 'lucide-react';import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const ITConsultingPage: React.FC  = () => {
  const consultingServices = [
    {
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies to modernize your business operations.',
      icon: Brain,
      features: ['Technology Assessment', 'Digital Strategy Planning', 'Process Optimization', 'Change Management'],
      benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Customer Experience', 'Competitive Advantage'],
      price: 'Starting at $5,000/month'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.',
      icon: Cloud,
      features: ['Cloud Architecture Design', 'Data Migration', 'Security Implementation', 'Performance Optimization'],
      benefits: ['Scalability', 'Cost Savings', 'Enhanced Security', 'Improved Performance'],
      price: 'Starting at $3,500/month'
    }
  ]
  return (<React.Fragment></React.Fragment>
      <Helmet></Helmet>
        <title>IT Consulting Services - Zion Tech Group
        <meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /></meta>"
        <meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" />
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation /></Navigation>"
        <main className="pt-24 pb-16 px-4"></main>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="text-center mb-16"></div>"
              < className="text-4xl,"$2 />
  md: text-6xl font-bold text-gray-900 mb-6"></h1>
                IT Consulting Services,
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                Transform your business with expert IT consulting. We provide strategic guidance, 
                digital transformation, and technology solutions that drive growth and efficiency.
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"></div>
                {consultingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"></div>
                  <div className="flex items-center mb-6"></div>
                    <div className="p-3 bg-blue-100 rounded-xl mr-4"></div>
                      <service.icon className="w-8 h-8 text-blue-600" />
                    <div></div>
                      <h3 className="text-2xl font-bold text-gray-900"></h3>
                {service.title}
                <p className="text-gray-600"></p>
                {service.description}
                <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:
                    <ul className="space-y-2"></ul>
                {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"></li>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                {feature}
                </li>)
                      ))}
                <h4 className="font-semibold text-gray-900 mb-3">Benefits:
                    <ul className="space-y-2"></ul>
                {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"></li>
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                {benefit}
                      ))}
                <h4 className="font-semibold text-gray-900 mb-3">Benefits:
                    <ul className="space-y-2"></ul>
                {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center"></li>
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                {benefit}
                      ))}
                <div className="text-center"></div>
                      <div className="text-3xl font-bold text-blue-600 mb-2"></div>
                {service.price}
                </div>
                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover: bg-blue-700 transition-colors"></button>
                        Get Started,
  
                    </div>
                </div>
                </div>
              ))}
          {/* CTA Section */}
                <section className="py-16 px-4 sm: px-6 lg:px-8 bg-gray-50"></section>
            <div className="max-w-4xl mx-auto text-center"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?
              <p className="text-xl text-gray-600 mb-8"></p>
                Contact our experts for a free consultation and discover how we can help your business.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"></button>
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Us
  
                <button className="bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors"></button>
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us
  
              </div>
                </div>
          </section>
                </main>
        <Footer />
      </div>
                </React.Fragment>
  ),
}
export default ITConsultingPage</button>
                </button>
  </button>
                </div></div>
                </div></div>
                </p></p>
                </h2></h3>
                </h4></h4>
                </h4></ul>
                </ul></ul>
                </li></li>;