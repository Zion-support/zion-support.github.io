<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {ChevronRight, Plus, Zap, Trash2} from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8


<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type ResumeStep = "basics" | "experience" | "education" | "skills";
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
import { Label } from "@/components/ui/label",
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

type ResumeStep = "basics" | "experience" | "education" | "skills",

export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const renderStepContent = () => {
    switch (currentStep) {
<<<<<<< HEAD
      case "basics": return <BasicsStep />,
      case "experience":
        return <ExperienceStep />,
      case "education":
        return <EducationStep />,
      case "skills":
        return <SkillsStep />,
      default:
        return <BasicsStep />
    }
  }
  },
  
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
  )
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
          <Input id="location" placeholder="City, Country" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Textarea
            id="summary"
            placeholder="Write a brief summary about yourself"
          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  )
}
          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




type ResumeStep = "basics" | "experience" | "education" | "skills",


export function MobileResumeBuilder() {
<<<<<<< HEAD
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),

  
  const renderStepContent = () => {
    switch (currentStep) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

  const renderStepContent = () => {;
    switch (currentStep) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Label } from '@/components / ui / label';
import { ChevronRight, Plus, Zap, Trash2 } from './lucide-react';
;
type ResumeStep = "basics" | "experience" | "education" | "skills";
;
export /**
 * MobileResumeBuilder - Function description
 */
function MobileResumeBuilder() {
  const [current_step, setCurrentStep] = useState < ResumeStep>("basics");
;
  const renderStepContent = () =>: any {
    switch (current_step) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "basics": return <BasicsStep />;
      case "experience":;
=======
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

  const renderStepContent = () => {
    switch (currentStep) {
      case "basics":
        return <BasicsStep />;
      case "experience":
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        return <ExperienceStep />;
      case "education":;
        return <EducationStep />;
      case "skills":;
        return <SkillsStep />;
      default:
        return <BasicsStep />;
    }
<<<<<<< HEAD

  };

  return (
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          onClick={() => setCurrentStep("basics")}
<<<<<<< HEAD
        >
          Basics
        </Button>
=======
        >;
          Basics;
        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
=======
        <Button;
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          onClick={() => setCurrentStep("experience")}
<<<<<<< HEAD
        >
          Experience
        </Button>
=======
        >;
          Experience;
        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
=======
        <Button;
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          onClick={() => setCurrentStep("education")}
<<<<<<< HEAD
        >
          Education
        </Button>
=======
        >;
          Education;
        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Button
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        >
          Skills
        </Button>
      </div>
<<<<<<< HEAD
      {renderStepContent()}
      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>
      <Button variant="default" className="w-full" size="lg">
        Save & Preview
      </Button>
    </div>
  )
=======

=======
        >;
          Education;
        </Button>;
        <Button;
          variant={currentStep === "skills" ? "default" :"outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("skills")}
        <Button;
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("skills")}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >;
          Skills;
        </Button>;
      </div>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
      ;
      {renderStepContent()}
      ;
      <Button className="w-full flex gap-2" size="lg">;
        <Zap className="h-5 w-5" /> Enhance with AI;
      </Button>;
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {renderStepContent()}

      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
      </Button>

      <Button variant="default" className="w-full" size="lg">
        Save & Preview
      </Button>
    </div>
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
function BasicsStep() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
          <Input id="location" placeholder="City, Country" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
<<<<<<< HEAD
=======
=======
  ),;
}
;
function BasicsStep() {;
  return (;
  );
}
;
function BasicsStep() {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card>;
      <CardContent className="p-4 space-y-4">;
        <div className="space-y-2">;
          <Label htmlFor="title">Resume Title</Label>;
<<<<<<< HEAD
          <Input id="title" placeholder="e && e.g. Senior Frontend Developer" />;
=======
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />;
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="fullName">Full Name</Label>;
          <Input id="fullName" placeholder="Your full name" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="email">Email Address</Label>;
<<<<<<< HEAD
          <Input id="email" type="email" placeholder="you@example && example.com" />;
=======
          <Input id="email" type="email" placeholder="you@example.com" />;
          <Input id="email" type="email" placeholder="you@example.com" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
          <Textarea
            id="summary" 
            placeholder="Write a brief summary about yourself" 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
          <Textarea;
            id="summary";
            placeholder="Write a brief summary about yourself";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
          <Textarea
            id="summary"
            placeholder="Write a brief summary about yourself"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: "1" }]);

  const addExperience = () => {
    const newId = (experiences.length + 1).toString();
    setExperiences([...experiences, { id: newId }]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space - y-6 px - 4 pb - 24">;
      <div className="flex justify - between px - 1 py - 2 overflow - x-auto hide - scrollbar">;
        <Button;
          variant={current_step === "basics" ? "default" : "outline"}
          className="flex - 1 rounded - full";
          on_click={() => setCurrentStep ("basics")}
        >;
          Basics;
        </Button>;
        <Button;
          variant={current_step === "experience" ? "default" : "outline"}
          className="flex - 1 rounded - full";
          on_click={() => setCurrentStep ("experience")}
        >;
          Experience;
        </Button>;
        <Button;
          variant={current_step === "education" ? "default" : "outline"}
          className="flex - 1 rounded - full";
          on_click={() => setCurrentStep ("education")}
        >;
          Education;
        </Button>;
        <Button;
          variant={current_step === "skills" ? "default" : "outline"}
          className="flex - 1 rounded - full";
          on_click={() => setCurrentStep ("skills")}
        >;
          Skills;
        </Button>;
      </div>;
      {renderStepContent ()}
      <Button className="w - full flex gap - 2" size="lg">;
        <Zap className="h - 5 w - 5" /> Enhance with AI;
      </Button>;
      <Button variant="default" className="w - full" size="lg">;
        Save & Preview;
      </Button>;
    </div>);
}
/**
 * BasicsStep - Function description
 */
