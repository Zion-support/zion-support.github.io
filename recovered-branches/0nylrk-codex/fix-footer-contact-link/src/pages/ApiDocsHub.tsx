
import React from &quot;react&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { ArrowRight, BookOpen, Code, Webhook, AlertCircle, Zap } from &quot;lucide-react&quot;;
import ApiDocsLayout from &quot;@/components/developers/ApiDocsLayout&quot;;

export function ApiDocsHub() {
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
      path: &quot;/developers/docs/errors&quot;,
      color: &quot;from-red-500 to-rose-500&quot;}];

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
            to=&quot;/developers/portal&quot;
            className=&quot;inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors&quot;
          >
            Go to Developer Portal
            <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
          </Link>
        </div>
      </div>
    </ApiDocsLayout>
  );
}

export default ApiDocsHub;
