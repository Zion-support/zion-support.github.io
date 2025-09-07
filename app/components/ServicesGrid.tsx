import React from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Micro SaaS',
    description: 'End-to-end product engineering with billing, auth, analytics and growth.',
    href: '/services/micro-saas',
    icon: '🚀'
  },
  {
    title: 'AI Services',
    description: 'LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps.',
    href: '/services/ai-services',
    icon: '🤖'
  },
  {
    title: 'IT Services',
    description: 'Cloud migration, DevOps, SRE, security hardening and cost optimization.',
    href: '/services/it-services',
    icon: '⚙️'
  },
  {
    title: 'Blockchain Solutions',
    description: 'Smart contracts, DeFi protocols, NFT platforms, and Web3 applications.',
    href: '/services/blockchain',
    icon: '⛓️'
  },
  {
    title: 'Automation Services',
    description: 'RPA, workflow automation, and AI-powered business process optimization.',
    href: '/services/automation',
    icon: '⚡'
  },
  {
    title: 'Technology Consulting',
    description: 'Digital transformation, technology strategy, and architecture consulting.',
    href: '/services/consulting',
    icon: '📋'
  }
];

export default function ServicesGrid() {
  return (
    <div className='py-20'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Our Services
          </h2>
          <p className='text-xl text-slate-300 max-w-2xl mx-auto'>
            Comprehensive solutions for modern businesses
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className='group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105'
            >
              <div className='flex items-center space-x-4'>
                <div className='text-3xl'>{service.icon}</div>
                <div>
                  <h3 className='text-xl font-semibold text-white group-hover:text-blue-300 transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-gray-300 group-hover:text-gray-200 transition-colors'>
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}