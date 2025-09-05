
export interface LeaderboardEntry {_name: string;
  points: number;}

interface UserLeaderboardProps {_entries: LeaderboardEntry[];}

export function UserLeaderboard(_{_entries}: UserLeaderboardProps) {_return (_<Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" /> Leaderboard
        </CardTitle>
        <CardDescription>Top users by points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {entries.map((e, _idx) => (
            <div
              key={e.name}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50"
            >
              <span className="font-medium">
                {_idx + 1}. {_e.name}
              </span>
              <span className="text-sm">{_e.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
