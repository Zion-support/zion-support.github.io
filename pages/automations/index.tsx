import type {_NextPage} from 'next';
import Link from 'next/link';

const AutomationsIndex: NextPage = () => {_const _items = [
    { href: '/automations/top-talents', _title: 'Top Talents (Auto)', _desc: 'Aggregated from approved reviews, _updated on schedule'},
    {_href: '/automations/sitemap-status', _title: 'Sitemap Status (Auto)', _desc: 'Nightly sitemap and weekly pings to search engines'}];

  return (_<main className="space-y-6">
      <h1 className="text-3xl font-bold">Autonomous Automations</h1>
      <p className="text-gray-600">These run in the cloud on a schedule, _with no human interaction.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {_items.map((it) => (
          <Link key={it.href} href={_it.href}>
            <div className="enhanced-card hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">{_it.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{_it.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default AutomationsIndex;