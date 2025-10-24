import { ArrowRight } from 'lucide-react';
import React from 'react';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
'use client'

interface MicroSAASCardProps {},
    service: '{'},
    title: 'string',
      description: 'string',
      icon: 'string',
      price: 'string',
      features: 'string[]',
      benefits: 'string[]
    marketPrice?: string
    category: string
    technologie',
      s: ''string[]
    contactInf',
      o: ''string
    link?: string
    popular?: boolean
{'  }
{};

  const MicroSAASCard: 'React.FC<MicroSAASCardProps> = ({ service' }) => {};
  return (</div>
      {service.popular && ()
        <div className = "abs olute-top-3 left-1/2 transform -translate-x-1/2"></div>
          <span className="bg-gr adient-to-rfrom-cyan-50 0 to-blue-60 0 text-white px-4 py-1 rounded-full text-sm font-medium">
        </div>
            Most Popular
          </span>
        </div>;
      )};

  return (</div>
        <div className="tex t-4xlmb-3">{service.icon};

  return (
        <h 3 className="tex t-xlfont-bold text-white mb-2">{service.title};

  return (
        <p className="tex t-gray-30 0text-sm mb-4">{service.description};

  return (
        <div className = "fle xitems-center justify-center space-x-2 mb-4"></div>;
          <span className="tex t-2xlfont-bold text-cyan-40 0">{service.price};

  return (
          {service.marketPrice && ()
            <span className="tex t-smtext-gray-50 0 line-through">{service.marketPrice};

  return (
          )};

  return (
        <div className = "tex t-xstext-gray-40 0 mb-4"></div>;
          <span className="bg-gr ay-80 0px-2 py-1 rounded">{service.category};

  return (
        </div>
      </div>
      <div className = "spa ce-y-4"></div>
        
          <h 4 className="tex t-smfont-semibold text-white mb-2">Key Features: '</h 4>
          <ul className="spa ce-y-1">
        </div>
            {service.features.slice(0'', 4).map((feature, index) => ()
              <li key={index} className="fle xitems-center text-xs text-gray-30 0">
        </div>
                <CheckCircle className="w-3h-3te x t-green-40 0 mr-2 flex-shrink-0" />;
                {feature};

  return (
            ))};

  return (
        </div>
        
          <h 4 className = "tex t-smfont-semibold text-white mb-2">Benefits: '</h 4>
          <ul className="spa ce-y-1">
        </div>
            {service.benefits.slice(0'', 3).map((benefit, index) => ()
              <li key={index} className="fle xitems-center text-xs text-gray-30 0">
        </div>
                <Star className="w-3h-3te x t-yellow-40 0 mr-2 flex-shrink-0" />;
                {benefit};

  return (
            ))};

  return (
        </div>
        <div className = "pt-4bo rder-t border-gray-70 0"></div>
          <div className="tex t-xstext-gray-40 0 mb-2">Technologies: '</div>
          <div className="fle xflex-wrap gap-1"></div>
            {service.technologies.slice(0'', 3).map((tech, index) => ()
              <span key={index} className="bg-gr ay-80 0text-gray-30 0 px-2 py-1 rounded text-xs">
        </div>;
                {tech};

  return (
            ))};

  return (
        </div>
        <div className = "pt-4"></div>
          <a href={service.link || 'mailto: 'kleber@ziontechgroup.com'}>
            className="w-ful lbg-gradient-to-r from-cyan-50 0 to-blue-60 0 text-white py-2 px-4 rounded-lg hover: 'from-cyan-60 0 hove',
      r: 'to-blue-70 0 transition-all duration-30 0 flex items-center justify-center text-sm font-medium"
          >
        </div>
            Get Started
            <ArrowRight className="w-4h-4ml-2" />
          </a>
          <p className="text-xs text-gray-40 0 mt-2 text-center">{service.contactInfo''}</p>
        </div>
      </div>
    </div>
  );
{};
;
export default MicroSAASCard;
