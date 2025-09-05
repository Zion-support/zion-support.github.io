
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",;
;
export function PartnerDashboard() {;
  // Placeholder data - would come from API in real implementation;
  const stats = {;
    totalReferrals:42,;
    pendingReferrals:8,;
    completedReferrals:34,;
    conversionRate:18.5,;
    totalRevenue:850.00,;
    pendingRevenue:200.00;
  },;
  ;
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
        ;
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
        ;
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
      ;
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
      ;
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
  ),;
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",
export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
    totalRevenue: 850.00,
    pendingRevenue: 200.00
  },
  
  return (
    <div className=&quot;space-y-6&quot;>
      {/* Stats Overview */}
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
        <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
          <CardHeader className=&quot;flex flex-row items-center justify-between pb-2&quot;>
            <CardTitle className=&quot;text-sm font-medium&quot;>Total Referrals</CardTitle>
            <Users className=&quot;h-4 w-4 text-zion-cyan&quot; />
          </CardHeader>
          <CardContent>
            <div className=&quot;text-2xl font-bold&quot;>{stats.totalReferrals}</div>
            <p className=&quot;text-xs text-zion-slate-light&quot;>
              {stats.completedReferrals} completed, {stats.pendingReferrals} pending

export function PartnerDashboard() {_// Placeholder data - would come from API in real implementation
  const _stats = {
    totalReferrals: 42, _pendingReferrals: 8, _completedReferrals: 34, _conversionRate: 18.5, _totalRevenue: 850.00, _pendingRevenue: 200.00};
  
  return (
    <div className="space-y-6">
      {_/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{_stats.totalReferrals}</div>
            <p className="text-xs text-zion-slate-light">
              {_stats.completedReferrals} completed, {_stats.pendingReferrals} pending
            </p>
          </CardContent>
        </Card>
        
        <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
          <CardHeader className=&quot;flex flex-row items-center justify-between pb-2&quot;>
            <CardTitle className=&quot;text-sm font-medium&quot;>Conversion Rate</CardTitle>
            <TrendingUp className=&quot;h-4 w-4 text-zion-purple&quot; />
          </CardHeader>
          <CardContent>
            <div className=&quot;text-2xl font-bold&quot;>{stats.conversionRate}%</div>
            <p className=&quot;text-xs text-zion-slate-light&quot;>              Of clicks that convert to sign-ups
            </p>
          </CardContent>
        </Card>
        
        <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
          <CardHeader className=&quot;flex flex-row items-center justify-between pb-2&quot;>
            <CardTitle className=&quot;text-sm font-medium&quot;>Total Earnings</CardTitle>
            <DollarSign className=&quot;h-4 w-4 text-green-500&quot; />
          </CardHeader>
          <CardContent>
            <div className=&quot;text-2xl font-bold&quot;>${stats.totalRevenue}</div>
            <p className=&quot;text-xs text-zion-slate-light&quot;>
              ${stats.pendingRevenue} pending payout            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Performance Chart */}
      <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Track your referral performance over time</CardDescription>
        </CardHeader>
        <CardContent className=&quot;flex justify-center items-center p-6&quot;>
          <div className=&quot;text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full&quot;>
            <LineChart className=&quot;h-16 w-16 mx-auto text-zion-slate-light mb-4&quot; />
            <p className=&quot;text-zion-slate-light&quot;>Detailed analytics will be available soon</p>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Referrals */}
      <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
        <CardHeader className=&quot;flex flex-row items-center justify-between&quot;>          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>
          <Button variant=&quot;outline&quot; size=&quot;sm&quot;>View All</Button>
        </CardHeader>
        <CardContent>
          <div className=&quot;text-center p-12 border border-dashed border-zion-blue-light rounded-lg&quot;>
            <Users className=&quot;h-16 w-16 mx-auto text-zion-slate-light mb-4&quot; />
            <p className=&quot;text-zion-slate-light mb-4&quot;>No referrals yet</p>
            <p className=&quot;text-xs text-zion-slate-light&quot;>
              Start sharing your referral links to earn rewards
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
