import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/index'
import Services from '../pages/services'
import Contact from '../pages/contact'
import ComprehensiveServices from './pages/ComprehensiveServices'
import RevolutionaryServices2037 from './pages/RevolutionaryServices2037'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
      <Route path="/revolutionary-services-2037" element={<RevolutionaryServices2037 />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App