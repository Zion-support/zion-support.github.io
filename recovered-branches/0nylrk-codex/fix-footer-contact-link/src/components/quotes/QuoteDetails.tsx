import React from "react";
<<<<<<< HEAD
import { 
  Dialog,
=======

<<<<<<< HEAD
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogDescription} from "@/components/ui/dialog";"
import { Button } from "@/components/ui/button";"
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";"
import { Card, CardContent } from "@/components/ui/card";"
import { Separator } from "@/components/ui/separator";"
import { QuoteStatusBadge } from "./QuoteStatusBadge";"
import type { QuoteRequest } from "@/types/quotes";"
import React from "react","
  }
=======

=======
<<<<<<< HEAD
import {format} from "date-fns";

import React from "react";

import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";
import { format } from "date-fns";
import {format} from "date-fns";
=======


import {format} from "date-fns";

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",
import { 
>>>>>>> origin/chore/fix-lint-and-merge
  Dialog,
>>>>>>> merged-prs-20250907-203621
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog",
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button",
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { QuoteStatusBadge } from "./QuoteStatusBadge",
import type { QuoteRequest } from "@/types/quotes",

<<<<<<< HEAD
=======

<<<<<<< HEAD
import React from "react";

import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
  DialogDescription
} from "@/components/ui/dialog";
>>>>>>> merged-prs-20250907-203621
import { Button } from "@/components/ui/button";
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
<<<<<<< HEAD

import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";
import { format } from "date-fns";
interface QuoteDetailsProps {
  quote: QuoteRequest | null,
  isOpen: boolean,
  onClose: () => void
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {
  if (!quote) return null,

  const formatDate = $2;
    try {
      return format(new Date(dateString), 'PPP')
    } catch (e) {
      return dateString
    }
  },

  return (
    <Dialog open = $2;
=======
import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";

import { format } from "date-fns";

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface QuoteDetailsProps {

  quote: QuoteRequest | null;
  isOpen: boolean;
<<<<<<< HEAD
  onClose: () => void;
}
=======
  onClose: () => void
import {format} from "date-fns";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  };

<<<<<<< HEAD
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
=======
import {format} from "date-fns";

  const formatDate = (dateString?: string) => {"
    if (!dateString) return "Not specified";
    try {"
      return format(new Date(dateString), "PPP");
    } catch (e) {}
      return dateString;
    }
  };

}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
<<<<<<< HEAD
    }
    if (!dateString) return "Not specified";"
    try {
      }
      return format(new Date(dateString), "PPP");"
    } catch (e) {
      }
      return dateString;
    }
  }
  };
    }
    if (!dateString) return "Not specified";"
    try {
      }
      return format(new Date(dateString), "PPP");"
    } catch (e) {
      }
      return dateString;
    }
  };
=======
<<<<<<< HEAD
  const formatDate = (dateString?: string) => {"
    if (!dateString) return "Not specified";
    try {"
      return format(new Date(dateString), "PPP");
    } catch (e) {}
      return dateString;
    }
  }

import {format} from "date-fns";

  const formatDate = (dateString?: string) => {"
    if (!dateString) return "Not specified";
    try {"
      return format(new Date(dateString), "PPP");
    } catch (e) {}
      return dateString;
    }
  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;
>>>>>>> origin/chore/fix-lint-and-merge
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription;"
} from "@/components/ui/dialog",;"
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button",;"
>>>>>>> origin/chore/fix-lint-and-merge
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Separator } from "@/components/ui/separator",;"
import { QuoteStatusBadge } from "./QuoteStatusBadge",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { format } from "date-fns",;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;
  onClose: () => void;
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
<<<<<<< HEAD
import React from './react';'
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import {}
>>>>>>> origin/chore/fix-lint-and-merge
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,';
} from '@/components / ui / dialog';'
import { Button  } from '@/components / ui / button';'
import { Calendar, User, Mail, Clock, DollarSign  } from './lucide-react';'
import { Card, CardContent  } from '@/components / ui / card';'
import { Separator  } from '@/components / ui / separator';'
import { QuoteStatusBadge  } from './QuoteStatusBadge';"
import type { QuoteRequest } from "@/types / quotes";'
import { format  } from './date - fns';
interface QuoteDetailsProps {}
  quote: QuoteRequest | null;
  is_open: boolean;
  on_close: () => void;
}
export const QuoteDetails = ({ quote, is_open, on_close }: QuoteDetailsProps) =>: any {};
  // Check condition;
