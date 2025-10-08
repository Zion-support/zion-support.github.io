import React from 'react';

const EnterprisePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-5xl font-bold text-gray-900 mb-8 text-center'>
            Enterprise Solutions
          </h1>
          <p className='text-xl text-gray-600 text-center mb-12'>
            Transform your enterprise with AI-powered solutions that deliver 300% ROI
          </p>

          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>AI Integration</h2>
              <p className='text-gray-600'>
                Seamlessly integrate advanced AI capabilities into your existing systems
                for immediate impact and measurable results.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>Automation</h2>
              <p className='text-gray-600'>
                Automate complex business processes with intelligent systems that
                learn and adapt to your enterprise needs.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>Analytics</h2>
              <p className='text-gray-600'>
                Gain deep insights with advanced analytics and predictive modeling
                powered by cutting-edge AI technology.
              </p>
            </div>
          </div>

          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
              Enterprise Benefits
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='flex items-start'>
                <span className='text-2xl mr-4'>✓</span>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Guaranteed 300% ROI
                  </h3>
                  <p className='text-gray-600'>
                    We guarantee measurable returns on your AI investment
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <span className='text-2xl mr-4'>✓</span>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    70% Cost Reduction
                  </h3>
                  <p className='text-gray-600'>
                    Dramatically reduce operational costs through automation
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <span className='text-2xl mr-4'>✓</span>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    90% Efficiency Gains
                  </h3>
                  <p className='text-gray-600'>
                    Achieve unprecedented efficiency in operations
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <span className='text-2xl mr-4'>✓</span>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    24/7 Support
                  </h3>
                  <p className='text-gray-600'>
                    Enterprise-grade support whenever you need it
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Ready to Transform Your Enterprise?
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Contact us today to learn how we can help your organization achieve its goals
            </p>
            <a
              href='/contact'
              className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300'
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;