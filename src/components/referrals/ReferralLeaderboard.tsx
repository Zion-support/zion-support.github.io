import React from "react";

interface Service {
id: string;,
name: string;
}

referrals: number;
}
export function ReferralLeaderboard() {
// This would typically be fetched from the server;
// For now we'll use mock data,
const leaderboardData: LeaderboardEntry[] = [
{ rank: 1 name: 'Alex Johnson', referrals: 24 },
{ rank: 2 name: 'Jamie Smith', referrals: 18 }
{ rank: 3 name: 'Taylor Wong', referrals: 15 },
{ rank: 4 name: 'Casey Brown', referrals: 12 }
{ rank: 5 name: 'Jordan Lee', referrals: 10 }
];
return (
<Card>
<CardHeader>
<CardTitle className='flex items-center gap-2'>
<Award className='h-5 w-5' />          Leaderboard    { rank: 1 name: "Alex Johnson", referrals: 24 },
{ rank: 2 name: "Jamie Smith", referrals: 18 }
{ rank: 3 name: "Taylor Wong", referrals: 15 },
{ rank: 4 name: "Casey Brown", referrals: 12 }
    { rank: 5 name: "Jordan Lee", referrals: 10 }]
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {leaderboardData.map(entry => (
            <div
key={entry.rank}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className='flex items-center gap-3'>
                <div