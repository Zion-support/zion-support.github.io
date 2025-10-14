import React from "react";
import { Helmet } from "react-helmet-async";

  if (variant === 'cyber') {
    return (
      <div>{/* Cyber-style loading animation */}</div>
        <div>{/* Outer ring */}</div>
          <div className={`${sizeClasses[size]} border-2 border-transparent border-t-cyan-400 border-r-purple-500 rounded-full animate-spin`}></div>
          {/* Inner ring */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} border-2 border-transparent border-b-pink-500 border-l-green-400 rounded-full animate-spin`} style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        
        {/* Loading text with cyber effect */}"
        <div className="mt-6 text-center">
          <p>{message}</p>
          </p>
          {/* Animated dots */}"
          <div className="flex justify-center mt-2 space-x-1">"
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>"
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>"
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>

        {/* Progress bar */}
        {showProgress && ("
          <div className="w-64 mt-6">"
            <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
              <div "
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${Math.min(100, Math.max(0, progress);}%` }}
              >"
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            <div>{Math.round(progress)}% Complete</div>
            </div>
        )}
      </div>
    );
  }

  // Default variant
  return ("
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}></div>
      {message && (
        <p>{message}</p>
        </p>
      )}
      {showProgress && ("
        <div className="w-48 bg-gray-200 rounded-full h-2 mt-4">
          <div "
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progress);}%` }}
          ></div>
      )}
    </div>
  )</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>}
"
