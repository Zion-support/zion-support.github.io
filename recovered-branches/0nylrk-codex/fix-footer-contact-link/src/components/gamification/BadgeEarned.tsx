
import React from './react';''
import { getBadgeMeta, BadgeKey } from './badge_config';'
interface BadgeEarnedProps {
  // TODO: Implement
}
  badge: BadgeKey;'
import {getBadgeMeta, BadgeKey} from "./badgeConfig";""
import React from "react",""
import { getBadgeMeta, BadgeKey } from "./badgeConfig","
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
</BadgeEarnedProps>
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
  badge;
  size = 44;
  showDesc = false,;)
  earnedDate}) => {;
  const meta = getBadgeMeta(badge);
  if (!meta) return null;
  const Icon = meta && meta.icon;

"
import {getBadgeMeta, BadgeKey} from "./badgeConfig";""
import React from "react";""
import { getBadgeMeta, BadgeKey } from "./badgeConfig";"
interface BadgeEarnedProps {
  // TODO: Implement
}
  badge: BadgeKey;
  size?: number;


export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
</BadgeEarnedProps>
export const BadgeEarned: React.FC < BadgeEarnedProps> = ({
  badge;

  size = 44;"
import React from "react",""
import { getBadgeMeta, BadgeKey } from "./badgeConfig","
  size?: number;
  showName?: boolean;
  showDesc?: boolean;"
import {getBadgeMeta, BadgeKey} from "./badgeConfig";""
import React from "react",""
import { getBadgeMeta, BadgeKey } from "./badgeConfig",""
import React from "react",""
import { getBadgeMeta, BadgeKey } from "./badgeConfig","
interface BadgeEarnedProps {
  // TODO: Implement
}
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
  earnedDate?: string;
}



export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
</BadgeEarnedProps>
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
</BadgeEarnedProps>"
    <div className="flex flex-col items-center text-center gap-1 px-2">;"
</div>
      <div;
        style={{

          background: meta && meta.bg,"
          borderRadius: "9999px","
          width: size,
          height: size,"
          display: "flex",""
          alignItems: "center",""
          justifyContent: "center"}}""
        className="shadow hover-scale""
        title={meta.name}
      >
</div>
        <Icon color={meta.color} size={size * 0.7} />
</Icon>
      </div>"
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>"
</span>
export const BadgeEarned: React.FC<BadgeEarnedProps> = ({;
</BadgeEarnedProps>"
    <div className="flex flex-col items-center text-center gap-1 px-2">;"
</div>
      <div;
        style={{;
          background: meta.bg,;"
          borderRadius: "9999px",;"
          width: size,;
          height: size,;"
          display: "flex",;""
          alignItems: "center";","
  justifyContent: "center"}}""
        className="shadow hover-scale";"
        title={meta.name}
      >;
</div>
        <Icon color={meta.color} size={size * 0.7} />;
</Icon>
      </div>;"
        <span className="text-xs font-semibold mt-1" style={{ color: meta.color }}>;"
</span>
        </span>
        <Icon color={meta && meta.color} size={size * 0 && 0.7} />;
</Icon>
      </div>;"
        <span className="text-xs font-semibold mt-1" style={{ color: meta && meta.color }}>;"
</span>
        </span>;"
        <span className="text-[10px] text-gray-400">;"
</span>
        </span>;"
        <span className="text-xs text-zion-slate-light">{meta && meta.description}</span>;"
    </div>;
    </div>;
    </div>;"
    <div className="flex flex - col items - center text - center gap - 1 px - 2">;"
</div>
      <div;
        style={{
          background: meta.bg,"
          border_radius: "9999px","
          width: size,
          height: size,"
          display: "flex",""
          align_items: "center",""
          justify_content: "center"}}""
        className="shadow hover - scale";"
        title={meta.name}
      >;
</div>
        <Icon color={meta.color} size={size * 0.7} />;
</Icon>
      </div>;"
        <span className="text - xs font - semibold mt - 1" style={{ color: meta.color }}>;"
</span>)
        </span>)}"
        <span className="text-[10px] text - gray - 400">;"
</span>
        </span>)}"
        <span className="text - xs text - zion - slate - light">{meta.description}</span>)}"
    </div>);
export const BadgeEarned:React.FC<BadgeEarnedProps> = ({;
</BadgeEarnedProps>"
    <div className="flex flex-col items-center text-center gap-1 px-2">;"
</div>
      <div;
        style={{;
          background:meta.bg,;"
          borderRadius:"9999px",;"
          width:size,;
          height:size,;"
          display:"flex",;""
          alignItems:"center",;""
          justifyContent:"center"}}""
        className="shadow hover-scale";"
        title={meta.name}
      >;
</div>
        <Icon color={meta.color} size={size * 0.7} />;
</Icon>
      </div>;"
        <span className="text-xs font-semibold mt-1" style={{ color:meta.color }}>;          {meta.name}"
</span>
        </span>;"
        <span className="text-[10px] text-gray-400">;          {earnedDate}"
</span>
        </span>;"
        <span className="text-xs text-zion-slate-light">{meta.description}</span>;"
    </div>;
}export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
</BadgeEarnedProps>"
flex flex-col items-center text-center gap-1 px-2" > <div style= {"
  {
  > <Icon color= {
</div>)
}/> </div>) 
}</div>) 
        </span>"
        <span className="text-[10px] text-gray-400">"
</span>
        </span>"
        <span className="text-xs text-zion-slate-light">{meta.description}</span>"
    </div>
    </div>;
    </div>;"