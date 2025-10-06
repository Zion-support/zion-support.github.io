import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-5xl font-bold text-gray-900 mb-8 text-center'>
            About Zion Tech Group
          </h1>
          <div className='prose prose-lg mx-auto mb-12'>
            <p className='text-xl text-gray-600 text-center mb-8'>
              Leading the future of AI-powered enterprise transformation with 
              guaranteed 300% ROI and revolutionary technology solutions.
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12 mb-16'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Our Mission
              </h2>
              <p className='text-lg text-gray-600 mb-4'>
                To revolutionize enterprise operations through cutting-edge AI 
                technology, delivering unprecedented efficiency gains and 
                guaranteed return on investment.
              </p>
              <p className='text-lg text-gray-600'>
                We specialize in autonomous systems, quantum-enhanced analytics, 
                and next-generation AI solutions that transform how businesses 
                operate in the digital age.
              </p>
            </div>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Our Vision
              </h2>
              <p className='text-lg text-gray-600 mb-4'>
                To be the global leader in AI enterprise transformation, 
                empowering organizations to achieve 300% ROI through 
                revolutionary technology implementations.
              </p>
              <p className='text-lg text-gray-600'>
                We envision a future where every enterprise operates with 
                autonomous intelligence, achieving unprecedented efficiency 
                and competitive advantage.
              </p>
            </div>
          </div>
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
              Why Choose Zion Tech Group?
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='text-4xl mb-4'>🚀</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Proven Results
                </h3>
                <p className='text-gray-600'>
                  Our clients achieve an average of 300% ROI within the first year of implementation.
                </p>
              </div>
              <div className='text-center'>
                <div className='text-4xl mb-4'>⚡</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Cutting-Edge Technology
                </h3>
                <p className='text-gray-600'>
                  We leverage the latest AI, quantum computing, and autonomous systems technology.
                </p>
              </div>
              <div className='text-center'>
                <div className='text-4xl mb-4'>🔒</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Enterprise Security
                </h3>
                <p className='text-gray-600'>
                  Military-grade security protocols ensure your data and operations remain protected.
                </p>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Ready to Transform Your Enterprise?
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Join hundreds of companies already achieving 300% ROI with our 
              AI solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300'
              >
                Get Started Today
              </a>
              <a
                href='/services'
                className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300'
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;