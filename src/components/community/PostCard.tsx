
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React from 'react';
import { formatDistanceToNow } from &quot;date-fns&quot;;
import Link from &quot;next/link&quot;;
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { ForumPost } from &quot;@/types/community&quot;;
import { logInfo } from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PostCardProps {
  post: ForumPost,
  compact?: boolean
}

const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
  logInfo('PostCardComponent rendering with post:', { data: post ? post.id : 'NO POST' }),
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),

  return (
    <Card data-testid=&quot;post-card&quot; className={cn(
      &quot;transition-shadow hover:shadow-md&quot;,
      post.isPinned && &quot;border-zion-purple/50&quot;,
      post.isFeatured && &quot;bg-zion-purple/5&quot;
    )}>
      <p>DEBUG: PostCard ID: {post?.id}</p>
      <CardHeader className=&quot;flex flex-row items-start gap-4 space-y-0&quot;>
        <Avatar className=&quot;h-10 w-10&quot;>
          <AvatarImage src={post.authorAvatar} alt={post.authorName} />
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className=&quot;flex-1&quot;>
          <div className=&quot;flex items-center&quot;>
            <Link href={`/community/post/${post.id}`} className=&quot;font-semibold text-lg hover:text-zion-purple transition-colors&quot;>
              {post.title}
            </Link>
            {post.isAnswered && (
              <CheckCircle className=&quot;h-4 w-4 text-green-500 ml-2&quot; />
            )}
            {post.isPinned && (
              <Pin className=&quot;h-4 w-4 text-amber-500 ml-2&quot; />
            )}
            {post.isLocked && (
              <Lock className=&quot;h-4 w-4 text-red-500 ml-2&quot; />
            )}
          </div>
          <div className=&quot;text-sm text-muted-foreground&quot;>
            Posted by {post.authorName} {timeAgo}
          </div>
          
          <div className=&quot;flex flex-wrap gap-2 mt-2&quot;>
            {post.tags?.map(tag => (
              <Badge key={tag} variant=&quot;outline&quot; className=&quot;bg-zion-purple/10 hover:bg-zion-purple/20&quot;>
                {tag}
=======
import React from 'react';
import Link from "next/link";


interface PostCardProps {_post: ForumPost;
  compact?: boolean;}

const _PostCardComponent = (_{_post, _compact = false}: PostCardProps) => {_logInfo('PostCardComponent rendering with post:', _{ data: post ? post.id : 'NO POST'});
  const _timeAgo = formatDistanceToNow(new Date(post.createdAt), {_addSuffix: true});

  return (
    <Card data-testid="post-card" className={_cn(
      "transition-shadow hover:shadow-md", _post.isPinned && "border-zion-purple/50", _post.isFeatured && "bg-zion-purple/5"
    )}>
      <p>DEBUG: PostCard ID: {_post?.id}</p>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-10 w-10">
          <AvatarImage src={_post.authorAvatar} alt={_post.authorName} />
          <AvatarFallback>{_post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <Link href={_`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">
              {_post.title}
            </Link>
            {_post.isAnswered && (
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
            )}
            {_post.isPinned && (
              <Pin className="h-4 w-4 text-amber-500 ml-2" />
            )}
            {_post.isLocked && (
              <Lock className="h-4 w-4 text-red-500 ml-2" />
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            Posted by {_post.authorName} {_timeAgo}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {_post.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
                {_tag}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      {_!compact && (
        <CardContent>
          <div className=&quot;line-clamp-3&quot;>{post.content}</div>
        </CardContent>
      )}

<<<<<<< HEAD
      <CardFooter className=&quot;flex justify-between&quot;>
        <div className=&quot;flex items-center gap-4&quot;>
          <div className=&quot;flex items-center gap-1&quot;>
            <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;px-2&quot;>
              <ThumbsUp className=&quot;h-4 w-4 mr-1&quot; />
              <span>{post.upvotes}</span>
            </Button>
            <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;px-2&quot;>
              <ThumbsDown className=&quot;h-4 w-4 mr-1&quot; />
              <span>{post.downvotes}</span>
            </Button>
          </div>
          <div className=&quot;flex items-center gap-1&quot;>
            <MessageSquare className=&quot;h-4 w-4&quot; />
            <span className=&quot;text-sm&quot;>{post.replyCount} replies</span>
=======
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="px-2">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{_post.upvotes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="px-2">
              <ThumbsDown className="h-4 w-4 mr-1" />
              <span>{_post.downvotes}</span>
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{_post.replyCount} replies</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
        
        {_post.isFeatured && (
          <div>
            <Badge className=&quot;bg-zion-purple&quot;>Featured</Badge>
          </div>
        )}
      </CardFooter>
    </Card>
  )
},

<<<<<<< HEAD
export const PostCard = React.memo(PostCardComponent),
PostCard.displayName = 'PostCard',
=======
export const _PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default PostCard,
