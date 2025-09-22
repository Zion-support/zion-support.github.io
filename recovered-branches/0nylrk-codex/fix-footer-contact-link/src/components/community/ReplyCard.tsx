<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import {formatDistanceToNow} from "date-fns";
import {ThumbsUp, ThumbsDown, CheckCircle} from "@/components/icons";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ForumReply} from "@/types/community";
import {cn} from "@/lib/utils";
interface ReplyCardProps {;
  reply: ForumReply,;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
=======
import {formatDistanceToNow} from "date-fns";"
import {ThumbsUp, ThumbsDown, CheckCircle} from "@/components/icons";"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";"
import {Button} from "@/components/ui/button";"
import {Badge} from "@/components/ui/badge";"
import {ForumReply} from "@/types/community";"
import {cn} from "@/lib/utils";

  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}
<<<<<<< HEAD
"
import { formatDistanceToNow } from "date-fns","
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons","
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card","
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge",";
import { ForumReply } from "@/types/community";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { cn } from "@/lib/utils";
interface ReplyCardProps {}
  reply: ForumReply;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const ReplyCard = ({
  reply;
  onMarkAnswer
  canMarkAnswer = false;
import { ForumReply } from "@/types/community",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ReplyCardProps {
=======

interface ReplyCardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
  onMarkAnswer,
  canMarkAnswer = false,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const ReplyCard = ({ ;
  reply;
export const ReplyCard = ({ 
  reply,
  onMarkAnswer, 
  canMarkAnswer = false,
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  className
}: ReplyCardProps) => {
=======
  className;
}: ReplyCardProps) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <Card className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <Card className={cn(
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export const ReplyCard = ({ ;
  reply;
  onMarkAnswer, ;
  canMarkAnswer = false;
<<<<<<< HEAD
"
      "transition-shadow","
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",

<<<<<<< HEAD
<<<<<<< HEAD
=======
      "transition-shadow";
      reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20"
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
=======

      className;
    )}>"
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { formatDistanceToNow } from "date-fns",;
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ForumReply } from "@/types/community",;
<<<<<<< HEAD
=======
"
import { formatDistanceToNow } from "date-fns",;"
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",;"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"
import { Badge } from "@/components/ui/badge",;"
import { ForumReply } from "@/types/community",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      className
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    )}>;
=======
    <Card className={cn(      className    )}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    <Card className={cn(      className    )}>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    <Card className={cn(      className    )}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
=======
    )}>;"
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
            )}
            {reply.isAnswer && (
              <Badge className="ml-2 bg-green-500 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Answer
              </Badge>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
          <div className="text-xs text-muted-foreground">
            {timeAgo}
<<<<<<< HEAD
<<<<<<< HEAD
export default ReplyCard;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default ReplyCard;


import { formatDistanceToNow } from './date - fns';'
import { ThumbsUp, ThumbsDown, CheckCircle } from '@/components / icons';'
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';'
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';'
import { ForumReply } from '@/types / community';'
import { cn } from '@/lib / utils';
interface ReplyCardProps {}
=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  reply: ForumReply,
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  class_name?: string;
}
<<<<<<< HEAD
export const ReplyCard = ({};
=======
export const ReplyCard = ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  reply;
  onMarkAnswer,
  canMarkAnswer = false;
  class_name;
<<<<<<< HEAD
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
=======
}: ReplyCardProps) =>: any {
  const time_ago = formatDistanceToNow (new Date (reply.created_at), { add_suffix: true }),
  return (
    <Card className={cn (
      "transition - shadow";
      reply.is_answer && "border - green - 500 / 50 bg - green - 50 dark: bg - green - 950 / 20",
      class_name)}>;
      <CardHeader className="flex flex - row items - start gap - 4 space - y-0">;
        <Avatar className="h - 8 w - 8">;
          <AvatarImage src={reply.author_avatar} />;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="text - xs text - muted - foreground">;
            {time_ago}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div>{reply.content}</div>;
<<<<<<< HEAD
      </CardContent>;"
      <CardFooter className="flex justify - between">;"
        <div className="flex items - center gap - 2">;"
          <Button variant="ghost" size="sm" className="px - 2">;"
            <ThumbsUp className="h - 4 w - 4 mr - 1" />;
            <span>{reply.upvotes}</span>;
          </Button>;"
          <Button variant="ghost" size="sm" className="px - 2">;"
=======
      </CardContent>;
      <CardFooter className="flex justify - between">;
        <div className="flex items - center gap - 2">;
          <Button variant="ghost" size="sm" className="px - 2">;
            <ThumbsUp className="h - 4 w - 4 mr - 1" />;
            <span>{reply.upvotes}</span>;
          </Button>;
          <Button variant="ghost" size="sm" className="px - 2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <ThumbsDown className="h - 4 w - 4 mr - 1" />;
            <span>{reply.downvotes}</span>;
          </Button>;
        </div>;
<<<<<<< HEAD
        {canMarkAnswer && !reply.is_answer && ("
          <Button size="sm" variant="outline" on_click={onMarkAnswer} className="text - green - 600">;"
=======
        {canMarkAnswer && !reply.is_answer && (
          <Button size="sm" variant="outline" on_click={onMarkAnswer} className="text - green - 600">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


<<<<<<< HEAD
export default ReplyCard;
export default ReplyCard;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default ReplyCard;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default ReplyCard;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
