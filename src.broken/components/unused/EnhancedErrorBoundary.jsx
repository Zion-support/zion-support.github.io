  scale: 1


          <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
          <p className="text-gray-600 mb-6">
            We're sorry, but something unexpected happened.Please try refreshing the page.</p>


          {process.env.NODE_ENV === 'development' && error && (
            <details className="mt-6 text-left">
