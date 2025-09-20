import { useState } from "react";
import { Button } from "@/components/ui/button";
import { logErrorToProduction } from "@/utils/productionLogger";
import { DropdownMenu;
, DropdownMenuContent;
, DropdownMenuItem;
, DropdownMenuTrigger;
, DropdownMenuSeparator;
, DropdownMenuLabel;
, DropdownMenuRadioGroup;
, DropdownMenuRadioItem;
, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
// Use the centralized icon wrapper to avoid missing icon issues;
import { FileText, ChevronDown, Loader2, Download } from "lucide-react";
import { Resume } from "@/types/resume";
import { exportResumeToPDF, ExportOptions } from "@/utils/pdfExport";
import { toast } from "@/hooks/use-toast";
import { FontFamily } from "@/utils/pdf/fontConfig";
interface PdfExportButtonProps {
resume: Resume;
}
}
}
