'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

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
        </div>
      </div>
    </div>
  )
}

export default MicroSAASCard;