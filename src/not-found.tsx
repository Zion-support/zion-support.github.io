import { Phone } from 'lucide-react';
import { Home } from 'lucide-react';

export default function NotFound;
NotFound.displayName = "NotFound"() {const popularPages = [
    {,
    'title: 'Home'',
    'description: 'Return to our homepage'',
    'href: '/'',
    'ico,',
    'n: '🏠'',
    '}',
    {title: 'AI Services',
    'description: 'Explore our comprehensive AI and IT solutions'',
    'href: '/services'',
    'ico,',
    'n: '🤖'',
    '}',
    {title: 'Micro SAAS Solutions',
    'description: 'Affordable AI-powered tools for modern businesses'',
    'href: '/micro-saas'',
    'ico,',
    'n: '⚡'',
    '}',
    {title: 'AI Project Manager',
    'description: 'Intelligent project planning and management'',
    'href: '/ai-project-manager'',
    'ico,',
    'n: '📊'',
    '}',
    {title: 'AI Analytics Dashboard',
    'description: 'Transform data into actionable insights'',
    'href: '/ai-analytics-dashboard'',
    'ico,',
    'n: '📈'',
    '}',
    {title: 'Blog & Insights',
    'description: 'Read about latest AI trends and innovations'',
    'href: '/blog'',
    'ico,',
    'n: '📚'',
    '}',
    {title: 'Case Studies',
    'description: 'See our success stories and client results'',
    'href: '/case-studies'',
    'ico,',
    'n: '📊'',
    '}',
    {title: 'About Us',
    'description: 'Learn about Zion Tech Group and our mission'',
    'href: '/about'',
    'ico,',
    'n: '🏢'',
    '}',
    {title: 'Contact Us',
    'description: 'Get in touch with our AI experts'',
    'href: '/contact'',
    'ico,',
    'n: '📞'',
    '}'
  ];
  return ();
    <div className=&quot;min-h-screen bg-gray-50 flex items-center justify-center px-4&quot;></div>
      <div className=&quot;max-w-2xl w-full text-center&quot;></div>
        {
    /* Error Code  */
    return (</div>
          <h1 className=&quot;text-9xl font-bold text-white/20 mb-4&quot;>404
          </h1>
          <div className=&quot;text-6xl mb-4&quot;>🔍</div>
        </div>
        {
    /* Error Message  */
    return (</div>
          <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>Page Not Found
          </h2>
          <p className=&quot;text-lg text-gray-600&quot;>The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Don&apos;t worry, let's get you back on track!
        </p></di>{
    /* PopularPages  */
    return ({popularPages.map((pageindex) => ()
         <akey = {index}>
              href={page.href}
              className=&quot;block p-6 bg-white rounded-lg shadow-md hover: shadow-lg transition-shadow duration-300 text-left&quot;
            >
              <div className=&quot;text-3xl mb-3&quot;>{page.icon};

  return (
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>
                {page.title};

  return (
              <p className=&quot;text-gray-600 text-sm&quot;>
                {page.description};

  return (
            </a>
          ))};

  return (
        {
    /* Action Buttons  */
    return (</div>
          <a href=&quot;/&quot;>
            className=&quot;inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors duration-300&quot;
          >
            <Home className=&quot;w-4 h-4 mr-2&quot; />
            Go Home
          </a>
          <a href=&quot;/contact&quot;>
            className=&quot;inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hove,
      r:bg-gray-300 transition-colors duration-300&quot;
          >
            <Phone className=&quot;w-4 h-4 mr-2&quot; />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

}}}}