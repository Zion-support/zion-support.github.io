import React from 'react',
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = null;
  return <VerifiedBadge labels={labels} />
}