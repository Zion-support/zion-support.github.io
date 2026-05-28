import Link from 'next/link'

export default function SEOCheckResult({ result }) {
  if (!result) {
    return <div className="text-center py-8">No SEO data available</div>;
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        SEO Analysis Results
      </h2>
      
      {result.score !== undefined && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Score</h3>
          <div className="flex items-center gap-4">
            <div className="w-32 h-10 bg-gray-100 rounded-full relative">
              <div className="absolute left-0 top-0 h-full" 
                   style={{ width: `${Math.min(100, Math.max(0, result.score))}%`, 
                          backgroundColor: result.score >= 80 ? 'bg-green-500' : 
                                 result.score >= 60 ? 'bg-yellow-500' : 'bg-red-500' }}
              ></div>
            </div>
            <span className="font-bold text-gray-900">{result.score}%</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">{result.score >= 80 ? 'Excellent' : result.score >= 60 ? 'Good' : 'Needs Improvement'}</p>
        </div>
      )}
      
      {result.details && Object.keys(result.details).length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Details</h3>
          <div className="space-y-3">
            {Object.entries(result.details).map(([key, value], index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){return str.toUpperCase();})}:</span>
                <span className="monospace">{typeof value === 'object' ? JSON.stringify(value) : String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {result.recommendations && result.recommendations.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommendations</h3>
          <ul className="list-disc list-inside space-y-2">
            {result.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
      
      {result.issues && result.issues.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Issues Found</h3>
          <ul className="list-disc list-inside space-y-2">
            {result.issues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
