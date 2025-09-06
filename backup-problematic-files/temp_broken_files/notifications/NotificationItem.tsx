import React from 'react'
import { Check, Trash2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/
import { Badge } from '@/components/ui/
import { cn } from '@/lib/
  TooltipTrigger} from '@/components/ui/
import { useRouter } from 'next/
import { Notification, NotificationType } from '@/context/
  handleClick ;"}> </Button>) ";"}</div> </div> </div> h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=" h-3.5 w-3.5 text-red-400" /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> 