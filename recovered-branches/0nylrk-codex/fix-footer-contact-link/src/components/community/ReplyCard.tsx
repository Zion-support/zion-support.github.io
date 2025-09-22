
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}

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

export const ReplyCard = ({
  reply;
  onMarkAnswer
  canMarkAnswer = false;
import { ForumReply } from "@/types/community",
import { cn } from "@/lib/utils",
interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string;
}

onMarkAnswer,
  canMarkAnswer = false,


export const ReplyCard = ({ ;
  reply;
export const ReplyCard = ({ 
  reply,
  onMarkAnswer, 
  canMarkAnswer = false,
  className
}: ReplyCardProps) => {
  className;
}: ReplyCardProps) => {}
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (
    <Card className={cn(

export const ReplyCard = ({ ;
  reply;
  onMarkAnswer, ;
  canMarkAnswer = false;
"
      "transition-shadow","
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",

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
    )}>;
    <Card className={cn(      className    )}>;
  className;
}: ReplyCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(reply && reply.createdAt), { addSuffix: true }),;

  return (
    <CardclassName={cn(
      "transition-shadow"
      reply && reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20",
      className
  className;
}: ReplyCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true }),;
  return (;
    <Card className={cn(;
      "transition-shadow",;
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",;
      className;
      className
    )}>;
    <Card className={cn(      className    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
    )}>;"
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;"
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
)}
            {reply.isAnswer && (
              <Badge className="ml-2 bg-green-500 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Answer
              </Badge>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            {timeAgo}
export default ReplyCard;

          </div>
          <div className="text-xs text-muted-foreground">
            {timeAgo}
</div>
        </div>
      </CardHeader>
      <CardContent>
        <div>{reply.content}</div>
      </CardContent>
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
export const ReplyCard = ({};
  reply;
  onMarkAnswer,
  canMarkAnswer = false;
  class_name;
}: ReplyCardProps) =>: any {}
  const time_ago = formatDistanceToNow (new Date (reply.created_at), { add_suffix: true }),
  return (
    <Card className={cn ("
      "transition - shadow";"
      reply.is_answer && "border - green - 500 / 50 bg - green - 50 dark: bg - green - 950 / 20",
      class_name)}>;"
      <CardHeader className="flex flex - row items - start gap - 4 space - y-0">;"
        <Avatar className="h - 8 w - 8">;
          <AvatarImage src={reply.author_avatar} />;
          <AvatarFallback>{reply.author_name.char_at (0)}</AvatarFallback>;
        </Avatar>;"
        <div className="flex - 1">;"
          <div className="flex items - center">;"
            <span className="font - medium">;
              {reply.author_name}
            </span>;
            {reply.author_role && ("
              <Badge variant="outline" className="ml - 2 text - xs">;
                {reply.author_role}
              </Badge>)}
            {reply.is_answer && ("
              <Badge className="ml - 2 bg - green - 500 text - white">;"
                <CheckCircle className="h - 3 w - 3 mr - 1" />;
                Answer;
              </Badge>)}
          </div>;"
          <div className="text - xs text - muted - foreground">;
            {time_ago}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div>{reply.content}</div>;
</CardContent>;"
      <CardFooter className="flex justify - between">;"
        <div className="flex items - center gap - 2">;"
          <Button variant="ghost" size="sm" className="px - 2">;"
            <ThumbsUp className="h - 4 w - 4 mr - 1" />;
            <span>{reply.upvotes}</span>;
          </Button>;"
          <Button variant="ghost" size="sm" className="px - 2">;"
            <ThumbsDown className="h - 4 w - 4 mr - 1" />;
            <span>{reply.downvotes}</span>;
          </Button>;
        </div>;
{canMarkAnswer && !reply.is_answer && ("
          <Button size="sm" variant="outline" on_click={onMarkAnswer} className="text - green - 600">;"
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

export default ReplyCard;
export default ReplyCard;

'"

"
import { formatDistanceToNow } from "date-fns",""
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",""
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge",""
import { ForumReply } from "@/types/community";""
import { cn } from "@/lib/utils";"
interface ReplyCardProps {
  // TODO: Implement
  reply: ForumReply;

export const ReplyCard = ({
  reply;
  onMarkAnswer;
  canMarkAnswer = false;"
import { ForumReply } from "@/types/community",""
import { cn } from "@/lib/utils","
  // TODO: Implement
  reply: ForumReply,)
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,

  reply,

  onMarkAnswer, 
  canMarkAnswer = false,

export const ReplyCard = ({ ;
  className;)
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (
    <Card className={cn(

  onMarkAnswer, ;
  canMarkAnswer = false;
      "transition-shadow",""
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20","
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">"
        <Avatar className="h-8 w-8">"

          <AvatarImage src={reply.authorAvatar} />

          <AvatarFallback>{reply.authorName.charAt(0)}
        <div className="flex-1">"
</div>"
          <div className="flex items-center">"
            <span className="font-medium">"
</span>
            </span>"
              <Badge variant="outline" className="ml-2 text-xs">"

    <CardclassName={cn("
      "transition-shadow"""
      reply && reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20","
      className;
}: ReplyCardProps) => {;

    <Card className={cn(;"
      "transition-shadow",;""
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",;"
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;"
        <Avatar className="h-8 w-8">;"

          <AvatarImage src={reply && reply.authorAvatar} />;

          <AvatarFallback>{reply && reply.authorName.charAt(0)};
        ;"
        <div className="flex-1">;"
          <div className="flex items-center">;"
            <span className="font-medium">;"
              <Badge variant="outline" className="ml-2 text-xs">;"

              <Badge className="ml-2 bg-green-500 text-white">"
                <CheckCircle className="h-3 w-3 mr-1" />"

          <div className="text-xs text-muted-foreground">"
</div>
          </div>;
      ;
      <CardContent>;

        <div>{reply && reply.content}</div>;
      <CardFooter className="flex justify-between">;"
        <div className="flex items-center gap-2">;"
          <Button variant="ghost" size="sm" className="px-2">;"
            <ThumbsUp className="h-4 w-4 mr-1" />;"

            <span>{reply && reply.upvotes}</span>;
            <ThumbsDown className="h-4 w-4 mr-1" />;"

            <span>{reply && reply.downvotes}</span>;
        </div>;"
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;"
            <CheckCircle className="h-4 w-4 mr-1" />;"

    <Card className={cn ("
      "transition - shadow";""
      reply.is_answer && "border - green - 500 / 50 bg - green - 50 dark: bg - green - 950 / 20",")
      class_name)}>;
      <CardHeader className="flex flex - row items - start gap - 4 space - y-0">;"
        <Avatar className="h - 8 w - 8">;"

          <AvatarImage src={reply.author_avatar} />;

          <AvatarFallback>{reply.author_name.char_at (0)};
        <div className="flex - 1">;"
          <div className="flex items - center">;"
            <span className="font - medium">;"
            </span>;"
              <Badge variant="outline" className="ml - 2 text - xs">;"

              )}"
              <Badge className="ml - 2 bg - green - 500 text - white">;"
                <CheckCircle className="h - 3 w - 3 mr - 1" />;"

              )}
          <div className="text - xs text - muted - foreground">;"

        <div>{reply.content}</div>;
      <CardFooter className="flex justify - between">;"
        <div className="flex items - center gap - 2">;"
          <Button variant="ghost" size="sm" className="px - 2">;"
            <ThumbsUp className="h - 4 w - 4 mr - 1" />;"

            <span>{reply.upvotes}</span>;
            <ThumbsDown className="h - 4 w - 4 mr - 1" />;"

            <span>{reply.downvotes}</span>;
          <Button size="sm" variant="outline" on_click={onMarkAnswer} className="text - green - 600">;"
            <CheckCircle className="h - 4 w - 4 mr - 1" />;"

    );

          <AvatarImage src={reply.authorAvatar} />;

          <AvatarFallback>{reply.authorName.charAt(0)};
              <Badge variant="outline" className="ml-2 text-xs">;                {reply.authorRole}"

              <Badge className="ml-2 bg-green-500 text-white">;"
                <CheckCircle className="h-3 w-3 mr-1" />;"
pr-12325

