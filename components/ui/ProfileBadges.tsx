import React from 'react';
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
<<<<<<< HEAD

export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;
=======
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
