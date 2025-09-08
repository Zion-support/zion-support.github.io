import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface AIListingGeneratorProps {
  onGenerate: (listing: GeneratedListing) => void
  className?: string
}

interface GeneratedListing {
  title: string
  description: string
  tags: string[]
  price: number
  category: string
}

export function AIListingGenerator({ onGenerate, className }: AIListingGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [prompt, setPrompt] = useState('')

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    
    // Mock AI generation - replace with actual API call
    setTimeout(() => {
      const generatedListing: GeneratedListing = {
        title: `AI Generated: ${prompt}`,
        description: `This is an AI-generated listing based on your prompt: "${prompt}". The AI has analyzed your requirements and created an optimized listing that will help attract the right customers.`,
        tags: prompt.toLowerCase().split(' ').slice(0, 5),
        price: Math.floor(Math.random() * 500) + 50,
        category: 'AI Generated'
      }
      
      onGenerate(generatedListing)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className={cn('space-y-4', className)}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Describe what you want to list
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., I want to sell a custom website design service for small businesses..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
        />
      </div>
      
      <button
        onClick={handleGenerate}
        disabled={!prompt.trim() || isGenerating}
        className={cn(
          'w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        {isGenerating ? 'Generating...' : 'Generate AI Listing'}
      </button>
      
      {isGenerating && (
        <div className="text-center text-sm text-gray-600">
          AI is analyzing your prompt and generating an optimized listing...
        </div>
      )}
    </div>
  )
}