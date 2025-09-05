
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
        <span>Complete your profile for more rewards!</span>
      </div>
    </div>
  );
};
