<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
import React from "react"
import {
  Dialog
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { 
  Dialog,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
interface QuoteDetailsProps {
  quote: QuoteRequest | null
  isOpen: boolean
  onClose: () => void
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> interface QuoteDetailsProps {
  quote: QuoteRequest | null
  isOpen: boolean
  onClose: () => void
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {
  if (!quote) return null
  const formatDate = (dateString?: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
  const formatDate = (dateString?: string) => {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    if (!dateString) return 'Not specified';    try {
      return format(new Date(dateString), 'PPP')
    } catch (e) {
      return dateString
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;
  onClose: () => void;
}
;
export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null,;
  const formatDate = (dateString?: string) => {;
    if (!dateString) return 'Not specified',;
    try {;
      return format(new Date(dateString), 'PPP');
    } catch (e) {;
      return dateString;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  },

  return (
=======
  }
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  },
=======
  }
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
>>>>>>>           <Card>
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (


=======
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        <Separator className="my-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <Card>
>>>>>>>             <CardContent className="pt-6">
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <Card>
>>>>>>>             <CardContent className="pt-6">
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-3">Project Details</h3>
            <p className="mb-4">{quote.project_summary}</p>
>>>>>>>             {quote.project_description && (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-3">Project Details</h3>
            <p className="mb-4">{quote.project_summary}</p>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

            


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {quote.project_description && (
>>>>>>>               <>
                <h4 className="font-medium mt-4">Additional Details</h4>
                <p>{quote.project_description}</p>
              </>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         <div className="mt-6 flex justify-end">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="mt-6 flex justify-end">
>>>>>>>           <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
<<<<<<< HEAD
<<<<<<< HEAD

},
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> >>>>>>> 
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
'"

},
},
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
'";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
