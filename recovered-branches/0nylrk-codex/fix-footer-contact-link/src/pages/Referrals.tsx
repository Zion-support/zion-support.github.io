


    isLoading;
    referralCode;








import { useNavigate } from 'react-router-dom',
export default function ReferralsPage() {
  const navigate = useNavigate(),
  const { isAuthenticated } = useAuth(),


    shareOnSocialMedia} = useReferrals(),








  const referralLink = getReferralLink(),

  return (







  return (;

            onShare={shareOnSocialMedia}
          />;












