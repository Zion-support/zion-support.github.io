<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/PostCard.tsx


interface PostCardProps {
  post: ForumPost
  compact?: boolean
}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import {formatDistanceToNow} from "date-fns"
import Link from "next/link"
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react'

import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ForumPost } from "@/types/community"
import { logInfo } from '@/utils/productionLogger'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> interface PostCardProps {
  post: ForumPost
  compact?: boolean
}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ForumPost } from "@/types/community";
import { logInfo } from '@/utils/productionLogger';
interface PostCardProps {
  post: ForumPost,
  compact?: boolean
}

import React from 'react',
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { ForumPost } from "@/types/community",
import { logInfo } from '@/utils/productionLogger',
interface PostCardProps {
  post: ForumPost
  compact?: boolean
}
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent)
PostCard.displayName = 'PostCard'
export default PostCard

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),

  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';
export default PostCard;
}
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
interface PostCardProps {
  post: ForumPost
  compact?: boolean
}






<<<<<<< HEAD
      "transition-shadow hover: shadow-md",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import {formatDistanceToNow} from "date-fns";
import Link from "next/link";
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react';
import React from 'react';
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ForumPost } from "@/types/community";
import { logInfo } from '@/utils/productionLogger';
interface PostCardProps {;
  post: ForumPost,;
  compact?: boolean;
}
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(post && post.createdAt), { addSuffix: true }),;
  return (
    <Card data-testid="post-card" className={cn(;
      "transition-shadow hover:shadow-md";
export const PostCard = React && React.memo(PostCardComponent);
PostCard && PostCard.displayName = 'PostCard';
export default PostCard;
      "transition-shadow hover: shadow-md",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/PostCard.tsx
=======

      "transition-shadow hover: shadow-md",
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import React from 'react';
import { formatDistanceToNow } from './date - fns';
import Link from './next / link';
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react';
import { formatDistanceToNow  } from './date - fns';
import { Card, CardContent, CardFooter, CardHeader  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { cn  } from '@/lib / utils';
import { ForumPost  } from '@/types / community';
import { log_info } from '@/utils / production_logger';
interface PostCardProps {
  post: ForumPost,
  compact?: boolean;
}
const PostCardComponent = ({ post, compact = false }: PostCardProps) =>: any {
  const time_ago = formatDistanceToNow (new Date (post.created_at), { add_suffix: true }),
  return (
    <Card data - testid="post - card" className={cn (
      "transition - shadow hover:shadow - md";
export const PostCard = React.memo (PostCardComponent);
PostCard.display_name = 'PostCard';
export default PostCard;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/PostCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
onst PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;

export default PostCard;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

import React from 'react',;
import { formatDistanceToNow } from "date-fns",;
import Link from "next/link",;
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { ForumPost } from "@/types/community",;
import { logInfo } from '@/utils/productionLogger',;
interface PostCardProps {;
  post:ForumPost,;
  compact?:boolean;
}
;
const PostCardComponent = ({ post, compact = false } PostCardProps) => {;
  logInfo('PostCardComponent rendering with post:', { data:post ? post.id :'NO POST' }),;
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix:true }),;
;
  return (;
    <Card data-testid="post-card" className={cn(;
      "transition-shadow hover:shadow-md",;
      post.isPinned && "border-zion-purple/50",;
      post.isFeatured && "bg-zion-purple/5";
    )}>;
      <p>DEBUG:PostCard ID:{post?.id}</p>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-10 w-10">;
          <AvatarImage src={post.authorAvatar} alt={post.authorName} />;
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <Link href={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">;
              {post.title}
            </Link>;
            {post.isAnswered && (;
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />;
            )}
            {post.isPinned && (;
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;
            )}
            {post.isLocked && (;
              <Lock className="h-4 w-4 text-red-500 ml-2" />;
            )}
          </div>;
          <div className="text-sm text-muted-foreground">;
            Posted by {post.authorName} {timeAgo}
          </div>;
          ;
          <div className="flex flex-wrap gap-2 mt-2">;
            {post.tags?.map(tag => (;
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;
                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;
      </CardHeader>;
;
      {!compact && (;
        <CardContent>;
          <div className="line-clamp-3">{post.content}</div>;
        </CardContent>;
      )}
;
      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-4">;
          <div className="flex items-center gap-1">;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsUp className="h-4 w-4 mr-1" />;
              <span>{post.upvotes}</span>;
            </Button>;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsDown className="h-4 w-4 mr-1" />;
              <span>{post.downvotes}</span>;
            </Button>;
          </div>;
          <div className="flex items-center gap-1">;
            <MessageSquare className="h-4 w-4" />;
            <span className="text-sm">{post.replyCount} replies</span>;
          </div>;
        </div>;
        ;
        {post.isFeatured && (;
          <div>;
            <Badge className="bg-zion-purple">Featured</Badge>;
          </div>;
        )}
      </CardFooter>;
    </Card>;
  ),;
},;
;
export const PostCard = React.memo(PostCardComponent),;
PostCard.displayName = 'PostCard',;
;
export default PostCard,; interface PostCardProps {;
  post: ForumPost;
compact?: boolean ;
}const PostCardComponent = ({;
  post, compact = false ;
}: PostCardProps) => {;
  logInfo ('PostCardComponent rendering with post:', {';
  data: post ? post.id : 'NO POST' ;
});
const timeAgo = formatDistanceToNow (new Date (post.createdAt), {;
  addSuffix: true ;
});
return (<Card data-testid="post-card" className= {";
  cn ("transition-shadow hover:shadow-md";";
post.isPinned && "border-zion-purple/50";";
post.isFeatured && "bg-zion-purple/5") ;
}> <p>DEBUG: PostCard ID: {;
  post?.id ";
}</p> <CardHeader className="flex flex-row items-start gap-4 space-y-0" > <Avatar className="h-10 w-10" > <AvatarImage src= {;
  post.authorAvatar ;
}alt= {;
  post.authorName ;
}/> <AvatarFallback> {;
  post.authorName.charAt (0) ";
}</AvatarFallback> </Avatar> <div className="flex-1" > <div className="flex items-center" > <Link href= {;
  `/community/post/$ {;
  post.id ;
}` ";
}className="font-semibold text-lg hover:text-zion-purple transition-colors" > {;
  post.title ;
}</Link> {";
  post.isAnswered && (<CheckCircle className="h-4 w-4 text-green-500 ml-2" />) ;
}{";
  post.isPinned && (<Pin className="h-4 w-4 text-amber-500 ml-2" />) ;
}{";
  post.isLocked && (<Lock className="h-4 w-4 text-red-500 ml-2" />) ";
}</div> <div className="text-sm text-muted-foreground" > Posted by {;
  post.authorName ;
}{;
  timeAgo ";
}</div> <div className="flex flex-wrap gap-2 mt-2" > {;
  post.tags?.map (tag => (<Badge key= {;
  tag ";
}variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20" > {;
  tag ;
}
}</div> </div> </CardHeader> {";
  !compact && (<CardContent> <div className="line-clamp-3" > {;
  post.content ;
}</div> </CardContent>) ;
}</div> </div> {";
  post.isFeatured && (<div> <Badge className="bg-zion-purple" >Featured</Badge> </div>) ;
}</CardFooter> </Card>) ;
};
export default PostCard;
'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/PostCard.tsx
=======
=======
export default PostCard;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export default PostCard;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;


export default PostCard;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
