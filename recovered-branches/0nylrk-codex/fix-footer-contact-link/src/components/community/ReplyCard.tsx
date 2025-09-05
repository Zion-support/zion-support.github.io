
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { ThumbsUp, ThumbsDown, CheckCircle } from &quot;@/components/icons&quot;;
import { Card, CardContent, CardFooter, CardHeader } from &quot;@/components/ui/card&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { ForumReply } from &quot;@/types/community&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface ReplyCardProps {
  reply: ForumReply;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}

export const ReplyCard = ({ 
  reply, 
  onMarkAnswer, 
  canMarkAnswer = false,
  className
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true });

  return (
    <Card className={cn(
      &quot;transition-shadow&quot;,
      reply.isAnswer && &quot;border-green-500/50 bg-green-50 dark:bg-green-950/20&quot;,
      className
    )}>
      <CardHeader className=&quot;flex flex-row items-start gap-4 space-y-0&quot;>
        <Avatar className=&quot;h-8 w-8&quot;>
          <AvatarImage src={reply.authorAvatar} />
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
                Answer
              </Badge>
            )}
          </div>
          <div className=&quot;text-xs text-muted-foreground&quot;>
            {timeAgo}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div>{reply.content}</div>
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
            <CheckCircle className=&quot;h-4 w-4 mr-1&quot; />
            Mark as Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ReplyCard;
