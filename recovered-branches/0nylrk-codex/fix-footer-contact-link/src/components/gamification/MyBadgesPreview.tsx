
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </div>;
      {/* Example progress for next badge */}
<<<<<<< HEAD
      <div className=&quot;mt-3 text-xs text-zion-slate-light&quot;>
        <span>Complete your profile for more rewards!</span>
      </div>
    </div>
  )
},
=======
      <div className="mt-3 text-xs text-zion-slate-light">;
        <span>Complete your profile for more rewards!</span>;
      </div>;
    </div>;
  );
};
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
