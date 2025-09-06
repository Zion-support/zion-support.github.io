<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======

    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],

import type { NextPage } from 'next';
import Link from 'next/link';

<<<<<<< HEAD

=======
const AutomationsIndex: NextPage = () => {
  const items = [
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' }
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }]
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======

    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

            </div>
          </Link>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            </div>
          </Link>
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD

=======

=======
    </main>;
  );
},;
=======
import type { NextPage } from 'next';
import Link from 'next/link';
const AutomationsIndex: NextPage;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>
          </Link>
        ))}
      </div>
    </main>
<<<<<<< HEAD
  )
}
export default AutomationsIndex;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
            </div>
          </Link>


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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </div>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    </main>;
  );
},;
export default AutomationsIndex;
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
);
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
export default AutomationsIndex;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
