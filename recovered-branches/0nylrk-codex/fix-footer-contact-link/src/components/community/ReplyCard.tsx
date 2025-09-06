
=======
<<<<<<< HEAD
interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string
}

  onMarkAnswer,
  canMarkAnswer = false,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  className
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (
    <Card className={cn(

      className
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src={reply.authorAvatar} />
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-medium">
              {reply.authorName}
            </span>
            {reply.authorRole && (
              <Badge variant="outline" className="ml-2 text-xs">

import { formatDistanceToNow } from "date-fns",;
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ForumReply } from "@/types/community",;
import { cn } from "@/lib/utils",;
interface ReplyCardProps {;
  reply: ForumReply,;
  onMarkAnswer?: () => void,;
  canMarkAnswer?: boolean,;
  className?: string;
}
;
export const ReplyCard = ({;
  reply,;
  onMarkAnswer,;
  canMarkAnswer = false,;

  className;
}: ReplyCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(reply && reply.createdAt), { addSuffix: true }),;

  return (
    <CardclassName={cn(
      "transition-shadow"
      reply && reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      className
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply && reply.authorAvatar} />;
          <AvatarFallback>{reply && reply.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <span className="font-medium">;
              {reply && reply.authorName}
            </span>;
            {reply && reply.authorRole && (;
              <Badge variant="outline" className="ml-2 text-xs">;
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {reply.authorRole}
              </Badge>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}
            {reply && reply.isAnswer && (;
              <Badge className="ml-2 bg-green-500 text-white">;
                <CheckCircle className="h-3 w-3 mr-1" />;
                Answer;
              </Badge>;
            )}
          </div>;
          <div className="text-xs text-muted-foreground">;
            {timeAgo}
<<<<<<< HEAD
export default ReplyCard;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
