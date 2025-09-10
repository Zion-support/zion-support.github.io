import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInterviews } from "@/hooks/useInterviews";
import { Interview } from "@/types/interview";
import { format, isPast, parseISO } from "date-fns";
import { Link  } from "react-router-dom";
import { Calendar, Clock, Video  } from "lucide-react";
import { Avatar } from "@/components/ui/avatar"; // Assuming AvatarImage and AvatarFallback are part of this or separate

export function UpcomingInterviewsCard(props: any) {
  const { fetchInterviews } = useInterviews();
  const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState<any>(true);