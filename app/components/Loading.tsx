ursor/website-audit-and-update-with-deployment-a178
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Loading - Zion Tech Group</title>
        <meta name="description" content="Loading page for Zion Tech Group" />
      </Helmet>
      
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the content</p>
      </div>
    </div>
  )
}

export default LoadingPage
