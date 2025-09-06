
import React, { useEffect, useState } from "react"
import { useInterviews } from "@/hooks/
import { Interview } from "@/types/
import { AppHeader } from "@/layout/
import { Footer } from "@/components/
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { SEO } from "@/components/
import { ProtectedRoute } from "@/components/
import { InterviewCard } from "@/components/interviews/
import { Button } from "@/components/ui/
              
return (<> <SEO title="Interviews | Zion AI Marketplace" description="Manage your scheduled interviews with clients and talent" /> <AppHeader /> <main className="container mx-auto px-4 py-8" > <div className="flex justify-between items-center mb-8" > <div> <h1 className="text-3xl font-bold" >Interviews
</TabsTrigger> <TabsTrigger value="past" >Past</TabsTrigger> </TabsList> </div>) : upcomingInterviews.length > 0 ? (renderInterviewGroups (upcomingGrouped) : (<div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light" > <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" /> <h3 className="text-xl font-medium mb-2" >No upcoming interviews
</TabsContent> </div>) : pendingInterviews.length > 0 ? (renderInterviewGroups (pendingGrouped) : (<div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light" > <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" /> <h3 className="text-xl font-medium mb-2" >No pending interviews
</TabsContent> </div>) : pastInterviews.length > 0 ? (renderInterviewGroups (pastGrouped) : (<div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light" > <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" /> <h3 className="text-xl font-medium mb-2" >No past interviews