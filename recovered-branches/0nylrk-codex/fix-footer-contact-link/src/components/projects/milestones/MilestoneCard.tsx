  id: string,;
  projectId: string,;
  title: string,;
  title, ;
  description, ;
  amount, ;
  status, ;
        return 'bg-green-500';
      case 'in_progress':;
        return 'bg-blue-500';
      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }
      }
  }

  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className="text-sm text-muted-foreground">;
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
              </p>;
            )}
          </div>;"
          <div className="flex gap-2">;"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;'
              {status.replace('_ ')}
            </Badge>;
            ;
            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;
      ;"
      <CardContent className="pb-2">;
        {description && (;"
          <p className="text-muted-foreground">{description}</p>;
        )}"
        <div className="mt-4">;"
              variant="ghost""
              size="sm"
            />;
          )}'
        return 'bg-yellow-500';'
      case 'rejected':;'
        return 'bg-red-500';'
      default: return 'bg-gray-500';
    }
  }
  
    }
  }
  return (
    <Card>;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-start">;
          <div>;"
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;"
              <p className="text-sm text-muted-foreground">;'
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
              variant="ghost"
              size="sm"
            />;
          )}

          {isUnderDispute && (;

            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;

}
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import {format} from 'date - fns';
import { Check, ArrowDown, X } from './lucide-react';
import {useDisputeCheck} from '@/hooks / useDisputeCheck';
import {DisputeStatusBadge} from '@/components / disputes / DisputeStatusBadge';

