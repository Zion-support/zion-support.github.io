import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
<<<<<<< HEAD
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue} from "@/components/ui/select",
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react'

type ResumeStep = any;
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
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  className="flex-1"
                />
                <Select
                  value={skill.proficiency}
                  onValueChange={(value) => updateSkill(skill.id, "proficiency", value)}><SelectTrigger className="w-[130px]">
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
                    aria-label="Remove skill"><Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full gap-2" 
              onClick={addSkill}><Plus className="h-4 w-4" /> Add Another Skill
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
}
;
=======
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
        return <SkillsStep />
      default:
        return <BasicsStep />
    }
  }
  return (
    <div className="space-y-6 px-4 pb-24">
      <div className="flex justify-between px-1 py-2 overflow-x-auto hide-scrollbar">
        <Button
          variant = {currentStep === "basics" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {(,) => setCurrentStep("basics"),}
        >
          Basics
        </Button>
        <Button
          variant = {currentStep === "experience" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("experience"),}
        >
          Experience
        </Button>
        <Button
          variant = {currentStep === "education" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("education"),}
        >
          Education
        </Button>
        <Button
          variant = {currentStep === "skills" ? "default" : "outline",}
          className="flex-1 rounded-full"
          onClick = {() => setCurrentStep("skills"),}
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
          <Textarea
            id="summary"
            placeholder="Write a brief summary about yourself"
            rows = {4,}
          />
        </div>
      </CardContent>
    </Card>
  )
}
function ExperienceStep() {
  const [experiences, setExperiences] = useState([{ id: '1' }])
  const addExperience = () => {
    const newId = (experiences.length + 1).toString()
    setExperiences([...experiences, { id: newId }])
  }
  const removeExperience = (id: string,) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
  }
  const removeEducation = (id: string,) => {
    setEducations(educations.filter(edu => edu.id !== id))
  }
  const removeSkill = (id: string,) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }
}
  )
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
