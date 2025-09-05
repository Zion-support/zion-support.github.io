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
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react'
=======
import React, {_useState} from "react";
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type ResumeStep = "basics" | "experience" | "education" | "skills",

<<<<<<< HEAD
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),
=======
export function MobileResumeBuilder() {_const [currentStep, _setCurrentStep] = useState<ResumeStep>("basics");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _renderStepContent = () => {
    switch (currentStep) {
      case "basics": return <BasicsStep />,
      case "experience":
        return <ExperienceStep />,
      case "education":
        return <EducationStep />,
      case "skills":
<<<<<<< HEAD
        return <SkillsStep />,
=======
  SelectValue} from &quot;@/components/ui/select&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react'

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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Basics
        </Button>
        <Button
<<<<<<< HEAD
          variant={currentStep === &quot;experience&quot; ? &quot;default&quot; : &quot;outline&quot;}
          className=&quot;flex-1 rounded-full&quot;
          onClick={() => setCurrentStep(&quot;experience&quot;)}
=======
          variant={_currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={_() => setCurrentStep("experience")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Experience
        </Button>
        <Button
<<<<<<< HEAD
          variant={currentStep === &quot;education&quot; ? &quot;default&quot; : &quot;outline&quot;}
          className=&quot;flex-1 rounded-full&quot;
          onClick={() => setCurrentStep(&quot;education&quot;)}
=======
          variant={_currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={_() => setCurrentStep("education")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Education
        </Button>
        <Button
<<<<<<< HEAD
          variant={currentStep === &quot;skills&quot; ? &quot;default&quot; : &quot;outline&quot;}
          className=&quot;flex-1 rounded-full&quot;
          onClick={() => setCurrentStep(&quot;skills&quot;)}
=======
          variant={_currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={_() => setCurrentStep("skills")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Skills
        </Button>
      </div>
      
      {_renderStepContent()}
      
      <Button className=&quot;w-full flex gap-2&quot; size=&quot;lg&quot;>
        <Zap className=&quot;h-5 w-5&quot; /> Enhance with AI
      </Button>
      
      <Button variant=&quot;default&quot; className=&quot;w-full&quot; size=&quot;lg&quot;>
        Save & Preview
      </Button>
    </div>
  )
}

function BasicsStep() {_return (
    <Card>
      <CardContent className=&quot;p-4 space-y-4&quot;>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;title&quot;>Resume Title</Label>
          <Input id=&quot;title&quot; name=&quot;title&quot; placeholder=&quot;e.g. Senior Frontend Developer&quot; />
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;fullName&quot;>Full Name</Label>
          <Input id=&quot;fullName&quot; name=&quot;fullName&quot; placeholder=&quot;Your full name&quot; autoComplete=&quot;name&quot; />
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;email&quot;>Email Address</Label>
          <Input id=&quot;email&quot; name=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;you@example.com&quot; autoComplete=&quot;email&quot; />
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;phone&quot;>Phone Number</Label>
          <Input id=&quot;phone&quot; name=&quot;phone&quot; placeholder=&quot;Your phone number&quot; autoComplete=&quot;tel&quot; />
        </div>
<<<<<<< HEAD
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;location&quot;>Location</Label>
          <Input id=&quot;location&quot; name=&quot;location&quot; placeholder=&quot;City, Country&quot; autoComplete=&quot;address-level2&quot; />
=======
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" placeholder="City, _Country" autoComplete="address-level2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        <div className=&quot;space-y-2&quot;>
          <Label htmlFor=&quot;summary&quot;>Professional Summary</Label>
          <Textarea 
            id=&quot;summary&quot; 
            placeholder=&quot;Write a brief summary about yourself&quot; 
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  )
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Button
                  variant=&quot;ghost&quot;
                  size=&quot;icon&quot;
                  onClick={() => removeExperience(exp.id)}
                  aria-label=&quot;Remove experience&quot;
                >
                  <Trash2 className=&quot;h-5 w-5 text-destructive&quot; />
                </Button>
              )}
            </div>
            
<<<<<<< HEAD
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
                rows={3}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
<<<<<<< HEAD
        variant=&quot;outline&quot; 
        className=&quot;w-full gap-2&quot; 
        onClick={addExperience}
=======
        variant="outline" 
        className="w-full gap-2" 
        onClick={_addExperience}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <Plus className=&quot;h-4 w-4&quot; /> Add Another Experience
      </Button>
    </div>
  )
}

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Button
                  variant=&quot;ghost&quot;
                  size=&quot;icon&quot;
                  onClick={() => removeEducation(edu.id)}
                  aria-label=&quot;Remove education&quot;
                >
                  <Trash2 className=&quot;h-5 w-5 text-destructive&quot; />
                </Button>
              )}
            </div>
            
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
<<<<<<< HEAD
        variant=&quot;outline&quot; 
        className=&quot;w-full gap-2&quot; 
        onClick={addEducation}
=======
        variant="outline" 
        className="w-full gap-2" 
        onClick={_addEducation}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <Plus className=&quot;h-4 w-4&quot; /> Add Another Education
      </Button>
    </div>
  )
}

<<<<<<< HEAD
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
=======
function SkillsStep() {_const [skills, _setSkills] = useState([
    { id: '1', _name: "", _proficiency: "beginner"}
  ]);
  
  const _addSkill = () => {_const _newId = (skills.length + 1).toString();
    setSkills([...skills, _{ id: newId, _name: "", _proficiency: "beginner"}]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                {skills.length > 1 && (
                  <Button
                    variant=&quot;ghost&quot;
                    size=&quot;icon&quot;
=======
                {_skills.length > 1 && (_<Button
                    variant="ghost"
                    size="icon"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    onClick={() => removeSkill(skill.id)}
                    aria-label=&quot;Remove skill&quot;
                  >
                    <Trash2 className=&quot;h-4 w-4 text-destructive&quot; />
                  </Button>
                )}
              </div>
            ))}
            
            <Button 
<<<<<<< HEAD
              variant=&quot;outline&quot; 
              className=&quot;w-full gap-2&quot; 
              onClick={addSkill}
=======
              variant="outline" 
              className="w-full gap-2" 
              onClick={_addSkill}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
}
