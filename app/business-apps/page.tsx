import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  const features = [
    {
      title: 'Page',
      description: 'Professional page services for modern businesses.',
      benefits: ['Expert Solutions', 'Advanced Technology', 'Proven Results', '24/7 Support']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>Page - Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      <Navigation>
  
      <main>
  
        <div>
  
          <div>
  
            <h1>
  
              Page
            </h1>
            <p>
  
              Professional page services to help your business succeed and grow.
            </p>
          </div>
          
          <div>
  
            {features.map((feature, index) => (
              <div>
  
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul>
  
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li>
  
                      <CheckCircle>
  
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div>
  
            <div>
  
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p>
  
                Contact us today to learn more about our page services.
              </p>
              <div>
  
                <button>
  
                  Contact Us
                </button>
                <button>
  
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer>
  
    </div>
  );
};

export default PagePage;