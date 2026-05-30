import Link from 'next/link';

export const metadata = {
  title: 'Free CDN Services | Zion Tech Group',
  description: 'Free CDN platforms to speed up your websites. No cost required.',
};

export default function FreeCdnPage() {
  const cdnServices = [
    {
      name: 'Cloudflare',
      href: 'https://dash.cloudflare.com/sign-up?ref=ziontech',
      desc: 'Global CDN with free tier including DNS, SSL, and DDoS protection.',
      category: 'Global CDN',
    },
    {
      name: 'Netlify',
      href: 'https://app.netlify.com/signup?ref=ziontech',
      desc: 'Free static site hosting + global CDN + continuous deployment.',
      category: 'Static Hosting',
    },
    {
      name: 'Vercel',
      href: 'https://vercel.com/signup?ref=ziontech',
      desc: 'Free Next.js hosting with edge network and zero-config deployments.',
      category: 'Static Hosting',
    },
    {
      name: 'GitHub Pages',
      href: 'https://pages.github.com/?ref=ziontech',
      desc: 'Static site hosting directly from your GitHub repository.',
      category: 'Static Hosting',
    },
    {
      name: 'jsDelivr',
      href: 'https://www.jsdelivr.com/?ref=ziontech',
      desc: 'Free CDN for open-source projects with global edge caching.',
      category: 'Library CDN',
    },
  ];

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-8">
        Free CDN Services
      </h1>
      <p className="mb-8 text-lg text-gray-300">
        Leverage these free CDN platforms to improve your website's performance, security, and reliability.
      </p>

      <div className="space-y-6">
        {cdnServices.map((service) => (
          <div key={service.name} className="rounded-xl border border-purple-500/20 bg-slate-950/50 p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-0.5 h-8 w-8 text-purple-400">
                {/* Placeholder for lucide icon - we'll use a simple div for now */}
                <div className="rounded bg-purple-500/20 p-1">CDN</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{service.category}</p>
                <p className="mt-2 text-base text-gray-200">{service.desc}</p>
                <Link
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 mt-3 text-xs font-semibold rounded-border border-purple-500/30 bg-purple-900/20 hover:bg-purple-500/30 transition-colors"
                >
                  Visit {service.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-gray-400">
        <p>
          All services offer free tiers suitable for personal projects, small businesses, and open-source
          initiatives. Always review the latest terms on each provider's website.
        </p>
      </div>
    </main>
  );
}