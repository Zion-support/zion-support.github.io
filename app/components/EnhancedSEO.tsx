import Footer from './Footer'
import React from 'react'
import { ArrowRight, Brain } from 'lucide-react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { Phone, Mail, ArrowRight } from 'lucide-react'

const EnhancedSEO: React.FC = () => {
  const benefits = [
    'Advanced SEO optimization techniques',
    'Real-time performance monitoring',
    'Automated content optimization',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enhanced SEO Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced SEO optimization for maximum visibility and performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
=======
import Footer from './Footer';
import React from 'react';
import {Helmet } from 'react-helmet-async';
import {ArrowRight, Brain } from 'lucide-react';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import {Phone, Mail, ArrowRight } from 'lucide-react';

  const benefits=";"
    'Proven track record of success'"
            <div className="&quot;flex" flex-col sm:flex-row gap-4 justify-center&quot;></div>"
              <button className="&quot;bg-gradient-to-r" from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>"
                <Phone className="&quot;mr-2" h-5 w-5&quot; />;</Phone>
                Call Now</Phone>"
              <button className="&quot;bg-gradient-to-r" from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>"
                <Mail className="&quot;mr-2" h-5 w-5&quot; />;</Mail>
                Email Us</Mail>
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
            </div>
          </div>
        </section>
      </div>
      <Footer /></Footer>
    </>
  );
};

export default EnhancedSEO;
