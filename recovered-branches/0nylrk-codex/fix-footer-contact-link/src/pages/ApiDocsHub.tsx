


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap} from "lucide-react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ApiDocsHub() {

  const sections = [
    {
      title: "Getting Started"
      description: "Learn how to authenticate and make your first API request"
      icon: BookOpen
      path: "/developers/docs/getting-started"
      color: "from-blue-500 to-cyan-500"}
    {
      title: "API Reference"
      description: "Detailed documentation for all available endpoints"
      icon: Code
      path: "/developers/docs/reference"
      color: "from-purple-500 to-pink-500"}
    {
      title: "Webhooks"
      description: "Subscribe to events and receive real-time updates"
      icon: Webhook
      path: "/developers/docs/webhooks"
      color: "from-green-500 to-emerald-500"}
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Sample Code",
      description: "Examples in JavaScript, Python, and Node.js",

      icon: Zap,
      path: "/developers/docs/samples",
      color: "from-yellow-500 to-orange-500"},
    {
      title: "Sample Code"
      description: "Examples in JavaScript, Python, and Node.js";
      icon: Zap
      path: "/developers/docs/samples"
      color: "from-yellow-500 to-orange-500"}
      title: "Sample Code",;
      description: "Examples in JavaScript, Python, and Node.js";
      title: "Sample Code",
      description: "Examples in JavaScript, Python, and Node.js",
      icon: Zap,
      path: "/developers/docs/samples",
      color: "from-yellow-500 to-orange-500"},
=======
=======
import React from './react';
import { Link } from './react-router-dom';
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from './lucide-react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
export /**
 * ApiDocsHub - Function description
 */
