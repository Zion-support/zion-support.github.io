'use client'
import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  price?: string
  popular?: boolean
  onSelect?: () => void
  className?: string
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  price,
  popular = false,
  onSelect,
  className = ''
}) => {
  return (
    <div>{popular && (
        </div><div> </div><div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <div> </div><h3>{title}
        </h3></h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div>{features.map((feature, index) => (
          </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      {price && (
        <div> </div><div className="text-3xl font-bold text-white mb-1">{price}</div>
          <div className="text-gray-400 text-sm">per month</div>
        </div>
      )}
      {onSelect && (
        <button>Get Started
          </button><ArrowRight> </ArrowRight></button>
      )}
    </div>
  )
}
export default ServiceCard
  </ServiceCardProps>