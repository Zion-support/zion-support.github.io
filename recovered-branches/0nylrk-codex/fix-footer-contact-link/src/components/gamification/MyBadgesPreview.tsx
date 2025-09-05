
import React from &quot;react&quot;;
import { BadgeEarned } from &quot;./BadgeEarned&quot;;
import { badgeList, BadgeKey } from &quot;./badgeConfig&quot;;

// Dummy data for demo: what badges this user earned (with fake dates)
const earnedBadges: { badge: BadgeKey; date: string }[] = [
  { badge: &quot;first_listing&quot;, date: &quot;2024-12-16&quot; },
  { badge: &quot;profile_complete&quot;, date: &quot;2024-11-22&quot; },
  { badge: &quot;first_action&quot;, date: &quot;2024-09-08&quot; }];

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
        <span>Complete your profile for more rewards!</span>
      </div>
    </div>
  );
};
