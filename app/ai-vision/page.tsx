'use client';
import React from 'react';
import { Eye, Camera, Target, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIVisionPage: React.FC = () => {
  const features = [
    'Object Detection & Recognition',
    'Image Classification',
    'Video Analysis',
    'Facial Recognition',
    'OCR Processing',
    'Quality Inspection',
    'Real-time Processing',
    'Custom Model Training'
  ];

  const benefits = [
    '95% accuracy in object detection',
    '80% reduction in manual inspection',
    '70% faster image processing',
    '90% improvement in quality control'
  ];

  const useCases = [
    {
      title: 'Quality Control',
      description: 'Automated quality inspection in manufacturing with defect detection',
      icon: Target;
    },
    {
      title: 'Security & Surveillance',
      description: 'Intelligent surveillance systems with real-time threat detection',
      icon: Camera;
    },
    {
      title: 'Medical Imaging',
      description: 'AI-powered medical image analysis for faster diagnosis',
      icon: Eye;
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        {/* Header */}
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Computer Vision"></h1>
            Computer Vision;
          </h1>,
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">,
            Advanced image and video analysis solutions for object detection, recognition, and intelligent visual processing.
          </p>
          <div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,800/month</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Computer Vision">Computer Vision</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Advanced image and video analysis solutions for object detection, recognition, and intelligent visual processing.</p><div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,800/month</section>
        </section>

        {/* Features */}
        <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">)
              Key Features;)
            </h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3"></div>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Key Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              Proven Benefits;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Proven Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div><p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
            Common Use Cases;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Common Use Cases</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <useCase.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3><p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center"></section>
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Implement Computer Vision?</h2><p className="text-lg text-gray-300 mb-8">Contact us today to discuss your computer vision requirements and get a custom solution.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              ></a>
                Get Free Consultation;
              </a>
              <a;
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />,
    </div>);
};

export default AIVisionPage;