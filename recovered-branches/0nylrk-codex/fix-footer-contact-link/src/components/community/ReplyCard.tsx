<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx

<<<<<<< HEAD

import { formatDistanceToNow } from "date-fns",
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {formatDistanceToNow} from "date-fns";
import {ThumbsUp, ThumbsDown, CheckCircle} from "@/components/icons";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ForumReply} from "@/types/community";
import {cn} from "@/lib/utils";
<<<<<<< HEAD
<<<<<<< HEAD
interface ReplyCardProps {;
  reply: ForumReply,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ReplyCardProps {
  reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  onMarkAnswer, 
  canMarkAnswer = false,

=======

export const ReplyCard = ({ 
  reply,

  onMarkAnswer, 
  canMarkAnswer = false,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const ReplyCard = ({ ;
  reply;
export const ReplyCard = ({ 
  reply,
  onMarkAnswer, 
  canMarkAnswer = false,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  className
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (
    <Card className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx
export const ReplyCard = ({ ;
  reply;
  onMarkAnswer, ;
  canMarkAnswer = false;
=======

      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      "transition-shadow";
      reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20"
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  const timeAgo = formatDistanceToNow(new Date(reply && reply.createdAt), { addSuffix: true }),;
  return (
    <CardclassName={cn(
      "transition-shadow"
      reply && reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20",
      className
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply && reply.authorAvatar} />;
          <AvatarFallback>{reply && reply.authorName.charAt(0)}</AvatarFallback>;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <span className="font-medium">;
<<<<<<< HEAD
              {reply && reply.authorName}
            </span>;
            {reply && reply.authorRole && (;
              <Badge variant="outline" className="ml-2 text-xs">;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx
<<<<<<< HEAD
=======
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
            {timeAgo}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

export default ReplyCard;

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx
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
=======


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </CardFooter>
    </Card>
  )
}
export default ReplyCard;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </CardFooter>;
    </Card>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx
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
export const ReplyCard = ({
  reply;
  onMarkAnswer,
  canMarkAnswer = false;
  class_name;
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
;
export default ReplyCard;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
              </Badge>;
            )}
            {reply.isAnswer && (;
              <Badge className="ml-2 bg-green-500 text-white">;
                <CheckCircle className="h-3 w-3 mr-1" />;
                Answer;
              </Badge>;
            )}
          </div>;
          <div className="text-xs text-muted-foreground">;
            {timeAgo}
          </div>;
        </div>;
      </CardHeader>;
      ;
      <CardContent>;
        <div>{reply.content}</div>;
      </CardContent>;
      ;
      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="sm" className="px-2">;
            <ThumbsUp className="h-4 w-4 mr-1" />;
            <span>{reply.upvotes}</span>;
          </Button>;
          <Button variant="ghost" size="sm" className="px-2">;
            <ThumbsDown className="h-4 w-4 mr-1" />;
            <span>{reply.downvotes}</span>;
          </Button>;
        </div>;
        ;
        {canMarkAnswer && !reply.isAnswer && (;
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;
            <CheckCircle className="h-4 w-4 mr-1" />;
            Mark as Answer;
          </Button>;
        )}
      </CardFooter>;
    </Card>;
  ),;
},;
;
export default ReplyCard,; interface ReplyCardProps {
  reply: ForumReply;
onMarkAnswer?: () => void;
canMarkAnswer?: boolean;
className?: string 
}export const ReplyCard = ({
  reply;
onMarkAnswer;
canMarkAnswer = false;
className 
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow (new Date (reply.createdAt), {
  addSuffix: true 
});
return (<Card className= {
  cn ("transition-shadow";
reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20";
className) 
}> <CardHeader className="flex flex-row items-start gap-4 space-y-0" > <Avatar className="h-8 w-8" > <AvatarImage src= {
  reply.authorAvatar 
}/> <AvatarFallback> {
  reply.authorName.charAt (0) 
}</AvatarFallback> </Avatar> <div className="flex-1" > <div className="flex items-center" > <span className="font-medium" > {
  reply.authorName 
}</span> {
  reply.authorRole && (<Badge variant="outline" className="ml-2 text-xs" > {
  reply.authorRole 
}</Badge>) 
}{
  reply.isAnswer && (<Badge className="ml-2 bg-green-500 text-white" > <CheckCircle className="h-3 w-3 mr-1" /> 
}</div> </div> </div> </CardHeader> <CardContent> <div> {
  reply.content 
}</div> </CardContent> Mark as Answer </Button>) 
}</CardFooter> </Card>) 
};
export default ReplyCard;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ReplyCard.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ReplyCard;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export default ReplyCard;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
