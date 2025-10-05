import React from 'react';
import { Link } from 'react-router-dom';
constNewContentAnnouncement: React.FC = () => { 
  return (
    <divclassName = 'bg-gradient-to-rfrom-purple-700via-pink-600to-red-600text-whitepy-3'>
      <divclassName='containermx-autopx-6'>
        <divclassName='flexitems-centerjustify-centergap-4flex-wrap'>
          <divclassName='flexitems-centergap-2'>
            <SparklesclassName='w-5 h-5animate-pulse' />
            <spanclassName='font-boldtext-lg'>
              🔥 OCTOBER2025: MASSIVECONTENTDROP!
            </span>
            <SparklesclassName='w-5 h-5animate-pulse' />
          </div>
          <spanclassName='text-pink-100'>
            10BreakthroughArticles + 8RevolutionaryServices
          </span>
          <Linkto='/blog'
            className='bg-whitetext-purple-700px-4py-1.5rounded-fullfont-semiboldhover:bg-pink-50transition-colorsflexitems-centergap-1text-sm'
          >
            ExploreNow
            <ArrowRight,className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </div > );
 };
exportdefaultNewContentAnnouncement;
