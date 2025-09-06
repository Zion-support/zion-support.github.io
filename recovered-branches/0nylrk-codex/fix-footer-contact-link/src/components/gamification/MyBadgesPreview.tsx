

<<<<<<< HEAD
=======
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" },
];

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",
import { BadgeEarned } from "./BadgeEarned",
import { badgeList, BadgeKey } from "./badgeConfig",

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey, date: string }[] = [
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" }],



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  { badge: "first_listing", date: "2024-12-16" }
  { badge: "profile_complete", date: "2024-11-22" }
  { badge: "first_action", date: "2024-09-08" }
];
export const MyBadgesPreview: React.FC = () => {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

// Dummy data for demo: what badges this user earned (with fake dates);
const earnedBadges: { badge: BadgeKey; date: string }[] = [;
  { badge: "first_listing", date: "2024-12-16" },;
  { badge: "profile_complete", date: "2024-11-22" },;
  { badge: "first_action", date: "2024-09-08" },;
];

export const MyBadgesPreview: React.FC = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD

import React from './react';
import { BadgeEarned  } from './BadgeEarned';
import { badge_list, BadgeKey  } from './badge_config';
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
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />;
        ))}
      </div>;
      {/* Example progress for next badge */}
      <div className="mt-3 text-xs text-zion-slate-light">;
        <span>Complete your profile for more rewards!</span>;
      </div>;
    </div>;
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
<<<<<<< HEAD
        ))}
      </div>
      {/* Example progress for next badge */}
      <div className="mt-3 text-xs text-zion-slate-light">
        <span>Complete your profile for more rewards!</span>
      </div>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>;
);
=======
    </div>
  );
>>>>>>> main
};

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
<<<<<<< HEAD
=======


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
))}
        ))}
      </div>
      {/* Example progress for next badge */}
      <div className="mt-3 text-xs text-zion-slate-light">
        <span>Complete your profile for more rewards!</span>
      </div>
    </div>
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
