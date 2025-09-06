<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"

=======


=======
import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"
<<<<<<< HEAD
import {useReactId} from "@/hooks/useReactId"
import {cn} from "@/lib/utils"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = Record<;
  string;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useReactId } from "@/hooks/useReactId"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: "", dark: ".dark" } as const
export type ChartConfig = Record<
<<<<<<< HEAD
<<<<<<< HEAD
  string,

=======
  string,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string, theme?: never }
    | { color?: never, theme: Record<keyof typeof THEMES, string> }
  )
>
type ChartContextProps = {
  config: ChartConfig
}
const ChartContext = React.createContext<ChartContextProps>({
  config: {}})
function useChart(): ChartContextProps {
  return React.useContext(ChartContext)
}
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
import React from 'react';
import * as React from "react";
import type { CSSProperties } from "react";
import * as RechartsPrimitive from "recharts";
import {useReactId} from "@/hooks/useReactId";
import {cn} from "@/lib/utils";
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;
export type ChartConfig = Record<;
  string;
  {;
    label?: React && React.ReactNode;
    icon?: React && React.ComponentType;
  } & (;
    | { color?: string, theme?: never }
    | { color?: never, theme: Record<keyof typeof THEMES, string> }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
import * as React from './react';
import type { CSSProperties } from './react';
import * as RechartsPrimitive from './recharts';
import { useReactId } from '@/hooks / useReactId';
import { cn } from '@/lib / utils';
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;
export type ChartConfig = Record<;
  string;
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string, theme?: never }
    | { color?: never, theme: Record < keyof typeof THEMES, string> }
  );
>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

type ChartContextProps = {
  config: ChartConfig;
}





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const ChartContainer = React.forwardRef<
=======
========
type ChartContextProps = {
  config: ChartConfig;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
  );
>;
type ChartContextProps = {;
  config: ChartConfig;
}
const ChartContext = React && React.createContext<ChartContextProps>({;
  config: {}});
