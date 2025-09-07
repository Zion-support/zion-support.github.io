

import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';

export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);

}

  return <VerifiedBadge labels={labels} />

}



export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {

  return <VerifiedBadge labels={labels} />
}
origin/cursor/automate-test-improve-and-merge-code-2533
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {}
  const labels = null;}
  return <VerifiedBadge labels={labels} />
}

