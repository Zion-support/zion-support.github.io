<<<<<<< HEAD
interface LeaderboardEntry {

<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Crown, Medal, Trophy} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge";
import { Crown, Medal, Trophy } from "lucide-react";
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { Crown, Medal, Trophy } from './lucide-react';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LeaderboardEntry {

  id: string
  rank: number
  name: string
  avatar?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  referrals: number
  earnings: number

import { Badge } from "@/components/ui/badge",
import { Crown, Medal, Trophy } from "lucide-react",
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======

import { Badge } from "@/components/ui/badge",
import { Crown, Medal, Trophy } from "lucide-react",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LeaderboardEntry {
  id: string,
  rank: number,
  name: string,
  avatar?: string,
  referrals: number,
  earnings: number,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      referrals: 178,
      earnings: 4500,


<<<<<<< HEAD
      referrals: 178
      earnings: 4500

      referrals: 178,
      earnings: 4500,
      badges: ["gold", "trending"];
    };
      badges: ["gold", "trending"]
    }
    },
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      referrals: 178,
      earnings: 4500,


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {

      id: "2"
      rank: 2
      name: "Machine Learning Hub"
      avatar: ""
      referrals: 145
      earnings: 3625

      badges: ["silver"]
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {

      id: "3"
      rank: 3
      name: "Neural Networks Pro"
      avatar: ""
      referrals: 124
      earnings: 3100

      badges: ["bronze"]
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {

      id: "4"
      rank: 4
      name: "AI Career Insights"
      avatar: ""
      referrals: 98
      earnings: 2450

      badges: []
<<<<<<< HEAD



<<<<<<< HEAD
    }
    {

      id: "5"
      rank: 5
      name: "Deep Learning Daily"
      avatar: ""
      referrals: 87
      earnings: 2175

      badges: ["newcomer"]
    }
  ];
  // Function to render rank badge

  const renderRankBadge = (rank: number) => {
    switch(rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />
      default:
        return <span className="text-sm font-semibold">{rank}</span>
    }
  }

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    {




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Crown, Medal, Trophy} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LeaderboardEntry {;
  id: string,;
  rank: number,;
  name: string,;
<<<<<<< HEAD
<<<<<<< HEAD
  avatar?: string,;
=======
  avatar?: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  avatar?: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  referrals: number,;
  earnings: number,;
  badges: string[];
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "2",;
      rank: 2,;
      name: "Machine Learning Hub",;
      avatar: "",;
      referrals: 145,;
      earnings: 3625,;
      badges: ["silver"];
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "3",;
      rank: 3,;
      name: "Neural Networks Pro",;
      avatar: "",;
      referrals: 124,;
      earnings: 3100,;
      badges: ["bronze"];
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "4",;
      rank: 4,;
      name: "AI Career Insights",;
      avatar: "",;
      referrals: 98,;
      earnings: 2450,;
      badges: [];
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "5",;
      rank: 5,;
      name: "Deep Learning Daily",;
      avatar: "",;
      referrals: 87,;
      earnings: 2175,;
      badges: ["newcomer"];
    }
<<<<<<< HEAD
<<<<<<< HEAD
  ],;
