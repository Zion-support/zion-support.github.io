import { Phone } from 'lucide-react'
import { Home } from 'lucide-react'

export default function NotFound
NotFound.displayName = "NotFound"() {constpopularPages= [
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
  ]
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"></div>
      <div className="max-w-2xl w-full text-center"></div>
        {/* Error Code */}
        <div className="mb-8"></div>
          <h1 className="text-9xl font-bold text-white/20 mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        {/* Error Message */}
        <div className="mb-12"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found</h2>
          <p className="text-lg text-gray-600">
            The page you're looking for doesn't exist or has been moved.
   },
  ];
  return (
    <divclassName="min-h-screen bg-gray-50flexitems-centerjustify-centerpx-4"><divclassName="max-w-2xlw-fulltext-center">{/* ErrorCode */}
      <divclassName="mb-8"><spanclassName="text-9 xl font-bold text-white/20mb-4"></spa></className="text-9 xl font-bold text-white/20mb-4">404</h><divclassName="text-6xlmb-4">🔍</di></di>{/* ErrorMessage */}
      <divclassName="mb-12"><spanclassName="text-3 xl font-bold text-gray-900mb-4"></spa></className="text-3 xl font-bold text-gray-900mb-4">Page Not Found</h><spanclassName="text-lgtext-gray-600"></spa></className="text-lgtext-gray-600">The page you're looking for do esn't exist or has been moved. 
            Don't worry, let's get you back on track!
        </p></di>{/* PopularPages */}
      <divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3gap-4mb-8">{popularPages.map((pageindex) => (
         <akey={index}
              href={page.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <div className="text-3xl mb-3">{page.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {page.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {page.description}
              </p>
            </a>
          ))}
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          <a href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home</a>
          <a href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Support</a>
        </div>
      </div>
    </div>
  )
             className="block p-6 bg-white rounded-lg shado w-mdhover:shado w-lg transition-shado w duration-300text-left"
            ><divclassName="text-3xlmb-3">{page.icon}</di><spanclassName="text-lg font-semibold text-gray-900mb-2"></spa></className="text-lg font-semibold text-gray-900mb-2">{page.title}
            </h><spanclassName="text-gray-600text-sm"></spa></className="text-gray-600text-sm">{page.description}
            </p></a>))}
      </di>{/* ActionButtons */}
      <divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/"
           className="inline-flex items-center px-6 py-3 bg-blue-600text-white rounded-lghover:bg-blue-700transition-colorsduration-300"
          ><HomeclassName="w-4h-4mr-2" />Go Home</a><ahref="/contact"
           className="inline-flex items-center px-6 py-3 bg-gray-200text-gray-800rounded-lghover:bg-gray-300transition-colorsduration-300"
          ><PhoneclassName="w-4h-4mr-2" />Contact Support</a></di></di></di>
  );
}
