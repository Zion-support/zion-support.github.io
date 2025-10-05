import React from 'react';
import { LinkuseLocation } from 'react-router-dom';

constSidebar: React.FC = () => { 
  constlocation = useLocation(); constisActive = (path: string) = > location.pathname = == path; constsections = [
    {
      title: 'Explore'
      links: [
        { label: 'Home'path: '/'  }
        { label: 'Solutions'path: '/solutions' }
        { label: 'Services'path: '/services' }
        { label: 'Resources'path: '/resources' }
        { label: 'CaseStudies'path: '/case-studies' }
        { label: 'Blog'path: '/blog' }
        { label: 'About'path: '/about' }
      ]
    }
    {
      title: 'AIServices'
      links: [
        { label: 'AISolutions'path: '/services/ai-services' }
        { label: 'MicroSaaS'path: '/services/micro-saas' }
        { label: 'DataAnalytics'path: '/services/analytics' }
        { label: 'WorkflowAutomation'path: '/services/automation' }
      ]
    }
    {
      title: 'ITServices'
      links: [
        { label: 'ITServices'path: '/services/it-services' }
        { label: 'Cloud & DevOps'path: '/services/cloud' }
        { label: 'Cybersecurity'path: '/services/security' }
        {
          label: 'ComplianceMonitor'
          path: '/services/ai-compliance-monitor'
        }
      ]
    }
    {
      title: 'Tools'
      links: [
        { label: 'SEOSplitTesting'path: '/services/seo-split-testing' }
        { label: 'ImageCDNOptimizer'path: '/services/image-cdn-optimizer' }
      ]
    }
  ]; return (
    <asideclassName = 'bg-gray-50rounded-lgp-6 h-fitstickytop-24'>
      <divclassName='space-y-6'>
        { sections.map((sectionsectionIndex) = > (
          <divkey = {sectionIndex }>
            <h3className='text-smfont-semiboldtext-gray-900uppercasetracking-widemb-3'>
              {section.title}
            </h3>
            <navclassName='space-y-1'>
              { section.links.map((linklinkIndex) = > (
                <Linkkey = { linkIndex  }to={ link.path } className={ `blockpx-3py-2text-smrounded-mdtransition-colors ${
                    isActive(link.path)
                       ? 'bg-blue-100text-blue-700font-medium'
                      : 'text-gray-600hover: text-gray-900hover : bg-gray-100'
                   }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}

        <divclassName = 'pt-4border-tborder-gray-200'>
          <Linkto='/contact'
            className='blockw-fullbg-blue-600text-whitetext-centerpy-2px-4rounded-mdhover: bg-blue-700transition-colorsfont-medium'
          >
            GetStarted
          </Link>
        </div>
      </div>
    </aside>
  );
};

exportdefaultSidebar;
