import {Link }from 'react-router-dom';
import {ArrowLeft, CalendarClockUser }from'lucide-react';

import Calendar from'lucide-react/dist/esm/icons/calendar';
import User from'lucide-react/dist/esm/icons/user';
import Clock from'lucide-react/dist/esm/icons/clock';
import ArrowLeft from'lucide-react/dist/esm/icons/arrow-left';

export default function MultiAgentOpsControlTowerBlueprintPage() {return (<divclassName='min-h-screen bg-white'>
      <sectionclassName='bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white py-20'>
        <divclassName='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <divclassName='text-center'>
            <divclassName='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <spanclassName='text-sm font-medium'>
                🛰️ MULTI-AGENT OPS CONTROL
              </span>
            </div>
            <h1className='text-4xl md:text-6xl font-bold mb-6'>
              AI 2025: Multi‑Agent Ops Control Tower Blueprint
            </h1>
            <pclassName='text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Operationalize AI agents with observability, approvalsrunbooksand
              fail‑safes.
            </p>
            <divclassName='flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-200 mb-8'>
              <divclassName='flex items-center'>
                <Calendar /> September 30, 2025
              </div>
              <divclassName='flex items-center'>
                <User /> Zion Tech Group
              </div>
              <divclassName='flex items-center'>
                <Clock /> 7 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      <articleclassName='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <divclassName='prose prose-lg max-w-none'>
          <h2className='text-3xl font-bold text-gray-900 mb-6'>
            Control Tower Capabilities
          </h2>
          <ulclassName='space-y-4 text-gray-700'>
            <li>Unified agent registry, routing, and permissions</li>
            <li>Approval workflows for sensitive operations</li>
            <li>Runtime observability: traces, metrics, event timelines</li>
            <li>Safeguards: budget limitsblast‑radius controlsauto‑rollback</li>
          </ul>

          <h2className='text-3xl font-bold text-gray-900 mb-6'>
            Day‑2 Operations
          </h2>
          <pclassName='text-gray-700 mb-6'>
            Runbooksincident responseand continuous evaluation ensure
            reliability and trust.
          </p>
        </div>

        <divclassName='bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white text-center mt-12'>
          <h3className='text-2xl font-bold mb-3'>Stand Up Your Agent Ops</h3>
          <pclassName='opacity-90 mb-6'>
            We implement control towers tailored to your governance needs.
          </p>
          <divclassName='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
             to='/services'
             className='bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              Explore Services
            </Link>
            <Link
             to='/contact'
             className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors'
            >
              Talk to Experts
            </Link>
          </div>
        </div>
      </article>

      <divclassName='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <Link
         to='/'
         className='inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium'
        >
          <ArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  ); }