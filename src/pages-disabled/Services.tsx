import React from 'react',
import Link from 'next/link',
const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services',
      link: '/services/ai'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure',
      link: '/services/cloud'
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise security solutions',
      link: '/services/security'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-zion-cyan mb-4">{service.description}</p>
              <Link href={service.link} >
              <span className="text-zion-cyan hover:text-white transition-colors">
                Learn More →
              </span>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );;

export default Services;