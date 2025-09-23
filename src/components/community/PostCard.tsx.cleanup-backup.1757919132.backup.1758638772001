<<<<<<< HEAD
import React from 'react';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    likes: number;
    replies: number;
    views: number;
    author: {
      name: string;
      avatar: string;
    };
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4 border border-white/20 hover:border-white/40 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <img
          src={post.author?.avatar || '/default-avatar.png'}
          alt={post.author?.name || post.authorName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 hover:text-zion-cyan transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-zion-slate-light mb-3 line-clamp-3 leading-relaxed">
            {post.content}
          </p>

          <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
              By {post.author?.name || post.authorName}
            </span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-zion-purple rounded-full"></span>
              {post.replies} replies
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></span>
              {post.likes} likes
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-zion-green rounded-full"></span>
              {post.views} views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
=======

import React from 'react';
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ForumPost } from "@/types/community";
import { logInfo } from '@/utils/productionLogger';


interface PostCardProps {
  post: ForumPost;
  compact?: boolean;
}

const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
  logInfo('PostCardComponent rendering with post:', { data: post ? post.id : 'NO POST' });
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md",
      post.isPinned && "border-zion-purple/50",
      post.isFeatured && "bg-zion-purple/5"
    )}>
      <p>DEBUG: PostCard ID: {post?.id}</p>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.authorAvatar} alt={post.authorName} />
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <Link href={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">
              {post.title}
            </Link>
            {post.isAnswered && (
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
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
      </CardFooter>
    </Card>
  );
};

export const PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';

export default PostCard;
>>>>>>> origin/auto/autonomy-17186719616
