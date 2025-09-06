
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {

  const labels = getBadgeLabels(profile |undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile |undefined);
  return <VerifiedBadge labels={labels} />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
