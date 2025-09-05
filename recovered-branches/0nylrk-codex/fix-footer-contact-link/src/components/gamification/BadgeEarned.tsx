
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",
=======
import React from &quot;react&quot;;
import { getBadgeMeta, BadgeKey } from &quot;./badgeConfig&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
  earnedDate?: string
}

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
  badge,
  size = 44,
  showName = true,
  showDesc = false,
  earnedDate}) => {
  const meta = getBadgeMeta(badge),
  if (!meta) return null,
  const Icon = meta.icon,

  return (
    <div className=&quot;flex flex-col items-center text-center gap-1 px-2&quot;>
      <div
        style={{
          background: meta.bg,
          borderRadius: &quot;9999px&quot;,
          width: size,
          height: size,
          display: &quot;flex&quot;,
          alignItems: &quot;center&quot;,
          justifyContent: &quot;center&quot;}}
        className=&quot;shadow hover-scale&quot;
        title={meta.name}
      >
        <Icon color={meta.color} size={size * 0.7} />
      </div>
      {showName && (
        <span className=&quot;text-xs font-semibold mt-1&quot; style={{ color: meta.color }}>
=======
import React from "react",;
import { getBadgeMeta, BadgeKey } from "./badgeConfig",;
interface BadgeEarnedProps {;
  badge: BadgeKey,;
  size?: number,;
  showName?: boolean,;
  showDesc?: boolean,;
  earnedDate?: string;
}
;
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
  badge,;
  size = 44,;
  showName = true,;
  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge),;
  if (!meta) return null,;
  const Icon = meta.icon,;
  return (;
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div;
        style={{;
          background: meta.bg,;
          borderRadius: "9999px",;
          width: size,;
          height: size,;
          display: "flex",;
          alignItems: "center";
          justifyContent: "center"}}
        className="shadow hover-scale";
        title={meta.name}
      >;
        <Icon color={meta.color} size={size * 0.7} />;
      </div>;
      {showName && (;
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {meta.name}
        </span>;
      )}
<<<<<<< HEAD
      {earnedDate && (
        <span className=&quot;text-[10px] text-gray-400&quot;>
=======
      {earnedDate && (;
        <span className="text-[10px] text-gray-400">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {earnedDate}
        </span>;
      )}
<<<<<<< HEAD
      {showDesc && (
        <span className=&quot;text-xs text-zion-slate-light&quot;>{meta.description}</span>
=======
      {showDesc && (;
        <span className="text-xs text-zion-slate-light">{meta.description}</span>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
    </div>;
  );
};