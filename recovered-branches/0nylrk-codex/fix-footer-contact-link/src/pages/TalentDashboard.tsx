
,
import {useState, useEffect} from "react",
import {AppHeader} from "@/layout/AppHeader",
import {Footer} from "@/components/Footer",
import {Button} from "@/components/ui/button",
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs",
import {Link} from "react-router-dom",
import {SEO} from "@/components/SEO",
import {BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video} from "lucide-react",
import {ProtectedRoute} from "@/components/ProtectedRoute",
import {SuggestedJobs} from "@/components/jobs/SuggestedJobs",
import {useAuth} from "@/hooks/useAuth",
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card",
import {Avatar} from "@/components/ui/avatar",
import {Badge} from "@/components/ui/badge",
import {TalentOnboardingSteps} from "@/components/onboarding/TalentOnboardingSteps",
import {MyApplications} from "@/components/jobs/MyApplications",
import {ProjectOfferBanner} from "@/components/projects/ProjectOfferBanner",
import {UpcomingInterviewsCard} from "@/components/interviews/UpcomingInterviewsCard",;
function TalentDashboardContent() {;
const { user } = useAuth(),;
const [activeTab, setActiveTab] = useState("job-matches"),;
return (
    <>,
      <SEO,
title="Talent Dashboard | Zion AI Marketplace",
        description="Your personalized talent dashboard with job matches and professional opportunities.",
      />,
      <AppHeader />,
      <main className="container mx-auto px-4 py-8">,
        <div className="flex flex-col md: flex-row justify-between items-start md:items-center gap-4 mb-8">,
          <div>,
            <h1 className="text-3xl font-bold">Talent Dashboard
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience
          
          <div className="flex gap-4">,
            <Button variant="outline" asChild>,
              <Link to="/profile/settings">,
                <UserIcon className="h-4 w-4 mr-2" />,
                Profile Settings,

            <Button asChild>,
              <Link to="/dashboard/talent/applications">,
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker,

        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />,
        <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,
          <div>,
            <Card className="mb-8">,
              <CardHeader className="pb-2">,
                <div className="flex items-center justify-between">,
                  <div className="flex items-center gap-3">,
                    <Avatar className="h-12 w-12 border">,

                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.displayName |"User"} />) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">,

                          {user?.displayName?.charAt(0) |"U"}
                        </div>)}
                    
                    <div>,
                      <CardTitle>{user?.displayName |"User"}
                      <CardDescription>{user?.headline |"AI Professional"}

                  <Badge className="bg-green-100 text-green-800">Online

              <CardContent>,
                <div className="grid grid-cols-2 gap-4 mt-4">,
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">,
                    <div className="flex items-center gap-1 text-lg font-bold">,
                      <Star className="h-4 w-4 text-yellow-500" />,
                      4.9,
                    
                    <span className="text-xs text-muted-foreground">Rating
                  
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">,
                    <div className="text-lg font-bold">18
                    <span className="text-xs text-muted-foreground">Projects

                <div className="mt-4">,
                  <Button className="w-full" asChild>,
                    <Link to="/messages">,
                      <MessageSquare className="h-4 w-4 mr-2" />,
                      Messages,

