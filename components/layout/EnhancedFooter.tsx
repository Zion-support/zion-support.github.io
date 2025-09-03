import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Zion Tech Group</h3>
            <p className="text-gray-300">
              We deliver micro-SaaS, IT and AI solutions that accelerate growth and efficiency.
            </p>
            <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 underline mt-2 inline-block">Visit our website</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Mobile: +1 302 464 0950</li>
              <li>Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></li>
              <li>Address: 364 E Main St STE 1008 Middletown DE 19709</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a className="hover:text-white underline" href="https://openai.com/api/pricing" target="_blank" rel="noopener noreferrer">OpenAI API Pricing</a></li>
              <li><a className="hover:text-white underline" href="https://aws.amazon.com/pricing/" target="_blank" rel="noopener noreferrer">AWS Pricing</a></li>
              <li><a className="hover:text-white underline" href="https://cloud.google.com/pricing" target="_blank" rel="noopener noreferrer">Google Cloud Pricing</a></li>
              <li><a className="hover:text-white underline" href="https://vercel.com/pricing" target="_blank" rel="noopener noreferrer">Vercel Pricing</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
