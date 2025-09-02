';
import Link from &apos;
import Link from &apos;next/link';next/link&apos;';
import { MessageSquare } from &apos;lucide-react&apos;';
import { Button } from &apos;@/components/ui/button';
import {}
  Tooltip,
  TooltipContent,
  TooltipProvider,';
  TooltipTrigger} from &apos;@/components/ui/tooltip';&apos;&apos;
const EmptyState = ({ title, subtitle, cta, href, hasSession }) => {}
  return()
    <;<div className=&apos;text-center py-16&apos;>'&apos;&apos;'&apos;&apos;
      <div className=&apos;bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex&apos;>'&apos;&apos;'&apos;&apos;
        <MessageSquare className=&apos;h-10 w-10 text-zion-purple&apos; />&apos;&apos;'&apos;&apos;
      </div>&apos;&apos;'&apos;&apos;'
      <h2 className=&apos;text-xl font-medium mb-2&apos;>{title}&apos;</h2>&apos;&apos;'&apos;&apos;'
      <p className=&apos;text-muted-foreground mb-6&quot;>{subtitle}&quot;</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {hasSession ? (}
              <Button asChild>
                <Link href={href}>{cta}</Link>
              </Button>
            ) : (
              <Button disabled>{cta}</Button>
            )}
          </TooltipTrigger>
          {!hasSession &&} <TooltipContent>Login required</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>)}
export;export default EmptyState;
export { EmptyState }
;
export { EmptyState }
;
export { EmptyState }
;
export { EmptyState }

export { EmptyState }