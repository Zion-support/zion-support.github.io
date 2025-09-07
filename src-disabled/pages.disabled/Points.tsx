<<<<<<< HEAD
import React, { useState } from 'react';

} from 'lucide-react';
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import {
import React, { useState } from 'react';

import {
  Gift
  Star
  Users
  ShoppingBag
  MessageSquare
  TrendingUp
  History
  Gift,
  Star,
  Users,
  ShoppingBag,
  MessageSquare,
  TrendingUp,;
  History;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
<<<<<<< HEAD
  Card,
  CardContent,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import {;
  Gift,;
  Star,;
  Users,;
  ShoppingBag,;
  MessageSquare,;
  TrendingUp,;
  History,;
} from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import React, { useState } from 'react';

<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
  Card,
  CardContent,
  CardDescription,;
  CardHeader;
  CardTitle;
} from '@/components/ui/card';import { Button } from '@/components/ui/button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react'
import { useAuth  } from '@/hooks/useAuth';
import { usePoints  } from '@/hooks/usePoints';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { ScrollArea  } from '@/components/ui/scroll-area';
import { formatDistanceToNow  } from 'date-fns';


import Link from 'next/link';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD
export default function PointsPage() {;
=======

<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
export default function PointsPage() {
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
  const { isAuthenticated, user } = useAuth();
  const { ledger, balance, loading, fetchLedger } = usePoints();
  const [loginOpen, setLoginOpen] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx

=======
  async function handleRedeem(reward: {
    id: string;
    cost: number;
    title: string;
<<<<<<< HEAD
=======

  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function PointsPage() { const { isAuthenticated, user  } = useAuth(),
  const { ledger, balance, loading, fetchLedger  } = usePoints(),
  const [ loginOpen, setLoginOpen ] = useState(false),
  const [ redeeming, setRedeeming ] = useState(false),


  async function handleRedeem(reward: { id: string, cost: number, title: string }) {
<<<<<<< HEAD
  }) {    if (!user?.id) return;  async function handleRedeem(reward: { id: string, cost: number, title: string }) {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
    if (!user?.id) return;
    setRedeeming(true);
    try {
      await fetch('/api/points/redeem', {

<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }

        body: JSON.stringify({
          userId: user.id
          cost: reward.cost
          reward: reward.title
        })
import React, { useState } from 'react',;
=======
} from '@/components / ui / card';import { Button } from '@/components / ui / button';import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { use_points } from '@/hooks / use_points';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { ScrollArea } from '@/components / ui / scroll - area';
import { formatDistanceToNow } from 'date - fns';
import Link from 'next / link';
import { LoginModal } from '@/components / auth / LoginModal';
export default /**
 * PointsPage - Function description
 */
function PointsPage() {
  const { is_authenticated, user } = use_auth ();
  const { ledger, balance, loading, fetch_ledger } = use_points ();
  const [login_open, setLoginOpen] = useState (false);
  const [redeeming, set_redeeming] = useState (false);
;
  async /**
 * handle_redeem - Function description
 */
function handle_redeem() {    // Check condition
if (return) {
  $2
}  async /**
 * handle_redeem - Function description
 */
function handle_redeem() {
    // Check condition
if (return) {
  $2
}
    set_redeeming (true);
    try {
      await fetch ('/api / points / redeem', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          user_id: user.id,
          cost: reward.cost,
          reward: reward.title,
        }),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx

        method: 'POST';
        headers: { 'Content-Type': 'application/json' },
origin/cursor/automate-test-improve-and-merge-code-2533
        body: JSON.stringify({
          userId: user.id
          cost: reward.cost
          reward: reward.title
        })
      });
      await fetchLedger();
    } finally {
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
      setRedeeming(false);    }      });
      await fetchLedger()
    } finally {
      setRedeeming(false)
import React, { useState } from 'react',;
import { Gift, Star, Users, ShoppingBag, MessageSquare, TrendingUp, History } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth',;
import { usePoints } from '@/hooks/usePoints',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import { formatDistanceToNow } from 'date-fns',;
import Link from 'next/link',;
import { LoginModal } from '@/components/auth/LoginModal',;
export default function PointsPage() {;
  const { isAuthenticated, user } = useAuth(),;
  const { ledger, balance, loading, fetchLedger } = usePoints(),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const [redeeming, setRedeeming] = useState(false),;
  async function handleRedeem(reward: { id: string, cost: number, title: string }) {;
    if (!user?.id) return,;
    setRedeeming(true),;
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
=======

  }) {    if (!user?.id) return;  async function handleRedeem(): any (reward: { id: string, cost: number, title: string }) {;
    if (!user?.id) return;
    setRedeeming(true);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
    try {;
      await fetch('/api/points/redeem', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title });
      }),;
      await fetchLedger();
    } finally {;
<<<<<<< HEAD
=======
      setRedeeming(false);    }      });
      await fetchLedger();
    } finally {;
      setRedeeming(false);
        method: 'POST','
        headers: { 'Content-Type': 'application/json' },'

      setRedeeming(false);

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cost: reward.cost, reward: reward.title })
      });
      await fetchLedger()
    } finally {
      setRedeeming(false)
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
    }
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    }


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
      set_redeeming (false);    }      });
      await fetch_ledger ();
    } finally {
      set_redeeming (false);
    }
  },
  const earning_opportunities = [;
    {
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
      icon: <Users className='h - 5 w - 5' />,'
      title: 'Sign Up & Profile Setup','
      description: 'Complete your profile and verify your email','
      points: '50 pts','
      action: is_authenticated ? '✓ Completed' : 'Get Started','
    },
      icon: <ShoppingBag className='h - 5 w - 5' />,'
      icon: <Users className='h-5 w-5' />,'
      title: 'Sign Up & Profile Setup','
      description: 'Complete your profile and verify your email','
      points: '50 pts','
      action: isAuthenticated ? '✓ Completed' : 'Get Started','
    },
      icon: <ShoppingBag className='h-5 w-5' />,'
      title: 'First Purchase','
      description: 'Make your first purchase on the marketplace','
      points: '100 pts','
      action: 'Browse Marketplace','
      icon: <Users className='h-5 w-5' />',
      title: 'Sign Up & Profile Setup'',
      description: 'Complete your profile and verify your email'',
      points: '50 pts'',
      action: isAuthenticated ? '✓ Completed' : 'Get Started''
=======
ursor/fix-website-loading-errors-and-merge-6662

      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
    },
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',

<<<<<<< HEAD
      setRedeeming(false);
    }
  }

  const earningOpportunities = [
    {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: <Users className='h-5 w-5' />
      title: 'Sign Up & Profile Setup'
      description: 'Complete your profile and verify your email'
      points: '50 pts'
      action: isAuthenticated ? '✓ Completed' : 'Get Started'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
    }
      icon: <ShoppingBag className='h-5 w-5' />',
      title: 'First Purchase'',
      description: 'Make your first purchase on the marketplace'',
      points: '100 pts'',
      action: 'Browse Marketplace''
    }
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
    {
      icon: <MessageSquare className='h - 5 w - 5' />,'
      title: 'Community Engagement','
      description: 'Post in the community or comment on discussions','
      points: '25 pts per post','
      action: 'Join Community','
    },
    {
      icon: <Users className='h - 5 w - 5' />,'
      title: 'Refer Friends','
      description: 'Invite friends to join Zion marketplace','
      points: '200 pts per referral','
      action: 'Share Referral Link','
      icon: <Users className='h-5 w-5' />,'
      title: 'Sign Up & Profile Setup','
      description: 'Complete your profile and verify your email','
      points: '50 pts','
      action: isAuthenticated ? '✓ Completed' : 'Get Started''
    },
    {
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
      icon: <ShoppingBag className="h-5 w-5" />,"
      title: "First Purchase","
      description: "Make your first purchase on the marketplace","
      points: "100 pts","
      action: "Browse Marketplace""
=======
      icon: <ShoppingBag className="h-5 w-5" />,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
    },  ];
