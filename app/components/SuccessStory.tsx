interface SuccessStoryProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
}

export default function SuccessStory({
  company,
  industry,
  challenge,
  solution,
  result,
  metric,
}: SuccessStoryProps) {
  return (
    <div className='bg-white rounded-xl shadow-lg p-8 border border-gray-200'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center'>
          <span className='text-2xl'>🏆</span>
        </div>
        <div>
          <h3 className='text-xl font-bold text-gray-900'>{company}</h3>
          <p className='text-sm text-gray-500'>{industry}</p>
        </div>
      </div>

      <div className='space-y-4'>
        <div>
          <h4 className='font-semibold text-gray-900 mb-2'>Challenge:</h4>
          <p className='text-gray-600 text-sm'>{challenge}</p>
        </div>

        <div>
          <h4 className='font-semibold text-gray-900 mb-2'>Solution:</h4>
          <p className='text-gray-600 text-sm'>{solution}</p>
        </div>

        <div>
          <h4 className='font-semibold text-gray-900 mb-2'>Result:</h4>
          <p className='text-gray-600 text-sm'>{result}</p>
        </div>

        <div className='bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-green-200'>
          <div className='text-2xl font-bold text-green-600 mb-1'>{metric}</div>
          <div className='text-sm text-gray-600'>Key Achievement</div>
        </div>
      </div>
    </div>
  );
}
