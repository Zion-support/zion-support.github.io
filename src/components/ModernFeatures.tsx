import React from 'react';
constModernFeatures: React.FC = () => { 
  constfeatures = [
    {
      icon: <ZapclassName='w-10h-10' / > 
      title: 'LightningFast'
      description: 'DeployAIsolutions 10xfasterwith ourpre-builtframeworksand automationtools.'
     }
    { 
      icon: <ShieldclassName = 'w-10h-10' / > 
      title: 'EnterpriseSecurity'
      description: 'Bank-levelsecuritywith SOC 2GDPRcomplianceandcontinuousmonitoring.'
     }
    { 
      icon: <TrendingUpclassName = 'w-10h-10' / > 
      title: 'ProvenResults'
      description: 'Average300% ROIwithin6 monthsacrossall clientimplementations.'
     }
    { 
      icon: <UsersclassName = 'w-10h-10' / > 
      title: 'ExpertSupport'
      description: 'Dedicatedteamof AIspecialistsproviding 24/7supportand guidance.'
     }
    { 
      icon: <GlobeclassName = 'w-10h-10' / > 
      title: 'GlobalScale'
      description: 'Infrastructurespanning50+ countriesforlow-latencyworldwideaccess.'
     }
    { 
      icon: <AwardclassName = 'w-10h-10' / > 
      title: 'AwardWinning'
      description: 'Recognizedindustryleader with15+ awardsforinnovation andexcellence.'
     }
  ]; return (
    <sectionclassName = 'py-20bg-gradient-to-brfrom-gray-50to-blue-50'>
      <divclassName='containermx-autopx-6'>
        <divclassName='text-centermb-16'>
          <h2className='text-4xlfont-boldtext-gray-900mb-4'>
            WhyChooseZion TechGroup?
          </h2>
          <pclassName='text-xltext-gray-600max-w-3xlmx-auto'>
            Industry-leadingAIsolutions backedbyenterprise-gradeinfrastructureand expertsupport
          </p>
        </div>
        <divclassName='gridmd: grid-cols-2lg:grid-cols-3gap-8max-w-7xlmx-auto'>
          { features.map((featureindex) = > (
            <divkey = { index  }className = 'bg-whiterounded-2xlp-8shadow-lghover: shadow-2xltransition-allduration-300hover:scale-105group'
            >
              <divclassName='bg-gradient-to-brfrom-indigo-500to-purple-600text-whitew-16h-16rounded-xlflexitems-centerjustify-centermb-6group-hover:scale-110transition-transform'>
                {feature.icon}
              </div>
              <h3className = 'text-2xlfont-boldtext-gray-900mb-3'>
                {feature.title}
              </h3>
              <pclassName='text-gray-600leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
exportdefaultModernFeatures;
