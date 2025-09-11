import React from 'react';
interface CaseStudyProps {
company: string;
  industry: string;
  result: string;
  description: string;}
  metrics: string[];}
}
export default function CaseStudy({
  company,
  industry,
  result,
  description}
  metrics}
}: CaseStudyProps) {

  return (
    <div className=\"bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow\"    />"
      <div className=\"mb-4\"    />}
        <h3 className=\"text-xl font-bold text-gray-900 mb-1\"    />{company}
}</h3>
        <p className=\"text-sm text-gray-500 mb-2\"    />{industry}</p>
        <p className=\"text-lg font-semibold text-blue-600\"    />{result}</p>
      </div>
      <p className=\"text-gray-600 mb-4 leading-relaxed\"    />{description}</p>
      <div className=\"space-y-2\"    />"
        {metrics.map((metric, index) => (}
          <div key={index} className=\"flex items-center text-sm text-gray-700\"    />"
            <div className=\"w-2 h-2 bg-blue-500 rounded-full mr-2\"    /></div>
            {metric}
          </div>
        ))}
      </div>
    </div>

  );
}

