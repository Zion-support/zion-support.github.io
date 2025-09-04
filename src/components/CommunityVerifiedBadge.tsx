 interface CommunityVerifiedBadgeProps {;
  endorsementCount: number;
<<<<<<< HEAD
   threshold?: number
   className?: string
} const CommunityVerifiedBadge: Reac t.FC < CommunityVerifiedBadgeProps> = ({ endorsementCount, threshold = 3, className = ' }) => { if (endorsementCount < threshold) { return null"'"';';
=======
   threshold?: number;
   className?: string;
} const CommunityVerifiedBadge: React.FC < CommunityVerifiedBadgeProps> = ({ endorsementCount, threshold = 3, className = ' }) => { if (endorsementCount < threshold) { return null"'";
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
