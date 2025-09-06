<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/MyBadgesPreview.tsx
import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
<<<<<<< HEAD
=======


=======
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" },
];
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { BadgeEarned } from "./BadgeEarned",
import { badgeList, BadgeKey } from "./badgeConfig",

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey, date: string }[] = [
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" }],
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  { badge: "first_listing", date: "2024-12-16" }
  { badge: "profile_complete", date: "2024-11-22" }
  { badge: "first_action", date: "2024-09-08" }
];
export const MyBadgesPreview: React.FC = () => {
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/MyBadgesPreview.tsx
// Dummy data for demo: what badges this user earned (with fake dates);
const earnedBadges: { badge: BadgeKey; date: string }[] = [;
  { badge: "first_listing", date: "2024-12-16" },;
  { badge: "profile_complete", date: "2024-11-22" },;
  { badge: "first_action", date: "2024-09-08" },;
];
export const MyBadgesPreview: React.FC = () => {;
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/MyBadgesPreview.tsx

========
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

import React from "react",;
import { BadgeEarned } from "./BadgeEarned",;
import { badgeList, BadgeKey } from "./badgeConfig",;
;
// Dummy data for demo:what badges this user earned (with fake dates);
const earnedBadges:{ badge:BadgeKey, date:string }[] = [;
  { badge:"first_listing", date:"2024-12-16" },;
  { badge:"profile_complete", date:"2024-11-22" },;
  { badge:"first_action", date:"2024-09-08" }],;
;
export const MyBadgesPreview:React.FC = () => {;
  return (;
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">;
      <div className="mb-2 flex items-center gap-2">;
        <span className="font-bold text-lg text-white">My Badges</span>;
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">;
          {earnedBadges.length} earned;
        </span>;
      </div>;
      <div className="flex flex-wrap gap-2">;
        {earnedBadges.map(({ badge, date }) => (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />;
        ))}
      </div>;
      {/* Example progress for next badge */}
      <div className="mt-3 text-xs text-zion-slate-light">;
        <span>Complete your profile for more rewards!</span>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/MyBadgesPreview.tsx
import React from './react';
import { BadgeEarned  } from './BadgeEarned';
import { badge_list, BadgeKey  } from './badge_config';
=======
=======
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
    </div>;
);
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/MyBadgesPreview.tsx

      <div className="flex flex-wrap gap-2">;
        {earnedBadges.map(({ badge, date }) => (;
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      <div className="flex flex - wrap gap - 2">;
        {earned_badges.map (({ badge, date }) => (
          <BadgeEarned key={badge} badge={badge} earned_date={date} />))}
      </div>;
      {/* Example progress for next badge */}
      <div className="mt - 3 text - xs text - zion - slate - light">;
        <span > Complete your profile for more rewards!</span>;
      </div>;
    </div>);
}
;
=======
  ),;
},; export const MyBadgesPreview: React.FC = () => {
  return (<div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm" > <div className="mb-2 flex items-center gap-2" > <span className="font-bold text-lg text-white" >My Badges</span> <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple" > {
  earnedBadges.length 
}earned </span> </div> <div className="flex flex-wrap gap-2" > {
  earnedBadges.map ( ({
  badge, date 
}) => (<BadgeEarned key= {
  badge 
}badge= {
  badge 
}earnedDate= {
  date 
}/>) ) 
}</div> {
  /* Example progress for next badge */ 
}<div className="mt-3 text-xs text-zion-slate-light" > 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/MyBadgesPreview.tsx
=======
))}
=======
        ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>
      {/* Example progress for next badge */}
      <div className="mt-3 text-xs text-zion-slate-light">
        <span>Complete your profile for more rewards!</span>
      </div>
<<<<<<< HEAD
</div>
=======
    </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );

<<<<<<< HEAD
}
};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    </div>;
);
};
import React from "react",;
import { BadgeEarned } from "./BadgeEarned",;
import { badgeList, BadgeKey } from "./badgeConfig",;
// Dummy data for demo: what badges this user earned (with fake dates);
const earnedBadges: { badge: BadgeKey, date: string }[] = [;
  { badge: "first_listing", date: "2024-12-16" },;
  { badge: "profile_complete", date: "2024-11-22" },;
  { badge: "first_action", date: "2024-09-08" }],;
export const MyBadgesPreview: React.FC = () => {;
  return (;
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">;
      <div className="mb-2 flex items-center gap-2">;
        <span className="font-bold text-lg text-white">My Badges</span>;
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">;
          {earnedBadges.length} earned;
        </span>;
      </div>;
      <div className="flex flex-wrap gap-2">;
        {earnedBadges.map(({ badge, date }) => (;
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
