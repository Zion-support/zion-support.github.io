import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Code, Key, Zap, Shield } from 'lucide-react';
export default function APIOverview() {
  const contact = {
    "phone": '+1 302 464 0950',
    "email": 'kleber@ziontechgroup.com',
    "address": '364 E Main St STE 1008 Middletown DE 19709',
    "site": 'https://ziontechgroup.com'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {ArrowLeft,, Code,, Key,, Zap,, Shield} from 'lucide-react';
export default function APIOverview() {;
  const contact = {;
    "phone": '+1 302 464 0950',;
    "email": 'kleber@ziontechgroup && ziontechgroup.com',;
    "address": '364 E Main St STE 1008 Middletown DE 19709',;
    "site": 'https://ziontechgroup && ziontechgroup.com';          {/* Getting Started */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Contact our team to get your API access and start integrating our services.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get API Access
              </Link>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );