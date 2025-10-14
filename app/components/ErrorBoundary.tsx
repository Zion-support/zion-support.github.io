import React from 'react'
const ErrorBoundary: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white">ErrorBoundary</h2>
      <p className="text-gray-300">This is the ErrorBoundary component.</p>
    </div>
  )
}
export default ErrorBoundary