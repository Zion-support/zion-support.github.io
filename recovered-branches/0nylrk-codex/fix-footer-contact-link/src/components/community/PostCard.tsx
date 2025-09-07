



import {formatDistanceToNow} from "date-fns";""
import {Link} from "react-router-dom";""
import {ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle} from "lucide-react";""
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import {Button} from "@/components/ui/button";""
import {cn} from "@/lib/utils";""
import {ForumPost} from "@/types/community";""
import {ProfileBadge} from "@/components/profile/ProfileBadge";""
import { formatDistanceToNow } from "date-fns",""
import { Link } from "react-router-dom",""
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",""
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",""
import { Badge } from "@/components/ui/badge",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
import { Button } from "@/components/ui/button",""
import { cn } from "@/lib/utils",""
import { ForumPost } from "@/types/community";""
import { ProfileBadge } from "@/components/profile/ProfileBadge";""
import { ForumPost } from "@/types/community",""
import { ProfileBadge } from "@/components/profile/ProfileBadge","
interface PostCardProps {
  // TODO: Implement
}
  post: ForumPost;
  compact?: boolean;
export const PostCard = ({ post, compact = false }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (


    <Card className={cn(

"
      post.isFeatured && "bg-zion-purple/5"")
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">"
        <Avatar className="h-10 w-10">"

          <AvatarImage src={post.authorAvatar} />

          <AvatarFallback>{post.authorName.charAt(0)}
        <div className="flex-1">"
</div>"
          <div className="flex items-center">"
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">"

              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />"
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;"
              <Lock className="h-4 w-4 text-red-500 ml-2" />;"

    <Card className={cn(;"
      "transition-shadow hover:shadow-md",;""
      post.isPinned && "border-zion-purple/50",;""
      post.isFeatured && "bg-zion-purple/5";")
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;"
        <Avatar className="h-10 w-10">;"

          <AvatarImage src={post.authorAvatar} />;

          <AvatarFallback>{post.authorName.charAt(0)};
        ;"
        <div className="flex-1">;"
          <div className="flex items-center">;"
</div>"`;
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">;"

              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />;"
              <Pin className="h-4 w-4 text-amber-500 ml-2" />"
              <Lock className="h-4 w-4 text-red-500 ml-2" />"

          <div className="text-sm text-muted-foreground">"
</div>
          <div className="flex flex-wrap gap-2 mt-2">"
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">"





          </div>;"
          <div className="flex flex-wrap gap-2 mt-2">;"
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;"

              
      
        <CardContent>
          <div className="line-clamp-3">{post.content}</div>"
      <CardFooter className="flex justify-between">"
        <div className="flex items-center gap-4">"
          <div className="flex items-center gap-1">"
            <Button variant="ghost" size="sm" className="px-2">"
              <ThumbsUp className="h-4 w-4 mr-1" />"

              <span>{post.upvotes}</span>
              <ThumbsDown className="h-4 w-4 mr-1" />"

              <span>{post.downvotes}</span>
            
            <MessageSquare className="h-4 w-4" />"
            <span className="text-sm">{post.replyCount} replies</span>"
          <div>
            <Badge className="bg-zion-purple">Featured"
          <div className="text-sm text-muted-foreground">;"

              ;
          </div>;
        <CardContent>;
          <div className="line-clamp-3">{post && post.content}</div>;"
      <CardFooter className="flex justify-between">;"
        <div className="flex items-center gap-4">;"
          <div className="flex items-center gap-1">;"
            <Button variant="ghost" size="sm" className="px-2">;"
              <ThumbsUp className="h-4 w-4 mr-1" />;"

              <span>{post && post.upvotes}</span>;
              <ThumbsDown className="h-4 w-4 mr-1" />;"

              <span>{post && post.downvotes}</span>;
            <MessageSquare className="h-4 w-4" />;"
            <span className="text-sm">{post && post.replyCount} replies</span>;"
          <div>;
            <Badge className="bg-zion-purple">Featured;"
    <Card className={cn ("
      "transition - shadow hover: shadow - md";""
      post.is_pinned && "border - zion - purple / 50",")"
      post.is_featured && "bg - zion - purple / 5")}>;"
      <CardHeader className="flex flex - row items - start gap - 4 space - y-0">;"
        <Avatar className="h - 10 w - 10">;"

          <AvatarImage src={post.author_avatar} />;

          <AvatarFallback>{post.author_name.char_at (0)};
        <div className="flex - 1">;"
          <div className="flex items - center">;"
            <Link to={`/community / post/${post.id}`} className="font - semibold text - lg hover:text - zion - purple transition - colors">;"

              <CheckCircle className="h - 4 w - 4 text - green - 500 ml - 2" />)}"
              <Pin className="h - 4 w - 4 text - amber - 500 ml - 2" />)}"
              <Lock className="h - 4 w - 4 text - red - 500 ml - 2" />)}"

          <div className="text - sm text - muted - foreground">;"
          <div className="flex flex - wrap gap - 2 mt - 2">;"
              <Badge key={tag} variant="outline" className="bg - zion - purple / 10 hover:bg - zion - purple / 20">;"

              ))}
          <div className="line - clamp - 3">{post.content}</div>;"
        )}"
      <CardFooter className="flex justify - between">;"
        <div className="flex items - center gap - 4">;"
          <div className="flex items - center gap - 1">;"
            <Button variant="ghost" size="sm" className="px - 2">;"
              <ThumbsUp className="h - 4 w - 4 mr - 1" />;"

              <span>{post.upvotes}</span>;
              <ThumbsDown className="h - 4 w - 4 mr - 1" />;"

              <span>{post.downvotes}</span>;
            <MessageSquare className="h - 4 w - 4" />;"
            <span className="text - sm">{post.reply_count} replies</span>;"
            <Badge className="bg - zion - purple">Featured;"
          </div>)}
    );
return (<Card className= {"
  cn ("transition-shadow hover:shadow-md";""
post.isPinned && "border-zion-purple/50";")"
post.isFeatured && "bg-zion-purple/5")""
}> <CardHeader className="flex flex-row items-start gap-4 space-y-0" > <Avatar className="h-10 w-10" > <AvatarImage src= {"

}/> <AvatarFallback> {
}  <div className="flex-1" > <div className="flex items-center" > <Link to= {"
} {"
  post.isAnswered && (<CheckCircle className="h-4 w-4 text-green-500 ml-2" />)"
  post.isPinned && (<Pin className="h-4 w-4 text-amber-500 ml-2" />)"
  post.isLocked && (<Lock className="h-4 w-4 text-red-500 ml-2" />)"
}</div> <div className="text-sm text-muted-foreground" > Posted by {"
}</div> <div className="flex flex-wrap gap-2 mt-2" > {"
  post.tags?.map (tag => (<Badge key= {
  tag;"
}variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20" > {"

}</div> </div>  {"
  !compact && (<CardContent> <div className="line-clamp-3" > {"
)
}</div> ) 
}</div> </div> {"
  post.isFeatured && (<div> <Badge className="bg-zion-purple" >Featured </div>)"
} ) 
      
    
    ;"`;