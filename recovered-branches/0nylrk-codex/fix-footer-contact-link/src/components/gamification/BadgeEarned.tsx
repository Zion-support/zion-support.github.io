
import React from "react";
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
  earnedDate?: string
}

export const BadgeEarned: React.FC<BadgeEarnedProps> = ({
  badge,
  size = $2;
  showName = $2;
  showDesc = $2;
  earnedDate}) => {
  const meta = getBadgeMeta($2);
  if (!meta) return null,
  const Icon = $2;
  return (
    <div className = $2;
          borderRadius: "9999px",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"}}
        className = $2;