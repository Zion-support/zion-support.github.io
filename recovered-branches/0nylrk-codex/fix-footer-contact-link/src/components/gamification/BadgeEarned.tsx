
<<<<<<< HEAD
import React from "react",;
import { getBadgeMeta, BadgeKey } from "./badgeConfig",;
;
interface BadgeEarnedProps {;
  badge:BadgeKey,;
  size?:number,;
  showName?:boolean,;
  showDesc?:boolean,;
  earnedDate?:string;
}
;
export const BadgeEarned:React.FC<BadgeEarnedProps> = ({;
  badge,;
  size = 44,;
  showName = true,;
  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge),;
  if (!meta) return null,;
  const Icon = meta.icon,;
;
  return (;
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div;
        style={{;
          background:meta.bg,;
          borderRadius:"9999px",;
          width:size,;
          height:size,;
          display:"flex",;
          alignItems:"center",;
          justifyContent:"center"}}
        className="shadow hover-scale";
        title={meta.name}
      >;
        <Icon color={meta.color} size={size * 0.7} />;
      </div>;
      {showName && (;
        <span className="text-xs font-semibold mt-1" style={{ color:meta.color }}>;
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

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
  badge,
  size = 44,
  showName = true,
  showDesc = false,
  earnedDate}) => {
  const meta = getBadgeMeta(badge),
  if (!meta) return null,
  const Icon = meta.icon,
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
        title={meta.name}      >
        <Icon color={_meta.color} size={_size * 0.7} />
      </div>
      {showName && (
        <span className=&quot;text-xs font-semibold mt-1&quot; style={{ color: meta.color }}>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          {meta.name}
        </span>;
      )}
<<<<<<< HEAD
      {earnedDate && (;
        <span className="text-[10px] text-gray-400">;
=======
      {earnedDate && (
        <span className=&quot;text-[10px] text-gray-400&quot;>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          {earnedDate}
        </span>;
      )}
<<<<<<< HEAD
      {showDesc && (;
        <span className="text-xs text-zion-slate-light">{meta.description}</span>;
      )}
    </div>;
  ),;
},;
=======
      {showDesc && (
        <span className=&quot;text-xs text-zion-slate-light&quot;>{meta.description}</span>      )}
    </div>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