function ApiDocsHub() {
  const sections = [;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Getting Started",
      description: "Learn how to authenticate and make your first API request",
      icon: BookOpen,
      path: "/developers / docs / getting - started",
      color: "from - blue - 500 to - cyan - 500"},
    {
      title: "API Reference",
      description: "Detailed documentation for all available endpoints",
      icon: Code,
      path: "/developers / docs / reference",
      color: "from - purple - 500 to - pink - 500"},
    {
      title: "Webhooks",
      description: "Subscribe to events and receive real - time updates",
      icon: Webhook,
      path: "/developers / docs / webhooks",
      color: "from - green - 500 to - emerald - 500"},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {


      title: "Sample Code",;
      description: "Examples in JavaScript, Python, and Node.js";

=======
      title: "Sample Code",
      description: "Examples in JavaScript, Python, and Node.js",
<<<<<<< HEAD

      icon: Zap,
      path: "/developers/docs/samples",
      color: "from-yellow-500 to-orange-500"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      icon: Zap,
      path: "/developers/docs/samples",
      color: "from-yellow-500 to-orange-500"},
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Error Codes & Rate Limits"
      description: "Understanding API errors and rate limiting"
      icon: AlertCircle
      path: "/developers/docs/errors"
      color: "from-red-500 to-rose-500"}]
  return (
    <ApiDocsLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>
        <p className="text-zinc-400 text-lg mb-12">
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4`}>
                <section.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
              <p className="text-zinc-400 mb-4">{section.description}</p>
              <div className="flex items-center text-zion-cyan">
                <span className="mr-2">View documentation</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800">
          <h2 className="text-xl font-semibold text-white mb-4">Ready to get started?</h2>
          <p className="text-zinc-400 mb-6">
            To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one.
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
    return this.props.children;
  }
}
=======
    
    return this.props.children;
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap} from "lucide-react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Link
            to="/developers/portal"
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover: bg-zion-purple/90 transition-colors"
          >
            Go to Developer Portal
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </ApiDocsLayout>
  )

<<<<<<< HEAD
<<<<<<< HEAD
}
export default ApiDocsHub;

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ApiDocsHub() {;
  const sections = [;
    {;
      title: "Getting Started",;
      description: "Learn how to authenticate and make your first API request",;
      icon: BookOpen,;
      path: "/developers/docs/getting-started",;
      color: "from-blue-500 to-cyan-500"},;
    {;
      title: "API Reference",;
      description: "Detailed documentation for all available endpoints",;
      icon: Code,;
      path: "/developers/docs/reference",;
      color: "from-purple-500 to-pink-500"},;
    {;
      title: "Webhooks",;
      description: "Subscribe to events and receive real-time updates",;
      icon: Webhook,;
      path: "/developers/docs/webhooks",;
      color: "from-green-500 to-emerald-500"},;
    {;
      title: "Sample Code",;
<<<<<<< HEAD
<<<<<<< HEAD
      description: "Examples in JavaScript, Python, and Node.js",;
=======
      description: "Examples in JavaScript, Python, and Node && Node.js";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      description: "Examples in JavaScript, Python, and Node && Node.js";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: Zap,;
      path: "/developers/docs/samples",;
      color: "from-yellow-500 to-orange-500"},;
    {;
      title: "Error Codes & Rate Limits",;
      description: "Understanding API errors and rate limiting",;
      icon: AlertCircle,;
      path: "/developers/docs/errors",;
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
;
export function ApiDocsHub() {;
  const sections = [;
    {;
      title:"Getting Started",;
      description:"Learn how to authenticate and make your first API request",;
      icon:BookOpen,;
      path:"/developers/docs/getting-started",;
      color:"from-blue-500 to-cyan-500"},;
    {;
      title:"API Reference",;
      description:"Detailed documentation for all available endpoints",;
      icon:Code,;
      path:"/developers/docs/reference",;
      color:"from-purple-500 to-pink-500"},;
    {;
      title:"Webhooks",;
      description:"Subscribe to events and receive real-time updates",;
      icon:Webhook,;
      path:"/developers/docs/webhooks",;
      color:"from-green-500 to-emerald-500"},;
    {;
      title:"Sample Code",;
      description:"Examples in JavaScript, Python, and Node.js",;
      icon:Zap,;
      path:"/developers/docs/samples",;
      color:"from-yellow-500 to-orange-500"},;
    {;
      title:"Error Codes & Rate Limits",;
      description:"Understanding API errors and rate limiting",;
      icon:AlertCircle,;
      path:"/developers/docs/errors",;
      color:"from-red-500 to-rose-500"}],;
;
  return (;
      color: "from-red-500 to-rose-500"}];
  return (;
=======
      color: "from-red-500 to-rose-500"}],;

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      color: "from-red-500 to-rose-500"}],;

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <ApiDocsLayout>;
      <div className="max-w-4xl">;
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>;
        <p className="text-zinc-400 text-lg mb-12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
          {sections && sections.map((section) => (;
            <Link
              key={section && section.path} 
              to={section && section.path}
              className="block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">;
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section && section.color} flex items-center justify-center mb-4`}>;
                <section && section.icon className="h-6 w-6 text-white" />;
              </div>;
              <h2 className="text-xl font-semibold text-white mb-2">{section && section.title}</h2>;
              <p className="text-zinc-400 mb-4">{section && section.description}</p>;
