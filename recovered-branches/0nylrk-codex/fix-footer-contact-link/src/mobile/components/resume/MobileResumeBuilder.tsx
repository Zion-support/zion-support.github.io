
<<<<<<< HEAD
import React{ useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
  SelectValue} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronRightPlusZapTrash2 } from "lucide-react";
=======
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616

type ResumeStep = "basics" | "experience" | "education" | "skills";

export function MobileResumeBuilder() {
<<<<<<< HEAD
  const [currentStepsetCurrentStep] = useState<ResumeStep>("basics");
=======
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");
>>>>>>> origin/auto/autonomy-17186719616
  
  const renderStepContent = () => {
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
        return <BasicsStep />;
    }
  };
  
  return (
    <div className="space-y-6 px-4 pb-24">
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">
        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}
        >
          Basics
        </Button>
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
        >
          Experience
        </Button>
        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}
        >
          Education
        </Button>
        <Button
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
        >
          Skills
        </Button>
      </div>
      
      {renderStepContent()}
      
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>
      
      <Button variant="default" className="w-full" size="lg">
        Save & Preview
      </Button>
    </div>
  );
}

function BasicsStep() {
  return (
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
<<<<<<< HEAD
          <Input id="location" placeholder="CityCountry" />
=======
          <Input id="location" placeholder="City, Country" />
>>>>>>> origin/auto/autonomy-17186719616
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

function ExperienceStep() {
<<<<<<< HEAD
  const [experiencesetExperiences] = useState([{ id: '1' }]);
  
  const addExperience = () => {
    const newId = (experiences.length + 1).toString();
    setExperiences([...experiences{ id: newId }]);
=======
  const [experiences, setExperiences] = useState([{ id: '1' }]);
  
  const addExperience = () => {
    const newId = (experiences.length + 1).toString();
    setExperiences([...experiences, { id: newId }]);
>>>>>>> origin/auto/autonomy-17186719616
  };
  
  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };
  
  return (
    <div className="space-y-4">
<<<<<<< HEAD
      {experiences.map((expindex) => (
=======
      {experiences.map((exp, index) => (
>>>>>>> origin/auto/autonomy-17186719616
        <Card key={exp.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Work Experience {index + 1}</h3>
              {experiences.length > 1 && (
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
              <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
              <Input id={`title-${exp.id}`} placeholder="e.g. Frontend Developer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`company-${exp.id}`}>Company</Label>
              <Input id={`company-${exp.id}`} placeholder="Company name" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                <Input id={`startDate-${exp.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                <Input id={`endDate-${exp.id}`} type="month" placeholder="Present" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`description-${exp.id}`}>Description</Label>
              <Textarea 
                id={`description-${exp.id}`} 
                placeholder="Describe your responsibilities and achievements" 
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        variant="outline" 
        className="w-full gap-2" 
        onClick={addExperience}
      >
        <Plus className="h-4 w-4" /> Add Another Experience
      </Button>
    </div>
  );
}

function EducationStep() {
<<<<<<< HEAD
  const [educationsetEducations] = useState([{ id: '1' }]);
  
  const addEducation = () => {
    const newId = (educations.length + 1).toString();
    setEducations([...educations{ id: newId }]);
=======
  const [educations, setEducations] = useState([{ id: '1' }]);
  
  const addEducation = () => {
    const newId = (educations.length + 1).toString();
    setEducations([...educations, { id: newId }]);
>>>>>>> origin/auto/autonomy-17186719616
  };
  
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };
  
  return (
    <div className="space-y-4">
<<<<<<< HEAD
      {educations.map((eduindex) => (
=======
      {educations.map((edu, index) => (
>>>>>>> origin/auto/autonomy-17186719616
        <Card key={edu.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education {index + 1}</h3>
              {educations.length > 1 && (
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
              <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
              <Input id={`institution-${edu.id}`} placeholder="School or university name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
              <Input id={`degree-${edu.id}`} placeholder="e.g. Bachelor of Science" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>
              <Input id={`fieldOfStudy-${edu.id}`} placeholder="e.g. Computer Science" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>
                <Input id={`eduStartDate-${edu.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>
                <Input id={`eduEndDate-${edu.id}`} type="month" placeholder="Present" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        variant="outline" 
        className="w-full gap-2" 
        onClick={addEducation}
      >
        <Plus className="h-4 w-4" /> Add Another Education
      </Button>
    </div>
  );
}

function SkillsStep() {
<<<<<<< HEAD
  const [skillsetSkills] = useState([
    { id: '1'name: ""proficiency: "beginner" }
=======
  const [skills, setSkills] = useState([
    { id: '1', name: "", proficiency: "beginner" }
>>>>>>> origin/auto/autonomy-17186719616
  ]);
  
  const addSkill = () => {
    const newId = (skills.length + 1).toString();
<<<<<<< HEAD
    setSkills([...skills{ id: newIdname: ""proficiency: "beginner" }]);
=======
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }]);
>>>>>>> origin/auto/autonomy-17186719616
  };
  
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };
  
<<<<<<< HEAD
  const updateSkill = (id: stringfield: stringvalue: string) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill[field]: value } : skill
=======
  const updateSkill = (id: string, field: string, value: string) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
>>>>>>> origin/auto/autonomy-17186719616
    ));
  };
  
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <Input
<<<<<<< HEAD
                  placeholder="Skill (e.g. JavaScriptFigma)"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id"name"e.target.value)}
=======
                  placeholder="Skill (e.g. JavaScript, Figma)"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
>>>>>>> origin/auto/autonomy-17186719616
                  className="flex-1"
                />
                <Select
                  value={skill.proficiency}
<<<<<<< HEAD
                  onValueChange={(value) => updateSkill(skill.id"proficiency"value)}
=======
                  onValueChange={(value) => updateSkill(skill.id, "proficiency", value)}
>>>>>>> origin/auto/autonomy-17186719616
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
                {skills.length > 1 && (
                  <Button
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
              onClick={addSkill}
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
