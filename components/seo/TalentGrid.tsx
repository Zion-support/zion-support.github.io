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
  );
}