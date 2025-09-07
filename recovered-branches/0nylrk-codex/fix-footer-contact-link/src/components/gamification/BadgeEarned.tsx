import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';

import React from './react';
import { getBadgeMeta, BadgeKey } from './badge_config';
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

