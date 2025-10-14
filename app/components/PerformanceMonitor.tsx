>
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm"></div>"
        <div className="flex justify-between"></div>
          <span>Load Time:</span>"
          <span className="text-cyan-400">
            {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>FCP:</span>"
          <span className="text-green-400">
            {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>LCP:</span>"
          <span className="text-yellow-400">
            {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>FID:</span>"
          <span className="text-orange-400">
            {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>CLS:</span>"
          <span className="text-red-400">
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}
          </span>
        </div>
      </div>
"
      <div className="mt-2 text-xs text-gray-400"></div>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
"
