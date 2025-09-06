
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx

import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

=======
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';

========
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
interface BadgeEarnedProps {
  badge: BadgeKey
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
interface BadgeEarnedProps {;
  badge: BadgeKey,;
  size?: number;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx


export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;

=======
========
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
  badge;
  size = 44;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx


=======


import {getBadgeMeta, BadgeKey} from "./badgeConfig";

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
interface BadgeEarnedProps {

  badge: BadgeKey

  size?: number;
  showName?: boolean;
  showDesc?: boolean;
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
<<<<<<< HEAD
<<<<<<< HEAD

  earnedDate?: string
}

<<<<<<< HEAD
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  earnedDate?: string
}

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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  showDesc = false,
  earnedDate}) => {
  const meta = getBadgeMeta(badge),
  if (!meta) return null,
  const Icon = meta.icon,

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
  return (
    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
          background: meta && meta.bg,
          borderRadius: "9999px",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
          justifyContent: "center"}}
        className="shadow hover-scale"

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title={meta.name}
      >
        <Icon color={meta.color} size={size * 0.7} />
      </div>
      {showName && (
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
<<<<<<< HEAD

};

=======



    </div>;
  );

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
    </div>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/BadgeEarned.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