function BasicsStep() {
  return (
    <Card>;
      <CardContent className="p - 4 space - y-4">;
        <div className="space - y-2">;
          <Label html_for="title">Resume Title</Label>;
          <Input id="title" placeholder="e.g. Senior Frontend Developer" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="full_name">Full Name</Label>;
          <Input id="full_name" placeholder="Your full name" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="email">Email Address</Label>;
          <Input id="email" type="email" placeholder="you@example.com" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="phone">Phone Number</Label>;
          <Input id="phone" placeholder="Your phone number" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="location">Location</Label>;
          <Input id="location" placeholder="City, Country" />;
        </div>;
        <div className="space - y-2">;
          <Label html_for="summary">Professional Summary</Label>;
          <Textarea;
            id="summary";
            placeholder="Write a brief summary about yourself";
            rows={4}
          />;
        </div>;
      </CardContent>;
    </Card>);
}
/**
 * ExperienceStep - Function description
 */
function ExperienceStep() {
  const [experiences, set_experiences] = useState ([{ id: '1' }]),
  const add_experience = () =>: any {
    const new_id = (experiences.length + 1).to_string ();
    set_experiences ([...experiences, { id: new_id }]);
  }
;
  const remove_experience = (id: string) =>: any {
    set_experiences (experiences.filter (exp => exp.id !== id));
  }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="space - y-4">;
      {experiences.map ((exp, index) => (
        <Card key={exp.id}>;
          <CardContent className="p - 4 space - y-4">;
            <div className="flex justify - between items - center">;
              <h3 className="font - medium">Work Experience {index + 1}</h3>;
              {experiences.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeExperience(exp && exp.id)}
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
              <Input
                id={`title-${exp.id}`}
                placeholder="e.g. Frontend Developer"
              />
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
                <Input
                  id={`endDate-${exp.id}`}
                  type="month"
                  placeholder="Present"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`description-${exp.id}`}>Description</Label>
<<<<<<< HEAD

                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}
              <Textarea 
                id={`description-${exp.id}`} 
                placeholder="Describe your responsibilities and achievements" 
=======
              <Textarea
                id={`description-${exp.id}`}
                placeholder="Describe your responsibilities and achievements"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        variant="outline"
        className="w-full gap-2"
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      
      <Button 
        variant="outline" 
        className="w-full gap-2" 
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        onClick={addExperience}
      >
        <Plus className="h-4 w-4" /> Add Another Experience
      </Button>
    </div>
  );
}
function EducationStep() {
  const [educations, setEducations] = useState([{ id: "1" }]);

  const addEducation = () => {
<<<<<<< HEAD
    const newId = (educations.length + 1).toString();
    setEducations([...educations, { id: newId }]);
  };

  const removeEducation = (id: string) => {
<<<<<<< HEAD
    setEducations(educations.filter(edu => edu.id !== id))
  }
  },
  
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id))
  },
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space-y-4">
      {educations.map((edu, index) => (
        <Card key={edu.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education {index + 1}</h3>
              {educations.length > 1 && (
                <Button
                  variant="ghost"
        </Card>))}
      <Button;
        variant="outline";
        className="w - full gap - 2";
        on_click={add_experience}
      >;
        <Plus className="h - 4 w - 4" /> Add Another Experience;
      </Button>;
    </div>);
}
/**
 * EducationStep - Function description
 */
function EducationStep() {
  const [educations, set_educations] = useState ([{ id: '1' }]),
  const add_education = () =>: any {
    const new_id = (educations.length + 1).to_string ();
    set_educations ([...educations, { id: new_id }]);
  }
;
  const remove_education = (id: string) =>: any {
    set_educations (educations.filter (edu => edu.id !== id));
  }
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    setEducations(educations.filter((edu) => edu.id !== id));
  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
    <div className="space - y-4">;
      {educations.map ((edu, index) => (
        <Card key={edu.id}>;
          <CardContent className="p - 4 space - y-4">;
            <div className="flex justify - between items - center">;
              <h3 className="font - medium">Education {index + 1}</h3>;
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
              <Input
                id={`institution-${edu.id}`}
                placeholder="School or university name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
              <Input
                id={`degree-${edu.id}`}
                placeholder="e.g. Bachelor of Science"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</Label>
              <Input
                id={`fieldOfStudy-${edu.id}`}
                placeholder="e.g. Computer Science"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>
                <Input id={`eduStartDate-${edu.id}`} type="month" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>
                <Input
                  id={`eduEndDate-${edu.id}`}
                  type="month"
                  placeholder="Present"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" className="w-full gap-2" onClick={addEducation}>
        <Plus className="h-4 w-4" /> Add Another Education
      </Button>
    </div>
  );
}

function SkillsStep() {
  const [skills, setSkills] = useState([
    { id: "1", name: "", proficiency: "beginner" },
  ]);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  ]),
  

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const addSkill = () => {
    const newId = (skills.length + 1).toString();
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }]);
  };

