import React, { useState, useEffect } from 'react';

        {/* Active Tab Content */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-slate-700/50">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 bg-gradient-to-r ${techCategories[activeTab].color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <span className="text-4xl">{techCategories[activeTab].icon}</span>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-cyan-400">
              {techCategories[activeTab].title}
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {techCategories[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories[activeTab].features.map((feature, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-600/30 transition-all duration-300">
                <div className="text-2xl mb-3">✨</div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">{feature}</h4>
                <p className="text-sm text-slate-400">Advanced implementation</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-slate-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-slate-300">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-slate-300">Countries Served</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join the technology revolution and unlock the potential of tomorrow's innovations today.
