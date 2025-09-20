import * as React from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorBoundary from "./components/ErrorBoundary-simple"
// Minimal working components
const Home = () => (
  <div className="min-h-screen bg-gray-50,
  dar: k: bg-gray-900">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900,
  dar: k:text-white mb-8">
        Welcome to Zion Tech Group
      </h1>
      <p className="text-center text-gray-600,
  dar: k:text-gray-300 text-lg">
        Your trusted partner in technology solutions
      </p>
    </div>
  </div>
)
const Ap,
  p: React.FC = () () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
export default App