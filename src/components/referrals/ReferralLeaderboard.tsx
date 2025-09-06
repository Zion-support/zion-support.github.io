

  rank: number,
  name: string,

  referrals: number
}
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
=======
interface LeaderboardEntry {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
    { rank: 1, name: "Alex Johnson", referrals: 24 },
    { rank: 2, name: "Jamie Smith", referrals: 18 },
    { rank: 3, name: "Taylor Wong", referrals: 15 },
    { rank: 4, name: "Casey Brown", referrals: 12 },
    { rank: 5, name: "Jordan Lee", referrals: 10 }],

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />

        </CardTitle>
        <CardDescription>Top referrers this month</CardDescription>
      </CardHeader>
      <CardContent>

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
