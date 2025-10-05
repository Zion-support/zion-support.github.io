import React from 'react';
import { Link } from 'react-router-dom';
interfaceLatestContentBannerProps { 
  variant?: 'info' | 'success' | 'warning';
  autoRotate?: boolean;
  rotationInterval?: number;
  className ?  : string;
 }
constLatestContentBanner: React.FC<LatestContentBannerProps> = ({
  variant = 'info'
  className = ''
}) => {
  constvariantStyles = {
    info: 'bg-gradient-to-rfrom-blue-600to-indigo-600'
    success: 'bg-gradient-to-rfrom-green-600to-emerald-600'
    warning: 'bg-gradient-to-rfrom-yellow-600to-orange-600'
  }; return (
    <divclassName = { `${variantStyles[variant] }text-whitep-4 ${className}`}>
      <divclassName = 'containermx-autopx-6'>
        <divclassName='flexitems-centerjustify-betweenflex-wrapgap-4'>
          <divclassName='flexitems-centergap-3'>
            <SparklesclassName='w-6 h-6animate-pulse' />
            <div>
              <h3className='font-boldtext-lg'>
                🔥 NewToday: RuntimeScorecards · EdgeA/B &lt; 100ms · AgentGuardrailsv2
              </h3>
              <pclassName='text-smopacity-90'>
                Nowlive: 3newguides + dozensofupdated insights
              </p>
            </div>
          </div>
          <Linkto='/blog'
            className='bg-whitetext-gray-900px-6py-2rounded-lgfont-semiboldhover:bg-opacity-90transition-allflexitems-centergap-2flex-shrink-0'
          >
            <TrendingUpclassName='w-4 h-4' />
            ExploreNow
          </Link>
        </div>
      </div>
    </div>
  );
};
exportdefaultLatestContentBanner;
