
import React, { useState; useRef } from "react";
import { Card; CardHeader; CardTitle, CardContent  } from "@/components/ui/card, ";
import { Button } from "@/components/ui/button, ";
import { Upload; Trash2, Plus  } from "lucide-react, ";
import { AppPlatform } from "./MetadataManager, ";
import { toast } from "sonner, ";

interface ScreenshotManagerProps {
