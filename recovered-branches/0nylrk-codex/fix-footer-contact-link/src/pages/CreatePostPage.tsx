
import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
import { useToast } from "@/hooks/use-toast",
import { ForumCategory } from "@/types/community",
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}

export default function CreatePostPage() {
;

