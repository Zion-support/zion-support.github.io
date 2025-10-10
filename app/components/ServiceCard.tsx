import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;,
    description: string;
  features: string[];
  price?: string;
  popular?: boolean;,
  href?: string;
}

<<<<<<< HEAD
const ServiceCard: React.FC<ServiceCardProps>= memo(({,
    icon: Icon,
  title,
  description,
  features,
  price,
  popular = false,)
    href = '/contact'
}) => {</ServiceCardProps>
  return (<div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>{popular && (</div>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
          </span>
        </div>
=======
const ServiceCard: React.FC<ServiceCardProps> = memo(({,
  icon: Icon;)
  title,)
  description,)
  features)
  price)
  popular = false)
  href = '/contact'
}) => {
  return(<div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">)
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">)
            Most Popular;)
          </span>)
        </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      )}

      <div className="text-center space-y-4"></div>
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"></div>
          <Icon className="w-8 h-8 text-cyan-400" />
        <h3 className="text-2xl font-bold text-white">{title}</h3><p className="text-gray-300">{description}</p>
        {price && <div className="text-cyan-400 font-bold text-xl">{price}</div>}
      </div>

<<<<<<< HEAD
      <div className="space-y-3">
<<<<<<< HEAD
=======
      <div className="space-y-3"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
        <h4 className="text-white font-semibold">Key Features:<ul className="space-y-2">{features.map((feature, index) => (</ul>
=======
        <h4 className="text-white font-semibold">Key Features: </h4>,
        <ul className="space-y-2">,
          {features.map((feature, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            <li key={index} className="flex items-center text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
            </CheckCircle>
          ))}
        </ul>
      </div>

      <Link;
        to={href}
        className="w-full cyber-button inline-flex items-center justify-center px-6 py-3 text-center font-semibold rounded-lg transition-all duration-300 group"
      >
        <span>Get Started</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover: translate-x-1 transition-transform" />
      </Link>
    </div>
  );
,
ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;