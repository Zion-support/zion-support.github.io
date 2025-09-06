
import React from "react";


import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";
import { format } from "date-fns";
import {format} from "date-fns";
import React from "react",
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { QuoteStatusBadge } from "./QuoteStatusBadge",
import type { QuoteRequest } from "@/types/quotes",
import { format } from "date-fns",
interface QuoteDetailsProps {
  quote: QuoteRequest | null;
  isOpen: boolean;
  onClose: () => void
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not specified";
    try {
      return format(new Date(dateString), "PPP");
    } catch (e) {
      return dateString;
    }
  }
  };
import React from "react",;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription;
} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { QuoteStatusBadge } from "./QuoteStatusBadge",;
import type { QuoteRequest } from "@/types/quotes",;
import { format } from "date-fns",;

interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;
  onClose: () => void;
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;

import React from './react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components / ui / dialog';
import { Button  } from '@/components / ui / button';
import { Calendar, User, Mail, Clock, DollarSign  } from './lucide-react';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
import { QuoteStatusBadge  } from './QuoteStatusBadge';
import type { QuoteRequest } from "@/types / quotes";
import { format  } from './date - fns';
interface QuoteDetailsProps {
  quote: QuoteRequest | null;
  is_open: boolean;
  on_close: () => void;
}
export const QuoteDetails = ({ quote, is_open, on_close }: QuoteDetailsProps) =>: any {
  // Check condition
if (return null) {
  $2
}
  const format_date = (date_string?: string) =>: any {
    // Check condition
if (return "Not specified") {
  $2
}

    try {
      return format (new Date (date_string), "PPP");
    } catch (e) {


  const formatDate = (dateString?: string) => {;
    if (!dateString) return 'Not specified';
    try {;
      return format(new Date(dateString), 'PPP');
    } catch (e) {;

      return dateString;
    }

  },
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

  )
},
};
},
