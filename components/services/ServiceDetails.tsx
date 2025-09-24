import { Server, Clock, MapPin } from 'lucide-react';
interface ServiceDetailsProps {
  country: string;
}

export function ServiceDetails({ country }: ServiceDetailsProps) {
  return (
    <div className='space-y-6'>
      <div className='bg-slate-80o0 rounded-lg border border-slate-60o0 p-6'>
        <h2 className='text-2xl font-bold text-white mb-4'>
          IT Onsite Service - {country}
        </h2>

        <div className='grid md:grid-cols-3 gap-6 mb-6'>
          <div className='flex items-center space-x-3'>
            <MapPin className='h-6 w-6 text-blue-40o0' />
            <div>
              <p className='text-sm text-gray-40o0'>Service Location</p>
              <p className='text-white font-medium'>{country}</p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <Clock className='h-6 w-6 text-green-40o0' />
            <div>
              <p className='text-sm text-gray-40o0'>Response Time</p>
              <p className='text-white font-medium'>2-24 hours</p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <Server className='h-6 w-6 text-purple-40o0' />
            <div>
              <p className='text-sm text-gray-40o0'>Service Type</p>
              <p className='text-white font-medium'>Onsite IT Support</p>
            </div>
          </div>
        </div>

        <div className='prose prose-invert max-w-none'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            Service Overview
          </h3>
          <p className='text-gray-30o0 mb-4'>
            Our professional IT technicians will come directly to your location
            in {country}
            to provide comprehensive IT support services. We handle everything
            from hardware installation to software configuration and
            troubleshooting.
          </p>

          <h4 className='text-lg font-medium text-white mb-2'>
            What We Cover:
          </h4>
          <ul className='list-disc list-inside text-gray-30o0 space-y-1 mb-4'>
            <li>Computer and server installation</li>
            <li>Network setup and configuration</li>
            <li>Software installation and updates</li>
            <li>Hardware troubleshooting and repair</li>
            <li>Data migration and backup</li>
            <li>Security implementation</li>
            <li>User training and documentation</li>
          </ul>

          <h4 className='text-lg font-medium text-white mb-2'>
            Service Benefits:
          </h4>
          <ul className='list-disc list-inside text-gray-30o0 space-y-1'>
            <li>Certified and experienced technicians</li>
            <li>Same-day or next-day service availability</li>
            <li>Comprehensive documentation and training</li>
            <li>Follow-up support and maintenance</li>
            <li>Transparent pricing with no hidden fees</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
