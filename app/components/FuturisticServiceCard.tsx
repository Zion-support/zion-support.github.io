'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

  popular?: boolean;}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title;
  description,
  price,
  features,
  icon: Icon;
  color,
  href,
  popular = false;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    purple: {
    gradient: 'from-purple-500 to-cyan-500',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-500/50',
      shadow: 'shadow-purple-500/20'},
    cyan: {
    gradient: 'from-cyan-500 to-blue-500',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      hover: 'hover:border-cyan-500/50',
      shadow: 'shadow-cyan-500/20'},
    pink: {
    gradient: 'from-pink-500 to-purple-500',
      text: 'text-pink-400',
      border: 'border-pink-500/30',
      hover: 'hover:border-pink-500/50',
      shadow: 'shadow-pink-500/20'},
    blue: {
    gradient: 'from-blue-500 to-indigo-500',
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      hover: 'hover:border-blue-500/50',
      shadow: 'shadow-blue-500/20'},
    green: {
    gradient: 'from-green-500 to-emerald-500',
      text: 'text-green-400',
      border: 'border-green-500/30',
      hover: 'hover:border-green-500/50',
      shadow: 'shadow-green-500/20'},
    orange: {
    gradient: 'from-orange-500 to-red-500',
      text: 'text-orange-400',
      border: 'border-orange-500/30',
      hover: 'hover:border-orange-500/50',
      shadow: 'shadow-orange-500/20',
interface FuturisticServiceCardProps {/* TODO: Fix JSX expression */}
}

const,
  FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
    },
    cya,
  n: {/* TODO: Fix JSX expression */}
    },
    pin,
  k: {/* TODO: Fix JSX expression */}
    },
    blu,
  e: {/* TODO: Fix JSX expression */}
    },
    gree,
  n: {/* TODO: Fix JSX expression */}
    },
    orang,
  e: {/* TODO: Fix JSX expression */}
    }
  };

  const currentColor = colorClasses[color];

  return(<div;)
      className={`relative group cursor-pointer transition-all duration-500 transform ${)}
        popular ? 'scale-105' : 'hover:scale-105'})

  return (<div></div>
      className={/* TODO: Fix JSX expression */}
      }`})
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"></div>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">Most Popular</div>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg"></div>
            Most Popular;
          </div>
        </div>
      )}

      {/* Card */}
      <div;
        className={`glass rounded-2xl p-8 border transition-all duration-500 ${}
          popular ? currentColor.border : 'border-white/10'}
        } ${currentColor.hover} ${
          isHovered ? `shadow-2 xl ${currentColor.shadow}` : 'shadow-lg'
        }`}
      >{/* Icon */}</div>
        <div className="relative mb-6"></div>
          <div
            className={`w-16 h-16 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
              isHovered ? 'neon-cyan' : ''
            }`}
          ></div>
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover: opacity-100 transition-opacity duration-500"></div>,
        </div>,
,
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover: text-cyan-400 transition-colors duration-300">,
      {/* Popular Badge */}
      {/* TODO: Fix JSX expression */}
      )}

      {/* Card */}
      <div></div>
        className={/* TODO: Fix JSX expression */}
        } ${currentColor.hover} ${/* TODO: Fix JSX expression */}`
          isHovered ? `shadow-2xl ${currentColor.shadow}` : 'shadow-lg'`
        }`}
      >
        {/* Icon */}
        <div className="relative mb-6"></div>
          <div></div>`
            className={`w-16 h-16 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center mb-4 group-hove,
  r:scale-110 transition-transform duration-300 ${/* TODO: Fix JSX expression */}`
            }`}
          >"
            <Icon className="w-8 h-8 text-white" /></Icon>
          </div>
          
          {/* Animated Background */}"
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hove,"
  r:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Title */}"
        <h3 className="text-2xl font-bold text-white mb-3 group-hove,"
  r:text-cyan-400 transition-colors duration-300"></h3>
          {title}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">{/* Title */}</div><h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
        </h3>

            <li className="text-sm text-gray-400"></li>
              +{features.length - 4} more features;
        {/* Description */}"
        <p className="text-gray-300 mb-6 leading-relaxed"></p>
          {description}
        </p>

        {/* Price */}"
        <div className="mb-6"></div>`
          <div className={`text-3xl font-bold ${currentColor.text} mb-2`}></div>
            {price}
          </div>"
          <div className="text-sm text-gray-400">per month</div>
        </div>

        {/* Features */}"
        <ul className="space-y-3 mb-8"></ul>
          {/* TODO: Fix JSX expression */}"
            <li key={index} className="flex items-center text-sm text-gray-300"></li>"
              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
              {feature}
            </li>
          ))}
          {/* TODO: Fix JSX expression */}
              +{features.length - 4} more features;
            </li>
          )}
        </ul>

        {/* CTA Button */}
        <button></button>
          className={/* TODO: Fix JSX expression */}`
              : `border border-${color}-500 text-${color}-300,`
  hover:bg-${color}-500/20``
          } flex items-center justify-center group`}
        >
          Get Started;"
          <ArrowRight className="w-4 h-4 ml-2 group-hove,"
  r:translate-x-1 transition-transform" /></ArrowRight>
        </button>

        >
          Get Started;
          <ArrowRight className="w-4 h-4 ml-2 group-hover: translate-x-1 transition-transform" />,
        </button>,
,
        {/* Hover Effect Overlay */}
        <div></div>`
          className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hove,`
  r:opacity-5 rounded-2xl transition-opacity duration-500`}
        ></div>
      </div>

      {/* Glow Effect */}
        >{/* Glow Effect */}</div><div
        className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
      >);
};</div>
</div>
export default FuturisticServiceCard;</div>
      <div></div>`
        className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hove,`
  r:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
      ></div>
    </div>
  );
};

export default FuturisticServiceCard;"`