function useChart(): any (): ChartContextProps {;
  return React && React.useContext(ChartContext);
}
const ChartContainer = React && React.forwardRef<;
  HTMLDivElement;
  React && React.ComponentProps<"div"> & {;
    config: ChartConfig;
    children: React && React.ComponentProps<;
      typeof RechartsPrimitive && RechartsPrimitive.ResponsiveContainer;
=======
import * as React from "react";
import type { CSSProperties } from "react";
import * as RechartsPrimitive from "recharts";
import { useReactId } from "@/hooks/useReactId";
;
import { cn } from "@/lib/utils";
;
// Format:{ THEME_NAME:CSS_SELECTOR }
const THEMES = { light:"", dark:".dark" } as const;
;
export type ChartConfig = Record<;
  string,;
  {;
    label?:React.ReactNode;
    icon?:React.ComponentType;
  } & (;
    | { color?:string, theme?:never }
    | { color?:never, theme:Record<keyof typeof THEMES, string> }
  );
>;
;
type ChartContextProps = {;
  config:ChartConfig;
}
;
const ChartContext = React.createContext<ChartContextProps>({;
  config:{}});
;
function useChart():ChartContextProps {;
  return React.useContext(ChartContext);
}
;
const ChartContainer = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div"> & {;
    config:ChartConfig;
    children:React.ComponentProps<;
      typeof RechartsPrimitive.ResponsiveContainer;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    >["children"];
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
>(({ id, className, children, config, ...props }, ref) => {;
  const uniqueId = useReactId();
<<<<<<< HEAD
  const chartId = `chart-${id || uniqueId && uniqueId.replace(/:/g, "")}`;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
  return (
    <ChartContext && ChartContext.Provider value={{ config }}>;
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = useReactId()
  const chartId = `chart-${id |uniqueId.replace(/:/g, "")}`
  return (
    <ChartContext.Provider value={{ config }}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
<<<<<<< HEAD
          "flex aspect-video justify-center text-xs [&_ && _.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_ && _.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_ && _.recharts-curve && curve.recharts-tooltip-cursor]:stroke-border [&_ && _.recharts-dot[stroke='#fff']]:stroke-transparent [&_ && _.recharts-layer]:outline-none [&_ && _.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_ && _.recharts-radial-bar-background-sector]:fill-muted [&_ && _.recharts-rectangle && rectangle.recharts-tooltip-cursor]:fill-muted [&_ && _.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_ && _.recharts-sector[stroke='#fff']]:stroke-transparent [&_ && _.recharts-sector]:outline-none [&_ && _.recharts-surface]:outline-none"
          className
        )}
        {...props}>;
        <ChartStyle id={chartId} config={config} />;
        <RechartsPrimitive && RechartsPrimitive.ResponsiveContainer>;
          {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
        </RechartsPrimitive && RechartsPrimitive.ResponsiveContainer>;
      </div>;
    </ChartContext && ChartContext.Provider>;
  );
});
ChartContainer && ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) => {;
  const colorConfig = Object && Object.entries(config).filter(;
    ([_, config]) => config && config.theme || config && config.color;
  );
  if (!colorConfig && colorConfig.length) {;
    return null;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
const ChartContext = React.create_context < ChartContextProps>({
  config: {}});
function use_chart (): ChartContextProps {
  return React.useContext (ChartContext);
}
const ChartContainer = React.forward_ref<;
  HTMLDivElement;
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<;
      typeof RechartsPrimitive.ResponsiveContainer;
    >["children"];
  }
>(({ id, class_name, children, config, ...props }, ref) => {
  const unique_id = useReactId ();
  const chart_id = `chart-${id || unique_id.replace (/:/g, "")}`;
  return (
    <ChartContext.Provider value={{ config }}>;
      <div;
        data - chart={chart_id}
        ref={ref}
        className={cn (
          "flex aspect - video justify - center text - xs [&_.recharts - cartesian - axis - tick_text]:fill - muted - foreground [&_.recharts - cartesian - grid_line[stroke='#ccc']]:stroke - border / 50 [&_.recharts - curve.recharts - tooltip - cursor]:stroke - border [&_.recharts - dot[stroke='#fff']]:stroke - transparent [&_.recharts - layer]:outline - none [&_.recharts - polar - grid_[stroke='#ccc']]:stroke - border [&_.recharts - radial - bar - background - sector]:fill - muted [&_.recharts - rectangle.recharts - tooltip - cursor]:fill - muted [&_.recharts - reference - line_[stroke='#ccc']]:stroke - border [&_.recharts - sector[stroke='#fff']]:stroke - transparent [&_.recharts - sector]:outline - none [&_.recharts - surface]:outline - none";
          class_name)}
        {...props}
      >;
        <ChartStyle id={chart_id} config={config} />;
        <RechartsPrimitive.ResponsiveContainer>;
          {children}
        </RechartsPrimitive.ResponsiveContainer>;
      </div>;
    </ChartContext.Provider>);
});
ChartContainer.display_name = "Chart";
const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) =>: any {
  const color_config = Object.entries (config).filter (
    ([_, config]) => config.theme || config.color);
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  return (
    <style;
      dangerouslySetInnerHTML={{
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
=======
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
;
  return (;
    <ChartContext.Provider value={{ config }}>;
      <div;
        data-chart={chartId}
        ref={ref}
        className={cn(;
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",;
          className;
        )}
        {...props}
      >;
        <ChartStyle id={chartId} config={config} />;
        <RechartsPrimitive.ResponsiveContainer>;
          {children}
        </RechartsPrimitive.ResponsiveContainer>;
      </div>;
    </ChartContext.Provider>;
  );
});
ChartContainer.displayName = "Chart";
;
const ChartStyle = ({ id, config } { id:string, config:ChartConfig }) => {;
  const colorConfig = Object.entries(config).filter(;
    ([_, config]) => config.theme || config.color;
  );
;
  if (!colorConfig.length) {;
    return null;
  }
;
  return (;
    <style;
      dangerouslySetInnerHTML={{;
        __html:Object.entries(THEMES);
          .map(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
            ([theme, prefix]) => `;
${prefix} [data-chart=${id}] {;
${colorConfig;
  .map(([key, itemConfig]) => {;
    const color =;
<<<<<<< HEAD
      itemConfig && itemConfig.theme?.[theme as keyof typeof itemConfig && itemConfig.theme] ||;
      itemConfig && itemConfig.color;
    return color ? `  --color-${key}: ${color},` : null;
=======
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||;
      itemConfig.color;
    return color ? `  --color-${key} ${color},` :null;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
  .join("\n")}
}
`;
          );
          .join("\n")}}
    />;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
const ChartTooltip = RechartsPrimitive && RechartsPrimitive.Tooltip;
const ChartTooltipContent = React && React.forwardRef<;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
  HTMLDivElement;
  React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Tooltip> &;
    React && React.ComponentProps<"div"> & {;
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
        __html: Object.entries (THEMES);
          .map (
            ([theme, prefix]) => `;
${prefix} [data - chart=${id}] {
${color_config;
  .map (([key, item_config]) => {
    const color =;
      item_config.theme?.[theme as keyof typeof item_config.theme] ||;
      item_config.color;
    return color ? `  --color-${key}: ${color}, ` : null;
  });
  .join ("\n")}
}
`);
          .join ("\n")}}
    />);
}
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forward_ref<;
  HTMLDivElement;
  React.ComponentProps < typeof RechartsPrimitive.Tooltip> &;
    React.ComponentProps<"div"> & {
      hide_label?: boolean;
      hide_indicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      name_key?: string;
      label_key?: string;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

>(
  (
    {

<<<<<<< HEAD
=======
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"
const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme |config.color
  )
  if (!colorConfig.length) {
    return null
  }
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] |
      itemConfig.color
    return color ? `  --color-${key}: ${color},` : null
  })
  .join("\n")}
}
`
          )
          .join("\n")}}
    />
  )
}
const ChartTooltip = RechartsPrimitive.Tooltip
const ChartTooltipContent = React.forwardRef<
  HTMLDivElement;
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
<<<<<<< HEAD
      active;
      payload;
      className;
      indicator = "dot";
      hideLabel = false;
      hideIndicator = false;
      label;
      labelFormatter;
      labelClassName;
      formatter;
      color;
      nameKey;
      labelKey}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey},
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref
  ) => {
    const { config } = useChart()
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel |!payload?.length) {
        return null
      }
      const [item] = payload
      const key = `${labelKey |item.dataKey |item.name |"value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label |label
          : itemConfig?.label
      if (labelFormatter) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }
      if (!value) {
        return null
      }
