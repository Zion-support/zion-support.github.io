import React from 'react';
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels($2);
  return <VerifiedBadge labels={labels} />
}

export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);

}

  return <VerifiedBadge labels={labels} />

}



}
}
