import type { NextPage } from 'next';
import Link from 'next/link';

const AutomationsIndex: NextPage = () => {
  const items = [
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }];

  return (
    <main className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-3xl font-bold&quot;>Autonomous Automations</h1>
      <p className=&quot;text-gray-600&quot;>These run in the cloud on a schedule, with no human interaction.</p>
      <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
        {items.map((it) => (
          <Link key={it.href} href={it.href}>
            <div className=&quot;enhanced-card hover:shadow-lg cursor-pointer&quot;>
              <h2 className=&quot;text-xl font-semibold&quot;>{it.title}</h2>
              <p className=&quot;text-sm text-gray-600 mt-1&quot;>{it.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default AutomationsIndex;