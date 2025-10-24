'use client'

import React, { useState, useEffect } from 'react'

interface ContentItem {
  id: string
  title: string
  description: string
  image: string
  category: string
}

const DynamicContentShowcase: React.FC = () => {
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    // Simulate API call
    const fetchContent = async () => {
      setLoading(true)
      // Mock data
      const mockContent: ContentItem[] = [
        {
          id: '1',
          title: 'Technology Innovation',
          description: 'Latest trends in technology and innovation',
          image: '/api/placeholder/400/300',
          category: 'technology'
        },
        {
          id: '2',
          title: 'Business Solutions',
          description: 'Comprehensive business solutions for modern companies',
          image: '/api/placeholder/400/300',
          category: 'business'
        }
      ]
      setContent(mockContent)
      setLoading(false)
    }

    fetchContent()
  }, [])

  const categories = ['all', 'technology', 'business', 'innovation']
  const filteredContent = selectedCategory === 'all' 
    ? content 
    : content.filter(item => item.category === selectedCategory)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DynamicContentShowcase