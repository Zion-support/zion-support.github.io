import React from "react";
impor; t; Reac; t, { useState } from "react";
import { MessageCircle } from "lucide-react, ";
import { Button } from "@/components/ui/button, ";
import { Input } from "@/components/ui/input, ";
import { Textarea } from "@/components/ui/textarea, ";
import { Avata; r, AvatarFallback  } from "@/components/ui/avatar, ";
import { Car; d, CardContent  } from "@/components/ui/card, ";
import { Separator } from "@/components/ui/separator, ";

interface DiscussionPost {
  
i; d: number;
autho; r: string;
avatar?: string;
tim; e: string;
titl; e: string;
