
import React, {_useState} from "react";
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";

type ResumeStep = "basics" | "experience" | "education" | "skills";

export function MobileResumeBuilder() {_const [currentStep, _setCurrentStep] = useState<ResumeStep>("basics");
  
  const _renderStepContent = () => {
    switch (currentStep) {
      case "basics":
        return <BasicsStep />;
      case "experience":
        return <ExperienceStep />;
      case "education":
        return <EducationStep />;
      case "skills":
        return <SkillsStep />;
      default:
        return <BasicsStep />;}
  };
  
  return (_<div className="space-y-6 px-4 pb-24">
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">
        <Button
          variant={_currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={_() => setCurrentStep("basics")}
        >
          Basics
        </Button>
        <Button
          variant={_currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={_() => setCurrentStep("experience")}
        >
          Experience
        </Button>
        <Button
          variant={_currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={_() => setCurrentStep("education")}
        >
          Education
        </Button>
        <Button
          variant={_currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={_() => setCurrentStep("skills")}
        >
          Skills
        </Button>
      </div>
      
      {_renderStepContent()}
      
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>
      
      <Button variant="default" className="w-full" size="lg">
        Save & Preview
      </Button>
    </div>
  );
}

function BasicsStep() {_return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Resume Title</Label>
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Your phone number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="City, _Country" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function ExperienceStep() {_const [experiences, _setExperiences] = useState([{ id: '1'}]);
  
  const _addExperience = () => {_const _newId = (experiences.length + 1).toString();
    setExperiences([...experiences, _{ id: newId}]);
  };
  
  const _removeExperience = (_id: string) => {_setExperiences(experiences.filter(exp => exp.id !== id));};
  
  return (_<div className="space-y-4">
      {_experiences.map((exp, _index) => (_<Card key={exp.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Work Experience {_index + 1}</h3>
              {_experiences.length > 1 && (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeExperience(exp.id)}
                >
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={_`title-${exp.id}`}>Job Title</Label>
              <Input id={_`title-${exp.id}`} placeholder="e.g. Frontend Developer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={_`company-${exp.id}`}>Company</Label>
              <Input id={_`company-${exp.id}`} placeholder="Company name" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={_`startDate-${exp.id}`}>Start Date</Label>
                <Input id={_`startDate-${exp.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={_`endDate-${exp.id}`}>End Date</Label>
                <Input id={_`endDate-${exp.id}`} type="month" placeholder="Present" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={_`description-${exp.id}`}>Description</Label>
              <Textarea 
                id={_`description-${exp.id}`} 
                placeholder="Describe your responsibilities and achievements" 
                rows={_3}
              />
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        variant="outline" 
        className="w-full gap-2" 
        onClick={_addExperience}
      >
        <Plus className="h-4 w-4" /> Add Another Experience
      </Button>
    </div>
  );
}

function EducationStep() {_const [educations, _setEducations] = useState([{ id: '1'}]);
  
  const _addEducation = () => {_const _newId = (educations.length + 1).toString();
    setEducations([...educations, _{ id: newId}]);
  };
  
  const _removeEducation = (_id: string) => {_setEducations(educations.filter(edu => edu.id !== id));};
  
  return (_<div className="space-y-4">
      {_educations.map((edu, _index) => (_<Card key={edu.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education {_index + 1}</h3>
              {_educations.length > 1 && (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeEducation(edu.id)}
                >
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={_`institution-${edu.id}`}>Institution</Label>
              <Input id={_`institution-${edu.id}`} placeholder="School or university name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={_`degree-${edu.id}`}>Degree</Label>
              <Input id={_`degree-${edu.id}`} placeholder="e.g. Bachelor of Science" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={_`fieldOfStudy-${edu.id}`}>Field of Study</Label>
              <Input id={_`fieldOfStudy-${edu.id}`} placeholder="e.g. Computer Science" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={_`eduStartDate-${edu.id}`}>Start Date</Label>
                <Input id={_`eduStartDate-${edu.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={_`eduEndDate-${edu.id}`}>End Date</Label>
                <Input id={_`eduEndDate-${edu.id}`} type="month" placeholder="Present" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        variant="outline" 
        className="w-full gap-2" 
        onClick={_addEducation}
      >
        <Plus className="h-4 w-4" /> Add Another Education
      </Button>
    </div>
  );
}

function SkillsStep() {_const [skills, _setSkills] = useState([
    { id: '1', _name: "", _proficiency: "beginner"}
  ]);
  
  const _addSkill = () => {_const _newId = (skills.length + 1).toString();
    setSkills([...skills, _{ id: newId, _name: "", _proficiency: "beginner"}]);
  };
  
  const _removeSkill = (_id: string) => {_setSkills(skills.filter(skill => skill.id !== id));};
  
  const _updateSkill = (_id: string, _field: string, _value: string) => {_setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, _[field]: value} : skill
    ));
  };
  
  return (_<div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {_skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <Input
                  placeholder="Skill (e.g. JavaScript, Figma)"
                  value={_skill.name}
                  onChange={_(_e) => updateSkill(skill.id, _"name", _e.target.value)}
                  className="flex-1"
                />
                <Select
                  value={_skill.proficiency}
                  onValueChange={_(_value) => updateSkill(skill.id, _"proficiency", _value)}
                >
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                {_skills.length > 1 && (_<Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeSkill(skill.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full gap-2" 
              onClick={_addSkill}
            >
              <Plus className="h-4 w-4" /> Add Another Skill
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="space-y-2">
            <Label>Skill Categories</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="justify-start">Development</Button>
              <Button variant="outline" className="justify-start">Design</Button>
              <Button variant="outline" className="justify-start">Marketing</Button>
              <Button variant="outline" className="justify-start">Business</Button>
              <Button variant="outline" className="justify-start">Data Analysis</Button>
              <Button variant="outline" className="justify-start">Languages</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
