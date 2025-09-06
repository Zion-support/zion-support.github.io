
import React from "react";
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
interface BadgeEarnedProps {
<<<<<<< HEAD
  badge: BadgeKey;
=======
  badge: BadgeKey
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  size?: number;
  showName?: boolean;
  showDesc?: boolean;
<<<<<<< HEAD
  earnedDate?: string
}
=======
  earnedDate?: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
  badge;
<<<<<<< HEAD
  size;
=======
  size = 44;
  showName = true;
  showDesc = false
  earnedDate}) => {
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta.icon;
  return (
    <div className="flex flex-col items-center text-center gap-1 px-2">
      <div
        style={{
          background: meta.bg
          borderRadius: "9999px"
          width: size
          height: size
          display: "flex"
          alignItems: "center"
          justifyContent: "center"}}
        className="shadow hover-scale"
        title={meta.name}
      >
        <Icon color={meta.color} size={size * 0.7} />
      </div>
      {showName && (
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>
          {meta.name}
        </span>
      )}
      {earnedDate && (
        <span className="text-[10px] text-gray-400">
          {earnedDate}
        </span>
      )}
      {showDesc && (
        <span className="text-xs text-zion-slate-light">{meta.description}</span>
      )}
    </div>
  )
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
