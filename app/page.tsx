import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Users } from 'lucide-react';
import { Target } from 'lucide-react';

function Page() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence solutions for modern businesses."
    },
    {
      icon: Shield,
      title: "Cybersecurity Excellence",
      description: "Comprehensive security solutions to protect your digital assets."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Fast and efficient deployment of technology solutions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success."
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored technology solutions for your specific needs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, and IT services for modern businesses" />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, digital transformation, business intelligence" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">Zion Tech Group</h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Empowering businesses with cutting-edge AI solutions, robust cybersecurity, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 rounded-xl mr-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-xl">
              Join thousands of forward-thinking companies that trust Zion Tech Group for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="border border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const page = React.lazy(() => import('./page'));
export default page;