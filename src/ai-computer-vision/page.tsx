import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Camera, Target, Shield, Settings, CheckCircle } from 'lucide-react';

const AIComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced object recognition and detection capabilities',
      benefits: ['Real-time detection', 'Multi-class recognition', 'High accuracy']
    },
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'Comprehensive image processing and analysis',
      benefits: ['Image classification', 'Feature extraction', 'Pattern recognition']
    },
    {
      icon: Target,
      title: 'Precision Tracking',
      description: 'Accurate object tracking and monitoring',
      benefits: ['Motion tracking', 'Trajectory analysis', 'Behavior monitoring']
    },
    {
      icon: Shield,
      title: 'Security Applications',
      description: 'AI-powered security and surveillance solutions',
      benefits: ['Threat detection', 'Access control', 'Anomaly detection']
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored computer vision solutions for your needs',
      benefits: ['Custom models', 'Integration support', 'Scalable solutions']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Automated quality control and inspection',
      benefits: ['Defect detection', 'Quality metrics', 'Process optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Computer Vision Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Advanced visual intelligence for your business
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Harness the power of computer vision AI to analyze, understand, and process visual data.
            From object detection to quality control, our solutions transform how you see and interact with the world.
          </p>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-cyan-300 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-white/5 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300">Quality control and defect detection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security</h3>
                <p className="text-gray-300">Surveillance and threat detection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300">Medical imaging and diagnosis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Retail</h3>
                <p className="text-gray-300">Customer analytics and inventory</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to See the Future?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with cutting-edge computer vision AI solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIComputerVisionPage;