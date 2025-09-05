import React from 'react',
import { TALENTPROFILES } from '../../data/talent',
import type { TalentProfile } from '../../data/talent',
type Props = {
  region?: string,
  service?: string
},

function matchesRegion(profile: TalentProfile, region?: string) {
  if (!region) return true,
  const r = region.toLowerCase(),
  return profile.location.toLowerCase().includes(r)
}

function matchesService(profile: TalentProfile, service?: string) {
  if (!service) return true,
  const s = service.toLowerCase(),
  return profile.title.toLowerCase().includes(s) || profile.skills.some((sk) => sk.toLowerCase().includes(s))
}

export default function TalentGrid({ region, service }: Props) {
  const items = React.useMemo(
    () => TALENTPROFILES.filter((p) => matchesRegion(p, region) && matchesService(p, service)),
    [region, service]
  ),

  if (items.length === 0) {
    return <div className="text-sm text-gray-400">No matching talent found. Try broadening filters.</div>  }

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
import type {TalentProfile} from '../../data/talent';

type Props = {region?: string;
  service?: string};

function matchesRegion(profile: TalentProfile, region?: string) {if (!region) return true;
  const r = region.toLowerCase();
  return profile.location.toLowerCase().includes(r)}

function matchesService(profile: TalentProfile, service?: string) {if (!service) return true;
  const s = service.toLowerCase();
  return profile.title.toLowerCase().includes(s) || profile.skills.some(_(sk) => sk.toLowerCase().includes(s))}

export default function TalentGrid(_{region, service}: Props) {const items = React.useMemo(_() => TALENTPROFILES.filter(_(p) => matchesRegion(p, region) && matchesService(p, service)), _[region, service]
  );

  if (items.length === 0) {
    return <div className="text-sm text-gray-400">No matching talent found. Try broadening filters.</div>}

  return (_<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            {p.skills.slice(0, 6).map(_(sk) => (
              <span key={sk} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">{sk}</span>
            ))}
          </div>
          <div className="mt-3 text-sm">${p.hourlyRateUsd}/hr • {p.availability}</div>
        </div>
      ))}
    </div>
  )
}