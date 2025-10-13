import React from 'react';
import { Helmet } from 'react-helmet-async';


interface notfoundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function notfound({ className = '', children }: notfoundProps) {
const NotFoundPage = () => {
  return (
    <div className={`${className}`}>
      {children}

    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>NotFound - Zion Tech Group</title>
        <meta name="description" content="NotFound solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">NotFound</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive notfound solutions designed to meet your business needs.
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            404 - Page Not Found
            NotFound

          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for could not be found.
            Page Not Found
            The page you're looking for doesn't exist.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
            </div>

              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
                We use the latest technologies and best practices to ensure optimal performance.

              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                Get round-the-clock support from our dedicated team of professionals.
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
  );
};

export default NotFoundPage;

    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Go Home
        </a>
const NotFoundPage = () => {;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"></div>;
      <div className="container mx-auto px-4 py-16"></div>;
        <div className="max-w-4xl mx-auto text-center"></div>;
          <h1 className="text-4xl font-bold text-gray-900 mb-6">;
            NotFound;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            This page is under development. Please check back later.;
          </p>;
        </div>;


