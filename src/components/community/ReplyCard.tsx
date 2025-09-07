
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ForumReply } from "@/types/community";
import { cn } from "@/lib/utils";
interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string
}

export const ReplyCard = $2;
  onMarkAnswer, 
  canMarkAnswer = $2;
  className
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true}),

  return (
    <Card className = $2;
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
      className
    )}>
      <CardHeader className = $2;
export default ReplyCard,
