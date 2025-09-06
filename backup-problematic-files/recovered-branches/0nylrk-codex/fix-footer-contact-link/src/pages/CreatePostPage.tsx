
import { useState, useEffect } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { AppLayout } from "@/layout/
import { SEO } from "@/components/
import { Button } from "@/components/ui/
import PostForm from "@/components/community/
import { useToast } from "@/hooks/
import { ForumCategory } from "@/types/
          
return (<AppLayout> <SEO title="Create New Post | Community Forum | Zion AI Marketplace" description="Create a new discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, create post, new thread" /> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum </Link> <span className="text-muted-foreground" >/</span> <span className="text-sm font-medium" >Create Post</span> 