;
        <div className="grid gap-6 md:grid-cols-2">;
          {sections.map((section) => (;
            <Link ;
              key={section.path} ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid gap-6 md:grid-cols-2">;

      icon: Zap,
      path: "/developers / docs / samples",
      color: "from - yellow - 500 to - orange - 500"},
    {
      title: "Error Codes & Rate Limits",
      description: "Understanding API errors and rate limiting",
      icon: AlertCircle,
      path: "/developers / docs / errors",
      color: "from - red - 500 to - rose - 500"}],
  return (
    <ApiDocsLayout>;
      <div className="max - w-4xl">;
        <h1 className="text - 4xl font - bold text - white mb - 6">Zion AI Marketplace API</h1>;
        <p className="text - zinc - 400 text - lg mb - 12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;
        <div className="grid gap - 6 md:grid - cols - 2">;
          {sections.map ((section) => (
            <Link;
              key={section.path}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              to={section.path}
              className="block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all";
            >;
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4`}>;
                <section.icon className="h-6 w-6 text-white" />;
              </div>;
              <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>;
              <p className="text-zinc-400 mb-4">{section.description}</p>;
              <div className="flex items-center text-zion-cyan">;
                <span className="mr-2">View documentation</span>;
                <ArrowRight className="h-4 w-4" />;
              </div>;
            </Link>;
          ))}
        </div>;
;
        <div className="mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800">;
          <h2 className="text-xl font-semibold text-white mb-4">Ready to get started?</h2>;
          <p className="text-zinc-400 mb-6">;
            To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one.;
          </p>;
          <Link;
            to="/developers/portal";
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors";
          >;
            Go to Developer Portal;
            <ArrowRight className="ml-2 h-4 w-4" />;
          </Link>;
        </div>;
      </div>;
    </ApiDocsLayout>;
          {sections.map((section) => (;
            <Link;
              key={section.path} ;


<<<<<<< HEAD
  );}
;
export default ApiDocsHub,;
 export function ApiDocsHub () {
  const sections = [ {
  title: "Getting Started";
description: "Learn how to authenticate and make your first API request";
icon: BookOpen;
path: "/developers/docs/getting-started";
color: "from-blue-500 to-cyan-500" 
};
{
  title: "API Reference";
description: "Detailed documentation for all available endpoints";
icon: Code;
path: "/developers/docs/reference";
color: "from-purple-500 to-pink-500" 
};
{
  title: "Webhooks";
description: "Subscribe to events and receive real-time updates";
icon: Webhook;
path: "/developers/docs/webhooks";
color: "from-green-500 to-emerald-500" 
};
{
  title: "Sample Code";
description: "Examples in JavaScript, Python, and Node.js";
icon: Zap;
path: "/developers/docs/samples";
color: "from-yellow-500 to-orange-500" 
};
{
  title: "Error Codes & Rate Limits";
description: "Understanding API errors and rate limiting";
icon: AlertCircle;
return (<ApiDocsLayout> <div className="max-w-4xl" > <h1 className="text-4xl font-bold text-white mb-6" >Zion AI Marketplace API</h1> <p className="text-zinc-400 text-lg mb-12" > Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible. </p> <div className="grid gap-6 md:grid-cols-2" > {
  sections.map ( (section) => (<Link key= {
  section.path 
}to= {
  section.path 
}className="block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all" > <div className= {
  `w-12 h-12 rounded-full bg-gradient-to-r $ {
  section.color 
}flex items-center justify-center mb-4` 
}> <section.icon className="h-6 w-6 text-white" /> </div> <h2 className="text-xl font-semibold text-white mb-2" > {
  section.title 
}</h2> <p className="text-zinc-400 mb-4" > {
  section.description 
}</p> <div className="flex items-center text-zion-cyan" > <span className="mr-2" >View documentation</span> <ArrowRight className="h-4 w-4" /> 
}</div> <div className="mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800" > <h2 className="text-xl font-semibold text-white mb-4" >Ready to get started?</h2> <p className="text-zinc-400 mb-6" > To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one. </p> <Link > Go to Developer Portal <ArrowRight className="ml-2 h-4 w-4" /> </Link> </div> </div> </ApiDocsLayout>) 
}export default ApiDocsHub;
        <div className="grid gap-6 md:grid-cols-2">;
          {sections.map((section) => (;
            <Link;
              key={section.path} ;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              to={section.path}
              className="block p - 6 rounded - lg bg - zinc - 900 border border - zinc - 800 hover:border - zinc - 700 transition - all";
            >;
              <div className={`w - 12 h - 12 rounded - full bg - gradient - to - r ${section.color} flex items - center justify - center mb - 4`}>;
                <section.icon className="h - 6 w - 6 text - white" />;
              </div>;
              <h2 className="text - xl font - semibold text - white mb - 2">{section.title}</h2>;
              <p className="text - zinc - 400 mb - 4">{section.description}</p>;
              <div className="flex items - center text - zion - cyan">;
                <span className="mr - 2">View documentation</span>;
                <ArrowRight className="h - 4 w - 4" />;
              </div>;
            </Link>))}
        </div>;
        <div className="mt - 12 p - 6 rounded - lg bg - zinc - 900 border border - zinc - 800">;
          <h2 className="text - xl font - semibold text - white mb - 4">Ready to get started?</h2>;
          <p className="text - zinc - 400 mb - 6">;
            To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one.;
          </p>;
          <Link;
            to="/developers / portal";
            className="inline - flex items - center px - 4 py - 2 rounded - md bg - zion - purple text - white hover: bg - zion - purple / 90 transition - colors";
          >;
            Go to Developer Portal;
            <ArrowRight className="ml - 2 h - 4 w - 4" />;
          </Link>;
        </div>;
      </div>;
    </ApiDocsLayout>);
}
export default ApiDocsHub;
;

=======
          {sections.map((section) => (;
            <Link;
              key={section.path} ;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
