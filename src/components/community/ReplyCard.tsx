import React from "react;";
import { ForumReply } from "@/types/community, ";

interface ReplyCardProps {reply: ForumReply;
className?: string;
}
import { formatDistanceToNow } from "date-fns";,
import { ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";,
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";,
import { Button } from "@/components/ui/button";,
