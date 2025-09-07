import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Research | Zion Tech Group",
  description: "Explore our cutting-edge research in AI, quantum computing, and autonomous systems."
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge research in AI, machine learning, quantum computing, and emerging technologies that are shaping the future of business automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">AI Research</h3>
            <p className="text-gray-300 mb-4">
              Advanced machine learning algorithms and neural network architectures.
            </p>
            <div className="text-blue-400 font-semibold">25+ Patents Filed</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">
              Breakthrough research in quantum algorithms and quantum machine learning.
            </p>
            <div className="text-blue-400 font-semibold">15+ Publications</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Autonomous Systems</h3>
            <p className="text-gray-300 mb-4">
              Self-learning systems and autonomous decision-making frameworks.
            </p>
            <div className="text-blue-400 font-semibold">10+ Active Projects</div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: LightBulbIcon,
                title: 'Artificial Intelligence',
                description: 'Advanced ML algorithms, neural networks, and AI applications for business optimization.'
              },
              {
                icon: AcademicCapIcon,
                title: 'Quantum Computing',
                description: 'Quantum algorithms and applications for solving complex business problems.'
              },
              {
                icon: ChartBarIcon,
                title: 'Data Science',
                description: 'Big data analytics, predictive modeling, and business intelligence solutions.'
              },
              {
                icon: DocumentTextIcon,
                title: 'Process Automation',
                description: 'Intelligent automation systems that streamline business operations.'
              }
            ].map((area, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 mx-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredPapers.map((paper) => (
              <div key={paper.id} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{paper.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        {paper.authors.join(', ')}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <DocumentTextIcon className="h-4 w-4 mr-1" />
                        {paper.journal}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      paper.status === 'Published' 
                        ? 'bg-green-600/20 text-green-400' 
                        : 'bg-yellow-600/20 text-yellow-400'
                    }`}>
                      {paper.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{paper.abstract}</p>
                
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, index) => (
                    <span key={index} className="flex items-center bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Our Research?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented researchers and industry partners to collaborate with on cutting-edge projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              Join Our Research Team
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
