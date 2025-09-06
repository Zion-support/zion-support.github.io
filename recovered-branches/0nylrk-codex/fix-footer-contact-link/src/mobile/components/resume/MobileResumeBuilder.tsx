
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {ChevronRight, Plus, Zap, Trash2} from "lucide-react";
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

type ResumeStep = "basics" | "experience" | "education" | "skills",

export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),
  
  const renderStepContent = () => {
    switch (currentStep) {
  return (
    <div className="space-y-6 px-4 pb-24">
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">
        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"

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
;
type ResumeStep = "basics" | "experience" | "education" | "skills",;
;
export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),;
  ;
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "basics":return <BasicsStep />,;
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
  ;
  return (;
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
        <Button;
          variant={currentStep === "basics" ? "default" :"outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("basics")}
        >;
          Basics;
        </Button>;
        <Button;
          variant={currentStep === "experience" ? "default" :"outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;
        <Button;
          variant={currentStep === "education" ? "default" :"outline"}
          className="flex-1 rounded-full";
          onClick={() => setCurrentStep("education")}
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
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  )
}
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
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

  const renderStepContent = () => {;
    switch (currentStep) {;
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
      case "basics": return <BasicsStep />;
      case "experience":;
        return <ExperienceStep />;
      case "education":;
        return <EducationStep />;
      case "skills":;
        return <SkillsStep />;
      default:;
        return <BasicsStep />;
    }

  };



  },
  

  return (
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
export function MobileResumeBuilder() {;
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

  const renderStepContent = () => {;
    switch (currentStep) {;
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
      case "basics": return <BasicsStep />;
      case "experience":;
        return <ExperienceStep />;
      case "education":;
        return <EducationStep />;
      case "skills":;
        return <SkillsStep />;
      default:;
        return <BasicsStep />;
    }
  }
  return (
    <div className="space-y-6 px-4 pb-24">;
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">;
        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}
        >;
          Basics;
        </Button>;
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;
        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}
        >;
          Education;
        </Button>;
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}
            rows={4}
          />;
        </div>;
      </CardContent>;
    </Card>;
  );
}

function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: '1' }])
  const addExperience = () => {
    const newId = (experiences.length + 1).toString();
    setExperiences([...experiences, { id: newId }])
  return (
    <div className="space - y-4">;
      {experiences.map ((exp, index) => (
        <Card key={exp.id}>;
          <CardContent className="p - 4 space - y-4">;
            <div className="flex justify - between items - center">;
              <h3 className="font - medium">Work Experience {index + 1}</h3>;
              {experiences.length > 1 && (


function ExperienceStep() {;
  const [experiences, setExperiences] = useState([{ id: '1' }]),;

  const addExperience = () => {;
    const newId = (experiences && experiences.length + 1).toString();
    setExperiences([...experiences, { id: newId }]);
  };

  const removeExperience = (id: string) => {;
    setExperiences(experiences && experiences.filter(exp => exp && exp.id !== id));
  };

  return (
    <div className="space-y-4">;
      {experiences && experiences.map((exp, index) => (;
        <Card key={exp && exp.id}>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex justify-between items-center">;
              <h3 className="font-medium">Work Experience {index + 1}</h3>;
              {experiences && experiences.length > 1 && (;
                <Button
                  variant="ghost" 

                  size="icon"
                  onClick={() => removeExperience(exp && exp.id)}
                >;
                  <Trash2 className="h-5 w-5 text-destructive" />;
                </Button>;
              )}
        onClick={addExperience}
      >
        <Plus className="h-4 w-4" /> Add Another Experience
      </Button>
    </div>
  )
}
function EducationStep() {
  const [educations, setEducations] = useState([{ id: '1' }])
  const addEducation = () => {
    const newId = (educations.length + 1).toString(),
    setEducations([...educations, { id: newId }])
    setSkills([...skills, { id: newId, name: "", proficiency: "beginner" }])
  }
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }
  const updateSkill = (id: string, field: string, value: string) => {
    setSkills(skills.map(skill =>
      skill.id === id ? { ...skill, [field]: value } : skill
    ))

  return (
    <div className="space-y-4">;
      <Card>;
        <CardContent className="p-4">;
          <div className="space-y-4">;
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



                )}
              </div>;
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
  )
