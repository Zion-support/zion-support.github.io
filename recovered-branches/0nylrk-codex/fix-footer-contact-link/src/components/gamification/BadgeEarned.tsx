<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';


<<<<<<< HEAD
interface BadgeEarnedProps {
  badge: BadgeKey

=======
import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';
interface BadgeEarnedProps {
  badge: BadgeKey
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {getBadgeMeta, BadgeKey} from "./badgeConfig";
import React from "react",

<<<<<<< HEAD

  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}

export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
  badge;
  size = 44;
  showDesc = false,;
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;


=======

import { getBadgeMeta, BadgeKey } from "./badgeConfig",

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;

interface BadgeEarnedProps {;
  badge: BadgeKey,;
  size?: number;
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  show_name?: boolean;
  show_desc?: boolean;
  earned_date?: string;
}

<<<<<<< HEAD

import {getBadgeMeta, BadgeKey} from "./badgeConfig";




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
<<<<<<< HEAD

  earnedDate?: string
}

=======


}

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
  badge;
  size = 44;
  showName = true;


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
>>>>>>> origin/cursor/delete-old-data-records-6bba


  return (

    <div className="flex flex-col items-center text-center gap-1 px-2">;
      <div
        style={{
<<<<<<< HEAD



=======
          background: meta && meta.bg,
          borderRadius: "9999px",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"}}
        className = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        title={meta.name}
      >
        <Icon color={meta.color} size={size * 0.7} />
      </div>
      {showName && ("
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>
<<<<<<< HEAD



=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>;



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





    </div>;
  );




=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
