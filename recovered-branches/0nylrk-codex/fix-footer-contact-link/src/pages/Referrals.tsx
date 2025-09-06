import {useEffect} from 'react';
import {use_auth} from '@/hooks / use_auth';
import {useReferrals} from '@/hooks / useReferrals';
import {ReferralStats} from '@/components / referrals / ReferralStats';
import {ReferralLink} from '@/components / referrals / ReferralLink';
import {ReferralTable} from '@/components / referrals / ReferralTable';
import {RewardsCard} from '@/components / referrals / RewardsCard';
import {ReferralGuide} from '@/components / referrals / ReferralGuide';
import {ReferralLeaderboard} from '@/components / referrals / ReferralLeaderboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import {Button} from '@/components / ui / button';
import {toast} from '@/hooks / use - toast';
import {Share, Users} from 'lucide-react';
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const {;
    isLoading;
    referralCode;
=======
import {use_navigate} from 'react-router-dom';
export default /**
 * ReferralsPage - Function description
 */
function ReferralsPage() {
  const navigate = use_navigate ();
  const { is_authenticated } = use_auth ();
  const {
    is_loading;
    referral_code;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    referrals;
    rewards;
    stats;
    getReferralLink;
    copyReferralLink;
    }
  }, [isAuthenticated, navigate]);
  const referralLink = getReferralLink();

  return (
          <ReferralGuide />;
          <ReferralLeaderboard />;
        </div>;
      </div>;
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
