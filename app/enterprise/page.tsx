import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Enterprise-grade AI and IT solutions designed for large organizations. Scalable, secure, and reliable technology solutions.',
};

const EnterprisePage: React.FC = () => {
  const enterpriseFeatures = [
    {
      title: 'Scalable AI Infrastructure',
      description:
        'Enterprise-grade AI solutions that scale with your business needs.',
      icon: '🏢',
    },
    {
      title: '24/7 Support',
      description:
        'Round-the-clock technical support and monitoring for critical systems.',
      icon: '🛠️',
    },
    {
      title: 'Custom Solutions',
      description:
        'Tailored AI and IT solutions designed specifically for your organization.',
      icon: '⚙️',
    },
    {
      title: 'Security & Compliance',
      description:
        'Enterprise-level security with compliance for industry standards.',
      icon: '🔒',
    },
  ];

  return (
    <>

      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Enterprise Solutions
              </h1>
              <p className='text-xl text-gray-600'>
                Advanced AI and IT solutions designed for large organizations
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-lg p-6 text-center'
                >
                  <div className='text-4xl mb-4'>{feature.icon}</div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              ))}
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 mb-16'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
                Why Choose Our Enterprise Solutions?
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>
                    Advanced Technology
                  </h3>
                  <ul className='space-y-2 text-gray-600'>
                    <li className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                      <span>
                        Cutting-edge AI and machine learning algorithms
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                      <span>Quantum computing capabilities</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                      <span>Autonomous system management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>
                    Enterprise Support
                  </h3>
                  <ul className='space-y-2 text-gray-600'>
                    <li className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                      <span>Dedicated account management</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                      <span>24/7 technical support</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                      <span>Custom training and onboarding</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Ready to Transform Your Enterprise?
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                Contact our enterprise team to discuss your specific needs and
                requirements.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                  Schedule Consultation
                </button>
                <button className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'>
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterprisePage;
