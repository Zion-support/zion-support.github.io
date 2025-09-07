interface QuoteDetailsProps {
  // TODO: Implement
}
  quote: QuoteRequest | null;,
  isOpen: boolean;
  onClose: () => void;
};
import React from "react";"
import { ;
  Dialog;
  DialogContent, ;
  DialogHeader, ;
  DialogTitle, ;
  DialogDescription ;"
} from "@/components/ui/dialog";""
import { Button } from "@/components/ui/button";""
import { Calendar, User, Mail, Clock, DollarSign } from 'lucide-react'import { Card, CardContent } from "@/components/ui/card";""
import { Separator } from "@/components/ui/separator";""
import { QuoteStatusBadge } from "./QuoteStatusBadge";""
import type { QuoteRequest } from "@/types/quotes";""
import {format} from "date-fns";"
interface QuoteDetailsProps {;
  quote: QuoteRequest | null,;
  isOpen: boolean,;
  onClose: () => void;
}
;
export const QuoteDetails = ({ quote, isOpen, onClose }: QuoteDetailsProps) => {;
  if (!quote) return null,;
  const formatDate = (dateString?: string) => {;"
    if (!dateString) return 'Not specified',;'
    try {;'
      return format(new Date(dateString), 'PPP');'
    } catch (e) {;
      return dateString;
    }
  }


  return (


        '
        <Separator className="my-4" />"
</Separator>"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
          <Card>
</Card>"
            <CardContent className="pt-6">"
</CardContent>"
              <h3 className="text-lg font-medium mb-3">Requester Information</h3>""
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
</Card>"
            <CardContent className="pt-6">"
</CardContent>"
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>""
              <div className="space-y-2">"
</div>"
                <div className="flex items-center gap-2">"
</div>"
                  <Calendar className="h-4 w-4 text-gray-500" />"
</Calendar>)
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
    <Dialog open={isOpen} onOpenChange={(open,) => !open && onClose()}>;
</Dialog>"
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>"
          <DialogTitle className="text-2xl flex items-center justify-between">;"
</DialogTitle>
            <span>{quote && quote.project_name}</span>;
            <QuoteStatusBadge status={quote && quote.status} />;
</QuoteStatusBadge>
          </DialogTitle>;
          <DialogDescription>;
</DialogDescription>
          </DialogDescription>;
        </DialogHeader>;"
        <Separator className="my-4" />;"
</Separator>"
        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">;"
</div>
          <Card>;
</Card>"
            <CardContent className="pt-6">;"
</CardContent>"
              <h3 className="text-lg font-medium mb-3">Requester Information</h3>;""
              <div className="space-y-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <User className="h-4 w-4 text-gray-500" />;"
</User>
                  <span>{quote && quote.requester_name}</span>;
                </div>;"
                <div className="flex items-center gap-2">;"
</div>"
                  <Mail className="h-4 w-4 text-gray-500" />;"
</Mail>
                  <span>{quote && quote.requester_email}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card>;
</Card>"
            <CardContent className="pt-6">;"
</CardContent>"
              <h3 className="text-lg font-medium mb-3">Project Timeline</h3>;""
              <div className="space-y-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <Calendar className="h-4 w-4 text-gray-500" />;"
</Calendar>
                  <span>Start date: {formatDate(quote && quote.start_date)}</span>;
                </div>;"
                <div className="flex items-center gap-2">;"
</div>"
                  <Clock className="h-4 w-4 text-gray-500" />;"
</Clock>
                  <span>Timeline: {quote && quote.timeline}</span>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;"
        <Card className="mt-6">;"
</Card>"
          <CardContent className="pt-6">;"
</CardContent>"
            <h3 className="text-lg font-medium mb-3">Project Details</h3>;""
            <p className="mb-4">{quote && quote.project_summary}</p>;"
              <>;"
                <h4 className="font-medium mt-4">Additional Details</h4>;"
                <p>{quote && quote.project_description}</p>;
              </>;
            )}
"
            <div className="mt-6 flex items-center gap-2">;"
</div>"
              <DollarSign className="h-4 w-4 text-gray-500" />;"
</DollarSign>"
              <span className="font-medium">Budget: </span>;"
            </div>;
          </CardContent>;
        </Card>;"
        <div className="mt-6 flex justify-end">;"
</div>
          <Button onClick={onClose}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>;"
}> <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle className="text-2xl flex items-center justify-between" > <span> {;"
</DialogContent>
}</span> <QuoteStatusBadgestatus= {
  quote && quote.status;"
}/> formatDate (quote && quote.created at) ";"
</QuoteStatusBadgestatus>"
}</DialogDescription> </DialogHeader> <Separator className="my-4" /> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <Card> </div> </div> </CardContent> </Card> <Card> </div> </div> </CardContent> </Card> </div> {";"
</Separator>"
  quote && quote.project description && (<> <h4 className="font-medium mt-4" >Additional Details</h4> <p> {;"
  quote && quote.project description ;)
}</p> </>) ;
}(quote && quote.budget min && quote && quote.budget max ? `$$ {;
  quote && quote.budget min ;
}- $$ {;
  quote && quote.budget max ;
}` : quote && quote.budget min ? `$$ {;"
  quote && quote.budget min ';')'
}` : 'Not specified') ;'
}</div> </CardContent> </Card> </div> </DialogContent> </Dialog>) ;
    <Dialog open={is_open} onOpenChange={(open, ) => !open && on_close ()}>;
</Dialog>'
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
        <div className="grid grid - cols - 1 md: grid - cols - 2 gap - 6">;"
</div>
          <Card>;
</Card>"
            <CardContent className="pt - 6">;"
</CardContent>"
              <h3 className="text - lg font - medium mb - 3">Requester Information</h3>;""
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
        </div>;"
        <Card className="mt - 6">;"
</Card>"
          <CardContent className="pt - 6">;"
</CardContent>"
            <h3 className="text - lg font - medium mb - 3">Project Details</h3>;""
            <p className="mb - 4">{quote.project_summary}</p>;"
              <>;"
                <h4 className="font - medium mt - 4">Additional Details</h4>;"
                <p>{quote.project_description}</p>;
              </>)}"
            <div className="mt - 6 flex items - center gap - 2">;"
</div>"
              <DollarSign className="h - 4 w - 4 text - gray - 500" />;"
</DollarSign>"
              <span className="font - medium">Budget: </span>;"
            </div>;
          </CardContent>;
        </Card>;"
        <div className="mt - 6 flex justify - end">;"
</div>
          <Button on_click={on_close}>Close</Button>;
        </div>;
      </DialogContent>;
    </Dialog>);"
}> <DialogContent className="max - w-3xl max - h-[90vh] overflow - y-auto" > <DialogHeader> <DialogTitle className="text - 2xl flex items - center justify - between" > <span> {"
</DialogContent>
}</span> <QuoteStatusBadge status= {
  quote.status;"
}/> format_date (quote.created at) ";"
</QuoteStatusBadge>"
}</DialogDescription> </DialogHeader> <Separator className="my - 4" /> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6" > <Card> </div> </div> </CardContent> </Card> <Card> </div> </div> </CardContent> </Card> </div> {";"
</Separator>"
  quote.project description && (<> <h4 className="font - medium mt - 4" >Additional Details</h4> <p> {"
  quote.project description;)
}</p> </>);
}(quote.budget min && quote.budget max ? `$$ {
  quote.budget min;
}- $$ {
  quote.budget max;
}` : quote.budget min ? `$$ {"
  quote.budget min ';')'
}` : 'Not specified');'
}</div> </CardContent> </Card> </div> </DialogContent> </Dialog>);'