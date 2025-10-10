'use client';
import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
interface ServiceCardProps {
    title: string,
  description: string,
  features: string[]
  price?: string
  popular?: boolean
  onSelect?: () => void,
  className?: string
  }
const ServiceCard: React.FC<ServiceCardProps>= ({
  title,
  description,
  features,
  price,
  popular = false,
  onSelect,
  className = ''
}) => {</ServiceCardProps>
  return(</ServiceCardProps>
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${className} ${)
      popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
    }`}>{popular && (</div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        </h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div className="space-y-2 mb-6">{features.map((feature, index) => (</div>
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      {price && (
        <div className="mb-6">
          <div className="text-3xl font-bold text-white mb-1">{price}</div>
          <div className="text-gray-400 text-sm">per month</div>
        </div>
      )}
      {onSelect && (
        <button
          onClick={onSelect}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">Get Started</button>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  )
}
export default ServiceCard;
  </ServiceCardProps>
