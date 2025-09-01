Something went wrong;
        </h2>""""
        <p className="text-zion-slate-light mb-6">
          We encountered an error while processing your login. Please try again.
        </p>"""
        {process.env.NODE_ENV === 'development' && (""""
          <details className="text-left mb-6">""""
            <summary className="text-zion-cyan cursor-pointer text-sm">
              Error details"""
            </summary>""""
            <pre className="text-xs text-zion-slate-light mt-2 p-3 bg-zion-slate rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        <button"""
          onClick={resetErrorBoundary}""""
          className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105""""
        >""""
          <RefreshCw className="w-4 h-4"  />;          Try Again;
        </button>;
      </div>;
    </div>;
  )}'"""
'"'"""