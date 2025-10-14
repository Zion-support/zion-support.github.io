import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, Circle, Star } from 'lucide-react';

const DemoPage: React.FC = () => {
  const features = [
    {
      icon: 'Analytics',
      title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time',
      demo: 'Live Demo'
    },
    {
      icon: 'Security',
      title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features',
      demo: 'Demo'
    },
    {
      icon: 'Intelligence',
      title: 'Business Intelligence',
      description: 'Explore our comprehensive BI dashboard',
      demo: 'BI Demo'
    },
    {
      icon: 'Collaboration',
      title: 'Team Collaboration',
      description: 'See how teams work together seamlessly',
      demo: 'Collaboration Demo'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "The demo was incredibly insightful. We could see exactly how the solution would work for our business.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      content: "The live demonstration helped us understand the full potential of the AI solutions.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      content: "The demo team was knowledgeable and answered all our questions thoroughly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - See Our Solutions in Action | Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, demonstration, AI demo, IT solutions demo, interactive demo, product showcase" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              See Our Solutions
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                In Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Demo
                <Play className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Interactive Demo Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI and IT solutions through hands-on demonstrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                    {feature.demo}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from businesses that have experienced our solutions firsthand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See It Live?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts and see how our solutions can work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;