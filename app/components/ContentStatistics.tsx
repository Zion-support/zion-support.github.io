'use client';
<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
=======
import React, { useState, useEffect } from 'react';
import { Users, Award, Globe, Zap } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    years: 0
  });

<<<<<<< HEAD
  const statistics = [
    {
      icon: Users,
=======
  };
    years: 10
  };

    years: 10
  }
  const statistics = [
    {icon: Users,
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+'
    },
    {
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+'
    },
    {
      icon: Globe,
      value: counters.countries,
      label: 'Countries Served',
      suffix: '+'
    },
    {
      icon: Zap,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+'
    }
  ];

<<<<<<< HEAD
=======
          }
          return prev;
        });
      }, 16);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Helmet>
        <title>ContentStatistics | Zion Tech Group</title>
        <meta name="description" content="Professional ContentStatistics services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ContentStatistics, AI solutions, IT services, Zion Tech Group, contentstatistics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span></span>
                ContentStatistics
              </span>
              <br />
              <span className="text-white"></span></span>Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              Transform your business with our advanced contentstatistics solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Why Choose Our ContentStatistics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Our contentstatistics solutions deliver unmatched performance, security, and scalability.
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
  useEffect(() => {
    const targetValues = {
      clients: 1000,
      projects: 5000,
      countries: 50,
      years: 10
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
<<<<<<< HEAD
      setCounters({
        clients: Math.floor(targetValues.clients * progress),
        projects: Math.floor(targetValues.projects * progress),
        countries: Math.floor(targetValues.countries * progress),
        years: Math.floor(targetValues.years * progress)
      });
=======
      const timer = setInterval(() => {
        setCounters()
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
            }
          }
          return prev
        })
      }, 16)
      return timer
    })
    return () => {
      timers.forEach(timer =&gt; clearInterval(timer))
    }
  }, [])
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div></div>
      {/* Statistics Grid */}
      </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div></div>
        {statistics.map((stat, index) => (
          </div><div></div>
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
          >
            </div><div className="{`w-16" h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4`}></div></div>
              </div><stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="{`text-4xl" font-bold ${stat.color} mb-2`}></div></div>
              {Math.floor(stat.value)}{stat.suffix}
            </div>
            <div className="text-gray-300 font-medium"></div></div>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16"></div></div>
        </div><h3 className="text-2xl font-bold text-white mb-8 text-center"></h3></h3>Our Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
          {achievements.map((achievement, index) => (
            </div><div key={index} className="text-center"></div></div>
              </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div></div>
                </div><achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2"></h4></h4>{achievement.title}</h4>
              <p className="text-gray-300"></p></p>{achievement.description}</p>
    });

    return () => {
      timers.forEach(timer =&gt; clearInterval(timer));
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7

const ContentStatisticsPage: React.FC = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ContentStatistics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
=======
    <div className="bg-slate-800/50 backdrop-blur-sm py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
=======
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div></div>
      <div className="max-w-7xl mx-auto"></div></div>
        {/* Header */}
        <div className="text-center mb-16"></div></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced"></h2></h2>
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
            Our proven track record speaks for itself. Join thousands of satisfied clients who have transformed their businesses with our solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div></div>
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group"></div></div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"></div></div>
                <div className="{`w-16" h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}></div></div>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="{`text-4xl" font-bold ${stat.color} mb-2`}></div></div>
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium"></div></div>{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
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
<<<<<<< HEAD
      
      <Footer />
    </>
=======

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
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
  );
};

<<<<<<< HEAD
export default ContentStatisticsPage;
=======
export default ContentStatistics;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