<<<<<<< HEAD
  },
  
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  },
  


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const removeSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const updateSkill = (id: string, field: string, value: string) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill,
      ),
    );
  };

<<<<<<< HEAD
=======
  }

  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <Input
                  placeholder="Skill (e.g. JavaScript, Figma)"
                  value={skill.name}
                  onChange={(e) =>
                    updateSkill(skill.id, "name", e.target.value)
                  }
                  className="flex-1"
                />
                <Select
                  value={skill.proficiency}
                  onValueChange={(value) =>
                    updateSkill(skill.id, "proficiency", value)
                  }
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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                >
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              )}
<<<<<<< HEAD

            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`degree-${edu && edu.id}`}>Degree</Label>;
              <Input id={`degree-${edu && edu.id}`} placeholder="e && e.g. Bachelor of Science" />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor={`fieldOfStudy-${edu && edu.id}`}>Field of Study</Label>;
              <Input id={`fieldOfStudy-${edu && edu.id}`} placeholder="e && e.g. Computer Science" />;
            </div>;
            <div className="grid grid-cols-2 gap-3">;
              <div className="space-y-2">;
                <Label htmlFor={`eduStartDate-${edu && edu.id}`}>Start Date</Label>;
                <Input id={`eduStartDate-${edu && edu.id}`} type="month" />;
              </div>;
              <div className="space-y-2">;
                <Label htmlFor={`eduEndDate-${edu && edu.id}`}>End Date</Label>;
                <Input id={`eduEndDate-${edu && edu.id}`} type="month" placeholder="Present" />;
=======
            ;
            <div className="space-y-2">;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD

      <Button
        variant="outline" 
        className="w-full gap-2" 
        onClick={addEducation}>;
=======
;
      <Button;
        variant="outline";
        className="w-full gap-2";
        onClick={addEducation}
      >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <Plus className="h-4 w-4" /> Add Another Education;
      </Button>;
    </div>;
  );
}
<<<<<<< HEAD

function SkillsStep() {;
  const [skills, setSkills] = useState([;
    { id: '1', name: "", proficiency: "beginner" }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ]);

  return (
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <div className="space-y-4">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {skills && skills.map((skill) => (;
              <div key={skill && skill.id} className="flex items-center gap-2">;
                <Input
                  placeholder="Skill (e && e.g. JavaScript, Figma)"
                  value={skill && skill.name}
                  onChange={(e) => updateSkill(skill && skill.id, "name", e && e.target.value)}
                  className="flex-1";
                />;
                <Select
                  value={skill && skill.proficiency}
                  onValueChange={(value) => updateSkill(skill && skill.id, "proficiency", value)}
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;
  const add_skill = () =>: any {
    const new_id = (skills.length + 1).to_string ();
    set_skills ([...skills, { id: new_id, name: "", proficiency: "beginner" }]);
  }
;
  const remove_skill = (id: string) =>: any {
    set_skills (skills.filter (skill => skill.id !== id));
  }
;
  const update_skill = (id: string, field: string, value: string) =>: any {
    set_skills (skills.map (skill =>;
      skill.id === id ? { ...skill, [field]: value } : skill));
  }
;
  return (
    <div className="space - y-4">;
      <Card>;
        <CardContent className="p - 4">;
          <div className="space - y-4">;
            {skills.map ((skill) => (
              <div key={skill.id} className="flex items - center gap - 2">;
                <Input;
                  placeholder="Skill (e.g. JavaScript, Figma)";
                  value={skill.name}
                  onValueChange={(value) => update_skill (skill.id, "proficiency", value)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                )}
              </div>;
            ))}

=======
                )}
              </div>;
            ))}
