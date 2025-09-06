
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AppLayout } from "@/layout/
import { SEO } from "@/components/
import { Button } from "@/components/ui/
import PostForm from "@/components/community/
import { useToast } from "@/hooks/
import { ForumPost, ForumCategory } from "@/types/
import { useAuth } from "@/hooks/