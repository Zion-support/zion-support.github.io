
import { useState } from "react"
import { useJobApplications } from "@/hooks/
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/
import { Badge } from "@/components/ui/
import { Button } from "@/components/ui/
import Link from "next/
import { ApplicationStatus } from "@/types/
      
  case "viewed": return <Badge variant="outline">Viewed
case "shortlisted": return <Badge className="bg-blue-100 text-blue-800">Shortlisted
case "interview": return <Badge className="bg-purple-100 text-purple-800">Interview
case "hired": return <Badge className="bg-green-100 text-green-800">Hired
case "rejected": return <Badge className="bg-red-100 text-red-800">Rejected
</p> 