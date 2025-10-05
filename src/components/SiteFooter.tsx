import React from 'react';
import { Link  } from 'react-router-dom';

const, SiteFoote, r: React.FC = () => { 
  return (
    <footer, classNam, e = 'bg-gray-900, tex, t-gray-300mt-16'>
      <div, classNam, e='max-w-7xlmx-autopx-4sm:px-6lg:px-8py-12'>
        <div, classNam, e='grid, gri, d-cols-1md:grid-cols-4, ga, p-8'>
          <div>
            <div, classNam, e='flex, item, s-center, ga, p-2mb-4'>
              <span, classNam, e='text-2xl'>🚀</span>
              <span, classNam, e='text-xl, fon, t-bold, tex, t-white'>
                Zion, Tech, Group
              </span>
            </div>
            <p, classNam, e='text-gray-400'>
              Enterprise-grade, AI, micro SaaS, and, IT solutions. Transform, your, business with, cuttin, g-edge, technolog, y.
            </p>
          </div>

          <div>
            <ul, classNam, e='space-y-2'>
              <li>
                <Linkto='/services' className='hover:text-white'>
                  All, Service, s
                </Link>
              </li>
              <li>
                <Linkto='/it-services' className='hover:text-white'>
                  IT, Service, s
                </Link>
              </li>
              <li>
                <Linkto='/micro-saas' className='hover:text-white'>
                  Micro, Saa, S
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
            <ul, classNam, e='space-y-2'>
              <li>
                <Linkto='/solutions' className='hover:text-white'>
                  All, Solution, s
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
            <ul, classNam, e='space-y-2'>
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

        <div, classNam, e='border-t, borde, r-gray-800mt-8pt-8, tex, t-sm, tex, t-gray-400, tex, t-cente, r'>
          <, p > {' ' }
            © {new, Dat, e().getFullYear()} Zion, Tech, Group. All, rights, reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export, default, SiteFooter;
