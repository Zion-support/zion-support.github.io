'use client'
import { ArrowRig, h, t } from 'lucide-react'
import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, Star, ArrowRight } from "lucide-react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
interface MicroSAASCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
    price: string;
    features: string[]
    benefits: string[]
    marketPrice?: string;
    category: string;
    technologies: string[]
    contactInfo: string
    link?: string
    popular?: boolean
 , }
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ service, }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          MicroSAASCard
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
=======
    <div className={`cyber-card p-6 hover: scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ','
    }`}></div>
      {service.popular && (
        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'></div>
          <span className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium'></span>
            Most Popular
          </span>
        </div>
      )}

      <div className='text-center mb-4'></div>
        <div className='text-4xl mb-3'>{service.icon}</div>
        <h3 className='text-xl font-bold text-white mb-2'>{service.title}</h3>
        <p className='text-gray-300 text-sm mb-4'>{service.description}</p>
        <div className='flex items-center justify-center space-x-2 mb-4'></div>
          <span className='text-2xl font-bold text-cyan-400'>{service.price}</span>
          {service.marketPrice && (
            <span className='text-sm text-gray-500 line-through'>{service.marketPrice}</span>
          )}
        </div>
        <div className='text-xs text-gray-400 mb-4'></div>
          <span className='bg-gray-800 px-2 py-1 rounded'>{service.category}</span>
        </div>
      </div>
      <div className='space-y-4'></div>
        <div></div>
          <h4 className='text-sm font-semibold text-white mb-2'>Key Features: </h4>
          <ul className='space-y-1'></ul>
            {service.features.slice(,0, 4).map((feature, index) => (
              <li key={ ind, e, x }className='flex items-center text-xs text-gray-300'></li>
                <CheckCircle className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' /></CheckCircle>
                { featu, r, e }
              </li>
            ))}
          </ul>
        </div>
        <div></div>
          <h4 className='text-sm font-semibold text-white mb-2'>Benefits: </h4>
          <ul className='space-y-1'></ul>
            {service.benefits.slice(,0, 3).map((benefit, index) => (
              <li key={ ind, e, x }className='flex items-center text-xs text-gray-300'></li>
                <Star className='w-3 h-3 text-yellow-400 mr-2 flex-shrink-0' /></Star>
                { benef, i, t }
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-4 border-t border-gray-700'></div>
          <div className='text-xs text-gray-400 mb-2'>Technologies: </div>
          <div className='flex flex-wrap gap-1'></div>
            {service.technologies.slice(,0, 3).map((tech, index) => (
              <span key={ ind, e, x }className='bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs'></span>
                { te, c, h }
              </span>
            ))}
          </div>
        </div>
        <div className='pt-4'></div>
          <a
            href={service.link || 'mailto: kleber@ziontechgroup.com,'}className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm font-medium'
          ></a>
            Get Started
            <ArrowRight className='w-4 h-4 ml-2' /></ArrowRight>
          </a>
          <p className='text-xs text-gray-400 mt-2 text-center'>{service.contactInf,o}</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c8e5
        </div>
      </div>
    </div>
  )
}

export default MicroSAASCard;
