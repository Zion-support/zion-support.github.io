<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {;
  BarChart,;
  DollarSign,;
  LineChart,;
  TrendingUp,;
  Users,;
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

<<<<<<< HEAD
  const stats = {
    totalReferrals: 42
    pendingReferrals: 8
    completedReferrals: 34
    conversionRate: 18.5
    totalRevenue: 850.0
    pendingRevenue: 200.0

<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx






>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    totalRevenue: 850.00,
    pendingRevenue: 200.00
  },
  
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
    totalRevenue: 850.00,
    pendingRevenue: 200.00
  },
  

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react'
  const stats = {
    totalReferrals: 42
    pendingReferrals: 8
    completedReferrals: 34
    conversionRate: 18.5
    totalRevenue: 850.0
    pendingRevenue: 200.0

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from 'lucide-react'






export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation

  return (
    <div className="space-y-6">"
      {/* Stats Overview */}
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
    totalRevenue: 850.00,
    pendingRevenue: 200.00
  };
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  return (
    <div className="space-y-6">"
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
        <Card className="bg-zion-blue-dark border-zion-blue-light">"
          <CardHeader className="flex flex-row items-center justify-between pb-2">"
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>"
            <Users className="h-4 w-4 text-zion-cyan" />"
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>"
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>"
            <p className="text-xs text-zion-slate-light">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
          <CardContent>
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx

            <div className="text-2xl font-bold">{stats.totalReferrals}</div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
            <p className="text-xs text-zion-slate-light">
              {stats.completedReferrals} completed, {stats.pendingReferrals} pending
            </p>
          </CardContent>
        </Card>

<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD

        
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-zion-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
            <p className="text-xs text-zion-slate-light">
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
            <p className='text-xs text-zion-slate-light'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Of clicks that convert to sign-ups
            </p>
          </CardContent>
        </Card>

<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

        


        

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
            <p className='text-xs text-zion-slate-light'>              ${stats.pendingRevenue} pending payout        
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>
            <p className="text-xs text-zion-slate-light">
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx

<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
              ${stats.pendingRevenue} pending payout
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



              ${stats.pendingRevenue} pending payout



<Card className='bg-zion-blue-dark border-zion-blue-light'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Earnings
            </CardTitle>
            <DollarSign className='h-4 w-4 text-green-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>${stats.totalRevenue}</div>
            <p className='text-xs text-zion-slate-light'>
              ${stats.pendingRevenue} pending payout
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
            </p>
          </CardContent>
        </Card>
      </div>
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
      
      {/* Performance Chart */}
=======

<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
=======
      {/* Performance Chart */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">"



      {/* Performance Chart */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Track your referral performance over time</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center p-6">"
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">"
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />"
            <p className="text-zion-slate-light">Detailed analytics will be available soon</p>"
          </div>
      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">"
        <CardHeader className="flex flex-row items-center justify-between">"
        <CardContent className="flex justify-center items-center p-6">
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light">Detailed analytics will be available soon</p>
          </div>
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        </CardContent>
      </Card>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx

<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
      {/* Recent Referrals */}
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
=======
      {/* Recent Referrals */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>
          <Button variant="outline" size="sm">View All</Button>"
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">"
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />"
            <p className="text-zion-slate-light mb-4">No referrals yet</p>"
            <p className="text-xs text-zion-slate-light">"
          <Button variant="outline" size="sm">View All</Button>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

{/* Performance Chart */}
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            Track your referral performance over time
          </CardDescription>
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light mb-4">No referrals yet</p>
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards
            </p>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
          </div>;
          <Button variant="outline" size="sm">View All</Button>;
        </CardHeader>;
        <CardContent>;
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">;
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />;
            <p className="text-zion-slate-light mb-4">No referrals yet</p>;
            <p className="text-xs text-zion-slate-light">;
              Start sharing your referral links to earn rewards;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
        </CardContent>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      </Card>
      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">"
        <CardHeader className="flex flex-row items-center justify-between">"
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader className="flex flex-row items-center justify-between">
      {/* Recent Referrals */}
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
        <CardHeader className='flex flex-row items-center justify-between'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Button variant="outline" size="sm">View All</Button>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader className="flex flex-row items-center justify-between">;
          <div>;
            <CardTitle>Recent Referrals</CardTitle>;
            <CardDescription>Your latest partner referrals</CardDescription>;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx

          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">"
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />"
            <p className="text-zion-slate-light mb-4">No referrals yet</p>"
            <p className="text-xs text-zion-slate-light">"
              Start sharing your referral links to earn rewards
            </p>
          </div>
        </CardContent>
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}}))
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader className="flex flex-row items-center justify-between">;
          <div>;
            <CardTitle>Recent Referrals</CardTitle>;
            <CardDescription>Your latest partner referrals</CardDescription>;
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx
=======
          </div>;
          <Button variant="outline" size="sm">View All</Button>;
        </CardHeader>;
        <CardContent>;
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">;
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />;
            <p className="text-zion-slate-light mb-4">No referrals yet</p>;
            <p className="text-xs text-zion-slate-light">;
              Start sharing your referral links to earn rewards;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
;
<<<<<<< HEAD:src_backup/components/partners/PartnerDashboard.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light mb-4">No referrals yet</p>
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards

            </p>
          </div>
        </CardContent>

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerDashboard.tsx
<Button variant='outline' size='sm'>
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className='text-center p-12 border border-dashed border-zion-blue-light rounded-lg'>
            <Users className='h-16 w-16 mx-auto text-zion-slate-light mb-4' />
            <p className='text-zion-slate-light mb-4'>No referrals yet</p>
            <p className='text-xs text-zion-slate-light'>
              Start sharing your referral links to earn rewards
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
<<<<<<< HEAD:src/components/partners/PartnerDashboard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerDashboard.tsx
