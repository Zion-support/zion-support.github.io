import React from 'react';

<<<<<<< HEAD
const EnhancedFooter: React.FC = () => {
  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider specializing in AI, cloud services, and digital transformation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-gray-300">info@ziontechgroup.com</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-300">
            &copy; 2025 Zion Tech Group. All rights reserved.
          </p>
=======
export default function EnhancedFooter(): React.JSX.Element {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};

export default EnhancedFooter;
=======
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
