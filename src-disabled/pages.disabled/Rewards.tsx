<<<<<<< HEAD:src/pages/Rewards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Gift } from 'lucide-react'

const REWARDS = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

            key={r && r.id}
            className='flex justify-between items-center border rounded-md p-4'>            <div>;
              <p className='font-medium'>{r && r.title}</p>;
=======
return (
    <div className='container max-w-xl py-10'>;'
      <h1 className='text-3xl font-bold mb-6'>Rewards</h1>;'
      <ul className='space-y-4'>;
        {REWARDS && REWARDS.map(r => (;
          <li;
            key={r && r.id}'
            className='flex justify-between items-center border rounded-md p-4'>            <div>;'
              <p className='font-medium'>{r && r.title}</p>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className='text-sm text-muted-foreground'>{r && r.cost} pts</p>;
            </div>;'
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />;
          </li>;
'
import { Gift } from 'lucide-react'

<<<<<<< HEAD
const REWARDS = [
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

import { Gift } from 'lucide-react'

const REWARDS = [
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/Rewards.tsx
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }],

export default function RewardsPage() {
<<<<<<< HEAD:src/pages/Rewards.tsx
=======

const REWARDS = null;
export default function RewardsPage() {
const REWARDS = [
  { id: 'coupon5', title: '$5 Coupon', cost: 500 }
  { id: 'premium-week', title: 'Premium Week', cost: 1000 }
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }
]
const REWARDS = [
  { id: 'coupon5', title: '$5 Coupon', cost: 500 }
  { id: 'premium-week', title: 'Premium Week', cost: 1000 }
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }
]
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="container max-w-xl py-10">
      <h1 className="text-3xl font-bold mb-6">Rewards</h1>
=======
const REWARDS = ['
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },'
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },'
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }],

export default function RewardsPage() {}
  return ("
    <div className="container max-w-xl py-10">"
      <h1 className="text-3xl font-bold mb-6">Rewards</h1>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <ul className="space-y-4">
        {REWARDS.map((r) => ("
          <li key={r.id} className="flex justify-between items-center border rounded-md p-4">
            <div>"
              <p className="font-medium">{r.title}</p>"
              <p className="text-sm text-muted-foreground">{r.cost} pts</p>
<<<<<<< HEAD
            </div>
<<<<<<< HEAD
=======
            </div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Gift className="h-5 w-5" />
=======
            <Gift className='h-5 w-5' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          </li>
<<<<<<< HEAD
<<<<<<< HEAD
        ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

        ))};
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

const REWARDS = null;
export default function RewardsPage() {

  return (
    <div className="container max-w-xl py-10">
      <h1 className="text-3xl font-bold mb-6">Rewards</h1>
      <ul className="space-y-4">
        {REWARDS.map((r) => (
          <li key={r.id} className="flex justify-between items-center border rounded-md p-4">
            <div>
              <p className="font-medium">{r.title}</p>
              <p className="text-sm text-muted-foreground">{r.cost} pts</p>
            </div>
            <Gift className="h-5 w-5" />
            <Gift className='h-5 w-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
          </li>
        ))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/Rewards.tsx
      </ul>;
    </div>;
  );
}
<<<<<<< HEAD:src/pages/Rewards.tsx
<<<<<<< HEAD
;
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  );
}'
import { Gift } from 'lucide-react';
const REWARDS = [;'
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },'
  { id: 'premium - week', title: 'Premium Week', cost: 1000 },'
  { id: 'swag - pack', title: 'Swag Pack', cost: 2000 },
];
const REWARDS = [;'
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },'
  { id: 'premium - week', title: 'Premium Week', cost: 1000 },'
  { id: 'swag - pack', title: 'Swag Pack', cost: 2000 },
];
  return ('
    <div className='container max - w-xl py - 10'>;'
      <h1 className='text - 3xl font - bold mb - 6'>Rewards</h1>;'
      <ul className='space - y-4'>;
        {REWARDS.map (r => (
          <li;
            key={r.id}'
            className='flex justify - between items - center border rounded - md p - 4';
          >            <div>;'
              <p className='font - medium'>{r.title}</p>;'
              <p className='text - sm text - muted - foreground'>{r.cost} pts</p>;
            </div>;'"
=======
  );
}
import { Gift } from 'lucide-react';
const REWARDS = [;,
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },'
  { id: 'premium - week', title: 'Premium Week', cost: 1000 },'
  { id: 'swag - pack', title: 'Swag Pack', cost: 2000 },'
];,
const REWARDS = [;
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },'
  { id: 'premium - week', title: 'Premium Week', cost: 1000 },'
  { id: 'swag - pack', title: 'Swag Pack', cost: 2000 },'
];
  return (
    <div className='container max - w-xl py - 10'>;
      <h1 className='text - 3xl font - bold mb - 6'>Rewards</h1>;
      <ul className='space - y-4'>;
        {REWARDS.map (r => (
          <li;
            key={r.id}
            className='flex justify - between items - center border rounded - md p - 4';
          >            <div>;
              <p className='font - medium'>{r.title}</p>;
              <p className='text - sm text - muted - foreground'>{r.cost} pts</p>;
            </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/Rewards.tsx
            <Gift className='h - 5 w - 5' />          </li>            <Gift className="h - 5 w - 5" />;
          </li>))}
      </ul>;
    </div>);
<<<<<<< HEAD:src/pages/Rewards.tsx
<<<<<<< HEAD
}
<<<<<<< HEAD
import { Gift } from 'lucide-react'
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Rewards: React.FC = () => {
  return (
    <MainLayout title="Rewards - Zion Tech Group" description="Earn rewards for your loyalty and engagement.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Rewards</h1>
        <p className="text-lg">This is the Rewards page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Rewards;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
}
import { Gift } from 'lucide-react';))
;
import { Gift } from 'lucide-react'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/Rewards.tsx
      </ul>
    </div>
  );
}
<<<<<<< HEAD:src/pages/Rewards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'
import { Gift } from 'lucide-react''";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/Rewards.tsx
