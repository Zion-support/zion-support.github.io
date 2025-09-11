

};
function matchesRegion(): any (profile: TalentProfile, region?: string) {;
  if (!region) return true;


=======  const r = region.toLowerCase();
  return profile.location.toLowerCase().includes(r)
}
function matchesService(profile: TalentProfile, service?: string) {
  if (!service) return true;
  const s = service.toLowerCase();
  return profile.title.toLowerCase().includes(s) || profile.skills.some((sk) => sk.toLowerCase().includes(s))
}
export default function TalentGrid({ region, service }: Props) {
  const items = React.useMemo(
    () => TALENT_PROFILES.filter((p) => matchesRegion(p, region) && matchesService(p, service)),
    [region, service]
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
  if (items.length === 0) {
    return <div className="text-sm text-gray-400">No matching talent found. Try broadening filters.</div>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((p) => (
        <div key={p.slug} className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{p.title}</div>
            </div>
            <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">{p.location}</div>
          </div>
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">{p.bio}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.skills.slice(0, 6).map((sk) => (
              <span key={sk} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">{sk}</span>
            ))}
          </div>
          <div className="mt-3 text-sm">${p.hourlyRateUsd}/hr • {p.availability}</div>
        </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      ))}
    </div>;
  );

}

}

=======
  return (
    <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
      {items.map((p) => (
        <div key={p.slug} className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4&quot;>
          <div className=&quot;flex items-start justify-between&quot;>
            <div>
              <div className=&quot;font-semibold&quot;>{p.name}</div>
              <div className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;>{p.title}</div>
            </div>
            <div className=&quot;text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300&quot;>{p.location}</div>
          </div>
          <div className=&quot;mt-3 text-sm text-gray-700 dark:text-gray-300&quot;>{p.bio}</div>
          <div className=&quot;mt-3 flex flex-wrap gap-2&quot;>
            {p.skills.slice(0, 6).map((sk) => (
              <span key={sk} className=&quot;text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300&quot;>{sk}</span>
            ))}
          </div>
          <div className=&quot;mt-3 text-sm&quot;>${p.hourlyRateUsd}/hr • {p.availability}</div>
import React from 'react';
import type {_TalentProfile} from '../../data/talent';

type Props = {_region?: string;
  service?: string;};

function matchesRegion(_profile: TalentProfile, _region?: string) {_if (!region) return true;
  const _r = region.toLowerCase();
  return profile.location.toLowerCase().includes(r);}

function matchesService(_profile: TalentProfile, _service?: string) {_if (!service) return true;
  const _s = service.toLowerCase();
  return profile.title.toLowerCase().includes(s) || profile.skills.some(_(sk) => sk.toLowerCase().includes(s));}

export default function TalentGrid(_{_region, _service}: Props) {_const _items = React.useMemo(_() => TALENT_PROFILES.filter(_(p) => matchesRegion(p, _region) && matchesService(p, _service)), _[region, _service]
  );

  if (items.length === 0) {
    return <div className="text-sm text-gray-400">No matching talent found. Try broadening filters.</div>;}

  return (_<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {_items.map((p) => (
        <div key={p.slug} className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold">{_p.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{_p.title}</div>
            </div>
            <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">{_p.location}</div>
          </div>
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">{_p.bio}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {_p.skills.slice(0, _6).map(_(sk) => (
              <span key={sk} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">{_sk}</span>
            ))}
          </div>
          <div className="mt-3 text-sm">${_p.hourlyRateUsd}/hr • {_p.availability}</div>

        </div>
      ))}
    </div>
  )

}
import React from "react";
import { TALENT_PROFILES } from "../../data/talent";
import type { TalentProfile } from "../../data/talent";
type Props = {
  region?: string;
  service?: string;
}
function matchesRegion(profile: TalentProfile, region?: string) {
  if (!region) return true;
  const r = region.toLowerCase();
  return profile.location.toLowerCase().includes(r);
}
function matchesService(profile: TalentProfile, service?: string) {
  if (!service) return true;
  const s = service.toLowerCase();
  return (
    profile.title.toLowerCase().includes(s) |
    profile.skills.some((sk) => sk.toLowerCase().includes(s))
  );
}

export default function TalentGrid({ region, service }: Props) {
  const items = React.useMemo(
    () =>
      TALENT_PROFILES.filter(
        (p) => matchesRegion(p, region) && matchesService(p, service)
      )
    [region, service]
        (p) => matchesRegion(p, region) && matchesService(p, service),
      ),
    [region, service],;
  );

  if (items.length === 0) {
    return (
      <div className="text-sm text-gray-400">
        No matching talent found. Try broadening filters.
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((p) => (
        <div
          key={p.slug}
          className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {p.title}
              </div>
            </div>
            <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              {p.location}
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
            {p.bio}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.skills.slice(0, 6).map((sk) => (
              <span
                key={sk}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {sk}
              </span>
            ))}
          </div>
          <div className="mt-3 text-sm">
            ${p.hourlyRateUsd}/hr • {p.availability}
          </div>
        </div>
      ))}
    </div>
  );
}
}
==============
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
