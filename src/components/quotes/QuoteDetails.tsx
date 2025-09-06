<<<<<<< HEAD
=======
}
import React from "react"
import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription

import React from "react",
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react'import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { QuoteStatusBadge } from "./QuoteStatusBadge"
import type { QuoteRequest } from "@/types/quotes"
import {format} from "date-fns"
} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { QuoteStatusBadge } from "./QuoteStatusBadge",
import type { QuoteRequest } from "@/types/quotes",
import { format } from "date-fns",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface QuoteDetailsProps {
  quote: QuoteRequest | null
  isOpen: boolean
  onClose: () => void
<<<<<<< HEAD


};
import React from "react";
import { ;
  Dialog;
  DialogContent, ;
  DialogHeader, ;
  DialogTitle, ;
  DialogDescription ;
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react'import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";
import {format} from "date-fns";
=======
  quote: QuoteRequest | null
  isOpen: boolean
  onClose: () => void
}
export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {
  if (!quote) return null
  const formatDate = (dateString?: string) => {
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
  const formatDate = (dateString?: string) => {;
    if (!dateString) return 'Not specified';    try {
      return format(new Date(dateString), 'PPP')
    } catch (e) {
      return dateString
    }
  }
import React from "react",
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { QuoteStatusBadge } from "./QuoteStatusBadge",
import type { QuoteRequest } from "@/types/quotes",
import { format } from "date-fns",
interface QuoteDetailsProps {
  quote: QuoteRequest | null,
  isOpen: boolean,
  onClose: () => void
import React from "react",;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription;
} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { QuoteStatusBadge } from "./QuoteStatusBadge",;
import type { QuoteRequest } from "@/types/quotes",;
import { format } from "date-fns",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;
  onClose: () => void;
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;

  const formatDate = (dateString?: string) => {;
    if (!dateString) return 'Not specified';    try {;
      return format(new Date(dateString), 'PPP');
    } catch (e) {;
      return dateString;
    }
  }
<<<<<<< HEAD


=======
  },
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center justify-between">
            <span>{quote.project_name}</span>
            <QuoteStatusBadge status={quote.status} />
          </DialogTitle>
          <DialogDescription>
            Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>
        </DialogHeader>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (


        <Separator className="my-4" />
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
        
        <Separator className="my-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD


          <Card>
            <CardContent className="pt-6">
=======
          <Card>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <h3 className="text-lg font-medium mb-3">Requester Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span>{quote.requester_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{quote.requester_email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD


=======
ursor/fix-website-loading-errors-and-merge-6662
          
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          


          <Card>
<<<<<<< HEAD
            <CardContent className="pt-6">
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Start date: {formatDate(quote.start_date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Timeline: {quote.timeline}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD


=======
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-3">Project Details</h3>
            <p className="mb-4">{quote.project_summary}</p>
ursor/fix-website-loading-errors-and-merge-6662
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        


        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-3">Project Details</h3>
            <p className="mb-4">{quote.project_summary}</p>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            


<<<<<<< HEAD
            {quote.project_description && (
              <>
=======
            
            
            {quote.project_description && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <h4 className="font-medium mt-4">Additional Details</h4>
                <p>{quote.project_description}</p>
              </>
            )}
<<<<<<< HEAD


            


=======
            
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="mt-6 flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="font-medium">Budget: </span>
              {quote.budget_display |
               (quote.budget_min && quote.budget_max
                ? `$${quote.budget_min} - $${quote.budget_max}`
                : quote.budget_min
                  ? `$${quote.budget_min}`
                  : 'Not specified')}
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD


=======
ursor/fix-website-loading-errors-and-merge-6662
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        


        <div className="mt-6 flex justify-end">
<<<<<<< HEAD
          <Button onClick={onClose}>Close</Button>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>
      </DialogContent>
    </Dialog>
  )
<<<<<<< HEAD
=======

import React from './react';
import {
  Dialog;
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription;
} from '@/components / ui / dialog';
import { Button  } from '@/components / ui / button';
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react'import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
import { QuoteStatusBadge  } from './QuoteStatusBadge';
import type { QuoteRequest } from "@/types / quotes";
import { format } from './date - fns';
interface QuoteDetailsProps {
  quote: QuoteRequest | null,
  is_open: boolean,
  on_close: () => void;
}
  (open) => !open && onClose ()
}> <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle className="text-2xl flex items-center justify-between" > <span> {
  quote.project name
}</span> <QuoteStatusBadge status= {
  quote.status
}/> formatDate (quote.created at) "
}</DialogDescription> </DialogHeader> <Separator className="my-4" /> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <Card> </div> </div> </CardContent> </Card> <Card> </div> </div> </CardContent> </Card> </div> {"
  quote.project description && (<> <h4 className="font-medium mt-4" >Additional Details</h4> <p> {
  quote.project description
}</p> </>)
}(quote.budget min && quote.budget max ? `$$ {
  quote.budget min
}- $$ {
  quote.budget max
}` : quote.budget min ? `$$ {
  quote.budget min '
}` : 'Not specified')
}</div> </CardContent> </Card> </div> </DialogContent> </Dialog>)
}
'";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
