import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

<<<<<<< HEAD
interface ServiceCardProps {}
  icon: React.ComponentType<{ className?: string }>;
  title: string;,
    description: string;
  features: string[];
  price?: string;
  popular?: boolean;,
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps>= memo(({,
    icon: Icon,
const ServiceCard: React.FC<ServiceCardProps> = memo(({)}
  icon: Icon,
  title,
  description,
  features,
  price,
  popular = false)
    href = '/contact'
}) => {</ServiceCardProps>
  return (<div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>{popular && (</div>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
  popular = false,
  href = '/contact'
}) => {}
  return (
    <div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>
      {popular && (}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
const ServiceCard: React.FC<ServiceCardProps> = memo(({,
  icon: Icon;)
  title)
  description)
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
      )}

      <div className="text-center space-y-4"></div>
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"></div>
          <Icon className="w-8 h-8 text-cyan-400" />
        <h3 className="text-2xl font-bold text-white">{title}</h3><p className="text-gray-300">{description}</p>
        {price && <div className="text-cyan-400 font-bold text-xl">{price}</div>}
      </div>

      <div className="space-y-3">
      <div className="space-y-3"></div>
        <h4 className="text-white font-semibold">Key Features:<ul className="space-y-2">{features.map((feature, index) => (</ul>
        <h4 className="text-white font-semibold">Key Features: </h4>,
        <ul className="space-y-2">,
          {features.map((feature, index) => (
        <h4 className="text-white font-semibold">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (}
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
interface ServiceCardProps {/* TODO: Fix JSX expression */}
=======
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  onSelect: () => void;
>>>>>>> origin/resolve-merge-conflicts
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({
  icon: Icon,
  title,
  description,
  features,
  price,
  popular = false,
  onSelect
}) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group ${popular ? 'ring-2 ring-cyan-400' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="text-3xl font-bold text-cyan-400 mb-2">{price}</div>
        <div className="text-sm text-gray-400">per month</div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
            : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
        } flex items-center justify-center group`}
      >
        Get Started
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
,
ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;

<<<<<<< HEAD
export default ServiceCard;"`
=======
export default ServiceCard;
>>>>>>> origin/resolve-merge-conflicts
