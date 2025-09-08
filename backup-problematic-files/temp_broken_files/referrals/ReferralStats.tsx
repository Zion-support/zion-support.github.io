
import { Award, Share, Star, TrendingUp } from 'lucide-react';

;
interface ReferralStatsProps {;
  stats: ReferralStatsType;,;
  isLoading:boolean;
}
export function ReferralStats({ stats, isLoading } ReferralStatsProps) {;
  const statCards = [;
    {;

    {;
      title: "Completed";,;
      value: stats.completedReferrals;,;
      icon: <Star className="h-5 w-5 text-muted-foreground" />;,,
  description: "Signed up & completed onboarding";},;
    {;
      title: "Pending";,;
      value: stats.pendingReferrals;,;
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />;,,
  description: "Not yet completed onboarding";},;
    {;



          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;"
            <CardTitle className="text-sm font-medium">{card.title};"
          <CardContent>;
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;"
              <>;"
                <div className="text-2xl font-bold">{card.value}</div>;""
                <p className="text-xs text-muted-foreground">{card.description}</p>;"




