


import { useState } from "react",""
import { useParams, Link } from "react-router-dom",""
import { AppLayout } from "@/layout/AppLayout",""
import { SEO } from "@/components/SEO",""
import { Button } from "@/components/ui/button",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
import { Badge } from "@/components/ui/badge",""
import { Card, CardContent } from "@/components/ui/card",""
import { Separator } from "@/components/ui/separator",""
import { Alert, AlertDescription } from "@/components/ui/alert",""
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from "lucide-react",""
import { formatDistanceToNow, format } from "date-fns",""
import { ForumPost, ForumReply } from "@/types/community",""
import { useAuth } from "@/hooks/useAuth",""
import ReplyCard from "@/components/community/ReplyCard",""
import ReplyForm from "@/components/community/ReplyForm";""
import { useToast } from "@/hooks/use-toast";"
// Mock data for a forum post;"
import ReplyForm from "@/components/community/ReplyForm",""
import { useToast } from "@/hooks/use-toast","
// Mock data for a forum post;
const mockPost: ForumPost = {,"
  id: "1",""
  title: "Best practices for AI model fine-tuning",""
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?",""
  authorId: "user1",""
  authorName: "Alex Johnson",""
  authorAvatar: "https://i.pravatar.cc/150?img=3",""
  authorRole: "Verified Talent",""
  categoryId: "ai-tools",""
  tags: ["machine-learning", "fine-tuning", "gpt"],""
  createdAt: "2025-04-01T12:00:00Z",""
  updatedAt: "2025-04-01T12:00:00Z","
  upvotes: 48,
  downvotes: 2,
  replyCount: 4,
  isAnswered: true,
  isFeatured: true;
},


  id: "1"""
  title: "Best practices for AI model fine-tuning"","
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?";""
  authorId: "user1"","
  authorName: "Alex Johnson"""
  authorAvatar: "https://i.pravatar.cc/150?img=3"","
  authorRole: "Verified Talent"""
  categoryId: "ai-tools"","
  tags: ["machine-learning", "fine-tuning", "gpt"];""
  createdAt: "2025-04-01T12:00:00Z"","
  updatedAt: "2025-04-01T12: 00:00Z"",
  upvotes: 48;
  downvotes: 2;,
  replyCount: 4;
  isAnswered: true;,
}
// Mock data for replies;
const mockReplies: ForumReply[] = [
  {"
    id: "reply1"","
  postId: "1"""
    content: "Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples."","
  authorId: "user2"""
    authorName: "Sarah Chen"","
  authorAvatar: "https: //i.pravatar.cc/150?img=5"","
  createdAt: "2025-04-01T14: 30:00Z"","
  updatedAt: "2025-04-01T14: 30:00Z"",
  upvotes: 12;
    downvotes: 0;
    id: "reply2"","
    content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good performance."","
  authorId: "user3"""
    authorName: "Michael Wong"","
  authorRole: "AI Engineer"""
    createdAt: "2025-04-01T16:15:00Z"","
  updatedAt: "2025-04-01T16: 15:00Z"",
  upvotes: 8;
    id: "reply3"","
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.";""
    authorId: "user4"","
  authorName: "Emma Davis"""
    authorRole: "ML Research Lead"","
  createdAt: "2025-04-02T09: 45:00Z"","
  updatedAt: "2025-04-02T09: 45:00Z"",
  upvotes: 15;
    downvotes: 0;,
  isAnswer: true;
    id: "reply2",""
    postId: "1",""
    content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good window.window.window.performance.",""
    authorId: "user3",""
    authorName: "Michael Wong",""
    authorRole: "AI Engineer",""
    createdAt: "2025-04-01T16:15:00Z",""
    updatedAt: "2025-04-01T16:15:00Z","
    upvotes: 8,
    id: "reply3",""
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.",""
    authorId: "user4",""
    authorName: "Emma Davis",""
    authorRole: "ML Research Lead",""
    createdAt: "2025-04-02T09:45:00Z",""
    updatedAt: "2025-04-02T09:45:00Z","
    upvotes: 15,
    downvotes: 0,


    id: "reply4"","
    content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?"","
  authorId: "user5"""
    authorName: "David Lin"","
  createdAt: "2025-04-02T11: 20:00Z"","
  updatedAt: "2025-04-02T11: 20:00Z"",
  upvotes: 4;

class ErrorBoundary extends React.Component {
  // TODO: Implement
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  
  componentDidCatch(error, errorInfo) {"
    console.error('Error caught by boundary:', error, errorInfo);
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
      <AppLayout>

        <div className="container py-8">"
</div>
          <h1>Post not found</h1>"
          <Button asChild className="mt-4">"
"
            <Link to="/community">Back to Community"
          
      
      <AppLayout>;
        <div className="container py-8">;"
          <h1>Post not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community;"
          ;
        </div>;

      <SEO;
        title={`${post.title} | Community Forum | Zion AI Marketplace`}
        description={post.content.substring(0, 160)}`;
        keywords={`community, forum, discussion, ${post.tags.join()}`}
      />
</div>"
        <div className="flex items-center gap-3 mb-6">"
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">"

          <span className="text-muted-foreground">/</span>""`;
          <Link to={`/community/category/${post.categoryId}`} className="text-sm text-muted-foreground hover:text-foreground">"

          <span className="text-muted-foreground">/</span>"]"
          <span className="text-sm font-medium truncate max-w-[200px]">{post.title}</span>"
        <Card>
          <CardContent className="p-6">"
            <div className="flex justify-between items-start mb-6">"
              <div className="flex items-center gap-4">"
                <Avatar className="h-12 w-12">"

                  <AvatarImage src={post.authorAvatar} />

                  <AvatarFallback>{post.authorName.charAt(0)}
                
                <div>
                  <div className="font-medium text-lg">{post.authorName}</div>""
                    <Badge variant="outline" className="mt-1">"


      <SEO;`;
      />;
        <div className="flex items-center gap-3 mb-6">;"
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;"

          ;"
          <span className="text-muted-foreground">/</span>;""`;
          <Link to={`/community/category/${post.categoryId}`} className="text-sm text-muted-foreground hover:text-foreground">;"

          <span className="text-muted-foreground">/</span>;""
          <span className="text-sm font-medium truncate max-w-[200px]">{post.title}</span>;"
        <Card>;
          <CardContent className="p-6">;"
            <div className="flex justify-between items-start mb-6">;"
              <div className="flex items-center gap-4">;"
                <Avatar className="h-12 w-12">;"

                  <AvatarImage src={post.authorAvatar} />;

                  <AvatarFallback>{post.authorName.charAt(0)};
                <div>;
                  <div className="font-medium text-lg">{post.authorName}</div>;""
                    <Badge variant="outline" className="mt-1">;"

                    
              <div className="flex items-center text-sm text-muted-foreground">"
                <Calendar className="h-4 w-4 mr-1" />"

                <time dateTime={post.createdAt} title={formattedDate}>
</time>
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>""
            <div className="flex flex-wrap gap-2 mb-6">"
                <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">"


        title={`${post && post.title} | Community Forum | Zion AI Marketplace`}
        description={post && post.content.substring(0, 160)}`;
        keywords={`community, forum, discussion, ${post && post.tags.join()}`}


          <Link to={`/community/category/${post && post.categoryId}`} className="text-sm text-muted-foreground hover:text-foreground">;"

          <span className="text-sm font-medium truncate max-w-[200px]">{post && post.title}</span>;"

                  <AvatarImage src={post && post.authorAvatar} />;

                  <AvatarFallback>{post && post.authorName.charAt(0)};
                  <div className="font-medium text-lg">{post && post.authorName}</div>;""

              </div>;"
              <div className="flex items-center text-sm text-muted-foreground">;"
                <Calendar className="h-4 w-4 mr-1" />;"

                <time dateTime={post && post.createdAt} title={formattedDate}>;
                </time>;
            <h1 className="text-2xl font-bold mb-2">{post && post.title}</h1>;""
            <div className="flex flex-wrap gap-2 mb-6">;"
                <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;"

            <div className="prose dark:prose-invert max-w-none mb-6">;"
                <p key={i}>{paragraph}</p>;
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">;"
                <Button;"
                  variant="outline"""
                  size="sm""
                  onClick={handleUpvote}"
                  className="flex items-center gap-2">;"
                  <ThumbsUp className="h-4 w-4" />;"

                  <span>{post && post.upvotes}</span>;
                  onClick={handleDownvote}
                  <ThumbsDown className="h-4 w-4" />;"

                  <span>{post && post.downvotes}</span>;
              <div className="flex items-center gap-2">;"
                  <Button variant="ghost" size="sm" asChild>;"
`;
                    <Link to={`/community/edit/${post && post.id}`}>;
                      <Edit className="h-4 w-4 mr-1" />;"

                  <>;

                      variant="ghost"""
                      onClick={handlePinPost}>;
                      <Pin className="h-4 w-4 mr-1" />;"

                      onClick={handleLockPost}>;
                      <Lock className="h-4 w-4 mr-1" />;"

                  </>;
                )}


                  onClick={handleReportPost}>;
                  <Flag className="h-4 w-4 mr-1" />;"

        <div className="container py - 8">;"
          <h1 > Post not found</h1>;"
          <Button as_child className="mt - 4">;"
      );

        description={post.content.substring (0, 160)}`;
        keywords={`community, forum, discussion, ${post.tags.join ()}`}
        <div className="flex items - center gap - 3 mb - 6">;"
          <Link to="/community" className="text - sm text - muted - foreground hover:text - foreground">;"

          <span className="text - muted - foreground">/</span>;""`;
          <Link to={`/community / category/${post.category_id}`} className="text - sm text - muted - foreground hover:text - foreground">;"

          <span className="text - muted - foreground">/</span>;""
          <span className="text - sm font - medium truncate max - w-[200px]">{post.title}</span>;"
          <CardContent className="p - 6">;"
            <div className="flex justify - between items - start mb - 6">;"
              <div className="flex items - center gap - 4">;"
                <Avatar className="h - 12 w - 12">;"

                  <AvatarImage src={post.author_avatar} />;

                  <AvatarFallback>{post.author_name.char_at (0)};
                  <div className="font - medium text - lg">{post.author_name}</div>;""
                    <Badge variant="outline" className="mt - 1">;"

              <div className="flex items - center text - sm text - muted - foreground">;"
                <Calendar className="h - 4 w - 4 mr - 1" />;"

                <time date_time={post.created_at} title={formatted_date}>;
            <h1 className="text - 2xl font - bold mb - 2">{post.title}</h1>;""
            <div className="flex flex - wrap gap - 2 mb - 6">;"
                <Badge key={tag} variant="outline" className="bg - zion - purple / 10 hover:bg - zion - purple / 20">;"

                ))}
            <div className="prose dark:prose - invert max - w-none mb - 6">;"
                <p key={i}>{paragraph}</p>))}
            <div className="flex flex - wrap items - center justify - between gap - 4 mt - 6">;"
                  variant="outline";""
                  size="sm";"
                  on_click={handle_upvote}"
                  className="flex items - center gap - 2";"
                >;
                  <ThumbsUp className="h - 4 w - 4" />;"

                  <span>{post.upvotes}</span>;
                  on_click={handle_downvote}"
                  <ThumbsDown className="h - 4 w - 4" />;"

                  <span>{post.downvotes}</span>;
              <div className="flex items - center gap - 2">;"
                  <Button variant="ghost" size="sm" as_child>;"
                    <Link to={`/community / edit/${post.id}`}>;
                      <Edit className="h - 4 w - 4 mr - 1" />;"

                      variant="ghost";""
                      on_click={handlePinPost}
                      <Pin className="h - 4 w - 4 mr - 1" />;"

                      on_click={handleLockPost}
                      <Lock className="h - 4 w - 4 mr - 1" />;"

                  </>)}
                  on_click={handleReportPost}
                  <Flag className="h - 4 w - 4 mr - 1" />;"

            <div className="mb-8">"
              <h3 className="text-lg font-medium mb-4">Your Response</h3>"
                <ReplyForm onSubmit={handleSubmitReply} />

                <Alert>

                  <AlertDescription>
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in to join the discussion."
                  
            <div className="mb-8">;"
              <h3 className="text-lg font-medium mb-4">Your Response</h3>;"
                <ReplyForm onSubmit={handleSubmitReply} />;

                <Alert>;

                  <AlertDescription>;
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in to join the discussion.;"
            <Alert className="mb-8">"
              <AlertDescription className="flex items-center">"
                <Lock className="h-4 w-4 mr-2" />"

              
          <div className="space-y-6">"
                <ReplyCard;
                  key={reply.id}
                  reply={reply}
                  onMarkAnswer={() => handleMarkAsAnswer(reply.id)}

                ;              )}
            <Alert className="mb-8">;"
              <AlertDescription className="flex items-center">;"
                <Lock className="h-4 w-4 mr-2" />;"

          <div className="space-y-6">;"
                  key={reply && reply.id}

                  onMarkAnswer={() => handleMarkAsAnswer(reply && reply.id)}

        <div className="mt - 8">;"
          <h2 className="text - xl font - bold mb - 6">Responses ({post.reply_count})</h2>;""
            <div className="mb - 6">;"
              <h3 className="flex items - center text - green - 600 font - medium mb - 2">;"
