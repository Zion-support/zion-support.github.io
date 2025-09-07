onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}

import { cn } from "@/lib/utils";
interface ReplyCardProps {}
  reply: ForumReply;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}
<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ForumReply } from "@/types/community";
import { cn } from "@/lib/utils";
interface ReplyCardProps {

  reply: ForumReply

  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string
}

export const ReplyCard = ({
  reply;
  onMarkAnswer
  canMarkAnswer = false;
import { ForumReply } from "@/types/community",
import { cn } from "@/lib/utils",
=======

export const ReplyCard = ({
  reply;
  onMarkAnswer
  canMarkAnswer = false;
import { ForumReply } from "@/types/community",
import { cn } from "@/lib/utils",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ReplyCardProps {

  reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string;
}

export const ReplyCard = ({ ;
  reply;
export const ReplyCard = ({ 
  reply,
  onMarkAnswer, 
  canMarkAnswer = false,

  className
}: ReplyCardProps) => {

  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const ReplyCard = ({ ;
  reply;
  onMarkAnswer, ;
  canMarkAnswer = false;

<<<<<<< HEAD
      "transition-shadow";
      reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20"
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">

        <Avatar className="h-8 w-8">
          <AvatarImage src={reply.authorAvatar} />
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>
        </Avatar>"
        <div className="flex-1">"
          <div className="flex items-center">"
            <span className="font-medium">
              {reply.authorName}
            </span>
            {reply.authorRole && ("
              <Badge variant="outline" className="ml-2 text-xs">
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
          <AvatarImage src={reply.authorAvatar} />;
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>;
=======

    )}>;

      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;

        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply && reply.authorAvatar} />;
          <AvatarFallback>{reply && reply.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;"
        <div className="flex-1">;"
          <div className="flex items-center">;"
            <span className="font-medium">;"
              <Badge variant="outline" className="ml-2 text-xs">;
                {reply.authorRole}
              </Badge>

          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div>{reply && reply.content}</div>;
      </CardContent>;
"
      <CardFooter className="flex justify-between">;"
        <div className="flex items-center gap-2">;"
          <Button variant="ghost" size="sm" className="px-2">;"
            <ThumbsUp className="h-4 w-4 mr-1" />;
            <span>{reply && reply.upvotes}</span>;
          </Button>;"
          <Button variant="ghost" size="sm" className="px-2">;"
            <ThumbsDown className="h-4 w-4 mr-1" />;
            <span>{reply && reply.downvotes}</span>;
          </Button>;
        </div>;

        {canMarkAnswer && !reply && reply.isAnswer && (;"
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;"
            <CheckCircle className="h-4 w-4 mr-1" />;
            Mark as Answer;
          </Button>;
        )}

      </CardFooter>
    </Card>
  )
}
export default ReplyCard;

      </CardFooter>;
    </Card>;
  )
};
<<<<<<< HEAD
export default ReplyCard;
=======

export default ReplyCard;

import { formatDistanceToNow } from './date - fns';
import { ThumbsUp, ThumbsDown, CheckCircle } from '@/components / icons';
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { ForumReply } from '@/types / community';
import { cn } from '@/lib / utils';
interface ReplyCardProps {

  reply: ForumReply,
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  class_name?: string;
}

  reply;
  onMarkAnswer,
  canMarkAnswer = false;
  class_name;

          <div className="text - xs text - muted - foreground">;
            {time_ago}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div>{reply.content}</div>;

            <ThumbsDown className="h - 4 w - 4 mr - 1" />;
            <span>{reply.downvotes}</span>;
          </Button>;
        </div>;

            <CheckCircle className="h - 4 w - 4 mr - 1" />;
            Mark as Answer;
          </Button>)}
      </CardFooter>;
    </Card>);
}
;
export default ReplyCard;
;

import { formatDistanceToNow } from "date-fns",;
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ForumReply } from "@/types/community",;
import { cn } from "@/lib/utils",;
;
interface ReplyCardProps {;
  reply:ForumReply,;
  onMarkAnswer?:() => void,;
  canMarkAnswer?:boolean,;
  className?:string;
}
;
export const ReplyCard = ({ ;
  reply,;
  onMarkAnswer, ;
  canMarkAnswer = false,;
  className;
} ReplyCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix:true }),;
;
  return (;
    <Card className={cn(;
      "transition-shadow",;
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",;
      className;
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply.authorAvatar} />;
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <span className="font-medium">;
              {reply.authorName}
            </span>;
            {reply.authorRole && (;
              <Badge variant="outline" className="ml-2 text-xs">;                {reply.authorRole}
                {reply && reply.authorRole}

              </Badge>;
            )}
            {reply && reply.isAnswer && (;"
              <Badge className="ml-2 bg-green-500 text-white">;"
                <CheckCircle className="h-3 w-3 mr-1" />;
                Answer;
              </Badge>;
            )}
      </CardFooter>;
    </Card>;
  )
};

export default ReplyCard;
export default ReplyCard;
export default ReplyCard;