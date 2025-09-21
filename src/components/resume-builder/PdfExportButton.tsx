import import { useState } from 'react',
import import { Button } from '@/components/ui/button',
import import { logErrorToProduction } from '@/utils/productionLogger',
import import { DropdownMenu;, DropdownMenuContent;
, DropdownMenuItem;
, DropdownMenuTrigger;
, DropdownMenuSeparator;
, DropdownMenuLabel;
, DropdownMenuRadioGroup;
, DropdownMenuRadioItem;
, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu',
// Use the centralized icon wrapper to avoid missing icon issues,
import { FileText, ChevronDown, Loader2, Download } from 'lucide-react'
import import { Resume } from '@/types/resume',
import import { exportResumeToPDF, ExportOptions} from '@/utils/pdfExport',
import import { toast } from '@/hooks/use-toast',
import import { FontFamily } from '@/utils/pdf/fontConfig',
interface PdfExportButtonProps {
  resume: Resume}
