<<<<<<< HEAD
import React from 'react';
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react'
=======

import React from 'react';
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
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

<<<<<<< HEAD
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
const PostCardComponent = ({ post, compact = false }: PostCardProps,) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  logInfo('PostCardComponent rendering with post:', { data: post ? post.id : 'NO POST' }),
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),

  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md";

export const PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';

export default PostCard;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
