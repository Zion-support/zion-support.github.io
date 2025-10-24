<<<<<<< HEAD
'use client'
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
interface MicroSAASCardProps {}
  service: {}
    title: string,
      description: string,
      icon: string,
      price: string,
      features: string[]
    benefits: string[]
    marketPrice?: string
    category: string
    technologies: string[]
    contactInfo: string
    link?: string
    popular?: boolean
{  }
{}
const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ service }) => {};
  return ()
    <div className = {`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
      {service.popular && ()
        <div className="abs olute-top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gr adient-to-rfrom-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
        </div>
            Most Popular
          </span>
        </div>
      )}
      <div className="tex t-centermb-4">
        <div className="tex t-4xlmb-3">{service.icon}</div>
        <h3 className="tex t-xlfont-bold text-white mb-2">{service.title}</h3>
        <p className="tex t-gray-300text-sm mb-4">{service.description}</p>
        <div className="fle xitems-center justify-center space-x-2 mb-4">
          <span className="tex t-2xlfont-bold text-cyan-400">{service.price}</span>
          {service.marketPrice && ()
            <span className="tex t-smtext-gray-500 line-through">{service.marketPrice}</span>
          )}
        </div>
        <div className="tex t-xstext-gray-400 mb-4">
          <span className="bg-gr ay-800px-2 py-1 rounded">{service.category}</span>
        </div>
      </div>
      <div className="spa ce-y-4">
          <h4 className="tex t-smfont-semibold text-white mb-2">Key Features: </h4>
          <ul className="spa ce-y-1">
        </div>
            {service.features.slice(0, 4).map((feature, index) => ()
              <li key={index} className="fle xitems-center text-xs text-gray-300">
        </div>
                <CheckCircle className="w-3h-3te x t-green-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
          <h4 className="tex t-smfont-semibold text-white mb-2">Benefits: </h4>
          <ul className="spa ce-y-1">
        </div>
            {service.benefits.slice(0, 3).map((benefit, index) => ()
              <li key={index} className="fle xitems-center text-xs text-gray-300">
        </div>
                <Star className="w-3h-3te x t-yellow-400 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4bo rder-t border-gray-700">
          <div className="tex t-xstext-gray-400 mb-2">Technologies: </div>
          <div className="fle xflex-wrap gap-1">
            {service.technologies.slice(0, 3).map((tech, index) => ()
              <span key={index} className="bg-gr ay-800text-gray-300 px-2 py-1 rounded text-xs">
        </div>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <a href={service.link || 'mailto:kleber@ziontechgroup.com'}>
            className="w-ful lbg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm font-medium"
          >
        </div>
            Get Started
            <ArrowRight className="w-4h-4ml-2" />
          </a>
          <p className="text-xs text-gray-400 mt-2 text-center">{service.contactInfo}</p>
          <p className="tex t-xstext-gray-400 mt-2 text-center">{service.contactInfo}</p>
        </div>
      </div>
    </div>
  )
{};
;
}
export default MicroSAASCard;
=======
import React from "react";

interface MicroSAASCardProps {
  // Add props here
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          MicroSAASCard
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the MicroSAASCard page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASCard;
>>>>>>> origin/main
