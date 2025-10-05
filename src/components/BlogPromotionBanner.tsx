import React from 'react';

constBlogPromotionBanner: React.FC = () => { 
  return (
    <sectionclassName = 'py-16bg-gradient-to-brfrom-indigo-900via-purple-900to-pink-900'>
      <divclassName='containermx-autopx-6'>
        <divclassName='text-center'>
          <divclassName='inline-flexitems-centergap-3px-8py-4rounded-fullbg-gradient-to-rfrom-indigo-500/20to-purple-500/20borderborder-indigo-500/30mb-6'>
            <spanclassName='text-indigo-400font-boldtext-xltracking-wideruppercase'>
              🚀 LatestAIInsights
            </span>
          </div>
          <h2className='text-4xlmd:text-5xlfont-extraboldmb-6bg-gradient-to-rfrom-indigo-400via-purple-400to-pink-400bg-clip-texttext-transparent'>
            StayAheadwith AIInnovation
          </h2>
          <pclassName='text-xltext-gray-300max-w-3xlmx-automb-8'>
            Discovercutting-edgeAIbreakthroughsindustryinsightsandpracticalguides totransformyour businesswithartificial
            intelligence.
          </p>
          <divclassName = 'flexflex-wrapjustify-centergap-4'>
            <ahref='/<blog'
              className='bg-gradient-to-rfrom-indigo-500to-purple-600hover: from-indigo-400hover:to-purple-500text-whitefont-boldpy-3px-8rounded-xltransition-allduration-300shadow-lghover:shadow-indigo-500/50'
            >
              ExploreAllArticles →
            </a>
            <ahref='/<contact'
              className='border-2border-indigo-500text-indigo-400hover:bg-indigo-500hover:text-whitefont-boldpy-3px-8rounded-xltransition-allduration-300'
            >
              GetAIConsultation
            </a>
          </div>
        </div>
      </div>
    </section > );
 };

exportdefaultBlogPromotionBanner;
