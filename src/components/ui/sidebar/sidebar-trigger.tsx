
import * as React from &quot;react&quot;
import { PanelLeft } from "lucide-react";
import {Button} from &quot;@/components/ui/button&quot;
import {cn} from &quot;@/lib/utils&quot;
import {useSidebar} from &quot;./sidebar-context&quot;
  return (;
    <Button;
ref={ref};
      data-sidebar=&quot;trigger&quot;
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn(&quot;h-7 w-7&quot;, props.className)}