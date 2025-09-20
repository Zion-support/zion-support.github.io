import React from "react;";
import { ForumReply } from "@/types/community, ";

interface ReplyCardProps {reply: ForumReply;
className?: string;
}
onMarkAnswer?: () => void;}
canMarkAnswer?: boolean};
export default function ReplyCard() {
  return (
  return (
  return (
import { formatDistanceToNow } from "date-fns";,
import { ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";,
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";,
import { Button } from "@/components/ui/button";,
import { Badge } from "@/components/ui/badge";,