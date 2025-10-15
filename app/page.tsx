import React from 'react';
import SEOHead from '../components/SEOHead';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to automate and optimize your business processes.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: '10+ years of experience in AI, IT solutions, and digital transformation.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Successfully delivered 500+ projects with 99% client satisfaction rate.'
    }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Machine learning, NLP, computer vision, and predictive analytics',
      link: '/ai-solutions'
    },
    {
      title: 'IT Services',
      description: 'Infrastructure management, technical support, and system integration',
      link: '/it-solutions'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions and threat protection',
      link: '/cybersecurity'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      link: '/cloud-solutions'
    }
  ];

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI solutions, IT services, cybersecurity, and digital transformation. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, cybersecurity, cloud solutions, digital transformation, machine learning, software development"
      />
      
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Transform Your Business with AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Zion Tech Group delivers cutting-edge AI solutions, IT services, and digital transformation 
              to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/about" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Comprehensive technology solutions designed to drive your business forward
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href={service.link}
                  className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already leveraging our AI and IT solutions for competitive advantage.
            </p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 text-lg"
            >
              Start Your Transformation Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;