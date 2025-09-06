<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostCard.tsx


<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
import {ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ForumPost} from "@/types/community";
import {ProfileBadge} from "@/components/profile/ProfileBadge";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { ForumPost } from "@/types/community";
import { ProfileBadge } from "@/components/profile/ProfileBadge";
=======
import { ForumPost } from "@/types/community",
import { ProfileBadge } from "@/components/profile/ProfileBadge",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface PostCardProps {

  post: ForumPost
  compact?: boolean
}
export const PostCard = ({ post, compact = false }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
<<<<<<< HEAD

<<<<<<< HEAD
      post.isPinned && "border-zion-purple/50",
=======

    <Card className={cn(

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
    <Card className={cn(;
      "transition-shadow hover: shadow-md";
=======
    <Card className={cn(
<<<<<<< HEAD
      "transition-shadow hover: shadow-md";
      post.isPinned && "border-zion-purple/50"
=======
      "transition-shadow hover:shadow-md",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      post.isPinned && "border-zion-purple/50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      post.isFeatured && "bg-zion-purple/5"
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.authorAvatar} />
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">
              {post.title}
            </Link>
            {post.isAnswered && (
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostCard.tsx
import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
import {ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ForumPost} from "@/types/community";
import {ProfileBadge} from "@/components/profile/ProfileBadge";
interface PostCardProps {;
  post: ForumPost,;
  compact?: boolean;
}
export const PostCard = ({ post, compact = false }: PostCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(post && post.createdAt), { addSuffix: true }),;
  return (
    <CardclassName={cn(
      "transition-shadow hover: shadow-md"
      post && post.isPinned && "border-zion-purple/50",
      post && post.isFeatured && "bg-zion-purple/5"
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-10 w-10">;
          <AvatarImage src={post && post.authorAvatar} />;
          <AvatarFallback>{post && post.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <Link to={`/community/post/${post && post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">;
              {post && post.title}
            </Link>;
            {post && post.isAnswered && (;
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />;
            )}
            {post && post.isPinned && (;
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;
            )}
            {post && post.isLocked && (;
=======

import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { ForumPost } from "@/types/community",;
import { ProfileBadge } from "@/components/profile/ProfileBadge",;
;
interface PostCardProps {;
  post:ForumPost,;
  compact?:boolean;
}
;
export const PostCard = ({ post, compact = false } PostCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix:true }),;
;
  return (;
    <Card className={cn(;
      "transition-shadow hover:shadow-md",;
      post.isPinned && "border-zion-purple/50",;
      post.isFeatured && "bg-zion-purple/5";
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-10 w-10">;
          <AvatarImage src={post.authorAvatar} />;
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">;
              {post.title}
            </Link>;
            {post.isAnswered && (;
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />;
            )}
            {post.isPinned && (;
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;
            )}
            {post.isLocked && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Lock className="h-4 w-4 text-red-500 ml-2" />;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostCard.tsx


=======
            )}
            {post.isPinned && (
              <Pin className="h-4 w-4 text-amber-500 ml-2" />
            )}
            {post.isLocked && (
              <Lock className="h-4 w-4 text-red-500 ml-2" />
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            Posted by {post.authorName} {timeAgo}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { ForumPost } from "@/types/community",;
import { ProfileBadge } from "@/components/profile/ProfileBadge",;
interface PostCardProps {;
  post: ForumPost,;
  compact?: boolean;
}
;
export const PostCard = ({ post, compact = false }: PostCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),;
  return (;
    <Card className={cn(;
      "transition-shadow hover:shadow-md",;
      post.isPinned && "border-zion-purple/50",;
      post.isFeatured && "bg-zion-purple/5";
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-10 w-10">;
          <AvatarImage src={post.authorAvatar} />;
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">;
              {post.title}
            </Link>
            {post.isAnswered && (
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
            {post.isPinned && (
              <Pin className="h-4 w-4 text-amber-500 ml-2" />
            )}
            {post.isLocked && (
              <Lock className="h-4 w-4 text-red-500 ml-2" />
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            Posted by {post.authorName} {timeAgo}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
          <div className="flex flex-wrap gap-2 mt-2">;
            {post.tags?.map(tag => (;
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      {!compact && (
        <CardContent>
          <div className="line-clamp-3">{post.content}</div>
        </CardContent>
      )}
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="px-2">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{post.upvotes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="px-2">
              <ThumbsDown className="h-4 w-4 mr-1" />
              <span>{post.downvotes}</span>
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{post.replyCount} replies</span>
          </div>
        </div>
        {post.isFeatured && (
          <div>
            <Badge className="bg-zion-purple">Featured</Badge>
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD

export default PostCard;

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostCard.tsx
          </div>;
          <div className="text-sm text-muted-foreground">;
<<<<<<< HEAD
            Posted by {post && post.authorName} {timeAgo}
          </div>;
          <div className="flex flex-wrap gap-2 mt-2">;
            {post && post.tags?.map(tag => (;
=======
            Posted by {post.authorName} {timeAgo}
          </div>;
          ;
          <div className="flex flex-wrap gap-2 mt-2">;
            {post.tags?.map(tag => (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;
                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
      {!compact && (;
        <CardContent>;
          <div className="line-clamp-3">{post && post.content}</div>;
        </CardContent>;
      )}
=======
;
      {!compact && (;
        <CardContent>;
          <div className="line-clamp-3">{post.content}</div>;
        </CardContent>;
      )}
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-4">;
          <div className="flex items-center gap-1">;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsUp className="h-4 w-4 mr-1" />;
<<<<<<< HEAD
              <span>{post && post.upvotes}</span>;
            </Button>;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsDown className="h-4 w-4 mr-1" />;
              <span>{post && post.downvotes}</span>;
=======
              <span>{post.upvotes}</span>;
            </Button>;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsDown className="h-4 w-4 mr-1" />;
              <span>{post.downvotes}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </Button>;
          </div>;
          <div className="flex items-center gap-1">;
            <MessageSquare className="h-4 w-4" />;
<<<<<<< HEAD
            <span className="text-sm">{post && post.replyCount} replies</span>;
          </div>;
        </div>;
        {post && post.isFeatured && (;
=======
            <span className="text-sm">{post.replyCount} replies</span>;
          </div>;
        </div>;
        ;
        {post.isFeatured && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div>;
            <Badge className="bg-zion-purple">Featured</Badge>;
          </div>;
        )}
=======


      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  );
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostCard.tsx



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostCard.tsx
export default PostCard;
import { formatDistanceToNow } from './date - fns';
import { Link } from './react-router-dom';
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from './lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { cn } from '@/lib / utils';
import { ForumPost } from '@/types / community';
import { ProfileBadge } from '@/components / profile / ProfileBadge';
interface PostCardProps {
  post: ForumPost,
  compact?: boolean;
}
export const PostCard = ({ post, compact = false }: PostCardProps) =>: any {
  const time_ago = formatDistanceToNow (new Date (post.created_at), { add_suffix: true }),
  return (
    <Card className={cn (
      "transition - shadow hover: shadow - md";
      post.is_pinned && "border - zion - purple / 50",
      post.is_featured && "bg - zion - purple / 5")}>;
      <CardHeader className="flex flex - row items - start gap - 4 space - y-0">;
        <Avatar className="h - 10 w - 10">;
          <AvatarImage src={post.author_avatar} />;
          <AvatarFallback>{post.author_name.char_at (0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex - 1">;
          <div className="flex items - center">;
            <Link to={`/community / post/${post.id}`} className="font - semibold text - lg hover:text - zion - purple transition - colors">;
              {post.title}
            </Link>;
            {post.is_answered && (
              <CheckCircle className="h - 4 w - 4 text - green - 500 ml - 2" />)}
            {post.is_pinned && (
              <Pin className="h - 4 w - 4 text - amber - 500 ml - 2" />)}
            {post.is_locked && (
              <Lock className="h - 4 w - 4 text - red - 500 ml - 2" />)}
          </div>;
          <div className="text - sm text - muted - foreground">;
            Posted by {post.author_name} {time_ago}
          </div>;
          <div className="flex flex - wrap gap - 2 mt - 2">;
            {post.tags?.map (tag => (
              <Badge key={tag} variant="outline" className="bg - zion - purple / 10 hover:bg - zion - purple / 20">;
                {tag}
              </Badge>))}
          </div>;
        </div>;
      </CardHeader>;
      {!compact && (
        <CardContent>;
          <div className="line - clamp - 3">{post.content}</div>;
        </CardContent>)}
      <CardFooter className="flex justify - between">;
        <div className="flex items - center gap - 4">;
          <div className="flex items - center gap - 1">;
            <Button variant="ghost" size="sm" className="px - 2">;
              <ThumbsUp className="h - 4 w - 4 mr - 1" />;
              <span>{post.upvotes}</span>;
            </Button>;
            <Button variant="ghost" size="sm" className="px - 2">;
              <ThumbsDown className="h - 4 w - 4 mr - 1" />;
              <span>{post.downvotes}</span>;
            </Button>;
          </div>;
          <div className="flex items - center gap - 1">;
            <MessageSquare className="h - 4 w - 4" />;
            <span className="text - sm">{post.reply_count} replies</span>;
          </div>;
        </div>;
        {post.is_featured && (
          <div>;
            <Badge className="bg - zion - purple">Featured</Badge>;
          </div>)}
      </CardFooter>;
    </Card>);
}
;
export default PostCard;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},;
;
export default PostCard,; interface PostCardProps {
  post: ForumPost;
compact?: boolean 
}export const PostCard = ({
  post, compact = false 
}: PostCardProps) => {
  const timeAgo = formatDistanceToNow (new Date (post.createdAt), {
  addSuffix: true 
});
return (<Card className= {
  cn ("transition-shadow hover:shadow-md";
post.isPinned && "border-zion-purple/50";
post.isFeatured && "bg-zion-purple/5") 
}> <CardHeader className="flex flex-row items-start gap-4 space-y-0" > <Avatar className="h-10 w-10" > <AvatarImage src= {
  post.authorAvatar 
}/> <AvatarFallback> {
  post.authorName.charAt (0) 
}</AvatarFallback> </Avatar> <div className="flex-1" > <div className="flex items-center" > <Link to= {
  `/community/post/$ {
  post.id 
}` 
}className="font-semibold text-lg hover:text-zion-purple transition-colors" > {
  post.title 
}</Link> {
  post.isAnswered && (<CheckCircle className="h-4 w-4 text-green-500 ml-2" />) 
}{
  post.isPinned && (<Pin className="h-4 w-4 text-amber-500 ml-2" />) 
}{
  post.isLocked && (<Lock className="h-4 w-4 text-red-500 ml-2" />) 
}</div> <div className="text-sm text-muted-foreground" > Posted by {
  post.authorName 
}{
  timeAgo 
}</div> <div className="flex flex-wrap gap-2 mt-2" > {
  post.tags?.map (tag => (<Badge key= {
  tag 
}variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20" > {
  tag 
}
}</div> </div> </CardHeader> {
  !compact && (<CardContent> <div className="line-clamp-3" > {
  post.content 
}</div> </CardContent>) 
}</div> </div> {
  post.isFeatured && (<div> <Badge className="bg-zion-purple" >Featured</Badge> </div>) 
}</CardFooter> </Card>) 
};
export default PostCard;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/PostCard.tsx
=======
      </CardFooter>
    </Card>
  )
}
export default PostCard;

=======
      </CardFooter>;
    </Card>;
  );
};
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default PostCard;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
