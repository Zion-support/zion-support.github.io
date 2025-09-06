<<<<<<< HEAD

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

=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
  BarChart
  DollarSign
  LineChart
  TrendingUp
  Users
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Star } from 'lucide-react'
<<<<<<< HEAD
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  const stats = {
    totalReferrals: 42
    pendingReferrals: 8
    completedReferrals: 34
    conversionRate: 18.5
    totalRevenue: 850.0
    pendingRevenue: 200.0

=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react'

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    totalRevenue: 850.0,
    pendingRevenue: 200.0,

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    totalRevenue: 850.00,
    pendingRevenue: 200.00
  },
  
<<<<<<< HEAD
>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
<<<<<<< HEAD


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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>             <p className="text-xs text-zion-slate-light">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <p className="text-xs text-zion-slate-light">
>>>>>>>               {stats.completedReferrals} completed, {stats.pendingReferrals} pending
            </p>
          </CardContent>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         <Card className="bg-zion-blue-dark border-zion-blue-light">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout        

=======
        <Card className='bg-zion-blue-dark border-zion-blue-light'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Earnings
            </CardTitle>
            <DollarSign className='h-4 w-4 text-green-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>${stats.totalRevenue}</div>
<<<<<<< HEAD
            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout
            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout        
        
<<<<<<< HEAD
>>>>>>> >>>>>>>         <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout        
=======
        
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>             </p>
          </CardContent>
        </Card>
      </div>
      {/* Performance Chart */}      {/* Performance Chart */}
>>>>>>>       <Card className="bg-zion-blue-dark border-zion-blue-light">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              ${stats.pendingRevenue} pending payout
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </p>
          </CardContent>
        </Card>
      </div>

<<<<<<< HEAD
=======
      
      {/* Performance Chart */}
<<<<<<< HEAD



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

        </CardHeader>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Recent Referrals */}
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            Track your referral performance over time
          </CardDescription>
<<<<<<< HEAD
>>>>>>>         </CardHeader>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      
      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>
          <Button variant="outline" size="sm">View All</Button>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light mb-4">No referrals yet</p>
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards
<<<<<<< HEAD
<<<<<<< HEAD
=======
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
      {/* Recent Referrals */}
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
        <CardHeader className='flex flex-row items-center justify-between'>          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>          </div>
        </CardContent>
      </Card>
      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>
          <Button variant='outline' size='sm'>
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className='text-center p-12 border border-dashed border-zion-blue-light rounded-lg'>
            <Users className='h-16 w-16 mx-auto text-zion-slate-light mb-4' />
            <p className='text-zion-slate-light mb-4'>No referrals yet</p>
            <p className='text-xs text-zion-slate-light'>              Start sharing your referral links to earn rewards          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light mb-4">No referrals yet</p>
            <p className="text-xs text-zion-slate-light">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </p>
          </div>
        </CardContent>
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      </Card>;
    </div>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </CardHeader>;
          <CardContent>;
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>;
            <p className="text-xs text-zion-slate-light">;
              {stats.completedReferrals} completed, {stats.pendingReferrals} pending;
            </p>;
          </CardContent>;
        </Card>;
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>;
            <TrendingUp className="h-4 w-4 text-zion-purple" />;
          </CardHeader>;
          <CardContent>;
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>;
            <p className="text-xs text-zion-slate-light">;
              Of clicks that convert to sign-ups;
            </p>;
          </CardContent>;
        </Card>;
        <Card className="bg-zion-blue-dark border-zion-blue-light">;
          <CardHeader className="flex flex-row items-center justify-between pb-2">;
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>;
            <DollarSign className="h-4 w-4 text-green-500" />;
          </CardHeader>;
          <CardContent>;
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>;
            <p className="text-xs text-zion-slate-light">;
              ${stats.pendingRevenue} pending payout;
            </p>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Performance Chart */}
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
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader className="flex flex-row items-center justify-between">;
          <div>;
            <CardTitle>Recent Referrals</CardTitle>;
            <CardDescription>Your latest partner referrals</CardDescription>;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
          <Button variant="outline" size="sm">View All</Button>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD

          <div className='text - center p - 12 border border - dashed border - zion - blue - light rounded - lg'>;
            <Users className='h - 16 w - 16 mx - auto text - zion - slate - light mb - 4' />;
            <p className='text - zion - slate - light mb - 4'>No referrals yet</p>;
            <p className='text - xs text - zion - slate - light'>              Start sharing your referral links to earn rewards          <div className="text - center p - 12 border border - dashed border - zion - blue - light rounded - lg">;
            <Users className="h - 16 w - 16 mx - auto text - zion - slate - light mb - 4" />;
            <p className="text - zion - slate - light mb - 4">No referrals yet</p>;
            <p className="text - xs text - zion - slate - light">;

=======
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">;
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />;
            <p className="text-zion-slate-light mb-4">No referrals yet</p>;
            <p className="text-xs text-zion-slate-light">;
              Start sharing your referral links to earn rewards;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </p>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD

=======
    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
