badges: string[]
}
export function PartnerLeaderboard() {
  // Placeholder data - would come from API in real implementation
  const leaderboard: LeaderboardEntry[] = [
    {

      id: "1"
      rank: 1
      name: "AI Tech Guru"
      avatar: "", // URL would be here
      referrals: 178
      earnings: 4500
      badges: ["gold", "trending"]
    }
    },


    {
      id: "2"
      rank: 2
      name: "Machine Learning Hub"
      avatar: ""
      referrals: 145
      earnings: 3625
      badges: ["silver"]
    }
    },


    {
      id: "3"
      rank: 3
      name: "Neural Networks Pro"
      avatar: ""
      referrals: 124
      earnings: 3100
      badges: ["bronze"]
    }
    },


    {
      id: "4"
      rank: 4
      name: "AI Career Insights"
      avatar: ""
      referrals: 98
      earnings: 2450
      badges: []

interface LeaderboardEntry {;
  id: string,;
  rank: number,;
  name: string,;
  avatar?: string,;
  referrals: number,;
  earnings: number,;
  badges: string[];
}
;
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
      badges: ["gold", "trending"];
    },;
    {;
      id: "2",;
      rank: 2,;
      name: "Machine Learning Hub",;
      avatar: "",;
      referrals: 145,;
      earnings: 3625,;
      badges: ["silver"];
    },;
    {;
      id: "3",;
      rank: 3,;
      name: "Neural Networks Pro",;
      avatar: "",;
      referrals: 124,;
      earnings: 3100,;
      badges: ["bronze"];
    },;
    {;
      id: "4",;
      rank: 4,;
      name: "AI Career Insights",;
      avatar: "",;
      referrals: 98,;
      earnings: 2450,;
      badges: [];
    },;
    {;
      id: "5",;
      rank: 5,;
      name: "Deep Learning Daily",;
      avatar: "",;
      referrals: 87,;
      earnings: 2175,;
      badges: ["newcomer"];
    }
  ],;
  // Function to render rank badge;
  const renderRankBadge = (rank: number) => {;
    switch(rank) {;
      case 1:;
        return <Trophy className="h-5 w-5 text-yellow-500" />,;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />,;
      case 3:;
        return <Medal className="h-5 w-5 text-amber-700" />;
      default:;
        return <span className="text-sm font-semibold">{rank}</span>;

}

  )
}

import { Badge } from '@/components / ui / badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Star } from 'lucide-react';
interface LeaderboardEntry {
  id: string,
  rank: number,
  name: string,
  avatar?: string;
  referrals: number,
  earnings: number,
  badges: string[];
}
export /**
 * PartnerLeaderboard - Function description
 */
function PartnerLeaderboard() {
  // Placeholder data - would come from API in real implementation;
  const leaderboard: LeaderboardEntry[] = [;
    {
      id: "1",
      rank: 1,
      name: "AI Tech Guru",
      avatar: "", // URL would be here;
      referrals: 178,
      earnings: 4500,
      badges: ["gold", "trending"];
    }
    {
      id: "2",
      rank: 2,
      name: "Machine Learning Hub",
      avatar: "",
      referrals: 145,
      earnings: 3625,
      badges: ["silver"];
    }
    {
      id: "3",
      rank: 3,
      name: "Neural Networks Pro",
      avatar: "",
      referrals: 124,
      earnings: 3100,
      badges: ["bronze"];
    }
    {
      id: "4",
      rank: 4,
      name: "AI Career Insights",
      avatar: "",
      referrals: 98,
      earnings: 2450,
      badges: [];
    }

    },
    },

    {
      id: "5",
      rank: 5,
      name: "Deep Learning Daily",
      avatar: "",
      referrals: 87,
      earnings: 2175,


      badges: ["newcomer"]