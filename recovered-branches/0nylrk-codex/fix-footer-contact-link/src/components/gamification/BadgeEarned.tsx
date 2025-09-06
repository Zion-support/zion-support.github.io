
import React from "react";

import { getBadgeMeta, BadgeKey } from "./badgeConfig";
interface BadgeEarnedProps {
  badge: BadgeKey;

  size?: number;
  showName?: boolean;
  showDesc?: boolean;
  earnedDate?: string
}

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
  badge;

  size;

