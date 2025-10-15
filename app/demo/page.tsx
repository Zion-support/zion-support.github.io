<<<<<<< HEAD
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, ArrowRight, CheckCircle, Star, Play, Calendar, Clock } from 'lucide-react';

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot in action',
      duration: '5 minutes',
      icon: <Brain className="w-8 h-8" />,
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'Real-time responses']
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Demo',
      description: 'See how AI transforms your data into insights',
      duration: '10 minutes',
      icon: <Zap className="w-8 h-8" />,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization']
    },
    {
      id: 'security-demo',
      title: 'Security Demo',
      description: 'Explore our cybersecurity solutions',
      duration: '8 minutes',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Automated response', 'Compliance monitoring', 'Risk assessment']
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions with interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, interactive demo, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Interactive Demos
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand. Try our interactive demos to see how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
=======
<<<<<<< HEAD

const DemoPage: React.FC = () => {
  const features = [{''
      icon: 'Analytics',''
      title: 'AI-Powered Analytics',''
      description: 'See how our AI analyzes your data in real-time',''
      demo: 'Live Demo';}''
    },
    {''
      icon: 'Security',''
      title: 'Advanced Security',''
      description: 'Experience our enterprise-grade security features',''
      demo: 'Demo';}''
    },
    {''
      icon: 'Intelligence',''
      title: 'Business Intelligence',''
      description: 'Explore our comprehensive BI dashboard',''
      demo: 'BI Demo';}''
    },
    }
  ];
  const testimonials = [{
      name: "Sarah Johnson",""
      company: "TechCorp Inc.",""
      content: "The demo was incredibly insightful. We could see exactly how the solution would work for our business.",""
      rating: 5},
    {
      name: "Michael Chen",""
      company: "DataFlow Systems",""
      content: "The live demonstration helped us understand the full potential of the AI solutions.",""
      rating: 5},
    {
      name: "Emily Rodriguez",""
      company: "InnovateLabs",""
      content: "The demo team was knowledgeable and answered all our questions thoroughly.",""
      rating: 5}
  ];
  return (
    <></>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4">;""
          <div className="max-w-7xl mx-auto text-center">;""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;""
              See It In;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;""
                Action;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;""
              Experience our AI and IT solutions through interactive demos.;
              See how our technology can transform your business.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;""
                <Play className="w-5 h-5 mr-2 inline" />;""
                Start Demo;
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;""
                Schedule Live Demo;
              </button>
            </div>
          </div>
        </section>
        {/* Demo Features */}
        <section className="py-20 px-4">;""
          <div className="max-w-7xl mx-auto">;""
            <h2 className="text-4xl font-bold text-white text-center mb-16">;""
              Interactive Demos;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;""
              {features.map((feature, _index) => {
                const Icon = feature.icon;
                return (}
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">;""
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">;""
                      <Icon className="w-8 h-8 text-white" />;""
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{feature.title}</h3>;""
                    <p className="text-gray-300 mb-4 text-center">{feature.description}</p>;""
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">;""
                      {feature.demo}
                    </button>
                  </div>
  );
              })}
            </div>
          </div>
        </section>
        {/* Demo Section */}
        <section className="py-20 px-4 bg-slate-800/30">;""
          <div className="max-w-6xl mx-auto">;""
            <h2 className="text-4xl font-bold text-white text-center mb-16">;""
              Watch Our Solutions in Action;
            </h2>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">;""
              <div className="aspect-video bg-slate-700/50 rounded-xl flex items-center justify-center">;""
                <div className="text-center">;""
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">;""
                    <Play className="w-10 h-10 text-white ml-1" />;""
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Product Demo </h3>;""
                  <p className="text-gray-300 mb-4">See our AI solutions in action</p>;""
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">;""
                    Play </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-20 px-4">;""
          <div className="max-w-7xl mx-auto">;""
            <h2 className="text-4xl font-bold text-white text-center mb-16">;""
              What Say About Our Demos;
            </h2>
            <div className="grid md:grid-cols-3 gap-8">;""
              {testimonials.map((testimonial, _index) => (
                <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">;""
                  <div className="flex items-center mb-4">;""
                    {[...Array(testimonial.rating)].map((_, i) => (}
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;""
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>;""
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>;""
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>;""
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">;""
          <div className="max-w-4xl mx-auto text-center">;""
            <h2 className="text-4xl font-bold text-white mb-6">;""
              Ready to See More?;
            </h2>
            <p className="text-xl text-gray-300 mb-8">;""
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;""
                Schedule Live Demo;
                <Right className="w-5 h-5 ml-2 inline" />;""
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;""
                Contact Sales;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
        <div className="text-center"></div>
          <h1>Page</h1>
          <p className="text-gray-300 text-lg"></p>
            This page is under construction. Please check back later.
          </p>
>>>>>>> main
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select a demo to explore our solutions and see how they can benefit your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-purple-500 bg-white/20'
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    {demo.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {demo.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Demo Details */}
          {selectedDemoData && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Features:</h4>
                    <ul className="space-y-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">Ready to Start?</h4>
                    <p className="text-gray-300 mb-6">
                      Click the button below to launch the interactive demo.
                    </p>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto">
                      <Play className="w-5 h-5 mr-2" />
                      Launch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want a Personalized Demo?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a live demo with our experts to see how our solutions can be customized for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
            <Link 
              to="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
}
=======
  )};
const page = React.lazy(() => import('./page'));''
export default page;
=======
import React from 'react';;';
import SEOHead from './components/SEOHead';

import { Helmet } from 'react-helmet-async',
      const features = [
    {},
      icon: title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time',
      demo: 'Live Demo'
    };
    {},
      icon: title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features',
      demo: 'Demo'
    };
    {},
      icon: title: 'Business Intelligence',
      description: 'Explore our comprehensive BI dashboard',
      demo: 'BI Demo'
    };
    {},
      icon: Play,
      title: 'Team Collaboration',
      description: 'See how teams work together seamlessly',
      demo: 'Collaboration Demo'
    };
  ],
      const testimonials = [{},
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "The demo was incredibly insightful. We could see exactly how the solution would work for our business.",
      rating: 5
    };
    {},
      name: "Michael Chen",
      company: "DataFlow Systems",
      content: "The live demonstration helped us understand the full potential of the AI solutions.",
      rating: 5
    };
    {},
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      content: "The demo team was knowledgeable and answered all our questions thoroughly.",
      rating: 5
    };
  ],
      return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Demo - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="See our AI and IT solutions in action with live demos." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
        <div className="text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-4">Demo</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  )
    },
    {}
export default DemoPage,
      return ()
    <>{}</>
      <SEOHead>
        title="demo - Zion Tech Group"
        description="Zion Tech Group demo service page"

      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Demo</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  )
    },
    {}
export default Component;

;
const DemoPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Demo - Zion Tech Group"";
        description="Professional demo solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Demo</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default DemoPage;'";'";

>>>>>>> main
>>>>>>> main
