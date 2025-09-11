import React from "react"
""";,"}
    );,"})"
""";,"}
    );,"})","}
    );,"})","}
    );,"})","}
    );,"})","}
    );,"})"
const EmptyState = (props: any) => {}"}
    );,"})
}
    return ("
    <div className="text-center py-16">"""";,"}
    );,"})"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">"""";,"}
    );,"})"
        <MessageSquare className="h-10 w-10 text-zion-purple"   />""";,"}
    );,"})"
      </div>"""";,"}
    );,"})"
      <h2 className="text-xl font-medium mb-2">{title}</h2>"""";,"}
    );,"})"
      <p className="text-muted-foreground mb-6">{subtitle}</p>;,"}
    );,"})"
      <TooltipProvider>;,"}
    );,"})"
        <Tooltip>;,"}
    );,"})"
          <TooltipTrigger asChild>;,"}
    );,"})"
            {hasSession ? (<Button asChild>;,"}
    );,"})"
                <Link href="{href}">{cta}</Link>;,"}
    );,"})"
              </Button>) : (<Button disabled>{cta}</Button>)}"}
    );,"})"
          </TooltipTrigger>;,"}
    );,"})"
          {!hasSession && <TooltipContent>Login required</TooltipContent>}"}
    );,"})"
        </Tooltip>;,"}
    );,"})"
      </TooltipProvider>;,"}
    );,"})"
    </div>)};,"}
    );,"})"
export default EmptyState,"}
    );,"}
    );"
}"}
    );,"})"
;,"}
    );,"})"
export {EmptyState};,"}
    );,"})"
;,"}
    );,"})"
export {EmptyState};,"}
    );,"})"
;,"}
    );,"})"
export {EmptyState};,"}
    );,"})"
;,"}
    );,"})"
export {EmptyState};,"}
    );,"})"
;,"}
    );,"})"
export {EmptyState};,"}
    );,"})
}
const EmptyState = ("props": "any) => {"}";
  return()";
const EmptyState = memo(({title, subtitle, cta, href, hasSession}) => {}";
  return()";
"next/link";next/link&apos;lucide-react&apos,../../components/ui/button;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,";
  TooltipTrigger} from &apos;../../components/ui/tooltip";&apos;&apos,;
";"";
  Tooltip, TooltipContent,;
  TooltipProvider, ";"";
  TooltipTrigger} from "../../components/ui/tooltip;
const EmptyState = ("props": "any) => {"}";
  return()""";
  return();";
    <div className="text-center py-16">"";";
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6 inline-flex">"";";
        <MessageSquare className="h - 10 w-10 text-zion-purple"   />"",;
      </div>"";";
      <h2 className="text-xl font-medium mb-2">{title}</h2>"";";
      <p className="text-muted-foreground mb-6">{subtitle}</p>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger asChild>;
            {hasSession ? (;
              <Button asChild>;";
                <Link href="{href}">{cta}</Link>;
              </Button>;
            ) : "(;
              <Button disabled>{cta"}</Button>;