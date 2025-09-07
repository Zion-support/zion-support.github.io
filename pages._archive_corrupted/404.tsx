<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/404.tsx
=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======











>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



} from 'lucide-react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {
  Home,
  ArrowLeft,
  Phone,
  Mail,
  FileText,
  Briefcase,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  Award,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  Shield
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
} from 'lucide-react';
=======
  Shield} from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  Shield} from 'lucide-react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  Shield
} from 'lucide-react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  Shield} from 'lucide-react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const "NotFound": NextPage = () => {
  const quickLinks = [{ name: 'Home', "url": '/', "icon": Home },
    { "name": 'Services', "url": '/services', "icon": Briefcase },
    { "name": 'About', "url": '/about', "icon": Users },
    { "name": 'Contact', "url": '/contact', "icon": Phone },
    { "name": 'Blog', "url": '/blog', "icon": BookOpen },
    { "name": 'Pricing', "url": '/pricing', "icon": DollarSign },
    { "name": 'Team', "url": '/team', "icon": Award },
    { "name": 'Webinars', "url": '/webinars', "icon": Calendar },
    { "name": 'White Papers', "url": '/whitepapers', "icon": FileText },
    { "name": 'Solutions', "url": '/solutions', "icon": Award },
    { "name": 'Careers', "url": '/careers', "icon": Briefcase },
    { "name": 'Help Center', "url": '/support', "icon": FileText },


import {Home,, ArrowLeft,, Phone,, Mail,, FileText,, Briefcase,, Users,, BookOpen,, DollarSign,, Calendar,, Award,, Shield} from 'lucide-react';
const "NotFound": NextPage = () => {;
  const quickLinks = [{ name: 'Home', "url": '/', "icon": Home },;
    { "name": 'Services', "url": '/services', "icon": Briefcase },;
    { "name": 'About', "url": '/about', "icon": Users },;
    { "name": 'Contact', "url": '/contact', "icon": Phone },;
    { "name": 'Blog', "url": '/blog', "icon": BookOpen },;
    { "name": 'Pricing', "url": '/pricing', "icon": DollarSign },;
    { "name": 'Team', "url": '/team', "icon": Award },;
    { "name": 'Webinars', "url": '/webinars', "icon": Calendar },;
    { "name": 'White Papers', "url": '/whitepapers', "icon": FileText },;
    { "name": 'Solutions', "url": '/solutions', "icon": Award },;
    { "name": 'Careers', "url": '/careers', "icon": Briefcase },;
    { "name": 'Help Center', "url": '/support', "icon": FileText },;


    { "name": 'Privacy Policy', "url": '/privacy', "icon": Shield }
  ];
  return (
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;



import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;









    <>;
      <Head>;
        <title>Page Not Found - Zion Tech Group</title>;
        <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." />;
        <meta name="robots" content="noindex,nofollow" />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">;
        <div className="max-w-4xl mx-auto text-center">;
          <div className="mb-8">;
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">;
              404;
            </h1>;
          </div>;
          <div className="mb-8">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Page Not Found;
            </h2>;
            <p className="text-xl text-gray-300 mb-6">;
              Sorry, the page you are looking for doesn&apos;t exist or has been moved.;
            </p>;
            <p className="text-gray-400">;
              Don&apos;t worry, we&apos;ll help you find what you are looking for.;
            </p>;
          </div>;
          <div className="flex flex-col "sm": flex-row gap-4 justify-center mb-12">;
    { "name": 'Privacy Policy', "url": '/privacy', "icon": Shield }
  ];
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              404
            </h1>
          </div>
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <p className="text-gray-400">
              Don&apos;t worry, we&apos;ll help you find what you are looking for.
            </p>
          </div>
          <div className="flex flex-col "sm": flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white "hover": opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="flex flex-col items-center p-4 rounded-lg bg-slate-700 "hover": bg-slate-600 transition-colors group"
                >
                  <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" />
                  <span className="text-gray-300 group-hover:text-white text-sm text-center">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-300 mb-6">
              If you can&apos;t find what you&apos;re looking for, our team is here to help.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link
                href="/contact"
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;



                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default NotFound;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <>;
      <Head>;
        <title>Page Not Found - Zion Tech Group</title>;
        <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." />;
        <meta name="robots" content="noindex,nofollow" />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">;
        <div className="max-w-4xl mx-auto text-center">;
          <div className="mb-8">;
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">;
              404;
            </h1>;
          </div>;
          <div className="mb-8">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Page Not Found;
            </h2>;
            <p className="text-xl text-gray-300 mb-6">;
              Sorry, the page you are looking for doesn&apos;t exist or has been moved.;
            </p>;
            <p className="text-gray-400">;
              Don&apos;t worry, we&apos;ll help you find what you are looking for.;
            </p>;
          </div>;
          <div className="flex flex-col "sm": flex-row gap-4 justify-center mb-12">;
            <button
              onClick={() => window && window.history.back()}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white "hover": opacity-90 transition-opacity";
            >;
              <ArrowLeft className="w-5 h-5 mr-2" />;
              Go Back;
            </button>;
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors">;
              <Home className="w-5 h-5 mr-2" />;
              Go Home;
            </Link>;
          </div>;
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">;
            <h3 className="text-2xl font-bold text-white mb-6">;
              Popular Pages;
            </h3>;
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">;
              {quickLinks && quickLinks.map((link, index) => (;
                <Link
                  key={link && link.url}
                  href={link && link.url}
                  className="flex flex-col items-center p-4 rounded-lg bg-slate-700 "hover": bg-slate-600 transition-colors group">;
                  <link && link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" />;
                  <span className="text-gray-300 group-hover:text-white text-sm text-center">;
                    {link && link.name}
                  </span>;
                </Link>;
              ))}
            </div>;
          </div>;
          <div className="bg-slate-800/50 rounded-lg p-8">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Still Need Help?;
            </h3>;
            <p className="text-gray-300 mb-6">;
              If you can&apos;t find what you&apos;re looking for, our team is here to help.;
            </p>;
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">;
              <Link
                href="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
=======
<<<<<<< HEAD
=======
>>>>>>> main
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover: opacity-90 transition-opacity">;
                <Phone className="w-5 h-5 mr-2" />;
                Contact Support;
              </Link>;
              <a
                href="mailto:kleber@ziontechgroup && ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors">;
                <Mail className="w-5 h-5 mr-2" />;
                Email Us;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  ),
};
export default NotFound;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
=======
<<<<<<< HEAD
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window && window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks && quickLinks.map((link,index) => ( <Link key={link && link.url} href={link && link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link && link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link && link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window && window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks && quickLinks.map((link,index) => ( <Link key={link && link.url} href={link && link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link && link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link && link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window && window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks && quickLinks.map((link,index) => ( <Link key={link && link.url} href={link && link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link && link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link && link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window && window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks && quickLinks.map((link,index) => ( <Link key={link && link.url} href={link && link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link && link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link && link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window && window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks && quickLinks.map((link,index) => ( <Link key={link && link.url} href={link && link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link && link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link && link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;



import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;










import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home </Link> </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span> </Link> ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support </Link> <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;

class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    <>
      <Head>

        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." />"
</meta>"
        <meta name="robots" content="noindex,nofollow" />"
</meta>
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">"
</div>"
        <div className="max-w-4xl mx-auto text-center">"
          <div className="mb-8">"
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">"
</h1>
            <h2 className="text-4xl font-bold text-white mb-4">"
</h2>
            </h2>"
            <p className="text-xl text-gray-300 mb-6">"
</p>
            </p>"
            <p className="text-gray-400">"
          <div className="flex flex-col "sm": flex-row gap-4 justify-center mb-12">"
</div>
            <button;
              onClick={() => window.history.back()}
</button>"
              <ArrowLeft className="w-5 h-5 mr-2" />"

            </button>
            <Link;"
              href="/"""
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors""
            >
              <Home className="w-5 h-5 mr-2" />"

            
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">"
            <h3 className="text-2xl font-bold text-white mb-6">"
</h3>
            </h3>"
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">"
                <Link;
                  key={link.url}
                  href={link.url}"
                  className="flex flex-col items-center p-4 rounded-lg bg-slate-700 "hover": bg-slate-600 transition-colors group""
                  <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" />"
</link>"
                  <span className="text-gray-300 group-hover:text-white text-sm text-center">"
</span>
                
          <div className="bg-slate-800/50 rounded-lg p-8">"
            <h3 className="text-2xl font-bold text-white mb-4">"
            <p className="text-gray-300 mb-6">"
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">"
                href="/contact"""
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity""
                <Phone className="w-5 h-5 mr-2" />"

              
              <a;"
                href="mailto:kleber@ziontechgroup.com"""
</a>"
                <Mail className="w-5 h-5 mr-2" />"

              </a>
    </>
  );
};
export default NotFound;"
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" />  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home  </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span>  ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support  <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;"
    <>;
      <Head>;

        <title>Page Not Found - Zion Tech Group</title>;"
        <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." />;"
        <meta name="robots" content="noindex,nofollow" />;"
      ;"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">;"
        <div className="max-w-4xl mx-auto text-center">;"
          <div className="mb-8">;"
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">;"
            </h1>;
          </div>;"
            <h2 className="text-4xl font-bold text-white mb-4">;"
            </h2>;"
            <p className="text-xl text-gray-300 mb-6">;"
            </p>;"
            <p className="text-gray-400">;"
            </p>;
          <div className="flex flex-col "sm": flex-row gap-4 justify-center mb-12">;"
              onClick={() => window && window.history.back()}
              <ArrowLeft className="w-5 h-5 mr-2" />;"

            </button>;
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors">;"
              <Home className="w-5 h-5 mr-2" />;"

            ;
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">;"
            <h3 className="text-2xl font-bold text-white mb-6">;"
            </h3>;"
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">;"
                  key={link && link.url}
                  href={link && link.url}"
                  className="flex flex-col items-center p-4 rounded-lg bg-slate-700 "hover": bg-slate-600 transition-colors group">;"
                  <link && link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" />;"
                  <span className="text-gray-300 group-hover:text-white text-sm text-center">;"
                  </span>;
            </div>;
          <div className="bg-slate-800/50 rounded-lg p-8">;"
            <h3 className="text-2xl font-bold text-white mb-4">;"
            <p className="text-gray-300 mb-6">;"
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">;"
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" />  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home  </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks.map((link,index) => ( <Link key={link.url} href={link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link.name} </span>  ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support  <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;""
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover: opacity-90 transition-opacity">;""
                <Phone className="w-5 h-5 mr-2" />;"

                href="mailto:kleber@ziontechgroup && ziontechgroup.com"""
                <Mail className="w-5 h-5 mr-2" />;"

              </a>;
    </>;
  ),;
import React from 'react'; import type { NextPage } from 'next'; import Head from 'next/head'; import Link from 'next/link'; import { Home,ArrowLeft,Phone,Mail,FileText,Briefcase,Users,BookOpen,DollarSign,Calendar,Award,Shield } from 'lucide-react'; const NotFound: NextPage = () => { const quickLinks = [ { name: 'Home',url: '/',icon: Home },{ name: 'Services',url: '/services',icon: Briefcase },{ name: 'About',url: '/about',icon: Users },{ name: 'Contact',url: '/contact',icon: Phone },{ name: 'Blog',url: '/blog',icon: BookOpen },{ name: 'Pricing',url: '/pricing',icon: DollarSign },{ name: 'Team',url: '/team',icon: Award },{ name: 'Webinars',url: '/webinars',icon: Calendar },{ name: 'White Papers',url: '/whitepapers',icon: FileText },{ name: 'Solutions',url: '/solutions',icon: Award },{ name: 'Careers',url: '/careers',icon: Briefcase },{ name: 'Help Center',url: '/support',icon: FileText },{ name: 'Privacy Policy',url: '/privacy',icon: Shield } ]; return ( <> <Head> <title>Page Not Found - Zion Tech Group</title> <meta name="description" content="The page you are looking for does not exist. Find what you need with our helpful navigation and search options." /> <meta name="robots" content="noindex,nofollow" />  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"> <div className="max-w-4xl mx-auto text-center"> <div className="mb-8"> <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"> 404 </h1> </div> <div className="mb-8"> <h2 className="text-4xl font-bold text-white mb-4"> Page Not Found </h2> <p className="text-xl text-gray-300 mb-6"> Sorry,the page you are looking for doesn&apos;t exist or has been moved. </p> <p className="text-gray-400"> Don&apos;t worry,we&apos;ll help you find what you are looking for. </p> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <button onClick={() => window && window.history.back()} className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <ArrowLeft className="w-5 h-5 mr-2" /> Go Back </button> <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Home className="w-5 h-5 mr-2" /> Go Home  </div> <div className="bg-slate-800/50 rounded-lg p-8 mb-8"> <h3 className="text-2xl font-bold text-white mb-6"> Popular Pages </h3> <div className="grid grid-cols-2 md:grid-cols-5 gap-4"> {quickLinks && quickLinks.map((link,index) => ( <Link key={link && link.url} href={link && link.url} className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group" > <link && link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-2" /> <span className="text-gray-300 group-hover:text-white text-sm text-center"> {link && link.name} </span>  ))} </div> </div> <div className="bg-slate-800/50 rounded-lg p-8"> <h3 className="text-2xl font-bold text-white mb-4"> Still Need Help? </h3> <p className="text-gray-300 mb-6"> If you can&apos;t find what you&apos;re looking for,our team is here to help. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity" > <Phone className="w-5 h-5 mr-2" /> Contact Support  <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors" > <Mail className="w-5 h-5 mr-2" /> Email Us </a> </div> </div> </div> </div> </> )}; export default NotFound;""
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
