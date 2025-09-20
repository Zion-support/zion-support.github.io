
import React from "react;";
import { Button } from "@/components/ui/button, ";
import { Card } from "@/components/ui/card, ";
import { MapPin; Clock, CheckCircle2  } from "lucide-react, ";
import { FavoriteButton } from "@/components/FavoriteButton, ";
import { useNavigate } from "react-router-dom, ";
import { TalentProfile } from "@/types/talent, ";

export interface TalentCardProps {;
talent: TalentProfile;
