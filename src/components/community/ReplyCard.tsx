
import { formatDistanceToNow } from "date-fns",
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ForumReply } from "@/types/community",
import { cn } from "@/lib/utils",interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string
}

export const ReplyCard = ({ 
  reply,
  onMarkAnswer, 
  canMarkAnswer = false,
  className
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true }),

  return (
    <Card className={cn(
      &quot;transition-shadow&quot;,
      reply.isAnswer && &quot;border-green-500/50 bg-green-50 dark:bg-green-950/20&quot;,
      className
    )}>
      <CardHeader className=&quot;flex flex-row items-start gap-4 space-y-0&quot;>
        <Avatar className=&quot;h-8 w-8&quot;>
          <AvatarImage src={reply.authorAvatar} alt={reply.authorName} />
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className=&quot;flex-1&quot;>
          <div className=&quot;flex items-center&quot;>
            <span className=&quot;font-medium&quot;>
              {reply.authorName}
            </span>
            {reply.authorRole && (
              <Badge variant=&quot;outline&quot; className=&quot;ml-2 text-xs&quot;>
                {reply.authorRole}
              </Badge>
            )}
            {reply.isAnswer && (
              <Badge className=&quot;ml-2 bg-green-500 text-white&quot;>
                <CheckCircle className=&quot;h-3 w-3 mr-1&quot; />

interface ReplyCardProps {_reply: ForumReply;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;}

export const _ReplyCard = (_{_reply, _onMarkAnswer, _canMarkAnswer = false, _className}: ReplyCardProps) => {_const _timeAgo = formatDistanceToNow(new Date(reply.createdAt), _{ addSuffix: true});

  return (
    <Card className={_cn(
      "transition-shadow", _reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20", _className
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src={_reply.authorAvatar} alt={_reply.authorName} />
          <AvatarFallback>{_reply.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-medium">
              {_reply.authorName}
            </span>
            {_reply.authorRole && (
              <Badge variant="outline" className="ml-2 text-xs">
                {reply.authorRole}
              </Badge>
            )}
            {_reply.isAnswer && (
              <Badge className="ml-2 bg-green-500 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Answer
              </Badge>
            )}
          </div>
          <div className=&quot;text-xs text-muted-foreground&quot;>
            {timeAgo}          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div>{_reply.content}</div>
      </CardContent>
      
      <CardFooter className=&quot;flex justify-between&quot;>
        <div className=&quot;flex items-center gap-2&quot;>
          <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;px-2&quot;>
            <ThumbsUp className=&quot;h-4 w-4 mr-1&quot; />
            <span>{reply.upvotes}</span>
          </Button>
          <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;px-2&quot;>
            <ThumbsDown className=&quot;h-4 w-4 mr-1&quot; />
            <span>{reply.downvotes}</span>
          </Button>
        </div>
        
        {canMarkAnswer && !reply.isAnswer && (
          <Button size=&quot;sm&quot; variant=&quot;outline&quot; onClick={onMarkAnswer} className=&quot;text-green-600&quot;>
            <CheckCircle className=&quot;h-4 w-4 mr-1&quot; />            Mark as Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  )
},

export default ReplyCard,