=======
  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Function to render rank badge;
  const renderRankBadge = (rank: number) => {;
    switch(rank) {;
      case 1:;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />;
=======

        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    {
      id: "5",
      rank: 5,
      name: "Deep Learning Daily",
      avatar: "",
      referrals: 87,
      earnings: 2175,
      badges: ["newcomer"];
    }
  ];
;
  // Function to render rank badge;
  const renderRankBadge = (rank: number) =>: any {
    switch (rank) {
      case 1:;
        return <Trophy className="h - 5 w - 5 text - yellow - 500" />;
      case 2:;
        return <Medal className="h - 5 w - 5 text - gray - 400" />;
      case 3:;
        return <Medal className="h - 5 w - 5 text - amber - 700" />,
      default:;
        return <span className="text - sm font - semibold">{rank}</span>;
    }
  }
;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space - y-6">;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <Crown className="h - 5 w - 5 text - yellow - 500" />;
            Top Partners;
          </CardTitle>;
          <CardDescription > This month's top - performing partners</CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
        return <Trophy className="h-5 w-5 text-yellow-500" />,;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />,;
      case 3:;
        return <Medal className="h-5 w-5 text-amber-700" />;
      default:;
        return <span className="text-sm font-semibold">{rank}</span>;
    }
  };
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <Crown className="h-5 w-5 text-yellow-500" />;
            Top Partners;
          </CardTitle>;
          <CardDescription>This month's top-performing partners</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="space-y-4">;
            {leaderboard.length > 0 ? (;
              leaderboard.map(entry => (;
                <div;
                  key={entry.id} ;
                  className={`flex items-center justify-between p-3 rounded-md ${;
                    entry.rank === 1 ? 'bg-yellow-500/10 border border-yellow-500/30' :;
                    entry.rank <= 3 ? 'bg-zion-blue-light/20' : 'bg-zion-blue/10';
          <div className="space - y-4">;
            {leaderboard.length > 0 ? (
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <div className="space - y-4">;
            {leaderboard.length > 0 ? (


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }`}
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
                        </Badge>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case 3:;
        return <Medal className="h-5 w-5 text-amber-700" />,;
      default:;
        return <span className="text-sm font-semibold">{rank}</span>;
    }
  };
<<<<<<< HEAD
  return (

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Crown, Medal, Trophy } from "lucide-react",;
;
interface LeaderboardEntry {;
  id:string,;
  rank:number,;
  name:string,;
  avatar?:string,;
  referrals:number,;
  earnings:number,;
  badges:string[];
}
;
export function PartnerLeaderboard() {;
  // Placeholder data - would come from API in real implementation;
  const leaderboard:LeaderboardEntry[] = [;
    {;
      id:"1",;
      rank:1,;
      name:"AI Tech Guru",;
      avatar:"", // URL would be here;
      referrals:178,;
      earnings:4500,;
      badges:["gold", "trending"];
    },;
    {;
      id:"2",;
      rank:2,;
      name:"Machine Learning Hub",;
      avatar:"",;
      referrals:145,;
      earnings:3625,;
      badges:["silver"];
    },;
    {;
      id:"3",;
      rank:3,;
      name:"Neural Networks Pro",;
      avatar:"",;
      referrals:124,;
      earnings:3100,;
      badges:["bronze"];
    },;
    {;
      id:"4",;
      rank:4,;
      name:"AI Career Insights",;
      avatar:"",;
      referrals:98,;
      earnings:2450,;
      badges:[];
    },;
    {;
      id:"5",;
      rank:5,;
      name:"Deep Learning Daily",;
      avatar:"",;
      referrals:87,;
      earnings:2175,;
      badges:["newcomer"];
    }
  ],;
  ;
  // Function to render rank badge;
  const renderRankBadge = (rank:number) => {;
    switch(rank) {;
      case 1:;
        return <Trophy className="h-5 w-5 text-yellow-500" />,;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />,;
      case 3:;
        return <Medal className="h-5 w-5 text-amber-700" />,;
      default:;
        return <span className="text-sm font-semibold">{rank}</span>,;
    }
  },;
  ;
  return (;
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <Crown className="h-5 w-5 text-yellow-500" />;
            Top Partners;
          </CardTitle>;
          <CardDescription>This month's top-performing partners</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="space-y-4">;
<<<<<<< HEAD
            {leaderboard.length > 0 ? (;
              leaderboard.map(entry => (;
                <div ;
                  key={entry.id} ;
                  className={`flex items-center justify-between p-3 rounded-md ${;
                    entry.rank === 1 ? 'bg-yellow-500/10 border border-yellow-500/30' :;
                    entry.rank <= 3 ? 'bg-zion-blue-light/20' :'bg-zion-blue/10';
                  }`}
                >;
                  <div className="flex items-center gap-3">;
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zion-blue-light">;
                      {renderRankBadge(entry.rank)}
                    </div>;
                    <Avatar className="h-10 w-10 border border-zion-blue-light">;
                      <AvatarImage src={entry.avatar} />;
                      <AvatarFallback className="bg-zion-blue text-zion-cyan">;
                        {entry.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>;
                    </Avatar>;
                    <div>;
                      <div className="font-medium text-white">{entry.name}</div>;
                      <div className="text-xs text-zion-slate-light">{entry.referrals} referrals</div>;
=======
            {leaderboard && leaderboard.length > 0 ? (;
              leaderboard && leaderboard.map(entry => (;
                <div
                  key={entry && entry.id} 
                  className={`flex items-center justify-between p-3 rounded-md ${
                    entry && entry.rank === 1 ? 'bg-yellow-500/10 border border-yellow-500/30' : 
                    entry && entry.rank <= 3 ? 'bg-zion-blue-light/20' : 'bg-zion-blue/10'
                  }`}>;
                  <div className="flex items-center gap-3">;
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zion-blue-light">;
                      {renderRankBadge(entry && entry.rank)}
                    </div>;
                    <Avatar className="h-10 w-10 border border-zion-blue-light">;
                      <AvatarImage src={entry && entry.avatar} />;
                      <AvatarFallback className="bg-zion-blue text-zion-cyan">;
                        {entry && entry.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>;
                    </Avatar>;
                    <div>;
                      <div className="font-medium text-white">{entry && entry.name}</div>;
                      <div className="text-xs text-zion-slate-light">{entry && entry.referrals} referrals</div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>;
                  </div>;
                  <div className="flex items-center gap-3">;
                    <div className="text-right">;
<<<<<<< HEAD
                      <div className="font-semibold text-white">${entry.earnings}</div>;
                      <div className="text-xs text-zion-slate-light">earned</div>;
                    </div>;
                    <div className="flex gap-1">;
                      {entry.badges.includes("gold") && (;
                        <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400">;
                          Elite;
                        </Badge>;
                      )}
<<<<<<< HEAD
=======
=======
                      <div className="font-semibold text-white">${entry && entry.earnings}</div>;
                      <div className="text-xs text-zion-slate-light">earned</div>;
                    </div>;
                    <div className="flex gap-1">;
                      {entry && entry.badges.includes("gold") && (;
                        <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400">;
                          Elite;
                        </Badge>;

                      )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {entry && entry.badges.includes("trending") && (;
                        <Badge variant="outline" className="bg-blue-500/20 border-blue-500 text-blue-400">;
                          Trending;
                        </Badge>;
                      )}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      )}
                      {entry.badges.includes("trending") && (
                        <Badge variant="outline" className="bg-blue-500/20 border-blue-500 text-blue-400">
                          Trending
                        </Badge>
                      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>;
                  </div>;
                </div>;
              ));
            ) : (;
              <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">;
                <Trophy className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />;
                <p className="text-zion-slate-light mb-2">Leaderboard will appear here</p>;
                <p className="text-xs text-zion-slate-light">;
                  Start referring to earn your spot on the leaderboard;
                </p>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <p className="text-zion-slate-light mb-4">
              Start referring to appear on the leaderboard
            </p>
            <Badge variant="outline" className="bg-zion-purple/20 border-zion-purple text-zion-purple">
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
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400">
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
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-gray-400/20 border-gray-400 text-gray-300">
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
<<<<<<< HEAD
                      {entry.badges.includes("trending") && (;
                        <Badge variant="outline" className="bg-blue-500/20 border-blue-500 text-blue-400">;
                          Trending;
                        </Badge>;                      )}
                    </div>;
                  </div>;
                </div>;
              ));
            ) :(;
              <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">;
                <Trophy className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />;
                <p className="text-zion-slate-light mb-2">Leaderboard will appear here</p>;
                <p className="text-xs text-zion-slate-light">;
                  Start referring to earn your spot on the leaderboard;
                </p>;
              </div>;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            )}
          </div>;
        </CardContent>;
      </Card>;
      ;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Your Ranking</CardTitle>;
          <CardDescription>How you compare to other partners</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">;
            <p className="text-zion-slate-light mb-4">;
              Start referring to appear on the leaderboard;
            </p>;
            <Badge variant="outline" className="bg-zion-purple/20 border-zion-purple text-zion-purple">;
              New Partner;
            </Badge>;
          </div>;
        </CardContent>;
      </Card>;
      ;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Rewards Program</CardTitle>;
          <CardDescription>Exclusive perks for top partners</CardDescription>;
        </CardHeader>;
        <CardContent className="space-y-4">;
          <div className="p-4 bg-zion-blue rounded-md">;
            <div className="flex items-center gap-2 mb-2">;
              <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400">;
                Elite Partner;
              </Badge>;
              <span className="text-xs text-zion-slate-light">(Top 3)</span>;
            </div>;
            <ul className="list-disc list-inside text-sm text-zion-slate-light space-y-1">;
              <li>Increased commission rate (35%)</li>;
              <li>Featured on Zion AI home page</li>;
              <li>Early access to new Zion AI features</li>;
              <li>Monthly strategy call with Zion AI team</li>;
            </ul>;
          </div>;
          ;
          <div className="p-4 bg-zion-blue rounded-md">;
            <div className="flex items-center gap-2 mb-2">;
              <Badge variant="outline" className="bg-gray-400/20 border-gray-400 text-gray-300">;
                Premier Partner;
              </Badge>;
              <span className="text-xs text-zion-slate-light">(Top 10)</span>;
            </div>;
            <ul className="list-disc list-inside text-sm text-zion-slate-light space-y-1">;
              <li>Increased commission rate (30%)</li>;
              <li>Custom landing page for your referrals</li>;
              <li>Co-marketing opportunities</li>;
            </ul>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  ),; interface LeaderboardEntry {
  id: string;
rank: number;
name: string;
avatar?: string;
referrals: number;
earnings: number;
badges: string[] 
}//Placeholder data - would come from API in real implementation const leaderboard: LeaderboardEntry[] = [ {
  //Function to render rank badge const renderRankBadge = (rank: number) => {
  switch (rank) {
  case 1: return <Trophy className="h-5 w-5 text-yellow-500" />;
case 2: return <Medal className="h-5 w-5 text-gray-400" />;
case 3: return <Medal className="h-5 w-5 text-amber-700" />;
default: return <span className="text-sm font-semibold"> {
  rank 
}</span> 
}

}
;

<<<<<<< HEAD
};
return (<div className="space-y-6"> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className="flex items-center gap-2"> <Crown className="h-5 w-5 text-yellow-500" /> Top Partners </CardTitle> <CardDescription>This month's top-performing partners</CardDescription> </CardHeader> <CardContent> <div className="space-y-4"> {
  leaderboard.length > 0 ? (leaderboard.map (entry => (<div key= {
  entry.id 
}className= {
  `flex items-center justify-between p-3 rounded-md $ {
  entry.rank === 1 ? 'bg-yellow-500/10 border border-yellow-500/30': entry.rank <= 3 ? 'bg-zion-blue-light/20': 'bg-zion-blue/10' 
}` 
}> <div className="flex items-center gap-3"> <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zion-blue-light"> {
  renderRankBadge (entry.rank) 
}</div> <Avatar className="h-10 w-10 border border-zion-blue-light"> <AvatarImage src= {
  entry.avatar 
}/> <AvatarFallback className="bg-zion-blue text-zion-cyan"> {
  entry.name.substring (0, 2) .toUpperCase () 
}</AvatarFallback> </Avatar> <div> <div className="font-medium text-white"> {
  entry.name 
}</div> <div className="text-xs text-zion-slate-light"> {
  entry.referrals 
}referrals</div> </div> </div> <div className="flex items-center gap-3"> <div className="text-right"> <div className="font-semibold text-white">$ {
  entry.earnings 
}</div> <div className="text-xs text-zion-slate-light">earned</div> </div> Trending </Badge>) 
}</div> </div> </div>) ) ) : (<div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg"> <Trophy className="h-16 w-16 mx-auto text-zion-slate-light mb-4" /> <p className="text-zion-slate-light mb-2">Leaderboard will appear here</p> <p className="text-xs text-zion-slate-light"> Start referring to earn your spot on the leaderboard </p> </div>) 
}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle>Your Ranking</CardTitle> <CardDescription>How you compare to other partners</CardDescription> </CardHeader> <CardContent> <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg"> <p className="text-zion-slate-light mb-4" > Start referring to appear on the leaderboard </p> <Badge variant="outline" className="bg-zion-purple/20 border-zion-purple text-zion-purple"> New Partner </Badge> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle>Rewards Program</CardTitle> <CardDescription>Exclusive perks for top partners</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="p-4 bg-zion-blue rounded-md"> <div className="flex items-center gap-2 mb-2" > <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400"> Elite Partner </Badge> <span className="text-xs text-zion-slate-light"> (Top 3) </span> </div> <ul className="list-disc list-inside text-sm text-zion-slate-light space-y-1"> <li>Increased commission rate (35%) </li> <li>Featured on Zion AI home page</li> <li>Early access to new Zion AI features</li> <li>Monthly strategy call with Zion AI team</li> </ul> </div> <div className="p-4 bg-zion-blue rounded-md"> <div className="flex items-center gap-2 mb-2" > <Badge variant="outline" className="bg-gray-400/20 border-gray-400 text-gray-300"> Premier Partner </Badge> <span className="text-xs text-zion-slate-light"> (Top 10) </span> </div> <ul className="list-disc list-inside text-sm text-zion-slate-light space-y-1"> <li>Increased commission rate (30%) </li> <li>Custom landing page for your referrals</li> <li>Co-marketing opportunities</li> </ul> </div> </CardContent> </Card> </div>) 
}
}
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
