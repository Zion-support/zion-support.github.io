import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Play, CheckCircle, ArrowRight, Book } from 'lucide-react';
export default function FirstSteps() {
  const contact = {
    "phone": '+1 302 464 0950',
    "email": 'kleber@ziontechgroup.com',
    "address": '364 E Main St STE 1008 Middletown DE 19709',
    "site": 'https://ziontechgroup.com'

  };
  return (
    <>
      <Head>

        <title>First Steps - Zion Tech Group Documentation</title>

              <span className="font-medium">Let's get started on your digital transformation journey</span>
            </div>
          <div className="space-y-8 mb-8">"
            <div className="bg-white rounded-lg shadow-lg p-8">"
              <div className="flex items-center mb-6">"
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">"
                  <span className="text-blue-600 font-bold text-lg">1</span>"
                <h2 className="text-2xl font-semibold text-gray-900">Assess Your Needs</h2>"
              <p className="text-gray-600 mb-6">"
                Before diving in, let's understand what you're looking to achieve. Our services span three main "categories": </p>""
              <div className="grid md:grid-cols-3 gap-6">"
                <div className="border border-gray-200 rounded-lg p-6">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS Solutions</h3>""
                  <p className="text-gray-600 mb-4">"
                  <ul className="space-y-2 text-sm text-gray-600">"
</ul>"
                    <li className="flex items-center">"
</li>"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"

                    </li>
                  <Link href="/micro-saas" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4">"
                    Explore Micro SaaS <ArrowRight className="w-4 h-4 ml-1" />"

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Services</h3>""

                  <Link href="/ai-services" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4">"
                    Explore AI Services <ArrowRight className="w-4 h-4 ml-1" />"

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Services</h3>""

                  <Link href="/it-services" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mt-4">"
                    Explore IT Services <ArrowRight className="w-4 h-4 ml-1" />"

                  <span className="text-blue-600 font-bold text-lg">2</span>"
                <h2 className="text-2xl font-semibold text-gray-900">Explore Our Catalog</h2>"
              <div className="bg-gray-50 rounded-lg p-6 mb-6">"
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Starting Points</h3>""
                <div className="grid md:grid-cols-2 gap-4">"
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">"
                    <div>
                      <h4 className="font-medium text-gray-900">Cloud Cost Optimization</h4>""
                      <p className="text-sm text-gray-600">Reduce cloud spending by up to 40%</p>"
                    <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700">"
                      <ArrowRight className="w-5 h-5" />"

                      <h4 className="font-medium text-gray-900">AI-Powered Analytics</h4>""
                      <p className="text-sm text-gray-600">Get insights from your data</p>"
                    <Link href="/ai-services" className="text-blue-600 hover:text-blue-700">"

                      <h4 className="font-medium text-gray-900">Cybersecurity Assessment</h4>""
                      <p className="text-sm text-gray-600">Secure your digital infrastructure</p>"
                    <Link href="/cybersecurity" className="text-blue-600 hover:text-blue-700">"

                      <h4 className="font-medium text-gray-900">DevOps Automation</h4>""
                      <p className="text-sm text-gray-600">Streamline your development process</p>"
                    <Link href="/cloud-devops" className="text-blue-600 hover:text-blue-700">"

              <Link href="/services-catalog" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">"
                <Book className="w-5 h-5 mr-2" />"

                  <span className="text-blue-600 font-bold text-lg">3</span>"
                <h2 className="text-2xl font-semibold text-gray-900">Get Your Custom Quote</h2>"
              <div className="grid "md": grid-cols-2 gap-6">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What to Include in Your Request</h3>""
                  <ul className="space-y-2 text-gray-600">"

                  </ul>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Response Includes</h3>""

              <div className="mt-6 flex flex-col sm:flex-row gap-4">"
                <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">"

                "`;
                <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors text-center">"
</a>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">"
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready for the Next Step?</h2>""
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">"
              <Link href="/services-catalog" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">"

              <Link href="/contact" className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">"

    </>)
  );

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
import {ArrowLeft,, Play,, CheckCircle,, ArrowRight,, Book} from 'lucide-react';
export default function FirstSteps() {;
  const contact = {;
    "phone": '+1 302 464 0950',;
    "email": 'kleber@ziontechgroup && ziontechgroup.com',;
    "address": '364 E Main St STE 1008 Middletown DE 19709',;
    "site": 'https://ziontechgroup && ziontechgroup.com'
};

;
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Play, CheckCircle, ArrowRight, Book  } from 'lucide-react';
export default function FirstSteps() {const contact = {"phone": '+1 302 464 0950',"email": 'kleber@ziontechgroup.com',"address": '364 E Main St STE 1008 Middletown DE 19709',"site": 'https://ziontechgroup.com';
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react';
import { ArrowLeft,, Play,, CheckCircle,, ArrowRight,, Book } from 'lucide-react';
export default function FirstSteps() {const contact = {"phone": '+1 302 464 0950',"email": 'kleber@ziontechgroup && ziontechgroup.com',"address": '364 E Main St STE 1008 Middletown DE 19709',"site": 'https://ziontechgroup && ziontechgroup.com';
}return (<>;
      <Head>;
        <title>First Steps - Zion Tech Group Documentation</title>;
        <meta name="description" content="Your first steps to getting started with Zion Tech Group's services and solutions." />;
        <link rel="canonical" href={`${contact && contact.site}/docs/first-steps`} />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;
        <div className="max-w-4xl mx-auto px-4 py-8">;
import { ArrowLeft, Play, CheckCircle, ArrowRight, Book } from 'lucide-react';
export default function FirstSteps() {
  const contact = {
    "phone": '+1 302 464 0950',
    "email": 'kleber@ziontechgroup.com',
    "address": '364 E Main St STE 1008 Middletown DE 19709',
    "site": 'https://ziontechgroup.com'
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-dd7a
  return (
    <>
      <Head>
        <title>First Steps - Zion Tech Group Documentation</title>
        <meta name="description" content="Your first steps to getting started with Zion Tech Group's services and solutions." />
        <link rel="canonical" href={`${contact.site}/docs/first-steps`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">First Steps</h1>
            <p className="text-xl text-gray-600">
              A step-by-step guide to begin your journey with Zion Tech Group's innovative solutions.
            </p>
          </div>
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">;
            <h2 className="text-2xl font-semibold mb-4">Welcome to Zion Tech Group!</h2>;
            <p className="text-blue-100 mb-6">;
              You're about to discover how our 350+ services can transform your business operations,from micro SaaS applications to AI-powered automation and comprehensive IT solutions.;
            </p>;
            <div className="flex items-center">;
              <Play className="w-5 h-5 mr-2" />;
              <span className="font-medium">Let's get started on your digital transformation journey</span>;
            </div>;
          </div>;
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Zion Tech Group!</h2>
            <p className="text-blue-100 mb-6">
              You're about to discover how our 350+ services can transform your business operations, 
              from micro SaaS applications to AI-powered automation and comprehensive IT solutions.
            </p>
            <div className="flex items-center">
              <Play className="w-5 h-5 mr-2" />
              <span className="font-medium">Let's get started on your digital transformation journey</span>
            </div>
          </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-dd7a
