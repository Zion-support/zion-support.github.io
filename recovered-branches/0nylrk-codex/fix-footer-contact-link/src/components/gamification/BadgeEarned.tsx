<<<<<<< HEAD
=======
<<<<<<< HEAD

import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';

<<<<<<< HEAD
=======
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface BadgeEarnedProps {
  badge: BadgeKey
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",



export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;

  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
  badge;
<<<<<<< HEAD
  size = 44;
<<<<<<< HEAD
=======
  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;


import {getBadgeMeta, BadgeKey} from "./badgeConfig";

import React from "react";
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface BadgeEarnedProps {

  badge: BadgeKey

<<<<<<< HEAD
=======
import {getBadgeMeta, BadgeKey} from "./badgeConfig";

interface BadgeEarnedProps {;
  badge: BadgeKey,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  size = 44;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",



<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  size?: number;
  showName?: boolean;
  showDesc?: boolean;
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
  earnedDate?: string
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
  badge;
  size = 44;
  showName = true;
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
  badge;

  size = 44;
  showName = true;
  showDesc = false
  earnedDate}) => {
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta.icon;
  badge,
  size = 44,
  showName = true,
  showDesc = false,
  earnedDate}) => {
  const meta = getBadgeMeta(badge),
  if (!meta) return null,
  const Icon = meta.icon,


<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          background: meta && meta.bg,
          borderRadius: "9999px",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
<<<<<<< HEAD

          justifyContent: "center"}}
        className="shadow hover-scale"

=======
          justifyContent: "center"}}
        className="shadow hover-scale"

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title={meta.name}
      >
        <Icon color={meta.color} size={size * 0.7} />
      </div>
      {showName && (
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


          {meta.name}
        </span>
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
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



    </div>;
  );

<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}

    </div>;
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </div>;
  );


};
  show_name = true;
  show_desc = false,
  earned_date}) => {
  const meta = getBadgeMeta (badge);
  // Check condition
if (return null) {
  $2
}
  const Icon = meta.icon;
;
  return (
    <div className="flex flex - col items - center text - center gap - 1 px - 2">;
      <div;
        style={{
          background: meta.bg,
          border_radius: "9999px",
          width: size,
          height: size,
          display: "flex",
          align_items: "center",
          justify_content: "center"}}
        className="shadow hover - scale";
        title={meta.name}
      >;
        <Icon color={meta.color} size={size * 0.7} />;
      </div>;
      {show_name && (
        <span className="text - xs font - semibold mt - 1" style={{ color: meta.color }}>;
          {meta.name}
        </span>)}
      {earned_date && (
        <span className="text-[10px] text - gray - 400">;
          {earned_date}
        </span>)}
      {show_desc && (
        <span className="text - xs text - zion - slate - light">{meta.description}</span>)}
    </div>);
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
        <span className="text-xs font-semibold mt-1" style={{ color:meta.color }}>;          {meta.name}
        </span>;
      )}
      {earnedDate && (;
        <span className="text-[10px] text-gray-400">;          {earnedDate}
        </span>;
      )}
      {showDesc && (;
        <span className="text-xs text-zion-slate-light">{meta.description}</span>;
      )}
    </div>;
  ),;
},; interface BadgeEarnedProps {
  badge: BadgeKey;
size?: number;
showName?: boolean;
showDesc?: boolean;
earnedDate?: string 
}export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
  badge;
size = 44;
showName = true;
showDesc = false;
earnedDate 
}) => {
  const meta = getBadgeMeta (badge);
if (!meta) return null;
const Icon = meta.icon;
flex flex-col items-center text-center gap-1 px-2" > <div style= {
  {
  > <Icon color= {
  meta.color 
}size= {
  size * 0.7 
}/> </div>) 
}</div>) 
};
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

    </div>;
  );
    </div>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
