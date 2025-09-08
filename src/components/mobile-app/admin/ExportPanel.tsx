
import React from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import { AppPlatform, AppMetadataValues } from "./MetadataManager",
import { toast } from "sonner";
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

