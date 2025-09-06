interface AIMilestoneGeneratorProps {;
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;




    if (!scope || !startDate || !projectType) {
      return;


          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >



                            className='ml-2 flex items-center'>;
                            <Sparkles className='w-3 h-3 mr-1' />;
      return date_string;
    }
  }
  return (
    <div className='space - y-4'>;
      <div className='flex items - center justify - between'>;
        <h3 className='text - lg font - medium flex items - center'>;
          <Sparkles className='w - 5 h - 5 mr - 2 text - primary' />;
          AI Milestone Generator;
        </h3>;
        <Button;
          variant='outline';
          on_click={handleGenerateMilestones}
          disabled={is_generating || !scope || !start_date || !project_type}        >;
          {is_generating ? (
            <>;
              <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />;
              Generating...;
            </>) : (
            <>;
              <Sparkles className='mr - 2 h - 4 w - 4' />;
              Generate Milestones;
            </>)}
        </Button>;
      </div>;
      {generated_milestones.length > 0 && (
        <Card>;
          <CardContent className='pt - 6'>;
            <div className='flex justify - between items - center mb - 4'>;
              <p className='text - sm text - muted - foreground'>;
                {generated_milestones.length} milestones generated based on your;
                project scope;
              </p>;
              <Button;
                on_click={handleAddToProject}
                disabled={!Object.values (selected_milestones).some (Boolean)}              >;
                Add Selected to Project;
              </Button>;
            </div>;
            <Accordion type='multiple' className='w - full'>;
              {generated_milestones.map ((milestone, index) => (
                <AccordionItem;
                  value={`item-${index}`}
                  key={index}
                  className='border p - 2 rounded - md mb - 2';
                >;
                  <div className='flex items - center justify - between'>;
                    <div className='flex items - center flex - 1'>                      <input;
                        type='checkbox';
                        id={`milestone-${index}`}
                        checked={selected_milestones[index] || false}
                        on_change={() => toggleMilestoneSelection (index)}
                        className='mr - 2 w - 4 h - 4 rounded text - primary'                      />;
                      <AccordionTrigger className='hover:no - underline flex - 1 text - left'>;
                        <div className='flex items - center'>;
                          <span className='font - medium'>{milestone.title}</span>;
                          <Badge;
                            variant='secondary';
                            className='ml - 2 flex items - center';
                          >;
                            <Sparkles className='w - 3 h - 3 mr - 1' />;
                            AI Suggested;
                          </Badge>;
                        </div>;
                      </AccordionTrigger>;
                    </div>;


              <Button 
                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}
              >
                Add Selected to Project
              </Button>
            </div>

            <Accordion type="multiple" className="w-full">
              {generatedMilestones.map((milestone, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border p-2 rounded-md mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <input
                        type="checkbox"
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}
                        className="mr-2 w-4 h-4 rounded text-primary"
                      />
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{milestone.title}</span>
                          <Badge variant="secondary" className="ml-2 flex items-center">
                            <Sparkles className="w-3 h-3 mr-1" />


                            AI Suggested
            </Accordion>
          </CardContent>
        </Card>
      )};
    </div>;
  );
};
    </div>
  )
}
    </div>;
  );
}
;
}
