import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD


import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";
import { format } from "date-fns";
import {format} from "date-fns";
=======
import {
=======
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { QuoteStatusBadge } from "./QuoteStatusBadge";
import type { QuoteRequest } from "@/types/quotes";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from "date-fns",
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { format } from "date-fns";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface QuoteDetailsProps {
=======
import { format } from "date-fns",interface QuoteDetailsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { format } from "date-fns",interface QuoteDetailsProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  DialogDescription,";
} from "@/components/ui/dialog";"
import { Button } from "@/components/ui/button";"
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react";"
import { Card, CardContent } from "@/components/ui/card";"
import { Separator } from "@/components/ui/separator";"
import { QuoteStatusBadge } from "./QuoteStatusBadge";"
import type { QuoteRequest } from "@/types/quotes";"
import { format } from "date-fns";
interface QuoteDetailsProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  quote: QuoteRequest | null;
  isOpen: boolean;
  onClose: () => void;
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;
  const formatDate = (dateString?: string) => {"
    if (!dateString) return "Not specified";
    try {"
      return format(new Date(dateString), "PPP");
    } catch (e) {}
      return dateString;
    }
  }
<<<<<<< HEAD
  };
<<<<<<< HEAD
=======
=======
  };"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {format} from "date-fns";

  const formatDate = (dateString?: string) => {"
    if (!dateString) return "Not specified";
    try {"
      return format(new Date(dateString), "PPP");
    } catch (e) {}
      return dateString;
    }
  };
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React from "react",;
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
  DialogDescription;"
} from "@/components/ui/dialog",;"
import { Button } from "@/components/ui/button",;"
import { Calendar, User, Mail, Clock, DollarSign } from "lucide-react",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Separator } from "@/components/ui/separator",;"
import { QuoteStatusBadge } from "./QuoteStatusBadge",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { format } from "date-fns",;
interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;
  onClose: () => void;
}

export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null;

import React from './react';
import {}
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

    try {"
      return format (new Date (date_string), "PPP");
<<<<<<< HEAD
    } catch (e) {

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
      return dateString;
    }

  },
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    } catch (e) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
},
};
},
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      return date_string;
    }
  }
;
  return (
<<<<<<< HEAD
    <Dialog open={is_open} onOpenChange={(open) => !open && on_close ()}>;
      <DialogContent className="max - w-3xl max - h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle className="text - 2xl flex items - center justify-between">;
=======
    <Dialog open={is_open} onOpenChange={(open) => !open && on_close ()}>;"
      <DialogContent className="max - w-3xl max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;"
          <DialogTitle className="text - 2xl flex items - center justify - between">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <span>{quote.project_name}</span>;
            <QuoteStatusBadge status={quote.status} />;
          </DialogTitle>;
          <DialogDescription>;
            Quote request submitted on {format_date (quote.created_at)}
          </DialogDescription>;
<<<<<<< HEAD
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
=======
        </DialogHeader>;"
        <Separator className="my - 4" />;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
          <Card>;"
            <CardContent className="pt - 6">;"
              <h3 className="text - lg font - medium mb - 3">;
                Requester Information;
              </h3>;"
              <div className="space - y-2">;"
                <div className="flex items - center gap - 2">;"
                  <User className="h - 4 w - 4 text - gray - 500" />;
                  <span>{quote.requester_name}</span>;
                </div>;"
                <div className="flex items - center gap - 2">;"
                  <Mail className="h - 4 w - 4 text - gray - 500" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <span>{quote.requester_email}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
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
=======
          <Card>;"
            <CardContent className="pt - 6">;"
              <h3 className="text - lg font - medium mb - 3">Project Timeline</h3>;"
              <div className="space - y-2">;"
                <div className="flex items - center gap - 2">;"
                  <Calendar className="h - 4 w - 4 text - gray - 500" />;
                  <span > Start date: {format_date (quote.start_date)}</span>;
                </div>;"
                <div className="flex items - center gap - 2">;"
                  <Clock className="h - 4 w - 4 text - gray - 500" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <span > Timeline: {quote.timeline}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
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
=======
        </div>;"
        <Card className="mt - 6">;"
          <CardContent className="pt - 6">;"
            <h3 className="text - lg font - medium mb - 3">Project Details</h3>;"
            <p className="mb - 4">{quote.project_summary}</p>;
            {quote.project_description && (
              <>;"
                <h4 className="font - medium mt - 4">Additional Details</h4>;
                <p>{quote.project_description}</p>;
              </>)}"
            <div className="mt - 6 flex items - center gap - 2">;"
              <DollarSign className="h - 4 w - 4 text - gray - 500" />;"
              <span className="font - medium">Budget: </span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {quote.budget_display ||;
                (quote.budget_min && quote.budget_max;`
                  ? `$${quote.budget_min} - $${quote.budget_max}`;
                  : quote.budget_min;`
                    ? `$${quote.budget_min}`;"
                    : "Not specified")}
            </div>;
          </CardContent>;
<<<<<<< HEAD
        </Card>;
        <div className="mt - 6 flex justify-end">;
=======
        </Card>;"
        <div className="mt - 6 flex justify - end">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Button on_click={on_close}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>);
}
;

  )

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
