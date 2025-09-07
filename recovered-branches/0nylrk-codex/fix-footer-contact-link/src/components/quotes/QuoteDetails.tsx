import React from "react";
import {

import React from "react";"

import {
  // TODO: Implement
}
pr-12325
  Dialog,
  DialogContent,
  DialogHeader,

  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";
import React from "react",;
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",;
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { QuoteStatusBadge } from "./QuoteStatusBadge",;
import type { QuoteRequest } from "@/types/quotes",;
import { format } from "date-fns",interface QuoteDetailsProps {
  quote: QuoteRequest | null;
  isOpen: boolean;
  onClose: () => void;
}

import {format} from "date-fns";

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not specified";
    try {
      return format(new Date(dateString), "PPP");
    } catch (e) {
      return dateString;
    }
  };

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
import {format} from "date-fns";

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not specified";
    try {
      return format(new Date(dateString), "PPP");
    } catch (e) {
      return dateString;
    }
  };

import React from "react",;
  DialogDescription,"
} from "@/components/ui/dialog";""
import { Button } from "@/components/ui/button";""
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";""
import { Card, CardContent } from "@/components/ui/card";""
import { Separator } from "@/components/ui/separator";""
import { QuoteStatusBadge } from "./QuoteStatusBadge";""
import type { QuoteRequest } from "@/types/quotes";""
import { format } from "date-fns";"
interface QuoteDetailsProps {
  // TODO: Implement
  quote: QuoteRequest | null;,
  isOpen: boolean;
  onClose: () => void;
"
import {format} from "date-fns";"
  const formatDate = (dateString?: string) => {"
    if (!dateString) return "Not specified";"
    try {
  // TODO: Implement
}"
      return format(new Date(dateString), "PPP");"
    } catch (e) {
      return dateString;
  };


export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
  // TODO: Implement
  const formatDate = (dateString?: string) => {"
    if (!dateString) return "Not specified";"
    try {
  // TODO: Implement
}"
      return format(new Date(dateString), "PPP");"
    } catch (e) {
      return dateString;
    }
  }
  };"
  // TODO: Implement
import React from "react",;"
pr-12325
}"
      return format(new Date(dateString), "PPP");"
    } catch (e) {
      return dateString;
    }
  };
"
import React from "react",;"
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
  DialogDescription;"
} from "@/components/ui/dialog",;""
import { Button } from "@/components/ui/button",;""
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Separator } from "@/components/ui/separator",;""
import { QuoteStatusBadge } from "./QuoteStatusBadge",;""
import type { QuoteRequest } from "@/types/quotes",;""
import { format } from "date-fns",;"
interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;

import React from './react';
  // TODO: Implement
pr-12325
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
  onClose: () => void;
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
"
import React from './react';'
import {
  // TODO: Implement
}
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,'
} from '@/components / ui / dialog';''
import { Button  } from '@/components / ui / button';''
import { Calendar, User, Mail, Clock, DollarSign  } from './lucide-react';''
import { Card, CardContent  } from '@/components / ui / card';''
import { Separator  } from '@/components / ui / separator';''
import { QuoteStatusBadge  } from './QuoteStatusBadge';''
import type { QuoteRequest } from "@/types / quotes";""
import { format  } from './date - fns';'
interface QuoteDetailsProps {
  // TODO: Implement
}
  quote: QuoteRequest | null;,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3">
                Requester Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span>{quote.requester_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
  // TODO: Implement
}
  // Check condition;
if (return null) {
  $2;
}
  const format_date = (date_string?: string) =>: any {
  // TODO: Implement
}
    // Check condition;'
if (return "Not specified") {"
  $2;
}


