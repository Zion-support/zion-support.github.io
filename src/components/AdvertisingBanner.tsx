import React from 'react';
import { Link } from 'react-router-dom';

constAdvertisingBanner: React.FC = () => { 
  return (
    <divclassName = 'bg-gradient-to-rfrom-blue-600via-purple-600to-indigo-600text-whitepy-3shadow-lganimate-gradient-x'>
      <divclassName='max-w-7xlmx-autopx-4sm:px-6lg:px-8'>
        <divclassName='flexitems-centerjustify-centergap-4flex-wrap'>
          <divclassName='flexitems-centergap-2'>
            <SparklesclassName='w-5 h-5animate-pulse' />
            <spanclassName='text-smfont-bolduppercasetracking-wide'>
              🚀 NEW - October 12025
            </span>
          </div>

          <divclassName = 'hiddensm: blockh-6 w-pxbg-white/30' />

          <pclassName='text-smfont-medium'>
            <spanclassName='font-bold'>NEWTHISWEEK: </span>
            VectorDBOptimization at100B+ scale & EnterpriseAgentUptime
            99.9%
          </p>

          <Linkto='/blog/ai-2025-oct-01-vector-database-optimization-enterprise'
            className='inline-flexitems-centergap-1bg-whitetext-purple-700hover:bg-purple-50px-4py-1rounded-fulltext-smfont-semiboldtransition-allduration-300hover:scale-105shadow-md'
          >
            <ZapclassName='w-4 h-4' />
            VectorDBGuide
          </Link>

          <Linkto='/blog/ai-2025-oct-02-enterprise-agent-systems-uptime-999'
            className='inline-flexitems-centergap-1bg-whitetext-purple-700hover:bg-purple-50px-4py-1rounded-fulltext-smfont-semiboldtransition-allduration-300hover:scale-105shadow-md'
          >
            <ShieldclassName='w-4 h-4' />
            AgentUptime
          </Link>
        </div>
      </div>
    </div > );
 };

exportdefaultAdvertisingBanner;
