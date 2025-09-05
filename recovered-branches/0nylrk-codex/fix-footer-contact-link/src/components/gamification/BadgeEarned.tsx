
import React from "react";

interface BadgeEarnedProps {_badge: BadgeKey;
  size?: number;
  showName?: boolean;
  showDesc?: boolean;
  earnedDate?: string;}

export const BadgeEarned: React.FC<BadgeEarnedProps> = (_{_badge, _size = 44, _showName = true, _showDesc = false, _earnedDate}) => {_const _meta = getBadgeMeta(badge);
  if (!meta) return null;
  const _Icon = meta.icon;

  return (
    <div className="flex flex-col items-center text-center gap-1 px-2">
      <div
        style={{
          background: meta.bg, _borderRadius: "9999px", _width: size, _height: size, _display: "flex", _alignItems: "center", _justifyContent: "center"}}
        className="shadow hover-scale"
        title={_meta.name}
      >
        <Icon color={_meta.color} size={_size * 0.7} />
      </div>
      {_showName && (
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color}}>
          {_meta.name}
        </span>
      )}
      {_earnedDate && (
        <span className="text-[10px] text-gray-400">
          {earnedDate}
        </span>
      )}
      {_showDesc && (
        <span className="text-xs text-zion-slate-light">{meta.description}</span>
      )}
    </div>
  );
};
