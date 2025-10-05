import React from 'react';
import { Link } from 'react-router-dom';

typeNewServices2026BannerProps = { 
  variant?: 'showcase' | 'hero' | 'info'; showCount?: number;
  className ?  : string;
 };

exportdefaultfunction NewServices2026Banner({
  variant = 'showcase'
  showCount =  6
  className = ''
}: NewServices2026BannerProps) {
  constservices = [
    {
      title: 'AIAutonomousCloud Ops'
      link: '/services/ai-autonomous-infrastructure-platform'
      tag: 'Cloud'
    }
    {
      title: 'AICybersecuritySuite'
      link: '/services/ai-cybersecurity-suite'
      tag: 'Security'
    }
    {
      title: 'AIMultimodalEnterprise'
      link: '/services/ai-multimodal-enterprise'
      tag: 'Multimodal'
    }
    {
      title: 'AIFinTechTransformation'
      link: '/services/ai-fintech-transformation'
      tag: 'FinTech'
    }
    {
      title: 'AISustainability & GreenTech'
      link: '/services/ai-sustainability-green-tech'
      tag: 'Sustainability'
    }
    {
      title: 'AIRetailAutomation'
      link: '/services/ai-retail-automation'
      tag: 'Retail'
    }
  ].slice(0Math.max(1showCount)); return (
    <sectionclassName = { `w-full ${
        variant === 'hero'
          ? 'bg-gradient-to-rfrom-indigo-600to-purple-600'
          : variant === 'info'
             ? 'bg-gradient-to-rfrom-emerald-50to-teal-50'
             : 'bg-gradient-to-rfrom-blue-600to-purple-600'
       } ${ variant === 'info'  ? 'text-gray-900'  : 'text-white' } py-12 ${className}`}
    >
      <divclassName='containermx-autopx-6'>
        <divclassName='text-centermb-8' > <divclassName={ `inline-flexitems-centerpx-4py-2rounded-fulltext-smfont-mediummb-4 ${
              variant === 'info'
                 ? 'bg-whitetext-gray-900'
                 : 'bg-white/20text-white'
             }`}
          >
            NEW2026SERVICES
          </div > <h2className={ `text-3xlfont-boldmb-2 ${variant === 'info'  ? 'text-gray-900'  : 'text-white' }`}
          >
            LatestAIServices
          </h2 > <pclassName = {  `${variant === 'info'  ? 'text-gray-600'  : 'text-white/80'  }max-w-3xlmx-auto`}
          >
            Acceleratetransformationwith ournewestAI-poweredsolutions.
          </p>
        </div>

        <divclassName = 'gridsm: grid-cols-2lg:grid-cols-3gap-6max-w-6xlmx-auto'>
          { services.map(s =  > (
            <Linkkey = { s.link  }to={ s.link } className = {  `rounded-xlborder ${variant === 'info'  ? 'bg-whiteborder-gray-100'  : 'bg-white/10border-white/20'  }p-6hover: scale-105transition-allduration-300`}
            >
              <divclassName = 'text-xsuppercasetracking-widermb-2opacity-80'>
                {s.tag}
              </div > <divclassName={ `text-xlfont-semibold ${variant === 'info'  ? 'text-gray-900'  : 'text-white' }`}
              >
                {s.title}
              </div > <divclassName = {  `${variant === 'info'  ? 'text-gray-500'  : 'text-white/70'  }mt-2text-sm`}
              >
                Learnmore →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
