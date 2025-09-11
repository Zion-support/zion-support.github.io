


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
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
export default function HomePage() {;
              Mobile: <a className=\"text-blue-700\" href=\"tel:+13024640950\">+1 302 464 0950</a> · Email:{\' \'}
              <a className=\"text-blue-700\" href=\""mailto\": kleber@ziontechgroup && ziontechgroup.com\">kleber@ziontechgroup && ziontechgroup.com</a> · Address: 364 E;
              Mobile: <a className="text-blue-700" href="tel:+13024640950">+1 302 464 0950</a> · Email:{' '}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5