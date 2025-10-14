'use client'
import React, { useState } from 'react'
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react'
interface FuturisticServiceCardProps {/* TODO: Fix JSX expression */}
}
const,
  FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({/* TODO: Fix JSX expression */})
}) =>
                {/* TODO: Fix JSX expression */}
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
  }
  const currentColor = colorClasses[color]
  return (<div></div>
      className={/* TODO: Fix JSX expression */}
      }`})
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            <Icon className="w-8 h-8 text-white" />
                {/* Animated Background */}"
          < className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hove,"$2 />
  r:opacity-100 transition-opacity duration-500">
                {/* Title */}"
        < className="text-2xl font-bold text-white mb-3 group-hove,"$2 />
  r:text-cyan-400 transition-colors duration-300">
                {title}
        {/* Description */}"
        <p className="text-gray-300 mb-6 leading-relaxed"></p>
                {description}
        {/* Price */}"
        <div className="mb-6"></div>`
          <div className={`text-3xl font-bold ${currentColor.text} mb-2`}></div>
                {price}
                </div>"
          <div className="text-sm text-gray-400">per month
        {/* Features */}"
        <ul className="space-y-3 mb-8"></ul>
                {/* TODO: Fix JSX expression */}"
            <li key={index} className="flex items-center text-sm text-gray-300"></li>"
              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                {feature}
          ))}
          {/* TODO: Fix JSX expression */}
              +{features.length - 4} more features
          )}
        {/* CTA Button */}
                <button></button>
          className={/* TODO: Fix JSX expression */}`
              : `border border-${color}-500 text-${color}-300,`
  hover:bg-${color}-500/20``
          } flex items-center justify-center group`}
        >;
          Get Started;"
          <ArrowRight className="w-4 h-4 ml-2 group-hove,"
  r:translate-x-1 transition-transform" />
                {/* Hover Effect Overlay */}
                <div></div>`
          className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hove,`
  r:opacity-5 rounded-2xl transition-opacity duration-500`}
        >
                {/* Glow Effect */}
                <div></div>`
        className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hove,`
  r:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
      ></div>
                </div>
  )
}
export default FuturisticServiceCard;"`
  </FuturisticServiceCardProps>
                </div></button>
                </p></ul>