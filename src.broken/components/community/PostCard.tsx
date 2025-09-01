
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
import { ProfileBadge } from "@/components/profile/ProfileBadge";

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

  return (
    <Card className={cn(
      "transition-shadow hover:shadow-md",
      post.isPinned && "border-zion-purple/50",
      post.isFeatured && "bg-zion-purple/5"
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.authorAvatar} />
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <Link href={`/community/post/${post.id}`}>
              <a className="font-semibold text-lg hover:text-zion-purple transition-colors">
                {post.title}
              </a>
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
"
          <div className="flex items-center space-x-6 text-sm text-zion-slate-light">"
            <span className="flex items-center gap-1">"
              <span className="w-1.5 h-1.5 bg-zion-purple rounded-full"></span>
              {post.replies} replies
            </span>"
            <span className="flex items-center gap-1">"
              <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></span>
              {post.likes} likes
            </span>"
            <span className="flex items-center gap-1">"
              <span className="w-1.5 h-1.5 bg-zion-green rounded-full"></span>
              {post.views} views
            </span>;
          </div>;
        </div>;
      </div>;
    </div>;
  )}
'"