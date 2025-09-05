
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
    <ApiDocsLayout>;
      <div className="max-w-4xl">;
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>;
        <p className="text-zinc-400 text-lg mb-12">;
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.;
        </p>;
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
  );
=======
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from "lucide-react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",export function ApiDocsHub() {
  const sections = [
    {
      title: &quot;Getting Started&quot;,
      description: &quot;Learn how to authenticate and make your first API request&quot;,
      icon: BookOpen,
      path: &quot;/developers/docs/getting-started&quot;,
      color: &quot;from-blue-500 to-cyan-500&quot;},
    {
      title: &quot;API Reference&quot;,
      description: &quot;Detailed documentation for all available endpoints&quot;,
      icon: Code,
      path: &quot;/developers/docs/reference&quot;,
      color: &quot;from-purple-500 to-pink-500&quot;},
    {
      title: &quot;Webhooks&quot;,
      description: &quot;Subscribe to events and receive real-time updates&quot;,
      icon: Webhook,
      path: &quot;/developers/docs/webhooks&quot;,
      color: &quot;from-green-500 to-emerald-500&quot;},
    {
      title: &quot;Sample Code&quot;,
      description: &quot;Examples in JavaScript, Python, and Node.js&quot;,
      icon: Zap,
      path: &quot;/developers/docs/samples&quot;,
      color: &quot;from-yellow-500 to-orange-500&quot;},
    {
      title: &quot;Error Codes & Rate Limits&quot;,
      description: &quot;Understanding API errors and rate limiting&quot;,
      icon: AlertCircle,
      path: "/developers/docs/errors",
      color: "from-red-500 to-rose-500"}],
  return (
    <ApiDocsLayout>
      <div className=&quot;max-w-4xl&quot;>
        <h1 className=&quot;text-4xl font-bold text-white mb-6&quot;>Zion AI Marketplace API</h1>
        <p className=&quot;text-zinc-400 text-lg mb-12&quot;>
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.
        </p>

        <div className=&quot;grid gap-6 md:grid-cols-2&quot;>
          {sections.map((section) => (
            <Link 
              key={section.path} 
              to={section.path}
              className=&quot;block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all&quot;
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4`}>
                <section.icon className=&quot;h-6 w-6 text-white&quot; />
              </div>
              <h2 className=&quot;text-xl font-semibold text-white mb-2&quot;>{section.title}</h2>
              <p className=&quot;text-zinc-400 mb-4&quot;>{section.description}</p>
              <div className=&quot;flex items-center text-zion-cyan&quot;>
                <span className=&quot;mr-2&quot;>View documentation</span>
                <ArrowRight className=&quot;h-4 w-4&quot; />
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiDocsHub() {_const _sections = [
    {
      title: "Getting Started", _description: "Learn how to authenticate and make your first API request", _icon: BookOpen, _path: "/developers/docs/getting-started", _color: "from-blue-500 to-cyan-500"},
    {_title: "API Reference", _description: "Detailed documentation for all available endpoints", _icon: Code, _path: "/developers/docs/reference", _color: "from-purple-500 to-pink-500"},
    {_title: "Webhooks", _description: "Subscribe to events and receive real-time updates", _icon: Webhook, _path: "/developers/docs/webhooks", _color: "from-green-500 to-emerald-500"},
    {_title: "Sample Code", _description: "Examples in JavaScript, _Python, _and Node.js", _icon: Zap, _path: "/developers/docs/samples", _color: "from-yellow-500 to-orange-500"},
    {_title: "Error Codes & Rate Limits", _description: "Understanding API errors and rate limiting", _icon: AlertCircle, _path: "/developers/docs/errors", _color: "from-red-500 to-rose-500"}];

  return (_<ApiDocsLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>
        <p className="text-zinc-400 text-lg mb-12">
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {_sections.map((section) => (
            <Link 
              key={section.path} 
              to={_section.path}
              className="block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div className={_`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4`}>
                <section.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">{_section.title}</h2>
              <p className="text-zinc-400 mb-4">{_section.description}</p>
              <div className="flex items-center text-zion-cyan">
                <span className="mr-2">View documentation</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className=&quot;mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800&quot;>
          <h2 className=&quot;text-xl font-semibold text-white mb-4&quot;>Ready to get started?</h2>
          <p className=&quot;text-zinc-400 mb-6&quot;>
            To use the Zion AI Marketplace API, you'll need an API key. Visit your developer portal to create one.
          </p>
          <Link
            to="/developers/portal"
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover: bg-zion-purple/90 transition-colors"          >
            Go to Developer Portal
            <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
          </Link>
        </div>
      </div>
    </ApiDocsLayout>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export default ApiDocsHub,;
