import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
<<<<<<< HEAD:src/components/community/CreatePostButton.tsx

=======
import { toast } from "sonner";
import withAuth from "@/hoc/withAuth";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/CreatePostButton.tsx
interface CreatePostButtonProps {
  categoryId?: string;
}
<<<<<<< HEAD:src/components/community/CreatePostButton.tsx

export default function CreatePostButton({ categoryId }: CreatePostButtonProps) {
=======
/**
 * Renders a button that navigates to the create post page.
 * If the user is not authenticated, they are redirected to the
 * login page with a "next" parameter so they can come back after logging in.
 */
export function CreatePostButton({ categoryId, className }: CreatePostButtonProps) {
  const { user } = useAuth();
  const router = useRouter();
  const handleClick = () => {
    const target = categoryId
      ? `/community?new=1&category=${categoryId}`
      : "/community?new=1";
    if (user) {
      router.push(target);
    } else {
      toast.info("Please log in to create a post");
      const next = encodeURIComponent(target);
      router.replace(`/login?next=${next}`);
    }
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/CreatePostButton.tsx
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
<<<<<<< HEAD:src/components/community/CreatePostButton.tsx
=======
export default withAuth(CreatePostButton);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/CreatePostButton.tsx
