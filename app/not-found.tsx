import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    { title: 'AI Services', description: 'Explore our AI solutions', href: '/services', icon: '🤖' },
    { title: 'Blog', description: 'Latest AI trends', href: '/blog', icon: '📚' },
    { title: 'About', description: 'Learn about us', href: '/about', icon: '👥' },
    { title: 'Contact', description: 'Get in touch', href: '/contact', icon: '📞' },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4'>
      <div className='max-w-4xl w-full text-center'>
        <h1 className='text-9xl font-bold text-gray-300 mb-4'>404</h1>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>Page Not Found</h2>
        <p className='text-lg text-gray-600 mb-8'>The page you are looking for does not exist.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
          {popularPages.map((page, idx) => (
            <Link key={idx} href={page.href} className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg'>
              <div className='text-3xl mb-2'>{page.icon}</div>
              <h3 className='font-semibold text-gray-900'>{page.title}</h3>
              <p className='text-sm text-gray-600'>{page.description}</p>
            </Link>
          ))}
        </div>
        <Link href='/' className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg'>
          <Home className='w-5 h-5' />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
