import * as React from "react"
import { Routes, Route } from "react-router-dom"
// Lazy load components for better performance
const LazyHome = React.lazy(() => import('./components/Home'))
const LazyServices = React.lazy(() => import('./components/Services'))
const LazyAbout = React.lazy(() => import('./components/About'))
const LazyContact = React.lazy(() => import('./components/Contact'))

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <React.Suspense fallback={
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/services" element={<LazyServices />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/contact" element={<LazyContact />} />
        </Routes>
      </React.Suspense>
    </div>
  )
}

export default App