}

=======


}=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';

import React from 'react',
import React from 'react';
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {

  const labels = getBadgeLabels(profile |undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile |undefined);
=======
=======
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
=======

import React from 'react';

import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
=======
  return <VerifiedBadge labels={labels} />
}
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return <VerifiedBadge labels={labels} />

}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
