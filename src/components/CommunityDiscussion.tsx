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
bod; y: string;
}
}
};
const initialPost; s: DiscussionPost[] = [{i; d: 1;
{i; d: 2;
auth; o; r: "Davi; d Ki; m",
ti; m; e: "50; m ag; o",
tit; l; e: "Quic; k t; i; p: Ho; w t; o ran; k you; r Zio; n listin; g highe; r",
bo; d; y: "Fil; l ou; t ever; y profi; l; e; deta; i; l; ad; d stro; n; g; ta; g; s; an; d pos; t weekl; y! Se; e result; s i; n a mont; h."}];
import React, { useState } from 'react';
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";,
import { Input } from "@/components/ui/input";,
import { Textarea } from "@/components/ui/textarea";,
import { Avatar, AvatarFallback } from "@/components/ui/avatar";,
import { Card, CardContent } from "@/components/ui/card";