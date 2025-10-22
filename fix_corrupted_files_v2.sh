#!/bin/bash

# List of corrupted files to fix
files=(
  "app/ai-video-generator/page.tsx"
  "app/ai-voice-assistant/page.tsx"
  "app/api-development/page.tsx"
  "app/api-docs/page.tsx"
  "app/blockchain-solutions-pro/page.tsx"
  "app/iot-development/page.tsx"
  "app/ai-website-analyzer/page.tsx"
  "app/data-analytics/page.tsx"
  "app/database-management/page.tsx"
  "app/zion-ai-data-cleaner/page.tsx"
  "app/zion-ai-seo-optimizer/page.tsx"
  "app/zion-smart-analytics-dashboard/page.tsx"
  "app/it-services/page.tsx"
  "app/virtual-reality-solutions/page.tsx"
)

# Function to create a clean page
create_clean_page() {
  local file_path="$1"
  local dir_name=$(basename "$(dirname "$file_path")")
  local page_name=$(echo "$dir_name" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  local function_name=$(echo "$dir_name" | sed 's/-/ /g' | sed 's/\b\w/\U&/g' | sed 's/ //g')
  local title=$(echo "$page_name" | sed 's/ / | /')
  
  cat > "$file_path" << PAGE_EOF
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, CheckCircle, Star, Clock, Zap, Shield } from 'lucide-react'

export default function ${function_name}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="Professional ${page_name} solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            ${page_name}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ${page_name} solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Brain className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <BarChart className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Target className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
            <p className="text-gray-300">Optimize your business performance with our advanced solutions.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Globe className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
            <p className="text-gray-300">Expand your business globally with our comprehensive solutions.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Shield className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
            <p className="text-gray-300">Enterprise-grade security to protect your business and data.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with ${page_name}?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
PAGE_EOF
}

# Fix each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing $file..."
    create_clean_page "$file"
  fi
done

echo "All corrupted files have been fixed!"