const formatDate = (dateString?: string) => {
    if (!dateString) return \"Not specified\";
    try {

  // TODO: Implement
}"
      return format (new Date (date_string), "PPP");"
    } catch (e) {



  return ()
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
</Dialog>"
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">"
</DialogContent>
        <DialogHeader>
</DialogHeader>"
          <DialogTitle className="text-2xl flex items-center justify-between">"
</DialogTitle>
            <span>{quote.project_name}</span>

            <QuoteStatusBadge status={quote.status} />
</QuoteStatusBadge>
          </DialogTitle>

          <DialogDescription>
</DialogDescription>
          </DialogDescription>
        </DialogHeader>
"
        <Separator className="my-4" />"
</Separator>"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
          <Card>
</Card>"
            <CardContent className="pt-6">"
</CardContent>"
              <h3 className="text-lg font-medium mb-3">"
</h3>
              </h3>"
              <div className="space-y-2">"
</div>"
                <div className="flex items-center gap-2">"
</div>"
                  <User className="h-4 w-4 text-gray-500" />"
</User>
                  <span>{quote.requester_name}</span>
                </div>"
                <div className="flex items-center gap-2">"
</div>"
                  <Mail className="h-4 w-4 text-gray-500" />"
</Mail>
                  <span>{quote.requester_email}</span>

                </div>
              </div>
            </CardContent>
          </Card>


          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Start date: {formatDate(quote.start_date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
</Card>"
            <CardContent className="pt-6">"
</CardContent>"
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>""
              <div className="space-y-2">"
</div>"
                <div className="flex items-center gap-2">"
</div>"
                  <Calendar className="h-4 w-4 text-gray-500" />"
</Calendar>
                  <span>Start date: {formatDate(quote.start_date)}</span>
                </div>"
                <div className="flex items-center gap-2">"
</div>"
                  <Clock className="h-4 w-4 text-gray-500" />"
</Clock>
                  <span>Timeline: {quote.timeline}</span>

                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-3">Project Details</h3>
            <p className="mb-4">{quote.project_summary}</p>

            {quote.project_description && (
              <>
                <h4 className="font-medium mt-4">Additional Details</h4>
                <p>{quote.project_description}</p>
              </>
            )}

            <div className="mt-6 flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="font-medium">Budget: </span>
              {quote.budget_display ||
                (quote.budget_min && quote.budget_max
                  ? `$${quote.budget_min} - $${quote.budget_max}`
                  : quote.budget_min
                    ? `$${quote.budget_min}`
                    : "Not specified")}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-end">
"
        <Card className="mt-6">"
</Card>"
          <CardContent className="pt-6">"
</CardContent>"
            <h3 className="text-lg font-medium mb-3">Project Details</h3>""
            <p className="mb-4">{quote.project_summary}</p>"
              <>"
                <h4 className="font-medium mt-4">Additional Details</h4>"
                <p>{quote.project_description}</p>
              </>
            )}
"
            <div className="mt-6 flex items-center gap-2">"
</div>"
              <DollarSign className="h-4 w-4 text-gray-500" />"
</DollarSign>"
              <span className="font-medium">Budget: </span>"
            </div>
          </CardContent>
        </Card>
"
        <div className="mt-6 flex justify-end">"
</div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
};

      return date_string;
    }
  }
;
  return (
    <Dialog open={is_open} onOpenChange={(open) => !open && on_close ()}>;
      <DialogContent className="max - w-3xl max - h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text - 2xl flex items - center justify-between">;
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {format_date (quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;
        <Separator className="my-4" />;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">;
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text - lg font - medium mb-3">;
                Requester Information;
              </h3>;
              <div className="space-y-2">;
                <div className="flex items - center gap-2">;
                  <User className="h - 4 w - 4 text - gray-500" />;
                  <span>{quote.requester_name}</span>;
                </div>;
                <div className="flex items - center gap-2">;
                  <Mail className="h - 4 w - 4 text - gray-500" />;
    <Dialog open={is_open} onOpenChange={(open) => !open && on_close ()}>;
</Dialog>"
      <DialogContent className="max - w-3xl max - h-[90vh] overflow - y-auto">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>"
          <DialogTitle className="text - 2xl flex items - center justify - between">;"
</DialogTitle>
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
</QuoteStatusBadge>
          </DialogTitle>;
          <DialogDescription>;
</DialogDescription>
          </DialogDescription>;
        </DialogHeader>;"
        <Separator className="my - 4" />;"
</Separator>"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
</div>
          <Card>;
</Card>"
            <CardContent className="pt - 6">;"
</CardContent>"
              <h3 className="text - lg font - medium mb - 3">;"
</h3>
              </h3>;"
              <div className="space - y-2">;"
</div>"
                <div className="flex items - center gap - 2">;"
</div>"
                  <User className="h - 4 w - 4 text - gray - 500" />;"
</User>
                  <span>{quote.requester_name}</span>;
                </div>;"
                <div className="flex items - center gap - 2">;"
</div>"
                  <Mail className="h - 4 w - 4 text - gray - 500" />;"
</Mail>
                  <span>{quote.requester_email}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text - lg font - medium mb-3">Project Timeline</h3>;
              <div className="space-y-2">;
                <div className="flex items - center gap-2">;
                  <Calendar className="h - 4 w - 4 text - gray-500" />;
                  <span > Start date: {format_date (quote.start_date)}</span>;
                </div>;
                <div className="flex items - center gap-2">;
                  <Clock className="h - 4 w - 4 text - gray-500" />;
</Card>"
            <CardContent className="pt - 6">;"
</CardContent>"
              <h3 className="text - lg font - medium mb - 3">Project Timeline</h3>;""
              <div className="space - y-2">;"
</div>"
                <div className="flex items - center gap - 2">;"
</div>"
                  <Calendar className="h - 4 w - 4 text - gray - 500" />;"
</Calendar>
                  <span > Start date: {format_date (quote.start_date)}</span>;
                </div>;"
                <div className="flex items - center gap - 2">;"
</div>"
                  <Clock className="h - 4 w - 4 text - gray - 500" />;"
</Clock>
                  <span > Timeline: {quote.timeline}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
        <Card className="mt-6">;
          <CardContent className="pt-6">;
            <h3 className="text - lg font - medium mb-3">Project Details</h3>;
            <p className="mb-4">{quote.project_summary}</p>;
            {quote.project_description && (
              <>;
                <h4 className="font - medium mt-4">Additional Details</h4>;
                <p>{quote.project_description}</p>;
              </>)}
            <div className="mt - 6 flex items - center gap-2">;
              <DollarSign className="h - 4 w - 4 text - gray-500" />;
              <span className="font-medium">Budget: </span>;
              {quote.budget_display ||;
                (quote.budget_min && quote.budget_max;
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;
                    ? `$${quote.budget_min}`;
                    : "Not specified")}
            </div>;
          </CardContent>;
        </Card>;
        <div className="mt - 6 flex justify-end">;
          <Button on_click={on_close}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>);
}
;

  )