<<<<<<< HEAD

<<<<<<< HEAD

=======
            {skills.map((skill) => (;
              <div key={skill.id} className="flex items-center gap-2">;
                <Input;
                  placeholder="Skill (e.g. JavaScript, Figma)";
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}

                  className="flex-1"
                />
                <Select
                  value={skill.proficiency}
                  onValueChange={(value) => updateSkill(skill.id, "proficiency", value)}
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
                  >;
                    <Trash2 className="h-4 w-4 text-destructive" />;
                  </Button>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                )}
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full gap-2"
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            <Button
              variant="outline"
              className="w-full gap-2"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            
            <Button 
              variant="outline" 
              className="w-full gap-2" 
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
            <Button
              variant="outline"
              className="w-full gap-2"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
              <Button variant="outline" className="justify-start">
                Development
              </Button>
              <Button variant="outline" className="justify-start">
                Design
              </Button>
              <Button variant="outline" className="justify-start">
                Marketing
              </Button>
              <Button variant="outline" className="justify-start">
                Business
              </Button>
              <Button variant="outline" className="justify-start">
                Data Analysis
              </Button>
              <Button variant="outline" className="justify-start">
                Languages
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
case "skills": default: return <BasicsStep /> 
}

}

};
return (<div className="space-y-6 px-4 pb-24" > <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar" > <Button variant= {
  currentStep === "basics" ? "default" : "outline" 
}className="flex-1 rounded-full" onClick= {
  () => setCurrentStep ("basics") 
}renderStepContent () 
}<Button className="w-full flex gap-2" size="lg" > <Zap className="h-5 w-5" /> Enhance with AI </Button> <Button variant="default" className="w-full" size="lg" > Save & Preview </Button> </div>) 
}function BasicsStep () {
  return (<Card> <CardContent className="p-4 space-y-4" > <div className="space-y-2" > <Label htmlFor="title" >Resume Title</Label> <Input id="title" placeholder="e.g. Senior Frontend Developer" /> </div> <div className="space-y-2" > <Label htmlFor="fullName" >Full Name</Label> <Input id="fullName" placeholder="Your full name" /> </div> <div className="space-y-2" > <Label htmlFor="email" >Email Address</Label> <Input id="email" type="email" placeholder="you@example.com" /> </div> <div className="space-y-2" > <Label htmlFor="phone" >Phone Number</Label> <Input id="phone" placeholder="Your phone number" /> </div> </div> <div className="space-y-2" > <Label htmlFor="summary" >Professional Summary</Label> <Textarea id="summary" placeholder="Write a brief summary about yourself" rows= {
  4 
}/> </div> </CardContent> </Card>) 
}<Button variant="ghost" size="icon" onClick= {
  () => removeExperience (exp.id) 
}> <Trash2 className="h-5 w-5 text-destructive" /> </Button>) 
}</div> /> </div> </CardContent> </Card>) ) 
}<Button > <Plus className="h-4 w-4" /> Add Another Experience </Button> </div>) 
}<Button variant="ghost" size="icon" onClick= {
  () => removeEducation (edu.id) 
}> <Trash2 className="h-5 w-5 text-destructive" /> </Button>) 
}</div> </div> </div> </CardContent> </Card>) ) 
}<Button > <Plus className="h-4 w-4" /> Add Another Education </Button> </div>) 
}
};
  () => removeSkill (skill.id) 
}> <Trash2 className="h-4 w-4 text-destructive" /> </Button>) 
}</div>) ) 
}<Button > <Plus className="h-4 w-4" /> Add Another Skill </Button> </div> </CardContent> </Card> <Card> <CardContent className="p-4" > <div className="space-y-2" > <Label>Skill Categories</Label> <div className="grid grid-cols-2 gap-2" > <Button variant="outline" className="justify-start" >Development</Button> <Button variant="outline" className="justify-start" >Design</Button> <Button variant="outline" className="justify-start" >Marketing</Button> <Button variant="outline" className="justify-start" >Business</Button> <Button variant="outline" className="justify-start" >Data Analysis</Button> <Button variant="outline" className="justify-start" >Languages</Button> </div> </div> </CardContent> </Card> </div>) 
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
}
;
;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </div>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
