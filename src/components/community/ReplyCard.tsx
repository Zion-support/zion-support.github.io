className
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply && reply.authorAvatar} alt={reply && reply.authorName} />;
          <AvatarFallback>{reply && reply.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <span className="font-medium">;
import { formatDistanceToNow } from 'date-fns';
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,;
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ForumReply } from '@/types/community';
import { cn } from '@/lib/utils';
origin/cursor/automate-test-improve-and-merge-code-2533


