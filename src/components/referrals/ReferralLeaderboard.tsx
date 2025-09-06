

  rank: number,
  name: string,

  referrals: number
}
=======



export function ReferralLeaderboard() {
  // This would typically be fetched from the server
  // For now, we'll use mock data
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: 'Alex Johnson', referrals: 24 }
    { rank: 2, name: 'Jamie Smith', referrals: 18 }
    { rank: 3, name: 'Taylor Wong', referrals: 15 }
    { rank: 4, name: 'Casey Brown', referrals: 12 }
    { rank: 5, name: 'Jordan Lee', referrals: 10 }
    { rank: 1, name: 'Alex Johnson', referrals: 24 },
    { rank: 2, name: 'Jamie Smith', referrals: 18 },
    { rank: 3, name: 'Taylor Wong', referrals: 15 },
    { rank: 4, name: 'Casey Brown', referrals: 12 },
    { rank: 5, name: 'Jordan Lee', referrals: 10 },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Award className='h-5 w-5' />          Leaderboard    { rank: 1, name: "Alex Johnson", referrals: 24 }
    { rank: 2, name: "Jamie Smith", referrals: 18 }
    { rank: 3, name: "Taylor Wong", referrals: 15 }
    { rank: 4, name: "Casey Brown", referrals: 12 }
    { rank: 5, name: "Jordan Lee", referrals: 10 }]
    <Card>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <Award className='h-5 w-5' />          Leaderboard    { rank: 1, name: "Alex Johnson", referrals: 24 },;
    { rank: 2, name: "Jamie Smith", referrals: 18 },;
    { rank: 3, name: "Taylor Wong", referrals: 15 },;
    { rank: 4, name: "Casey Brown", referrals: 12 },;
    { rank: 5, name: "Jordan Lee", referrals: 10 }],;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Award className="h-5 w-5" />;
        </CardTitle>;
        <CardDescription>Top referrers this month</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='space-y-2'>;
          {leaderboardData && leaderboardData.map(entry => (;
            <div
              key={entry && entry.rank}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors">;
              <div className='flex items-center gap-3'>;
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry && entry.rank === 1
                      ? 'bg-yellow-200 text-yellow-800'
                      : entry && entry.rank === 2
                        ? 'bg-slate-200 text-slate-800'
                        : entry && entry.rank === 3
                          ? 'bg-amber-200 text-amber-800'
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />

=======
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Leaderboard
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>
=======
        <div className='space-y-2'>
          {leaderboardData.map(entry => (
            <div
              key={entry.rank}
              className='flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors'              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div 
              key={entry.rank}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
<<<<<<< HEAD
<<<<<<< HEAD

            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    entry.rank === 1
                      ? "bg-yellow-200 text-yellow-800"
                      : entry.rank === 2
                      ? "bg-slate-200 text-slate-800"
                      : entry.rank === 3
                      ? "bg-amber-200 text-amber-800"

                      : "bg-muted text-muted-foreground"
<<<<<<< HEAD
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD
