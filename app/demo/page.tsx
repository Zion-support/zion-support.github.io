<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';'react-helmet-async;
import { Play, Right, Circle, Star } from 'lucide-react;
=======
import React from 'react';'
import { Helmet , Play,  Right,  Circle,  Star   } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-bef6
const DemoPage: React.FC = () => {
  const features = [{'
      icon: 'Analytics',';'
      title: 'AI-Powered Analytics',';'
      description: 'See how our AI analyzes your data in real-time',';'
      demo: 'Live Demo'';}
    },
    {'
      icon: 'Security',';'
      title: 'Advanced Security',';'
      description: 'Experience our enterprise-grade security features',';'
      demo: 'Demo'';}
    },
    {'
      icon: 'Intelligence',';'
      title: 'Business Intelligence',';'
      description: 'Explore our comprehensive BI dashboard',';'
      demo: 'BI Demo'';}
    },
<<<<<<< HEAD
    {
      icon: 'Collaboration',';
      title: 'Team Collaboration',';
      description: 'See how teams work together seamlessly',';
<<<<<<< HEAD
      demo: 'Collaboration Demo'';    }
=======
      demo: 'Collaboration Demo'';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Right, Star, BarChart3, Shield } from 'lucide-react';

const DemoPage: React.FC = () => {
  const features = [
    {
icon: BarChart3,
      title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time',
      demo: 'Live Demo'
    },
    {
icon: Shield,
      title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features',
      demo: 'Demo'
    },
    {
icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Explore our comprehensive BI dashboard',
      demo: 'BI Demo'
    },
    {
icon: Play,
      title: 'Team Collaboration',
      description: 'See how teams work together seamlessly',
      demo: 'Collaboration Demo'
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
=======
    {'
      icon: 'Collaboration',';'
      title: 'Team Collaboration',';'
      description: 'See how teams work together seamlessly',';'
      demo: 'Collaboration Demo'';}
>>>>>>> cursor/fix-errors-and-merge-to-main-bef6
    }
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
  ];

=======

    }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
  const testimonials = [{
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "The demo was incredibly insightful. We could see exactly how the solution would work for our business.",
<<<<<<< HEAD
      rating: 5},
=======
      rating: 5;}
    },
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      content: "The live demonstration helped us understand the full potential of the AI solutions.",
<<<<<<< HEAD
      rating: 5},
=======
      rating: 5;}
    },
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
    {
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      content: "The demo team was knowledgeable and answered all our questions thoroughly.",
<<<<<<< HEAD
      rating: 5}
  ]
=======
      rating: 5;}
    }
  ];

>>>>>>> cursor/analyze-improve-and-deploy-application-4227
  return (
    <>
      <Helmet>
        <title>Demo - See Our Solutions in Action | Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, demonstration, AI demo, IT solutions demo, interactive demo, product showcase" />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              See It In;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Action;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos.;
              See how our technology can transform your business.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                <Play className="w-5 h-5 mr-2 inline" />
                Start Demo;
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Live Demo;
              </button>
            </div>
          </div>
        </section>
        {/* Demo Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Interactive Demos;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, _index) => {
                const Icon = feature.icon;
<<<<<<< HEAD
                return (
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{feature.title}</h3>
                    <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
=======
                return (}
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">;
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">;
                      <Icon className="w-8 h-8 text-white" />;
                    </div>;
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{feature.title}</h3>;
                    <p className="text-gray-300 mb-4 text-center">{feature.description}</p>;
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">;
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
                      {feature.demo}
                    </button>
                  </div>
  );
              })}
            </div>
          </div>
        </section>
        {/* Demo Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Watch Our Solutions in Action;
            </h2>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              See It In
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Action</span></h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos.
              See how our technology can transform your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                <Play className="w-5 h-5 mr-2 inline" />
                Start Demo</button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Live Demo</button></div></div></section>{/* Demo Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Interactive Demos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, _index) => {
                const Icon = feature.icon
                return (
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" /></div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{feature.title}</h3>
                    <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">{feature.demo}
                    </button></div>
  )})}
            </div></div></section>{/* Demo Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Watch Our Solutions in Action</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="aspect-video bg-slate-700/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
<<<<<<< HEAD
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Product Demo </h3>
                  <p className="text-gray-300 mb-4">See our AI solutions in action</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Play </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              What Say About Our Demos;
<<<<<<< HEAD
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, _index) => (
                <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
=======
            </h2>;
            <div className="grid md:grid-cols-3 gap-8">;
              {testimonials.map((testimonial, _index) => (}
                <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">;
                  <div className="flex items-center mb-4">;
                    {[...Array(testimonial.rating)].map((_, i) => (}
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See More?;
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Schedule Live Demo;
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
}
export default DemoPage;
=======
                    <Play className="w-10 h-10 text-white ml-1" /></div>
                  <h3 className="text-2xl font-bold text-white mb-2">Product Demo </h3>
                  <p className="text-gray-300 mb-4">See our AI solutions in action</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Play </button></div></div></div></div></section>{/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              What Say About Our Demos</h2>
            <div className="grid md:grid-cols-3 gap-8">{testimonials.map((testimonial, _index) => (
                <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo{testimonial.content}&rdquo</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p></div></div>
              ))}
            </div></div></section>{/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See More?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Schedule Live Demo
                <Right className="w-5 h-5 ml-2 inline" /></button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales</button></div></div></section></div></>
  )}
export default DemoPage
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
};

export default DemoPage;'
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
