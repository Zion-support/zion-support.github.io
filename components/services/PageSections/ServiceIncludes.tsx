import { Check } from 'lucide-react'

export function ServiceIncludes() {
  return (
    <div className='bg-slate-800 rounded-lg border border-slate-600 p-8 my-20'>
      <h2 className='text-2xl font-bold text-white mb-6 text-center'>
        What's Included in Our IT Onsite Service
      </h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-4'>
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-white font-medium'>Transportation to Site</h3>
              <p className='text-zion-slate-light'>
                All travel costs to your location are included in the base price.
              </p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='mt-1 mr-4'>
              <Check className='h-5 w-5 text-zion-cyan' />
            </div>
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Software Configuration</h3>
              <p className='text-gray-300'>Installation and configuration of operating systems, applications, and security software.</p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='mt-1 mr-4'>
              <Check className='h-5 w-5 text-zion-cyan' />
            </div>
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Network Setup</h3>
              <p className='text-gray-300'>Complete network infrastructure setup including routers, switches, and wireless access points.</p>
            </div>
          </div>
          
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Troubleshooting</h3>
              <p className='text-gray-300'>Diagnosis and resolution of hardware and software issues on-site.</p>
            </div>
          </div>
        </div>
        
        <div className='space-y-4'>
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-white font-medium'>Basic Hardware Diagnostics</h3>
              <p className='text-zion-slate-light'>
                Component testing and hardware issue identification.
              </p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='mt-1 mr-4'>
              <Check className='h-5 w-5 text-zion-cyan' />
            </div>
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Security Implementation</h3>
              <p className='text-gray-300'>Setup of firewalls, antivirus software, and security protocols.</p>
            </div>
          </div>
          
          <div className='flex items-start'>
            <div className='mt-1 mr-4'>
              <Check className='h-5 w-5 text-zion-cyan' />
            </div>
            <div>
              <h3 className='text-white font-medium'>Service Documentation</h3>
              <p className='text-zion-slate-light'>
                Detailed report of work performed and recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}