<<<<<<< HEAD
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';

import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';
interface BadgeEarnedProps {
  badge: BadgeKey
=======
<<<<<<< HEAD
import React from "react";
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
=======
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';

<<<<<<< HEAD
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';
=======
<<<<<<< HEAD
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface BadgeEarnedProps {
  badge: BadgeKey
<<<<<<< HEAD
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import {getBadgeMeta, BadgeKey} from "./badgeConfig";
import React from "react",

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface BadgeEarnedProps {;
  badge: BadgeKey,;
  size?: number;
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}
<<<<<<< HEAD
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({};
  badge;

  size?: number;

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
=======
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
  badge;
  size = 44;
  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}
<<<<<<< HEAD
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({};
  badge;

  size?: number;

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;

  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}

  badge;

  size = 44;"
import React from "react","

import { getBadgeMeta, BadgeKey } from "./badgeConfig",
=======

<<<<<<< HEAD
  badge;

  size = 44;"
import React from "react","

import { getBadgeMeta, BadgeKey } from "./badgeConfig",

  size?: number;
  showName?: boolean;
  showDesc?: boolean;
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
=======
import {getBadgeMeta, BadgeKey} from "./badgeConfig";

<<<<<<< HEAD
import React from "react";
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
interface BadgeEarnedProps {

  badge: BadgeKey
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  size?: number;
  showName?: boolean;
  showDesc?: boolean;
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
<<<<<<< HEAD
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

=======
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
<<<<<<< HEAD

}

=======
<<<<<<< HEAD

}

=======
  earnedDate?: string
}

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
  badge;
  size = 44;
  showName = true;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  badge;

  size = 44;
  showName = true;
<<<<<<< HEAD

=======
  showDesc = false
  earnedDate}) => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta.icon;
  badge,
  size = 44,
  showName = true,
<<<<<<< HEAD

=======
  showDesc = false,
  earnedDate}) => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const meta = getBadgeMeta(badge),
  if (!meta) return null,
  const Icon = meta.icon,

<<<<<<< HEAD
  return (

    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  badge;

  size = 44;
  showName = true;

  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta.icon;
  badge,
  size = 44,
  showName = true,

  const meta = getBadgeMeta(badge),
  if (!meta) return null,
  const Icon = meta.icon,

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          background: meta && meta.bg,
          borderRadius: "9999px",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
<<<<<<< HEAD
          justifyContent: "center"}}
        className = $2;
=======
<<<<<<< HEAD
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
=======

          justifyContent: "center"}}
        className="shadow hover-scale"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        title={meta.name}
      >
        <Icon color={meta.color} size={size * 0.7} />
      </div>
      {showName && ("
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

        className="shadow hover-scale";
        title={meta.name}
      >;
        <Icon color={meta.color} size={size * 0.7} />;
      </div>;

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

        className="shadow hover-scale";
        title={meta.name}
      >;
        <Icon color={meta.color} size={size * 0.7} />;
      </div>;

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

    </div>;
  );

}

    </div>;
  );

    </div>;
  );

};
  show_name = true;
  show_desc = false,

        className="shadow hover - scale";
        title={meta.name}
      >;
        <Icon color={meta.color} size={size * 0.7} />;
      </div>;

        <span className="text - xs text - zion - slate - light">{meta.description}</span>)}
    </div>);
}
;

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
<<<<<<< HEAD
        <span className="text-xs font-semibold mt-1" style={{ color:meta.color }}>;          {meta.name}
        </span>;
=======
<<<<<<< HEAD
        <span className="text-xs font-semibold mt-1" style={{ color:meta.color }}>;          {meta.name}
        </span>;
=======
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>;


<<<<<<< HEAD
=======
          {meta.name}
        </span>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>
  )
}

    </div>;
  );
    </div>;
<<<<<<< HEAD
  );
=======
  );
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>;
  );

<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
  );


<<<<<<< HEAD
};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
