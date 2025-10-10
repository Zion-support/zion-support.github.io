import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Bot, ArrowRight } from 'lucide-react'
const SmartSupportBotPage: React.FC = () => {
    return (
    <>
      <Helmet>
        <title>Smart Support Bot | Zion Tech Group - AI Customer Service Automation</title>
        <meta>
        <link>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Bot>
              <span>Smart Support Bot</span>
            </div>
            <h1>
              AI Customer Service </h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"> Automation</span>
            </h1>
            <p>
              AI-powered customer service automation with intelligent support bot.;
};

export default SmartSupportBotPage;
