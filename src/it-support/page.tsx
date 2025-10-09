import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
=======
import { Headphones, CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-9296

const ITSupportPage: React.FC = () => {
  const features = [
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance',
      benefits: ['24/7 availability', 'Fast response times', 'Expert technicians']
    },
    {
      icon: Shield,
      title: 'Security Support',
      description: 'Comprehensive security monitoring and incident response',
      benefits: ['Threat monitoring', 'Incident response', 'Security updates']
    },
    {
      icon: Zap,
      title: 'Rapid Resolution',
      description: 'Quick problem identification and resolution',
      benefits: ['Remote diagnostics', 'Proactive monitoring', 'Automated fixes']
    },
    {
      icon: Settings,
      title: 'System Maintenance',
      description: 'Regular maintenance and optimization services',
      benefits: ['Preventive maintenance', 'Performance tuning', 'Updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            IT Support & Maintenance
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
            Reliable IT Support Services
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Keep your IT infrastructure running smoothly with our comprehensive support and maintenance services. 
            From troubleshooting to proactive maintenance, we ensure your systems are always optimized.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Headphones className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Support Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITSupportPage;