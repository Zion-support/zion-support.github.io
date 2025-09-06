
interface BadgeEarnedProps {
  badge: BadgeKey
  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
  badge;

  size = 44;

  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;




import {getBadgeMeta, BadgeKey} from "./badgeConfig";

import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",



interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
  earnedDate?: string
}
  badge;

  size = 44;
  showName = true;
  showDesc = false
  earnedDate}) => {
  const meta = getBadgeMeta(badge);
  if (!meta) return null;

  return (
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{
          {meta.name}
        </span>
      )}
      {earnedDate && (;
        <span className="text-[10px] text-gray-400">;
          {earnedDate}
        </span>;
      )}
      {showDesc && (;
        <span className="text-xs text-zion-slate-light">{meta && meta.description}</span>;
      )}
};
