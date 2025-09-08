onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}


<<<<<<< HEAD
import {formatDistanceToNow} from "date-fns";
import {ThumbsUp, ThumbsDown, CheckCircle} from "@/components/icons";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ForumReply} from "@/types/community";
import {cn} from "@/lib/utils";

=======
import { cn } from "@/lib/utils";
interface ReplyCardProps {}
  reply: ForumReply;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}
<<<<<<< HEAD
=======
import { formatDistanceToNow } from "date-fns",
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ForumReply } from "@/types/community";
import { cn } from "@/lib/utils";
interface ReplyCardProps {}
  reply: ForumReply;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

export const ReplyCard = ({
  reply;
  onMarkAnswer
  canMarkAnswer = false;
import { ForumReply } from "@/types/community",
import { cn } from "@/lib/utils",

<<<<<<< HEAD
=======
interface ReplyCardProps {


>>>>>>> origin/cursor/delete-old-data-records-6bba
  className
}: ReplyCardProps) => {

  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (

<<<<<<< HEAD
    <Card className={cn(
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export const ReplyCard = ({ ;
  reply;
  onMarkAnswer, ;
  canMarkAnswer = false;
<<<<<<< HEAD


      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",




=======


      "transition-shadow";
      reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20"
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
    )}>;

      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;

        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply.authorAvatar} />;
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    )}>;

      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;

        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply && reply.authorAvatar} />;
          <AvatarFallback>{reply && reply.authorName.charAt(0)}</AvatarFallback>;

<<<<<<< HEAD

=======
        </Avatar>;"
        <div className="flex-1">;"
          <div className="flex items-center">;"
            <span className="font-medium">;"

              <Badge variant="outline" className="ml-2 text-xs">;
                {reply.authorRole}
              </Badge>
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div>{reply && reply.content}</div>;
      </CardContent>;

<<<<<<< HEAD
      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="sm" className="px-2">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <ThumbsUp className="h-4 w-4 mr-1" />;
            <span>{reply && reply.upvotes}</span>;
          </Button>;"
          <Button variant="ghost" size="sm" className="px-2">;"
            <ThumbsDown className="h-4 w-4 mr-1" />;
            <span>{reply && reply.downvotes}</span>;
          </Button>;
        </div>;
<<<<<<< HEAD

        {canMarkAnswer && !reply && reply.isAnswer && (;
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;

=======


        {canMarkAnswer && !reply && reply.isAnswer && (;"
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <CheckCircle className="h-4 w-4 mr-1" />;
            Mark as Answer;
          </Button>;
        )}


<<<<<<< HEAD
=======
      </CardFooter>
    </Card>
  )
}
export default ReplyCard;
>>>>>>> origin/cursor/delete-old-data-records-6bba


      </CardFooter>;
    </Card>;
  )
};
<<<<<<< HEAD


export default ReplyCard;


=======
export default ReplyCard;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD




=======


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

                <CheckCircle className="h-3 w-3 mr-1" />;
                Answer;
              </Badge>;
            )}

export default ReplyCard;
>>>>>>> origin/cursor/delete-old-data-records-6bba
