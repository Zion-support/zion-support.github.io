
import { useState, useEffect } from "react"
import { AppHeader } from "@/layout/
import { Footer } from "@/components/
import { Button } from "@/components/ui/
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { SEO } from "@/components/
import { ProtectedRoute } from "@/components/
import { SuggestedJobs } from "@/components/jobs/
import { useAuth } from "@/hooks/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { Avatar } from "@/components/ui/
import { Badge } from "@/components/ui/
import { TalentOnboardingSteps } from "@/components/onboarding/
import { MyApplications } from "@/components/jobs/
import { ProjectOfferBanner } from "@/components/projects/
import { UpcomingInterviewsCard } from "@/components/interviews/
              
 Talent Dashboard | Zion AI Marketplace"description=" Your personalized talent dashboard with job matches and professional opportunities."/> <AppHeader /> <main className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"> <div> <h1 className=" text-3xl font-bold">Talent Dashboard</h1> <p className=" text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p> </div> <div className=" flex gap-4"> <Button variant=" outline"asChild> <Link to=" /profile/settings"> <UserIcon className=" h-4 w-4 mr-2"/> Profile Settings </Link> </Button> <Button asChild> 
</Avatar> <div></div> </div> <Badge className=" bg-green-100 text-green-800">Online</Badge> </div> </CardHeader> <CardContent> <div className=" grid grid-cols-2 gap-4 mt-4"> <div className=" flex flex-col items-center p-3 bg-muted/30 rounded-md"> <div className=" flex items-center gap-1 text-lg font-bold"> <Star className=" h-4 w-4 text-yellow-500"/> 4.9 </div> <span className=" text-xs text-muted-foreground">Rating</span> </div> <div className=" flex flex-col items-center p-3 bg-muted/30 rounded-md"> <div className=" text-lg font-bold">18</div> <span className=" text-xs text-muted-foreground">Projects</span> </div> </div> <div className=" mt-4"> <Button className=" w-full"asChild> 
<TalentOnboardingSteps /> <UpcomingInterviewsCard /> </div> <Card className=" mt-8"> <CardHeader> <CardTitle className=" text-lg">Quick Stats</CardTitle> </CardHeader> <CardContent> <div className=" space-y-3"> <div className=" flex justify-between"> <span className=" text-muted-foreground">Profile views</span> <span className=" font-medium">152</span> </div> <div className=" flex justify-between"> <span className=" text-muted-foreground">Job matches</span> <span className=" font-medium">7</span> </div> <div className=" flex justify-between"> <span className=" text-muted-foreground">Applications</span> <span className=" font-medium">3</span> </div> <div className=" flex justify-between"> <span className=" text-muted-foreground">Profile completion</span> <span className=" font-medium">85%</span> </div> </div> </CardContent> </Card> </div> AI Job Matches </TabsTrigger> <TabsTrigger value=" applications">My Applications</TabsTrigger> <TabsTrigger value=" saved">Saved Jobs</TabsTrigger> </TabsList> <TabsContent value=" job-matches"className=" mt-0"> <SuggestedJobs /> </TabsContent> <TabsContent value=" applications"className=" mt-0"> <MyApplications /> <div className=" mt-4 flex justify-center"> <Button variant=" outline"asChild> <Link to=" /dashboard/talent/applications"> <Inbox className=" h-4 w-4 mr-2"/> View Full Application Tracker </Link> </Button> </div> </TabsContent> <TabsContent value=" saved"className=" mt-0"> 