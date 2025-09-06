<<<<<<< HEAD
import React from 'react';
import { TALENT_PROFILES } from '../../data/talent';
import type { TalentProfile } from '../../data/talent';
<<<<<<< HEAD
type Props = any;
=======
import React from "react";
import { TALENT_PROFILES } from "../../data/talent";
import type { TalentProfile } from "../../data/talent";
type Props = {
  region?: string;
  service?: string;
}
=======

type Props = {
  region?: string;
  service?: string;
};

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function matchesRegion(profile: TalentProfile, region?: string) {
  if (!region) return true;
  const r = region.toLowerCase();
  return profile.location.toLowerCase().includes(r);
<<<<<<< HEAD
}
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function matchesService(profile: TalentProfile, service?: string) {
  if (!service) return true;
  const s = service.toLowerCase();
  return (
    profile.title.toLowerCase().includes(s) |
    profile.skills.some((sk) => sk.toLowerCase().includes(s))
  );
}
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function TalentGrid({ region, service }: Props) {
  const items = React.useMemo(
    () =>
      TALENT_PROFILES.filter(
<<<<<<< HEAD
        (p) => matchesRegion(p, region) && matchesService(p, service)
      )
=======
        p => matchesRegion(p, region) && matchesService(p, service)
      ),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    [region, service]
  );
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
