import React from 'react'
import { CheckCircle, ArrowRight, Check } from 'lucide-react';;

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  priceDescription?: string;
  icon?: React.ReactNode;
  gradient?: string;
  onClick?: () => void;
  isPopular?: boolean;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  features,
  price,
  priceDescription,
  icon,
  gradient = 'from-purple-500 to-blue-600',
  onClick,
  isPopular = false
}) => {
  return (
    <div className={`relative group ${isPopular ? 'scale-105' : ''}`}>
      {isPopular && (
        <div className="...">
          <div className="...">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="...">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`}></div>
        
        {/* Content */}
        <div className="...">
          {/* Icon */}
          {icon && (
            <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {icon}
            </div>
          )}
          
          {/* Title */}
          <h3 className="...">
            {title}
          </h3>
          
          {/* Description */}
          <p className="...">
            {description}
          </p>
          
          {/* Features */}
          <ul className="...">
            {features.map((feature, index) => (
              <li key={index} className="...">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Price */}
          {price && (
            <div className="...">
              <div className="...">
                {price}
              </div>
              {priceDescription && (
                <div className="...">
                  {priceDescription}
                </div>
              )}
            </div>
          )}
          
          {/* Button */}
          <button
            onClick={onClick}
            className={`w-full bg-gradient-to-r ${gradient} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group`}
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FuturisticServiceCard