 interface CommunityVerifiedBadgeProps {,
  endorsementCount: number;
   threshold?: number,
   className?: string,
} const CommunityVerifiedBadge: Reac t.FC < CommunityVerifiedBadgeProps> = ({ endorsementCount, threshold = 3, className = ' }) => { if (endorsementCount < threshold) { return null"'",
}}