<<<<<<< HEAD
=======
=======
========
>(;
  (;
    {;
      active;
      payload;
      class_name;
      indicator = "dot";
      hide_label = false;
      hide_indicator = false;
      label;
      label_formatter;
      labelClassName;
      formatter;
      color;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
      labelKey};
    ref;
  ) => {;
    const { config } = useChart();
    const tooltipLabel = React && React.useMemo(() => {;
      if (hideLabel || !payload?.length) {;
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item && item.dataKey || item && item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =;
        !labelKey && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : itemConfig?.label;
      if (labelFormatter) {;
        return (
          <div className={cn("font-medium", labelClassName)}>;
            {labelFormatter(value, payload)}
          </div>;
        );
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
      if (!value) {;
        return null;
      }
      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
      name_key;
      label_key}
    ref) => {
    const { config } = use_chart ();
    const tooltip_label = React.useMemo (() => {
      // Check condition
if ( {) {
  $2
}
        return null;
      }
      const [item] = payload;
      const key = `${label_key || item.data_key || item.name || "value"}`;
      const item_config = getPayloadConfigFromPayload (config, item, key);
      const value =;
        !label_key && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : item_config?.label;
      // Check condition
if ( {) {
  $2
}
        return (
          <div className={cn ("font - medium", labelClassName)}>;
            {label_formatter (value, payload)}
          </div>);
      }
      // Check condition
if ( {) {
  $2
}
        return null;
      }
      return <div className={cn ("font - medium", labelClassName)}>{value}</div>;
    }, [;
      label;
      label_formatter;
      payload;
      hide_label;
      labelClassName;
      config;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
      labelKey]);
    if (!active || !payload?.length) {;
      return null;
    }
    const nestLabel = payload && payload.length === 1 && indicator !== "dot";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx


=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
      label_key]);
    // Check condition
if ( {) {
  $2
}
      return null;
    }
    const nest_label = payload.length === 1 && indicator !== "dot";
    return (
      <div;
        ref={ref}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
        <div className="grid gap-1 && 1.5">;
          {payload && payload.map((item, index) => {;
            const key = `${nameKey || item && item.name || item && item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item && item.payload.fill || item && item.color;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
            return (
              <div
                key={item && item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2 && 2.5 [&>svg]:w-2 && 2.5 [&>svg]:text-muted-foreground";
                  indicator === "dot" && "items-center";
                )}
              >;
                {formatter && item?.value !== undefined && item && item.name ? (;
                  formatter(item && item.value, item && item.name, item, index, item && item.payload);
                ) : (;
                  <>;
                    {itemConfig?.icon ? (;
                      <itemConfig && itemConfig.icon />;
                    ) : (;
                      !hideIndicator && (;
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]"
                            {
                              "h-2 && 2.5 w-2 && 2.5": indicator === "dot"
                              "w-1": indicator === "line"
                              "w-0 border-[1 && 1.5px] border-dashed bg-transparent":
                                indicator === "dashed"
                              "my-0 && 0.5": nestLabel && indicator === "dashed"}
                          )}
                            style={
                              {

<<<<<<< HEAD
=======

                                "--color-bg": indicatorColor,


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                                "--color-border": indicatorColor} as CSSProperties
                            }
                        />;
                      );
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none"
                        nestLabel ? "items-end" : "items-center"
                      )}>;
                      <div className="grid gap-1 && 1.5">;
                        {nestLabel ? tooltipLabel : null}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
<<<<<<< HEAD
                        <span className="text-muted-foreground">
                          {itemConfig?.label |item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
                        <span className="text-muted-foreground">;
                          {itemConfig?.label || item && item.name}
                        </span>;
                      </div>;
                      {item && item.value && (;
                        <span className="font-mono font-medium tabular-nums text-foreground">;
                          {item && item.value.toLocaleString()}
                        </span>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

=======

                        </span>;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
;
const ChartTooltip = RechartsPrimitive.Tooltip;
;
const ChartTooltipContent = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &;
    React.ComponentProps<"div"> & {;
      hideLabel?:boolean;
      hideIndicator?:boolean;
      indicator?:"line" | "dot" | "dashed";
      nameKey?:string;
      labelKey?:string;
    }
>(;
  (;
    {;
      active,;
      payload,;
      className,;
      indicator = "dot",;
      hideLabel = false,;
      hideIndicator = false,;
      label,;
      labelFormatter,;
      labelClassName,;
      formatter,;
      color,;
      nameKey,;
      labelKey},;
    ref;
  ) => {;
    const { config } = useChart();
;
    const tooltipLabel = React.useMemo(() => {;
      if (hideLabel || !payload?.length) {;
        return null;
      }
;
      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =;
        !labelKey && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          :itemConfig?.label;
;
      if (labelFormatter) {;
        return (;
          <div className={cn("font-medium", labelClassName)}>;
            {labelFormatter(value, payload)}
          </div>;
        );
      }
;
      if (!value) {;
        return null;
      }
;
      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
      label,;
      labelFormatter,;
      payload,;
      hideLabel,;
      labelClassName,;
      config,;
      labelKey]);
;
    if (!active || !payload?.length) {;
      return null;
    }
;
    const nestLabel = payload.length === 1 && indicator !== "dot";
;
    return (;
      <div;
        ref={ref}
        className={cn(;
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",;
          className;
        )}
      >;
        {!nestLabel ? tooltipLabel :null}
        <div className="grid gap-1.5">;
          {payload.map((item, index) => {;
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
;
            return (;
              <div;
                key={item.dataKey}
                className={cn(;
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",;
                  indicator === "dot" && "items-center";
                )}
              >;
                {formatter && item?.value !== undefined && item.name ? (;
                  formatter(item.value, item.name, item, index, item.payload);
                ) :(;
                  <>;
                    {itemConfig?.icon ? (;
                      <itemConfig.icon />;
                    ) :(;
                      !hideIndicator && (;
                        <div;
                          className={cn(;
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",;
                            {;
                              "h-2.5 w-2.5":indicator === "dot",;
                              "w-1":indicator === "line",;
                              "w-0 border-[1.5px] border-dashed bg-transparent":;
                                indicator === "dashed",;
                              "my-0.5":nestLabel && indicator === "dashed"}
                          )}
                            style={;
                              {;
                                "--color-bg":indicatorColor,;
                                "--color-border":indicatorColor} as CSSProperties;
                            }
                        />;
                      );
                    )}
                    <div;
                      className={cn(;
                        "flex flex-1 justify-between leading-none",;
                        nestLabel ? "items-end" :"items-center";
                      )}
                    >;
                      <div className="grid gap-1.5">;
                        {nestLabel ? tooltipLabel :null}
                        <span className="text-muted-foreground">;
                          {itemConfig?.label || item.name}
                        </span>;
                      </div>;
                      {item.value && (;
                        <span className="font-mono font-medium tabular-nums text-foreground">;
                          {item.value.toLocaleString()}
                        </span>;}
}> <div) 
}{
  ...props 
}> <ChartStyle id= {
  chartId 
}config= {
  config 
}/> <RechartsPrimitive.ResponsiveContainer> {
  children 
}</RechartsPrimitive.ResponsiveContainer> </div> </ChartContext.Provider>) 
}) ChartContainer.displayName = "Chart") if (!colorConfig.length) {
  return null;
}return (<style dangerouslySetInnerHTML= {
  {
  html: Object.entries (THEMES) .map ( ([theme, prefix]) => `$ {
  prefix 
}[data-chart=$ {
  id 
}] {
  $ {
  colorConfig .map ( ([key, itemConfig]) => {
  const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color 
}) .join ("\n") 
}

const ChartTooltip = RechartsPrimitive.Tooltip,
const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<&quot;div&quot;> & {
      hideLabel?: boolean      hideIndicator?: boolean,
indicator?: &quot;line&quot; | &quot;dot&quot; | &quot;dashed&quot;
      nameKey?: string,
labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = &quot;dot&quot;,
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey},
    ref
  ) => {
    const { config } = useChart()
    const tooltipLabel = React.useMemo_(() => {if (hideLabel || !payload?.length) {
        return null}

      const [item] = payload,
const key = `${labelKey || item.dataKey || item.name || &quot;value&quot}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === &quot;string&quot;
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label,
if (labelFormatter) {
        return (
          <div className={cn(&quot;font-medium&quot;, labelClassName)}>
            {labelFormatter(value, payload)}          </div>
        )
      }

      if (!value) {return null}

      return <div className={cn(&quot;font-medium&quot;, labelClassName)}>{value}</div>    }, [
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey])
<<<<<<< HEAD

    if (!active || !payload?.length) {return null}

    const nestLabel = payload.length === 1 && indicator !== &quot;dot&quot;

    return (
      <div,
ref={ref}
        className={cn(
          &quot;grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl&quot;,
=======
    if (!active |!payload?.length) {
      return null
    }
    const nestLabel = payload.length === 1 && indicator !== "dot"
    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
<<<<<<< HEAD
        <div className=&quot;grid gap-1.5&quot;>
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || &quot;value&quot}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color,
return (
              <div,
key={item.dataKey}
                className={cn(
                  &quot;flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground&quot;,
                  indicator === &quot;dot&quot; && &quot;items-center&quot;                )}
=======
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey |item.name |item.dataKey |"value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color |item.payload.fill |item.color
            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
<<<<<<< HEAD
                        <div,
className={cn(
                            &quot;shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]&quot;,
                            {
                              &quot;h-2.5 w-2.5&quot;: indicator === &quot;dot&quot;,
                              &quot;w-1&quot;: indicator === &quot;line&quot;,
                              &quot;w-0 border-[1.5px] border-dashed bg-transparent&quot;:
                                indicator === &quot;dashed&quot;,
                              &quot;my-0.5&quot;: nestLabel && indicator === &quot;dashed&quot}
                          )}
                            style={
                              {
                                &quot;--color-bg&quot;: indicatorColor,
                                &quot;--color-border&quot;: indicatorColor} as CSSProperties                            }
                        />
                      )
                    )}
                    <div,
className={cn(
                        &quot;flex flex-1 justify-between leading-none&quot;,
                        nestLabel ? &quot;items-end&quot; : &quot;items-center&quot;
                      )}
                    >
                      <div className=&quot;grid gap-1.5&quot;>
                        {nestLabel ? tooltipLabel : null}
                        <span className=&quot;text-muted-foreground&quot;>
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className=&quot;font-mono font-medium tabular-nums text-foreground&quot;>                          {item.value.toLocaleString()}
                        </span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
                      )}
                    </div>;
                  </>;
                )}
              </div>;
            );
          })}
        </div>;
      </div>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
<<<<<<< HEAD
=======
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed"}
                          )}
                            style={
                              {
<<<<<<< HEAD
                                "--color-bg": indicatorColor;
=======
                                "--color-bg": indicatorColor,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                                "--color-border": indicatorColor} as CSSProperties
                            }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label |item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
<<<<<<< HEAD
                        </span>
=======
                        </span>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
)
ChartTooltipContent.displayName = "ChartTooltip"
const ChartLegend = RechartsPrimitive.Legend
const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<React.ComponentProps<typeof RechartsPrimitive.Legend>,
      "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
);
<<<<<<< HEAD
ChartTooltipContent && ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegend = RechartsPrimitive && RechartsPrimitive.Legend;
const ChartLegendContent = React && React.forwardRef<;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
  HTMLDivElement;
  React && React.ComponentProps<"div"> &;
    Pick<React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Legend>;
      "payload" | "verticalAlign"> & {;
      hideIcon?: boolean;
      nameKey?: string;
        className={cn (
          "grid min - w-[8rem] items - start gap - 1.5 rounded - lg border border - border / 50 bg - background px - 2.5 py - 1.5 text - xs shadow - xl";
          class_name)}
      >;
        {!nest_label ? tooltip_label : null}
        <div className="grid gap - 1.5">;
          {payload.map ((item, index) => {
            const key = `${name_key || item.name || item.data_key || "value"}`;
            const item_config = getPayloadConfigFromPayload (config, item, key);
            const indicator_color = color || item.payload.fill || item.color;
            return (
              <div;
                key={item.data_key}
                className={cn (
                  "flex w - full flex - wrap items - stretch gap - 2 [&>svg]:h - 2.5 [&>svg]:w - 2.5 [&>svg]:text - muted - foreground";
                  indicator === "dot" && "items - center")}
              >;
                {formatter && item?.value !== undefined && item.name ? (
                  formatter (item.value, item.name, item, index, item.payload)) : (
                  <>;
                    {item_config?.icon ? (
                      <item_config.icon />) : (
                      !hide_indicator && (
                        <div;
                          className={cn (
                            "shrink - 0 rounded-[2px] border-[--color - border] bg-[--color - bg]";
                            {
                              "h - 2.5 w - 2.5": indicator === "dot";
                              "w - 1": indicator === "line";
                              "w - 0 border-[1.5px] border - dashed bg - transparent":;
                                indicator === "dashed";
                              "my - 0.5": nest_label && indicator === "dashed"}
                          )}
                            style={
                              {
                                "--color - bg": indicator_color;
                                "--color - border": indicator_color} as CSSProperties;
                            }
                        />))}
                    <div;
                      className={cn (
                        "flex flex - 1 justify - between leading - none";
                        nest_label ? "items - end" : "items - center")}
                    >;
                      <div className="grid gap - 1.5">;
                        {nest_label ? tooltip_label : null}
                        <span className="text - muted - foreground">;
                          {item_config?.label || item.name}
                        </span>;
                      </div>;
                      {item.value && (
                        <span className="font - mono font - medium tabular - nums text - foreground">;
                          {item.value.toLocaleString ()}
                        </span>)}
                    </div>;
                  </>)}
              </div>);
          })}
        </div>;
      </div>);
  }
);
ChartTooltipContent.display_name = "ChartTooltip";
const ChartLegend = RechartsPrimitive.Legend;
const ChartLegendContent = React.forward_ref<;
  HTMLDivElement;
  React.ComponentProps<"div"> &;
    Pick < React.ComponentProps < typeof RechartsPrimitive.Legend>;
      "payload" | "vertical_align"> & {
      hide_icon?: boolean;
      name_key?: string;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx


    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }
=======
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref
  ) => {
    const { config } = useChart()
    if (!payload?.length) {
      return null
<<<<<<< HEAD
<<<<<<< HEAD
    }

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
>(;
  (;
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey };
    ref;
  ) => {;
    const { config } = useChart();
=======
ChartTooltipContent.displayName = "ChartTooltip";
;
const ChartLegend = RechartsPrimitive.Legend;
;
const ChartLegendContent = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div"> &;
    Pick<React.ComponentProps<typeof RechartsPrimitive.Legend>,;
      "payload" | "verticalAlign"> & {;
      hideIcon?:boolean;
      nameKey?:string;
    }
>(;
  (;
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },;
    ref;
  ) => {;
    const { config } = useChart();
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    if (!payload?.length) {;
      return null;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

    }
=======
    }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return (
      <div
========
    }
;
    return (;
      <div;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
        ref={ref}
<<<<<<< HEAD
        className={cn(
          "flex items-center justify-center gap-4"
          verticalAlign === "top" ? "pb-3" : "pt-3"
          className
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
        )}>;
        {payload && payload.map((item) => {;
          const key = `${nameKey || item && item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
          return (
            <div
              key={item && item.value}
              className={cn(
                "flex items-center gap-1 && 1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";
              )}
            >;
              {itemConfig?.icon && !hideIcon ? (;
                <itemConfig && itemConfig.icon />;
              ) : (;
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item && item.color}}
                />;
=======
        className={cn(;
          "flex items-center justify-center gap-4",;
          verticalAlign === "top" ? "pb-3" :"pt-3",;
          className;
        )}
      >;
        {payload.map((item) => {;
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
;
          return (;
            <div;
              key={item.value}
              className={cn(;
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              )}
            >;
              {itemConfig?.icon && !hideIcon ? (;
                <itemConfig.icon />;
              ) :(;
                <div;
                  className="h-2 w-2 shrink-0 rounded-[2px]";
                  style={{;
                    backgroundColor:item.color}}
                />;              )}
              {itemConfig?.label}
            </div>;
          );
        })}
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
=======
    }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey |item.dataKey |"value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color}}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
)
ChartLegendContent.displayName = "ChartLegend"
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig
  payload: unknown
  key: string
) {
  if (typeof payload !== "object" |payload === null) {
    return undefined
  }
  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined
  let configLabelKey: string = key
  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }
<<<<<<< HEAD

=======





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
    ref) => {
    const { config } = use_chart ();
    // Check condition
if ( {) {
  $2
}
      return null;
    }
    return (
      <div;
        ref={ref}
        className={cn (
          "flex items - center justify - center gap - 4";
          vertical_align === "top" ? "pb - 3" : "pt - 3";
          class_name)}
      >;
        {payload.map ((item) => {
          const key = `${name_key || item.data_key || "value"}`;
          const item_config = getPayloadConfigFromPayload (config, item, key);
          return (
            <div;
              key={item.value}
              className={cn (
                "flex items - center gap - 1.5 [&>svg]:h - 3 [&>svg]:w - 3 [&>svg]:text - muted - foreground")}
            >;
              {item_config?.icon && !hide_icon ? (
                <item_config.icon />) : (
                <div;
                  className="h - 2 w - 2 shrink - 0 rounded-[2px]";
                  style={{
                    background_color: item.color}}
                />)}
              {item_config?.label}
            </div>);
        })}
      </div>);
  }
);
ChartLegendContent.display_name = "ChartLegend";
// Helper to extract item config from a payload.;
/**
 * getPayloadConfigFromPayload - Function description
 */
function getPayloadConfigFromPayload() {
  // Check condition
if ( {) {
  $2
}
    return undefined;
  }
  const payload_payload =;
    "payload" in payload &&;
    typeof payload.payload === "object" &&;
    payload.payload !== null;
      ? payload.payload;
      : undefined;
  let configLabelKey: string = key;
  // Check condition
if ( {) {
  $2
}
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else // Check condition
if ( {) {
  $2
}
    configLabelKey = payload_payload[;
      key as keyof typeof payload_payload;
    ] as string;
  }
  return configLabelKey in config;
    ? config[configLabelKey];
    : config[key as keyof typeof config];
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

<<<<<<< HEAD
=======
========
export {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
);
ChartLegendContent && ChartLegendContent.displayName = "ChartLegend";
// Helper to extract item config from a payload.;
function getPayloadConfigFromPayload(): any (;
  config: ChartConfig,;
  payload: unknown,;
  key: string;
) {;
  if (typeof payload !== "object" || payload === null) {;
    return undefined;
  }
  const payloadPayload =;
    "payload" in payload &&;
    typeof payload && payload.payload === "object" &&;
    payload && payload.payload !== null;
      ? payload && payload.payload;
      : undefined;
  let configLabelKey: string = key;
  if (;
    key in payload &&;
    typeof payload[key as keyof typeof payload] === "string";
  ) {;
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (;
    payloadPayload &&;
    key in payloadPayload &&;
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string";
  ) {;
    configLabelKey = payloadPayload[;
      key as keyof typeof payloadPayload;
    ] as string;
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

=======


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}
<<<<<<< HEAD
export {
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
  ChartLegend;
  ChartLegendContent;
  ChartStyle}

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export {;
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return configLabelKey in config;
    ? config[configLabelKey];
    : config[key as keyof typeof config];
}
<<<<<<< HEAD
export {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx

  ChartContainer,;
  ChartTooltip,;
  ChartTooltipContent,;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  ChartLegend;
  ChartLegendContent;

  ChartStyle}
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
  ChartLegend;
  ChartLegendContent;
  ChartStyle}
=======
);
ChartLegendContent.displayName = "ChartLegend";
;
// Helper to extract item config from a payload.;
function getPayloadConfigFromPayload(;
  config:ChartConfig,;
  payload:unknown,;
  key:string;
) {;
  if (typeof payload !== "object" || payload === null) {;
    return undefined;
  }
;
  const payloadPayload =;
    "payload" in payload &&;
    typeof payload.payload === "object" &&;
    payload.payload !== null;
      ? payload.payload;
      :undefined;
;
  let configLabelKey:string = key;
;
  if (;
    key in payload &&;
    typeof payload[key as keyof typeof payload] === "string";
  ) {;
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (;
    payloadPayload &&;
    key in payloadPayload &&;
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string";
  ) {;
    configLabelKey = payloadPayload[;
      key as keyof typeof payloadPayload;
    ] as string;
  }
;
  return configLabelKey in config;
    ? config[configLabelKey];
    :config[key as keyof typeof config];
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export {;
  ChartContainer,;
  ChartTooltip,;
  ChartTooltipContent,;
<<<<<<< HEAD
  ChartLegend,;
  ChartLegendContent,;
  ChartStyle}}`) .join ("\n") 
}
}/>) 
}const ChartTooltip = RechartsPrimitive.Tooltip const ChartTooltipContent = React.forwardRef< HTMLDivElement;
React.ComponentProps<typeof RechartsPrimitive.Tooltip> & hideIndicator?: boolean indicator?: "line" | "dot" | "dashed" nameKey?: string const tooltipLabel = React.useMemo ( () => {
  if (hideLabel || !payload?.length) {
  return null;
}const [item] = payload </div>) 
}if (!value) {
  return null;
}
}, [ label;
labelFormatter;
payload;
hideLabel;
labelClassName;
config;
labelKey]) if (!active || !payload?.length) {
  return null;
}) 
}> {
  formatter && item?.value !== undefined && item.name ? (formatter (item.value, item.name, item, index, item.payload) ) : (<> {
  itemConfig?.icon ? (<itemConfig.icon />) : (!hideIndicator && (<div className= {
  cn (
}/>) ) 
}<div {
  item.value.toLocaleString () 
}</span>) 
}</div> </>) 
}</div>) 
}) 
}</div> </div>) 
}) ChartTooltipContent.displayName = "ChartTooltip" const ChartLegend = RechartsPrimitive.Legend const ChartLegendContent = React.forwardRef< HTMLDivElement;
React.ComponentProps<"div" > & Pick<React.ComponentProps<typeof RechartsPrimitive.Legend>;
if (!payload?.length) {
  return null;
}return (<div) 
}> {
  itemConfig?.icon && !hideIcon ? (<itemConfig.icon />) : (<div className="h-2 w-2 shrink-0 rounded-[2px]" style= {
  {
  backgroundColor: item.color 
}
}/>) 
}{
  itemConfig?.label 
}</div>) 
}) 
}</div>) 
}) ChartLegendContent.displayName = "ChartLegend" // Helper to extract item config from a payload.payload.payload !== null ? payload.payload : undefined let configLabelKey: string = key if (key in payload && key as keyof typeof payloadPayload ] as string 
}return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config] 
}export {
  ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/chart.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ChartLegend;
  ChartLegendContent;
  ChartStyle}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
