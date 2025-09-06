 await generateMilestones (input);
Initially select all milestones const handleAddToProject = () => {;
  const selectedMilestonesList = generatedMilestones.filter (, index) => selectedMilestones[index]);
onAddMilestones (selectedMilestonesList);
clearGeneratedMilestones ();
setSelectedMilestones ({;
 ;
return (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium flex items-center" > <Sparkles className="w-5 h-5 mr-2 text-primary" /> AI Milestone Generator </h3> <Button >{";"  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Generate Milestones </>) ;"}</Button> 
disabled= {;"  !Object.values (selectedMilestones) .some (Boolean) ";"}> Add Selected to Project </Button> </div> AI Suggested </Badge> </div> </AccordionTrigger> 