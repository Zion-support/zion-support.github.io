<<<<<<< HEAD

}

=======


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';

<<<<<<< HEAD
import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';

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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import React from 'react';

import type { KycProfile } from '../../utils/kyc';
import { getBadgeLabels } from '../../utils/kyc';
import { VerifiedBadge } from './VerifiedBadge';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
  return <VerifiedBadge labels={labels} />;export function ProfileBadges({ profile }: { profile?: KycProfile | null }) {;
  const labels = getBadgeLabels(profile || undefined);
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return <VerifiedBadge labels={labels} />
}
}

<<<<<<< HEAD
}
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
