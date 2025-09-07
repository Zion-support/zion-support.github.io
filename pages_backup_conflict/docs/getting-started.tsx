import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink, Book } from 'lucide-react';
export default function GettingStarted() {
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
import {ArrowLeft,, CheckCircle,, ExternalLink,, Book} from 'lucide-react';
export default function GettingStarted() {;
  const contact = {;
    "phone": '+1 302 464 0950',;
    "email": 'kleber@ziontechgroup && ziontechgroup.com',;
    "address": '364 E Main St STE 1008 Middletown DE 19709',;
    "site": 'https://ziontechgroup && ziontechgroup.com';          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you get started. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg "hover": bg-blue-700 transition-colors">
                Call {contact.phone}
              </a>
              <a href={`"mailto": ${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );