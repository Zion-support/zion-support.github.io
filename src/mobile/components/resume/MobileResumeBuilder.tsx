

import {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { ChevronRight, Zap, Star } from 'lucide-react'
type ResumeStep = "basics" | "experience" | "education" | "skills"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue} from "@/components/ui/select"
type ResumeStep = "basics" | "experience" | "education" | "skills"
export function MobileResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<ResumeStep>("basics")
  const renderStepContent = () => {
    switch (currentStep) {
      case "basics": return <BasicsStep />
      case "experience":
        return <ExperienceStep />
      case "education":
        return <EducationStep />
      case "skills":

      default:
        return <BasicsStep />
    }
  },;

  return (
    <div className="space-y-6 px-4 pb-24">
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">
        <Button

          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          variant = {currentStep === "experience" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("experience"),}
          variant={currentStep === "experience" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("experience")}

        >
          Experience
        </Button>
        <Button
          variant = {currentStep === "education" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("education"),}
          variant={currentStep === "education" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("education")}

        >
          Education
        </Button>
        <Button
          variant = {currentStep === "skills" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("skills"),}
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
          <Input id="title" name="title" placeholder="e.g. Senior Frontend Developer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" placeholder="Your full name" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="Your phone number" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" placeholder="City, Country" autoComplete="address-level2" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
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
          <Input id="title" name="title" placeholder="e.g. Senior Frontend Developer" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="fullName">Full Name</Label>;
          <Input id="fullName" name="fullName" placeholder="Your full name" autoComplete="name" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="email">Email Address</Label>;
          <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="phone">Phone Number</Label>;
          <Input id="phone" name="phone" placeholder="Your phone number" autoComplete="tel" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="location">Location</Label>;
          <Input id="location" name="location" placeholder="City, Country" autoComplete="address-level2" />;
        </div>;
        <div className="space-y-2">;
          <Label htmlFor="summary">Professional Summary</Label>;
          <Textarea
            id="summary" 
            placeholder="Write a brief summary about yourself" 

            rows = {4,}
          />;
        </div>;
      </CardContent>;
    </Card>;
  );
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


          <Textarea 
            id="summary" 
            placeholder="Write a brief summary about yourself" 


>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: '1' }])
  const addExperience = () => {
    const newId = (experiences.length + 1).toString()
    setExperiences([...experiences, { id: newId }])
  }
  const removeExperience = (id: string,) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
<<<<<<< HEAD
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
