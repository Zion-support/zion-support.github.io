'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Download, 
  Share2, 
  Maximize2,
  ChevronRight,
  CheckCircle,
  Star,
  Users,
  Zap
} from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');
  const [isPlaying, setIsPlaying] = useState(false);
  ]return (
    <React.Fragment>  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The AI chatbot demo was incredible. It handled complex queries with ease and the integration was seamless.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Inc.',
      role: 'Data Director',
      content: 'The analytics dashboard provided insights we never had before. The real-time capabilities are game-changing.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'SecureNet Corp',
      role: 'Security Manager',
      content: 'The cybersecurity demo showed us exactly how our threats would be detected and handled. Very impressive.',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See Our <span className="text-cyan-400">Solutions</span> in Action
  </
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
            </p>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-lg mb-4">
                    <Play className="w-8 h-8 text-cyan-400" />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            See Our <span className="text-cyan-400">Solutions</span> in Action
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose a Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-slate-900" />                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
  </>>>>>>> cursor/analyze-improve-and-deploy-application-e765
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Demo Controls</h4>
                  <div className="space-y-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-5 h-5 mr-2" />
                          Pause Demo
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2" />
                          Play Demo
                        </>
                      )}
                    </button>
                    <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Restart Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts and see how our solutions 
              can specifically address your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule a Demo
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Ready to See More?</h2>
              <p className="text-gray-300 mb-6">
                Schedule a personalized demo with our experts to see how our solutions can address your specific business needs.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )}
export default DemoPage
  </button>
  </h1>
=======
        </div>
      </section>
    </div>
  );
};

export default DemoPage;