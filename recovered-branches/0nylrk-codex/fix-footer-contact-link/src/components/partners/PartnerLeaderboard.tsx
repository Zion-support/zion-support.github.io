import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { Crown, Medal, Trophy } from './lucide-react';
<<<<<<< HEAD

<<<<<<< HEAD

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
=======
<<<<<<< HEAD
=======
interface LeaderboardEntry {

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Crown, Medal, Trophy} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge";
import { Crown, Medal, Trophy } from "lucide-react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface LeaderboardEntry {

  id: string
  rank: number
  name: string
  avatar?: string;
<<<<<<< HEAD
<<<<<<< HEAD


=======
  referrals: number
  earnings: number

import { Badge } from "@/components/ui/badge",
import { Crown, Medal, Trophy } from "lucide-react",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface LeaderboardEntry {
  id: string,
  rank: number,
  name: string,
  avatar?: string,
  referrals: number,
  earnings: number,
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  badges: string[]
}
export function PartnerLeaderboard() {
  // Placeholder data - would come from API in real implementation
  const leaderboard: LeaderboardEntry[] = [
    {

      id: "1"
      rank: 1
      name: "AI Tech Guru"
<<<<<<< HEAD
      avatar: "", // URL would be here
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      referrals: 178,
      earnings: 4500,


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      referrals: 178
      earnings: 4500

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      referrals: 178,
      earnings: 4500,
      badges: ["gold", "trending"];
    };
      badges: ["gold", "trending"]
    }
    },
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      referrals: 178,
      earnings: 4500,


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
=======
      avatar: "", // URL would be here    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      id: "2"
      rank: 2
      name: "Machine Learning Hub"
      avatar: ""
      referrals: 145
      earnings: 3625

      badges: ["silver"]
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {

      id: "3"
      rank: 3
      name: "Neural Networks Pro"
      avatar: ""
      referrals: 124
      earnings: 3100

      badges: ["bronze"]
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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



    }
    {

<<<<<<< HEAD
=======
=======
      id: "5"
      rank: 5
      name: "Deep Learning Daily"
      avatar: ""
      referrals: 87
      earnings: 2175
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      badges: ["newcomer"]
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
  ];
  // Function to render rank badge

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Crown, Medal, Trophy} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface LeaderboardEntry {;
  id: string,;
  rank: number,;
  name: string,;
<<<<<<< HEAD
<<<<<<< HEAD
  avatar?: string;
=======
  avatar?: string,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  avatar?: string;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  referrals: number,;
  earnings: number,;
  badges: string[];
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
      rank: 2,;
      name: "Machine Learning Hub",;
      avatar: "",;
      referrals: 145,;
      earnings: 3625,;
      badges: ["silver"]
};    };
    {;
      id: "3",;
      rank: 3,;
      name: "Neural Networks Pro",;
      avatar: "",;
      referrals: 124,;
      earnings: 3100,;
      badges: ["bronze"]
};    };
    {;
      id: "4",;
      rank: 4,;
      name: "AI Career Insights",;
      avatar: "",;
      referrals: 98,;
      earnings: 2450,;
      badges: []
};    };
    {;
      id: "5",;
      rank: 5,;
      name: "Deep Learning Daily",;
      avatar: "",;
      referrals: 87,;
      earnings: 2175,;
      badges: ["newcomer"];
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  ];
  // Function to render rank badge

<<<<<<< HEAD
=======
=======
  ],;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  ];

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Function to render rank badge;
  const renderRankBadge = (rank: number) => {;
    switch(rank) {;
      case 1:;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />;
<<<<<<< HEAD

=======
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
<<<<<<< HEAD
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
=======
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
          <div className="space - y-4">;
            {leaderboard.length > 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  }`}
=======
  ];                  }`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
                        </Badge>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      case 3:;
        return <Medal className="h-5 w-5 text-amber-700" />,;
      default:;
        return <span className="text-sm font-semibold">{rank}</span>;
    }
  };
<<<<<<< HEAD

  return (
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    </div>;
                  </div>;
                  <div className="flex items-center gap-3">;
                    <div className="text-right">;
<<<<<<< HEAD
                      <div className="font-semibold text-white">${entry && entry.earnings}</div>;
                      <div className="text-xs text-zion-slate-light">earned</div>;
                    </div>;
                    <div className="flex gap-1">;
                      {entry && entry.badges.includes("gold") && (;
                        <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400">;
                          Elite;
                        </Badge>;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      )}
                      {entry && entry.badges.includes("trending") && (;
                        <Badge variant="outline" className="bg-blue-500/20 border-blue-500 text-blue-400">;
                          Trending;
                        </Badge>;
                      )}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
=======
                      <div className="font-semibold text-white">${entry.earnings}</div>;
                      <div className="text-xs text-zion-slate-light">earned</div>;
                    </div>;
                    <div className="flex gap-1">;
                      {entry.badges.includes("gold") && (;
                        <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500 text-yellow-400">;
                          Elite;
                        </Badge>;
                      )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      )}
                      {entry.badges.includes("trending") && (
                        <Badge variant="outline" className="bg-blue-500/20 border-blue-500 text-blue-400">
                          Trending
                        </Badge>
                      )}
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}

          </div>;
        </CardContent>;
      </Card>;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}
=======
                        </Badge>            )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
}
}
;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
      </Card>;            </ul>;
          </div>;
        </CardContent>;
      </Card>;

    </div>);
<<<<<<< HEAD
}

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