;
  const upcoming_rewards = [;,
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: 'Refer Friends','
      description: 'Invite friends to join Zion marketplace','
      points: '200 pts per referral','
      action: 'Share Referral Link';
    }
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
      icon: <Users className='h-5 w-5' />',
      title: 'Refer Friends'',
      description: 'Invite friends to join Zion marketplace'',
      points: '200 pts per referral'',
      action: 'Share Referral Link''
    },  ];,
  const upcomingRewards = [
=======

<<<<<<< HEAD
    {
      icon: <MessageSquare className='h-5 w-5' />
      title: 'Community Engagement'
      description: 'Post in the community or comment on discussions'
      points: '25 pts per post'
      action: 'Join Community'
    }
    {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: <Users className='h-5 w-5' />
      title: 'Refer Friends'
      description: 'Invite friends to join Zion marketplace'
      points: '200 pts per referral'
      action: 'Share Referral Link'
    },  ];
  const upcomingRewards = [
<<<<<<< HEAD
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends"
      description: "Invite friends to join Zion marketplace"
      points: "200 pts per referral"
      action: "Share Referral Link"
    }
  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
    {
      id: 'premium1'',
      title: 'Premium Features (1,  month)'',
      cost: 1000,
      category: 'Subscription''
    }
    {
      id: 'swag'',
      title: 'Zion Swag Pack'',
      cost: 1500,
      category: 'Merchandise''
    }
    {
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
      id: 'coupon25'',
      title: '$25 Off Coupon'',
      cost: 2000,
      category: 'Discount''
    }
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }',


=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      id: 'coupon25'
      title: '$25 Off Coupon'
      cost: 2000
      category: 'Discount'
    }
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
<<<<<<< HEAD
      icon: <Users className='h-5 w-5' />,
      title: 'Sign Up & Profile Setup',
      description: 'Complete your profile and verify your email',
      points: '50 pts',
      action: isAuthenticated ? '✓ Completed' : 'Get Started',
    },
      icon: <ShoppingBag className='h-5 w-5' />,
      title: 'First Purchase',
      description: 'Make your first purchase on the marketplace',
      points: '100 pts',
      action: 'Browse Marketplace',
      icon: <Users className="h-5 w-5" />,
      title: "Sign Up & Profile Setup",
      description: "Complete your profile and verify your email",
      points: "50 pts",
      action: isAuthenticated ? "✓ Completed" : "Get Started"
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "First Purchase",
      description: "Make your first purchase on the marketplace",
      points: "100 pts",
      action: "Browse Marketplace"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const earningOpportunities = [;
    {;
      icon: <Users className='h-5 w-5' />,;
      title: 'Sign Up & Profile Setup',;
      description: 'Complete your profile and verify your email',;
      points: '50 pts',;
      action: isAuthenticated ? '✓ Completed' : 'Get Started',;
    },;
      icon: <ShoppingBag className='h-5 w-5' />,;
      title: 'First Purchase',;
      description: 'Make your first purchase on the marketplace',;
      points: '100 pts',;
      action: 'Browse Marketplace',;
    },;
    {;
      icon: <MessageSquare className='h-5 w-5' />,;
      title: 'Community Engagement',;
      description: 'Post in the community or comment on discussions',;
      points: '25 pts per post',;
      action: 'Join Community',;
    },;
    {;
      icon: <Users className='h-5 w-5' />,;
      title: 'Refer Friends',;
      description: 'Invite friends to join Zion marketplace',;
      points: '200 pts per referral',;
      action: 'Share Referral Link',;
<<<<<<< HEAD
    },  ];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx

    }
  }

<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
    {;
      id: 'premium1',;
      title: 'Premium Features (1 month)',;
      cost: 1000,;
      category: 'Subscription',;
    },;
    {;
      id: 'swag',;
      title: 'Zion Swag Pack',;
      cost: 1500,;
      category: 'Merchandise',;
    },;
    {;
      id: 'coupon25',;
      title: '$25 Off Coupon',;
      cost: 2000,;
      category: 'Discount',;
    },;
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' },;
    },
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Refer Friends',
      description: 'Invite friends to join Zion marketplace',
      points: '200 pts per referral',
      action: 'Share Referral Link',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },  ];

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },      title: "Refer Friends",
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Community Engagement",
      description: "Post in the community or comment on discussions",
      points: "25 pts per post",
      action: "Join Community"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Refer Friends",
      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }
