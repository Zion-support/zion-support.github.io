<<<<<<< HEAD
import type { NextPage } from 'next',;
import Link from 'next/link',;
;
const AutomationsIndex:NextPage = () => {;
  const items = [;
    { href:'/automations/top-talents', title:'Top Talents (Auto)', desc:'Aggregated from approved reviews, updated on schedule' },;
    { href:'/automations/sitemap-status', title:'Sitemap Status (Auto)', desc:'Nightly sitemap and weekly pings to search engines' }],;
;
  return (;
    <main className="space-y-6">;
      <h1 className="text-3xl font-bold">Autonomous Automations</h1>;
      <p className="text-gray-600">These run in the cloud on a schedule, with no human interaction.</p>;
      <div className="grid md:grid-cols-2 gap-4">;
        {items.map((it) => (;
          <Link key={it.href} href={it.href}>;
            <div className="enhanced-card hover:shadow-lg cursor-pointer">;
              <h2 className="text-xl font-semibold">{it.title}</h2>;
              <p className="text-sm text-gray-600 mt-1">{it.desc}</p>;
            </div>;
          </Link>;
        ))}
      </div>;
    </main>;
  ),;
},;
;
=======
import type { NextPage } from 'next',
import Link from 'next/link',
const AutomationsIndex: NextPage = () => {
  const items = [
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],

  return (
    <main className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-3xl font-bold&quot;>Autonomous Automations</h1>
      <p className=&quot;text-gray-600&quot;>These run in the cloud on a schedule, with no human interaction.</p>
      <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
        {items.map((it) => (
          <Link key={it.href} href={it.href}>
            <div className=&quot;enhanced-card hover:shadow-lg cursor-pointer&quot;>
              <h2 className=&quot;text-xl font-semibold&quot;>{it.title}</h2>
              <p className=&quot;text-sm text-gray-600 mt-1&quot;>{it.desc}</p>            </div>
          </Link>
        ))}
      </div>
    </main>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default AutomationsIndex,