
return (
    <div className="space-y-6">
      {/* AI Milestone Generator */}
      {projectScope && projectStartDate && (
        <AIMilestoneGenerator
          <FormField
          <FormField
            <FormField
                        disabled = {(date) => date < new Date()}
            <FormField
}//If there are multiple milestones submit them one by one <AIMilestoneGenerator scope= {projectScope}startDate= {projectStartDate}endDate= {projectEndDate}projectType= {projectType}onAddMilestones= {handleAddMilestones}onAddMilestone= {handleAddMilestone}/>)
}/> </div> <Button type="button" variant="outline" onClick={onCancel}disabled= {isSubmitting}> Cancel </Button>) "