
interface TeamRecommendationDisplayProps extends React.PropsWithChildren<{}> {

  recommendation: TeamRecommendation;
  projectBrief: ProjectBrief; // For budget comparison
  onInviteTalent: talentId: string, roleTitle: string void;
  // onEditRole: roleId: string void; // For future add/remove
  // onRemoveRole: roleId: string void; // For future add/remove

}
;
export 
  if(!recommendation) return null;

  return ("
    <div className="space-y-8 mt-6">"
      <Alert className="border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300">"
        <CheckCircle className="h-5 w-5 text-green-500"  />"
        <AlertTitle className="font-semibold">Team Recommendation Generated!</AlertTitle>
        <AlertDescription>
              title="Est.Total Project Cost"
              icon={<TrendingUp className="h-5 w-5"  />}
              value={`$${recommendation.totalProjectEstimate.min.toLocaleString()} - $${recommendation.totalProjectEstimate.max.toLocaleString()}`}
