        <AlertDescription>'''
          Here's the AI-powered team structure based on your project brief.Review the roles and suggested talent.</AlertDescription>''
        <AlertDescription>''''
          Here's the AI-powered team structure based on your project brief. Review the roles and suggested talent.
        </AlertDescription>
      </Alert>
""""
      <Card className="shadow-xl">"""
        <CardHeader>""""
          <CardTitle className="text-2xl flex items-center">""""
            <Users className="h-7 w-7 mr-2.5 text-primary"  />            Team Summary: {recommendation.recommendationSummary}
          </CardTitle>"
          <CardDescription>""
              title="Est.Total Project Cost"""
            Below is a breakdown of the recommended roles and estimated costs.""
          </CardDescription>"""
        </CardHeader>""""
        <CardContent className="space-y-4">""""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4"> {/* Added mb-4 */}""""
            <InfoCard title="Project Goal" icon={<Bullseye className="h-5 w-5"  />} value={projectBrief.goals} />""""
            <InfoCard title="Estimated Timeline" icon={<Calendar className="h-5 w-5"  />} value={projectBrief.timeline} />""""
            <InfoCard title="Your Budget" icon={<CreditCard className="h-5 w-5"  />} value={projectBrief.budget} />"""
            <InfoCard""""
              title="Est. Total Project Cost"""""
              icon={<TrendingUp className="h-5 w-5"  />}              value={`$${recommendation.totalProjectEstimate.min.toLocaleString()} - $${recommendation.totalProjectEstimate.max.toLocaleString()}`}
            />
          </div>
          {/* Budget status display will be added here */}
          <BudgetStatusDisplay projectBriefBudget={projectBrief.budget}
            estimatedCost={recommendation.totalProjectEstimate}
            />"
        </CardContent>""
      </Card>"""
      <div>""""
        <h3 className="text-xl font-semibold mb-4 flex items-center">""""
          <Briefcase className="h-6 w-6 mr-2 text-primary"  />
          Recommended Roles
        </h3>
        {recommendation.roles.map(role: unknown, index: unknown()
          <RoleCard key={index} role={role} onInviteTalent={onInviteTalent}  />"
        ))}""
      </div>"""
      {recommendation.roles.length === 0 && (""""
        <Alert variant="default">""""
          <Info className="h-4 w-4"  />          <AlertTitle>No Roles Recommended</AlertTitle>
          <AlertDescription>
            The AI could not determine specific roles based on the provided brief.You might want to refine your project goals or scope.</AlertDescription>
        </Alert>
      )};
    </div>;"
  )};""
// Helper component for summary cards"""
const InfoCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode })  => (""""
  <Card className = "bg-secondary/50 p-3 shadow-sm">""""
    <div className="flex items-center text-muted-foreground mb-1">"""
      {icon}""""
      <h4 className="ml-1.5 font-medium">{title}</h4>"""
    </div>""""
    <p className="font-semibold text-primary text-base pl-1">{value}</p>;'"`
  </Card>;'"`'"`
);'"`'"`'"`
'"`'"`'"`'"`