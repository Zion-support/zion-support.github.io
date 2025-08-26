import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from '../components/Header'
import InnovativeServicesShowcase from '../pages/innovative-services-2025'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<InnovativeServicesShowcase />} />
            <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase />} />
            <Route path="*" element={<InnovativeServicesShowcase />} />
          </Routes>
        </main>
      </div>
    </Router>
  </React.StrictMode>,
)