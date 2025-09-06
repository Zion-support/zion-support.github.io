
import { useState } from "react"
import { useParams } from "react-router-dom"
import { AppHeader } from "@/layout/
import { Footer } from "@/components/
import { KanbanBoard } from "@/components/hiring-tracker/
import { HiringAnalytics } from "@/components/hiring-tracker/
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { SEO } from "@/components/
import { ProtectedRoute } from "@/components/
 Hiring Tracker | Zion AI Marketplace"description=" Manage your candidate pipeline in the Zion AI Marketplace."/> <AppHeader /> <main className=" container mx-auto px-4 py-8"> <div className=" flex justify-between items-center mb-8"> <div> <h1 className=" text-3xl font-bold flex items-center"> <Briefcase className=" mr-2 h-6 w-6 text-primary"/> Hiring Pipeline </h1> <p className=" text-muted-foreground mt-1"> Track and manage your candidates through the hiring process </p> </div> </div> <TabsList> <TabsTrigger value=" kanban">Kanban Board