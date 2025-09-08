

interface PostFormValues {


  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}





import PostForm from "@/components/community/PostForm";
import {useToast} from "@/hooks/use-toast";
import {ForumCategory} from "@/types/community";
import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
import { useToast } from "@/hooks/use-toast",
import { ForumCategory } from "@/types/community",
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}

export default function CreatePostPage() {;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
    }
  }

  return (
    <AppLayout>;
  const [searchParams] = useSearchParams();
  // Get category from URL query params if available
  const initialCategory = searchParams.get("category") as ForumCategory | null;
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory |"project-help"
  }
  const navigate = useNavigate(),
  const { toast } = useToast(),
  const [searchParams] = useSearchParams(),
  
  // Get category from URL query params if available
  const initialCategory = searchParams.get("category") as ForumCategory | null,
  
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help"
  },




        keywords="community, forum, discussion, create post, new thread"



}



