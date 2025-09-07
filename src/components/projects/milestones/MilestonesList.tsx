if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (milestones.length === 0 && !showAddForm) {
      <EmptyState
        icon={<span className="text-3xl">📊</span>}
        title="No Milestones Yet"

        description={isClient ? 
          "Break down the project into manageable milestones to track progress and payments." : 
          "No milestones have been created for this project yet."}
        action={isClient ? 
          {
            text: "Create First Milestone",
            onClick: () => setShowAddForm(true)
          } : undefined

  if (milestones && milestones.length === 0 && !showAddForm) {;
        icon = {<span className="text-3xl">📊</span>,}
        title="No Milestones Yet";
        description = {isClient ? ;
          "Break down the project into manageable milestones to track progress and payments." : ;
          "No milestones have been created for this project yet.",}
        action={isClient ? ;
          {;
            text: "Create First Milestone",;
            onClick: (,) => setShowAddForm(true);
          } : undefined;
    <div className="space-y-6">
      {isClient && !showAddForm && (
        <div className="flex justify-end">
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Milestone
          </Button>
      )}

      {showAddForm && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>

      <div className="space-y-4">;
        {milestones && milestones.map((milestone,) => (;

          <MilestoneCard

      </div>;
  );
};

  // Check condition
if ( {) {
  $2
      <div className="space - y-4">;
        {[1, 2, 3].map ((i, ) => (
          <Card key={i}>;
            <CardContent className="p - 6">;
              <div className="h - 6 w - 48 bg - muted rounded animate - pulse mb - 4"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w - full mb - 2"></div>;
              <div className="h - 4 bg - muted rounded animate - pulse w - 3/4"></div>;
            </CardContent>;
          </Card>))}
      </div>);
      <EmptyState;
        icon = {<span className="text - 3xl">📊</span>, }
        description = {is_client ?;
          "Break down the project into manageable milestones to track progress and payments." :;
          "No milestones have been created for this project yet.", }
        action={is_client ?;
            on_click: (, ) => setShowAddForm (true);
      />);
    <div className="space - y-6">;
      {is_client && !showAddForm && (
        <div className="flex justify - end">;
          <Button on_click={(, ) => setShowAddForm (true)}>;
            <Plus className="h - 4 w - 4 mr - 2" />;
            Add Milestone;
          </Button>;
        </div>)}
        <Card>;
          <CardContent className="pt - 6">;
            <h3 className="text - lg font - medium mb - 4">Create New Milestone</h3>;
            <AddMilestoneForm;
              on_submit = {handle_submit, }
              is_submitting = {is_submitting, }
              on_cancel = {(, ) => setShowAddForm (false), }
            />;
        </Card>)}
        {milestones.map ((milestone, ) => (
          <MilestoneCard;
            key = {milestone.id, }
            id = {milestone.id, }
            project_id = {milestone.project_id, }
            title = {milestone.title, }
            description = {milestone.description, }
            amount = {parse_float (milestone.amount.to_string ()), }
            status = {milestone.status, }
            due_date = {milestone.due_date, }
            on_approve = {on_approve, }
            on_reject = {on_reject, }
          />))}
";

            <AddMilestoneForm