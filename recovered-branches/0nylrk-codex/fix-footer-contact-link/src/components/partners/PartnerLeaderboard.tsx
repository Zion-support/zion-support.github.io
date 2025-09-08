import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';

import { Crown, Medal, Trophy } from './lucide-react';
  badges: string[]
}
export function PartnerLeaderboard() {};
  // Placeholder data - would come from API in real implementation;
  const leaderboard: LeaderboardEntry[] = []
    {}
      id: "1"
    },
    {

    {}
"
      id: "3"
      rank: 3"
      name: "Neural Networks Pro""
      avatar: ""
      referrals: 124;
      earnings: 3100;
"
      badges: ["bronze"]

      badges: []

    }
  ];
  // Function to render rank badge

  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>"
          <CardTitle className="flex items-center gap-2">"
            <Crown className="h-5 w-5 text-yellow-500" />
            Top Partners;
          </CardTitle>'
          <CardDescription>This month's top-performing partners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboard.length > 0 ? (
              leaderboard.map(entry => (
                <div
                  key={entry.id}
                  className={`flex items-center justify-between p-3 rounded-md ${
                    entry.rank === 1 ? 'bg-yellow-500/10 border border-yellow-500/30' :
                    entry.rank <= 3 ? 'bg-zion-blue-light/20' : 'bg-zion-blue/10'
    },
    {
      id: "5",
      rank: 5,
      name: "Deep Learning Daily",
      avatar: "",
      referrals: 87,
      earnings: 2175,
      badges: ["newcomer"]
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Crown, Medal, Trophy } from "lucide-react",;
export function PartnerLeaderboard() {;
  // Placeholder data - would come from API in real implementation;
  const leaderboard: LeaderboardEntry[] = [;
    {;
      id: "1",;
      rank: 1,;
      name: "AI Tech Guru",;
      avatar: "", // URL would be here;
      referrals: 178,;
      earnings: 4500,;
      badges: ["gold", "trending"]
};    };
    {;

      id: "2",;
      rank: 2,;"
      name: "Machine Learning Hub",;"
      avatar: "",;
      referrals: 145,;

      earnings: 3625,;
      badges: ["silver"]
};    };
    {;
      id: "3",;
      rank: 3,;"
      name: "Neural Networks Pro",;"
      avatar: "",;
      referrals: 124,;

      earnings: 3100,;
      badges: ["bronze"]
};    };
    {;
      id: "4",;
      rank: 4,;"
      name: "AI Career Insights",;"
      avatar: "",;
      referrals: 98,;
      earnings: 2450,;
      badges: []
};    };
    {;
      id: "5",;
      rank: 5,;"
      name: "Deep Learning Daily",;"
      avatar: "",;
      referrals: 87,;
      earnings: 2175,;"
      badges: ["newcomer"];

    }
  ];                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zion-blue-light">
                      {renderRankBadge(entry.rank)}
                    </div>
                    <Avatar className="h-10 w-10 border border-zion-blue-light">
                      <AvatarImage src={entry.avatar} />
                      <AvatarFallback className="bg-zion-blue text-zion-cyan">
                        {entry.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-white">{entry.name}</div>
                      <div className="text-xs text-zion-slate-light">{entry.referrals} referrals</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="font-semibold text-white">${entry.earnings}</div>
                      <div className="text-xs text-zion-slate-light">earned</div>
                    </div>
                    <div className="flex gap-1">
                      {entry.badges.includes("gold") && (
                        <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400">
                          Elite
                        </Badge>            )}
          </div>
        </CardContent>
      </Card>

