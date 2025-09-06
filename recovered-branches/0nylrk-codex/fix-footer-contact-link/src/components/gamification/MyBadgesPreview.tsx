<<<<<<< HEAD

import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [


=======


  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" },
];

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import React from "react",
import { BadgeEarned } from "./BadgeEarned",
import { badgeList, BadgeKey } from "./badgeConfig",

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey, date: string }[] = [
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" }],



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  { badge: "first_listing", date: "2024-12-16" }
  { badge: "profile_complete", date: "2024-11-22" }
  { badge: "first_action", date: "2024-09-08" }
];
export const MyBadgesPreview: React.FC = () => {

  return (

import React from './react';
import { BadgeEarned  } from './BadgeEarned';
import { badge_list, BadgeKey  } from './badge_config';
<<<<<<< HEAD

=======
=======
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className="font-bold text-lg text-white">My Badges</span>
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">
          {earnedBadges.length} earned
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {earnedBadges.map(({ badge, date }) => (
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />

    </div>;
);
};

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react",;
import { BadgeEarned } from "./BadgeEarned",;
import { badgeList, BadgeKey } from "./badgeConfig",;

// Dummy data for demo: what badges this user earned (with fake dates);
const earned_badges: { badge: BadgeKey; date: string }[] = [;
  { badge: "first_listing", date: "2024 - 12 - 16" },
  { badge: "profile_complete", date: "2024 - 11 - 22" },
  { badge: "first_action", date: "2024 - 09 - 08" },
];
;
export const MyBadgesPreview: React.FC = () => {
  return (
    <div className="p - 4 bg - zion - blue rounded - xl shadow - md mx - auto w - full max - w-sm">;
      <div className="mb - 2 flex items - center gap - 2">;
        <span className="font - bold text - lg text - white">My Badges</span>;
        <span className="ml - 2 rounded - full text - xs bg - zion - purple / 30 px - 2 py - 0.5 text - zion - purple">;
          {earned_badges.length} earned;
        </span>;
      </div>;

      <div className="flex flex-wrap gap-2">;
        {earnedBadges.map(({ badge, date }) => (;
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />;


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
