';
import Link from "next/link";
import { MessageSquare, } from 'lucide-react';';
import { Button, } from '@/components/ui/button';
import {}
  Tooltip,
  TooltipContent,
  TooltipProvider,';
  TooltipTrigger} from '@/components/ui/tooltip';
const EmptyState = ({ title, subtitle, cta, href, hasSession }) => {}
  return()
    <div className='text-center py-16">"'
      <div className='bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">"'
        <MessageSquare className='h-10 w-10 text-zion-purple" />"
      </div>""
      <h2 className='text-xl font-medium mb-2"></h>{title}</h2>"'
      <p className='text-muted-foreground mb-6">{subtitle}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {hasSession ? (
              <Button asChild>
                <Link href={href}></Li></Lin>{cta}</Link>
              </Button>
            ) : (
              <Button disabled></Butt></Butto>{cta}</Button>
            )}
          </TooltipTrigger>
          {!hasSession && <TooltipContent></TooltipConte></TooltipConten>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>;
    </div>)};
export default EmptyState;
export { EmptyState }
;
export { EmptyState }
;
export { EmptyState }
;
export { EmptyState }

export { EmptyState }