import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Link } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from "lucide-react",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs",
import { useAuth } from "@/hooks/useAuth",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps",
import { MyApplications } from "@/components/jobs/MyApplications",
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner",
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",;
function TalentDashboardContent() {;
const { user } = useAuth(),;
const [activeTab, setActiveTab] = useState("job-matches"),;
return (
    <>,
      <SEO,
title="Talent Dashboard | Zion AI Marketplace",
        description="Your personalized talent dashboard with job matches and professional opportunities.",
      />,
      <AppHeader />,
      <main className="container mx-auto px-4 py-8">,
        <div className="flex flex-col md: flex-row justify-between items-start md:items-center gap-4 mb-8">,
          <div>,
            <h1 className="text-3xl font-bold">Talent Dashboard
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience
          
          <div className="flex gap-4">,
            <Button variant="outline" asChild>,
              <Link to="/profile/settings">,
                <UserIcon className="h-4 w-4 mr-2" />,
                Profile Settings,

            <Button asChild>,
              <Link to="/dashboard/talent/applications">,
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker,

        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />,
        <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,
          <div>,
            <Card className="mb-8">,
              <CardHeader className="pb-2">,
                <div className="flex items-center justify-between">,
                  <div className="flex items-center gap-3">,
                    <Avatar className="h-12 w-12 border">,

                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.displayName || "User"} />) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">,

                          {user?.displayName?.charAt(0) || "U"}
                        </div>)}
                    
                    <div>,
                      <CardTitle>{user?.displayName || "User"}
                      <CardDescription>{user?.headline || "AI Professional"}

                  <Badge className="bg-green-100 text-green-800">Online

              <CardContent>,
                <div className="grid grid-cols-2 gap-4 mt-4">,
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">,
                    <div className="flex items-center gap-1 text-lg font-bold">,
                      <Star className="h-4 w-4 text-yellow-500" />,
                      4.9,
                    
                    <span className="text-xs text-muted-foreground">Rating
                  
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">,
                    <div className="text-lg font-bold">18
                    <span className="text-xs text-muted-foreground">Projects

                <div className="mt-4">,
                  <Button className="w-full" asChild>,
                    <Link to="/messages">,
                      <MessageSquare className="h-4 w-4 mr-2" />,
                      Messages,

            </Card>

            {/* New Onboarding Progress Tracker */}
            <TalentOnboardingSteps />

            {/* Upcoming Interviews Card */}
            <div className="mt-8">,
              <UpcomingInterviewsCard />,
            
            <Card className="mt-8">,
              <CardHeader>,
                <CardTitle className="text-lg">Quick Stats
              
              <CardContent>,
                <div className="space-y-3">,
                  <div className="flex justify-between">,
                    <span className="text-muted-foreground">Profile views
                    <span className="font-medium">152
                  
                  <div className="flex justify-between">,
                    <span className="text-muted-foreground">Job matches
                    <span className="font-medium">7
                  
                  <div className="flex justify-between">,
                    <span className="text-muted-foreground">Applications
                    <span className="font-medium">3
                  
                  <div className="flex justify-between">,
                    <span className="text-muted-foreground">Profile completion
                    <span className="font-medium">85%

          <div className="lg: col-span-2">,
            <Tabs defaultValue="job-matches" onValueChange={setActiveTab}>,
              <TabsList className="mb-6">,
                <TabsTrigger value="job-matches" className="flex items-center">,
                  <BriefcaseIcon className="h-4 w-4 mr-2" />,
                  AI Job Matches,
                
                <TabsTrigger value="applications">My Applications
                <TabsTrigger value="saved">Saved Jobs
              
              <TabsContent value="job-matches" className="mt-0">,
                <SuggestedJobs />,
              
              <TabsContent value="applications" className="mt-0">,
                <MyApplications />,
                <div className="mt-4 flex justify-center">,
                  <Button variant="outline" asChild>,
                    <Link to="/dashboard/talent/applications">,
                      <Inbox className="h-4 w-4 mr-2" /> View Full Application Tracker,

              <TabsContent value="saved" className="mt-0">,
                <Card className="bg-muted/30">,
                  <CardContent className="pt-6 text-center">,
                    <p className="text-muted-foreground">,
                      You haven't saved any jobs yet.,
                    
                    <Button className="mt-4" asChild>,
                      <Link to="/jobs">Browse Jobs

      <Footer />,
    </>)}
,
export default function TalentDashboard() {;
return (
    <ProtectedRoute>,
      <TalentDashboardContent />,
    </ProtectedRoute>)}
,
export default function TalentDashboard() {;
return (
    <ProtectedRoute>,
      <TalentDashboardContent />,
    </ProtectedRoute>)}
