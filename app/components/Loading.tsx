import React from 'react'
import { Loader2 } from 'lucide-react'

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Loading...
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please wait while we load the content
        </p>
      </div>
    </div>
  )
}

export default Loading