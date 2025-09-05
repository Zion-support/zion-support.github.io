
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Crown, Medal, Trophy } from "lucide-react",
interface LeaderboardEntry {
  id: string,
  rank: number,
  name: string,
  avatar?: string,
  referrals: number,
  earnings: number,
  badges: string[]
}

interface LeaderboardEntry {_id: string;
  rank: number;
  name: string;
  avatar?: string;
  referrals: number;
  earnings: number;
  badges: string[];}

export function PartnerLeaderboard() {_// Placeholder data - would come from API in real implementation
  const leaderboard: LeaderboardEntry[] = [
    {
      id: &quot;1&quot;,
      rank: 1,
      name: &quot;AI Tech Guru&quot;,
      avatar: "&quot;, // URL would be here
      referrals: 178,
      earnings: 4500,
      badges: [&quot;gold&quot;, &quot;trending&quot;]
    },
    {
      id: &quot;2&quot;,
      rank: 2,
      name: &quot;Machine Learning Hub&quot;,
      avatar: "&quot;,
      referrals: 145,
      earnings: 3625,
      badges: [&quot;silver&quot;]
    },
    {
      id: &quot;3&quot;,
      rank: 3,
      name: &quot;Neural Networks Pro&quot;,
      avatar: "&quot;,
      referrals: 124,
      earnings: 3100,
      badges: [&quot;bronze&quot;]
    },
    {
      id: &quot;4&quot;,
      rank: 4,
      name: &quot;AI Career Insights&quot;,
      avatar: "&quot;,
      referrals: 98,
      earnings: 2450,
      badges: []
    },
    {
      id: &quot;5&quot;,
      rank: 5,
      name: &quot;Deep Learning Daily&quot;,
      avatar: "&quot;,
      referrals: 87,
      earnings: 2175,
      badges: [&quot;newcomer"]
    }
  ],  
  // Function to render rank badge
  const _renderRankBadge = (_rank: number) => {_switch(rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />,
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />,
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />,
      default:
        return <span className="text-sm font-semibold">{rank}</span>
    }
  },
  
  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-yellow-500" />
            Top Partners
          </CardTitle>
          <CardDescription>This month's top-performing partners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {_leaderboard.length > 0 ? (
              leaderboard.map(entry => (
                <div 
                  key={entry.id} 
                  className={_`flex items-center justify-between p-3 rounded-md ${
                    entry.rank === 1 ? 'bg-yellow-500/10 border border-yellow-500/30' : 
                    entry.rank <= 3 ? 'bg-zion-blue-light/20' : 'bg-zion-blue/10'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zion-blue-light">
                      {_renderRankBadge(entry.rank)}
                    </div>
                    <Avatar className="h-10 w-10 border border-zion-blue-light">
                      <AvatarImage src={_entry.avatar} />
                      <AvatarFallback className="bg-zion-blue text-zion-cyan">
                        {_entry.name.substring(0, _2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-white">{_entry.name}</div>
                      <div className="text-xs text-zion-slate-light">{_entry.referrals} referrals</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="font-semibold text-white">${_entry.earnings}</div>
                      <div className="text-xs text-zion-slate-light">earned</div>
                    </div>
                    <div className="flex gap-1&quot;>
                      {entry.badges.includes(&quot;gold&quot;) && (
                        <Badge variant=&quot;outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400&quot;>
                          Elite
                        </Badge>
                      )}
                      {entry.badges.includes(&quot;trending&quot;) && (
                        <Badge variant=&quot;outline" className="bg-blue-500/20 border-blue-500 text-blue-400">                          Trending
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
                <Trophy className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
                <p className="text-zion-slate-light mb-2">Leaderboard will appear here</p>
                <p className="text-xs text-zion-slate-light">
                  Start referring to earn your spot on the leaderboard
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Your Ranking</CardTitle>
          <CardDescription>How you compare to other partners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <p className="text-zion-slate-light mb-4&quot;>
              Start referring to appear on the leaderboard
            </p>
            <Badge variant=&quot;outline" className="bg-zion-purple/20 border-zion-purple text-zion-purple">
              New Partner
            </Badge>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Rewards Program</CardTitle>
          <CardDescription>Exclusive perks for top partners</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-zion-blue rounded-md">
            <div className="flex items-center gap-2 mb-2&quot;>
              <Badge variant=&quot;outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400">
                Elite Partner
              </Badge>
              <span className="text-xs text-zion-slate-light">(Top 3)</span>
            </div>
            <ul className="list-disc list-inside text-sm text-zion-slate-light space-y-1">
              <li>Increased commission rate (35%)</li>
              <li>Featured on Zion AI home page</li>
              <li>Early access to new Zion AI features</li>
              <li>Monthly strategy call with Zion AI team</li>
            </ul>
          </div>
          
          <div className="p-4 bg-zion-blue rounded-md">
            <div className="flex items-center gap-2 mb-2&quot;>
              <Badge variant=&quot;outline" className="bg-gray-400/20 border-gray-400 text-gray-300">
                Premier Partner
              </Badge>
              <span className="text-xs text-zion-slate-light">(Top 10)</span>
            </div>
            <ul className="list-disc list-inside text-sm text-zion-slate-light space-y-1">
              <li>Increased commission rate (30%)</li>
              <li>Custom landing page for your referrals</li>
              <li>Co-marketing opportunities</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
