
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BriefcaseIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/
import { Badge } from "@/components/ui/
import { useProjects } from "@/hooks/
import { Project } from "@/types/
            
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> 