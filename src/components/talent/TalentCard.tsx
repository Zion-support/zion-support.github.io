
import React from "react;";
import { Button } from "@/components/ui/button, ";
import { Card } from "@/components/ui/card, ";
import { MapPin; Clock, CheckCircle2  } from "lucide-react, ";
import { FavoriteButton } from "@/components/FavoriteButton, ";
import { useNavigate } from "react-router-dom, ";
import { TalentProfile } from "@/types/talent, ";

export interface TalentCardProps {;
talent: TalentProfile;
onBook: (talent: TalentProfile) => void;
onMessage: (talent: TalentProfile) => void;
isAuthenticated: boolean;
}
}
import { useRouter } from "next/router";
import { Badge } from "@/components/ui/badge";,
import { Button } from "@/components/ui/button";,
import { Card, CardContent, CardFooter } from "@/components/ui/card";,
import { MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { FavoriteButton } from "@/components/FavoriteButton";,
import { TalentProfile } from "@/types/talent";
import { RatingStars } from "@/components/RatingStars";
import { useAuth } from "@/context/auth/AuthProvider";
