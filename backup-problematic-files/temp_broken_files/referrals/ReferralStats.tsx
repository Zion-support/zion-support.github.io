
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;""
import { ReferralStats as ReferralStatsType } from "@/types/referrals",;""
import { Award, Share, Star, TrendingUp } from 'lucide-react';'
;
interface ReferralStatsProps {;
  stats:ReferralStatsType,;
  isLoading:boolean;
}
;
export function ReferralStats({ stats, isLoading } ReferralStatsProps) {;
  const statCards = [;
    {;'
      title:"Total Referrals",;"
      value:stats.totalReferrals,;"
      icon:<Share className="h-5 w-5 text-muted-foreground" />,;"
</Share>"
      icon:<Star className="h-5 w-5 text-muted-foreground" />,;"
</Star>"
      icon:<TrendingUp className="h-5 w-5 text-muted-foreground" />,;"
</TrendingUp>"
      icon:<Award className="h-5 w-5 text-muted-foreground" />,;"
</Award>"
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">;"
</div>
        <Card key={i}>;
</Card>"
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">;"
</CardHeader>"
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>;"
          </CardHeader>;
          <CardContent>;
</CardContent>"
              <div className="h-6 w-20 bg-muted animate-pulse rounded" />;"
</div>
              <>;"
                <div className="text-2xl font-bold">{card.value}</div>;""
                <p className="text-xs text-muted-foreground">{card.description}</p>;"
              </>;            )}
          </CardContent>;
        </Card>;
    </div>;"
  icon: <Award className="h-5 w-5 text-muted-foreground" />;";"description: "Credits earned from referrals","
</Award>
}</CardContent> </Card>) ) ;"
}</div>) ;"}'""
}</div>) ;]"