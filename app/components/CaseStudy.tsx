import React from 'react'
interface CaseStudyProps {
  company: string
  industry: string
  result: string
  description: string
  metrics: string[]
export default function CaseStudy({
  company,
  industry,
  result,
  description,
  metrics
}: CaseStudyProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
          {industry}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
        <p className="text-green-600 font-medium">{result}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Key Metrics:</h4>
        <ul className="list-disc list-inside space-y-1">
          {metrics.map((metric, index) => (
            <li key={index} className="text-gray-600">{metric}</li>
          ))}
        </ul>
      </div>
    </div>
  )
