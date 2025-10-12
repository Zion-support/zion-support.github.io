'use client';
import React, { use State, use Effect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Map Pin, Clock, Send, Check Circle, Star, Shield, Cloud, Message Circle } from 'lucide-react';

const Contact Page: React.F C = () => {
  return (

      <H elmet>
        <t itle>Contact - Zion Tech Group</t itle>
        <m eta name="description" content="Get in touch with Zion Tech Group for A I and I T solutions. Contact us for consultations and support." />
      </H elmet>
      
      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <d iv class Name="m a x-w-7-xl mx-a u to px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <d iv class Name="t e x t-center">
            <h1 c lass Name="t e xt-4-xl md:t e xt-6xl font-bold text-white  mb-6">
              Contact Us
            </h1>
            <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-3-xl mx-auto">
              Ready to transform your business? Get in touch with our team of experts.
            </p>
            </d iv>
          </d iv>
        </d iv>

    );
  }

  return (

      <H elmet>
        <t itle>Contact Us - Zion Tech Group | Get in Touch for A I & I T Solutions</t itle>
        <m eta name="description" content="Contact Zion Tech Group for A I solutions, cloud infrastructure, cybersecurity, and custom software development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <m eta name="keywords" content="contact zion tech group, A I consulting, I T services, cloud solutions, cybersecurity, software development" />
        <l inkrel="canonical" href="https://ziontechgroup.com/contact" />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <s ection class Name="r e l a tive py-20 px-4 overflow-hidden">
          <d iv class Name="a b s o lute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <d iv class Name="a b s o lute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animation Delay: '1s' }} />
          
          <d iv class Name="r e l a tive max-w-7xl mx-auto text-center">
            <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <M essage Circleclass Name="w-4 h-4" />
              <s pan>Get in Touch</s pan>
            </d iv>
            
            <h1 c lass Name="t e x t-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Let's Build Something{' '}
              <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Amazing Together
              </s pan>
            </h1>
            
            <p c lass Name="t e x t-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge A I and I T solutions? 
              Get in touch with our expert team and let's discuss your project.
            </p>
          </d iv>
        </s ection>

        {/* Stats Section */}
        <s ection class Name="p y-20 p x-4 r e lative">
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <d iv class Name="r e l a tive max-w-7xl mx-auto">
            <d iv class Name="g r id g r id-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <d ivkey={index} class Name="t e x t-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <d iv class Name="f l ex j u stify-center mb-4">
                    {stat.icon}
                  </d iv>
                  <d iv class Name="t e xt-3xl md:t e xt-4xl font-bold text-white mb-2">
                    {stat.number}
                  </d iv>
                  <d iv class Name="t e xt-g r ay-300 text-sm">
                    {stat.label}
            <d iv class Name="m a x-w-2xl mx-a u to">
              <d iv class Name="b g-s l a te-800/50 backdrop-blur-sm rounded-lg p-8">
                <h2 c lass Name="t e xt-2xl f o nt-bold text-white mb-6">Get In Touch</h2>
                <p c lass Name="t e xt-g r ay-300 mb-6">
                  Contact us for consultations, support, or to learn more about our services.
                </p>
                <d iv class Name="s p a c e-y-4">
                  <d iv>
                    <l abelclass Name="b l o c k text-sm font-medium text-gray-300 mb-2">
                      Name
                    </l abel>
                    <i nput
                      type="text"
                      class Name="w-f u ll px-3 py-2 bg-s l ate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </d iv>
                  <d iv>
                    <l abelclass Name="b l o c k text-sm font-medium text-gray-300 mb-2">
                      Email
                    </l abel>
                    <i nput
                      type="email"
                      class Name="w-f u ll px-3 py-2 bg-s l ate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </d iv>
                  <d iv>
                    <l abelclass Name="b l o c k text-sm font-medium text-gray-300 mb-2">
                      Message
                    </l abel>
                    <t extarea
                      rows={4}
                      class Name="w-f u ll px-3 py-2 bg-s l ate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </d iv>
                  <b utton class Name="w-f u ll bg-g r adient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Send Message
                  </b utton>
                </d iv>
              </d iv>
            </d iv>
          </d iv>
        </s ection>
      </d iv>

  );
};

export default Contact Page;
