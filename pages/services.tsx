import React { useState useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  const [isVisible setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  } []);

  const { trackClick } = useAnalytics();

  const serviceDetails = {
    'ai-ml': {
      title: 'AI & Machine Learning'
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.'
      features: [
        'Natural Language Processing (NLP)'
        'Computer Vision & Image Recognition'
        'Predictive Analytics'
        'Automated Decision Making'
      ]
    }
    'cloud': {
      title: 'Cloud Infrastructure'
      description: 'Scalable secure and reliable cloud solutions tailored to your business needs.'
      features: [
        'Cloud Migration'
        'Infrastructure as Code'
        'Auto-scaling Solutions'
        'Disaster Recovery'
      ]
    }
    'cybersecurity': {
      title: 'Cybersecurity'
      description: 'Protect your business with comprehensive security solutions and best practices.'
      features: [
        'Security Audits'
        'Threat Detection'
        'Data Protection'
        'Compliance Management'
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Services - Zion App"
        description="Comprehensive technology services including AI cloud infrastructure and cybersecurity."
        keywords="services AI cloud cybersecurity technology"
      />
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceDetails).map(([key service]) => (
              <div key={key} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => trackClick(`service-${key}` 'engagement')}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
