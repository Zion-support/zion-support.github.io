import { Check } from 'lucide-react'

export function ServiceIncludes() {
  return (
    <div className='bg-slate-800 rounded-lg border border-slate-700 p-8 my-20'>
      <h2 className='text-2xl font-bold text-white mb-6'>What's Included</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex items-start space-x-3'>
          <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
          <div>
            <h3 className='text-lg font-semibold text-white'>Hardware Diagnostics</h3>
            <p className='text-gray-300 text-sm'>Complete system health check and hardware troubleshooting</p>
          </div>
        </div>
        <div className='flex items-start space-x-3'>
          <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
          <div>
            <h3 className='text-lg font-semibold text-white'>Software Installation</h3>
            <p className='text-gray-300 text-sm'>Professional software setup and configuration</p>
          </div>
        </div>
        <div className='flex items-start space-x-3'>
          <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
          <div>
            <h3 className='text-lg font-semibold text-white'>Network Setup</h3>
            <p className='text-gray-300 text-sm'>Network configuration and connectivity troubleshooting</p>
          </div>
        </div>
        <div className='flex items-start space-x-3'>
          <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
          <div>
            <h3 className='text-lg font-semibold text-white'>Data Recovery</h3>
            <p className='text-gray-300 text-sm'>Emergency data recovery and backup solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}