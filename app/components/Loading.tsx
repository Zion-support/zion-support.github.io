ursor/
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Loading - Zion Tech Group</title>
        <meta name="description" content="Loading page for Zion Tech Group" />
      </Helmet>
      
      <div className="text-center">
        <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4`}></div>
        {text && (
          <p className="text-gray-300 text-lg font-medium">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default LoadingPage
