import React from 'react';
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';

export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;
=======
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
