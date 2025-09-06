interface LeaderboardEntry {

  id: string
  rank: number
  name: string
  avatar?: string;
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:;
        return <Medal className="h-5 w-5 text-gray-400" />;
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
          <div className="space - y-4">;
            {leaderboard.length > 0 ? (
                      )}
                      {entry && entry.badges.includes("trending") && (;
                        <Badge variant="outline" className="bg-blue-500/20 border-blue-500 text-blue-400">;
                          Trending;
                        </Badge>;
                      )}
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
            )}
              New Partner;
            </Badge>;
          </div>;
        </CardContent>;
      </Card>;
            </ul>;
          </div>;
        </CardContent>;
      </Card>;
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
