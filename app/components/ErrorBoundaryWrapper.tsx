"use client";
import React from "react";
import Footer from '../components/Footer';
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

<<<<<<< HEAD
interface Props {
  children: ReactNode;
}

interface State {
  hasErro,
  r: boolean
  error?: Error

class ErrorBoundaryWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props)}
    this.state = { hasError: false};
  static getDerivedStateFromError(error: Error): State {
    return { hasErro,
  r: true, error}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Error caught by boundar,)
  y:', error, errorInfo)}
  render() {
    if (this.state.hasError) {
      return (</Props>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>
          <div className="text-center p-8"></div>
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened.</p>
            <button
              onClick = {
() => window.location.reload();
};
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semiboldtransition-colorsduration-200"
            >
              Try Again</button>
            </button>
    </div>);
    }

    return this.props.children;
  }
}

export default ErrorBoundaryWrapper;
=======
export default function ServicePage() {
  return (
    <>
      <Head>
        <title>ErrorBoundaryWrapper | Zion Tech Group</title>
        <meta name="description" content="Professional ErrorBoundaryWrapper services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ErrorBoundaryWrapper | Zion Tech Group" />
        <meta property="og:description" content="Professional ErrorBoundaryWrapper services and solutions for modern businesses." />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              ErrorBoundaryWrapper
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Professional ErrorBoundaryWrapper services and solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
>>>>>>> origin/main
