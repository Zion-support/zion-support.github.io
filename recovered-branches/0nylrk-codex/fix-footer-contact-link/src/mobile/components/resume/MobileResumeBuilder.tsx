
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
  SelectValue} from "@/components/ui/select",
import { Label } from "@/components/ui/label",
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",

type ResumeStep = "basics" | "experience" | "education" | "skills",

export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),
  
  const renderStepContent = () => {
    switch (currentStep) {
      case "basics": return <BasicsStep />,
      case "experience":
        return <ExperienceStep />,
      case "education":
        return <EducationStep />,
      case "skills":
        return <SkillsStep />,
=======
  SelectValue} from &quot;@/components/ui/select&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { ChevronRight, Plus, Zap, Trash2 } from &quot;lucide-react&quot;;

type ResumeStep = &quot;basics&quot; | &quot;experience&quot; | &quot;education&quot; | &quot;skills&quot;;

export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>(&quot;basics&quot;);
  
  const renderStepContent = () => {
    switch (currentStep) {
      case &quot;basics&quot;:
        return <BasicsStep />;
      case &quot;experience&quot;:
        return <ExperienceStep />;
      case &quot;education&quot;:
        return <EducationStep />;
      case &quot;skills&quot;:
        return <SkillsStep />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      default:
        return <BasicsStep />
    }
  },
  
  return (
    <div className=&quot;space-y-6 px-4 pb-24&quot;>
      <div className=&quot;flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar&quot;>
        <Button
          variant={currentStep === &quot;basics&quot; ? &quot;default&quot; : &quot;outline&quot;}
          className=&quot;flex-1 rounded-full&quot;
          onClick={() => setCurrentStep(&quot;basics&quot;)}
        >
          Basics
        </Button>
        <Button
          variant={currentStep === &quot;experience&quot; ? &quot;default&quot; : &quot;outline&quot;}
          className=&quot;flex-1 rounded-full&quot;
          onClick={() => setCurrentStep(&quot;experience&quot;)}
        >
          Experience
        </Button>
        <Button
          variant={currentStep === &quot;education&quot; ? &quot;default&quot; : &quot;outline&quot;}
          className=&quot;flex-1 rounded-full&quot;
          onClick={() => setCurrentStep(&quot;education&quot;)}
        >
          Education
        </Button>
        <Button
          variant={currentStep === &quot;skills&quot; ? &quot;default&quot; : &quot;outline&quot;}
          className=&quot;flex-1 rounded-full&quot;
          onClick={() => setCurrentStep(&quot;skills&quot;)}
        >
          Skills
        </Button>
      </div>
      
      {renderStepContent()}
      
      <Button className=&quot;w-full flex gap-2&quot; size=&quot;lg&quot;>
        <Zap className=&quot;h-5 w-5&quot; /> Enhance with AI
      </Button>
      
      <Button variant=&quot;default&quot; className=&quot;w-full&quot; size=&quot;lg&quot;>
        Save & Preview
      </Button>
    </div>
  )
}

function BasicsStep() {
  return (
    <Card>
      <CardContent className=&quot;p-4 space-y-4&quot;>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;title&quot;>Resume Title</Label>
          <Input id=&quot;title&quot; placeholder=&quot;e.g. Senior Frontend Developer&quot; />
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;fullName&quot;>Full Name</Label>
          <Input id=&quot;fullName&quot; placeholder=&quot;Your full name&quot; />
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;email&quot;>Email Address</Label>
          <Input id=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;you@example.com&quot; />
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;phone&quot;>Phone Number</Label>
          <Input id=&quot;phone&quot; placeholder=&quot;Your phone number&quot; />
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;location&quot;>Location</Label>
          <Input id=&quot;location&quot; placeholder=&quot;City, Country&quot; />
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;summary&quot;>Professional Summary</Label>
          <Textarea 
            id=&quot;summary&quot; 
            placeholder=&quot;Write a brief summary about yourself&quot; 
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { Label } from "@/components/ui/label",;
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;
type ResumeStep = "basics" | "experience" | "education" | "skills",;
export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),;
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "basics": return <BasicsStep />,;
      case "experience":;
        return <ExperienceStep />,;
      case "education":;
        return <EducationStep />,;
      case "skills":;
        return <SkillsStep />,;
      default:;
        return <BasicsStep />;
    }
  },;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
        <Button;
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("basics")}
        >;
          Basics;
        </Button>;
        <Button;
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;
        <Button;
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("education")}
        >;
          Education;
        </Button>;
        <Button;
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("skills")}
        >;
          Skills;
        </Button>;
      </div>;
      {renderStepContent()}
