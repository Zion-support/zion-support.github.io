





const mockPost: ForumPost = {






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

import {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle} from "lucide-react";
import {formatDistanceToNow, format} from "date-fns";
import {ForumPost, ForumReply} from "@/types/community";
import {useAuth} from "@/hooks/useAuth";
import ReplyCard from "@/components/community/ReplyCard";
import ReplyForm from "@/components/community/ReplyForm";
import {useToast} from "@/hooks/use-toast";
// Mock data for a forum post;
const mockPost: ForumPost = {;
  id: "1",;
  title: "Best practices for AI model fine-tuning",
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?";
  authorId: "user1",;
  authorName: "Alex Johnson",;
  authorAvatar: "https://i && i.pravatar.cc/150?img=3",;
  authorRole: "Verified Talent",;
  categoryId: "ai-tools",;
  tags: ["machine-learning", "fine-tuning", "gpt"];
  createdAt: "2025-04-01T12:00:00Z",;
  updatedAt: "2025-04-01T12:00:00Z",;
  upvotes: 48,;
  downvotes: 2,;
  replyCount: 4,;
  isAnswered: true,;

  isFeatured: true;
}
// Mock data for replies;
const mockReplies: ForumReply[] = []
  {"
    id: "reply1""
    postId: "1"'"
    content: "Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.""
    authorId: "user2""
    authorName: "Sarah Chen""
    authorAvatar: "https://i.pravatar.cc/150?img=5""
    createdAt: "2025-04-01T14:30:00Z""
    updatedAt: "2025-04-01T14:30:00Z"
    upvotes: 12;
    downvotes: 0;
  {"
    id: "reply2""
    postId: "1"'"
    content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good performance.""
    authorId: "user3""
    authorName: "Michael Wong""
    authorRole: "AI Engineer""
    createdAt: "2025-04-01T16:15:00Z""
    updatedAt: "2025-04-01T16:15:00Z"
    upvotes: 8;
    downvotes: 0;
  }
  {"
    id: "reply3""
    postId: "1"'"
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.";"
    authorId: "user4""
    authorName: "Emma Davis""
    authorRole: "ML Research Lead""
    createdAt: "2025-04-02T09:45:00Z""
    updatedAt: "2025-04-02T09:45:00Z"
    upvotes: 15;
    downvotes: 0;
    isAnswer: true;
  {"
    id: "reply4""
    postId: "1""
    content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?""
    authorId: "user5""
    authorName: "David Lin""
    createdAt: "2025-04-02T11:20:00Z""
    updatedAt: "2025-04-02T11:20:00Z"
    upvotes: 4;
    downvotes: 0;
  }


  // For this demo, we'll assume the post is found
  if (!post) {

    return (
  const { postId } = useParams() as { postId?:string },;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [post, setPost] = useState(mockPost),;
  const [replies, setReplies] = useState(mockReplies),;
  ;
  // Check if this is the user's own post;
  const isAuthor = user?.id === post?.authorId,;
  ;
  // Check if user is admin/mod;
  const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin',;
  ;
  // For this demo, we'll assume the post is found;
  if (!post) {;
    return (;
      <AppLayout>;

  }
  },




  },






      id: `reply${Date.now()}`,



    toast({;
      title: "Reply posted",;
      toast({;
        title: "Permission denied",;
        description: "Only the original poster or moderators can mark answers",;
        variant: "destructive";
      });
      return;
    }
      }),
      return
    }
    // Update the replies
    const updatedReplies = replies.map(reply => ({
      ...reply,
      isAnswer: reply.id === replyId

    




    
    


  


                <div>
                  <div className="font-medium text-lg">{post.authorName}</div>
                  {post.authorRole && (
                    <Badge variant="outline" className="mt-1">

                <div>;
                  <div className="font-medium text-lg">{post.authorName}</div>;
                  {post.authorRole && (;
                    <Badge variant="outline" className="mt-1">;





        <Card>;

          <CardContent className="p-6">;
            <div className="flex justify-between items-start mb-6">;
              <div className="flex items-center gap-4">;
                <Avatar className="h-12 w-12">;


                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUpvote}



                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownvote}


                      <Edit className="h-4 w-4 mr-1" />;
                      Edit;
                    </Link>;
                  </Button>;
                )}


                {isAdminOrMod && (;
                  <>;


                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePinPost}>;
                      <Pin className="h-4 w-4 mr-1" />;
                      {post && post.isPinned ? "Unpin" : "Pin"}
                    </Button>;
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLockPost}>;
                      <Lock className="h-4 w-4 mr-1" />;
                      {post && post.isLocked ? "Unlock" : "Lock"}
                    </Button>;
                  </>;
                )}


          {!post.isLocked && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Your Response</h3>
              {user ? (
                <ReplyForm onSubmit={handleSubmitReply} />
              ) : (
                <Alert>
                  <AlertDescription>
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in</Link> to join the discussion.
                  </AlertDescription>
                </Alert>



          {!post && post.isLocked && (;
        ;
        <div className="mt-8">;
          <h2 className="text-xl font-bold mb-6">Responses ({post.replyCount})</h2>;
          ;
          {post.isAnswered && (;
            <div className="mb-6">;
              <h3 className="flex items-center text-green-600 font-medium mb-2">;
                <CheckCircle className="h-4 w-4 mr-2" />;
                Accepted Answer;
              </h3>;
              {replies.filter(reply => reply.isAnswer).map(reply => (;
                <ReplyCard key={reply.id} reply={reply} className="border-green-500" />;
              ))}
            </div>;
          )}
          ;
          {!post.isLocked && (;
            <div className="mb-8">;
              <h3 className="text-lg font-medium mb-4">Your Response</h3>;
              {user ? (;
                <ReplyForm onSubmit={handleSubmitReply} />;

              ) :(;

                <Alert>;
                  <AlertDescription>;
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in</Link> to join the discussion.;
                  </AlertDescription>;

              )}
            </div>
          )}
          

          {post.isLocked && (
            <Alert className="mb-8">
              <AlertDescription className="flex items-center">




          )}"
          <div className="space-y-6">
            {replies;

              .filter(reply => !reply.isAnswer)
              .map(reply => (


                <ReplyCard


                  onMarkAnswer={() => handleMarkAsAnswer(reply && reply.id)}
                  canMarkAnswer={!post && post.isAnswered && (isAuthor || isAdminOrMod)}
                />;






          ;
  ),; downvotes: 0 
};
{
  id: "reply3";
postId: "1";
content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.";
authorId: "user4";
authorName: "Emma Davis";
authorRole: "ML Research Lead";
createdAt: "2025-04-02T09:45:00Z";
updatedAt: "2025-04-02T09:45:00Z";
upvotes: 15;
downvotes: 0;
isAnswer: true 
};
{
  id: "reply4";
postId: "1";
content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?";
authorId: "user5";
authorName: "David Lin";
createdAt: "2025-04-02T11:20:00Z";
updatedAt: "2025-04-02T11:20:00Z";
upvotes: 4;
downvotes: 0 
}];
//Using `useParams` without type arguments avoids issues when TypeScript //can't determine the generic type for the helper from React Router. //Cast the result instead to provide the expected shape. //For this demo, we'll assume the post is found if (!post) {
  return (<AppLayout> <div className="container py-8" > <h1>Post not found</h1> <Button asChild className="mt-4" > <Link to="/community" >Back to Community</Link> </Button> </div> </AppLayout> const handleUpvote = () => {
  if (!user) {
  toast ({



