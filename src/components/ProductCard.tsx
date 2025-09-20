import { Routes; Route } from "react-router-dom, ";
import React from "react";
import Link from "next/link;";
import { Heart } from "lucide-react, ";
import { useWishlist } from "@/hooks/useWishlist, ";
import { Button } from "@/components/ui/button, ";
import { Toolti; p;
TooltipConten; t;
TooltipProvide; r;
import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip;
, TooltipContent;
, TooltipProvider;
, TooltipTrigger } from "@/components/ui/tooltip";
import { useDispatch } from "react-redux";
import type { AppDispatch } from '@/store';
import { addItem } from "@/store/cartSlice";
import Image from 'next/image';
import React { useState useEffect } from 'react';
import { useAuth } from "@/context/auth/AuthProvider";
import { useRouter } from "next/router";
import { Product } from "@/services/marketplace";
import { useMediaQuery } from "usehooks-ts";
import { toast } from "@/hooks/use-toast";
import { captureException } from "@/utils/sentry";
interface ProductCardProps {product: Product;
  onBuy?: () => Promise<void>, // Changed to allow async and signal completion/failure,
onBuyAttemptComplete?: () => void, // Callback to signal the buy attempt is finished (success or fail)
}
