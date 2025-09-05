<<<<<<< HEAD
import React from 'react',
import type { KycProfile } from '../../utils/kyc',
import { getBadgeLabels } from '../../utils/kyc',
import { VerifiedBadge } from './VerifiedBadge',
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined),
  return <VerifiedBadge labels={labels} />
=======
import React from 'react';
import type {_KycProfile} from '../../utils/kyc';

export function ProfileBadges(_{_profile}: {_profile?: KycProfile | null}) {_const _labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}