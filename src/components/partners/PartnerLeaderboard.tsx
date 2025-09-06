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
    {
      rank: 2
      name: "Machine Learning Hub"
      avatar: ""
      referrals: 145
      earnings: 3625
      badges: ["silver"]
    {
      rank: 3
      name: "Neural Networks Pro"
      avatar: ""
      referrals: 124
      earnings: 3100
      badges: ["bronze"]
    {
      rank: 4
      name: "AI Career Insights"
      avatar: ""
      referrals: 98
      earnings: 2450
      badges: []
      badges: ["newcomer"];
    }
  ];
  // Function to render rank badge;
  const renderRankBadge = (rank: number, ) =>: any {
    switch (rank) {
      case 1:;
        return <Trophy className="h - 5 w - 5 text - yellow - 500" />;
      case 2:;
        return <Medal className="h - 5 w - 5 text - gray - 400" />;
      case 3:;
        return <Medal className="h - 5 w - 5 text - amber - 700" />,
      default:;
