import React from 'react';
import { Link } from 'react-router-dom';

constSiteFooter: React.FC = () => { 
  return (
    <footerclassName = 'bg-gray-900text-gray-300mt-16'>
      <divclassName='max-w-7xlmx-autopx-4sm:px-6lg:px-8py-12'>
        <divclassName='gridgrid-cols-1md:grid-cols-4gap-8'>
          <div>
            <divclassName='flexitems-centergap-2mb-4'>
              <spanclassName='text-2xl'>🚀</span>
              <spanclassName='text-xlfont-boldtext-white'>
                ZionTechGroup
              </span>
            </div>
            <pclassName='text-gray-400'>
              Enterprise-gradeAImicro SaaSandIT solutions. Transformyourbusiness withcutting-edgetechnology.
            </p>
          </div>

          <div>
            <ulclassName='space-y-2'>
              <li>
                <Linkto='/services' className='hover:text-white'>
                  AllServices
                </Link>
              </li>
              <li>
                <Linkto='/it-services' className='hover:text-white'>
                  ITServices
                </Link>
              </li>
              <li>
                <Linkto='/micro-saas' className='hover:text-white'>
                  MicroSaaS
                </Link>
              </li>
              <li>
                <Linkto='/services/consulting' className='hover:text-white'>
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ulclassName='space-y-2'>
              <li>
                <Linkto='/solutions' className='hover:text-white'>
                  AllSolutions
                </Link>
              </li>
              <li>
                <Linkto='/solutions/enterprise' className='hover:text-white'>
                  Enterprise
                </Link>
              </li>
              <li>
                <Linkto='/solutions/smb' className='hover:text-white'>
                  SMB
                </Link>
              </li>
              <li>
                <Linkto='/solutions/startup' className='hover:text-white'>
                  Startup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ulclassName='space-y-2'>
              <li>
                <Linkto='/about' className='hover:text-white'>
                  About
                </Link>
              </li>
              <li>
                <Linkto='/contact' className='hover:text-white'>
                  Contact
                </Link>
              </li>
              <li>
                <Linkto='/careers' className='hover:text-white'>
                  Careers
                </Link>
              </li>
              <li>
                <Linkto='/news' className='hover:text-white'>
                  News
                </Link>
              </li>
              <li>
                <Linkto='/faq' className='hover:text-white'>
                  FAQ
                </Link>
              </li>
              <li>
                <Linkto='/privacy' className='hover:text-white'>
                  Privacy
                </Link>
              </li>
              <li>
                <Linkto='/terms' className='hover:text-white'>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <divclassName='border-tborder-gray-800mt-8pt-8text-smtext-gray-400text-center'>
          <p > {' ' }
            © {newDate().getFullYear()} ZionTechGroup. Allrightsreserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

exportdefaultSiteFooter;
