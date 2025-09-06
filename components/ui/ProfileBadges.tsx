import React from 'react',
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
<<<<<<< HEAD
<<<<<<< HEAD
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {

  const labels = getBadgeLabels(profile |undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile |undefined);

  return <VerifiedBadge labels={labels} />
}
=======

export function ProfileBadges(): any ({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges(): any ({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
