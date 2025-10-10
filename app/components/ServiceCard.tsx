'use client';
;
;
;
import React from 'react'
import { ArrowRight, CheckCircle  } from 'lucide-react'
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
  popular;

export default ServiceCard
  </ServiceCardProps>