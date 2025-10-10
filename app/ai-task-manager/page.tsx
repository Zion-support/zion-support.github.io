'use client';
import React from 'react';
import { CheckCircle, Clock, Users, BarChart, Target, Calendar, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AITaskManagerPage: React.FC = () => {
  const features = [
    {
      title: 'Smart Task Prioritization',
      description: 'AI automatically prioritizes tasks based on deadlines, importance, and dependencies.',
      icon: Target
    },
    {
      title: 'Intelligent Scheduling',
      description: 'Automatically schedule tasks based on your availability and workload capacity.',
      icon: Calendar
    },
    {
      title: 'Progress Tracking',
      description: 'Real-time progress monitoring with predictive analytics and completion estimates.',
      icon: BarChart
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless team coordination with automated task assignment and communication.',
      icon: Users
    },
    {
      title: 'Time Optimization',
      description: 'AI learns your work patterns to suggest optimal time blocks for different task types.',
      icon: Clock
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed insights into productivity patterns and efficiency improvements.',
      icon: TrendingUp
    }
  ];

  const benefits = [
    '40% Increase in Productivity',
    '60% Reduction in Missed Deadlines',
    '85% Improvement in Task Completion Rate',
    'Real-time Collaboration',
    'Smart Notifications',
    'Mobile & Desktop Sync'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation >{/* Hero Section *</Navigation >/</Navigation >}</Navigation>
    <//Navigation> <//Navigation> </Navigation><section className="pt-24 pb-16 px-4">
       </section className="pt-24 pb-16 px-4"> </section className="pt-24 pb-16 px-4"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Task Manage</h1 className="text-5xl md:text-6xl font-bold text-white mb-6">r</h1 className="text-5xl md:text-6xl font-bold text-white mb-6"> </h1><span className="text-cyan-400">P</span className="text-cyan-400">r</span className="text-cyan-400">o</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Revolutionize your productivity with AI-powered task management. Smart prioritizatio</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">n</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,</p>
              intelligent scheduling, and seamless team collaboration in one powerful platfor<//p>m<//p>.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Free Tria</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">l</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold"><a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 09</a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">5</a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">0</a>
            <//a> <//a> </a>
          <//a> <//a> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Features Grid */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-12">
          </div className="text-center mb-12"> </div className="text-center mb-12"> </div><h2 className="text-4xl font-bold text-white mb-4">Powerful Feature</h2 className="text-4xl font-bold text-white mb-4">s</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Everything you need to manage tasks efficientl</p className="text-xl text-gray-300">y</p className="text-xl text-gray-300"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
              </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"> </div><feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
               </feature.icon className="w-12 h-12 text-cyan-400 mb-4" /> </feature.icon className="w-12 h-12 text-cyan-400 mb-4" /><h3 className="text-xl font-bold text-white mb-3">{feature.title</h3 className="text-xl font-bold text-white mb-3">}</h3 className="text-xl font-bold text-white mb-3"><p className="text-gray-300">{feature.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Benefits Section */}
     <//section> <//section><section className="py-16 px-4 bg-slate-800/30">
       </section className="py-16 px-4 bg-slate-800/30"> </section className="py-16 px-4 bg-slate-800/30"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-12">
          </div className="text-center mb-12"> </div className="text-center mb-12"> </div><h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Task Manager Pro</h2 className="text-4xl font-bold text-white mb-4">?</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Proven results and cutting-edge technolog</p className="text-xl text-gray-300">y</p className="text-xl text-gray-300"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                </div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"> </div><CheckCircle className="w-8 h-8 text-cyan-400" />
               </CheckCircle className="w-8 h-8 text-cyan-400" /> </CheckCircle className="w-8 h-8 text-cyan-400" /><h3 className="text-xl font-semibold text-white mb-2">{benefi</h3 className="text-xl font-semibold text-white mb-2">t</h3 className="text-xl font-semibold text-white mb-2">}</h3>
            <//h3> <//h3> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Pricing Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-4xl mx-auto">
         </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"><div className="text-center mb-12">
          </div className="text-center mb-12"> </div className="text-center mb-12"> </div><h2 className="text-4xl font-bold text-white mb-4">Simple Pricin</h2 className="text-4xl font-bold text-white mb-4">g</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Choose the plan that fits your nee</p className="text-xl text-gray-300">d</p className="text-xl text-gray-300">s</p>
        <//p> <//p> </div>

         <//div> <//div><div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center">
           </div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"> </div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"><div className="mb-8">
            </div className="mb-8"> </div className="mb-8"> </div><h3 className="text-3xl font-bold text-white mb-2">AI Task Manager P</h3 className="text-3xl font-bold text-white mb-2">r</h3 className="text-3xl font-bold text-white mb-2">o</h3>
             <//h3> <//h3><div className="text-5xl font-bold text-cyan-400 mb-2">$</div className="text-5xl font-bold text-cyan-400 mb-2">4</div className="text-5xl font-bold text-cyan-400 mb-2">9</div><span className="text-xl text-gray-300">/mon</span className="text-xl text-gray-300">t</span className="text-xl text-gray-300">h</span><p className="text-gray-300">Per user, billed month</p className="text-gray-300">l</p className="text-gray-300">y</p>
          <//p> <//p> </div>

           <//div> <//div><ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
             </ul className="space-y-4 mb-8 text-left max-w-md mx-auto"> </ul className="space-y-4 mb-8 text-left max-w-md mx-auto"><li className="flex items-center text-gray-300">
               </li className="flex items-center text-gray-300"> </li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" >Unlimited tasks and projec</CheckCircle className="w-5 h-5 text-green-400 mr-3" >t</CheckCircle className="w-5 h-5 text-green-400 mr-3" >s</CheckCircle>
            <//CheckCircle> <//CheckCircle> </CheckCircle>
             <//CheckCircle> <//CheckCircle><li className="flex items-center text-gray-300">
               </li className="flex items-center text-gray-300"> </li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" >AI-powered prioritizati</CheckCircle className="w-5 h-5 text-green-400 mr-3" >o</CheckCircle className="w-5 h-5 text-green-400 mr-3" >n</CheckCircle>
            <//CheckCircle> <//CheckCircle> </CheckCircle>
             <//CheckCircle> <//CheckCircle><li className="flex items-center text-gray-300">
               </li className="flex items-center text-gray-300"> </li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" >Team collaboration too</CheckCircle className="w-5 h-5 text-green-400 mr-3" >l</CheckCircle className="w-5 h-5 text-green-400 mr-3" >s</CheckCircle>
            <//CheckCircle> <//CheckCircle> </CheckCircle>
             <//CheckCircle> <//CheckCircle><li className="flex items-center text-gray-300">
               </li className="flex items-center text-gray-300"> </li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" >Advanced analyti</CheckCircle className="w-5 h-5 text-green-400 mr-3" >c</CheckCircle className="w-5 h-5 text-green-400 mr-3" >s</CheckCircle>
            <//CheckCircle> <//CheckCircle> </CheckCircle>
             <//CheckCircle> <//CheckCircle><li className="flex items-center text-gray-300">
               </li className="flex items-center text-gray-300"> </li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" >24/7 suppor</CheckCircle className="w-5 h-5 text-green-400 mr-3" >t</CheckCircle className="w-5 h-5 text-green-400 mr-3" ><a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Get Started Tod</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">a</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">y</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-4xl mx-auto text-center">
        </div className="max-w-4xl mx-auto text-center"> </div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Productivit</h2 className="text-4xl font-bold text-white mb-6">y</h2 className="text-4xl font-bold text-white mb-6">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8">Join thousands of teams already using AI Task Manager Pro to boost their productivity and achieve mor</p className="text-xl text-gray-300 mb-8">e</p className="text-xl text-gray-300 mb-8">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Free Tria</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">l</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold"><a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 09</a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">5</a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">0</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default AITaskManagerPage<//div>;<//div>