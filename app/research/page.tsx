<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';'
=======
import React from 'react'
import { Metadata } from 'next'
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export const metadata = {
  }
  "title": "Research | Zion Tech Group","
  "description": "Explore our cutting-edge research in AI, quantum computing, and autonomous systems.""
};

export default function ResearchPage() {

}

return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl "md":text-5xl font-bold text-white mb-6">"
            Research & Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
            Driving the future of technology through cutting-edge research in AI, quantum computing, and autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8 mb-16">"
          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-xl font-bold text-white mb-4">AI Research</h3>"
            <p className="text-gray-300 mb-4">"
              Advanced machine learning algorithms and neural network architectures.
            </p>
            <div className="text-blue-400 font-semibold">25+ Patents Filed</div>"
          </div>

          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-xl font-bold text-white mb-4">Quantum Computing</h3>"
            <p className="text-gray-300 mb-4">"
              Breakthrough research in quantum algorithms and quantum machine learning.
            </p>
            <div className="text-blue-400 font-semibold">15+ Publications</div>"
          </div>

          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-xl font-bold text-white mb-4">Autonomous Systems</h3>"
            <p className="text-gray-300 mb-4">"
              Self-learning systems and autonomous decision-making frameworks.
            </p>
            <div className="text-blue-400 font-semibold">10+ Active Projects</div>"
          </div>
        </div>

        <div className="text-center">"
          <h2 className="text-3xl font-bold text-white mb-6">Research Partnerships</h2>"
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">"
            We collaborate with leading universities and research institutions worldwide to advance the frontiers of technology.
          </p>
          
          <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
            <div className="text-center">"
              <h3 className="text-xl font-bold text-white mb-2">Stanford University</h3>"
              <p className="text-gray-300">AI & Machine Learning</p>"
            </div>
            <div className="text-center">"
              <h3 className="text-xl font-bold text-white mb-2">MIT</h3>"
              <p className="text-gray-300">Quantum Computing & AI</p>"
            </div>
            <div className="text-center">"
              <h3 className="text-xl font-bold text-white mb-2">University of Oxford</h3>"
              <p className="text-gray-300">AI Ethics & Governance</p>"
            </div>
          </div>
        </div>
=======
import React from 'react';
import { Metadata } from 'next';

export const metadata = {
  title: 'Research & Development | Zion Tech Group',
  description: 'Explore our cutting-edge research and development initiatives in AI, quantum computing, and emerging technologies.',
  keywords: 'research, development, AI research, quantum computing, innovation, technology',
  openGraph: {
    title: 'Research & Development | Zion Tech Group',
    description: 'Explore our cutting-edge research and development initiatives in AI, quantum computing, and emerging technologies.',
    type: 'website',
  },
};

const researchAreas = [
  {
    title: 'Artificial Intelligence',
    description: 'Advancing the frontiers of AI through machine learning, neural networks, and cognitive computing.',
    metrics: [
      { metric: 'Patents Filed', value: '25+', description: 'Intellectual property protecting our innovations' },
      { metric: 'Research Papers', value: '50+', description: 'Published in top-tier conferences and journals' },
      { metric: 'AI Models', value: '100+', description: 'Production-ready models deployed across industries' }
    ]
  },
  {
    title: 'Quantum Computing',
    description: 'Pioneering quantum algorithms and hardware for next-generation computing solutions.',
    metrics: [
      { metric: 'Quantum Algorithms', value: '15+', description: 'Novel algorithms for real-world applications' },
      { metric: 'Qubit Systems', value: '1000+', description: 'Scalable quantum computing architectures' },
      { metric: 'Quantum Networks', value: '5+', description: 'Secure quantum communication protocols' }
    ]
  },
  {
    title: 'Edge Computing',
    description: 'Optimizing computing power at the edge for faster, more efficient data processing.',
    metrics: [
      { metric: 'Edge Nodes', value: '10K+', description: 'Deployed across global infrastructure' },
      { metric: 'Latency Reduction', value: '90%', description: 'Average improvement in response times' },
      { metric: 'Energy Efficiency', value: '75%', description: 'Reduction in power consumption' }
    ]
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are at the forefront of technological innovation, pushing the boundaries 
            of what's possible in AI, quantum computing, and emerging technologies.
          </p>
        </div>

        {/* Research Areas */}
        <div className="space-y-16">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{area.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{area.description}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {area.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Research Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented researchers and engineers to join our mission 
            of advancing technology for the betterment of society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Research Team
            </a>
          </div>
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}