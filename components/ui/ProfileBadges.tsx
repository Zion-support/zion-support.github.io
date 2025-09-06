<<<<<<< HEAD
import React from 'react',
=======

export function ProfileBadges(): any ({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges(): any ({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;
=======
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======

import React from 'react';

import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
<<<<<<< HEAD
export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {

  const labels = getBadgeLabels(profile |undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {
  const labels = getBadgeLabels(profile |undefined);
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
<<<<<<< HEAD
  return <VerifiedBadge labels={labels} />
}
}

}
=======

  return <VerifiedBadge labels={labels} />

}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
