<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Star } from 'lucide-react'
interface LeaderboardEntry {
  id: string,
  rank: number,
  name: string,
  avatar?: string
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
=======
interface LeaderboardEntry {

  id: string
  rank: number
  name: string
  avatar?: string
  referrals: number
  earnings: number

=======
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Crown, Medal, Trophy } from 'lucide-react'

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  referrals: number,
  earnings: number,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


    },
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    {
      id: "2"
      rank: 2
      name: "Machine Learning Hub"
      avatar: ""
      referrals: 145
      earnings: 3625
      badges: ["silver"]


    },
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    {
      id: "3"
      rank: 3
      name: "Neural Networks Pro"
      avatar: ""
      referrals: 124
      earnings: 3100
      badges: ["bronze"]


    },
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    {
      id: "4"
      rank: 4
      name: "AI Career Insights"
      avatar: ""
      referrals: 98
      earnings: 2450
      badges: []
<<<<<<< HEAD

=======
<<<<<<< HEAD
    }
<<<<<<< HEAD
    {
      id: "5"
      rank: 5
      name: "Deep Learning Daily"
      avatar: ""
      referrals: 87
      earnings: 2175

      badges: ["newcomer"]
    }
  ]
  // Function to render rank badge

  const renderRankBadge = (rank: number,) => {
    switch(rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />
      default:
        return <span className="text-sm font-semibold">{rank}</span>
}

  )
}
=======
    },
=======
=======
    },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    {
      id: "5",
      rank: 5,
      name: "Deep Learning Daily",
      avatar: "",
      referrals: 87,
      earnings: 2175,
      badges: ["newcomer"]
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  ]
  // Function to render rank badge
  const renderRankBadge = (rank: number,) => {
    switch(rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />,
      default:
        return <span className="text-sm font-semibold">{rank}</span>;
};
  );
};
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Crown, Medal, Trophy } from 'lucide-react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface LeaderboardEntry {;
  id: string,;
  rank: number,;
  name: string,;
  avatar?: string;
  referrals: number,;
  earnings: number,;
  badges: string[];
}

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
    };
    {;
      id: "2",;
      rank: 2,;
      name: "Machine Learning Hub",;
      avatar: "",;
      referrals: 145,;
      earnings: 3625,;
      badges: ["silver"];
    };
    {;
      id: "3",;
      rank: 3,;
      name: "Neural Networks Pro",;
      avatar: "",;
      referrals: 124,;
      earnings: 3100,;
      badges: ["bronze"];
    };
    {;
      id: "4",;
      rank: 4,;
      name: "AI Career Insights",;
      avatar: "",;
      referrals: 98,;
      earnings: 2450,;
      badges: [];
    };
    {;
      id: "5",;
      rank: 5,;
      name: "Deep Learning Daily",;
      avatar: "",;
      referrals: 87,;
      earnings: 2175,;
      badges: ["newcomer"];
    }
  ];

  // Function to render rank badge;
  const renderRankBadge = (rank: number,) => {;
    switch(rank) {;
      case 1:;
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:;
        return <Medal className="h-5 w-5 text-amber-700" />,;
      default:;
        return <span className="text-sm font-semibold">{rank}</span>;

}

  )
}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
=======

    },
=======
=======
    },

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    {
      id: "5",
      rank: 5,
      name: "Deep Learning Daily",
      avatar: "",
      referrals: 87,
      earnings: 2175,


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      badges: ["newcomer"]


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
