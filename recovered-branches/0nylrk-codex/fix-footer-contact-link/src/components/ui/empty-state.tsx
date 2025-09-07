




import React from "react";""
import {cn} from "@/lib/utils";""
import {Button} from "@/components/ui/button";""
import {Link} from "react-router-dom";""
import React from "react",""
import { cn } from "@/lib/utils",""
import { Button } from "@/components/ui/button";""
import { Link } from "react-router-dom";""
import { Button } from "@/components/ui/button",""
import { Link } from "react-router-dom","
interface EmptyStateProps {
  // TODO: Implement
}
  icon: React.ReactNode;,
  title: string;
  description: string;
  action?: {
"
import React from "react";""
import {cn} from "@/lib/utils";""
import {Button} from "@/components/ui/button";""
import {Link} from "react-router-dom";"
interface EmptyStateProps {;
  icon: React && React.ReactNode,;
  title: string,;
  description: string,;
  action?: {;
    text: string,;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {;
    text: string,;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function EmptyState(): any ({;

  icon;
  title;
  description;
  action;
  secondaryAction;)
  className}: EmptyStateProps) {;
    text: string,
    href?: string,
    onClick?: () => void;
  },
  secondaryAction?: {
    text: string,
    href?: string,
    onClick?: () => void;
  },

  className?: string;
}



  className}: EmptyStateProps) {
  className?: string;
}


export function EmptyState({;
  icon;
  title;
  description;
  action;

  secondaryAction;

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,

)
  className}: EmptyStateProps) {
  return (
    <div;
      className={cn(
"
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50""
        className;"
import React from "react",;""
import { cn } from "@/lib/utils",;""
import { Button } from "@/components/ui/button",;""
import { Link } from "react-router-dom",;"

interface EmptyStateProps {;
  icon: React.ReactNode,;
  title: string,,
  description: string,;
  action?: {;
    text: string,;

    href?: string,;)
    onClick?: () => void;
</div>
    <div;
      className={cn(;"
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50";"
        className;)
      )}
    >
</div>"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">"
</div>"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;"
</div>
      </div>;"
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;""
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;""
      <div className="flex flex-col sm:flex-row gap-4">;"
</div>"
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">;"
</Button>
              <Link to={action && action.href}>{action && action.text}</Link>;
            </Button>;
            <Button;"
              size="lg"""
              className="bg-zion-purple hover:bg-zion-purple-light""

              onClick={action && action.onClick}>;
</Button>
            </Button>;

            <Button;"
              size="lg"""
              className="bg-zion-purple hover:bg-zion-purple-light""
              onClick={action.onClick}
            >
</Button>
            </Button>"
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">"
</Button>
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>"
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">;"
</Button>
              <Link to={secondaryAction && secondaryAction.href}>{secondaryAction && secondaryAction.text}</Link>;
            </Button>;
            <Button;"
              variant="outline""
            <Button;"
              variant="outline"""
              size="lg"""
              className="border-zion-blue-light hover:bg-zion-blue-light""

              onClick={secondaryAction && secondaryAction.onClick}>;
</Button>
            </Button>;

      </div>;
    </div>;
    <div;
      className={cn ("
        "flex flex - col items - center justify - center text - center p - 6 md: p - 10 rounded - lg border border - zion - blue - light bg - zion - blue - dark / 50",")
        class_name)}
    >;
</div>"
      <div className="bg - zion - blue / 30 p - 6 rounded - full mb - 6">;"
</div>
      </div>;"
      <h3 className="text - 2xl font - semibold text - white mb - 3">{title}</h3>;""
      <p className="text - zion - slate text - lg mb - 8 max - w-md">{description}</p>;""
      <div className="flex flex - col sm:flex - row gap - 4">;"
</div>"
            <Button as_child size="lg" className="bg - zion - purple hover:bg - zion - purple - light">;"
</Button>
              <Link to={action.href}>{action.text}</Link>;
            </Button>) : (
            <Button;"
              size="lg";""
              className="bg - zion - purple hover:bg - zion - purple - light";"
              on_click={action.on_click}
            >;
</Button>)
            </Button>))}"
            <Button as_child variant="outline" size="lg" className="border - zion - blue - light hover:bg - zion - blue - light">;"
</Button>
              <Link to={secondary_action.href}>{secondary_action.text}</Link>;
            </Button>) : (
            <Button;"
              variant="outline";""
              size="lg";""
              className="border - zion - blue - light hover:bg - zion - blue - light";"
              on_click={secondary_action.on_click}
            >;
</Button>)
            </Button>))}
      </div>;
    </div>);
  return (<div className= {
  cn (> {
</div>)
}</Button>) ) 
}</Button>) ) 
}</div> </div>) 
            <Button;"
              size="lg";""
              className="bg-zion-purple hover:bg-zion-purple-light";"
              onClick={action.onClick}
            >
</Button>
            </Button>"
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">"
</Button>
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
            <Button;"
              variant="outline""
            <Button;"
              variant="outline"""
              size="lg"""
              className="border-zion-blue-light hover:bg-zion-blue-light""
              onClick={secondaryAction.onClick}
            >
</Button>
            </Button>
      </div>
    </div>"

