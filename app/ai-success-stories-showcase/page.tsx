import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AISuccessStoriesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const successStories = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Revolution",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "40% production inefficiency and quality control issues",
      solution: "AI-powered predictive maintenance and quality assurance",
      results: {
        costReduction: "60%",
        efficiencyGain: "85%",
        qualityImprovement: "95%",
        timeSaved: "2,000 hours/month"
      },
      category: "manufacturing",
      featured: true,
      image: "/images/success/manufacturing-ai.jpg",
      testimonial: "AI transformed our entire production line. We've achieved unprecedented efficiency and quality."
    },
    {
      id: 2,
      title: "Healthcare AI Breakthrough",
      company: "Metro Health System",
      industry: "Healthcare",
      challenge: "Patient diagnosis delays and resource allocation inefficiencies",
      solution: "AI-driven diagnostic assistance and resource optimization",
      results: {
        diagnosisSpeed: "300%",
        accuracyImprovement: "92%",
        patientSatisfaction: "98%",
        costSavings: "$15M annually"
      },
      category: "healthcare",
      featured: true,
      image: "/images/success/healthcare-ai.jpg",
      testimonial: "Our AI implementation has saved countless lives and transformed patient care."
    },
    {
      id: 3,
      title: "Financial Services Automation",
      company: "Premier Bank",
      industry: "Finance",
      challenge: "Manual processes causing delays and errors in loan processing",
      solution: "Intelligent document processing and risk assessment AI",
      results: {
        processingSpeed: "400%",
        errorReduction: "99%",
        customerSatisfaction: "94%",
        operationalCosts: "-70%"
      },
      category: "finance",
      featured: false,
      image: "/images/success/finance-ai.jpg",
      testimonial: "AI has revolutionized our lending process, delivering faster decisions and better outcomes."
    },
    {
      id: 4,
      title: "Retail Personalization Success",
      company: "TechStyle Retail",
      industry: "Retail",
      challenge: "Low customer engagement and declining sales",
      solution: "AI-powered personalization and recommendation engine",
      results: {
        salesIncrease: "250%",
        customerRetention: "180%",
        engagementRate: "320%",
        revenueGrowth: "$50M"
      },
      category: "retail",
      featured: true,
      image: "/images/success/retail-ai.jpg",
      testimonial: "Our AI personalization engine has transformed customer experience and driven unprecedented growth."
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      company: "Global Logistics Inc",
      industry: "Logistics",
      challenge: "Supply chain disruptions and inventory management issues",
      solution: "AI-powered demand forecasting and route optimization",
      results: {
        deliveryTime: "-50%",
        costReduction: "35%",
        inventoryOptimization: "80%",
        customerSatisfaction: "96%"
      },
      category: "logistics",
      featured: false,
      image: "/images/success/logistics-ai.jpg",
      testimonial: "AI has made our supply chain resilient and efficient beyond our expectations."
    },
    {
      id: 6,
      title: "Energy Sector Transformation",
      company: "GreenPower Solutions",
      industry: "Energy",
      challenge: "Energy waste and inefficient grid management",
      solution: "Smart grid AI and predictive energy management",
      results: {
        energyEfficiency: "45%",
        costSavings: "40%",
        carbonReduction: "60%",
        gridReliability: "99.9%"
      },
      category: "energy",
      featured: false,
      image: "/images/success/energy-ai.jpg",
      testimonial: "AI has enabled us to build a truly sustainable energy future."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Industries', icon: '🌐' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'retail', name: 'Retail', icon: '🛍️' },
    { id: 'logistics', name: 'Logistics', icon: '📦' },
    { id: 'energy', name: 'Energy', icon: '⚡' }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory);

  const featuredStories = successStories.filter(story => story.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium animate-pulse">🏆 SUCCESS STORIES - REAL RESULTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🚀 AI Success Stories Showcase
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Discover how leading companies achieved breakthrough results with AI. 
              Real stories, real metrics, real transformations.
            </p>
            
            {/* Success Metrics */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Success Stories</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">$2.5B+</div>
                <div className="text-sm opacity-90">Cost Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">300%</div>
                <div className="text-sm opacity-90">Avg. ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⭐ Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most impactful AI transformation stories
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredStories.map((story, index) => (
              <div key={story.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{story.title}</h3>
                    <p className="text-sm opacity-90">{story.company}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {story.industry}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                      <p className="text-gray-600 text-sm">{story.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(story.results).slice(0, 4).map(([key, value], idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 text-sm mb-4">
                    "{story.testimonial}"
                  </blockquote>
                  
                  <Link
                    to={`/ai-success-stories-showcase/${story.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                  >
                    Read Full Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Success Stories with Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📊 All Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Filter by industry to find relevant success stories for your business
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                    {categories.find(cat => cat.id === story.category)?.icon || '🏢'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{story.title}</h3>
                    <p className="text-gray-600 text-sm">{story.company}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-xs">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Solution:</h4>
                    <p className="text-gray-600 text-xs">{story.solution}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {Object.entries(story.results).slice(0, 4).map(([key, value], idx) => (
                    <div key={idx} className="bg-gray-50 p-2 rounded text-center">
                      <div className="font-bold text-blue-600 text-sm">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/ai-success-stories-showcase/${story.id}`}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block text-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join these industry leaders and transform your business with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              🚀 Start Your AI Journey
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              📋 View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}