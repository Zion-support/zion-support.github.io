<<<<<<< HEAD
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [

  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" },
];

import React from "react",
import { BadgeEarned } from "./BadgeEarned",

import { badgeList, BadgeKey } from "./badgeConfig",

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey, date: string }[] = ["
  { badge: "first_listing", date: "2024-12-16" },"
  { badge: "profile_complete", date: "2024-11-22" },"
  { badge: "first_action", date: "2024-09-08" }],

import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [

  { badge: "first_listing", date: "2024-12-16" }
  { badge: "profile_complete", date: "2024-11-22" }
  { badge: "first_action", date: "2024-09-08" }
];
export const MyBadgesPreview: React.FC = () => {
=======
<<<<<<< HEAD
import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey, date: string}[] = [
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" }],

  { badge: "first_listing", date: "2024-12-16" }
  { badge: "profile_complete", date: "2024-11-22" }
  { badge: "first_action", date: "2024-09-08" }
];
export const MyBadgesPreview: React.FC = () => {
  return (
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className="font-bold text-lg text-white">My Badges</span>
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">
          {earnedBadges.length} earned
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {earnedBadges.map(({ badge, date }) => (
          <BadgeEarned key = $2;
=======
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [

<<<<<<< HEAD
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" },
];

import React from "react",
import { BadgeEarned } from "./BadgeEarned",

import { badgeList, BadgeKey } from "./badgeConfig",

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey, date: string }[] = ["
  { badge: "first_listing", date: "2024-12-16" },"
  { badge: "profile_complete", date: "2024-11-22" },"
  { badge: "first_action", date: "2024-09-08" }],

<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import { BadgeEarned } from "./BadgeEarned";
import { badgeList, BadgeKey } from "./badgeConfig";
// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  { badge: "first_listing", date: "2024-12-16" }
  { badge: "profile_complete", date: "2024-11-22" }
  { badge: "first_action", date: "2024-09-08" }
];
export const MyBadgesPreview: React.FC = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

// Dummy data for demo: what badges this user earned (with fake dates);
const earnedBadges: { badge: BadgeKey; date: string }[] = [;"
  { badge: "first_listing", date: "2024-12-16" },;"
  { badge: "profile_complete", date: "2024-11-22" },;"
  { badge: "first_action", date: "2024-09-08" },;
];
export const MyBadgesPreview: React.FC = () => {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

"
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">"
      <div className="mb-2 flex items-center gap-2">"
        <span className="font-bold text-lg text-white">My Badges</span>"
<<<<<<< HEAD
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">
          {earnedBadges.length} earned;
        </span>
      </div>"
      <div className="flex flex-wrap gap-2">
        {earnedBadges.map(({ badge, date }) => (
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />

    </div>;
=======
=======
  return (
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">;
      <div className="mb-2 flex items-center gap-2">;
        <span className="font-bold text-lg text-white">My Badges</span>;
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0 && 0.5 text-zion-purple">;
          {earnedBadges && earnedBadges.length} earned;
        </span>;
      </div>;
      <div className="flex flex-wrap gap-2">;
        {earnedBadges && earnedBadges.map(({ badge, date }) => (;

<<<<<<< HEAD
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
=======
import React from './react';
import { BadgeEarned  } from './BadgeEarned';
import { badge_list, BadgeKey  } from './badge_config';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className="font-bold text-lg text-white">My Badges</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">
          {earnedBadges.length} earned;
        </span>
      </div>"
      <div className="flex flex-wrap gap-2">
        {earnedBadges.map(({ badge, date }) => (
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
);

    </div>
  );

};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};
"
import React from "react",;"
import { BadgeEarned } from "./BadgeEarned",;"
<<<<<<< HEAD
// Dummy data for "demo": what badges this user earned (with fake dates);
  { "badge": "first_listing", "date": "2024-12-16" },;"
  { "badge": "profile_complete", "date": "2024-11-22" },;"
  { "badge": "first_action", "date": "2024-09-08" }],;"
export const "MyBadgesPreview": React.FC = () => {;
  }
  return (;
=======
<<<<<<< HEAD
=======
=======
import React from "react",;
import { BadgeEarned } from "./BadgeEarned",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { badgeList, BadgeKey } from "./badgeConfig",;

// Dummy data for demo: what badges this user earned (with fake dates);
const earned_badges: { badge: BadgeKey; date: string }[] = [;"
  { badge: "first_listing", date: "2024 - 12 - 16" },"
  { badge: "profile_complete", date: "2024 - 11 - 22" },"
  { badge: "first_action", date: "2024 - 09 - 08" },
];
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { badgeList, BadgeKey } from "./badgeConfig",;
// Dummy data for demo: what badges this user earned (with fake dates);
const earnedBadges: { badge: BadgeKey, date: string }[] = [;"
  { badge: "first_listing", date: "2024-12-16" },;"
  { badge: "profile_complete", date: "2024-11-22" },;"
  { badge: "first_action", date: "2024-09-08" }],;
export const MyBadgesPreview: React.FC = () => {;
  return (;"
>>>>>>> origin/chore/fix-lint-and-merge
    <div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">;"
      <div className="mb-2 flex items-center gap-2">;"
        <span className="font-bold text-lg text-white">My Badges</span>;"
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">;
<<<<<<< HEAD
          {earnedBadges.length} earned;
        </span>;
      </div>;"
      <div className="flex flex-wrap gap-2">;
        {earnedBadges.map(({ badge, date }) => (;
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />;

  { badge: "first_listing", date: "2024-12-16" },
=======
          {earnedBadges.length} earned;
        </span>;
      </div>;"
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="flex flex-wrap gap-2">;
        {earnedBadges.map(({ badge, date }) => (;
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />;
<<<<<<< HEAD
=======

<<<<<<< HEAD
  { badge: "first_listing", date: "2024-12-16" },
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
