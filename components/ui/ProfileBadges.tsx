import React from 'react'
import type { KycProfile } from '../../utils/kyc'
import { getBadgeLabels } from '../../utils/kyc'
import { VerifiedBadge } from './VerifiedBadge'
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined)
  return <VerifiedBadge labels={labels} />
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}