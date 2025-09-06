
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import {
  ArrowRight
  BookOpen
  Code
  Webhook
  AlertCircle
  Zap
} from 'lucide-react'
import ApiDocsLayout from '@/components/developers/ApiDocsLayout'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ApiDocsHub() {
  const sections = [
    {
      title: 'Getting Started'
      description: 'Learn how to authenticate and make your first API request'
      icon: BookOpen
      path: '/developers/docs/getting-started'
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'API Reference'
      description: 'Detailed documentation for all available endpoints'
      icon: Code
      path: '/developers/docs/reference'
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Webhooks'
      description: 'Subscribe to events and receive real-time updates'
      icon: Webhook
      path: '/developers/docs/webhooks'
      color: 'from-green-500 to-emerald-500'
    }
    {
      title: 'Sample Code'
      description: 'Examples in JavaScript, Python, and Node.js'
      icon: Zap
      path: '/docs/sample-code'
      color: 'from-yellow-500 to-orange-500'
    }
    {
      title: 'Error Codes & Rate Limits'
      description: 'Understanding API errors and rate limiting'
      icon: AlertCircle
      path: '/developers/docs/errors'
      color: 'from-red-500 to-rose-500'
    }
  ]
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import Link from "next/link",
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from 'lucide-react'
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
<<<<<<< HEAD
<<<<<<< HEAD

export function ApiDocsHub() {
=======
xport function ApiDocsHub() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ApiDocsHub() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const sections = [
    {
      title: "Getting Started",
      description: "Learn how to authenticate and make your first API request",
      icon: BookOpen,
      path: "/developers/docs/getting-started",
      color: "from-blue-500 to-cyan-500"},
    {
      title: "API Reference",
      description: "Detailed documentation for all available endpoints",
      icon: Code,
      path: "/developers/docs/reference",
      color: "from-purple-500 to-pink-500"},
    {
      title: "Webhooks",
      description: "Subscribe to events and receive real-time updates",
      icon: Webhook,
      path: "/developers/docs/webhooks",
      color: "from-green-500 to-emerald-500"},
    {
      title: "Sample Code",
      description: "Examples in JavaScript, Python, and Node.js",
      icon: Zap,
      path: "/docs/sample-code",
      color: "from-yellow-500 to-orange-500"},
    {
      title: "Error Codes & Rate Limits",
      description: "Understanding API errors and rate limiting",
      icon: AlertCircle,
<<<<<<< HEAD
<<<<<<< HEAD

=======
      path: "/developers/docs/errors",
      color: "from-red-500 to-rose-500"}],

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
      path: '/developers/docs/errors',
      color: 'from-red-500 to-rose-500',
    },
  ]
=======
      path: "/developers/docs/errors",
      color: "from-red-500 to-rose-500"}],

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
=======
      path: "/developers/docs/errors",
      color: "from-red-500 to-rose-500"}],

      path: '/developers/docs/errors',
      color: 'from-red-500 to-rose-500',
    },
  ]
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <ApiDocsLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>
        <p className="text-zinc-400 text-lg mb-12">
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.
        </p>
<<<<<<< HEAD
<<<<<<< HEAD

              </div>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='grid gap-6 md:grid-cols-2'>
          {sections.map(section => (
            <Link
              key={section.path}
              href={section.path}
              className='block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all'            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4`}
              >
                <section.icon className='h-6 w-6 text-white' />
<<<<<<< HEAD
>>>>>>>               </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.path}
              href={section.path}
              className="block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4`}>
                <section.icon className="h-6 w-6 text-white" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
              <p className="text-zinc-400 mb-4">{section.description}</p>
              <div className="flex items-center text-zion-cyan">
                <span className="mr-2">View documentation</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className='mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800'>
          <h2 className='text-xl font-semibold text-white mb-4'>
            Ready to get started?
          </h2>
          <p className='text-zinc-400 mb-6'>
            To use the Zion AI Marketplace API, you'll need an API key. Visit
            your developer portal to create one.
<<<<<<< HEAD
>>>>>>>           </p>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </p>
>>>>>>>           <Link
            href='/developers/portal'
            className='inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors'
=======
=======

        <div className="mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800">
          <h2 className="text-xl font-semibold text-white mb-4">Ready to get started?</h2>
          <p className="text-zinc-400 mb-6">
            To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one.
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </p>
          <Link
            href="/developers/portal"
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover: bg-zion-purple/90 transition-colors"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >
            Go to Developer Portal
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </ApiDocsLayout>;
  );
export default ApiDocsHub;
}
<<<<<<< HEAD
export default ApiDocsHub
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React from "react",;
import Link from "next/link",;
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from 'lucide-react';
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
      description: "Examples in JavaScript, Python, and Node.js",;
      icon: Zap,;
      path: "/docs/sample-code",;
      color: "from-yellow-500 to-orange-500"},;
    {;
      title: "Error Codes & Rate Limits",;
      description: "Understanding API errors and rate limiting",;
      icon: AlertCircle,;
      path: "/developers/docs/errors",;
      color: "from-red-500 to-rose-500"}];
  return (;
    <ApiDocsLayout>;
      <div className="max-w-4xl">;
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>;
        <p className="text-zinc-400 text-lg mb-12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;
        <div className="grid gap-6 md:grid-cols-2">;
          {sections.map((section) => (;
            <Link;
              key={section.path}
              href={section.path}
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
=======
=======
    </ApiDocsLayout>
  )
<<<<<<< HEAD
<<<<<<< HEAD
export default ApiDocsHub
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import Link from "next/link",;
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from 'lucide-react';
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
      description: "Examples in JavaScript, Python, and Node.js",;
      icon: Zap,;
      path: "/docs/sample-code",;
      color: "from-yellow-500 to-orange-500"},;
    {;
      title: "Error Codes & Rate Limits",;
      description: "Understanding API errors and rate limiting",;
      icon: AlertCircle,;
      path: "/developers/docs/errors",;
      color: "from-red-500 to-rose-500"}];
  return (;
    <ApiDocsLayout>;
      <div className="max-w-4xl">;
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>;
        <p className="text-zinc-400 text-lg mb-12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;
        <div className="grid gap-6 md:grid-cols-2">;
          {sections.map((section) => (;
            <Link;
              key={section.path}
              href={section.path}
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
        <div className="mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800">;
          <h2 className="text-xl font-semibold text-white mb-4">Ready to get started?</h2>;
          <p className="text-zinc-400 mb-6">;
            To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one.;
          </p>;
          <Link;
            href="/developers/portal";
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover: bg-zion-purple/90 transition-colors";
          >;
            Go to Developer Portal;
            <ArrowRight className="ml-2 h-4 w-4" />;
          </Link>;
        </div>;
      </div>;
    </ApiDocsLayout>;
  );
}
;
export default ApiDocsHub;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
    </ApiDocsLayout>
  )

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
