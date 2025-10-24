'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react';

const EnhancedHero: React.FC = () => {
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of our Enhanced Hero solution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using Enhanced Hero to transform their operations.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Your Free Trial
            </button>
          
        </section>
      
    
  );
};

export default EnhancedHero;