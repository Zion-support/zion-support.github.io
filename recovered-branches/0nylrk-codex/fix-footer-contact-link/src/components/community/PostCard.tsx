

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



import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { ForumPost } from "@/types/community";
import { ProfileBadge } from "@/components/profile/ProfileBadge";
import { ForumPost } from "@/types/community",
import { ProfileBadge } from "@/components/profile/ProfileBadge",
interface PostCardProps {

import { formatDistanceToNow } from "date-fns","
import { Link } from "react-router-dom","
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react","
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card","
import { Badge } from "@/components/ui/badge","
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
import { Button } from "@/components/ui/button","
import { cn } from "@/lib/utils",";
import { ForumPost } from "@/types/community";"
import { ProfileBadge } from "@/components/profile/ProfileBadge";"
import { ForumPost } from "@/types/community","
import { ProfileBadge } from "@/components/profile/ProfileBadge",

interface PostCardProps {};
  post: ForumPost;
  compact?: boolean;
}
export const PostCard = ({ post, compact = false }: PostCardProps) => {}
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
post.isPinned && "border-zion-purple/50",
    <Card className={cn(

<Card className={cn(

<Card className={cn(;
      "transition-shadow hover: shadow-md";
    <Card className={cn(
      "transition-shadow hover: shadow-md";
      post.isPinned && "border-zion-purple/50"
      "transition-shadow hover:shadow-md",
      post.isPinned && "border-zion-purple/50",
      post.isFeatured && "bg-zion-purple/5"
import { ProfileBadge } from "@/components/profile/ProfileBadge",      post.isFeatured && "bg-zion-purple/5"
      post.isFeatured && "bg-zion-purple/5"
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">

"
      post.isFeatured && "bg-zion-purple/5"
    )}>"
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">"
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.authorAvatar} />
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>"
        <div className="flex-1">"
          <div className="flex items-center">"
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">
              {post.title}
            </Link>
{post.isAnswered && (
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />

            )};
            {post && post.isPinned && (;"
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;
            )}
            {post && post.isLocked && (;"
              <Lock className="h-4 w-4 text-red-500 ml-2" />;
            )}

"
import { formatDistanceToNow } from "date-fns",;"
import { Link } from "react-router-dom",;"
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",;"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"
import { cn } from "@/lib/utils",;"
import { ForumPost } from "@/types/community",;"
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
<Card className={cn(;"
      "transition-shadow hover:shadow-md",;"
      post.isPinned && "border-zion-purple/50",;"
      post.isFeatured && "bg-zion-purple/5";
    )}>;"
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;"
        <Avatar className="h-10 w-10">;
          <AvatarImage src={post.authorAvatar} />;
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;"
        <div className="flex-1">;"
          <div className="flex items-center">;"`
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">;
              {post.title}
            </Link>;
            {post.isAnswered && (;"
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />;
            )}
            {post.isPinned && (;"
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;
            )}
            {post.isLocked && (;"
              <Lock className="h-4 w-4 text-red-500 ml-2" />;
            )}
            )}
            {post.isPinned && ("
              <Pin className="h-4 w-4 text-amber-500 ml-2" />
            )}
            {post.isLocked && ("
              <Lock className="h-4 w-4 text-red-500 ml-2" />
            )}
</div>
          <div className="text-sm text-muted-foreground">
            Posted by {post.authorName} {timeAgo}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">

import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />import { Link } from "react-router-dom",;
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />import { Link } from "react-router-dom",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { ForumPost } from "@/types/community",;
"
import { formatDistanceToNow } from "date-fns",;"
import { Link } from "react-router-dom",;"
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",;"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"
import { cn } from "@/lib/utils",;"
import { ForumPost } from "@/types/community",;"
import { ProfileBadge } from "@/components/profile/ProfileBadge",;
interface PostCardProps {;
  post: ForumPost,;
  compact?: boolean;
}
;
export const PostCard = ({ post, compact = false }: PostCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),;
  return (;
    <Card className={cn(;"
      "transition-shadow hover:shadow-md",;"
      post.isPinned && "border-zion-purple/50",;"
      post.isFeatured && "bg-zion-purple/5";
    )}>;"
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;"
        <Avatar className="h-10 w-10">;
          <AvatarImage src={post.authorAvatar} />;
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;"
        <div className="flex-1">;"
          <div className="flex items-center">;"`
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">;
              {post.title}
            </Link>
            {post.isAnswered && ("
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
            )}
            {post.isPinned && ("
              <Pin className="h-4 w-4 text-amber-500 ml-2" />
            )}
            {post.isLocked && ("
              <Lock className="h-4 w-4 text-red-500 ml-2" />
            )}
          </div>"
          <div className="text-sm text-muted-foreground">
            Posted by {post.authorName} {timeAgo}
          </div>;"
          <div className="flex flex-wrap gap-2 mt-2">;
            {post.tags?.map(tag => (;"
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;




                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      {!compact && (
<CardContent>"
          <div className="line-clamp-3">{post.content}</div>
        </CardContent>
      )}"
      <CardFooter className="flex justify-between">"
        <div className="flex items-center gap-4">"
          <div className="flex items-center gap-1">"
            <Button variant="ghost" size="sm" className="px-2">"
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{post.upvotes}</span>
            </Button>"
            <Button variant="ghost" size="sm" className="px-2">"
              <ThumbsDown className="h-4 w-4 mr-1" />
              <span>{post.downvotes}</span>
            </Button>
          </div>"
          <div className="flex items-center gap-1">"
            <MessageSquare className="h-4 w-4" />"
            <span className="text-sm">{post.replyCount} replies</span>
          </div>
        </div>
        {post.isFeatured && (
<div>"
            <Badge className="bg-zion-purple">Featured</Badge>
          </div>
        )}

export default PostCard;
export default PostCard;
            Posted by {post && post.authorName} {timeAgo}
          </div>;

          <div className="flex flex-wrap gap-2 mt-2">;
            {post && post.tags?.map(tag => (;
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;
                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;
      </CardHeader>;
"
      <CardFooter className="flex justify-between">;"
        <div className="flex items-center gap-4">;"
          <div className="flex items-center gap-1">;"
            <Button variant="ghost" size="sm" className="px-2">;"
              <ThumbsUp className="h-4 w-4 mr-1" />;

            </Button>;
          </div>;"
          <div className="flex items-center gap-1">;"
            <MessageSquare className="h-4 w-4" />;

          <div>;"
            <Badge className="bg-zion-purple">Featured</Badge>;
          </div>;
        )}

      </CardFooter>;
    </Card>;
export default PostCard;

import { formatDistanceToNow } from './date - fns';'
import { Link } from './react-router-dom';'
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from './lucide-react';'
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';'
import { Button } from '@/components / ui / button';'
import { cn } from '@/lib / utils';'
import { ForumPost } from '@/types / community';'
import { ProfileBadge } from '@/components / profile / ProfileBadge';
interface PostCardProps {}
  post: ForumPost,
  compact?: boolean;
}
export const PostCard = ({ post, compact = false }: PostCardProps) =>: any {}
  const time_ago = formatDistanceToNow (new Date (post.created_at), { add_suffix: true }),
  return (
    <Card className={cn (";
      "transition - shadow hover: shadow - md";"
      post.is_pinned && "border - zion - purple / 50","
      post.is_featured && "bg - zion - purple / 5")}>;"
      <CardHeader className="flex flex - row items - start gap - 4 space - y-0">;"
        <Avatar className="h - 10 w - 10">;
          <AvatarImage src={post.author_avatar} />;
          <AvatarFallback>{post.author_name.char_at (0)}</AvatarFallback>;
        </Avatar>;"
        <div className="flex - 1">;"
          <div className="flex items - center">;"`
            <Link to={`/community / post/${post.id}`} className="font - semibold text - lg hover:text - zion - purple transition - colors">;
              {post.title}
            </Link>;
            {post.is_answered && ("
              <CheckCircle className="h - 4 w - 4 text - green - 500 ml - 2" />)}
            {post.is_pinned && ("
              <Pin className="h - 4 w - 4 text - amber - 500 ml - 2" />)}
            {post.is_locked && ("
              <Lock className="h - 4 w - 4 text - red - 500 ml - 2" />)}
          </div>;"
          <div className="text - sm text - muted - foreground">;
            Posted by {post.author_name} {time_ago}
          </div>;"
          <div className="flex flex - wrap gap - 2 mt - 2">;
            {post.tags?.map (tag => ("
              <Badge key={tag} variant="outline" className="bg - zion - purple / 10 hover:bg - zion - purple / 20">;
                {tag}
              </Badge>))}
          </div>;
        </div>;
      </CardHeader>;
      {!compact && (
<CardContent>;"
          <div className="line - clamp - 3">{post.content}</div>;
        </CardContent>)}"
      <CardFooter className="flex justify - between">;"
        <div className="flex items - center gap - 4">;"
          <div className="flex items - center gap - 1">;"
            <Button variant="ghost" size="sm" className="px - 2">;"
              <ThumbsUp className="h - 4 w - 4 mr - 1" />;
              <span>{post.upvotes}</span>;
            </Button>;"
            <Button variant="ghost" size="sm" className="px - 2">;"
              <ThumbsDown className="h - 4 w - 4 mr - 1" />;
              <span>{post.downvotes}</span>;
            </Button>;
          </div>;"
          <div className="flex items - center gap - 1">;"
            <MessageSquare className="h - 4 w - 4" />;"
            <span className="text - sm">{post.reply_count} replies</span>;
          </div>;
        </div>;
        {post.is_featured && (
<div>;"
            <Badge className="bg - zion - purple">Featured</Badge>;
          </div>)}
      </CardFooter>;
    </Card>);
}
;
export default PostCard;
;
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
      </CardFooter>
    </Card>
  )
}
export default PostCard;

      </CardFooter>;
    </Card>;
  );
};
export default PostCard;

export default PostCard;

export default PostCard;

'"`
      post.isFeatured && "bg-zion-purple/5"

