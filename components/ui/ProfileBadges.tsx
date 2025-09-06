import React from 'react';
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
=======
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined),
  return <VerifiedBadge labels={labels} />
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
