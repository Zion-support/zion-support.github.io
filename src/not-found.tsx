import { Phone } from 'lucide-react';
import {Phone} from 'lucide-react';

export default function NotFound() {constpopularPages= [
    {
      title: 'Home',
      description: 'Return to our homepage',
      href: '/',
      icon: '🏠'
   },
    {title: 'AI Services',
      description: 'Explore our comprehensive AI and IT solutions',
      href: '/services',
      icon: '🤖'
   },
    {title: 'Micro SAAS Solutions',
      description: 'Affordable AI-powered tools for modern businesses',
      href: '/micro-saas',
      icon: '⚡'
   },
    {title: 'AI Project Manager',
      description: 'Intelligent project planning and management',
      href: '/ai-project-manager',
      icon: '📊'
   },
    {title: 'AI Analytics Dashboard',
      description: 'Transform data into actionable insights',
      href: '/ai-analytics-dashboard',
      icon: '📈'
   },
    {title: 'Blog & Insights',
      description: 'Read about latest AI trends and innovations',
      href: '/blog',
      icon: '📚'
   },
    {title: 'Case Studies',
      description: 'See our success stories and client results',
      href: '/case-studies',
      icon: '📊'
   },
    {title: 'About Us',
      description: 'Learn about Zion Tech Group and our mission',
      href: '/about',
      icon: '🏢'
   },
    {title: 'Contact Us',
      description: 'Get in touch with our AI experts',
      href: '/contact',
      icon: '📞'
   },
  ];
  return (
    <divclassName="min-h-screen bg-gray-50flexitems-centerjustify-centerpx-4"><divclassName="max-w-2xlw-fulltext-center">{/* ErrorCode */}
      <divclassName="mb-8"><spanclassName="text-9 xl font-bold text-white/20mb-4"></spa></className="text-9 xl font-bold text-white/20mb-4">404</h><divclassName="text-6xlmb-4">🔍</di></di>{/* ErrorMessage */}
      <divclassName="mb-12"><spanclassName="text-3 xl font-bold text-gray-900mb-4"></spa></className="text-3 xl font-bold text-gray-900mb-4">Page Not Found
        </h><spanclassName="text-lgtext-gray-600"></spa></className="text-lgtext-gray-600">The page you're looking for do esn't exist or has been moved. 
            Don't worry, let's get you back on track!
        </p></di>{/* PopularPages */}
      <divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3gap-4mb-8">{popularPages.map((pageindex) => (
         <akey={index}
              href={page.href}
             className="block p-6 bg-white rounded-lg shado w-mdhover:shado w-lg transition-shado w duration-300text-left"
            ><divclassName="text-3xlmb-3">{page.icon}</di><spanclassName="text-lg font-semibold text-gray-900mb-2"></spa></className="text-lg font-semibold text-gray-900mb-2">{page.title}
            </h><spanclassName="text-gray-600text-sm"></spa></className="text-gray-600text-sm">{page.description}
            </p></a>))}
      </di>{/* ActionButtons */}
      <divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/"
           className="inline-flex items-center px-6 py-3 bg-blue-600text-white rounded-lghover:bg-blue-700transition-colorsduration-300"
          ><HomeclassName="w-4h-4mr-2" />Go Home
        </a><ahref="/contact"
           className="inline-flex items-center px-6 py-3 bg-gray-200text-gray-800rounded-lghover:bg-gray-300transition-colorsduration-300"
          ><PhoneclassName="w-4h-4mr-2" />Contact Support
        </a></di></di></di>
  );
}
