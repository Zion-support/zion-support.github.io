import React from 'react'
import { ArrowRight } from 'lucide-react'

interface FuturisticServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  pricing: string
  link: string
}

export default function FuturisticServiceCard({
  icon,
  title,
  description,
  features,
  pricing,
  link
}: FuturisticServiceCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-green-400">{pricing}</span>
        <a
          href={link}
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center group-hover:translate-x-1"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  )
}
