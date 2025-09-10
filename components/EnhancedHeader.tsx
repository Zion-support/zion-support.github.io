import React, { useState, useEffect } from "react"
  User;
  ShoppingCart;
} from "lucide-react"
export default function EnhancedHeader() {

  const router = useRouter()


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const [searchQuery, setSearchQuery] = useState("")


  const [scrolled, setScrolled] = useState(false)


  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)


    window.addEventListener("scroll", handleScroll)


    return () => window.removeEventListener("scroll", handleScroll)


  }, [])


  const handleSearch = async (e: React.FormEvent) => {,
    e.preventDefault(),