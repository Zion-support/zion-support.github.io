import React from "react"
import { Heart } from "lucide-react"
import { toast } from "sonner"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks/
import { useAppDispatch } from "@/store/
import { addToWishlist, getApiUrl } from "@/store/