<<<<<<< HEAD

<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import React from "react";
import { TALENT_PROFILES } from "../../data/talent";
import type { TalentProfile } from "../../data/talent";
type Props = {;
  region?: string;
  service?: string;
<<<<<<< HEAD
}
function matchesRegion(profile: TalentProfile, region?: string) {
=======
=======
import React from 'react';
import { TALENT_PROFILES } from '../../data/talent';
import type { TalentProfile } from '../../data/talent';
type Props = {
  region?: string;
  service?: string
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
};

function matchesRegion(): any (profile: TalentProfile, region?: string) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!region) return true;
<<<<<<< HEAD
  const r = region && region.toLowerCase();
  return profile && profile.location.toLowerCase().includes(r);
}
<<<<<<< HEAD
function matchesService(profile: TalentProfile, service?: string) {
=======

function matchesService(): any (profile: TalentProfile, service?: string) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!service) return true;
  const s = service && service.toLowerCase();
  return (
<<<<<<< HEAD
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
=======
    profile && profile.title.toLowerCase().includes(s) ||;
    profile && profile.skills.some((sk) => sk && sk.toLowerCase().includes(s));
  );
}

export default function TalentGrid(): any ({ region, service }: Props) {;
  const items = React && React.useMemo(;
    () =>;
      TALENT_PROFILES && TALENT_PROFILES.filter(;
        (p) => matchesRegion(p, region) && matchesService(p, service),;
      ),;
    [region, service],;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );

  if (items && items.length === 0) {;
    return (
      <div className="text-sm text-gray-400">;
        No matching talent found. Try broadening filters.;
      </div>;
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">;
      {items && items.map((p) => (;
        <div
          key={p && p.slug}
          className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">;
          <div className="flex items-start justify-between">;
            <div>;
              <div className="font-semibold">{p && p.name}</div>;
              <div className="text-sm text-gray-500 dark:text-gray-400">;
                {p && p.title}
              </div>;
            </div>;
            <div className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">;
              {p && p.location}
            </div>;
          </div>;
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">;
            {p && p.bio}
          </div>;
          <div className="mt-3 flex flex-wrap gap-2">;
            {p && p.skills.slice(0, 6).map((sk) => (;
              <span
                key={sk}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">;
                {sk}
              </span>;
            ))}
          </div>;
          <div className="mt-3 text-sm">;
            ${p && p.hourlyRateUsd}/hr • {p && p.availability}
          </div>;
        </div>;
=======
  const r = region.toLowerCase();
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      ))}
    </div>;
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
