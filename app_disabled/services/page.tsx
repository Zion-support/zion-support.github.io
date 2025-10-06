import React from 'react';

<<<<<<< HEAD:app/services/page.tsx
const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Autonomous Cloud Operations',
      description: 'Self-managing cloud infrastructure with 99.9% uptime and 70% cost reduction.',
      features: ['Autonomous scaling', 'Predictive maintenance', 'Cost optimization', 'Security automation'],
      price: 'Starting at $50K/month',
      roi: '300% ROI guaranteed'
    },
    {
      title: 'AI FinTech Transformation',
      description: 'Revolutionary financial technology solutions with quantum-enhanced analytics.',
      features: ['Real-time fraud detection', 'Automated trading', 'Risk assessment', 'Compliance automation'],
      price: 'Custom pricing',
      roi: '500% ROI average'
    },
    {
      title: 'AI Retail Automation',
      description: 'Complete retail transformation with autonomous inventory and customer service.',
      features: ['Smart inventory management', 'AI customer service', 'Demand forecasting', 'Price optimization'],
      price: 'Starting at $30K/month',
      roi: '400% ROI guaranteed'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Rapid development of specialized software solutions for niche markets.',
      features: ['Rapid prototyping', 'Scalable architecture', 'API integration', 'Cloud deployment'],
      price: 'Starting at $25K',
      roi: '200% ROI average'
    },
    {
      title: 'AI Enterprise Strategy',
      description: 'Comprehensive AI implementation roadmap tailored to your business needs.',
      features: ['Strategic planning', 'Technology assessment', 'Implementation roadmap', 'Change management'],
      price: 'Starting at $75K',
      roi: '250% ROI guaranteed'
    },
    {
      title: 'Quantum-Enhanced Analytics',
      description: 'Next-generation analytics with quantum computing for 1000x faster insights.',
      features: ['Quantum algorithms', 'Real-time processing', 'Predictive modeling', 'Advanced visualization'],
      price: 'Custom pricing',
      roi: '1000% ROI potential'
=======
export default function ServicesPage() {
  const services = [
    {
      title: 'AI Consulting',
      description: 'Expert guidance for your AI transformation journey with proven methodologies and best practices.',
      icon: '🤖'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing AI systems that optimize performance and reduce operational costs by up to 70%.',
      icon: '⚡'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete enterprise modernization with AI-powered solutions tailored to your business needs.',
      icon: '🚀'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Custom micro SaaS solutions that scale with your business and deliver immediate value.',
      icon: '💼'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime and enhanced security.',
      icon: '☁️'
    },
    {
      title: 'DevOps & SRE',
      description: 'Reliable, scalable infrastructure with automated deployment and monitoring systems.',
      icon: '🔧'
>>>>>>> main:app_disabled/services/page.tsx
    }
  ];

  return (
<<<<<<< HEAD:app/services/page.tsx
    <div className='min-h-screen bg-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
              Our AI Services
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Transform your enterprise with our cutting-edge AI solutions. 
              Each service comes with guaranteed ROI and revolutionary results.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6'
              >
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mb-4'>
                  {service.description}
                </p>
                
                <div className='mb-4'>
                  <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center'>
                        <span className='text-green-500 mr-2'>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='border-t border-gray-200 pt-4'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-sm font-medium text-gray-500'>Investment:</span>
                    <span className='text-sm font-bold text-gray-900'>{service.price}</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm font-medium text-gray-500'>Expected ROI:</span>
                    <span className='text-sm font-bold text-green-600'>{service.roi}</span>
                  </div>
                </div>

                <button className='w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300'>
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center'>
            <h2 className='text-4xl font-bold mb-6'>
              Ready to Achieve 300% ROI?
            </h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto'>
              Join hundreds of companies already transforming their operations 
              with our AI solutions. Get started today with a free consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300'
              >
                Get Free Consultation
              </a>
              <a
                href='/case-studies'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300'
              >
                View Case Studies
              </a>
            </div>
=======
    <div className='min-h-screen bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-6'>Our Services</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Comprehensive AI and IT solutions designed to transform your enterprise and drive measurable results.
          </p>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-4xl mb-4'>{service.icon}</div>
              <h2 className='text-xl font-semibold text-gray-900 mb-3'>{service.title}</h2>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl'>
            <h2 className='text-3xl font-bold mb-4'>Ready to Transform Your Business?</h2>
            <p className='text-xl mb-8'>Get started with our AI solutions and achieve 300% ROI guaranteed.</p>
            <button className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300'>
              Contact Us Today
            </button>
>>>>>>> main:app_disabled/services/page.tsx
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD:app/services/page.tsx
};

export default ServicesPage;
=======
}
>>>>>>> main:app_disabled/services/page.tsx
