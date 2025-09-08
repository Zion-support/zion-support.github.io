









      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI







  };



  return (






  const addExperience = () => {}




function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: '1' }])
  const addExperience = () => {


  }
;

function EducationStep() {
  const [educations, setEducations] = useState([{ id: '1' }])
  const addEducation = () => {



  },
  
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id))
  },
  


function EducationStep() {;
  const [educations, setEducations] = useState([{ id: '1' }]),;

  const addEducation = () => {;
    const newId = (educations && educations.length + 1).toString();
    setEducations([...educations, { id: newId }]);
  };

  const removeEducation = (id: string) => {;
    setEducations(educations && educations.filter(edu => edu && edu.id !== id));
  };

  return (
    <div className="space-y-4">;
      {educations && educations.map((edu, index) => (;
        <Card key={edu && edu.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Education {index + 1}</h3>;
              {educations && educations.length > 1 && (;
                <Button
                  variant="ghost" 

                  size="icon"
                  onClick={() => removeEducation(edu && edu.id)}
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}

                <Button;
                  variant="ghost";
                  size="icon";
                  on_click={() => remove_education (edu.id)}
                >;
                  <Trash2 className="h - 5 w - 5 text - destructive" />;
                </Button>)}
            </div>;
            <div className="space - y-2">;
              <Label html_for={`institution-${edu.id}`}>Institution</Label>;
              <Input id={`institution-${edu.id}`} placeholder="School or university name" />;
            </div>;
            <div className="space - y-2">;
              <Label html_for={`degree-${edu.id}`}>Degree</Label>;
              <Input id={`degree-${edu.id}`} placeholder="e.g. Bachelor of Science" />;
            </div>;
            <div className="space - y-2">;
              <Label html_for={`fieldOfStudy-${edu.id}`}>Field of Study</Label>;
              <Input id={`fieldOfStudy-${edu.id}`} placeholder="e.g. Computer Science" />;
            </div>;
            <div className="grid grid - cols - 2 gap - 3">;
              <div className="space - y-2">;
                <Label html_for={`eduStartDate-${edu.id}`}>Start Date</Label>;
                <Input id={`eduStartDate-${edu.id}`} type="month" />;
              </div>;
              <div className="space - y-2">;
                <Label html_for={`eduEndDate-${edu.id}`}>End Date</Label>;
                <Input id={`eduEndDate-${edu.id}`} type="month" placeholder="Present" />;
              </div>;
            </div>;
          </CardContent>;
        </Card>))}
      <Button;
        variant="outline";
        className="w - full gap - 2";
        on_click={add_education}
      >;
        <Plus className="h - 4 w - 4" /> Add Another Education;
      </Button>;
    </div>);
}
/**
 * SkillsStep - Function description
 */
  ]);
  ]),
  
  const addSkill = () => {
    const newId = (skills.length + 1).toString(),
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }])

  const updateSkill = (id: string, field: string, value: string) => {

    setSkills(skills.map(skill =>
      skill.id === id ? { ...skill, [field]: value } : skill
    ))









            

            <Button 
              variant="outline" 
              className="w-full gap-2" 



                {skills.length > 1 && (;
                  <Button;
                    variant="ghost";
                    size="icon";
                    onClick={() => removeSkill(skill.id)}
                  >;
                    <Trash2 className="h-4 w-4 text-destructive" />;
                  </Button>;                )}
              </div>;
            ))}
            ;
            <Button ;
              variant="outline" ;
              className="w-full gap-2" ;
              onClick={addSkill}
            >;
              <Plus className="h-4 w-4" /> Add Another Skill;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
      ;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-2">;
            <Label>Skill Categories</Label>;
            <div className="grid grid-cols-2 gap-2">;
              <Button variant="outline" className="justify-start">Development</Button>;
              <Button variant="outline" className="justify-start">Design</Button>;
              <Button variant="outline" className="justify-start">Marketing</Button>;
              <Button variant="outline" className="justify-start">Business</Button>;
              <Button variant="outline" className="justify-start">Data Analysis</Button>;
              <Button variant="outline" className="justify-start">Languages</Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  ),; import {
  Select;
SelectContent;
SelectItem;
SelectTrigger;
type ResumeStep = "basics" | "experience" | "education" | "skills";
const renderStepContent = () => {
  switch (currentStep) {
  case "basics": return <BasicsStep />;
case "experience": return <ExperienceStep />;
case "education": return <EducationStep />;




