import { Home, Phone } from 'lucide-react'
export default function NotFound() {
  const popularPages = [
    {
      title: 'Home',
      description: 'Return to our homepage',
      href: '/',
      icon: '🏠'
    },
    {
      title: 'AI Services',
      description: 'Explore our comprehensive AI and IT solutions',
      href: '/services',
      icon: '🤖'
    },
    {
      title: 'Blog & Insights',
      description: 'Read about latest AI trends and innovations',
      href: '/blog',
      icon: '📚'
    },
    {
      title: 'About Us',
      description: 'Learn about Zion Tech Group and our mission',
      href: '/about',
      icon: '🏢'
    },
    {
      title: 'Case Studies',
      description: 'See our success stories and client results',
      href: '/case-studies',
      icon: '📊'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our AI experts',
      href: '/contact',
      icon: '📞'
    },
  ]
  return (
        {/* Error Code */}
          <h1 className="text-9xl font-bold text-white/20 mb-4">404
          <div className="text-6xl mb-4">🔍
        {/* Error Message */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track!
        {/* Popular Pages */}
          {popularPages.map((page, index) => (
            <$2 />
              key={index}
              to={page.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left">
              <div className="text-3xl mb-3">{page.icon}
                {page.title}
                {page.description}
          ))}
        {/* Action Buttons */}
          <$2 />
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Go Home
  
          <$2 />
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300">
            Contact Support
  
  ),
}
</div></div></div></div></div></p></p></h3>