

<<<<<<< HEAD


import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap} from "lucide-react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react",
<<<<<<< HEAD
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
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
    {
      title: "Sample Code"
      description: "Examples in JavaScript, Python, and Node.js";
      icon: Zap
      path: "/developers/docs/samples"
      color: "from-yellow-500 to-orange-500"}
      title: "Sample Code",;
      description: "Examples in JavaScript, Python, and Node.js";
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
    {


      title: "Sample Code",;
      description: "Examples in JavaScript, Python, and Node.js";

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
=======
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",      title: "Sample Code",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      description: "Examples in JavaScript, Python, and Node.js",
      icon: Zap,
      path: "/developers/docs/samples",
      color: "from-yellow-500 to-orange-500"},
<<<<<<< HEAD
    {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          </p>

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

import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap} from "lucide-react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
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


import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;


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
      description: "Examples in JavaScript, Python, and Node && Node.js";
      icon: Zap,;
      path: "/developers/docs/samples",;
      color: "from-yellow-500 to-orange-500"},;
    {;
      title: "Error Codes & Rate Limits",;
      description: "Understanding API errors and rate limiting",;
=======
          </p>      icon: Zap,;
      path: "/developers/docs/samples",;
      color: "from-yellow-500 to-orange-500"},;
    {;
      title: "Error Codes & Rate Limits",,
  description: "Understanding API errors and rate limiting",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: AlertCircle,;
      path: "/developers/docs/errors",;
      color: "from-red-500 to-rose-500"}],;

<<<<<<< HEAD
  return (
    <ApiDocsLayout>;
=======
  return (    <ApiDocsLayout>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="max-w-4xl">;
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>;
        <p className="text-zinc-400 text-lg mb-12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;

        <div className="grid gap-6 md:grid-cols-2">;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
      <div className="max-w-4xl">;
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>;
        <p className="text-zinc-400 text-lg mb-12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;
<<<<<<< HEAD
        <div className="grid gap - 6 md:grid - cols - 2">;
=======
        <div className="grid gap - 6 md:grid - cols-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          {sections.map ((section) => (
            <Link;
              key={section.path}
              to={section.path}
<<<<<<< HEAD
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
=======
              className="block p - 6 rounded - lg bg - zinc - 900 border border - zinc - 800 hover:border - zinc - 700 transition-all";
            >;
              <div className={`w - 12 h - 12 rounded - full bg - gradient - to - r ${section.color} flex items - center justify - center mb - 4`}>;
                <section.icon className="h - 6 w - 6 text-white" />;
              </div>;
              <h2 className="text - xl font - semibold text - white mb-2">{section.title}</h2>;
              <p className="text - zinc - 400 mb-4">{section.description}</p>;
              <div className="flex items - center text - zion-cyan">;
                <span className="mr-2">View documentation</span>;
                <ArrowRight className="h - 4 w-4" />;
              </div>;
            </Link>))}
        </div>;
        <div className="mt - 12 p - 6 rounded - lg bg - zinc - 900 border border - zinc-800">;
          <h2 className="text - xl font - semibold text - white mb-4">Ready to get started?</h2>;
          <p className="text - zinc - 400 mb-6">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one.;
          </p>;
          <Link;
            to="/developers / portal";
<<<<<<< HEAD
            className="inline - flex items - center px - 4 py - 2 rounded - md bg - zion - purple text - white hover: bg - zion - purple / 90 transition - colors";
          >;
            Go to Developer Portal;
            <ArrowRight className="ml - 2 h - 4 w - 4" />;
=======
            className="inline - flex items - center px - 4 py - 2 rounded - md bg - zion - purple text - white hover: bg - zion - purple / 90 transition-colors";
          >;
            Go to Developer Portal;
            <ArrowRight className="ml - 2 h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          </Link>;
        </div>;
      </div>;
    </ApiDocsLayout>);
}
export default ApiDocsHub;
;
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
              to={section.path}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  );}
;
export default ApiDocsHub,;
 export function ApiDocsHub () {
  const sections = [ {
<<<<<<< HEAD
  title: "Getting Started";
description: "Learn how to authenticate and make your first API request";
=======
  title: "Getting Started",
  description: "Learn how to authenticate and make your first API request";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
icon: BookOpen;
path: "/developers/docs/getting-started";
color: "from-blue-500 to-cyan-500" 
};
{
<<<<<<< HEAD
  title: "API Reference";
description: "Detailed documentation for all available endpoints";
=======
  title: "API Reference",
  description: "Detailed documentation for all available endpoints";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
icon: Code;
path: "/developers/docs/reference";
color: "from-purple-500 to-pink-500" 
};
{
<<<<<<< HEAD
  title: "Webhooks";
description: "Subscribe to events and receive real-time updates";
=======
  title: "Webhooks",
  description: "Subscribe to events and receive real-time updates";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
icon: Webhook;
path: "/developers/docs/webhooks";
color: "from-green-500 to-emerald-500" 
};
{
<<<<<<< HEAD
  title: "Sample Code";
description: "Examples in JavaScript, Python, and Node.js";
=======
  title: "Sample Code",
  description: "Examples in JavaScript, Python, and Node.js";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
icon: Zap;
path: "/developers/docs/samples";
color: "from-yellow-500 to-orange-500" 
};
{
<<<<<<< HEAD
  title: "Error Codes & Rate Limits";
description: "Understanding API errors and rate limiting";
=======
  title: "Error Codes & Rate Limits",
  description: "Understanding API errors and rate limiting";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
