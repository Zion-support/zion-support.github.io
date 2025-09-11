<<<<<<< HEAD
<<<<<<< HEAD
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
import { formatDistanceToNow } from "date-fns",
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
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
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true }),

  return (
    <Card className={cn(
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
      "transition-shadow"
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20"
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
      "transition-shadow"
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20"
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
      className
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src={reply.authorAvatar} alt={reply.authorName} />
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-medium text-zion-cyan">{reply.author.name}</span>
            <span className="text-xs text-zion-slate-light">
              {new Date(reply.createdAt).toLocaleDateString()}
            </span>
            {reply.authorRole && (
              <Badge variant="outline" className="ml-2 text-xs">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
className
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply && reply.authorAvatar} alt={reply && reply.authorName} />;
          <AvatarFallback>{reply && reply.authorName.charAt(0)}</AvatarFallback>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <span className="font-medium">;
              {reply && reply.authorName}
            </span>;
            {reply && reply.authorRole && (;
              <Badge variant="outline" className="ml-2 text-xs">;



                {reply.authorRole}
              </Badge>
            )}
            {reply && reply.isAnswer && (;
              <Badge className="ml-2 bg-green-500 text-white">;
                <CheckCircle className="h-3 w-3 mr-1" />;
                Answer;
              </Badge>;
            )}
          </div>;
          <div className="text-xs text-muted-foreground">;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <span className="font-medium">;
<<<<<<< HEAD
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
          <p className="text-zion-slate-light text-sm">{reply.content}</p>
          <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">
            <button className="hover:text-zion-cyan">Like ({reply.likes})</button>
            <button className="hover:text-zion-cyan">Reply</button>
            {canMarkAnswer && onMarkAnswer && (<button onClick={onMarkAnswer} className="hover:text-zion-cyan text-green-500">
                Mark as Answer
              </button>)}
=======
            {timeAgo}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div>{reply.content}</div>
      </CardContent>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <CardFooter className="flex justify-between">
=======
              {reply && reply.authorName}
            </span>;
            {reply && reply.authorRole && (;
              <Badge variant="outline" className="ml-2 text-xs">;



                {reply.authorRole}
              </Badge>
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      


      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2">
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

          </div>;
        </div>;
      </CardHeader>;

      <CardContent>;
        <div>{reply && reply.content}</div>;
      </CardContent>;

      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="sm" className="px-2">;
            <ThumbsUp className="h-4 w-4 mr-1" />;
            <span>{reply && reply.upvotes}</span>;
          </Button>;
          <Button variant="ghost" size="sm" className="px-2">;
            <ThumbsDown className="h-4 w-4 mr-1" />;
            <span>{reply && reply.downvotes}</span>;
          </Button>;
        </div>;

        {canMarkAnswer && !reply && reply.isAnswer && (;
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;
            <CheckCircle className="h-4 w-4 mr-1" />;
            Mark as Answer;
          </Button>;
        )}
      </CardFooter>;
    </Card>;
  );
};




      </CardFooter>;
      </CardFooter>
    </Card>
  )
}
export default ReplyCard

      </CardFooter>;
      </CardFooter>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
    </Card>;
  );
};
export default ReplyCard;
export default ReplyCard;
=======
    </Card>;
  );
};


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      "transition-shadow";
      reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20",
import { formatDistanceToNow  } from './date - fns';
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react'import { Card, CardContent, CardFooter, CardHeader  } from '@/components / ui / card';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import { ForumReply  } from '@/types / community';
import { cn  } from '@/lib / utils';
interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  class_name?: string;
}
export const ReplyCard = ({
  reply;
  onMarkAnswer,
  canMarkAnswer = false;
  class_name;
}: ReplyCardProps, ) =>: any {
  const time_ago = formatDistanceToNow (new Date (reply.created_at), { add_suffix: true }),
  return (
    <Card className={cn (
      "transition - shadow";
      reply.is_answer && "border - green - 500 / 50 bg - green - 50 dark:bg - green - 950 / 20";
      class_name)}>;
      <CardHeader className="flex flex - row items - start gap - 4 space - y-0">;
        <Avatar className="h - 8 w - 8">;
          <AvatarImage src={reply.author_avatar} alt={reply.author_name} />;
          <AvatarFallback>{reply.author_name.char_at (0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex - 1">;
          <div className="flex items - center">;
            <span className="font - medium">;
              {reply.author_name}
            </span>;
            {reply.author_role && (
              <Badge variant="outline" className="ml - 2 text - xs">;
                {reply.author_role}
              </Badge>)}
            {reply.is_answer && (
              <Badge className="ml - 2 bg - green - 500 text - white">;
                <CheckCircle className="h - 3 w - 3 mr - 1" />;
                Answer;
              </Badge>)}
          </div>;
          <div className="text - xs text - muted - foreground">;
            {time_ago}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div>{reply.content}</div>;
      </CardContent>;
      <CardFooter className="flex justify - between">;
        <div className="flex items - center gap - 2">;
          <Button variant="ghost" size="sm" className="px - 2">;
            <ThumbsUp className="h - 4 w - 4 mr - 1" />;
            <span>{reply.upvotes}</span>;
          </Button>;
          <Button variant="ghost" size="sm" className="px - 2">;
            <ThumbsDown className="h - 4 w - 4 mr - 1" />;
            <span>{reply.downvotes}</span>;
          </Button>;
        </div>;
        {canMarkAnswer && !reply.is_answer && (
          <Button size="sm" variant="outline" on_click={onMarkAnswer} className="text - green - 600">;
            <CheckCircle className="h - 4 w - 4 mr - 1" />;
            Mark as Answer;
          </Button>)}
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
<<<<<<< HEAD
export default ReplyCard;
=======
export default ReplyCard;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export default ReplyCard;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
