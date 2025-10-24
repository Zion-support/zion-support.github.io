<<<<<<< HEAD
'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, ArrowRight } from 'lucide-react';interface MicroSAASCardProps {
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
=======
import React from "react";

interface MicroSAASCardProps {
  // Add props here
>>>>>>> origin/main
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          MicroSAASCard
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the MicroSAASCard page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASCard;
