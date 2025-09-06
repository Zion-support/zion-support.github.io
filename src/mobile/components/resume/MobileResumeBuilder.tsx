

import {

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

=======

          variant={currentStep === "basics" ? "default" : "outline"}
          className="flex-1 rounded-full"
          onClick={() => setCurrentStep("basics")}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        >
          Basics
        </Button>
        <Button

        >
          Experience
        </Button>
        <Button

        >
          Education
        </Button>
        <Button

        >
          Skills
        </Button>
      </div>
      {renderStepContent()}

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

            rows = {4,}
          />
        </div>
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD

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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
