'use client';
import React from 'react';
import { BarChart, Target, Zap, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIMLPage: React.FC = () => {
  const features = [
    'Custom Model Development',
    'Predictive Analytics',
    'Data Pipeline Setup',
    'Model Monitoring & Optimization',
    'Real-time Inference',
    'A/B Testing Framework',
    'Model Versioning',
    'Performance Metrics'
  ];

  const benefits = [
    '40% improvement in prediction accuracy',
    '60% reduction in manual data processing',
    '85% faster decision making',
    '90% cost savings on data analysis'
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict future sales with 95% accuracy using historical data and market trends',
      icon: BarChart
    },
    {
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior and preferences',
      icon: Target
    },
    {
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures before they happen with IoT sensor data',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</mai>
        <section className="text-center mb-16"></sectio>
          <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6 cyber-text-3 d neon-pulse glitch" data-text="Machine Learning Solutions"></h1></<<<h1>Machine</h1></<<h1>Learning</h1> Solutions<p className="text-xl text-gray-300 max-w-4 xl mx-auto mb-8"></p></<<<p>Custom</p></<<p>ML</p> models for predictive analytics and intelligent decision-making that transform your business operations.<div className="text-2 xl font-bold text-cyan-400 mb-8">Starting at $1,500/month</div>
        </section>

        {/* Features */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Key</h2></<<h2>Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /></CheckCircl>
                  <span className="text-gray-300">{feature}</spa>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Proven</h2></<<h2>Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3 xl font-bold text-cyan-400 mb-2"></div>{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Common</h2></<<h2>Use</h2> Cases<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <useCase.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" /></useCas>
                <h3 className="text-xl font-bold text-white mb-3"></h>{useCase.title}<p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text">Our ML Development Process</h>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2 xl font-bold text-white"></spa>1<h3 className="text-lg font-bold text-white mb-2"></h3></<<<h3>Data</h3></<<h3>Analysis</h3><p className="text-gray-300 text-sm">Analyze your data and identify patterns</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2 xl font-bold text-white"></spa>2<h3 className="text-lg font-bold text-white mb-2"></h3></<<<h3>Model</h3></<<h3>Development</h3><p className="text-gray-300 text-sm">Build and train custom ML models</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2 xl font-bold text-white"></spa>3<h3 className="text-lg font-bold text-white mb-2"></h3></<<<h3>Testing</h3></h3> & Validation<p className="text-gray-300 text-sm">Validate model performance and accuracy</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2 xl font-bold text-white"></spa>4<h3 className="text-lg font-bold text-white mb-2"></h3></<<<h3>Deployment</h3></h3><p className="text-gray-300 text-sm">Deploy and monitor in production</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center"></sectio>
          <div className="cyber-card p-8 max-w-4 xl mx-auto"></div>
            <h2 className="text-3 xl font-bold text-white mb-4 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Implement Machine Learning?<p className="text-lg text-gray-300 mb-8">Contact us today to discuss your ML requirements and get a custom solution.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Get Free Consultation</a>
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                <Phone className="w-5 h-5" >Call +1 302 464 0950</Phon>
              </Phone>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default AIMLPage;