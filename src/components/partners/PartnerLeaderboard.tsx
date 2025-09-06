import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Star } from 'lucide-react'
interface LeaderboardEntry {
  id: string,
  rank: number,
  name: string,
  avatar?: string

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Crown, Medal, Trophy } from 'lucide-react'

interface LeaderboardEntry {

  id: string
  rank: number
  name: string
  avatar?: string
  referrals: number
  earnings: number



    },




    },




    },



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

      badges: ["newcomer"]
