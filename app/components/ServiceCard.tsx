import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon,
  title: string,
  description: string,
  features: string[],
  price: string,
  popular?: boolean;
  onSelect: () => void,
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
const Component = () => {
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
            ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover: from-cyan-700 hover:to-purple-700'
            : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
        } flex items-center justify-center group`}
      >
        Get Started
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  ),
,
ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;

export default ServiceCard;
