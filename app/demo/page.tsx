
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers } from 'lucide-react'
export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo | Zion Tech Group</title>
        <meta name="description" content="Professional demo solutions for modern businesses." />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional demo solutions for modern businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with demo?
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
'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Play, ArrowRight, CheckCircle} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer   from '../components/Footer'
const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your business intelligence',
      duration: '5 min',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports']},
    {title: 'AI Customer Support Bot',
      description: 'Experience our intelligent customer support automation',
      duration: '3 min',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis']},
    {title: 'AI Content Generation',
      description: 'Watch our AI create high-quality content in seconds',
      duration: '4 min',
      features: ['Blog posts', 'Social media content', 'Product descriptions']}]
  return(<>)
      <Helmet />
        <title>Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, AI solutions demo" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">{/* Header */</div>} <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                See Our <span className="text-cyan-400">Solutions</span> in Action
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.</p>
              </p>
            </div>
            {/* Demo Cards */} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"></div>
              {demos.map((demo, index) => (
                <div key={index}className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300"></div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                    <span className="text-cyan-400 text-sm font-semibold">{demo.duration</span>}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{demo.description</p>}</p>
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex}className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature</span>}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"></button>
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </button>
                </div>
              ))}
            </div>
            {/* CTA Section */} <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to See More?</h2>
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Schedule a personalized demo with our experts to see how our solutions can work for your specific business needs.</p>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Schedule Demo
                  </a>
                  <a
                    href="tel: +13024640950",
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default DemoPage