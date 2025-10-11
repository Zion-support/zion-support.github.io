import React from 'react'

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-cyan-400 text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}

export const Spinner: React.FC = () => {
  return (
    <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  )
}

export const LoadingButton: React.FC<{ loading: boolean; children: React.ReactNode; className?: string }> = ({ loading, children, className = '' }) => {
  return (
    <button className={`relative ${className}`} disabled={loading}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  )
}
