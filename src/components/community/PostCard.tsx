
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
  post: ForumPost,
  compact?: boolean
}

const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
  logInfo($2);
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true}),

  return (
    <Card data-testid = $2;
      post.isPinned && "border-zion-purple/50",
      post.isFeatured && "bg-zion-purple/5"
    )}>
      <p>DEBUG: PostCard ID: {post?.id}</p>
      <CardHeader className = $2;
export const PostCard = React.memo($2);
PostCard.displayName = $2;
export default PostCard,
