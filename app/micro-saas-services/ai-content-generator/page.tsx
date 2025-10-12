
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, PenTool, Sparkles } from 'lucide-react'
import Layout from '../../../layout'

export default function AiContentGeneratorPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">AI Content Generator</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI content generator solutions for creative and engaging content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <FileText className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Blog Posts</h3>
              <p className="text-gray-300">Generate engaging blog content with AI assistance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <PenTool className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Creative Writing</h3>
              <p className="text-gray-300">AI-powered creative writing and storytelling</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <Sparkles className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">SEO Optimized</h3>
              <p className="text-gray-300">Content optimized for search engines and engagement</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
