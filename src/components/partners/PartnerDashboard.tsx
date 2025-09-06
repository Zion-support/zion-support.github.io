
<<<<<<< HEAD
=======
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

>>>>>>> import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';






import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react'

<<<<<<< HEAD
=======
xport function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
    totalRevenue: 850.0,
    pendingRevenue: 200.0,

    totalRevenue: 850.00,
    pendingRevenue: 200.00
  },
  
>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className='space-y-6'>;
      {/* Stats Overview */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
<<<<<<< HEAD

    totalRevenue: 850.00,
    pendingRevenue: 200.00
  },
=======
    totalRevenue: 850.00,
    pendingRevenue: 200.00
  };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (
>>>>>>>     <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
          <CardContent>
<<<<<<< HEAD

=======
            <div className='text-2xl font-bold'>{stats.totalReferrals}</div>
            <p className='text-xs text-zion-slate-light'>
              {stats.completedReferrals} completed, {stats.pendingReferrals}{' '}
              pending
            </p>
          </CardContent>
        </Card>
        <Card className='bg-zion-blue-dark border-zion-blue-light'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Conversion Rate
            </CardTitle>
            <TrendingUp className='h-4 w-4 text-zion-purple' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{stats.conversionRate}%</div>
            <p className='text-xs text-zion-slate-light'>              Of clicks that convert to sign-ups
            </p>
          </CardContent>
        </Card>            <div className="text-2xl font-bold">{stats.totalReferrals}</div>
>>>>>>>             <p className="text-xs text-zion-slate-light">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <p className="text-xs text-zion-slate-light">
>>>>>>>               {stats.completedReferrals} completed, {stats.pendingReferrals} pending
            </p>
          </CardContent>
        </Card>
<<<<<<< HEAD

=======
>>>>>>>         <Card className="bg-zion-blue-dark border-zion-blue-light">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>>           <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-zion-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
            <p className="text-xs text-zion-slate-light">
              Of clicks that convert to sign-ups
            </p>
          </CardContent>
        </Card>
<<<<<<< HEAD

            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout        

=======
            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout
            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout        
        
>>>>>>> >>>>>>>         <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>>           <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>
            <p className="text-xs text-zion-slate-light">
<<<<<<< HEAD

=======
>>>>>>>             </p>
          </CardContent>
        </Card>
      </div>
      {/* Performance Chart */}      {/* Performance Chart */}
>>>>>>>       <Card className="bg-zion-blue-dark border-zion-blue-light">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </p>
          </CardContent>
        </Card>
      </div>

<<<<<<< HEAD
=======
      
      {/* Performance Chart */}



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>>         <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Track your referral performance over time</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center p-6">
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light">Detailed analytics will be available soon</p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD

        </CardHeader>
=======
      {/* Recent Referrals */}
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            Track your referral performance over time
          </CardDescription>
>>>>>>>         </CardHeader>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light mb-4">No referrals yet</p>
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards
<<<<<<< HEAD
            </p>
          </div>
        </CardContent>
      </Card>

=======
ursor/fix-website-loading-errors-and-merge-6662
        </CardHeader>
        <CardContent className='flex justify-center items-center p-6'>
          <div className='text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full'>
            <LineChart className='h-16 w-16 mx-auto text-zion-slate-light mb-4' />
            <p className='text-zion-slate-light'>
              Detailed analytics will be available soon
>>>>>>>             </p>
          </div>
        </CardContent>
      </Card>
      </Card>
    </div>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </div>
  )
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react';
export function PartnerDashboard() {;
  // Placeholder data - would come from API in real implementation;
  const stats = {;
    totalReferrals: 42,;
    pendingReferrals: 8,;
    completedReferrals: 34,;
    conversionRate: 18.5,;
    totalRevenue: 850.00;
    pendingRevenue: 200.00;
  };
  return (;
    <div className="space-y-6">;
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>;
            <Users className="h-4 w-4 text-zion-cyan" />;

          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold'>{stats && stats.totalReferrals}</div>;
            <p className='text-xs text-zion-slate-light'>;
              {stats && stats.completedReferrals} completed, {stats && stats.pendingReferrals}{' '}
              pending;
            </p>;
          </CardContent>;
        </Card>;

        <Card className='bg-zion-blue-dark border-zion-blue-light'>;
          <CardHeader className='flex flex-row items-center justify-between pb-2'>;
            <CardTitle className='text-sm font-medium'>;
              Conversion Rate;
            </CardTitle>;
            <TrendingUp className='h-4 w-4 text-zion-purple' />;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold'>{stats && stats.conversionRate}%</div>;
            <p className='text-xs text-zion-slate-light'>              Of clicks that convert to sign-ups;
            </p>;
          </CardContent>;
        </Card>            <div className="text-2xl font-bold">{stats && stats.totalReferrals}</div>;
            <p className="text-xs text-zion-slate-light">;
              {stats && stats.completedReferrals} completed, {stats && stats.pendingReferrals} pending;
            </p>;
          </CardContent>;
        </Card>;

        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>;
            <TrendingUp className="h-4 w-4 text-zion-purple" />;
          </CardHeader>;
          <CardContent>;
            <div className="text-2xl font-bold">{stats && stats.conversionRate}%</div>;
            <p className="text-xs text-zion-slate-light">;
              Of clicks that convert to sign-ups;
            </p>;
          </CardContent>;
        </Card>;

        <Card className='bg-zion-blue-dark border-zion-blue-light'>;
          <CardHeader className='flex flex-row items-center justify-between pb-2'>;
            <CardTitle className='text-sm font-medium'>;
              Total Earnings;
            </CardTitle>;
            <DollarSign className='h-4 w-4 text-green-500' />;
          </CardHeader>;
          <CardContent>;
            <div className='text-2xl font-bold'>${stats && stats.totalRevenue}</div>;
            <p className='text-xs text-zion-slate-light'>              ${stats && stats.pendingRevenue} pending payout        ;
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>;
            <DollarSign className="h-4 w-4 text-green-500" />;
          </CardHeader>;
          <CardContent>;
            <div className="text-2xl font-bold">${stats && stats.totalRevenue}</div>;
            <p className="text-xs text-zion-slate-light">;
            </p>;
          </CardContent>;
        </Card>;
      </div>;

      {/* Performance Chart */}      {/* Performance Chart */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Performance Overview</CardTitle>;
          <CardDescription>Track your referral performance over time</CardDescription>;
        </CardHeader>;
        <CardContent className="flex justify-center items-center p-6">;
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">;
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />;
            <p className="text-zion-slate-light">Detailed analytics will be available soon</p>;
          </div>;
        </CardContent>;
      </Card>;

      {/* Recent Referrals */}
      <Card className='bg-zion-blue-dark border-zion-blue-light'>;
        <CardHeader>;
          <CardTitle>Performance Overview</CardTitle>;
          <CardDescription>;
            Track your referral performance over time;
          </CardDescription>;
        </CardHeader>;
        <CardContent className='flex justify-center items-center p-6'>;
          <div className='text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full'>;
            <LineChart className='h-16 w-16 mx-auto text-zion-slate-light mb-4' />;
            <p className='text-zion-slate-light'>;
              Detailed analytics will be available soon;
            </p>;
          </div>;
        </CardContent>;
      </Card>;

      {/* Recent Referrals */}
      <Card className='bg-zion-blue-dark border-zion-blue-light'>;
        <CardHeader className='flex flex-row items-center justify-between'>          <div>;
            <CardTitle>Recent Referrals</CardTitle>;
            <CardDescription>Your latest partner referrals</CardDescription>;
          </div>          </div>;
        </CardContent>;
      </Card>;

      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader className="flex flex-row items-center justify-between">;
          <div>;
            <CardTitle>Recent Referrals</CardTitle>;
            <CardDescription>Your latest partner referrals</CardDescription>;
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
  BarChart,
  DollarSign,
  LineChart,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Star } from 'lucide-react';
export /**
 * PartnerDashboard - Function description
 */
function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation;
  const stats = {
    total_referrals: 42,
    pending_referrals: 8,
    completed_referrals: 34,
    conversion_rate: 18.5,
    total_revenue: 850.0,
    pending_revenue: 200.0,
  return (
    <div className='space - y-6'>;
      {/* Stats Overview */}
      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
        <Card className='bg - zion - blue - dark border - zion - blue - light'>;
          <CardHeader className='flex flex - row items - center justify - between pb - 2'>;
            <CardTitle className='text - sm font - medium'>;
              Total Referrals;
            </CardTitle>;
            <Users className='h - 4 w - 4 text - zion - cyan' />;
          </CardHeader>;
          <CardContent>;
            <div className='text - 2xl font - bold'>{stats.total_referrals}</div>;
            <p className='text - xs text - zion - slate - light'>;
              {stats.completed_referrals} completed, {stats.pending_referrals}{' '}
              pending;
            </p>;
          </CardContent>;
        </Card>;
        <Card className='bg - zion - blue - dark border - zion - blue - light'>;
          <CardHeader className='flex flex - row items - center justify - between pb - 2'>;
            <CardTitle className='text - sm font - medium'>;
              Conversion Rate;
            </CardTitle>;
            <TrendingUp className='h - 4 w - 4 text - zion - purple' />;
          </CardHeader>;
          <CardContent>;
            <div className='text - 2xl font - bold'>{stats.conversion_rate}%</div>;
            <p className='text - xs text - zion - slate - light'>              Of clicks that convert to sign - ups;
            </p>;
          </CardContent>;
        </Card>            <div className="text - 2xl font - bold">{stats.total_referrals}</div>;
            <p className="text - xs text - zion - slate - light">;
              {stats.completed_referrals} completed, {stats.pending_referrals} pending;
            </p>;
          </CardContent>;
        </Card>;
        <Card className="bg - zion - blue - dark border - zion - blue - light">;
          <CardHeader className="flex flex - row items - center justify - between pb - 2">;
            <CardTitle className="text - sm font - medium">Conversion Rate</CardTitle>;
            <TrendingUp className="h - 4 w - 4 text - zion - purple" />;
          </CardHeader>;
          <CardContent>;
            <div className="text - 2xl font - bold">{stats.conversion_rate}%</div>;
            <p className="text - xs text - zion - slate - light">;
              Of clicks that convert to sign - ups;
            </p>;
          </CardContent>;
        </Card>;
        <Card className='bg - zion - blue - dark border - zion - blue - light'>;
          <CardHeader className='flex flex - row items - center justify - between pb - 2'>;
            <CardTitle className='text - sm font - medium'>;
              Total Earnings;
            </CardTitle>;
            <DollarSign className='h - 4 w - 4 text - green - 500' />;
          </CardHeader>;
          <CardContent>;
            <div className='text - 2xl font - bold'>${stats.total_revenue}</div>;
            <p className='text - xs text - zion - slate - light'>              ${stats.pending_revenue} pending payout;
        <Card className="bg - zion - blue - dark border - zion - blue - light">;
          <CardHeader className="flex flex - row items - center justify - between pb - 2">;
            <CardTitle className="text - sm font - medium">Total Earnings</CardTitle>;
            <DollarSign className="h - 4 w - 4 text - green - 500" />;
          </CardHeader>;
          <CardContent>;
            <div className="text - 2xl font - bold">${stats.total_revenue}</div>;
            <p className="text - xs text - zion - slate - light">;
            </p>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Performance Chart */}      {/* Performance Chart */}
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Performance Overview</CardTitle>;
          <CardDescription > Track your referral performance over time</CardDescription>;
        </CardHeader>;
        <CardContent className="flex justify - center items - center p - 6">;
          <div className="text - center p - 12 border border - dashed border - zion - blue - light rounded - lg w - full">;
            <LineChart className="h - 16 w - 16 mx - auto text - zion - slate - light mb - 4" />;
            <p className="text - zion - slate - light">Detailed analytics will be available soon</p>;
          </div>;
        </CardContent>;
      </Card>;
      {/* Recent Referrals */}
      <Card className='bg - zion - blue - dark border - zion - blue - light'>;
        <CardHeader>;
          <CardTitle > Performance Overview</CardTitle>;
          <CardDescription>;
            Track your referral performance over time;
          </CardDescription>;
        </CardHeader>;
        <CardContent className='flex justify - center items - center p - 6'>;
          <div className='text - center p - 12 border border - dashed border - zion - blue - light rounded - lg w - full'>;
            <LineChart className='h - 16 w - 16 mx - auto text - zion - slate - light mb - 4' />;
            <p className='text - zion - slate - light'>;
              Detailed analytics will be available soon;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
      {/* Recent Referrals */}
      <Card className='bg - zion - blue - dark border - zion - blue - light'>;
        <CardHeader className='flex flex - row items - center justify - between'>          <div>;
            <CardTitle > Recent Referrals</CardTitle>;
            <CardDescription > Your latest partner referrals</CardDescription>;
          </div>          </div>;
        </CardContent>;
      </Card>;
      {/* Recent Referrals */}
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader className="flex flex - row items - center justify - between">;
          <div>;
            <CardTitle > Recent Referrals</CardTitle>;
            <CardDescription > Your latest partner referrals</CardDescription>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          </div>;
          <Button variant='outline' size='sm'>;
            View All;
          </Button>;
        </CardHeader>;
        <CardContent>;

          <div className='text - center p - 12 border border - dashed border - zion - blue - light rounded - lg'>;
            <Users className='h - 16 w - 16 mx - auto text - zion - slate - light mb - 4' />;
            <p className='text - zion - slate - light mb - 4'>No referrals yet</p>;
            <p className='text - xs text - zion - slate - light'>              Start sharing your referral links to earn rewards          <div className="text - center p - 12 border border - dashed border - zion - blue - light rounded - lg">;
            <Users className="h - 16 w - 16 mx - auto text - zion - slate - light mb - 4" />;
            <p className="text - zion - slate - light mb - 4">No referrals yet</p>;
            <p className="text - xs text - zion - slate - light">;

            </p>;
          </div>;
        </CardContent>;
      </Card>;

  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
