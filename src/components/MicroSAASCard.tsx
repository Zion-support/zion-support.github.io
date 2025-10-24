'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

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
    contactInfo: string;
    link?: string;
    popular?: boolean;
  }
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ service }) => {
  return (
    <div className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
      {service.popular && (
        <div className=&quot;absolute -top-3 left-1/2 transform -translate-x-1/2&quot;></div>
          <span className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium&quot;>
            Most Popular
          </span>
        </div>
      )}

      <div className=&quot;text-center mb-4&quot;></div>
        <div className=&quot;text-4xl mb-3&quot;>{service.icon}</div>
        <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.title}</h3>
        <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.description}</p>
        <div className=&quot;flex items-center justify-center space-x-2 mb-4&quot;></div>
          <span className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</span>
          {service.marketPrice && (
            <span className=&quot;text-sm text-gray-500 line-through&quot;>{service.marketPrice}</span>
          )}
        </div>
        <div className=&quot;text-xs text-gray-400 mb-4&quot;></div>
          <span className=&quot;bg-gray-800 px-2 py-1 rounded&quot;>{service.category}</span>
        </div>
      </div>
      <div className=&quot;space-y-4&quot;></div>
        <div></div>
          <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Key Features:</h4>
          <ul className=&quot;space-y-1&quot;>
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className=&quot;flex items-center text-xs text-gray-300&quot;>
                <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
          <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Benefits:</h4>
          <ul className=&quot;space-y-1&quot;>
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className=&quot;flex items-center text-xs text-gray-300&quot;>
                <Star className=&quot;w-3 h-3 text-yellow-400 mr-2 flex-shrink-0&quot; />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className=&quot;pt-4 border-t border-gray-700&quot;></div>
          <div className=&quot;text-xs text-gray-400 mb-2&quot;>Technologies:</div>
          <div className=&quot;flex flex-wrap gap-1&quot;></div>
            {service.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className=&quot;bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs&quot;>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className=&quot;pt-4&quot;></div>
          <a
            href={service.link || 'mailto:kleber@ziontechgroup.com'}
            className=&quot;w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm font-medium&quot;
          >
            Get Started
            <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
          </a>
          <p className=&quot;text-xs text-gray-400 mt-2 text-center&quot;>{service.contactInfo}</p>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
        </div>
      </div>
    </div>
  )
}

export default MicroSAASCard;