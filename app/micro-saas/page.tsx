import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, Smartphone, Code, BarChart, Users, ArrowRight, CheckCircle } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with AI insights',
      icon: BarChart,
      features: ['Real-time Analytics', 'AI Predictions', 'Custom Reports', 'Mobile Responsive'],
      price: 'Starting at $299/month'
    },
    {
      title: 'Automated Customer Support',
      description: 'AI chatbot with natural language processing',
      icon: Users,
      features: ['24/7 Support', 'Multi-language', 'Custom Training', 'Integration Ready'],
      price: 'Starting at $199/month'
    },
    {
      title: 'Content Management System',
      description: 'AI-powered content creation and management',
      icon: Code,
      features: ['Auto Content Generation', 'SEO Optimization', 'Multi-platform', 'Analytics'],
      price: 'Starting at $149/month'
    },
    {
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform',
      icon: Smartphone,
      features: ['Drag & Drop Builder', 'Native Performance', 'Push Notifications', 'App Store Ready'],
      price: 'Starting at $399/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SAAS solutions to accelerate your business growth with AI and automation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 pt-24">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Innovative, focused software solutions that solve specific business problems with AI and automation.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Micro SAAS?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your specific needs and create a custom solution for your business.
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Get Started Today
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
