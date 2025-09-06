
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

      icon: Zap,
      path: "/developers/docs/samples",
      color: "from-yellow-500 to-orange-500"},

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    {


      title: "Sample Code",;
      description: "Examples in JavaScript, Python, and Node.js";

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      title: "Sample Code",
      description: "Examples in JavaScript, Python, and Node.js",
      icon: Zap,
      path: "/developers/docs/samples",
      color: "from-yellow-500 to-orange-500"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
      icon: AlertCircle,;
      path: "/developers/docs/errors",;
      color: "from-red-500 to-rose-500"}],;

  return (
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
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
