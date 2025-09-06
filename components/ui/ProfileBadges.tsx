import React from 'react',
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
<<<<<<< HEAD
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
<<<<<<< HEAD
  const labels = null;
=======
  const labels = getBadgeLabels(profile |undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile |undefined);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return <VerifiedBadge labels={labels} />
}
=======
}

export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
