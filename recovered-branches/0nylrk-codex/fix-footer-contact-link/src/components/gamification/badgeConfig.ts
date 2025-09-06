export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
  {
    key: "first_listing";
    name: "First Listing"
    description: "Published your first product, service, or listing.";
  }
  {
    key: "top_contributor";
    name: "Top Contributor";
    description: "Recognized as a top contributor in the community.";
  }
  {
    key: "profile_complete";
    name: "Profile Complete";
    description: "Completed all steps in your profile setup.";
  }
  {
    key: "featured_creator";
    name: "Featured Creator";
    description: "Featured on the Zion homepage.";
  }
  {
    key: "first_action";
    name: "First Action"
    description: "Took your first community, posting, or listing action.";
  }
  {
    key: "monetized";
    name: "Monetized";
    description: "Earned your first AI dollar in the marketplace.";

=======
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green;
    bg: "#F2FCE2",    // Soft Green;
  }];
;
export const getBadgeMeta = (key: BadgeKey) =>: any;
  badge_list.find ((b) => b.key === key),
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
