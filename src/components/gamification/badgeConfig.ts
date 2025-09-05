

export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
  | "first_action"
  | "monetized";

export interface BadgeMeta {_key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;}

export const badgeList: BadgeMeta[] = [
  {_key: "first_listing", _name: "First Listing", _description: "Published your first product, _service, _or listing.", _icon: BadgeCheck, _color: "#8B5CF6", _// Vivid Purple
    bg: "#E5DEFF", _// Soft Purple},
  {_key: "top_contributor", _name: "Top Contributor", _description: "Recognized as a top contributor in the community.", _icon: Award, _color: "#F97316", _// Bright Orange
    bg: "#FEF7CD", _// Soft Yellow},
  {_key: "profile_complete", _name: "Profile Complete", _description: "Completed all steps in your profile setup.", _icon: Star, _color: "#FFD700", _// Gold
    bg: "#FFFBEA", _// Very light yellow},
  {_key: "featured_creator", _name: "Featured Creator", _description: "Featured on the Zion homepage.", _icon: Trophy, _color: "#0EA5E9", _// Ocean Blue
    bg: "#D3E4FD", _// Soft Blue},
  {_key: "first_action", _name: "First Action", _description: "Took your first community, _posting, _or listing action.", _icon: BadgePlus, _color: "#1EAEDB", _// Bright Blue
    bg: "#F3F3F3", _// Light Gray},
  {_key: "monetized", _name: "Monetized", _description: "Earned your first AI dollar in the marketplace.", _icon: BadgeDollarSign, _color: "#22C55E", _// Soft Green
    bg: "#F2FCE2", _// Soft Green}];

export const _getBadgeMeta = (_key: BadgeKey) =>
  badgeList.find(_(b) => b.key === key);

