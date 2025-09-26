'use client';

interface SuccessStoryCardProps {
  company: string;
  industry: string;
  result: string;
  description: string;
  savings: string;
}

export default function SuccessStoryCard({ 
  company, 
  industry, 
  result, 
  description, 
  savings 
}: SuccessStoryCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-300 h-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{company}</h3>
            <p className="text-sm text-gray-600">{industry}</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-lg">✓</span>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <div className="text-lg font-bold text-green-700 mb-1">{result}</div>
          <div className="text-sm text-green-600">{savings}</div>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex items-center text-sm text-gray-500">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            Success Story
          </span>
        </div>
      </div>
    </div>
  );
}