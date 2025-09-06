import { useRouter } from 'next/router';
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string,) => void,
  onRequestHire?: (profile: TalentProfile,) => void
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const router = useRouter();

  // Create a compatible UserProfile from UserDetails
  const userProfile: UserProfile = {
    id: userDetails?.id,
    name: userDetails?.name || '',
    email: userDetails?.email || '',
    userType: null,
    profileComplete: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    role: userDetails?.userType || '',
    displayName: userDetails?.name || '',
    points: 0,
    avatarUrl: userDetails?.avatar || ''
  };

  // Handle request to hire