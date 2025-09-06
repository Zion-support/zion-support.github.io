
import React from "react";
<<<<<<< HEAD
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
interface BadgeEarnedProps {

  badge: BadgeKey

=======
import {getBadgeMeta, BadgeKey} from "./badgeConfig";

interface BadgeEarnedProps {;
  badge: BadgeKey,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  size?: number;
  showName?: boolean;
  showDesc?: boolean;
  earnedDate?: string;
}
<<<<<<< HEAD
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
=======

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  badge;

  size = 44;
  showName = true;
<<<<<<< HEAD
  showDesc = false
  earnedDate}) => {
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta.icon;
=======
  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{
<<<<<<< HEAD
          background: meta.bg
          borderRadius: "9999px"
          width: size
          height: size
          display: "flex"
          alignItems: "center"
=======
          background: meta && meta.bg,
          borderRadius: "9999px",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          justifyContent: "center"}}
        className="shadow hover-scale"
        title={meta && meta.name}>;
        <Icon color={meta && meta.color} size={size * 0 && 0.7} />;
      </div>;
      {showName && (;
        <span className="text-xs font-semibold mt-1" style={{ color: meta && meta.color }}>;
          {meta && meta.name}
        </span>;
      )}
      {earnedDate && (;
        <span className="text-[10px] text-gray-400">;
          {earnedDate}
        </span>;
      )}
      {showDesc && (;
        <span className="text-xs text-zion-slate-light">{meta && meta.description}</span>;
      )}
<<<<<<< HEAD
    </div>
  )
}

=======
    </div>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
