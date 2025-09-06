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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


interface PostCardProps {
  post: ForumPost
  compact?: boolean
}
<<<<<<< HEAD
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent)
PostCard.displayName = 'PostCard'
export default PostCard
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee





<<<<<<< HEAD
=======
<<<<<<< HEAD
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
<<<<<<< HEAD
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent)
PostCard.displayName = 'PostCard'
export default PostCard
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


      "transition-shadow hover: shadow-md",
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
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;
<<<<<<< HEAD
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


export default PostCard;