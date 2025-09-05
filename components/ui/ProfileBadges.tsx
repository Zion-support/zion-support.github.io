<<<<<<< HEAD
import React from 'react',;
import type { KycProfile } from '../../utils/kyc',;
import { getBadgeLabels } from '../../utils/kyc',;
import { VerifiedBadge } from './VerifiedBadge',;
;
export function ProfileBadges({ profile } { profile?:KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined),;
  return <VerifiedBadge labels={labels} />,;
}
=======
import React from 'react',
import type { KycProfile } from '../../utils/kyc',
import { getBadgeLabels } from '../../utils/kyc',
import { VerifiedBadge } from './VerifiedBadge',
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined),
  return <VerifiedBadge labels={labels} />}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
