<<<<<<< HEAD
import React from 'react';'

export default function Loading() {
}
return (;
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">"
      <div className="text-center">"
        <div className="relative">"
          {/* Spinning circle */}
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>"
          
          {/* Pulse animation */}
          <div className="absolute inset-0 w-16 h-16 border-4 border-blue-100 rounded-full animate-ping mx-auto"></div>"
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h2>"
        <p className="text-gray-600">Preparing your experience</p>"
        
        {/* Loading dots */}
        <div className="flex justify-center space-x-1 mt-4">"
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ "animationDelay": '0ms' }}></div>'
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ "animationDelay": '150ms' }}></div>'
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ "animationDelay": '300ms' }}></div>'
=======
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h2>
        <p className="text-gray-600">Preparing your experience</p>
        {/* Loading dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div 
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" 
            style={{ animationDelay: '0ms' }}
          ></div>
          <div 
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" 
            style={{ animationDelay: '150ms' }}
          ></div>
          <div 
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" 
            style={{ animationDelay: '300ms' }}
          ></div>
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
        </div>
      </div>
    </div>
  );
}
