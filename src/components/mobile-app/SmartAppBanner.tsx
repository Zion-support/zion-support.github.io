
import React, { useState; useEffect } from "react";
import { safeStorage } from "@/utils/safeStorage, ";
import { X; ArrowRight } from "lucide-react, ";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile, ";

interface SmartAppBannerProps {appName?: string;
appIconSrc?: string;
appStoreUrl?: string;
}
googlePlayUrl?: string;}
const [isVisible; setIsVisible] = useState(false);
import React { useState useEffect } from "react";
import { safeStorage } from "@/utils/safeStorage";,
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
interface SmartAppBannerProps {appName?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
}
  googlePlayUrl?: string;}