<<<<<<< HEAD
import React from "react",
import { Heart } from "lucide-react",
import { toast } from "sonner",
import { useLocation, useNavigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { useAppDispatch } from "@/store/hooks",
import { addToWishlist, getApiUrl } from "@/store/wishlistSlice",
=======
import React from &quot;react&quot;;
import { Heart } from &quot;lucide-react&quot;;
import { toast } from &quot;sonner&quot;;
import { useLocation, useNavigate } from &quot;react-router-dom&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useAppDispatch } from &quot;@/store/hooks&quot;;
import { addToWishlist, getApiUrl } from &quot;@/store/wishlistSlice&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default function ServiceCard({ service, onSelect }) {
  const navigate = useNavigate(),
  const location = useLocation(),
  const { user } = useAuth(),
  const dispatch = useAppDispatch(),

  const handleClick = () => {
    if (onSelect) {
      onSelect(service.id)
    }
  },

  const handleSave = (e) => {
    e.stopPropagation(),
    if (!user) {
      toast.info('Log in to save favorites'),
      navigate(`/login?next=${encodeURIComponent(location.pathname + location.search)}`),
      return
    }
    dispatch(addToWishlist({ id: service.id, type: 'service', data: service })),
    fetch(`${getApiUrl()}/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: service.id, type: 'service' })
    }).catch(() => {})
  },

  return (
    <div
      data-testid={`service-card-${service.id}`}
      onClick={handleClick}
      className=&quot;cursor-pointer p-4 border border-zion-blue-light rounded-lg bg-zion-blue-dark hover:border-zion-purple/50 relative&quot;
    >
      <button
        onClick={handleSave}
        aria-label=&quot;save-to-wishlist&quot;
        className=&quot;absolute top-2 right-2 text-zion-slate-light hover:text-zion-cyan&quot;
      >
        <Heart className=&quot;w-4 h-4&quot; />
      </button>
      <h3 className=&quot;text-white font-medium&quot;>{service.title}</h3>
    </div>
  )
}