<<<<<<< HEAD



  if (!isAuthenticated) {;
    return (

  const upcomingRewards = [
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
    {
      id: 'premium1',
      title: 'Premium Features (1 month)',
      cost: 1000,
      category: 'Subscription',
    },
    {
      id: 'swag',
      title: 'Zion Swag Pack',
      cost: 1500,
      category: 'Merchandise',
    },
    {
      id: 'coupon25',
      title: '$25 Off Coupon',
      cost: 2000,
      category: 'Discount',
    },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' },
  ],;
  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },;
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },;
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' };
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ],
=======
  ],;
  const upcomingRewards = [;
    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },;
    {;
      id: 'premium1',;
      title: 'Premium Features (1 month)',;
      cost: 1000,;
      category: 'Subscription',;
    },;
    {;
      id: 'swag',;
      title: 'Zion Swag Pack',;
      cost: 1500,;
      category: 'Merchandise',;
    },;
    {;
      id: 'coupon25',;
      title: '$25 Off Coupon',;
      cost: 2000,;
      category: 'Discount',;
    },;
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' },;
    },
    {


      description: "Invite friends to join Zion marketplace",
      points: "200 pts per referral",
      action: "Share Referral Link"
    }



  if (!isAuthenticated) {;
    return (

    { id: 'coupon5', title: '$5 Off Coupon', cost: 500, category: 'Discount' },
    { id: 'premium1', title: 'Premium Features (1 month)', cost: 1000, category: 'Subscription' },
    { id: 'swag', title: 'Zion Swag Pack', cost: 1500, category: 'Merchandise' },
    { id: 'coupon25', title: '$25 Off Coupon', cost: 2000, category: 'Discount' },
    { id: 'vip', title: 'VIP Support Access', cost: 3000, category: 'Service' }
  ];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  if (!isAuthenticated) {
    return (
      <>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
        <div className='container py-10 max-w-4xl'>
          <div className='text-center mb-8'>
            <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
            <h1 className='text-4xl font-bold mb-4'>Zion Rewards Program</h1>
            <p className='text-xl text-muted-foreground mb-6'>
              Earn points for every action you take and redeem them for
              exclusive rewards!
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
            </p>
            <Button onClick={() => setLoginOpen(true)} size='lg'>              Join Now to Start Earning
            </Button>
          </div>
            <Button onClick={(,) => setLoginOpen(true)} size="lg">
=======
      <>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="container py-10 max-w-4xl">
          <div className="text-center mb-8">
            <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Zion Rewards Program</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Earn points for every action you take and redeem them for exclusive rewards!
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
            </p>
            <Button onClick={() => setLoginOpen(true)} size='lg'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Join Now to Start Earning
            </Button>
          </div>
<<<<<<< HEAD
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div className="grid md:grid-cols-2 gap-8 mb-12">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <div className="grid md:grid-cols-2 gap-8 mb-12">
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                  How to Earn Points
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  How to Earn Points


<<<<<<< HEAD
                  How to Earn Points
                  How to Earn Points
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
                </CardTitle>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
              <CardContent className='space-y-4'>
                {earningOpportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-3 p-3 rounded-lg border'
                  >
                    <div className='text-primary mt-1'>{opportunity.icon}</div>
                    <div className='flex-1'>
                      <h4 className='font-medium'>{opportunity.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {opportunity.description}
                      </p>                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
              <CardContent className="space-y-4">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <div className='container py - 10 max - w-4xl'>;
          <div className='text - center mb - 8'>;
            <Gift className='h - 16 w - 16 text - primary mx - auto mb - 4' />;
            <h1 className='text - 4xl font - bold mb - 4'>Zion Rewards Program</h1>;
            <p className='text - xl text - muted - foreground mb - 6'>;
              Earn points for every action you take and redeem them for;
              exclusive rewards!;
            </p>;
            <Button on_click={() => setLoginOpen (true)} size='lg'>              Join Now to Start Earning;
            </Button>;
          </div>;
            <Button on_click={(, ) => setLoginOpen (true)} size='lg'>;
            <Button on_click={() => setLoginOpen (true)} size='lg'>;
              Join Now to Start Earning;
            </Button>;
          </div>;
          <div className='grid md:grid - cols - 2 gap - 8 mb - 12'>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items - center gap - 2'>;
                  <TrendingUp className='h - 5 w - 5' />                  How to Earn Points          <div className='grid md:grid - cols - 2 gap - 8 mb - 12'>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items - center gap - 2'>;
                  <TrendingUp className='h - 5 w - 5' />;
                </CardTitle>;
                <CardDescription>;
                  Multiple ways to accumulate rewards;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space - y-4'>;
                {earning_opportunities.map ((opportunity, index) => (
                  <div;
                    key={index}
                    className='flex items-start gap-3 p-3 rounded-lg border''
                  >
                    <div className='text-primary mt-1'>{opportunity.icon}</div>'
                    <div className='flex-1'>'
                      <h4 className='font-medium'>{opportunity.title}</h4>'
                      <p className='text-sm text-muted-foreground'>'
                        {opportunity.description}
              <CardContent className='space-y-4'>'
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className='flex items-start gap-3 p-3 rounded-lg border'>'
              <CardContent className='space-y-4'>'
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className='flex items-start gap-3 p-3 rounded-lg border'>'
                    <div className='text-primary mt-1'>{opportunity.icon}</div>'
                    <div className='flex-1'>'
                      <h4 className='font-medium'>{opportunity.title}</h4>'
                      <p className='text-sm text-muted-foreground'>{opportunity.description}</p>'
                    </div>
                    <Badge variant='secondary'>{opportunity.points}</Badge>'


<div className='grid md:grid-cols-2 gap-8 mb-12'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5' />
                  How to Earn Points
origin/cursor/automate-test-improve-and-merge-code-2533
                </CardTitle>
                  Multiple ways to accumulate rewards
                </CardDescription>
              </CardHeader>
<CardContent className='space-y-4'>
                {earningOpportunities.map((opportunity, index) => (
                  <div
origin/cursor/automate-test-improve-and-merge-code-2533
                    key={index}
                    className='flex items - start gap - 3 p - 3 rounded - lg border';
                  >;
                    <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                    <div className='flex - 1'>;
                      <h4 className='font - medium'>{opportunity.title}</h4>;
                      <p className='text - sm text - muted - foreground'>;
                        {opportunity.description}

              <CardContent className='space-y-4'>
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="text-primary mt-1">{opportunity.icon}</div>
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                    <Badge variant="secondary">{opportunity.points}</Badge>
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
=======
<<<<<<< HEAD
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>
ursor/fix-website-loading-errors-and-merge-6662
                    <Badge variant="secondary">{opportunity.points}</Badge>
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>
                    <Badge variant="secondary">{opportunity.points}</Badge>



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <Badge variant="secondary">{opportunity.points}</Badge>
                      </p>
                    </div>
                    <Badge variant='secondary'>{opportunity.points}</Badge>
origin/cursor/automate-test-improve-and-merge-code-2533
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                <CardTitle className="flex items-center gap-2">"
                <CardTitle className="flex items-center gap-2">"
                  <Gift className="h-5 w-5" />"

            <Card>
              <CardHeader>
=======
<<<<<<< HEAD
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
                  <Gift className="h-5 w-5" />
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className="flex items-center gap-2">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  <Gift className="h-5 w-5" />
<CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
                  Upcoming Rewards
                </CardTitle>
                <CardDescription>
                  What you can redeem your points for
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
              <CardContent className="space-y-4">"
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className='flex items-center justify-between p-3 rounded-lg border'>'
                    <div>
                      <h4 className='font-medium'>{reward.title}</h4>'
                      <p className='text-sm text-muted-foreground'>{reward.category}</p>'
                    </div>
                    <Badge variant="outline">{reward.cost}</Badge>"
=======
<<<<<<< HEAD
              <CardContent className='space-y-4'>
                {upcomingRewards.map((reward, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 rounded-lg border'
                  >                    <div>
                      <h4 className='font-medium'>{reward.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {reward.category}
                      </p>
                    </div>
                    <Badge variant='outline'>{reward.cost}</Badge>                  </div>
                    <Badge variant="outline">{reward.cost}</Badge>


=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
              <CardContent className="space-y-4">
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className='flex items-center justify-between p-3 rounded-lg border'>
                    <div>
                      <h4 className='font-medium'>{reward.title}</h4>
                      <p className='text-sm text-muted-foreground'>{reward.category}</p>
                    </div>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                    <Badge variant="outline">{reward.cost}</Badge>
=======
<<<<<<< HEAD
                    <Badge variant="outline">{reward.cost}</Badge>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx



                    <Badge variant='outline'>{reward.cost}</Badge>
<CardContent className='space-y-4'>
                {upcomingRewards.map((reward, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 rounded-lg border'
                  >                    <div>
                      <h4 className='font-medium'>{reward.title}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {reward.category}
                      </p>
                    </div>
                    <Badge variant='outline'>{reward.cost}</Badge>
origin/cursor/automate-test-improve-and-merge-code-2533
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
          <Card className="text-center">"
            <CardContent className="pt-6">"
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />"
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>"
              <p className="text-muted-foreground mb-4">"
=======
<<<<<<< HEAD
          <Card className='text-center'>
            <CardContent className='pt-6'>
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>
              <p className='text-muted-foreground mb-4'>
                Our full rewards system is launching soon! Sign up now to start
                earning points immediately.
              </p>
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>            </CardContent>          <Card className="text-center">



=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Our full rewards system is launching soon! Sign up now to start earning points immediately.
              </p>
              <Button onClick={() => setLoginOpen(true)}>
                Create Account
              </Button>
            </CardContent>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
            </CardContent>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
          </Card>
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      </>
      <>;
        <div className='container py-10 max-w-4xl'>;
          <div className='text-center mb-8'>;
            <Gift className='h-16 w-16 text-primary mx-auto mb-4' />;
            <h1 className='text-4xl font-bold mb-4'>Zion Rewards Program</h1>;
            <p className='text-xl text-muted-foreground mb-6'>;
              Earn points for every action you take and redeem them for;
              exclusive rewards!;
            </p>;
            <Button onClick={() => setLoginOpen(true)} size='lg'>              Join Now to Start Earning;
            </Button>;
          </div>;
            <Button onClick={(,) => setLoginOpen(true)} size='lg'>;
            <Button onClick={() => setLoginOpen(true)} size='lg'>;
              Join Now to Start Earning;
            </Button>;
          </div>;
          <div className='grid md:grid-cols-2 gap-8 mb-12'>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center gap-2'>;
                  <TrendingUp className='h-5 w-5' />                  How to Earn Points          <div className='grid md:grid-cols-2 gap-8 mb-12'>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center gap-2'>;
                  <TrendingUp className='h-5 w-5' />;
                </CardTitle>;
                <CardDescription>;
                  Multiple ways to accumulate rewards;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space-y-4'>;
                {earningOpportunities && earningOpportunities.map((opportunity, index) => (;
                  <div
                    key={index}
                    className='flex items-start gap-3 p-3 rounded-lg border'>;
                    <div className='text-primary mt-1'>{opportunity && opportunity.icon}</div>;
                    <div className='flex-1'>;
                      <h4 className='font-medium'>{opportunity && opportunity.title}</h4>;
                      <p className='text-sm text-muted-foreground'>;
                        {opportunity && opportunity.description}
                      </p>                  <div key={index} className='flex items-start gap-3 p-3 rounded-lg border'>;
                    <div className='text-primary mt-1'>{opportunity && opportunity.icon}</div>;
                    <div className='flex-1'>;
                      <h4 className='font-medium'>{opportunity && opportunity.title}</h4>;
                      <p className='text-sm text-muted-foreground'>{opportunity && opportunity.description}</p>;
                    </div>;
                    <Badge variant='secondary'>{opportunity && opportunity.points}</Badge>                  </div>                    </div>;
                    <Badge variant='secondary'>{opportunity && opportunity.points}</Badge>;
                  </div>;
                ))}
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center gap-2'>;
                  <Gift className='h-5 w-5' />                  Upcoming Rewards                <CardTitle className='flex items-center gap-2'>;
                  <Gift className='h-5 w-5' />;
                  Upcoming Rewards;
                </CardTitle>;
                <CardDescription>;
                  What you can redeem your points for;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space-y-4'>;
                {upcomingRewards && upcomingRewards.map((reward, index) => (;
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 rounded-lg border'>                    <div>;
                      <h4 className='font-medium'>{reward && reward.title}</h4>;
                      <p className='text-sm text-muted-foreground'>;
                        {reward && reward.category}
                      </p>;
                    </div>;
                    <Badge variant='outline'>{reward && reward.cost}</Badge>                  </div>;
                    <Badge variant='outline'>{reward && reward.cost}</Badge>;
                {upcomingRewards && upcomingRewards.map((reward, index) => (;
                  <div key={index} className='flex items-center justify-between p-3 rounded-lg border'>;
                    <div>;
                      <h4 className='font-medium'>{reward && reward.title}</h4>;
                      <p className='text-sm text-muted-foreground'>{reward && reward.category}</p>;
                    </div>;
                    <Badge variant='outline'>{reward && reward.cost}</Badge>;
                  </div>;
                ))}
              </CardContent>;
            </Card>;
          </div>;
          <Card className='text-center'>;
            <CardContent className='pt-6'>;
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />;
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>;
              <p className='text-muted-foreground mb-4'>;
                Our full rewards system is launching soon! Sign up now to start;
                earning points immediately.;
              </p>;
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>            </CardContent>          <Card className='text-center'>;
            <CardContent className='pt-6'>;
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />;
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>;
              <p className='text-muted-foreground mb-4'>;
                Our full rewards system is launching soon! Sign up now to start earning points immediately.;
              </p>;
              <Button onClick={() => setLoginOpen(true)}>;
                      </p>                  <div key={index} className='flex items - start gap - 3 p - 3 rounded - lg border'>;
                    <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                    <div className='flex - 1'>;
                      <h4 className='font - medium'>{opportunity.title}</h4>;
                      <p className='text - sm text - muted - foreground'>{opportunity.description}</p>;
                    </div>;
                    <Badge variant='secondary'>{opportunity.points}</Badge>                  </div>                    </div>;
                    <Badge variant='secondary'>{opportunity.points}</Badge>;
                  </div>))}
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items - center gap - 2'>;
                  <Gift className='h - 5 w - 5' />                  Upcoming Rewards                <CardTitle className='flex items - center gap - 2'>;
                  <Gift className='h - 5 w - 5' />;
                  Upcoming Rewards;
                </CardTitle>;
                <CardDescription>;
                  What you can redeem your points for;
                </CardDescription>;
              </CardHeader>;
              <CardContent className='space - y-4'>;
                {upcoming_rewards.map ((reward, index) => (
                  <div;
                    key={index}
                    className='flex items - center justify - between p - 3 rounded - lg border';
                  >                    <div>;
                      <h4 className='font - medium'>{reward.title}</h4>;
                      <p className='text - sm text - muted - foreground'>;
                        {reward.category}
                      </p>;
                    </div>;
                    <Badge variant='outline'>{reward.cost}</Badge>                  </div>;
                    <Badge variant='outline'>{reward.cost}</Badge>;
                {upcoming_rewards.map ((reward, index) => (
                  <div key={index} className='flex items - center justify - between p - 3 rounded - lg border'>;
                    <div>;
                      <h4 className='font - medium'>{reward.title}</h4>;
                      <p className='text - sm text - muted - foreground'>{reward.category}</p>;
                    </div>;
                    <Badge variant='outline'>{reward.cost}</Badge>;
                  </div>))}
              </CardContent>;
            </Card>;
          </div>;
          <Card className='text - center'>;
            <CardContent className='pt - 6'>;
              <Star className='h - 12 w - 12 text - primary mx - auto mb - 4' />;
              <h3 className='text - 2xl font - bold mb - 2'>Coming Soon</h3>;
              <p className='text - muted - foreground mb - 4'>;
                Our full rewards system is launching soon! Sign up now to start;
                earning points immediately.;
              </p>;
              <Button on_click={() => setLoginOpen (true)}>Create Account</Button>            </CardContent>          <Card className='text - center'>;
            <CardContent className='pt - 6'>;
              <Star className='h - 12 w - 12 text - primary mx - auto mb - 4' />;
              <h3 className='text - 2xl font - bold mb - 2'>Coming Soon</h3>;
              <p className='text - muted - foreground mb - 4'>;
                Our full rewards system is launching soon! Sign up now to start earning points immediately.;
              </p>;
              <Button on_click={() => setLoginOpen (true)}>;
                Create Account;
              </Button>;
          </Card>;
        </div>;
    );
  }
  return (
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
          <p className="text-sm text-muted-foreground mt-2">"
            You haven't earned any points yet. Complete the tasks below to start'
    )
  }

  return (
=======
<<<<<<< HEAD
    <div className='container py-10 max-w-4xl'>
      <div className='text-center mb-8'>
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>
        <div className='text-6xl font-bold text-primary mb-2'>
          {loading ? '...' : balance}
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
ursor/fix-website-loading-errors-and-merge-6662
          <p className="text-sm text-muted-foreground mt-2">
    )
  }
  return (
    <div className='container py-10 max-w-4xl'>
      <div className='text-center mb-8'>
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>
        <div className='text-6xl font-bold text-primary mb-2'>
          {loading ? '...' : balance}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
    <div className="container py-10 max-w-4xl">
      <div className="text-center mb-8">
        <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Your Rewards</h1>
        <div className="text-6xl font-bold text-primary mb-2">
          {loading ? "..." : balance}
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx



<Card className='text-center'>
            <CardContent className='pt-6'>
              <Star className='h-12 w-12 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold mb-2'>Coming Soon</h3>
              <p className='text-muted-foreground mb-4'>
                Our full rewards system is launching soon! Sign up now to start
                earning points immediately.
              </p>
              <Button onClick={() => setLoginOpen(true)}>Create Account</Button>
            </CardContent>
origin/cursor/automate-test-improve-and-merge-code-2533
          </Card>
        <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
      </>


        </div>
        <p className='text-xl text-muted-foreground'>Points Available</p>
        {!loading && balance === 0 && (
=======
        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>
        <p className="text-xl text-muted-foreground">Points Available</p>
        {!loading && balance === 0 && (
          <p className="text-sm text-muted-foreground mt-2">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
          <p className="text-sm text-muted-foreground mt-2">
    );
  }
  return (
<div className='container py-10 max-w-4xl'>
      <div className='text-center mb-8'>
        <Gift className='h-16 w-16 text-primary mx-auto mb-4' />
        <h1 className='text-4xl font-bold mb-4'>Your Rewards</h1>
        <div className='text-6xl font-bold text-primary mb-2'>
          {loading ? '...' : balance}
        </div>
        <p className='text-xl text-muted-foreground'>Points Available</p>
        {!loading && balance === 0 && (
          <p className='text-sm text-muted-foreground mt-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
            You haven't earned any points yet. Complete the tasks below to start
            earning and redeem rewards.
          </p>
        )}
      </div>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
      <div className="grid md:grid-cols-2 gap-8 mb-12">"
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">"
              <TrendingUp className="h-5 w-5" />"
=======
<<<<<<< HEAD
      <div className='grid md:grid-cols-2 gap-8 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />              Keep Earning      <div className="grid md:grid-cols-2 gap-8 mb-12">



=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />
              Keep Earning
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
              Keep Earning
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
            </CardTitle>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
          <CardContent className='space-y-4'>
            {earningOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className='flex items-start gap-3 p-3 rounded-lg border'
              >
                <div className='text-primary mt-1'>{opportunity.icon}</div>
                <div className='flex-1'>
                  <h4 className='font-medium'>{opportunity.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {opportunity.description}
                  </p>              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
          <CardContent className="space-y-4">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
        <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
      </>);
  }
  return (
    <div className='container py - 10 max - w-4xl'>;
      <div className='text - center mb - 8'>;
        <Gift className='h - 16 w - 16 text - primary mx - auto mb - 4' />;
        <h1 className='text - 4xl font - bold mb - 4'>Your Rewards</h1>;
        <div className='text - 6xl font - bold text - primary mb - 2'>;
          {loading ? '...' : balance}'
        </div>;
        <p className='text - xl text - muted - foreground'>Points Available</p>;
        {!loading && balance === 0 && (
          <p className='text - sm text - muted - foreground mt - 2'>            You haven't earned any points yet. Complete the tasks below to start        </div>;
        <p className='text - xl text - muted - foreground'>Points Available</p>;
        {!loading && balance === 0 && (
          <p className='text - sm text - muted - foreground mt - 2'>;
            You haven't earned any points yet. Complete the tasks below to start;
            earning and redeem rewards.;
          </p>)}
      </div>;
      <div className='grid md:grid - cols - 2 gap - 8 mb - 12'>;
        <Card>;
          <CardHeader>;
            <CardTitle className='flex items - center gap - 2'>;
              <TrendingUp className='h - 5 w - 5' />              Keep Earning      <div className='grid md:grid - cols - 2 gap - 8 mb - 12'>;
        <Card>;
          <CardHeader>;
            <CardTitle className='flex items - center gap - 2'>;
              <TrendingUp className='h - 5 w - 5' />;
            </CardTitle>;
            <CardDescription>;
              More ways to boost your point balance;
            </CardDescription>;
          </CardHeader>;
          <CardContent className='space - y-4'>;
            {earning_opportunities.map ((opportunity, index) => (
              <div;
                key={index}
                className='flex items-start gap-3 p-3 rounded-lg border''
              >
                <div className='text-primary mt-1'>{opportunity.icon}</div>'
                <div className='flex-1'>'
                  <h4 className='font-medium'>{opportunity.title}</h4>'
                  <p className='text-sm text-muted-foreground'>'
                    {opportunity.description}
                  </p>              <div key={index} className='flex items - start gap - 3 p - 3 rounded - lg border'>;
                <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                <div className='flex - 1'>;
                  <h4 className='font - medium'>{opportunity.title}</h4>;
                  <p className='text - sm text - muted - foreground'>{opportunity.description}</p>;
                </div>;
                <div className='text - right'>;
                  <Badge variant='secondary' className='mb - 1'>;
                    {opportunity.points}
                  </Badge>;
                  <p className='text - xs text - muted - foreground'>;
                    {opportunity.action}
          <CardContent className='space-y-4'>'
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className='flex items-start gap-3 p-3 rounded-lg border'>'
          <CardContent className='space-y-4'>'
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className='flex items-start gap-3 p-3 rounded-lg border'>'
                <div className='text-primary mt-1'>{opportunity.icon}</div>'
                <div className='flex-1'>'
                  <h4 className='font-medium'>{opportunity.title}</h4>'
                  <p className='text-sm text-muted-foreground'>{opportunity.description}</p>'
                </div>
                <div className='text-right'>'
                  <Badge variant='secondary' className='mb-1'>{opportunity.points}</Badge>'
                  <p className='text-xs text-muted-foreground'>{opportunity.action}</p>'



<div className='grid md:grid-cols-2 gap-8 mb-12'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5' />
              Keep Earning
origin/cursor/automate-test-improve-and-merge-code-2533
            </CardTitle>
              More ways to boost your point balance
            </CardDescription>
          </CardHeader>
<CardContent className='space-y-4'>
            {earningOpportunities.map((opportunity, index) => (
              <div
origin/cursor/automate-test-improve-and-merge-code-2533
                key={index}
                className='flex items - start gap - 3 p - 3 rounded - lg border';
              >;
                <div className='text - primary mt - 1'>{opportunity.icon}</div>;
                <div className='flex - 1'>;
                  <h4 className='font - medium'>{opportunity.title}</h4>;
                  <p className='text - sm text - muted - foreground'>;
                    {opportunity.description}

          <CardContent className='space-y-4'>
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="text-primary mt-1">{opportunity.icon}</div>
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{opportunity.points}</Badge>
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </div>
=======
<<<<<<< HEAD
                <div className='text-right'>
                  <Badge variant='secondary' className='mb-1'>
                    {opportunity.points}
                  </Badge>
                  <p className='text-xs text-muted-foreground'>
                    {opportunity.action}
                  </p>                </div>                </div>



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{opportunity.action}</p>
                <div className='text-right'>
                  <Badge variant='secondary' className='mb-1'>
                    {opportunity.points}
                  </Badge>
                  <p className='text-xs text-muted-foreground'>
                    {opportunity.action}
                  </p>
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
            <CardTitle className="flex items-center gap-2">"
            <CardTitle className="flex items-center gap-2">"
              <Gift className="h-5 w-5" />"

        <Card>
          <CardHeader>
=======
<<<<<<< HEAD
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
              <Gift className="h-5 w-5" />
            <CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className="flex items-center gap-2">
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              <Gift className="h-5 w-5" />
<CardTitle className='flex items-center gap-2'>
              <Gift className='h-5 w-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
              Available Rewards
            </CardTitle>
            <CardDescription>
              Redeem your points for these rewards
            </CardDescription>
          </CardHeader>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
          <CardContent className='space-y-4'>
            {upcomingRewards.map(reward => (
              <div
                key={reward.id}
                className='flex items-center justify-between p-3 rounded-lg border'
              >
                  <h4 className='font-medium'>{reward.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {reward.category}
                  </p>
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
                  </p>                </div>                </div>;
                <div className='text - right'>;
                  <Badge variant='secondary' className='mb - 1'>{opportunity.points}</Badge>;
                  <p className='text - xs text - muted - foreground'>{opportunity.action}</p>;
                </div>;
              </div>))}
          </CardContent>;
        </Card>;
        <Card>;
          <CardHeader>;
            <CardTitle className='flex items - center gap - 2'>;
              <Gift className='h - 5 w - 5' />              Available Rewards            <CardTitle className='flex items - center gap - 2'>;
              <Gift className='h - 5 w - 5' />;
              Available Rewards;
            </CardTitle>;
            <CardDescription>;
              Redeem your points for these rewards;
            </CardDescription>;
          </CardHeader>;
          <CardContent className='space - y-4'>;
            {upcoming_rewards.map (reward => (
              <div;
                key={reward.id}
                className='flex items - center justify - between p - 3 rounded - lg border';
              >;
                  <h4 className='font - medium'>{reward.title}</h4>;
                  <p className='text - sm text - muted - foreground'>;
                    {reward.category}
                  </p>;
                </div>;
                <div className='text - right space - y-1'>;
                  <Badge variant='outline' className='mb - 1'>;
                    {reward.cost} pts;
                  </Badge>;
                  {balance >= reward.cost ? (
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
        </div>;
        <p className='text-xl text-muted-foreground'>Points Available</p>;
        {!loading && balance === 0 && (;
          <p className='text-sm text-muted-foreground mt-2'>            You haven't earned any points yet. Complete the tasks below to start        </div>;
        <p className='text-xl text-muted-foreground'>Points Available</p>;
        {!loading && balance === 0 && (;
          <p className='text-sm text-muted-foreground mt-2'>;
            You haven't earned any points yet. Complete the tasks below to start;
            earning and redeem rewards.;
          </p>;
        )}
      </div>;

      <div className='grid md:grid-cols-2 gap-8 mb-12'>;
        <Card>;
          <CardHeader>;
            <CardTitle className='flex items-center gap-2'>;
              <TrendingUp className='h-5 w-5' />              Keep Earning      <div className='grid md:grid-cols-2 gap-8 mb-12'>;
        <Card>;
          <CardHeader>;
            <CardTitle className='flex items-center gap-2'>;
              <TrendingUp className='h-5 w-5' />;
            </CardTitle>;
            <CardDescription>;
              More ways to boost your point balance;
            </CardDescription>;
          </CardHeader>;
          <CardContent className='space-y-4'>;
            {earningOpportunities && earningOpportunities.map((opportunity, index) => (;
<CardContent className='space-y-4'>
            {upcomingRewards.map(reward => (
origin/cursor/automate-test-improve-and-merge-code-2533
              <div
                key={index}
                className='flex items-start gap-3 p-3 rounded-lg border'>;
                <div className='text-primary mt-1'>{opportunity && opportunity.icon}</div>;
                <div className='flex-1'>;
                  <h4 className='font-medium'>{opportunity && opportunity.title}</h4>;
                  <p className='text-sm text-muted-foreground'>;
                    {opportunity && opportunity.description}
                  </p>              <div key={index} className='flex items-start gap-3 p-3 rounded-lg border'>;
                <div className='text-primary mt-1'>{opportunity && opportunity.icon}</div>;
                <div className='flex-1'>;
                  <h4 className='font-medium'>{opportunity && opportunity.title}</h4>;
                  <p className='text-sm text-muted-foreground'>{opportunity && opportunity.description}</p>;
                </div>;
                <div className='text-right'>;
                  <Badge variant='secondary' className='mb-1'>;
                    {opportunity && opportunity.points}
                  </Badge>;
                  <p className='text-xs text-muted-foreground'>;
                    {opportunity && opportunity.action}
                  </p>                </div>                </div>;
                <div className='text-right'>;
                  <Badge variant='secondary' className='mb-1'>{opportunity && opportunity.points}</Badge>;
                  <p className='text-xs text-muted-foreground'>{opportunity && opportunity.action}</p>;
                </div>;
              </div>;
            ))}
          </CardContent>;
        </Card>;

        <Card>;
          <CardHeader>;
            <CardTitle className='flex items-center gap-2'>;
              <Gift className='h-5 w-5' />              Available Rewards            <CardTitle className='flex items-center gap-2'>;
              <Gift className='h-5 w-5' />;
              Available Rewards;
            </CardTitle>;
            <CardDescription>;
              Redeem your points for these rewards;
            </CardDescription>;
          </CardHeader>;
          <CardContent className='space-y-4'>;
            {upcomingRewards && upcomingRewards.map(reward => (;
              <div
                key={reward && reward.id}
                className='flex items-center justify-between p-3 rounded-lg border'>;
                  <h4 className='font-medium'>{reward && reward.title}</h4>;
                  <p className='text-sm text-muted-foreground'>;
                    {reward && reward.category}
                  </p>;
                </div>;
                <div className='text-right space-y-1'>;
                  <Badge variant='outline' className='mb-1'>;
                    {reward && reward.cost} pts;
                  </Badge>;
                  {balance >= reward && reward.cost ? (;
                    <Button
                      size='sm''
                      onClick={() => handleRedeem(reward)}
                      disabled={redeeming}
                    >                      {redeeming ? 'Processing...' : 'Redeem'}'
                    </Button>;
                  ) : (;
                    <p className='text-xs text-muted-foreground'>;
                      Need more points;
                    </p>                  )}
                    <p className='text-xs text-muted-foreground'>Need more points</p>;
                <div>;
                  <h4 className='font-medium'>{reward && reward.title}</h4>;
                  <p className='text-sm text-muted-foreground'>{reward && reward.category}</p>;
                </div>;
                <div className='text-right space-y-1'>;
                  <Badge variant='outline' className='mb-1'>{reward && reward.cost} pts</Badge>;
                  {balance >= reward && reward.cost ? (;
                    <Button size='sm' onClick={() => handleRedeem(reward)} disabled={redeeming}>;
                      {redeeming ? 'Processing...' : 'Redeem'}'
                    </Button>;
                  ) : (;
                    <p className='text-xs text-muted-foreground'>Need more points</p>;
          <CardContent className='space-y-4'>'
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className='flex items-center justify-between p-3 rounded-lg border'>'
                <div>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                  <h4 className="font-medium">{reward.title}</h4>"
                  <p className="text-sm text-muted-foreground">{reward.category}</p>"
=======
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>
<<<<<<< HEAD
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button
                      size='sm'
                      onClick={() => handleRedeem(reward)}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
                    <Button;
                      size='sm';
                      on_click={() => handle_redeem (reward)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      disabled={redeeming}
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                    >                      {redeeming ? 'Processing...' : 'Redeem'}'
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>'
=======
                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
                      Need more points
                    </p>                  )}
<<<<<<< HEAD

                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (

                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                    <p className="text-xs text-muted-foreground">Need more points</p>
                <div>
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.category}</p>
                </div>
                <div className="text-right space-y-1">
                  <Badge variant="outline" className="mb-1">{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
                  )}
                </div>
              </div>
                    <Button size="sm" onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Need more points</p>
                  )}
                </div>;
              </div>;
            ))}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
            ))}

          <CardTitle className="flex items-center gap-2">
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />            Points History          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
=======
                    <p className="text - xs text - muted - foreground">Need more points</p>;
                <div>;
                  <h4 className='font - medium'>{reward.title}</h4>;
                  <p className='text - sm text - muted - foreground'>{reward.category}</p>;
                </div>;
                <div className='text - right space - y-1'>;
                  <Badge variant='outline' className='mb - 1'>{reward.cost} pts</Badge>;
                  {balance >= reward.cost ? (
                    <Button size='sm' on_click={() => handle_redeem (reward)} disabled={redeeming}>;
                </div>
                <div className='text-right space-y-1'>'
                  <Badge variant='outline' className='mb-1'>{reward.cost} pts</Badge>'
                  {balance >= reward.cost ? (
                    <Button size='sm' onClick={() => handleRedeem(reward)} disabled={redeeming}>'
                      {redeeming ? 'Processing...' : 'Redeem'}'
            ))}
          <CardTitle className='flex items-center gap-2'>'
          <CardTitle className='flex items-center gap-2'>'
            <History className='h-5 w-5' />'
                      size='sm'
                      onClick={() => handleRedeem(reward)}
                      disabled={redeeming}
          <CardContent className='space-y-4'>
            {upcomingRewards.map((reward) => (
              <div key={reward.id} className='flex items-center justify-between p-3 rounded-lg border'>
                <div>
                  <h4 className='font-medium'>{reward.title}</h4>
                  <p className='text-sm text-muted-foreground'>{reward.category}</p>
                      disabled={redeeming}
                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>) : (
                    <p className='text - xs text - muted - foreground'>;
                      Need more points;
                    </p>                  )}
                </div>
                <div className='text-right space-y-1'>
                  <Badge variant='outline' className='mb-1'>{reward.cost} pts</Badge>
                  {balance >= reward.cost ? (
                    <Button size='sm' onClick={() => handleRedeem(reward)} disabled={redeeming}>
                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>Need more points</p>
                  )}
                </div>;
              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                    >                      {redeeming ? 'Processing...' : 'Redeem'}
                    </Button>
                  ) : (
                    <p className='text-xs text-muted-foreground'>
                      Need more points
                    </p>
                  )}
                </div>
              </div>
origin/cursor/automate-test-improve-and-merge-code-2533
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />
      <Card>
        <CardHeader>
            <History className='h-5 w-5' />
<CardTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
            Points History
          </CardTitle>
          <CardDescription>Your recent points activity</CardDescription>
        </CardHeader>
        <CardContent>
          {ledger.length === 0 ? (
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>"
=======
<<<<<<< HEAD
            <p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>
            <ScrollArea className='h-64'>
              <div className='space-y-2 mt-2'>
                      <p className="font-medium capitalize">{entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <p className="text-center py-8 text-muted-foreground">No points activity yet.</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
          ) : (
            <ScrollArea className='h-64'>'
              <div className='space-y-2 mt-2'>'
                {ledger.map(entry => (
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">"
                    <div>
=======
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>
<<<<<<< HEAD
                {ledger.map(entry => (
                  <div key={entry.id} className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className='font-medium capitalize'>
                        {entry.reason |'adjustment'}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        {formatDistanceToNow(new Date(entry.created_at), {
                          addSuffix: true
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
          </CardContent>;
        </Card>;
      </div>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <History className='h-5 w-5' />            Points History          <CardTitle className='flex items-center gap-2'>;
            <History className='h-5 w-5' />;
            Points History;
          </CardTitle>;
          <CardDescription>Your recent points activity</CardDescription>;
        </CardHeader>;
        <CardContent>;
          {ledger && ledger.length === 0 ? (;
            <p className='text-center py-8 text-muted-foreground'>;
              No points activity yet.;
            </p>;
            <ScrollArea className='h-64'>;
              <div className='space-y-2 mt-2'>;
                {ledger && ledger.map(entry => (;
                  <div
                    key={entry && entry.id}
                    className='flex items-center justify-between py-2 border-b'>;
                    <div>;
                      <p className='font-medium capitalize'>;
                        {entry && entry.reason || 'adjustment'}'
                      </p>;
                      <p className='text-xs text-muted-foreground'>;
                        {formatDistanceToNow(new Date(entry && entry.created_at), {;
                          addSuffix: true,;
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
                        })}
                      </p>
                    </div>
                    <Badge
                      variant='outline''
                      className={
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
                        entry.delta >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }                      variant="outline"
                      className = {entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts                    </Badge>
                  </div>
                      <p className="font-medium capitalize">{entry.reason || 'adjustment'}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
                        entry && entry.delta>= 0;
                          ? 'bg-green-100 text-green-800';
                          : 'bg-red-100 text-red-800';
                      }                      variant="outline";
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
                      className = {entry && entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}'
                    >;
                      {entry.delta >= 0 ? '+' : ''}'
            <p className='text-center py-8 text-muted-foreground'>No points activity yet.</p>
          ) : (
            <ScrollArea className='h-64'>
              <div className='space-y-2 mt-2'>
                {ledger.map(entry => (
                  <div key={entry.id} className='flex items-center justify-between py-2 border-b'>
                    <div>
                      <p className='font-medium capitalize'>{entry.reason || 'adjustment'}</p>
                      <p className='text-xs text-muted-foreground'>
                        {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge
                      variant='outline'
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                    >;
                      {entry.delta >= 0 ? '+' : ''}
                      {entry.delta} pts;
                    </Badge>;
                  </div>;
                ))}
              </div>;
            </ScrollArea>;
          )}
      <Card className='text-center'>'
        <CardContent className='pt-6'>'
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />'
          <h3 className='text-2xl font-bold mb-2'>Full Rewards System Coming Soon</h3>'
          <p className='text-muted-foreground mb-4'>'
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!'
          </p>
          <div className='flex gap-4 justify-center'>'
            <Button variant='outline' asChild>'
              <Link href='/marketplace' />Browse Marketplace</Link>'
            </Button>
            <Button variant='outline' asChild>'
              <Link href='/community' />Join Community</Link>'
        </CardContent>
      </Card>

<p className='text-center py-8 text-muted-foreground'>
              No points activity yet.
            </p>
            <ScrollArea className='h-64'>
              <div className='space-y-2 mt-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
                {ledger.map(entry => (
                  <div key={entry.id} className='flex items-center justify-between py-2 border-b'>
                    <div>
                      variant='outline'
                      className={
                        entry.delta >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }                      variant='outline'
                      className = {entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
                    >
                      {entry.delta >= 0 ? '+' : ''}
                      {entry.delta} pts
                    </Badge>
                  </div>
                      variant='outline'
                      className={entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
=======
                      className = {entry && entry.delta >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
                    >;
                      {entry.delta >= 0 ? '+' : ''}
                      {entry.delta} pts;
                    </Badge>;
                  </div>;
<<<<<<< HEAD
                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>


      <Card className='text-center'>
        <CardContent className='pt-6'>
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />
          <h3 className='text-2xl font-bold mb-2'>
            Full Rewards System Coming Soon
          </h3>
          <p className='text-muted-foreground mb-4'>
            We're finalizing the redemption system. Keep earning points -
            they'll be ready to spend soon!
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ))}
              </div>
            </ScrollArea>
          )}
      <Card className='text-center'>
        <CardContent className='pt-6'>
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />
          <h3 className='text-2xl font-bold mb-2'>Full Rewards System Coming Soon</h3>
          <p className='text-muted-foreground mb-4'>
            We're finalizing the redemption system. Keep earning points - they'll be ready to spend soon!
<<<<<<< HEAD
=======



<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
        </CardContent>
      </Card>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
          </p>
            <Button variant="outline" asChild>
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>            <Button variant="outline" asChild>
ursor/fix-website-loading-errors-and-merge-6662
              <Link href="/community">Join Community</Link>
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>            <Button variant="outline" asChild>
            <Button variant="outline" asChild>
              <Link href="/community">Join Community</Link>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
            <Button variant="outline" asChild>
              <Link href="/community">Join Community</Link>


              <Link href='/community'>Join Community</Link>

<Card className='text-center'>
        <CardContent className='pt-6'>
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />
          <h3 className='text-2xl font-bold mb-2'>
            Full Rewards System Coming Soon
          </h3>
          <p className='text-muted-foreground mb-4'>
            We're finalizing the redemption system. Keep earning points -
            they'll be ready to spend soon!
          </p>
          <div className='flex gap-4 justify-center'>
            <Button variant='outline' asChild>
              <Link href='/marketplace'>Browse Marketplace</Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='/community'>Join Community</Link>
origin/cursor/automate-test-improve-and-merge-code-2533
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
        </CardContent>;
      </Card>;
      <Card className='text-center'>;
        <CardContent className='pt-6'>;
          <Star className='h-12 w-12 text-primary mx-auto mb-4' />;
          <h3 className='text-2xl font-bold mb-2'>;
            Full Rewards System Coming Soon;
          </h3>;
          <p className='text-muted-foreground mb-4'>;
            We're finalizing the redemption system. Keep earning points -;
            they'll be ready to spend soon!;
          </p>;
          <div className='flex gap-4 justify-center'>;
            <Button variant='outline' asChild>;
              <Link href='/marketplace' />Browse Marketplace</Link>          </p>;
          <div className='flex gap-4 justify-center'>;
            <Button variant='outline' asChild>;
              <Link href='/marketplace' />Browse Marketplace</Link>;
            </Button>;
            <Button variant='outline' asChild>;
              <Link href='/community' />Join Community</Link>            <Button variant='outline' asChild>;
              <Link href='/community' />Join Community</Link>;
            </Button>;
            <Button variant='outline' asChild>;
                    </Button>) : (
                    <p className='text - xs text - muted - foreground'>Need more points</p>)}'
                </div>;
              </div>))}
          </CardContent>;
        </Card>;
      </div>;
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <History className='h - 5 w - 5' />            Points History          <CardTitle className='flex items - center gap - 2'>;
            <History className='h - 5 w - 5' />;
            Points History;
          </CardTitle>;
          <CardDescription > Your recent points activity</CardDescription>;
        </CardHeader>;
        <CardContent>;
          {ledger.length === 0 ? (
            <p className='text - center py - 8 text - muted - foreground'>;
              No points activity yet.;
            </p>;
            <ScrollArea className='h - 64'>;
              <div className='space - y-2 mt - 2'>;
                {ledger.map (entry => (
                  <div;
                    key={entry.id}
                    className='flex items - center justify - between py - 2 border - b';
                  >;
                    <div>;
                      <p className='font - medium capitalize'>;
                        {entry.reason || 'adjustment'}'
                      </p>;
                      <p className='text - xs text - muted - foreground'>;
                        {formatDistanceToNow (new Date (entry.created_at), {
                          add_suffix: true,
                        })}
                      </p>;
                    </div>;
                    <Badge;
                      variant='outline';
                      className={
                        entry.delta >= 0;
                          ? 'bg - green - 100 text - green - 800';
                          : 'bg - red - 100 text - red - 800';
                      }                      variant='outline';
                      class_name = {entry.delta >= 0 ? 'bg - green - 100 text - green - 800' : 'bg - red - 100 text - red - 800', }'
                    >;
                      {entry.delta >= 0 ? '+' : ''}                      {entry.delta} pts                    </Badge>;
                  </div>))}
              </div>;
            </ScrollArea>)}
        </CardContent>;
      </Card>;
      <Card className='text - center'>;
        <CardContent className='pt - 6'>;
          <Star className='h - 12 w - 12 text - primary mx - auto mb - 4' />;
          <h3 className='text - 2xl font - bold mb - 2'>;
            Full Rewards System Coming Soon;
          </h3>;
          <p className='text - muted - foreground mb - 4'>;
            We're finalizing the redemption system. Keep earning points -;
            they'll be ready to spend soon!;
          </p>;
          <div className='flex gap - 4 justify - center'>;
            <Button variant='outline' as_child>;
              <Link href='/marketplace' />Browse Marketplace</Link>          </p>;
          <div className='flex gap - 4 justify - center'>;
            <Button variant='outline' as_child>;
              <Link href='/marketplace' />Browse Marketplace</Link>;
            </Button>;
            <Button variant='outline' as_child>;
              <Link href='/community' />Join Community</Link>            <Button variant='outline' as_child>;
              <Link href='/community' />Join Community</Link>;
            </Button>;
            <Button variant='outline' as_child>;
              <Link href='/community' />Join Community</Link>            </Button>;
          </div>;
        </CardContent>;
      </Card>;
              <Link href='/community'>Join Community</Link>            </Button>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
  );
}
    </div>);
}
;
  )
}
<<<<<<< HEAD:src-disabled/pages.disabled/Points.tsx
;))))))))))))]
  )
}
;

;
  )
}
;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
  );
}
;
  )
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/Points.tsx
