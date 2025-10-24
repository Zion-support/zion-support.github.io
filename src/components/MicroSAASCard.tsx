'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface MicroSAASCardProps {
  service: {
    title: string
    description: string
    icon: string
    price: string
    features: string[]
    benefits: string[]
    marketPrice?: string
    category: string
    technologies: string[]
    contactInfo: string
    link?: string
    popular?: boolean
  }
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ service }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          MicroSAASCard
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MicroSAASCard;