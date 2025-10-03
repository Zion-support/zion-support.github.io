import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white max-w-4xl mx-auto p-8">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Zion Tech Group
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Revolutionary AI Solutions for Enterprise
      </p>
      <p className="text-lg text-gray-400 mb-12">
        Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations.
        Experience 2000x processing speed and 99.9% automation rates.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
          Get Started
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
)

// Simple About component
const About = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
      <p className="text-lg text-gray-600">
        We are pioneers in AI and quantum computing solutions, delivering transformative technology 
        that empowers enterprises to achieve unprecedented levels of automation and intelligence.
      </p>
    </div>
  </div>
)

// Simple Contact component
const Contact = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-4">
        Ready to transform your business with AI?
      </p>
      <p className="text-gray-600">
        Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a>
      </p>
      <p className="text-gray-600">
        Phone: <a href="tel:+1-302-464-0950" className="text-blue-600 hover:underline">+1-302-464-0950</a>
      </p>
    </div>
  </div>
)

// 404 component
const NotFound = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4">
        Go Back
      </button>
      <button
        onClick={() => window.location.href = '/'}
        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
        Go Home
      </button>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App