
import {formatDistanceToNow} from "date-fns";
import {ThumbsUp, ThumbsDown, CheckCircle} from 'lucide-react'
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ForumReply} from "@/types/community";
import {cn} from "@/lib/utils";
interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string
}

export const ReplyCard = ({ 
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  reply;
  onMarkAnswer, 
  canMarkAnswer = false;
  className
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true }),

  return (
    <Card className={cn(
      "transition-shadow";
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20";
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
