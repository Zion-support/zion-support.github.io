<<<<<<< HEAD
export default function NotFound() {
return (
    <div>
      <div>
        {/* Error Code */}
        <div>
          <h1 className="text-9xl font-bold text-white/20 mb-4">404</h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        {/* Error Message */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600">
            The page you're looking for doesn't exist or has been moved.
// Don't worry, let's get you back on track!
          
          
          
          
          
          
          
          
          
          </p>
        </div>
        {/* Popular Pages */}
        <div>
          {popularPages.map((feature, index) => (
          <Link
              key={index}
              href={page.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
// >
              
          
          
          
          
          
          
          
          
          <div className="text-3xl mb-3">{page.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {page.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
        {/* Action Buttons */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
>
            <Home className="w-4 h-4 mr-2" />Go Home</Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300"
          >
            <Phone className="w-4 h-4 mr-2" />Contact Support</Link>
        </div>
      </div>
    </div>)
}
=======
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Not Found
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-2b60
