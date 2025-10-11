import React, { useState, useEffect } from 'react';
import { Users, Award, Globe, Zap } from 'lucide-react';
const ContentStatisticsPage: React.FC = () => {
  return (
<div className="bg-slate-800/50 backdrop-blur-sm py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            Our numbers speak for themselves
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-cyan-400" />
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
</div>
    </div>
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {features.map((feature, index) =&gt; (
              </div&gt;
            ))}
          </div>
        </div>
        {/* Achievements Section */}
        <div className="mb-16"></div></div>
          <div className="text-center mb-12"></div></div>
            <h3 className="text-2xl font-bold text-white mb-4"></h3></h3>Recognition & Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto"></p></p>
              Industry recognition and awards that validate our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8"></div></div>
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300 group"></div></div>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div></div>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2"></div></div>{achievement.value}</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors"></h4></h4>
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm"></p></p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
