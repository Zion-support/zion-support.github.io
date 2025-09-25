import React,
 { useState } from "react",
import {MobileHeader} from "../components/common/MobileHeader",
import {BottomNavigation} from "../components/common/BottomNavigation",
import {Button} from "@/components/ui/button",
import {Input} from "@/components/ui/input",
import {Textarea} from "@/components/ui/textarea",
import {Label} from "@/components/ui/label",
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select",
import {Zap, ChevronLeft, ChevronRight} from "lucide-react",
import {Badge} from "@/components/ui/badge",
import {Card, CardContent} from "@/components/ui/card",
import React,
 { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Label } from "@/components/ui/label",
import {
import { Zap, ChevronLeft, ChevronRight } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { Card, CardContent } from "@/components/ui/card",
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
type JobPostStep = "details" | "requirements" | "budget" | "preview",
export function MobileJobPost() {;
const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),
export function MobileJobPost() {;
const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),;
const goToNextStep = () => {;
if (currentStep === "details") {
      setCurrentStep("requirements")} else if (currentStep === "requirements") {
      setCurrentStep("budget")} else if (currentStep === "budget") {
      setCurrentStep("preview")}
}
  },;
const goToPrevStep = () => {;
if (currentStep === "requirements") {
      setCurrentStep("details")} else if (currentStep === "budget") {
      setCurrentStep("requirements")} else if (currentStep === "preview") {
      setCurrentStep("budget")}
,;
const renderStepContent = () => {
    switch (currentStep) {
      case "details": return <DetailsStep />,
      case "requirements":,;
return <RequirementsStep />,
      case "budget":,;
return <BudgetStep />,
      case "preview":,;
return <PreviewStep />,
      default: ,;
return <DetailsStep />}
,;
return (
    <div className="min-h-screen flex flex-col">,
      <MobileHeader,
title={`Post a Job (${currentStep === "preview" ? 4 : currentStep === "budget" ? 3 : currentStep === "requirements" ? 2 : 1}/4)`}
        showBack,
      />,
      <main className="flex-1 py-4 pb-24 px-4">,
        <div className="mb-6 flex justify-between">,
          <div className="flex space-x-1">,
            <Badge variant={currentStep === "details" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">1
            <Badge variant={currentStep === "requirements" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">2
            <Badge variant={currentStep === "budget" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">3
            <Badge variant={currentStep === "preview" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">4
          
          <Button variant="outline" className="flex gap-1">,
            <Zap className="h-4 w-4" /> AI Assist,

        {renderStepContent()}
        <div className="flex gap-2 mt-6">,

          {currentStep !== "details" && (
            <Button;,
variant="outline",
              className="flex-1 gap-1",
              onClick={goToPrevStep}
            >,
              <ChevronLeft className="h-4 w-4" /> Back,
            </Button>)}
          <Button,
className="flex-1 gap-1",
            onClick={goToNextStep}
          >,

            {currentStep === "preview" ? "Publish Job" : "Continue"}
            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}

      <BottomNavigation />,
    </div>)}
function DetailsStep() {;
return (
    <div className="space-y-4">,
      <h2 className="text-lg font-medium">Job Details
      <div className="space-y-2">,
        <Label htmlFor="title">Job Title
        <Input id="title" placeholder="e.g. Senior React Developer" />,
      
      <div className="space-y-2">,
        <Label htmlFor="company">Company Name
        <Input id="company" placeholder="Your company name" />,
      
      <div className="space-y-2">,
        <Label htmlFor="location">Location
        <Select defaultValue="remote">,
          <SelectTrigger>,
            <SelectValue placeholder="Select location type" />,
          
          <SelectContent>,
            <SelectItem value="remote">Remote
            <SelectItem value="onsite">On-site
            <SelectItem value="hybrid">Hybrid

      <div className="space-y-2">,
        <Label htmlFor="jobType">Job Type
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select job type" />,
          
          <SelectContent>,
            <SelectItem value="fulltime">Full-time
            <SelectItem value="parttime">Part-time
            <SelectItem value="contract">Contract
            <SelectItem value="freelance">Freelance

      <div className="space-y-2">,
        <Label htmlFor="description">Job Description
        <Textarea,
id="description",
          placeholder="Describe the job role and responsibilities",
        <Textarea,
id="description",
          placeholder="Describe the job role and responsibilities",
          rows={5}
        />,
      
    </div>)}
,;
function RequirementsStep() {;
const [skills, setSkills] = useState<string[]>([
    "React", "TypeScript", "Node.js"]),;
const [newSkill, setNewSkill] = useState(""),
        <Textarea,
id="description",
          placeholder="Describe the job role and responsibilities",
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from "@/components/ui/select",
type JobPostStep = "details" | "requirements" | "budget" | "preview",
export function MobileJobPost() {;
const [currentStep, setCurrentStep] = useState<JobPostStep>("details"),;
const goToNextStep = () => {;
if (currentStep === "details") {
      setCurrentStep("requirements")} else if (currentStep === "requirements") {
      setCurrentStep("budget")} else if (currentStep === "budget") {
      setCurrentStep("preview")}
  },;
const goToPrevStep = () => {;
if (currentStep === "requirements") {
      setCurrentStep("details")} else if (currentStep === "budget") {
      setCurrentStep("requirements")} else if (currentStep === "preview") {
      setCurrentStep("budget")}
  },;
const renderStepContent = () => {
    switch (currentStep) {
      case "details": return <DetailsStep />,
      case "requirements":,;
return <RequirementsStep />,
      case "budget":,;
return <BudgetStep />,
      case "preview":,;
return <PreviewStep />,
      default: ,;
return <DetailsStep />}
},;
return (
    <div className="min-h-screen flex flex-col">,
      <MobileHeader,
title={`Post a Job (${currentStep === "preview" ? 4 : currentStep === "budget" ? 3 : currentStep === "requirements" ? 2 : 1}/4)`}
        showBack,
      />,
      <main className="flex-1 py-4 pb-24 px-4">,
        <div className="mb-6 flex justify-between">,
          <div className="flex space-x-1">,
            <Badge variant={currentStep === "details" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">1
            <Badge variant={currentStep === "requirements" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">2
            <Badge variant={currentStep === "budget" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">3
            <Badge variant={currentStep === "preview" ? "default" : "outline"} className="rounded-full w-7 h-7 flex items-center justify-center p-0">4
          
          <Button variant="outline" className="flex gap-1">,
            <Zap className="h-4 w-4" /> AI Assist,

        {renderStepContent()}
,
        <div className="flex gap-2 mt-6">,

          {currentStep !== "details" && (
            <Button;,
variant="outline",
              className="flex-1 gap-1",
              onClick={goToPrevStep}>,
              <ChevronLeft className="h-4 w-4" /> Back,
            </Button>)}
,
          <Button,
className="flex-1 gap-1",
            onClick={goToNextStep}>,

            {currentStep === "preview" ? "Publish Job" : "Continue"}
            {currentStep !== "preview" && <ChevronRight className="h-4 w-4" />}
,

      <BottomNavigation />,
    </div>)}
,;
function DetailsStep() {;
return (
    <div className="space-y-4">,
      <h2 className="text-lg font-medium">Job Details
      <div className="space-y-2">,
        <Label htmlFor="title">Job Title
        <Input id="title" placeholder="e && e.g. Senior React Developer" />,
      
      <div className="space-y-2">,
        <Label htmlFor="company">Company Name
        <Input id="company" placeholder="Your company name" />,
      
      <div className="space-y-2">,
        <Label htmlFor="location">Location
        <Select defaultValue="remote">,
          <SelectTrigger>,
            <SelectValue placeholder="Select location type" />,
          
          <SelectContent>,
            <SelectItem value="remote">Remote
            <SelectItem value="onsite">On-site
            <SelectItem value="hybrid">Hybrid

      <div className="space-y-2">,
        <Label htmlFor="jobType">Job Type
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select job type" />,
          
          <SelectContent>,
            <SelectItem value="fulltime">Full-time
            <SelectItem value="parttime">Part-time
            <SelectItem value="contract">Contract
            <SelectItem value="freelance">Freelance

      <div className="space-y-2">,
        <Label htmlFor="description">Job Description
        <Textarea,
id="description",
          placeholder="Describe the job role and responsibilities",
          rows={5}
        />,
      
    </div>)}
,;
function RequirementsStep() {;
const [skills, setSkills] = useState<string[]>([
    "React", "TypeScript", "Node.js"]),;
const [newSkill, setNewSkill] = useState(""),;
const addSkill = () => {;
if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]),
      setNewSkill("")}
}
,;
const goToPrevStep = () =>: any {
    // Check condition,;
if ( {) {
  $2}
      setCurrentStep ("details")} else // Check condition,;
if ( {) {
  $2}
      setCurrentStep ("requirements")} else // Check condition,;
if ( {) {
  $2}
      setCurrentStep ("budget")}
  }
,;
const renderStepContent = () =>: any {
    switch (current_step) {
      case "details": return <DetailsStep />,
      case "requirements":,;
return <RequirementsStep />,
      case "budget":,;
return <BudgetStep />,
      case "preview":,;
return <PreviewStep />,
      default: ,;
return <DetailsStep />}
  }
,;
return (
    <div className="min - h-screen flex flex - col">,
      <MobileHeader,
title={`Post a Job (${current_step === "preview" ? 4 : current_step === "budget" ? 3 : current_step === "requirements" ? 2 : 1}/4)`}
        show_back,
      />,
      <main className="flex - 1 py - 4 pb - 24 px - 4">,
        <div className="mb - 6 flex justify - between">,
          <div className="flex space - x-1">,
            <Badge variant={current_step === "details" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p - 0">1
            <Badge variant={current_step === "requirements" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p - 0">2
            <Badge variant={current_step === "budget" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p - 0">3
            <Badge variant={current_step === "preview" ? "default" : "outline"} className="rounded - full w - 7 h - 7 flex items - center justify - center p - 0">4
          
          <Button variant="outline" className="flex gap - 1">,
            <Zap className="h - 4 w - 4" /> AI Assist,

        {renderStepContent ()}
        <div className="flex gap - 2 mt - 6">,

          {current_step !== "details" && (
            <Button;,
variant="outline",
              className="flex - 1 gap - 1",
              on_click={goToPrevStep}
            >,
              <ChevronLeft className="h - 4 w - 4" /> Back,
            </Button>)}
          <Button,
className="flex - 1 gap - 1",
            on_click={goToNextStep}
          >,

            {current_step === "preview" ? "Publish Job" : "Continue"}
            {current_step !== "preview" && <ChevronRight className="h - 4 w - 4" />}

      <BottomNavigation />,
    </div>)}
/**,
 * DetailsStep - Function description,
 */,;
function DetailsStep() {;
return (
    <div className="space-y-4">,
      <h2 className="text-lg font-medium">Job Details
      <div className="space-y-2">,
        <Label htmlFor="title">Job Title
        <Input id="title" placeholder="e.g. Senior React Developer" />,
      
      <div className="space-y-2">,
        <Label htmlFor="company">Company Name
        <Input id="company" placeholder="Your company name" />,
      
      <div className="space-y-2">,
        <Label htmlFor="location">Location
        <Select defaultValue="remote">,
          <SelectTrigger>,
            <SelectValue placeholder="Select location type" />,
          
          <SelectContent>,
            <SelectItem value="remote">Remote
            <SelectItem value="onsite">On-site
            <SelectItem value="hybrid">Hybrid

      <div className="space-y-2">,
        <Label htmlFor="jobType">Job Type
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select job type" />,
          
          <SelectContent>,
            <SelectItem value="fulltime">Full-time
            <SelectItem value="parttime">Part-time
            <SelectItem value="contract">Contract
            <SelectItem value="freelance">Freelance

      <div className="space-y-2">,
        <Label htmlFor="description">Job Description
        <Textarea,
id="description",
          placeholder="Describe the job role and responsibilities",
          rows={5}
        />,
      
    </div>)}
/**,
 * RequirementsStep - Function description,
 */},;
const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill))},;
return (
    <div className="space-y-4">,
      <h2 className="text-lg font-medium">Job Requirements
      <div className="space-y-2">,
        <Label htmlFor="experience">Experience Level
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select experience level" />,
          
          <SelectContent>,
            <SelectItem value="entry">Entry Level
            <SelectItem value="mid">Mid Level
            <SelectItem value="senior">Senior
            <SelectItem value="expert">Expert

      <div className="space-y-2">,
        <Label htmlFor="education">Education
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select required education" />,
          
          <SelectContent>,
            <SelectItem value="high_school">High School
            <SelectItem value="associate">Associate Degree
            <SelectItem value="bachelor">Bachelor's Degree
            <SelectItem value="master">Master's Degree
            <SelectItem value="phd">PhD
            <SelectItem value="none">No Specific Requirement

      <div className="space-y-2">,
        <Label>Required Skills
        <div className="flex flex-wrap gap-2 mb-3">,

          {skills.map((skill) => (
            <Badge,
key={skill}
,;,
variant="secondary",
              className="flex items-center gap-1 px-3 py-1">,

              {skill}
,
              <button,
className="ml-1 rounded-full hover: bg-background/20 p-1",
              <button,
className="ml-1 rounded-full hover:bg-background/20 p-1",;
function RequirementsStep() {;
const [skills, setSkills] = useState<string[]>([
    "React", "TypeScript", "Node.js"]),;
const [newSkill, setNewSkill] = useState(""),;
const addSkill = () => {;
if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]),
      setNewSkill("")}
},;
const removeSkill = (skill: string) => {
    setSkills(skills && skills.filter(s => s !== skill))},;
return (
    <div className="space-y-4">,
      <h2 className="text-lg font-medium">Job Requirements
      <div className="space-y-2">,
        <Label htmlFor="experience">Experience Level
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select experience level" />,
          
          <SelectContent>,
            <SelectItem value="entry">Entry Level
            <SelectItem value="mid">Mid Level
            <SelectItem value="senior">Senior
            <SelectItem value="expert">Expert

      <div className="space-y-2">,
        <Label htmlFor="education">Education
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select required education" />,
          
          <SelectContent>,
            <SelectItem value="high_school">High School
            <SelectItem value="associate">Associate Degree
            <SelectItem value="bachelor">Bachelor's Degree
            <SelectItem value="master">Master's Degree
            <SelectItem value="phd">PhD
            <SelectItem value="none">No Specific Requirement

      <div className="space-y-2">,
        <Label>Required Skills
        <div className="flex flex-wrap gap-2 mb-3">,

          {skills && skills.map((skill) => (
            <Badge,
key={skill} ,;,
variant="secondary",
              className="flex items-center gap-1 px-3 py-1">,

              {skill}
,
              <button,
className="ml-1 rounded-full hover: bg-background/20 p-1"
                onClick={() => removeSkill(skill)}
              >,
                ×,
              
            </Badge>))}
,
        
        <div className="flex gap-2">,
          <Input,
value={newSkill}
            onChange={(e) => setNewSkill(e && e.target.value)}
            placeholder="Add a skill",
            onKeyDown={(e) => e && e.key === 'Enter' && addSkill()}
          />,
          <Button onClick={addSkill}>Add

      <div className="space-y-2">,
        <Label htmlFor="requirements">Specific Requirements
        <Textarea

          id="requirements",
          placeholder="List any specific requirements or qualifications",
          rows={4}
        />,
      
      <div className="space-y-2">,
        <Label htmlFor="responsibilities">Key Responsibilities
        <Textarea,
id="responsibilities",
          placeholder="List the key responsibilities for this role",
          rows={4}
        />,
      
    </div>)}
        <Textarea,
id="responsibilities",
          placeholder="List the key responsibilities for this role",
          rows={4}
,
        />,
      
    </div>)
,;
function BudgetStep() {;
return (
    <div className="space-y-4">,
      <h2 className="text-lg font-medium">Budget & Timeline
      <div className="space-y-2">,
        <Label htmlFor="paymentType">Payment Type
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select payment type" />,
          
          <SelectContent>,
            <SelectItem value="hourly">Hourly Rate
            <SelectItem value="fixed">Fixed Price
            <SelectItem value="salary">Salary

      <div className="space-y-2">,
        <Label>Salary Range
        <div className="flex gap-4 items-center">,
          <Input placeholder="Min" type="number" className="w-full" />,
          <span>to
          <Input placeholder="Max" type="number" className="w-full" />,
          <Select defaultValue="usd">,
            <SelectTrigger className="w-24">,
              <SelectValue placeholder="Currency" />,
            
            <SelectContent>,
              <SelectItem value="usd">USD
              <SelectItem value="eur">EUR
              <SelectItem value="gbp">GBP

      <div className="space-y-2">,
        <Label htmlFor="deadline">Application Deadline
        <Input type="date" id="deadline" />,
      
      <div className="space-y-2">,
        <Label htmlFor="startDate">Expected Start Date
        <Input type="date" id="startDate" />,
      
      <div className="space-y-2">,
        <Label htmlFor="duration">Project Duration
        <Select>,
          <SelectTrigger>,
            <SelectValue placeholder="Select project duration" />,
          
          <SelectContent>,
            <SelectItem value="ltw">Less than a week
            <SelectItem value="ltm">Less than a month
            <SelectItem value="1-3m">1-3 months
            <SelectItem value="3-6m">3-6 months
            <SelectItem value="6m+">6+ months
            <SelectItem value="ongoing">Ongoing

      <div className="space-y-2">,
        <Label htmlFor="additionalInfo">Additional Budget Information
        <Textarea,
id="additionalInfo",
          placeholder="Any additional information about budget or payment",
        <Textarea,
id="additionalInfo",
          placeholder="Any additional information about budget or payment",
          rows={3}
        />,
      
    </div>)}
,;
function PreviewStep() {;
return (
    <div className="space-y-4">,
      <h2 className="text-lg font-medium mb-2">Job Preview
      <Card>,
        <CardContent className="p-4">,
          <h3 className="font-bold text-lg">Senior React Developer
          <p className="text-muted-foreground">TechCorp Inc.  Remote  Full-time
          <div className="flex gap-2 my-3">,
            <Badge variant="outline">React
            <Badge variant="outline">TypeScript
            <Badge variant="outline">Node.js
          
          <div className="space-y-1 text-sm mt-4">,
            <p className="font-medium">Salary Range: 
            <p>$80,000 - $120,000 USD / year
          
          <div className="space-y-1 text-sm mt-3">,
            <p className="font-medium">Experience Level: 
            <p>Senior
          
          <div className="space-y-1 text-sm mt-3">,
            <p className="font-medium">Application Deadline:
            <p>December 15, 2023
          
          <div className="mt-4 pt-3 border-t border-border">,
            <h4 className="font-medium mb-2">Description
            <p className="text-sm">We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...

      <Button variant="outline" className="w-full">Edit Job Post
    </div>)}
}
,
/**,
 * PreviewStep - Function description,
 */,;
function PreviewStep() {;
return (
    <div className="space - y-4">,
      <h2 className="text - lg font - medium mb - 2">Job Preview
      <Card>,
        <CardContent className="p - 4">,
          <h3 className="font - bold text - lg">Senior React Developer
          <p className="text - muted - foreground">TechCorp Inc. • Remote • Full - time
          <div className="flex gap - 2 my - 3">,
            <Badge variant="outline">React
            <Badge variant="outline">TypeScript
            <Badge variant="outline">Node.js
          
          <div className="space - y-1 text - sm mt - 4">,
            <p className="font - medium">Salary Range: 
            <p>$80, 000 - $120, 000 USD / year
          
          <div className="space - y-1 text - sm mt - 3">,
            <p className="font - medium">Experience Level: 
            <p > Senior
          
          <div className="space - y-1 text - sm mt - 3">,
            <p className="font - medium">Application Deadline:
            <p > December 15, 2023
          
          <div className="mt - 4 pt - 3 border - t border - border">,
            <h4 className="font - medium mb - 2">Description
            <p className="text - sm">We are looking for a skilled React developer to help us build out our new customer - facing application. You'll be working with a team of experienced developers to create a responsive and performant web app...

      <Button variant="outline" className="w - full">Edit Job Post
    </div>)}
