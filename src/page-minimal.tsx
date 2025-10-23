import React from 'react'
import { Phone, CheckCircle, Star, ArrowRight } from 'lucide-react'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

const PageMinimal = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Minimal Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a minimal page.
          </p>
        </div>
      </div>
    </div>
  )
}
