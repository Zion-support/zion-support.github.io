

import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {ChevronRight, Plus, Zap, Trash2} from "lucide-react";import React, { useState } from "react",
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  SelectValue,";
} from "@/components/ui/select";"
import { Label } from "@/components/ui/label";"
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react";

type ResumeStep = "basics" | "experience" | "education" | "skills";
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

import React, { useState } from "react",

import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",

import { Textarea } from "@/components/ui/textarea",
import {}
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,"
  SelectValue} from "@/components/ui/select","
import { Label } from "@/components/ui/label","
<<<<<<< HEAD

=======
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react","
type ResumeStep = "basics" | "experience" | "education" | "skills","
export function MobileResumeBuilder() {;
  }
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");"
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics"),
  
  const renderStepContent = $2;
      case "experience":
        return <ExperienceStep />,
      case "education":
        return <EducationStep />,
      case "skills":
        return <SkillsStep />,
      default:
        return <BasicsStep />
    }

"
type ResumeStep = "basics" | "experience" | "education" | "skills",

>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Button
          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}
        >
          Basics
        </Button>
        <Button
          variant={currentStep === "experience" ? "default" : "outline"}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
        >
          Experience
        </Button>
        <Button
          variant={currentStep === "education" ? "default" : "outline"}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI


=======

      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <Textarea
            id="summary"

            placeholder="Write a brief summary about yourself"
          <Textarea "
            id="summary" "
            placeholder="Write a brief summary about yourself" 
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Textarea "
            id="summary" "
            placeholder="Write a brief summary about yourself" ";
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;"
  SelectValue} from "@/components/ui/select",;"
import { Label } from "@/components/ui/label",;"
import { ChevronRight, Plus, Zap, Trash2 } from "lucide-react",;"
type ResumeStep = "basics" | "experience" | "education" | "skills",;

type ResumeStep = "basics" | "experience" | "education" | "skills",

export function MobileResumeBuilder() {

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
<<<<<<< HEAD
=======
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
  }
  },
  
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

type ResumeStep = "basics" | "experience" | "education" | "skills",

export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics");

  const renderStepContent = () => {
    switch (currentStep) {
      case "basics":
        return <BasicsStep />;
      case "experience":
        return <ExperienceStep />;
      case "education":;
        return <EducationStep />;
      case "skills":;
        return <SkillsStep />;
      default:
        return <BasicsStep />;
    }
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
          className="flex-1 rounded-full"        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"        <Button
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}
        >;
          Experience;
        </Button>;
        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"        <Button
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}
        >;
          Education;
        </Button>;
        <Button
          variant={currentStep === "skills" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("skills")}

      <Button className="w-full flex gap-2" size="lg">
        <Zap className="h-5 w-5" /> Enhance with AI

      </Button>
"
      <Button variant="default" className="w-full" size="lg">
        Save & Preview;
      </Button>
    </div>
  );
}

function BasicsStep() {;
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
          <Textarea
            id="summary"
            placeholder="Write a brief summary about yourself"
            rows={4}
          />
        </div>
      </CardContent>
    </Card>

}
    <div className="space-y-4">
      <Card>"
        <CardContent className="p-4">"
          <div className="space-y-4">
            {skills.map((skill) => ("
              <div key={skill.id} className="flex items-center gap-2">
                <Input"
                  placeholder="Skill (e.g. JavaScript, Figma)"
                  value={skill.name}
                  onChange={(e) =>"
                    updateSkill(skill.id, "name", e.target.value)
                  }"
                  className="flex-1"
                />
                <Select;
                  value={skill.proficiency}
                  onValueChange={(value) =>"
                    updateSkill(skill.id, "proficiency", value)
                  }
                >"
                  <SelectTrigger className="w-[130px]">"
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>"
                    <SelectItem value="beginner">Beginner</SelectItem>"
                    <SelectItem value="intermediate">Intermediate</SelectItem>"
                    <SelectItem value="advanced">Advanced</SelectItem>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}

      <Button
        variant="outline" 
        className="w-full gap-2" 
        onClick={addEducation}>;        <Plus className="h-4 w-4" /> Add Another Education;
      </Button>;
    </div>;
  );
}

function SkillsStep() {;
  const [skills, setSkills] = useState([;
    { id: '1', name: "", proficiency: "beginner" }  ]);

  return (