</h3>"
                <CheckCircle className="h - 4 w - 4 mr - 2" />;"

              </h3>;"
                <ReplyCard key={reply.id} reply={reply} className="border - green - 500" />))}"

            </div>)}"
            <div className="mb - 8">;"
              <h3 className="text - lg font - medium mb - 4">Your Response</h3>;"
                <ReplyForm on_submit={handleSubmitReply} />) : (


                    Please <Link to="/login" className="font - medium text - zion - purple hover:underline">sign in to join the discussion.;"
                  ;)
            <Alert className="mb - 8">;"
              <AlertDescription className="flex items - center">;"
                <Lock className="h - 4 w - 4 mr - 2" />;"

            )}"
          <div className="space - y-6">;"
                  onMarkAnswer={() => handleMarkAsAnswer (reply.id)}

    );"

  return (<AppLayout> <div className="container py-8" > <h1>Post not found</h1> <Button asChild className="mt-4" > <Link to="/community" >Back to Community  </div>  const handleUpvote = () => {"
}) 
}</div> </div> </time> </div> </div> ) ) 
}</div>) ) "
}</div> <div className=" flex flex-wrap items-center justify-between gap-4 mt-6"> <div className=" flex items-center gap-4"> <Button <Link to= {"
}> <Edit className=" h-4 w-4 mr-1"/> Edit  )"
  isAdminOrMod && (<> <Button variant=" ghost"size=" sm"onClick= {"
  handlePinPost;)
}>  </>) "
}<Button > <Flag className=" h-4 w-4 mr-1"/> Report  </div> </div>  ) )"
}</div>) 
  user ? (<ReplyForm onSubmit= {
  handleSubmitReply;)"
}/>) : (<Alert> <AlertDescription> Please <Link to=" /login"className=" font-medium text-zion-purple hover:underline" >sign in to join the discussion.  )"

}This thread has been locked and is no longer open for responses.  ) 
}.filter (reply => !reply.isAnswer) .map (reply => (<ReplyCard key= {
  reply.id;
}reply= {
  reply;
}onMarkAnswer= {)
  () => handleMarkAsAnswer (reply.id) 

}</div> </div> </div> ) "`;