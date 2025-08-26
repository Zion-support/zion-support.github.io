import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CreatePostButtonProps {
  categoryId?: string;
}

export default function CreatePostButton({ categoryId }: CreatePostButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className={className} onClick={handleClick}>
            Create New Post
          </Button>
        </TooltipTrigger>
        {!user && (
          <TooltipContent>Please log in to use this feature</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
