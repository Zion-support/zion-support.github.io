<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD:pages/404.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="Page not found" />
      </Head>
      
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">This page is under construction.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Go Home
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="404 - Page Not Found"
      description="Page not found"
    >
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <a href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

<<<<<<< HEAD
export default Page;
=======
<<<<<<< HEAD




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/404.tsx
=======
import React from 'react';


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Link>
        </main>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD:pages/404.tsx
<<<<<<< HEAD
  );
}

export default NotFoundPage;
=======
=======
<<<<<<< HEAD
  );

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/404.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
);

import Head from 'next / head';
import Link from 'next / link';
;
export default /**
 * Custom404 - Function description
 */
function Custom404() {

}


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextPage } from 'next';
import Head from 'next/head';
const NotFoundPage: NextPage = () => {

  return (
    <>;
      <Head>;
          </Link>;
        </div>;
}


      </div>;
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD:pages/404.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


        <title>404 - Page Not Found</title>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/404.tsx
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-gray-200">Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Go Home
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
    </>
  );
=======
          <Link href="/" className="btn-primary">
            Go Back Home
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
          >
            Go Home




          </Link>
        </main>
import {
  Home, ArrowLeft,
  Phone, Mail,
  FileText, Briefcase,
  Users, BookOpen,
  DollarSign, Award,
  Shield, Search,
} from 'lucide-react';

export default function Custom404() {
  const quickLinks = [
    { name: 'Home', url: '/', icon: Home }, { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Solutions', url: '/solutions', icon: Award }, { name: 'About', url: '/about', icon: Users },
    { name: 'Contact', url: '/contact', icon: Phone }, { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Careers', url: '/careers', icon: Briefcase }, { name: 'Pricing Guide', url: '/pricing-guide', icon: DollarSign },
    { name: 'Help Center', url: '/help', icon: FileText }, { name: 'Privacy Policy', url: '/privacy', icon: Shield },
  ];

  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta
          name="description"
          content="The page you are looking for doesn&apos;t exist. Find what you need with our helpful navigation and search options."'
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you are looking for doesn&apos;t exist or has been moved.
              ' Let&apos;s help you find what you need.'
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">
              <Link
                href="/"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              <Link
                href="/search"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="bg-white/10 hover: bg-white/20 p-4 rounded-lg transition-all duration-300 group"
                >
                  <link.icon className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300" />
                  <span className="text-white text-sm font-medium group-hover:text-blue-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Still can&apos;t find what you&apos;re looking for?
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
              <Link
                href="mailto:kleber@ziontechgroup.com"
                className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Link>
            </div>
          </div>
        </div>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
      </div>
</>
  );
<<<<<<< HEAD
<<<<<<< HEAD:pages/404.tsx
<<<<<<< HEAD
import Head from 'next / head';
import Link from 'next / link';
;
export default /**
 * Custom404 - Function description
 */
function Custom404() {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/404.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


ursor/fix-website-loading-errors-and-merge-6662
}
<<<<<<< HEAD
<<<<<<< HEAD:pages/404.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
const NotFoundPage: NextPage = () => {
  return (
    <>;
      <Head>;
        <title>404 - Page Not Found | Zion Tech Group</title>;
        <meta name="description" content="The page you're looking for doesn't exist." />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      </Head>;
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text-6xl font-bold mb-4">404</h1>;
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>;
          <p className="text-slate-300 mb-8">;
            The page you're looking for doesn't exist.;
          </p>;
          <Link;
            href="/";
            className="px-6 py-3 bg-blue-600: hover:bg-blue-700 rounded-lg font-semibold transition-colors";
          >;
            Go Home;
          </Link>;
        </div>;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </main>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/404.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}



<<<<<<< HEAD
<<<<<<< HEAD:pages/404.tsx
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default Page;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/404.tsx
=======


}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
