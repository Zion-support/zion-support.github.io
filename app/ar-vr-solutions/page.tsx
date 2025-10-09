'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Headphones, Globe, Smartphone, Zap, Shield, Users, Award, CheckCircle, Phone } from 'lucide-react';

const ARVRSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AR Business Applications',
      description: 'Augmented reality solutions for enterprise training, remote assistance, and product visualization',
      icon: Eye,
      features: ['AR Training Modules', 'Remote Expert Support', '3D Product Visualization', 'Interactive Manuals'],
      price: '$2,500/month',
      color: 'text-blue-400'
    },
    {
      title: 'VR Immersive Experiences',
      description: 'Virtual reality environments for training, simulation, and customer engagement',
      icon: Headphones,
      features: ['VR Training Simulations', 'Virtual Showrooms', 'Immersive Presentations', 'Collaborative Workspaces'],
      price: '$3,500/month',
      color: 'text-purple-400'
    },
    {
      title: 'Mixed Reality Solutions',
      description: 'Combined AR/VR experiences for complex business scenarios and training',
      icon: Globe,
      features: ['Mixed Reality Training', 'Spatial Computing', 'Holographic Displays', 'Gesture Control'],
      price: '$4,500/month',
      color: 'text-green-400'
    },
    {
      title: 'Mobile AR Apps',
      description: 'Custom mobile applications with AR capabilities for consumer and business use',
      icon: Smartphone,
      features: ['iOS/Android Development', 'AR Core/ARKit Integration', 'Real-time Tracking', 'Cloud Processing'],
      price: '$1,800/month',
      color: 'text-orange-400'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Training',
      description: 'Immersive training experiences that improve retention and engagement',
      icon: Users,
      stat: '85%'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce travel and physical setup costs with virtual environments',
      icon: Award,
      stat: '60%'
    },
    {
      title: 'Improved Safety',
      description: 'Train in dangerous scenarios without real-world risks',
      icon: Shield,
      stat: '100%'
    },
    {
      title: 'Better Engagement',
      description: 'Interactive experiences that captivate and educate users',
      icon: Zap,
      stat: '90%'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AR/VR Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Immersive Technology for Business Transformation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge augmented and virtual reality solutions. 
              Create immersive experiences that engage customers, train employees, and drive innovation.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our AR/VR Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <solution.icon className={`w-8 h-8 ${solution.color} mr-3`} />
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${solution.color}`}>{solution.price}</div>
                    <button className="cyber-button px-4 py-2 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our AR/VR Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how AR/VR solutions can revolutionize your operations and create 
              unforgettable experiences for your customers and employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ARVRSolutionsPage;
