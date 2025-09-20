
import React, { useState } from "react",
import { Card, CardHeader, CardTitleCardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea";
import { PlusTrash2 } from 'lucide-react';
import { AppPlatform } from "./MetadataManager";
interface ChangelogManagerProps {
platform: AppPlatform;
}
