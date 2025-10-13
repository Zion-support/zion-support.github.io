import React from 'react';

const ContentShowcase: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver 
            solutions that drive real business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">10+</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Years Experience</h3>
            <p className="text-gray-300">Delivering innovative technology solutions</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">500+</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Projects Completed</h3>
            <p className="text-gray-300">Successfully delivered across industries</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">99%</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Client Satisfaction</h3>
            <p className="text-gray-300">Consistently exceeding expectations</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">24/7</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Support</h3>
            <p className="text-gray-300">Round-the-clock technical assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;