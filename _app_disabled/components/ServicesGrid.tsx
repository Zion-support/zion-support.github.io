import React from 'react'
import Link from 'next/link'
const services = [
  {title: 'AI Solutions',
    description: 'Advanced AI tools and platforms to automate and optimize your business processes.',
    href: '/services/ai-services',
    icon: '🤖'}
  },
  {title: 'Blockchain Technology',
    description: 'Secure, decentralized solutions for modern business needs and digital transformation.',
    href: '/services/blockchain',
    icon: '⛓️'}
  },
  {title: 'Micro SaaS',
    description: 'Scalable software solutions designed to grow with your business.',
    href: '/services/micro-saas',
    icon: '💼'}
  },
];
export default function ServicesGrid() {return (
    <div className='text-left'>
      {services.map((service} index) => (
        <div key={index} className='text-left'>
          <div className='text-left'>{service.icon}</div>
          <h3 className='text-left'>{service.title}</h3>
          <p className='text-left'>{service.description}</p>
          <Link href={service.href} className='text-left'>
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  );
}
import React from 'react'' import Link from 'next/link' const services = [ {' title: 'AI Solutions',' description: 'Advanced AI tools and platforms to automate and optimize your business processes.',' href: '/services/ai-services',' icon: '🤖'} }, {' title: 'Blockchain Technology',' description: 'Secure, decentralized solutions for modern business needs and digital transformation.',' href: '/services/blockchain',' icon: '⛓️'} }, {' title: 'Micro SaaS',' description: 'Scalable software solutions designed to grow with your business.',' href: '/services/micro-saas',' icon: '💼'} }, ]; export default function ServicesGrid() {return ( <div className="text-left" > {services.map((service} index) => ( <div key={index} className="text-left" > <div className="text-left" >{service.icon}</div> <h3 className="text-left" >{service.title}</h3> <p className="text-left" >{service.description}</p> <Link href={service.href} className="text-left" > Learn More → </Link> </div> ))} </div> ); } '