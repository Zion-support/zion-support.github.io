import React from 'react';
import Link from 'next/link';
import { Git, Docker, VisualStudioCode } from 'lucide-react';

const devTools = [
  {
    name: 'GitHub Free',
    href: 'https://github.com/organizations?ref=ziontech',
    desc: 'Free plan for personal and small team repositories.',
    category: 'Version Control'
  },
  {
    name: 'GitLab Free',
    href: 'https://about.gitlab.com/free-plan/?ref=ziontech',
    desc: 'Self-hosted option with CI/CD for small projects.',
    category: 'Version Control'
  },
  {
    name: 'VS Code Community',
    href: 'https://code.visualstudio.com/?ref=ziontech',
    desc: 'Free code editor with thousands of extensions.',
    category: 'Development Tools'
  },
  {
    name: 'Docker Hub Free',
    href: 'https://hub.docker.com/?ref=ziontech',
    desc: 'Free service for building and sharing containers.',
    category: 'Containerization'
  },
  {
    name: 'Replit Free',
    href: 'https://replit.com/?ref=ziontech',
    desc: 'Online IDE with free tier for learning and collaboration.',
    category: 'Online IDE'
  },
  {
    name: 'Glitch Free',
    href: 'https://glitch.com/?ref=ziontech',
    desc: 'Free platform for live coding and app prototyping.',
    category: 'Online IDE'
  },
  {
    name: 'GitKraken Free',
    href: 'https://www.gitkraken.com/free-personal-license?ref=ziontech',
    desc: 'Powerful Git client with free personal license.',
    category: 'Git Tools'
  },
];

// Group by category
const grouped = devTools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = [];
  acc[tool.category].push(tool);
  return acc;
}, {} as Record<string, typeof devTools>);

export const metadata = {
  title: 'Free Developer & OSS Tools | Zion Tech Group',
  description: 'Curated free developer tools with referral links. Every referral supports open-source innovation.',
};

export default function DevToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
            <VisualStudioCode className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Free Developer & Open Source Tools
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discover free tools to accelerate your development workflow. Referral links support our mission.
          </p>
        </div>

        {/* Grouped Tools */}
        <div className="space-y-16">
          {Object.entries(grouped).map(([category, tools]) => (
            <section key={category}>
              <h2 className="text-2xl font-bold text-white mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {tool.desc}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit <ExternalLink className="ml-1 h-3 w-3" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 bg-slate-800/30 border border-slate-700 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Scalable Apps?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get guidance on leveraging open-source tools for your projects.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Back to Support */}
        <div className="mt-12 text-center">
          <Link 
            href="/support"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ‼️ Back to Support Page
          </Link>
        </div>
      </div>
    </div>
  );
}
