'use client'
{this.state.errorInfo?.componentStack}
</pre>
</details>
)}
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button
onClick={this.handleReload}
className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
></button>
<RefreshCw className="w-4 h-4" />
<span>Reload Page</span>
</button>
<button
onClick={this.handleGoHome}
className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
></button>
<Home className="w-4 h-4" />
<span>Go Home</span>
</button>
</div>
<div className="mt-6 pt-6 border-t border-white/20">
<p className="text-sm text-gray-400 mb-3">Still having trouble? Contact our support team:</p>p>
<a
href="mailto:kleber@ziontechgroup.com"
className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
<Phone className="w-4 h-4 mr-2" />
kleber@ziontechgroup.com
</a>
</div>
</div>
</div>
)
}
return this.props.children
}
}
export default ErrorBoundary
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
