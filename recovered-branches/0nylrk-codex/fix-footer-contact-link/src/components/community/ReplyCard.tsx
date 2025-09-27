import {formatDistanceToNow} from "date-fns",
import {ThumbsUp, ThumbsDown, CheckCircle} from "@/components/icons",
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card",
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar",
import {Button} from "@/components/ui/button",
import {Badge} from "@/components/ui/badge",
import {ForumReply} from "@/types/community",
import {cn} from "@/lib/utils",
import { ForumReply } from "@/types/community",
import { cn } from "@/lib/utils",
import { formatDistanceToNow } from "date-fns",
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string}
,
export const ReplyCard = ({
  reply,
  onMarkAnswer,
  canMarkAnswer = false,
interface ReplyCardProps {,
reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string}
,
export const ReplyCard = ({
  reply,
export const ReplyCard = ({
  reply,
  onMarkAnswer,
  canMarkAnswer = false,
  className}: ReplyCardProps) => {;
const timeAgo = formatDistanceToNow(new Date(reply.createdAt),
 { addSuffix: true }),;
return (
    <Card className={cn(
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20",
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20",
      className)}>,
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">,
        <Avatar className="h-8 w-8">,
          <AvatarImage src={reply.authorAvatar} />,
          <AvatarFallback>{reply.authorName.charAt(0)}
        
        <div className="flex-1">,
          <div className="flex items-center">,
            <span className="font-medium">,

              {reply.authorName}
            
            {reply.authorRole && (
              <Badge variant="outline" className="ml-2 text-xs">,
interface ReplyCardProps {,
reply: ForumReply,
  onMarkAnswer?: () => void,
  canMarkAnswer?: boolean,
  className?: string}
,
export const ReplyCard = ({
  reply,
  onMarkAnswer,
  canMarkAnswer = false,
  className}: ReplyCardProps) => {;
const timeAgo = formatDistanceToNow(new Date(reply && reply.createdAt),
 { addSuffix: true }),;
return (
    <CardclassName={cn(
      "transition-shadow",
      reply && reply.isAnswer && "border-green-500/50 bg-green-50 dark: bg-green-950/20",
      className)}>,
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">,
        <Avatar className="h-8 w-8">,
          <AvatarImage src={reply && reply.authorAvatar} />,
          <AvatarFallback>{reply && reply.authorName.charAt(0)}
        
        <div className="flex-1">,
          <div className="flex items-center">,
            <span className="font-medium">,

              {reply && reply.authorName}
            
            {reply && reply.authorRole && (
              <Badge variant="outline" className="ml-2 text-xs">,

                {reply.authorRole}
              </Badge>)}
            {reply && reply.isAnswer && (
              <Badge className="ml-2 bg-green-500 text-white">,
                <CheckCircle className="h-3 w-3 mr-1" />,
                Answer,
              </Badge>)}
          
          <div className="text-xs text-muted-foreground">,

            {timeAgo}

      <CardContent>,
        <div>{reply.content}
      
      <CardFooter className="flex justify-between">,
        <div className="flex items-center gap-2">,
          <Button variant="ghost" size="sm" className="px-2">,
            <ThumbsUp className="h-4 w-4 mr-1" />,
            <span>{reply.upvotes}
          
          <Button variant="ghost" size="sm" className="px-2">,
            <ThumbsDown className="h-4 w-4 mr-1" />,
            <span>{reply.downvotes}

        {canMarkAnswer && !reply.isAnswer && (
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">,
            <CheckCircle className="h-4 w-4 mr-1" />,
            Mark as Answer,
          </Button>)}
,
      
    </Card>)}
export default ReplyCard,
      
    </Card>)},
export default ReplyCard,
