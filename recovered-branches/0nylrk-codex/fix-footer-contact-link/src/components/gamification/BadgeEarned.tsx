
<<<<<<< HEAD

interface BadgeEarnedProps {

  badge: BadgeKey

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  size?: number;
  showName?: boolean;
  showDesc?: boolean;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';

interface BadgeEarnedProps {
  badge: BadgeKey
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
import React from "react",
=======
interface BadgeEarnedProps {}
  badge: BadgeKey;
import {getBadgeMeta, BadgeKey} from "./badgeConfig";"
import React from "react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;

  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({};
  badge;
<<<<<<< HEAD
  size = 44;
  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;


import {getBadgeMeta, BadgeKey} from "./badgeConfig";

import React from "react";
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
interface BadgeEarnedProps {

  badge: BadgeKey
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import {getBadgeMeta, BadgeKey} from "./badgeConfig";

interface BadgeEarnedProps {;
  badge: BadgeKey,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  size?: number;


export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;

<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  badge;



  size = 44;"
import React from "react","
=======
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
  badge;

  size = 44;
import React from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { getBadgeMeta, BadgeKey } from "./badgeConfig",



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  size?: number;
  showName?: boolean;
  showDesc?: boolean;
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
<<<<<<< HEAD

=======
  earnedDate?: string
=======

interface BadgeEarnedProps {}
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,;
  earnedDate?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
  badge;
  size = 44;
  showName = true;
<<<<<<< HEAD
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({};
=======
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  badge;

  size = 44;
  showName = true;
<<<<<<< HEAD
  showDesc = false;
  earnedDate}) => {}
=======
  showDesc = false
  earnedDate}) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta.icon;
  badge,
  size = 44,
  showName = true,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  showDesc = false,
  earnedDate}) => {}
=======
  showDesc = false,
  earnedDate}) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const meta = getBadgeMeta(badge),
  if (!meta) return null,
  const Icon = meta.icon,

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{
=======
  return ("
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div;
        style={{}
          background: meta && meta.bg,"
          borderRadius: "9999px",
          width: size,
          height: size,"
          display: "flex","
          alignItems: "center",

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        title={meta.name}
      >
        <Icon color={meta.color} size={size * 0.7} />
      </div>
      {showName && ("
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
=======
"
import React from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  return (;"
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div;
        style={{;
          background: meta.bg,;"
          borderRadius: "9999px",;
          width: size,;
          height: size,;"
          display: "flex",;"
          alignItems: "center";"
          justifyContent: "center"}}"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        className="shadow hover-scale";
        title={meta.name}
      >;
        <Icon color={meta.color} size={size * 0.7} />;
      </div>;
<<<<<<< HEAD
      {showName && (;"
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      {showName && (;
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>;


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {meta.name}
        </span>
        title={meta && meta.name}>;
        <Icon color={meta && meta.color} size={size * 0 && 0.7} />;
      </div>;
      {showName && (;"
        <span className="text-xs font-semibold mt-1" style={{ color: meta && meta.color }}>;
          {meta && meta.name}
        </span>;
      )}
      {earnedDate && (;"
        <span className="text-[10px] text-gray-400">;
          {earnedDate}
        </span>;
      )}
      {showDesc && (;"
        <span className="text-xs text-zion-slate-light">{meta && meta.description}</span>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



    </div>;
  );

<<<<<<< HEAD


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

    </div>;
  );
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </div>;
  );


};
  show_name = true;
  show_desc = false,
<<<<<<< HEAD
  earned_date}) => {}
  const meta = getBadgeMeta (badge);
  // Check condition;
if (return null) {}
  $2;
}
  const Icon = meta.icon;
;
  return ("
    <div className="flex flex - col items - center text - center gap - 1 px - 2">;
      <div;
        style={{}
          background: meta.bg,"
          border_radius: "9999px",
          width: size,
          height: size,"
          display: "flex","
          align_items: "center","
          justify_content: "center"}}"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        className="shadow hover - scale";
        title={meta.name}
      >;
        <Icon color={meta.color} size={size * 0.7} />;
      </div>;
<<<<<<< HEAD
      {show_name && ("
        <span className="text - xs font - semibold mt - 1" style={{ color: meta.color }}>;
          {meta.name}
        </span>)}
      {earned_date && ("
        <span className="text-[10px] text - gray - 400">;
          {earned_date}
        </span>)}
      {show_desc && ("
=======
      {show_name && (
        <span className="text - xs font - semibold mt - 1" style={{ color: meta.color }}>;
          {meta.name}
        </span>)}
      {earned_date && (
        <span className="text-[10px] text - gray - 400">;
          {earned_date}
        </span>)}
      {show_desc && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <span className="text - xs text - zion - slate - light">{meta.description}</span>)}
    </div>);
}
;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </div>
  )
}

    </div>;
  );
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
