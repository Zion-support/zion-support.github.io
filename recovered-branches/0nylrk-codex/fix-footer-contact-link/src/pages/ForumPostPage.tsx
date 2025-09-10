import { useState } from "react",
import { useParams, Link } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from "lucide-react",
import { formatDistanceToNow, format } from "date-fns",
import { ForumPost, ForumReply } from "@/types/community",
import { useAuth } from "@/hooks/useAuth",
import ReplyCard from "@/components/community/ReplyCard",
    upvotes: 15
    downvotes: 0
    isAnswer: true    return (
        <div className="container py-8">;
          <h1>Post not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }
    );
  }
  const handleDownvote = () => {
    if (!user) {
      toast({
        title: "Authentication required"
        description: "Please sign in to vote on posts"})
      return;
    }
    setPost({ ...post, downvotes: post.downvotes + 1 })
    toast({
      title: "Vote recorded"
      description: "You downvoted this post"})      downvotes: 0
    }
    setReplies([...replies, newReply]);
    setPost({ ...post, replyCount: post.replyCount + 1 })
      id: `reply${Date.now()}`,
      postId: post.id,
      content,
      authorId: user.id || 'unknown',
      authorName: user.displayName || 'Anonymous',
      authorAvatar: user.avatarUrl,

      isAnswer: reply.id === replyId    })),
    
    setReplies(updatedReplies),
    setPost({ ...post, isAnswered: true }),

    
    toast({
      title: "Answer marked"
      description: "The reply has been marked as the accepted answer"})    toast({
      title: "Answer marked"
      description: "The reply has been marked as the accepted answer"})
  const handleReportPost = () => {
    if (!user) {
      toast({
        title: "Authentication required"

        description: "Please sign in to report content"})
      return;
    }
    toast({
      title: "Report submitted"
      description: "A moderator will review this content"})  },

  const handleLockPost = () => {
    if (!isAdminOrMod) return,
    
    setPost({ ...post, isLocked: !post.isLocked }),
    

    toast({
      title: post.isLocked ? "Post unlocked" : "Post locked"
      description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled"})    toast({
      title: post.isLocked ? "Post unlocked" : "Post locked"
      description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled"})

  }
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h: mm a")                      {post.authorRole}
                    </Badge>
                  )}
                </div>
              </div>"
              <div className="flex items-center text-sm text-muted-foreground">"


                  onMarkAnswer={() => handleMarkAsAnswer(reply && reply.id)}
                  canMarkAnswer={!post && post.isAnswered && (isAuthor || isAdminOrMod)}
                />;                  onMarkAnswer={() => handleMarkAsAnswer(reply.id)}

                  canMarkAnswer={!post.isAnswered && (isAuthor || isAdminOrMod)}
                />
