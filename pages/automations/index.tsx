
<<<<<<< HEAD

<<<<<<< HEAD
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],

import type { NextPage } from 'next';
import Link from 'next/link';

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const AutomationsIndex: NextPage = () => {
  const items = [
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' }
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }]
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],
<<<<<<< HEAD
=======
=======

    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Autonomous Automations</h1>
      <p className="text-gray-600">These run in the cloud on a schedule, with no human interaction.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it) => (
          <Link key={it.href} href={it.href}>
            <div className="enhanced-card hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">{it.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
export default AutomationsIndex;
<<<<<<< HEAD
    </main>);
},
export default AutomationsIndex,

export default AutomationsIndex,;
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
=======
            </div>
          </Link>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
import type { NextPage } from 'next',
import Link from 'next / link',
const AutomationsIndex: NextPage = () => {
  const items = [;
    { href: '/automations / top - talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations / sitemap - status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],
  return (
    <main className="space - y-6">;
      <h1 className="text - 3xl font - bold">Autonomous Automations</h1>;
      <p className="text - gray - 600">These run in the cloud on a schedule, with no human interaction.</p>;
      <div className="grid md:grid - cols - 2 gap - 4">;
        {items.map ((it) => (
          <Link key={it.href} href={it.href}>;
            <div className="enhanced - card hover:shadow - lg cursor - pointer">;
              <h2 className="text - xl font - semibold">{it.title}</h2>;
              <p className="text - sm text - gray - 600 mt - 1">{it.desc}</p>;
            </div>;
          </Link>))}
      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </main>;
  );
},;
export default AutomationsIndex;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
