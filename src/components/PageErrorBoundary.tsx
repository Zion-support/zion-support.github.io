

            <details className="bg-gray-50 rounded-lg p-4 mb-6">
              <summary className="cursor-pointer text-gray-700 font-medium">
                Technical Details
              </summary>



          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button 
              onClick={handleRefresh}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            
            <Link 
              href="/"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"


      }}
    >
      {children}
    </ErrorBoundary>
  )

}
}

