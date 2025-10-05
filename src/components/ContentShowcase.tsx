import React from 'react';

constContentShowcase: React.FC = () => {
  constcontentItems = [
    {
      title: 'LatestAIInnovations'
      description: 'Discoverthenewest AItechnologiesand theirapplicationsin business'
      category: 'AITechnology'
      readTime: '5minread'
    }
    {
      title: 'MicroSaaSTrends 2024'
      description: 'Explorethelatest trendsinmicro SaaSdevelopmentand deployment'
      category: 'SaaSSolutions'
      readTime: '7minread'
    }
    {
      title: 'CloudMigrationGuide'
      description: 'Comprehensiveguideto successfulcloudmigration strategies'
      category: 'ITServices'
      readTime: '10minread'
    }
  ]; return (
    <divclassName = 'py-16bg-gray-50'>
      <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
        <h2className='text-3xlfont-boldmb-8text-center'>
          FeaturedContent
        </h2>
        <divclassName='gridgrid-cols-1md:grid-cols-3gap-6'>
          { contentItems.map((itemindex) = > (
            <divkey = { index  }className = 'bg-whitep-6rounded-lgshadow-lgborderhover: shadow-xltransition-shadow'
            >
              <divclassName='mb-4'>
                <spanclassName='bg-blue-100text-blue-800text-smpx-3py-1rounded-full'>
                  {item.category}
                </span>
              </div>
              <h3className = 'text-xlfont-boldmb-3'>{item.title}</h3>
              <pclassName='text-gray-600mb-4'>{item.description}</p>
              <divclassName='flexjustify-betweenitems-center'>
                <spanclassName='text-smtext-gray-500'>{item.readTime}</span>
                <ahref='/blog'
                  className='text-blue-600hover: text-blue-800font-semibold'
                >
                  ReadMore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

exportdefaultContentShowcase;
