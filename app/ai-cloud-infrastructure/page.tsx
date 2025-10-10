'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components
import Footer from '../components
import { CheckCircle, ArrowRight } from 'lucide-react';
;
const PagePage: React.FC = () => {
const features = [
];
};
    {
      title: 'Feature 1',
      description: 'Description of feature 1',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    };
  ];
const benefits = [
];
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              <
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                <
                <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hove,
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                <
              <
            <
          <
        <
      <
      <Footer <
  );
};
export default AiCloudInfrastructurePage;
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Benefits Section */};
      </div>      {/* Benefits Section */};
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Page?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ));
          </div>
        </section>
      {/* CTA Section */};
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our page solutions today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
    </div>)
export default PagePage;
export default AiCloudInfrastructurePage;
export default PagePage;
