import React from 'react';
import {Helmet;} from 'react-helmet-async'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {const services = [
    {;,} id: 1},;,
title: 'Cloud Infrastructure',;,
description: 'Scalable and secure cloud solutions for your business needs.',;,
icon: Cloud,
    },
    {;,
id: 2,;,
title: 'Cybersecurity',;,
description: 'Comprehensive security solutions to protect your digital assets.',;,
icon: Shield,;,
features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],;,
price: 'From $1,000/month'} ,
    {icon: BarChart,
      title: 'Feature 2', 
      description: 'Description for feature 2.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    {icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ]
const categories = [
    {id: 'all', name: 'All Services'} ,
    {id: 'cloud', name: 'Cloud Services'} ,
    {id: 'development', name: 'Web Development'} ,
    {id: 'security', name: 'Cybersecurity'} ,
    {id: 'database', name: 'Database'} ,
    {id: 'devops', name: 'DevOps'} ]
const filteredServices = services.filter(service =>;
selectedCategory === 'all' || service.category === selectedCategory
  )
return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm: px-6 l, g:px-8"
            </div>

              )
    </>
  )
            </div>

        {/* Services Grid */}
        <section className="py-16 px-4 sm: px-6 lg:px-8"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Discover the powerful features that make our solutions stand out.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g:grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  <div className="flex items-center mb-4"
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3"
                    <h3 className="text-xl font-semibold text-gray-900"
                  </div>
                  <p className="text-gray-600 mb-4"
                  <ul className="space-y-2"
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600"
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2"
                        {benefit}
                      </li>
                    ))}
                  </ul>
              ))}
            </div>

        {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center"
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"
Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                Contact Us
              </button>
              <button className="
    ,
    r: bg-blue-600 hove, r:text-white transition-colors"
                Schedule Demo
              </button>
      
      <Footer />
    </>
  )
}
    </Navigation>
