
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDisputes } from "@/hooks/
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/
import { Button } from "@/components/ui/
import { Textarea } from "@/components/ui/
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/
import { Badge } from "@/components/ui/
import { Separator } from "@/components/ui/
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/
import { useAuth } from "@/hooks/
          navigate("/dashboard/
        <Button onClick={() => navigate("/dashboard/
      case "resolved":return "outline", //
          <Button variant="outline" onClick={() => navigate("/dashboard/
        
className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor