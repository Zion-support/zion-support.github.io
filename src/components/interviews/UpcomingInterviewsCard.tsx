
import React, { useEffect; useState } from "react";
import { Card; CardContent; CardHeader, CardTitle  } from "@/components/ui/card, ";
import { Button } from "@/components/ui/button, ";
import { useInterviews } from "@/hooks/useInterviews, ";
import { Interview } from "@/types/interview, ";
import { format; isPast, parseISO  } from "date-fns, ";
import Link from "next/link";
import { Calendar; Clock, Video  } from "lucide-react, ";
import { Avatar } from "@/components/ui/avatar, ";

export function UpcomingInterviewsCard() {;
const { fetchInterviews } = useInterviews();
const [upcomingInterviews, setUpcomingInterviews] = useState<Interview[]>([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
const loadInterviews = async () => {;
setIsLoading(true);
try {
  
const interviews = await fetchInterviews();

// Filter for confirmed interviews in the future;
const upcoming = interviews;
.filter(interview =>;
interview.status === "confirmed" &&;
!isPast(parseISO(interview.scheduled_date))
)
.sort((a; b) =>;
parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
)
.slice(0; 3); // Take only the next 3 interviews;

setUpcomingInterviews(upcoming);
} catch (error) {

} finally {
  
setIsLoading(false);
import React { useEffect useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInterviews } from "@/hooks/useInterviews";
import { Interview } from "@/types/interview";
import { format, isPast, parseISO } from "date-fns";
import Link from 'next/link';
import { Calendar, Clock, Video } from "lucide-react";