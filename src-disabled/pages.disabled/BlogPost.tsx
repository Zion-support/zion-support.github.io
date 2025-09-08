

:src_backup/pages/BlogPost.tsx
import { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
import { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
import { useState, useEffect } from "react;
import { useRouter  } from 'next/router;
origin/cursor/automate-test-improve-and-merge-code-2533
import Link from 'next/link',
import { SEO } from "@/components/SEO",
import JsonLd from "@/components/JsonLd",
import { Button } from "@/components/ui/button",
import ImageWithRetry from '@/components/ui/ImageWithRetry',
import {
  ArrowLeft
  Calendar
  Clock
  ChevronLeft
  ChevronRight
  Share2
  Facebook
  Twitter
  Linkedin
} from 'lucide-react'
import type { BlogPost as BlogPostType } from '@/types/blog'
import { Separator } from '@/components/ui/separator'
import ReactMarkdown from 'react-markdown'
import { logErrorToProduction } from '@/utils/productionLogger'
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from '@/data/blog-posts'
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout'
import { fetchWithRetry } from '@/utils/fetchWithRetry'
export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([])
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const timedOut = useSkeletonTimeout(20000)
  useEffect(() => {import { useRouter } from 'next/router'
import { SEO } from "@/components/SEO"
import JsonLd from "@/components/JsonLd"
import { Button } from "@/components/ui/button"
origin/cursor/automate-test-improve-and-merge-code-2533
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import type { BlogPost as BlogPostType } from "@/types/blog",
import { Separator } from "@/components/ui/separator",
import ReactMarkdown from 'react-markdown',
import {logErrorToProduction} from '@/utils/productionLogger',
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';


:src_backup/pages/BlogPost.tsx
  const articleLd = {
    '@context': 'https://schema.org'
    '@type': 'BlogPosting'
    headline: post.title
    description: post.excerpt
    image: post.featuredImage
    datePublished: post.publishedDate
origin/cursor/automate-test-improve-and-merge-code-2533
    author: {
      '@type': 'Person'
      name: post.author.name
    }
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/pages/BlogPost.tsx


:src_backup/pages/BlogPost.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
