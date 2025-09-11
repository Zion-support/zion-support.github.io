




import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Zap, ChevronLeft, ChevronRight} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";


==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Label } from "@/components/ui/label",
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select",
import { Zap, ChevronLeft, ChevronRight } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { Card, CardContent } from "@/components/ui/card",




type JobPostStep = "details" | "requirements" | "budget" | "preview",

  
=======export function MobileJobPost() {;
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details");
export function MobileJobPost() {
  const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),
  
=======
          <Button variant="outline" className="flex gap-1">;
            <Zap className="h-4 w-4" /> AI Assist;
          </Button>;
        </div>;
        {renderStepContent()}

        <div className="flex gap-2 mt-6">;
          {currentStep !== "details" && (;
            <Button
              variant="outline" 
              className="flex-1 gap-1" 
              onClick={goToPrevStep}>;
              <ChevronLeft className="h-4 w-4" /> Back;
            </Button>;
          )}


          <Button
            className="flex-1 gap-1"
            onClick={goToNextStep}>;
            {currentStep === "preview" ? "Publish Job" : "Continue"}
            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}

          </Button>;
        </div>;
      </main>;

      <div className="space-y-2">;
        <Label htmlFor="title">Job Title</Label>;
        <Input id="title" placeholder="e && e.g. Senior React Developer" />;
      </div>;

  },
  
  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill))
  },
  
=======  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Job Requirements</h2>
      <div className="space-y-2">
        <Label htmlFor="experience">Experience Level</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entry">Entry Level</SelectItem>
            <SelectItem value="mid">Mid Level</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="education">Education</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select required education" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high_school">High School</SelectItem>
            <SelectItem value="associate">Associate Degree</SelectItem>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
            <SelectItem value="none">No Specific Requirement</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Required Skills</Label>
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };
  const removeSkill = (skill: string) => {;
    setSkills(skills && skills.filter(s => s !== skill));
  };
  return (
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Requirements</h2>;
  ),;
}
;
function RequirementsStep() {;
  const [skills, setSkills] = useState<string[]>([;
    "React", "TypeScript", "Node.js";
  ]),;
  const [newSkill, setNewSkill] = useState(""),;
  ;
  const addSkill = () => {;
    if (newSkill && !skills.includes(newSkill)) {;
      setSkills([...skills, newSkill]),;
      setNewSkill(""),;
    }
  },;
  ;
  const removeSkill = (skill:string) => {;
    setSkills(skills.filter(s => s !== skill));
  },;
  ;
  return (;
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Requirements</h2>;
      ;
  };
  const removeSkill = (skill: string) => {;
    setSkills(skills.filter(s => s !== skill));
  };
  return (;
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Requirements</h2>;
=======
=======
  };

  const removeSkill = (skill: string) => {;
    setSkills(skills && skills.filter(s => s !== skill));
  };

  return (
    <div className="space-y-4">;
      <h2 className="text-lg font-medium">Job Requirements</h2>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <div className="space-y-2">;
        <Label htmlFor="education">Education</Label>;
        <Select>;
          <SelectTrigger>;
            <SelectValue placeholder="Select required education" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="high_school">High School</SelectItem>;
            <SelectItem value="associate">Associate Degree</SelectItem>;
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>;
            <SelectItem value="master">Master's Degree</SelectItem>;
            <SelectItem value="phd">PhD</SelectItem>;
            <SelectItem value="none">No Specific Requirement</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
      <div className="space-y-2">;
        <Label>Required Skills</Label>;
        <div className="flex flex-wrap gap-2 mb-3">;
          {skills && skills.map((skill) => (;
            <Badge
              key={skill} 

              variant="secondary"
              className="flex items-center gap-1 px-3 py-1">;
              {skill}
              <button
                className="ml-1 rounded-full hover:bg-background/20 p-1"
=======
              <button 
                className="ml-1 rounded-full hover:bg-background/20 p-1"

        </div>;
        <div className="flex gap-2">;
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e && e.target.value)}
            placeholder="Add a skill";
            onKeyDown={(e) => e && e.key === 'Enter' && addSkill()}
