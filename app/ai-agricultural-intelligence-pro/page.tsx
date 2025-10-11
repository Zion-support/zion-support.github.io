'use client'
import React from 'react';
import {Helmet;} from 'react-helmet-async'
    },
    {;,
icon: BarChart,;,
title: 'Advanced Analytics',} ]

const benefits = [
  ]

return (
    <>

      <Helmet>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8"
          <div className="max-w-7xl mx-auto"
            <div className="text-center"
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"
  </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
Get Started
                  <ArrowRight className="ml-2 h-5 w-5"
                </button>
                <button className="
    ,
    r: bg-cyan-400 hove, r:text-white transition-all duration-300"
Learn More
                </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
            <div className="
    ,
    d: grid-cols-2 l, g:grid-cols-3 gap-8"
              {benefits.map((benefit), index) => (
                <div key={index} className="flex items-start space-x-3"
                  <div className="flex-shrink-0"
                  </div>
                  <p className="text-gray-300"
                </div>
              )
    </>
  )
            </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 l, g:px-8"
          <div className="max-w-4xl mx-auto text-center"
              </div>
      
      <Footer />
    </>
  )
}
    </Helmet>