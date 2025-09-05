
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { BadgeEarned } from "./BadgeEarned",
import { badgeList, BadgeKey } from "./badgeConfig",

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey, date: string }[] = [
  { badge: "first_listing", date: "2024-12-16" },
  { badge: "profile_complete", date: "2024-11-22" },
  { badge: "first_action", date: "2024-09-08" }],
=======
import React from &quot;react&quot;;
import { BadgeEarned } from &quot;./BadgeEarned&quot;;
import { badgeList, BadgeKey } from &quot;./badgeConfig&quot;;

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
  { badge: &quot;first_listing&quot;, date: &quot;2024-12-16&quot; },
  { badge: &quot;profile_complete&quot;, date: &quot;2024-11-22&quot; },
  { badge: &quot;first_action&quot;, date: &quot;2024-09-08&quot; }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export const MyBadgesPreview: React.FC = () => {
  return (
    <div className=&quot;p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm&quot;>
      <div className=&quot;mb-2 flex items-center gap-2&quot;>
        <span className=&quot;font-bold text-lg text-white&quot;>My Badges</span>
        <span className=&quot;ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple&quot;>
          {earnedBadges.length} earned
        </span>
      </div>
      <div className=&quot;flex flex-wrap gap-2&quot;>
        {earnedBadges.map(({ badge, date }) => (
          <BadgeEarned key={badge} badge={badge} earnedDate={date} />
        ))}
      </div>
      {/* Example progress for next badge */}
      <div className=&quot;mt-3 text-xs text-zion-slate-light&quot;>
=======
import React from "react";

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: {_badge: BadgeKey; date: string}[] = [
  {_badge: "first_listing", _date: "2024-12-16"},
  {_badge: "profile_complete", _date: "2024-11-22"},
  {_badge: "first_action", _date: "2024-09-08"}];

export const MyBadgesPreview: React.FC = () => {_return (_<div className="p-4 bg-zion-blue rounded-xl shadow-md mx-auto w-full max-w-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className="font-bold text-lg text-white">My Badges</span>
        <span className="ml-2 rounded-full text-xs bg-zion-purple/30 px-2 py-0.5 text-zion-purple">
          {earnedBadges.length} earned
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {_earnedBadges.map(({ badge, _date}) => (
          <BadgeEarned key={_badge} badge={_badge} earnedDate={_date} />
        ))}
      </div>
      {_/* Example progress for next badge */}
      <div className="mt-3 text-xs text-zion-slate-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <span>Complete your profile for more rewards!</span>
      </div>
    </div>
  )
},
