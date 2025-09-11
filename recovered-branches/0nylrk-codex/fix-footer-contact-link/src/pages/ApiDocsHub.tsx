


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

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
=======    {
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap} from "lucide-react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
=======

==============

=======import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

  return (=======
      color: "from-red-500 to-rose-500"}],;

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <ApiDocsLayout>;
      <div className="max-w-4xl">;
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>;
        <p className="text-zinc-400 text-lg mb-12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;
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

=======
          {sections.map((section) => (;
            <Link;
              key={section.path} ;
