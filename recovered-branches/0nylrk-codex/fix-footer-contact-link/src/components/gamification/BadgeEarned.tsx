
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';

interface BadgeEarnedProps {

  badge: BadgeKey

  size?: number;


export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;

=======
  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  badge;

  size = 44;

  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;


=======


import {getBadgeMeta, BadgeKey} from "./badgeConfig";

=======
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",



interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
  earnedDate?: string
}


  return (
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{

          background: meta && meta.bg,
          borderRadius: "9999px",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",

          justifyContent: "center"}}
        className="shadow hover-scale"

        title={meta.name}
      >
        <Icon color={meta.color} size={size * 0.7} />
      </div>
      {showName && (
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>
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


          {meta.name}
        </span>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}
      {earnedDate && (;
        <span className="text-[10px] text-gray-400">;
          {earnedDate}
        </span>;
      )}
      {showDesc && (;
        <span className="text-xs text-zion-slate-light">{meta && meta.description}</span>;
      )}



    </div>;
  );

=======
=======
    </div>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
