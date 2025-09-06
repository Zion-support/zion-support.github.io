<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" },
];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { BadgeEarned } from "./BadgeEarned",
=======



  { badge: "first_listing", date: "2024-12-16" },"
  { badge: "profile_complete", date: "2024-11-22" },"
  { badge: "first_action", date: "2024-09-08" },
];



"
import React from "react","
import { BadgeEarned } from "./BadgeEarned","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { badgeList, BadgeKey } from "./badgeConfig",

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey, date: string }[] = ["
  { badge: "first_listing", date: "2024-12-16" },"
  { badge: "profile_complete", date: "2024-11-22" },"
  { badge: "first_action", date: "2024-09-08" }],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  { badge: "first_listing", date: "2024-12-16" }
  { badge: "profile_complete", date: "2024-11-22" }
  { badge: "first_action", date: "2024-09-08" }
];
export const MyBadgesPreview: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======

"
  { badge: "first_listing", date: "2024-12-16" }"
  { badge: "profile_complete", date: "2024-11-22" }"
  { badge: "first_action", date: "2024-09-08" };
];
export const MyBadgesPreview: React.FC = () => {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// Dummy data for demo: what badges this user earned (with fake dates);
const earnedBadges: { badge: BadgeKey; date: string }[] = [;"
  { badge: "first_listing", date: "2024-12-16" },;"
  { badge: "profile_complete", date: "2024-11-22" },;"
  { badge: "first_action", date: "2024-09-08" },;
];
export const MyBadgesPreview: React.FC = () => {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
  return (

import React from './react';
import { BadgeEarned  } from './BadgeEarned';
import { badge_list, BadgeKey  } from './badge_config';
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

        ))}
      </div>
      {/* Example progress for next badge */}
      <div className="mt-3 text-xs text-zion-slate-light">
        <span>Complete your profile for more rewards!</span>
      </div>
    </div>;
);
    </div>
  );
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
import React from './react';
import { BadgeEarned  } from './BadgeEarned';
import { badge_list, BadgeKey  } from './badge_config';
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
=======
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">;
      <div className="mb-2 flex items-center gap-2">;
        <span className="font-bold text-lg text-white">My Badges</span>;
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0 && 0.5 text-zion-purple">;
          {earnedBadges && earnedBadges.length} earned;
        </span>;
      </div>;
      <div className="flex flex-wrap gap-2">;
        {earnedBadges && earnedBadges.map(({ badge, date }) => (;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">"
      <div className="mb-2 flex items-center gap-2">"
        <span className="font-bold text-lg text-white">My Badges</span>"
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">
          {earnedBadges.length} earned;
        </span>
      </div>"
      <div className="flex flex-wrap gap-2">
        {earnedBadges.map(({ badge, date }) => (
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />

    </div>;
);

    </div>
  );
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};
=======
  return (};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



};
"
import React from "react",;"
import { BadgeEarned } from "./BadgeEarned",;"
import { badgeList, BadgeKey } from "./badgeConfig",;

// Dummy data for demo: what badges this user earned (with fake dates);
const earned_badges: { badge: BadgeKey; date: string }[] = [;"
  { badge: "first_listing", date: "2024 - 12 - 16" },"
  { badge: "profile_complete", date: "2024 - 11 - 22" },"
  { badge: "first_action", date: "2024 - 09 - 08" },
];
;
<<<<<<< HEAD
export const MyBadgesPreview: React.FC = () => {
  return (
    <div className="p - 4 bg - zion - blue rounded - xl shadow - md mx - auto w - full max - w-sm">;
      <div className="mb - 2 flex items - center gap - 2">;
        <span className="font - bold text - lg text - white">My Badges</span>;
        <span className="ml - 2 rounded - full text - xs bg - zion - purple / 30 px - 2 py - 0.5 text - zion - purple">;
          {earned_badges.length} earned;
        </span>;
      </div>;

    </div>;
);
};
import React from "react",;
import { BadgeEarned } from "./BadgeEarned",;
=======
export const MyBadgesPreview: React.FC = () => {}
  return (";
    <div className="p - 4 bg - zion - blue rounded - xl shadow - md mx - auto w - full max - w-sm">;"
      <div className="mb - 2 flex items - center gap - 2">;"
        <span className="font - bold text - lg text - white">My Badges</span>;"
        <span className="ml - 2 rounded - full text - xs bg - zion - purple / 30 px - 2 py - 0.5 text - zion - purple">;
          {earned_badges.length} earned;
        </span>;
      </div>;


    </div>;
);
};"
import React from "react",;"
import { BadgeEarned } from "./BadgeEarned",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { badgeList, BadgeKey } from "./badgeConfig",;
// Dummy data for demo: what badges this user earned (with fake dates);
const earnedBadges: { badge: BadgeKey, date: string }[] = [;"
  { badge: "first_listing", date: "2024-12-16" },;"
  { badge: "profile_complete", date: "2024-11-22" },;"
  { badge: "first_action", date: "2024-09-08" }],;
export const MyBadgesPreview: React.FC = () => {;
  return (;"
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">;"
      <div className="mb-2 flex items-center gap-2">;"
        <span className="font-bold text-lg text-white">My Badges</span>;"
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">;
          {earnedBadges.length} earned;
        </span>;
      </div>;"
      <div className="flex flex-wrap gap-2">;
        {earnedBadges.map(({ badge, date }) => (;
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
