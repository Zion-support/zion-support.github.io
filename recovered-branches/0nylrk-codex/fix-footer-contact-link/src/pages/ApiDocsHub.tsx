<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiDocsHub.tsx


<<<<<<< HEAD
import React from "react",
import { Link } from "react-router-dom",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    {

=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiDocsHub.tsx
import React from './react';
import { Link } from './react-router-dom';
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from './lucide-react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
export /**
 * ApiDocsHub - Function description
 */
function ApiDocsHub() {
  const sections = [;
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
    {


      title: "Sample Code",;
      description: "Examples in JavaScript, Python, and Node.js";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiDocsHub.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      title: "Sample Code",
      description: "Examples in JavaScript, Python, and Node.js",

      icon: Zap,
      path: "/developers/docs/samples",
      color: "from-yellow-500 to-orange-500"},
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiDocsHub.tsx
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export default ApiDocsHub;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      description: "Examples in JavaScript, Python, and Node && Node.js";
=======
      description: "Examples in JavaScript, Python, and Node.js",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      icon: Zap,;
      path: "/developers/docs/samples",;
      color: "from-yellow-500 to-orange-500"},;
    {;
      title: "Error Codes & Rate Limits",;
      description: "Understanding API errors and rate limiting",;
      icon: AlertCircle,;
      path: "/developers/docs/errors",;
<<<<<<< HEAD
      color: "from-red-500 to-rose-500"}],;
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      color: "from-red-500 to-rose-500"}];
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <ApiDocsLayout>;
      <div className="max-w-4xl">;
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>;
        <p className="text-zinc-400 text-lg mb-12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid gap-6 md:grid-cols-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiDocsHub.tsx

========
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
=======
;
        <div className="grid gap-6 md:grid-cols-2">;
          {sections.map((section) => (;
            <Link ;
              key={section.path} ;
              to={section.path}
              className="block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all";
            >;
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4`}>;
                <section.icon className="h-6 w-6 text-white" />;
              </div>;
              <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>;
              <p className="text-zinc-400 mb-4">{section.description}</p>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="flex items-center text-zion-cyan">;
                <span className="mr-2">View documentation</span>;
                <ArrowRight className="h-4 w-4" />;
              </div>;
            </Link>;
          ))}
        </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800">;
          <h2 className="text-xl font-semibold text-white mb-4">Ready to get started?</h2>;
          <p className="text-zinc-400 mb-6">;
            To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one.;
          </p>;
<<<<<<< HEAD
          <Link
            to="/developers/portal"
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover: bg-zion-purple/90 transition-colors">;
=======
          <Link;
            to="/developers/portal";
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors";
          >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            Go to Developer Portal;
            <ArrowRight className="ml-2 h-4 w-4" />;
          </Link>;
        </div>;
      </div>;
    </ApiDocsLayout>;
<<<<<<< HEAD
  );
}
export default ApiDocsHub;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiDocsHub.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiDocsHub.tsx

=======
          {sections.map((section) => (;
            <Link;
              key={section.path} ;

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiDocsHub.tsx
=======
        <div className="grid gap-6 md:grid-cols-2">;
          {sections.map((section) => (;
            <Link;
              key={section.path} ;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
