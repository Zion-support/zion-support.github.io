import React from 'react',
import React from 'react';
import type { KycProfile } from '../../utils / kyc';
import { getBadgeLabels } from '../../utils / kyc';
import { VerifiedBadge } from './VerifiedBadge';
export /**
 * ProfileBadges - Function description
 */
function ProfileBadges() {
  const labels = getBadgeLabels (profile || undefined);
  return <VerifiedBadge labels={labels} />;export /**
 * ProfileBadges - Function description
 */
function ProfileBadges() {
  const labels = getBadgeLabels (profile || undefined);
  return <VerifiedBadge labels={labels} />;

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======

import React from 'react';

import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';

export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);

  return <VerifiedBadge labels={labels} />

}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
