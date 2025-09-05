import React from 'react';
import type {_KycProfile} from '../../utils/kyc';

export function ProfileBadges(_{_profile}: {_profile?: KycProfile | null}) {_const _labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;
}