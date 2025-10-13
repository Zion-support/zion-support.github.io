import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Calendar, Clock, ArrowRight } from 'lucide-react';

const WebinarsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Webinars - Zion Tech Group | AI Solutions Webinars</title>
        <meta name="description" content="Join our live webinars to learn about AI solutions, best practices, and industry insights from our experts." />
        <meta name="keywords" content="webinars, live sessions, AI learning, expert talks, online events" />
      </Helmet>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Webinars
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join our live webinars to learn about AI solutions, best practices, and industry insights from our experts.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-white/20">
            <Users className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white mb-4">Webinars Coming Soon</h2>
            <p className="text-gray-300 mb-8">
              We're preparing exciting webinars on AI solutions and industry best practices.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Notified
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;