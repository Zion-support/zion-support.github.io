
      case "Recommended for Review":
        return "bg-blue-100 text-blue-800"
      case "Low Match":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
  // Trigger the scoring process
  const handleScore = async () => {
    try {
      setIsScoring(true)
      // Call the trigger_resume_scoring function
      const { error } = await supabase.rpc(
        'trigger_resume_scoring'
        { application_id: application.id }
      )
      if (error) throw error
      toast.success("Resume scoring has been initiated")
      // Poll for results every 3 seconds for up to 30 seconds
      let attempts = 0
      const maxAttempts = 10
      const checkScore = async () => {
        attempts++
        const { data, error } = await supabase
          .from("job_applications")
          .select("*")
          .eq("id", application.id)
          .single()
        if (error) {
        }
        if (attempts < maxAttempts) {
          setTimeout(checkScore, 3000)
        } else {
          setIsScoring(false)
          toast.info("Scoring is taking longer than expected. Check back later.")
  return (
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg font-medium flex items-center justify-between">;
          Resume Match Score;
          <Badge variant={hasScore ? "default" : "outline"} className="ml-2">;
            {hasScore ? "SCORED" : "NOT SCORED"}
            {/* Breakdown (Collapsible) */}
            {application && application.match_breakdown && (;
              <div className="mt-4 pt-4 border-t">;
                <details className="text-sm">;
                  <summary className="font-medium cursor-pointer">;
                    View detailed breakdown;
                  </summary>;
                  <div className="mt-2 space-y-2 text-muted-foreground">;
                    {application && application.match_breakdown.skills_match && (;
                      <div>;
                        <p className="font-medium">Skills Match: {application && application.match_breakdown.skills_match && skills_match.score}/100</p>;
                        {application && application.match_breakdown.skills_match && skills_match.matching && (;
                          <p>Matching skills: {application && application.match_breakdown.skills_match && skills_match.matching.join(", ")}</p>;
                        )}
                        {application && application.match_breakdown.skills_match && skills_match.missing && (;
                          <p>Missing skills: {application && application.match_breakdown.skills_match && skills_match.missing.join(", ")}</p>;
                        )}
                    {application.match_breakdown.experience_match && (
                      <div>
                        <p className="font-medium">Experience Match: {application.match_breakdown.experience_match.score}/100</p>
                        <p>{application.match_breakdown.experience_match.analysis}</p>
                      </div>
                    )}
                    {application.match_breakdown.certifications_match && (
                      <div>;
                        <p className="font - medium">Certifications Match: {application.match_breakdown.certifications_match.score}/100</p>;
                        {application.match_breakdown.certifications_match.matching && (
                          <p > Matching certs: {application.match_breakdown.certifications_match.matching.join (", ")}</p>)}
                        {application.match_breakdown.certifications_match.missing && (
                    {application.match_breakdown.education_match && (
                        <p className="font-medium">Education Match: {application.match_breakdown.education_match.score}/100</p>
                        <p>{application.match_breakdown.education_match.analysis}</p>
                      </div>
                    {application && application.match_breakdown.education_match && (;
                      <div>;
                        <p className="font-medium">Education Match: {application && application.match_breakdown.education_match && education_match.score}/100</p>;
                        <p>{application && application.match_breakdown.education_match && education_match.analysis}</p>;
                      </div>;
                    )}
                  </div>;                )}
              </div>;
            </div>;
            ;
            {/* Breakdown (Collapsible) */}
            {application.match_breakdown && (;
              <div className="mt-4 pt-4 border-t">;
                <details className="text-sm">;
                  <summary className="font-medium cursor-pointer">;
                    View detailed breakdown;
                  </summary>;
                  <div className="mt-2 space-y-2 text-muted-foreground">;
                    {application.match_breakdown.skills_match && (;
                      <div>;
                        <p className="font-medium">Skills Match:{application.match_breakdown.skills_match.score}/100</p>;
                        {application.match_breakdown.skills_match.matching && (;
                          <p>Matching skills:{application.match_breakdown.skills_match.matching.join(", ")}</p>;
                        )}
                        {application.match_breakdown.skills_match.missing && (;
                          <p>Missing skills:{application.match_breakdown.skills_match.missing.join(", ")}</p>;
                        )}
                      </div>;
                    )}
                    ;
                    {application.match_breakdown.experience_match && (;
                      <div>;
                        <p className="font-medium">Experience Match:{application.match_breakdown.experience_match.score}/100</p>;
                        <p>{application.match_breakdown.experience_match.analysis}</p>;
                      </div>;
                    )}
;
                    {application.match_breakdown.certifications_match && (;
                      <div>;
                        <p className="font-medium">Certifications Match:{application.match_breakdown.certifications_match.score}/100</p>;
                        {application.match_breakdown.certifications_match.matching && (;
                          <p>Matching certs:{application.match_breakdown.certifications_match.matching.join(", ")}</p>;
                        )}
                        {application.match_breakdown.certifications_match.missing && (;
                          <p>Missing certs:{application.match_breakdown.certifications_match.missing.join(", ")}</p>;
                        )}
                      </div>;
                    )}
                    ;
                    {application.match_breakdown.education_match && (;
                      <div>;
                        <p className="font-medium">Education Match:{application.match_breakdown.education_match.score}/100</p>;
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>;                    )}
                  </div>;
                </details>;
              </div>;
                  </div>
                </details>
              </div>
            )}
              className="w-full">;
              {isScoring ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Scoring Resume...;
                </>;
              ) : (;
                "Score Resume";
            <Button 
              onClick = {handleScore,}
              disabled = {isScoring,}
              onClick={handleScore} 
              disabled={isScoring}

              className="w-full"
            >
              {isScoring ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scoring Resume...
                </>
              ) : (
                "Score Resume"
          </div>;
                          <p > Missing certs: {application.match_breakdown.certifications_match.missing.join (", ")}</p>)}
                      </div>)}
                    {application.match_breakdown.education_match && (
                      <div>;
                        <p className="font - medium">Education Match: {application.match_breakdown.education_match.score}/100</p>;
                        <p>{application.match_breakdown.education_match.analysis}</p>;
                      </div>)}
                  </div>;
                </details>;
              </div>)}
          </div>) : (
          <div className="text - center py - 4">;
            <p className="text - muted - foreground mb - 4">;
              Analyze how well this resume matches your job requirements.;
            </p>;
            <Button;
              on_click = {handle_score, }
              disabled = {is_scoring, }
              className="w - full";
            >;
              {is_scoring ? (
                <>;
                  <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                  Scoring Resume...;
                </>) : (
                "Score Resume")}
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);
}
