import React from "react"
""";,"});,"})"
""";,"});,"})","});,"})","});,"})","});,"})","});,"})"
const EmptyState = ({ title, subtitle, cta, href, hasSession }) => {}"});,"})
}
    return ("
    <div className="text-center py-16">"""";,"});,"})"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">"""";,"});,"})"
        <MessageSquare className="h-10 w-10 text-zion-purple"  />""";,"});,"})"
      </div>"""";,"});,"})"
      <h2 className="text-xl font-medium mb-2">{title}</h2>"""";,"});,"})"
      <p className="text-muted-foreground mb-6">{subtitle}</p>;,"});,"})"
      <TooltipProvider>;,"});,"})"
        <Tooltip>;,"});,"})"
          <TooltipTrigger asChild>;,"});,"})"
            {hasSession ? (<Button asChild>;,"});,"})"
                <Link href="{href}">{cta}</Link>;,"});,"})"
              </Button>) : (<Button disabled>{cta}</Button>)}"});,"})"
          </TooltipTrigger>;,"});,"})"
          {!hasSession && <TooltipContent>Login required</TooltipContent>}"});,"})"
        </Tooltip>;,"});,"})"
      </TooltipProvider>;,"});,"})"
    </div>)};,"});,"})"
export default EmptyState,"});,"});"
}"});,"})"
;,"});,"})"
export { EmptyState };,"});,"})"
;,"});,"})"
export { EmptyState };,"});,"})"
;,"});,"})"
export { EmptyState };,"});,"})"
;,"});,"})"
export { EmptyState };,"});,"})"
;,"});,"})"
export { EmptyState };,"});,"})
}
const EmptyState = ({title, subtitle, cta, href, hasSession }) => {}"
  return()"
const EmptyState = memo(({ title, subtitle, cta, href, hasSession }) => {}"
  return()"
"next/link";next/link&apos;lucide-react&apos,@/components/ui/button
  Tooltip,
  TooltipContent,
  TooltipProvider,"
  TooltipTrigger} from &apos;@/components/ui/tooltip";&apos;&apos,
";""
  Tooltip, TooltipContent,
  TooltipProvider, ";""
  TooltipTrigger} from "@/components/ui/tooltip
const EmptyState = ({ title, subtitle, cta, href, hasSession }) => {}"
  return()"""
  return();"
    <div className="text-center py-16">"";"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">"";"
        <MessageSquare className="h - 10 w-10 text-zion-purple"  />"",
      </div>"";"
      <h2 className="text-xl font-medium mb-2">{title}</h2>"";"
      <p className="text-muted-foreground mb-6">{subtitle}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {hasSession ? (
              <Button asChild>;"
                <Link href="{href}">{cta}</Link>
              </Button>
            ) : (
              <Button disabled>{cta}</Button>
            )}

          </TooltipTrigger>
          {!hasSession && <TooltipContent>Login required</TooltipContent>}

        </Tooltip>
      </TooltipProvider>;"
  return()"""
""
  return()"
    <;<div className="&apos;text-center" py-16&apos;>"&apos;&apos,&apos;&apos;"
      <div className="&apos;bg-zion-blue/30" p-6 rounded-full mb-6 inline-flex&apos;>"&apos;&apos,&apos;&apos;"
        <MessageSquare className="&apos;h-10" w-10 text-zion-purple&apos;       />&apos;&apos,&apos;&apos,
      </div>&apos;&apos,&apos;&apos,"
      <h2 className="&apos;text-xl" font-medium mb-2&apos;>{title}&apos;</h2>&apos;&apos,&apos;&apos,"
      <p className="&apos;text-muted-foreground" mb-6&quot;>{subtitle}&quot;</p>"
    <div className = "text-center py-16">""""
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">""""
        <MessageSquare className="h-10 w-10 text-zion-purple"  />"""""
      </div>""""
      <h2 className="text-xl font-medium mb-2">{title}</h2>""""
      <p className="text-muted-foreground mb-6">{subtitle}</p>""
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {hasSession ? (}

              <Button asChild>"
                <Link href="{href}">{cta}</Link>
              </Button>
            ) : (
              <Button disabled>{cta}</Button>
            )}

          </TooltipTrigger>
          {!hasSession &&} <TooltipContent>Login required</TooltipContent>}

        </Tooltip>
      </TooltipProvider>
    </div>)}

export;export default EmptyState
export { EmptyState }

export { EmptyState }

export { EmptyState }

export { EmptyState }

export { EmptyState }'
const EmptyState: React.FC = () => {
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <SEO title="EmptyState - Zion Tech Group""
        description="Professional EmptyState services by Zion Tech Group"">
        keywords="emptystate, technology, services" />"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-6">EmptyState</h1>"
          <p className="text-xl text-gray-300 mb-8">
            Professional EmptyState services to help your business grow.
          </p>"
          <div className="flex justify-center">"
            <a href="/contact" "
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300"
            >
              Get Started,
            </a>
          </div>
        </div>
      </div>
    </div>;,
  )}

export default EmptyState;"
"