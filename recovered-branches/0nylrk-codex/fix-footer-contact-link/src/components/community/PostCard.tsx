<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ProfileBadge } from "@/components/profile/ProfileBadge",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface PostCardProps {
=======

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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface PostCardProps {};
  post: ForumPost;
  compact?: boolean;
}
export const PostCard = ({ post, compact = false }: PostCardProps) => {}
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
<<<<<<< HEAD
<<<<<<< HEAD

      post.isPinned && "border-zion-purple/50",

=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { ProfileBadge } from "@/components/profile/ProfileBadge",
interface PostCardProps {

  post: ForumPost
  compact?: boolean
}
export const PostCard = ({ post, compact = false }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <Card className={cn(

<Card className={cn(

<<<<<<< HEAD
<<<<<<< HEAD
=======
    <Card className={cn(


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <Card className={cn(;
      "transition-shadow hover: shadow-md";
    <Card className={cn(
      "transition-shadow hover: shadow-md";
      post.isPinned && "border-zion-purple/50"
      "transition-shadow hover:shadow-md",
      post.isPinned && "border-zion-purple/50",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      post.isFeatured && "bg-zion-purple/5"
=======
import { ProfileBadge } from "@/components/profile/ProfileBadge",      post.isFeatured && "bg-zion-purple/5"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { ProfileBadge } from "@/components/profile/ProfileBadge",      post.isFeatured && "bg-zion-purple/5"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      post.isFeatured && "bg-zion-purple/5"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
=======


"
      post.isFeatured && "bg-zion-purple/5"
    )}>"
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.authorAvatar} />
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>"
        <div className="flex-1">"
          <div className="flex items-center">"
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">
              {post.title}
            </Link>
<<<<<<< HEAD
            {post.isAnswered && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
            {post.isAnswered && ("
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

            )};
            {post && post.isPinned && (;"
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;
            )}
            {post && post.isLocked && (;"
=======
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
            )}
            {post && post.isPinned && (;
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;
            )}
            {post && post.isLocked && (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Lock className="h-4 w-4 text-red-500 ml-2" />;
            )}



<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            )}
            {post.isPinned && ("
              <Pin className="h-4 w-4 text-amber-500 ml-2" />
            )}
            {post.isLocked && ("
              <Lock className="h-4 w-4 text-red-500 ml-2" />
            )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
              <Lock className="h-4 w-4 text-red-500 ml-2" />;
            )}
            )}
            {post.isPinned && (
              <Pin className="h-4 w-4 text-amber-500 ml-2" />
            )}
            {post.isLocked && (
              <Lock className="h-4 w-4 text-red-500 ml-2" />
            )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>
          <div className="text-sm text-muted-foreground">
            Posted by {post.authorName} {timeAgo}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
=======
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />import { Link } from "react-router-dom",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />import { Link } from "react-router-dom",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { ForumPost } from "@/types/community",;
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      {!compact && (
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <span className="text-sm">{post.replyCount} replies</span>
          </div>
        </div>
        {post.isFeatured && (
<<<<<<< HEAD
          <div>"
=======
          <div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Badge className="bg-zion-purple">Featured</Badge>
          </div>
        )}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default PostCard;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default PostCard;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
          </div>;
          <div className="text-sm text-muted-foreground">;
<<<<<<< HEAD
=======
          </div>;
          <div className="text-sm text-muted-foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            Posted by {post && post.authorName} {timeAgo}
          </div>;

          <div className="flex flex-wrap gap-2 mt-2">;
            {post && post.tags?.map(tag => (;
<<<<<<< HEAD
=======
            Posted by {post.authorName} {timeAgo}
          </div>;
          ;
          <div className="flex flex-wrap gap-2 mt-2">;
            {post.tags?.map(tag => (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;
                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
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
=======

      {!compact && (;
        <CardContent>;
          <div className="line-clamp-3">{post && post.content}</div>;
        </CardContent>;
      )}

      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-4">;
          <div className="flex items-center gap-1">;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsUp className="h-4 w-4 mr-1" />;
              <span>{post && post.upvotes}</span>;
            </Button>;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsDown className="h-4 w-4 mr-1" />;
              <span>{post && post.downvotes}</span>;
            </Button>;
          </div>;
          <div className="flex items-center gap-1">;
            <MessageSquare className="h-4 w-4" />;
            <span className="text-sm">{post && post.replyCount} replies</span>;
          </div>;
        </div>;

        {post && post.isFeatured && (;
          <div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Badge className="bg-zion-purple">Featured</Badge>;
          </div>;
        )}


      </CardFooter>;
    </Card>;
<<<<<<< HEAD

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
=======
  );
};



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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Badge key={tag} variant="outline" className="bg - zion - purple / 10 hover:bg - zion - purple / 20">;
                {tag}
              </Badge>))}
          </div>;
        </div>;
      </CardHeader>;
      {!compact && (
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <span className="text - sm">{post.reply_count} replies</span>;
          </div>;
        </div>;
        {post.is_featured && (
<<<<<<< HEAD
          <div>;"
=======
          <div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Badge className="bg - zion - purple">Featured</Badge>;
          </div>)}
      </CardFooter>;
    </Card>);
}
;
export default PostCard;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




export default PostCard;

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      post.isFeatured && "bg-zion-purple/5"




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