if (return null) {}
  $2;
}
  const format_date = (date_string?: string) =>: any {}
    // Check condition"
if (return "Not specified") {}
  $2;
}
<<<<<<< HEAD
    try {
      return format (new Date (date_string), "PPP");
    } catch (e) {
=======

    try {"
      return format (new Date (date_string), "PPP");

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const formatDate = (dateString?: string) => {;
    if (!dateString) return 'Not specified';
    try {;
      return format(new Date(dateString), 'PPP');
    } catch (e) {;

<<<<<<< HEAD



  return (

      return dateString;
    }
  }
  return (

import React from "react",;
import { ;
  Dialog,;
  DialogContent, ;
  DialogHeader, ;
  DialogTitle, ;
  DialogDescription ;
} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { QuoteStatusBadge } from "./QuoteStatusBadge",;
import type { QuoteRequest } from "@/types/quotes",;
import { format } from "date-fns",;
;
interface QuoteDetailsProps {;
  quote:QuoteRequest | null,;
  isOpen:boolean,;
  onClose:() => void;
}
;
export const QuoteDetails = ({ quote, isOpen, onClose } QuoteDetailsProps) => {;
  if (!quote) return null,;
;
  const formatDate = (dateString?:string) => {;
    if (!dateString) return 'Not specified',;
    try {;
      return format(new Date(dateString), 'PPP'),;
    } catch (e) {;
      return dateString,;
    }
  },;
;
  return (;
=======
      return dateString;
    }

  },




>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>"
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>"
          <DialogTitle className="text-2xl flex items-center justify-between">
            <span>{quote.project_name}</span>
            <QuoteStatusBadge status={quote.status} />
          </DialogTitle>
          <DialogDescription>
            Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>
        </DialogHeader>
"
        <Separator className="my-4" />
"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>"
            <CardContent className="pt-6">"
              <h3 className="text-lg font-medium mb-3">
                Requester Information;
              </h3>"
              <div className="space-y-2">"
                <div className="flex items-center gap-2">"
                  <User className="h-4 w-4 text-gray-500" />
                  <span>{quote.requester_name}</span>
                </div>"
                <div className="flex items-center gap-2">"
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{quote.requester_email}</span>
                </div>
              </div>
            </CardContent>
          </Card>

<<<<<<< HEAD
          <Card>"
            <CardContent className="pt-6">"
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>"
              <div className="space-y-2">"
                <div className="flex items-center gap-2">"
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Start date: {formatDate(quote.start_date)}</span>
                </div>"
                <div className="flex items-center gap-2">"
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Timeline: {quote.timeline}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
"
        <Card className="mt-6">"
          <CardContent className="pt-6">"
            <h3 className="text-lg font-medium mb-3">Project Details</h3>"
            <p className="mb-4">{quote.project_summary}</p>

            {quote.project_description && (
              <>"
                <h4 className="font-medium mt-4">Additional Details</h4>
                <p>{quote.project_description}</p>
              </>
            )}
"
            <div className="mt-6 flex items-center gap-2">"
              <DollarSign className="h-4 w-4 text-gray-500" />"
              <span className="font-medium">Budget: </span>
              {quote.budget_display ||
                (quote.budget_min && quote.budget_max;
                  ? `$${quote.budget_min} - $${quote.budget_max}`
                  : quote.budget_min;`
                    ? `$${quote.budget_min}`"
                    : "Not specified")}
            </div>
          </CardContent>
        </Card>
"
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
};

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>;
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text-2xl flex items-center justify-between">;
<<<<<<< HEAD
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {formatDate(quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;
        ;
        <Separator className="my-4" />;
        ;
=======
            <span>{quote && quote.project_name}</span>;
            <QuoteStatusBadge status={quote && quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {formatDate(quote && quote.created_at)}
          </DialogDescription>;
        </DialogHeader>;

        <Separator className="my-4" />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Requester Information</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <User className="h-4 w-4 text-gray-500" />;
<<<<<<< HEAD
                  <span>{quote.requester_name}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Mail className="h-4 w-4 text-gray-500" />;
                  <span>{quote.requester_email}</span>;
=======
                  <span>{quote && quote.requester_name}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Mail className="h-4 w-4 text-gray-500" />;
                  <span>{quote && quote.requester_email}</span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </div>;
              </div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Card>;
            <CardContent className="pt-6">;
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>;
              <div className="space-y-2">;
                <div className="flex items-center gap-2">;
                  <Calendar className="h-4 w-4 text-gray-500" />;
<<<<<<< HEAD
                  <span>Start date:{formatDate(quote.start_date)}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Clock className="h-4 w-4 text-gray-500" />;
                  <span>Timeline:{quote.timeline}</span>;
=======
                  <span>Start date: {formatDate(quote && quote.start_date)}</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Clock className="h-4 w-4 text-gray-500" />;
                  <span>Timeline: {quote && quote.timeline}</span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
<<<<<<< HEAD
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
  },

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
              {quote.budget_display |
                (quote.budget_min && quote.budget_max
                  ? `$${quote.budget_min} - $${quote.budget_max}`
                  : quote.budget_min
                    ? `$${quote.budget_min}`
                    : "Not specified")}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
=======

        <Card className="mt-6">;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-3">Project Details</h3>;
            <p className="mb-4">{quote && quote.project_summary}</p>;

            {quote && quote.project_description && (;
              <>;
                <h4 className="font-medium mt-4">Additional Details</h4>;
                <p>{quote && quote.project_description}</p>;
              </>;
            )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            <div className="mt-6 flex items-center gap-2">;
              <DollarSign className="h-4 w-4 text-gray-500" />;
              <span className="font-medium">Budget: </span>;
              {quote && quote.budget_display || ;
               (quote && quote.budget_min && quote && quote.budget_max ;
                ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
                : quote && quote.budget_min ;
                  ? `$${quote && quote.budget_min}` ;
                  : 'Not specified')}
            </div>;
          </CardContent>;
        </Card>;
        ;
        <Card className="mt-6">;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-3">Project Details</h3>;
            <p className="mb-4">{quote.project_summary}</p>;
            ;
            {quote.project_description && (;
              <>;
                <h4 className="font-medium mt-4">Additional Details</h4>;
                <p>{quote.project_description}</p>;
              </>;
            )}
            ;
            <div className="mt-6 flex items-center gap-2">;
              <DollarSign className="h-4 w-4 text-gray-500" />;
              <span className="font-medium">Budget:</span>;
              {quote.budget_display || ;
               (quote.budget_min && quote.budget_max ;
                ? `$${quote.budget_min} - $${quote.budget_max}` ;
                :quote.budget_min ;
                  ? `$${quote.budget_min}` ;
                  :'Not specified')}
            </div>;
          </CardContent>;
        </Card>;
        ;
        <div className="mt-6 flex justify-end">;
          <Button onClick={onClose}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return date_string;
    }
  }
;
  return (

            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {format_date (quote.created_at)}
          </DialogDescription>;

                  <span>{quote.requester_email}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

                  <span > Timeline: {quote.timeline}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

              {quote.budget_display ||;
                (quote.budget_min && quote.budget_max;`
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;`
                    ? `$${quote.budget_min}`;"
                    : "Not specified")}
            </div>;
          </CardContent>;

          <Button on_click={on_close}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>);
}
;

<<<<<<< HEAD
  )
=======
  )

<<<<<<< HEAD
  ),;
},; import {
  Dialog;
DialogContent;
DialogHeader;
DialogTitle;
DialogDescription interface QuoteDetailsProps {
  quote: QuoteRequest | null;
isOpen: boolean;
onClose: () => void 
}export const QuoteDetails = ({
  quote, isOpen, onClose 
}: QuoteDetailsProps) => {
  if (!quote) return null;
const formatDate = (dateString?: string) => {
  if (!dateString) return 'Not specified';
try {
  return format (new Date (dateString), 'PPP') 
}catch (e) {
  return dateString;
}
};
return (<Dialog open= {
  isOpen 
}onOpenChange= {
  (open) => !open && onClose () 
}> <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle className="text-2xl flex items-center justify-between" > <span> {
  quote.project name 
}</span> <QuoteStatusBadge status= {
  quote.status 
}/> formatDate (quote.created at) 
}</DialogDescription> </DialogHeader> <Separator className="my-4" /> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <Card> </div> </div> </CardContent> </Card> <Card> </div> </div> </CardContent> </Card> </div> {
  quote.project description && (<> <h4 className="font-medium mt-4" >Additional Details</h4> <p> {
  quote.project description 
}</p> </>) 
}(quote.budget min && quote.budget max ? `$$ {
  quote.budget min 
}- $$ {
  quote.budget max 
}` : quote.budget min ? `$$ {
  quote.budget min 
}` : 'Not specified') 
}</div> </CardContent> </Card> </div> </DialogContent> </Dialog>) 
};
);
}

  );
}

  )
},
};
},
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