;
      <Button className="w-full flex gap-2" size="lg">;
        <Zap className="h-5 w-5" /> Enhance with AI;
      </Button>;
      <Button variant="default" className="w-full" size="lg">;
        Save & Preview;
      </Button>;
    </div>;
  );
}
;
function BasicsStep() {;
  return (;
    <Card>;
      <CardContent className="p-4 space-y-4">;
        <div className="space-y-2">;
          <Label htmlFor="title">Resume Title</Label>;
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="fullName">Full Name</Label>;
          <Input id="fullName" placeholder="Your full name" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="email">Email Address</Label>;
          <Input id="email" type="email" placeholder="you@example.com" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="phone">Phone Number</Label>;
          <Input id="phone" placeholder="Your phone number" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="location">Location</Label>;
          <Input id="location" placeholder="City, Country" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="summary">Professional Summary</Label>;
          <Textarea;
            id="summary";
            placeholder="Write a brief summary about yourself";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            rows={4}
          />;
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD

function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: '1' }]),
  
  const addExperience = () => {
    const newId = (experiences.length + 1).toString(),
    setExperiences([...experiences, { id: newId }])
  },
  
  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
  },
  
  return (
    <div className=&quot;space-y-4&quot;>
      {experiences.map((exp, index) => (
        <Card key={exp.id}>
          <CardContent className=&quot;p-4 space-y-4&quot;>
            <div className=&quot;flex justify-between items-center&quot;>
              <h3 className=&quot;font-medium&quot;>Work Experience {index + 1}</h3>
              {experiences.length > 1 && (
                <Button 
                  variant=&quot;ghost&quot; 
                  size=&quot;icon&quot;
                  onClick={() => removeExperience(exp.id)}
                >
                  <Trash2 className=&quot;h-5 w-5 text-destructive&quot; />
                </Button>
              )}
            </div>
            
            <div className=&quot;space-y-2&quot;>
              <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
              <Input id={`title-${exp.id}`} placeholder=&quot;e.g. Frontend Developer&quot; />
            </div>
            <div className=&quot;space-y-2&quot;>
              <Label htmlFor={`company-${exp.id}`}>Company</Label>
              <Input id={`company-${exp.id}`} placeholder=&quot;Company name&quot; />
            </div>
            <div className=&quot;grid grid-cols-2 gap-3&quot;>
              <div className=&quot;space-y-2&quot;>
                <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                <Input id={`startDate-${exp.id}`} type=&quot;month&quot; />
              </div>
              <div className=&quot;space-y-2&quot;>
                <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                <Input id={`endDate-${exp.id}`} type=&quot;month&quot; placeholder=&quot;Present&quot; />
              </div>
            </div>
            <div className=&quot;space-y-2&quot;>
              <Label htmlFor={`description-${exp.id}`}>Description</Label>
              <Textarea 
                id={`description-${exp.id}`} 
                placeholder=&quot;Describe your responsibilities and achievements&quot; 
=======
;
function ExperienceStep() {;
  const [experiences, setExperiences] = useState([{ id: '1' }]),;
  const addExperience = () => {;
    const newId = (experiences.length + 1).toString(),;
    setExperiences([...experiences, { id: newId }]);
  },;
  const removeExperience = (id: string) => {;
    setExperiences(experiences.filter(exp => exp.id !== id));
  },;
  return (;
    <div className="space-y-4">;
      {experiences.map((exp, index) => (;
        <Card key={exp.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Work Experience {index + 1}</h3>;
              {experiences.length > 1 && (;
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => removeExperience(exp.id)}
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`title-${exp.id}`}>Job Title</Label>;
              <Input id={`title-${exp.id}`} placeholder="e.g. Frontend Developer" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`company-${exp.id}`}>Company</Label>;
              <Input id={`company-${exp.id}`} placeholder="Company name" />;
            </div>;
            <div className="grid grid-cols-2 gap-3">;
              <div className="space-y-2">;
                <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>;
                <Input id={`startDate-${exp.id}`} type="month" />;
              </div>;
              <div className="space-y-2">;
                <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>;
                <Input id={`endDate-${exp.id}`} type="month" placeholder="Present" />;
              </div>;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`description-${exp.id}`}>Description</Label>;
              <Textarea;
                id={`description-${exp.id}`} ;
                placeholder="Describe your responsibilities and achievements";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                rows={3}
              />;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
      
      <Button 
        variant=&quot;outline&quot; 
        className=&quot;w-full gap-2&quot; 
        onClick={addExperience}
      >
        <Plus className=&quot;h-4 w-4&quot; /> Add Another Experience
      </Button>
    </div>
  )
}

function EducationStep() {
  const [educations, setEducations] = useState([{ id: '1' }]),
  
  const addEducation = () => {
    const newId = (educations.length + 1).toString(),
    setEducations([...educations, { id: newId }])
  },
  
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id))
  },
  
  return (
    <div className=&quot;space-y-4&quot;>
      {educations.map((edu, index) => (
        <Card key={edu.id}>
          <CardContent className=&quot;p-4 space-y-4&quot;>
            <div className=&quot;flex justify-between items-center&quot;>
              <h3 className=&quot;font-medium&quot;>Education {index + 1}</h3>
              {educations.length > 1 && (
                <Button 
                  variant=&quot;ghost&quot; 
                  size=&quot;icon&quot;
                  onClick={() => removeEducation(edu.id)}
                >
                  <Trash2 className=&quot;h-5 w-5 text-destructive&quot; />
                </Button>
              )}
            </div>
            
            <div className=&quot;space-y-2&quot;>
              <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
              <Input id={`institution-${edu.id}`} placeholder=&quot;School or university name&quot; />
            </div>
            <div className=&quot;space-y-2&quot;>
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
              <Input id={`degree-${edu.id}`} placeholder=&quot;e.g. Bachelor of Science&quot; />
            </div>
            <div className=&quot;space-y-2&quot;>
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>
              <Input id={`fieldOfStudy-${edu.id}`} placeholder=&quot;e.g. Computer Science&quot; />
            </div>
            <div className=&quot;grid grid-cols-2 gap-3&quot;>
              <div className=&quot;space-y-2&quot;>
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>
                <Input id={`eduStartDate-${edu.id}`} type=&quot;month&quot; />
              </div>
              <div className=&quot;space-y-2&quot;>
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>
                <Input id={`eduEndDate-${edu.id}`} type=&quot;month&quot; placeholder=&quot;Present&quot; />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        variant=&quot;outline&quot; 
        className=&quot;w-full gap-2&quot; 
        onClick={addEducation}
      >
        <Plus className=&quot;h-4 w-4&quot; /> Add Another Education
      </Button>
    </div>
  )
}

function SkillsStep() {
  const [skills, setSkills] = useState([
<<<<<<< HEAD
    { id: '1', name: "", proficiency: "beginner" }
  ]),
  
  const addSkill = () => {
    const newId = (skills.length + 1).toString(),
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }])
  },
=======
    { id: '1', name: "&quot;, proficiency: &quot;beginner&quot; }
  ]);
  
  const addSkill = () => {
    const newId = (skills.length + 1).toString();
    setSkills([...skills, { id: newId, name: "&quot;, proficiency: &quot;beginner&quot; }]);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  },
  
  const updateSkill = (id: string, field: string, value: string) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ))
  },
  
  return (
    <div className=&quot;space-y-4&quot;>
      <Card>
        <CardContent className=&quot;p-4&quot;>
          <div className=&quot;space-y-4&quot;>
            {skills.map((skill) => (
              <div key={skill.id} className=&quot;flex items-center gap-2&quot;>
                <Input
                  placeholder=&quot;Skill (e.g. JavaScript, Figma)&quot;
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, &quot;name&quot;, e.target.value)}
                  className=&quot;flex-1&quot;
                />
                <Select
                  value={skill.proficiency}
                  onValueChange={(value) => updateSkill(skill.id, &quot;proficiency&quot;, value)}
                >
                  <SelectTrigger className=&quot;w-[130px]&quot;>
                    <SelectValue placeholder=&quot;Level&quot; />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value=&quot;beginner&quot;>Beginner</SelectItem>
                    <SelectItem value=&quot;intermediate&quot;>Intermediate</SelectItem>
                    <SelectItem value=&quot;advanced&quot;>Advanced</SelectItem>
                    <SelectItem value=&quot;expert&quot;>Expert</SelectItem>
                  </SelectContent>
                </Select>
                {skills.length > 1 && (
                  <Button
                    variant=&quot;ghost&quot;
                    size=&quot;icon&quot;
                    onClick={() => removeSkill(skill.id)}
                  >
                    <Trash2 className=&quot;h-4 w-4 text-destructive&quot; />
                  </Button>
=======
;
      <Button;
        variant="outline";
        className="w-full gap-2";
        onClick={addExperience}
      >;
        <Plus className="h-4 w-4" /> Add Another Experience;
      </Button>;
    </div>;
  );
}
;
function EducationStep() {;
  const [educations, setEducations] = useState([{ id: '1' }]),;
  const addEducation = () => {;
    const newId = (educations.length + 1).toString(),;
    setEducations([...educations, { id: newId }]);
  },;
  const removeEducation = (id: string) => {;
    setEducations(educations.filter(edu => edu.id !== id));
  },;
  return (;
    <div className="space-y-4">;
      {educations.map((edu, index) => (;
        <Card key={edu.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Education {index + 1}</h3>;
              {educations.length > 1 && (;
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => removeEducation(edu.id)}
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`institution-${edu.id}`}>Institution</Label>;
              <Input id={`institution-${edu.id}`} placeholder="School or university name" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>;
              <Input id={`degree-${edu.id}`} placeholder="e.g. Bachelor of Science" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>;
              <Input id={`fieldOfStudy-${edu.id}`} placeholder="e.g. Computer Science" />;
            </div>;
            <div className="grid grid-cols-2 gap-3">;
              <div className="space-y-2">;
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>;
                <Input id={`eduStartDate-${edu.id}`} type="month" />;
              </div>;
              <div className="space-y-2">;
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>;
                <Input id={`eduEndDate-${edu.id}`} type="month" placeholder="Present" />;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
;
      <Button;
        variant="outline";
        className="w-full gap-2";
        onClick={addEducation}
      >;
        <Plus className="h-4 w-4" /> Add Another Education;
      </Button>;
    </div>;
  );
}
;
function SkillsStep() {;
  const [skills, setSkills] = useState([;
    { id: '1', name: "", proficiency: "beginner" }
  ]),;
  const addSkill = () => {;
    const newId = (skills.length + 1).toString(),;
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }]);
  },;
  const removeSkill = (id: string) => {;
    setSkills(skills.filter(skill => skill.id !== id));
  };
  const updateSkill = (id: string, field: string, value: string) => {;
    setSkills(skills.map(skill =>;
      skill.id === id ? { ...skill, [field]: value } : skill;
    ));
  };
  return (;
    <div className="space-y-4">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
            {skills.map((skill) => (;
              <div key={skill.id} className="flex items-center gap-2">;
                <Input;
                  placeholder="Skill (e.g. JavaScript, Figma)";
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  className="flex-1";
                />;
                <Select;
                  value={skill.proficiency}
                  onValueChange={(value) => updateSkill(skill.id, "proficiency", value)}
                >;
                  <SelectTrigger className="w-[130px]">;
                    <SelectValue placeholder="Level" />;
                  </SelectTrigger>;
                  <SelectContent>;
                    <SelectItem value="beginner">Beginner</SelectItem>;
                    <SelectItem value="intermediate">Intermediate</SelectItem>;
                    <SelectItem value="advanced">Advanced</SelectItem>;
                    <SelectItem value="expert">Expert</SelectItem>;
                  </SelectContent>;
                </Select>;
                {skills.length > 1 && (;
                  <Button;
                    variant="ghost";
                    size="icon";
                    onClick={() => removeSkill(skill.id)}
                  >;
                    <Trash2 className="h-4 w-4 text-destructive" />;
                  </Button>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
              </div>;
            ))}
<<<<<<< HEAD
            
            <Button 
              variant=&quot;outline&quot; 
              className=&quot;w-full gap-2&quot; 
              onClick={addSkill}
            >
              <Plus className=&quot;h-4 w-4&quot; /> Add Another Skill
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className=&quot;p-4&quot;>
          <div className=&quot;space-y-2&quot;>
            <Label>Skill Categories</Label>
            <div className=&quot;grid grid-cols-2 gap-2&quot;>
              <Button variant=&quot;outline&quot; className=&quot;justify-start&quot;>Development</Button>
              <Button variant=&quot;outline&quot; className=&quot;justify-start&quot;>Design</Button>
              <Button variant=&quot;outline&quot; className=&quot;justify-start&quot;>Marketing</Button>
              <Button variant=&quot;outline&quot; className=&quot;justify-start&quot;>Business</Button>
              <Button variant=&quot;outline&quot; className=&quot;justify-start&quot;>Data Analysis</Button>
              <Button variant=&quot;outline&quot; className=&quot;justify-start&quot;>Languages</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
=======
;
            <Button;
              variant="outline";
              className="w-full gap-2";
              onClick={addSkill}
            >;
              <Plus className="h-4 w-4" /> Add Another Skill;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
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
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;