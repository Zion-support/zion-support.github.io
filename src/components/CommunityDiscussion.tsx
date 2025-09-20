import React, { useState } from 'react'
import { MessageCircle,  } from 'lucide-react'
import { Button,  } from "@/components/ui/button",
import { Input,  } from "@/components/ui/input",
import { Textarea,  } from "@/components/ui/textarea",
import { Avatar,, AvatarFallback,  } from "@/components/ui/avatar",
import { Card,, CardContent,  } from "@/components/ui/card";
import { Separator,  } from "@/components/ui/separator";
interface DiscussionPost {
body: string;
}
const initialPosts: DiscussionPost[] = [
  {
