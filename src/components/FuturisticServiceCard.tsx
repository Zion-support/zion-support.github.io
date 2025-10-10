'use client';
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';

}

const,
    },
    cya,
    },
    pin,
    },
    blu,
    },
    gree,
    },
    orang,
    }
  };

  const currentColor = colorClasses[color];

  return (<div></div>
      }`})
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      )}

      {/* Card */}
      <div></div>
          isHovered ? `shadow-2xl ${currentColor.shadow}` : 'shadow-lg'`
        }`}
      >
        {/* Icon */}
        <div className="relative mb-6"></div>
          <div></div>`
            className={`w-16 h-16 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center mb-4 group-hove,
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
        </h3>

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
            <li key={index} className="flex items-center text-sm text-gray-300"></li>"
              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
              {feature}
            </li>
          ))}
              +{features.length - 4} more features;
            </li>
          )}
        </ul>

        {/* CTA Button */}
        <button></button>
              : `border border-${color}-500 text-${color}-300,`
  hover:bg-${color}-500/20``
          } flex items-center justify-center group`}
        >
          Get Started;"
          <ArrowRight className="w-4 h-4 ml-2 group-hove,"
  r:translate-x-1 transition-transform" /></ArrowRight>
        </button>

        {/* Hover Effect Overlay */}
        <div></div>`
          className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hove,`
  r:opacity-5 rounded-2xl transition-opacity duration-500`}
        ></div>
      </div>

      {/* Glow Effect */}
      <div></div>`
        className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hove,`
  r:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
      ></div>
    </div>
  );
};

export default FuturisticServiceCard;"`