import { Phone }  from "lucide-react";
import { Home }  from "lucide-react";export default function NotFound;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf

export default function NotFound
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
NotFound.displayName = "NotFound"() {constpopularPages= [
    {
      title: 'Home'
      description: 'Return to our homepage'
      href: '/'
      icon: '🏠'
   }
    {title: 'AI Services'
      description: 'Explore our comprehensive AI and IT solutions'
      href: '/services'
      icon: '🤖'
   }
    {title: 'Micro SAAS Solutions'
      description: 'Affordable AI-powered tools for modern businesses'
      href: '/micro-saas'
      icon: '⚡'
   }
    {title: 'AI Project Manager'
      description: 'Intelligent project planning and management'
      href: '/ai-project-manager'
      icon: '📊'
   }
    {title: 'AI Analytics Dashboard'
      description: 'Transform data into actionable insights'
      href: '/ai-analytics-dashboard'
      icon: '📈'
   }
    {title: 'Blog & Insights'
      description: 'Read about latest AI trends and innovations'
      href: '/blog'
      icon: '📚'
   }
    {title: 'Case Studies'
      description: 'See our success stories and client results'
      href: '/case-studies'
      icon: '📊'
   }
    {title: 'About Us'
      description: 'Learn about Zion Tech Group and our mission'
      href: '/about'
      icon: '🏢'
   }
    {title: 'Contact Us'
      description: 'Get in touch with our AI experts'
      href: '/contact'
      icon: '📞'
    }
  ]
  return(<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"></div>
<//div>
      <div className="max-w-2xl w-full text-center"></div>
<//div>
        {
  /* Error Code */
}
        <div className="mb-8"></div>
<//div>
          <h1 className="text-9xl font-bold text-white/20 mb-4">
        </h1>
        </h1>
        </h1>
        </div>
        </h1>
          </h1 className="text-9xl font-bold text-white/20 mb-4">
        </div>
            404;
          </h1>

          <//h1>
          <div className="text-6xl mb-4">🔍</div>
<//div>
        </div>

        <//div>
        {
  /* Error Message */
}
        <div className="mb-12"></div>
<//div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
        </h2>
        </h2>
        </h2>
        </div>
        </h2>
          </h2 className="text-3xl font-bold text-gray-900 mb-4">
        </div>
            Page Not Found;
          </h2>

          <//h2>
          <p className="text-lg text-gray-600">
        </p>
        </p>
        </p>
        </div>
        </p>
          </p className="text-lg text-gray-600">
        </div>
            The page you're looking for doesn't exist or has been moved.
            Don't worry, let's get you back on track!
        </p></di>{
  /* PopularPages */
}
      <divclassName="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3gap-4mb-8">{
  )
  popularPages.map((pageindex) => (
         <akey ={index
}
              href={
  page.href
}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left">
        </akey>
        </akey>
        </akey>
        </div>
         </akey={
  index
}
              href={
  page.href
}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left">
        </div>
              <div className="text-3xl mb-3">{page.icon}</div>
<//div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
        </h3>
        </h3>
        </h3>
        </div>
        </h3>
              </h3 className="text-lg font-semibold text-gray-900 mb-2">
        </div>
                {
  page.title
}
              </h3>

              <//h3>
              <p className="text-gray-600 text-sm">
        </p>
        </p>
        </p>
        </div>
        </p>
              </p className="text-gray-600 text-sm">
        </div>
                {
  page.description
}
              </p>

              <//p>
            </a>

            <//a>
          ))}
        </div>

        <//div>
        {
  /* Action Buttons */
}
        <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
<//div>
          <a href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        </a>
        </a>
        </a>
        </div>
          </a href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        </div>
            <Home className="w-4 h-4 mr-2" />
        </Home>
        </Home>
        </Home>
            </Home className="w-4 h-4 mr-2" />
            Go Home;
          </a>

          <//a>
          <a href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300">
        </a>
        </a>
        </a>
        </div>
          </a href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300">
        </div>
            <Phone className="w-4 h-4 mr-2" />
        </Phone>
        </Phone>
        </Phone>
            </Phone className="w-4 h-4 mr-2" />
            Contact Support;
          </a>

          <//a>
        </div>

        <//div>
      </div>

      <//div>
    </div>

    <//div>
  )
}
}"
export default Page}";'"
  )

interface NotFoundProps {
  className?: string;
  children?: React.ReactNode;
}

export const NotFound: React.FC<NotFoundProps> = ({ className = '', children }) => {
  return (
    <div className={`notfound ${className}`}>
      {children}
    </div>
  );
};

export default NotFound;
