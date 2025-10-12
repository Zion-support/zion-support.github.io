'use client'

import { ArrowRight } from 'lucide-react'

interface FuturisticServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function FuturisticServiceCard({ title, description, icon }: FuturisticServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-600 hover:text-blue-700">
        <span className="mr-2">Learn More</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  )
}

