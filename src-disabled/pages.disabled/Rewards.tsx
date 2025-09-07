<p className='text-sm text-muted-foreground'>{r && r.cost} pts</p>;
            </div>;'
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />;
          </li>;
'
import { Gift } from 'lucide-react'
<<<<<<< HEAD

  )
}
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

  return (
    <div className='container max-w-xl py-10'>
      <h1 className='text-3xl font-bold mb-6'>Rewards</h1>
      <ul className='space-y-4'>
        {REWARDS.map(r => (
          <li
            key={r.id}
            className='flex justify-between items-center border rounded-md p-4'
          >            <div>
              <p className='font-medium'>{r.title}</p>
              <p className='text-sm text-muted-foreground'>{r.cost} pts</p>
            </div>
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />
          </li>
        ))}
      </ul>
    </div>
  )
}
  );
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  { id: 'coupon5', title: '$5 Coupon', cost: 500 },
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }],

export default function RewardsPage() {

  return (
    <div className="container max-w-xl py-10">
      <h1 className="text-3xl font-bold mb-6">Rewards</h1>

      <ul className="space-y-4">
        {REWARDS.map((r) => ("
          <li key={r.id} className="flex justify-between items-center border rounded-md p-4">
            <div>"
              <p className="font-medium">{r.title}</p>"
              <p className="text-sm text-muted-foreground">{r.cost} pts</p>

            <Gift className="h-5 w-5" />

          </li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </ul>;
    </div>;
  );
});
}'
import { Gift } from 'lucide-react';
const REWARDS = [;'
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },'
  { id: 'premium - week', title: 'Premium Week', cost: 1000 },'
  { id: 'swag - pack', title: 'Swag Pack', cost: 2000 },
];
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

            <Gift className='h - 5 w - 5' />          </li>            <Gift className="h - 5 w - 5" />;
          </li>))}
      </ul>;
    </div>);

      </ul>
    </div>
  );
}