import type { QuoteRequest } from "@/types / quotes";""
import { format  } from './date - fns';
  // TODO: Implement
  is_open: boolean;
  on_close: () => void;
export const QuoteDetails = ({ quote, is_open, on_close }: QuoteDetailsProps) =>: any {
  // TODO: Implement
  // Check condition;
if (return null) {
  $2;
  const format_date = (date_string?: string) =>: any {
  // TODO: Implement
    // Check condition;
if (return "Not specified") {"

  // TODO: Implement
      return format (new Date (date_string), "PPP");"



  return ()
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">"

        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center justify-between">"

            <span>{quote.project_name}</span>
            <QuoteStatusBadge status={quote.status} />

          
          <DialogDescription>

          
        
        <Separator className="my-4" />"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
          <Card>
            <CardContent className="pt-6">"
              <h3 className="text-lg font-medium mb-3">"
</h3>
              </h3>"
              <div className="space-y-2">"
</div>"
                <div className="flex items-center gap-2">"
                  <User className="h-4 w-4 text-gray-500" />"

                  <span>{quote.requester_name}</span>
                  <Mail className="h-4 w-4 text-gray-500" />"

                  <span>{quote.requester_email}</span>
            
          

              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>""
                  <Calendar className="h-4 w-4 text-gray-500" />"

                  <span>Start date: {formatDate(quote.start_date)}</span>
                  <Clock className="h-4 w-4 text-gray-500" />"

                  <span>Timeline: {quote.timeline}</span>
            
          
        <Card className="mt-6">"
            <h3 className="text-lg font-medium mb-3">Project Details</h3>""
            <p className="mb-4">{quote.project_summary}</p>"
              <>"
                <h4 className="font-medium mt-4">Additional Details</h4>"
                <p>{quote.project_description}</p>
              </>
            )}
            <div className="mt-6 flex items-center gap-2">"
              <DollarSign className="h-4 w-4 text-gray-500" />"
              <span className="font-medium">Budget: </span>"
          
        
        <div className="mt-6 flex justify-end">"
          <Button onClick={onClose}>Close
      
    
    <Dialog open={is_open} onOpenChange={(open) => !open && on_close ()}>;
      <DialogContent className="max - w-3xl max - h-[90vh] overflow - y-auto">;"

        <DialogHeader>;
          <DialogTitle className="text - 2xl flex items - center justify - between">;"

            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;

          ;
          <DialogDescription>;

        ;"
        <Separator className="my - 4" />;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
          <Card>;
            <CardContent className="pt - 6">;"
              <h3 className="text - lg font - medium mb - 3">;"
              </h3>;"
              <div className="space - y-2">;"
                <div className="flex items - center gap - 2">;"
                  <User className="h - 4 w - 4 text - gray - 500" />;"

                  <span>{quote.requester_name}</span>;
                </div>;"
                  <Mail className="h - 4 w - 4 text - gray - 500" />;"

                  <span>{quote.requester_email}</span>;
                </div>;
              <h3 className="text - lg font - medium mb - 3">Project Timeline</h3>;""
                  <Calendar className="h - 4 w - 4 text - gray - 500" />;"

                  <span > Start date: {format_date (quote.start_date)}</span>;
                  <Clock className="h - 4 w - 4 text - gray - 500" />;"

                  <span > Timeline: {quote.timeline}</span>;
        </div>;"
        <Card className="mt - 6">;"
            <h3 className="text - lg font - medium mb - 3">Project Details</h3>;""
            <p className="mb - 4">{quote.project_summary}</p>;"
              <>;"
                <h4 className="font - medium mt - 4">Additional Details</h4>;"
                <p>{quote.project_description}</p>;
              </>)}"
            <div className="mt - 6 flex items - center gap - 2">;"
              <DollarSign className="h - 4 w - 4 text - gray - 500" />;"
              <span className="font - medium">Budget: </span>;"
        <div className="mt - 6 flex justify - end">;"
          <Button on_click={on_close}>Close;
    );"
pr-12325
</div>
          <Button on_click={on_close}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>);"

