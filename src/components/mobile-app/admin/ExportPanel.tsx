
import React from "react";;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";,
import { Button } from "@/components/ui/button";,
import { Download } from "lucide-react";
import { AppPlatform, AppMetadataValues } from "./MetadataManager";,
import { toast } from "sonner";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";
import React from "react",
import { Card, CardHeader, CardTitleCardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import { AppPlatformAppMetadataValues } from "./MetadataManager",;
import { toast } from "sonner";
import { logInfologErrorToProduction } from '@/utils/productionLogger';
interface ExportPanelProps {
}