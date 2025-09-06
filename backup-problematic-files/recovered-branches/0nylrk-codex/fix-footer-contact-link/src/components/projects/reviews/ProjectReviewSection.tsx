
import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { ReviewsList } from "@/components/reviews/
import { LeaveReviewModal } from "@/components/reviews/
import { useReviews } from "@/hooks/
import { Project } from "@/types/
import { useAuth } from "@/hooks/
                  
  canLeaveReview ? (<div className=" bg-muted/20 rounded-lg p-4 text-center"> <h3 className=" font-medium mb-2">Share your experience
> </div>) : (<div className=" bg-muted/20 rounded-lg p-6 text-center"> <h3 className=" font-medium mb-2">Reviews will be available once the project is completed