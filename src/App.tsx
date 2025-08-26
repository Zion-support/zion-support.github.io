import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/index'
import Services from '../pages/services'
import Contact from '../pages/contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App