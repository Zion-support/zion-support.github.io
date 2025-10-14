import React from 'react'
const GlobalErrorBoundary: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white">GlobalErrorBoundary</h2>
      <p className="text-gray-300">This is the GlobalErrorBoundary component.</p>
    </div>
  )
}
export default GlobalErrorBoundary