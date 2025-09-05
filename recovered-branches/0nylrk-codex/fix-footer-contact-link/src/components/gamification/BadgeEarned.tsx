
import React from &quot;react&quot;;
import { getBadgeMeta, BadgeKey } from &quot;./badgeConfig&quot;;

interface BadgeEarnedProps {
  badge: BadgeKey;
  size?: number;
  showName?: boolean;
  showDesc?: boolean;
  earnedDate?: string;
}

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
  badge,
  size = 44,
  showName = true,
  showDesc = false,
  earnedDate}) => {
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta.icon;

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
          {meta.name}
        </span>
      )}
      {earnedDate && (
        <span className=&quot;text-[10px] text-gray-400&quot;>
          {earnedDate}
        </span>
      )}
      {showDesc && (
        <span className=&quot;text-xs text-zion-slate-light&quot;>{meta.description}</span>
      )}
    </div>
  );
};
