
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { formatDistanceToNow } from "date-fns"
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react'import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ForumReply } from "@/types/community"
import { cn } from "@/lib/utils"
interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void
  canMarkAnswer?: boolean
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { formatDistanceToNow } from "date-fns",
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  className?: string
}

export const ReplyCard = ({ 

  className
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ForumReply } from "@/types/community";
import { cn } from "@/lib/utils";
interface ReplyCardProps {

  reply: ForumReply
  onMarkAnswer?: () => void
  canMarkAnswer?: boolean
  className?: string
}
export const ReplyCard = ({
  reply
  onMarkAnswer
  canMarkAnswer = false
  className
}: ReplyCardProps,) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (
    <Card className={cn(
      "transition-shadow"
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   className?: string
}

export const ReplyCard = ({ 
  reply,
  onMarkAnswer, 
  canMarkAnswer = false,
  reply
  onMarkAnswer, 
  canMarkAnswer = false
>>>>>>>   className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ForumReply } from "@/types/community",
import { cn } from "@/lib/utils",
interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string
}

export const ReplyCard = ({ 
  reply,
  onMarkAnswer, 
  canMarkAnswer = false,
  reply
  onMarkAnswer, 
  canMarkAnswer = false
  reply,
  onMarkAnswer, 
  canMarkAnswer = false,
  className
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true }),

  return (
    <Card className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      className
=======
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
      "transition-shadow"
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20"
>>>>>>>       className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
      "transition-shadow"
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20"
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
      className
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src={reply.authorAvatar} alt={reply.authorName} />
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-medium">
              {reply.authorName}
            </span>
            {reply.authorRole && (
              <Badge variant="outline" className="ml-2 text-xs">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                {reply.authorRole}
=======
>>>>>>>                 {reply.authorRole}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </Badge>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            )}
            {reply && reply.isAnswer && (;
              <Badge className="ml-2 bg-green-500 text-white">;
                <CheckCircle className="h-3 w-3 mr-1" />;
                Answer;
              </Badge>;
            )}
          </div>;
          <div className="text-xs text-muted-foreground">;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { formatDistanceToNow } from "date-fns",;
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';
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
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true }),;
  return (;
    <Card className={cn(;
      "transition-shadow",;
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",;
      className;
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply.authorAvatar} alt={reply.authorName} />;
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <span className="font-medium">;
              {reply.authorName}
            </span>;
            {reply.authorRole && (;
              <Badge variant="outline" className="ml-2 text-xs">;
                {reply.authorRole}
              </Badge>
            )}
            {reply.isAnswer && (
              <Badge className="ml-2 bg-green-500 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Answer
              </Badge>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {timeAgo}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div>{reply.content}</div>
      </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <CardFooter className="flex justify-between">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <CardFooter className="flex justify-between">
>>>>>>>         <div className="flex items-center gap-2">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button variant="ghost" size="sm" className="px-2">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>{reply.upvotes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="px-2">
            <ThumbsDown className="h-4 w-4 mr-1" />
            <span>{reply.downvotes}</span>
          </Button>
        </div>
        {canMarkAnswer && !reply.isAnswer && (
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">
            <CheckCircle className="h-4 w-4 mr-1" />
            Mark as Answer
          </Button>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </CardFooter>
    </Card>
  )
}
export default ReplyCard
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

      </CardFooter>;
      </CardFooter>
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </Card>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    </Card>;
  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default ReplyCard;
export default ReplyCard;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
