

<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"
import {useReactId} from "@/hooks/useReactId"
import {cn} from "@/lib/utils"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = Record<;
  string;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useReactId } from "@/hooks/useReactId"

import { cn } from "@/lib/utils"




// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: "", dark: ".dark" } as const
export type ChartConfig = Record<
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  string,
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
type ChartContextProps = {
  config: ChartConfig;
}
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
=======

const ChartContainer = React.forwardRef<
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  HTMLDivElement;
  React && React.ComponentProps<"div"> & {;
    config: ChartConfig;
    children: React && React.ComponentProps<;
      typeof RechartsPrimitive && RechartsPrimitive.ResponsiveContainer;
<<<<<<< HEAD
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
    >["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {;
  const uniqueId = useReactId();
  return (
    <ChartContext && ChartContext.Provider value={{ config }}>;
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    >["children"];
  }

>(({ id, className, children, config, ...props }, ref) => {;
  const uniqueId = useReactId();
  const chartId = `chart-${id || uniqueId && uniqueId.replace(/:/g, "")}`;


  return (
    <ChartContext && ChartContext.Provider value={{ config }}>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          "flex aspect-video justify-center text-xs [&_ && _.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_ && _.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_ && _.recharts-curve && curve.recharts-tooltip-cursor]:stroke-border [&_ && _.recharts-dot[stroke='#fff']]:stroke-transparent [&_ && _.recharts-layer]:outline-none [&_ && _.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_ && _.recharts-radial-bar-background-sector]:fill-muted [&_ && _.recharts-rectangle && rectangle.recharts-tooltip-cursor]:fill-muted [&_ && _.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_ && _.recharts-sector[stroke='#fff']]:stroke-transparent [&_ && _.recharts-sector]:outline-none [&_ && _.recharts-surface]:outline-none"
          className
        )}
        {...props}>;
        <ChartStyle id={chartId} config={config} />;
        <RechartsPrimitive && RechartsPrimitive.ResponsiveContainer>;
          {children}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </RechartsPrimitive && RechartsPrimitive.ResponsiveContainer>;
      </div>;
    </ChartContext && ChartContext.Provider>;
  );
});
ChartContainer && ChartContainer.displayName = "Chart";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) => {;
  const colorConfig = Object && Object.entries(config).filter(;
    ([_, config]) => config && config.theme || config && config.color;
  );
<<<<<<< HEAD
<<<<<<< HEAD
  if (!colorConfig && colorConfig.length) {;
    return null;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!colorConfig && colorConfig.length) {;
    return null;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  return (
    <style;
      dangerouslySetInnerHTML={{
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ([theme, prefix]) => `;
${prefix} [data-chart=${id}] {;
${colorConfig;
  .map(([key, itemConfig]) => {;
    const color =;
<<<<<<< HEAD
<<<<<<< HEAD
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||;
      itemConfig.color;
    return color ? `  --color-${key} ${color},` :null;
  });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      itemConfig && itemConfig.theme?.[theme as keyof typeof itemConfig && itemConfig.theme] ||;
      itemConfig && itemConfig.color;
    return color ? `  --color-${key}: ${color},` : null;
  });

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  .join("\n")}
}
`;
          );
          .join("\n")}}
    />;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


const ChartTooltip = RechartsPrimitive && RechartsPrimitive.Tooltip;

const ChartTooltipContent = React && React.forwardRef<;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  HTMLDivElement;
  React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Tooltip> &;
    React && React.ComponentProps<"div"> & {;
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    }
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>(
  (
    {
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }

>(
  (
    {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      labelKey};
    ref;
  ) => {;
    const { config } = useChart();
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const tooltipLabel = React && React.useMemo(() => {;
      if (hideLabel || !payload?.length) {;
        return null;
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const [item] = payload;
      const key = `${labelKey || item && item.dataKey || item && item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =;
        !labelKey && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : itemConfig?.label;
<<<<<<< HEAD
      if (labelFormatter) {;
=======

      if (labelFormatter) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return (
          <div className={cn("font-medium", labelClassName)}>;
            {labelFormatter(value, payload)}
          </div>;
        );
      }

<<<<<<< HEAD
      if (!value) {;
        return null;
      }
      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
=======



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
=======

      if (!value) {;
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      label;
      label_formatter;
      payload;
      hide_label;
      labelClassName;
      config;
<<<<<<< HEAD
<<<<<<< HEAD
      labelKey]);
    if (!active || !payload?.length) {;
      return null;
    }
    const nestLabel = payload && payload.length === 1 && indicator !== "dot";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      labelKey]);

    if (!active || !payload?.length) {;
      return null;
    }

    const nestLabel = payload && payload.length === 1 && indicator !== "dot";


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      label_key]);
    // Check condition
if ( {) {
  $2
}
      return null;
    }
    const nest_label = payload.length === 1 && indicator !== "dot";
<<<<<<< HEAD
<<<<<<< HEAD
    return (
      <div;
        ref={ref}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return (
      <div;
        ref={ref}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="grid gap-1 && 1.5">;
          {payload && payload.map((item, index) => {;
            const key = `${nameKey || item && item.name || item && item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item && item.payload.fill || item && item.color;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


                                "--color-bg": indicatorColor,


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                                "--color-bg": indicatorColor;
                                "--color-bg": indicatorColor,


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

                        <span className="text-muted-foreground">;
                          {itemConfig?.label || item && item.name}
                        </span>;
                      </div>;
                      {item && item.value && (;
                        <span className="font-mono font-medium tabular-nums text-foreground">;
                          {item && item.value.toLocaleString()}
                        </span>;

<<<<<<< HEAD
                        </span>;

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

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey])
    if (!active |!payload?.length) {
      return null
    }
    const nestLabel = payload.length === 1 && indicator !== "dot"
    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
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
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
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
                                "--color-bg": indicatorColor;
                                "--color-bg": indicatorColor,
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <span className="text-muted-foreground">
                          {itemConfig?.label |item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                        </span>;
<<<<<<< HEAD
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
=======
=======
                      </div>;
                      {item && item.value && (;
                        <span className="font-mono font-medium tabular-nums text-foreground">;
                          {item && item.value.toLocaleString()}
                        </span>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

                        </span>;

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

);
=======

);
ChartTooltipContent && ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive && RechartsPrimitive.Legend;

const ChartLegendContent = React && React.forwardRef<;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  HTMLDivElement;
  React && React.ComponentProps<"div"> &;
    Pick<React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Legend>;
      "payload" | "verticalAlign"> & {;
      hideIcon?: boolean;
      nameKey?: string;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    }
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }


    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref
  ) => {
    const { config } = useChart()
    if (!payload?.length) {
      return null
<<<<<<< HEAD

>(;
  (;
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey };
    ref;
  ) => {;
    const { config } = useChart();
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
    if (!payload?.length) {;
      return null;
    }



<<<<<<< HEAD
    return (
      <div
    }
;
    return (;
      <div;
        ref={ref}
        )}>;
        {payload && payload.map((item) => {;
          const key = `${nameKey || item && item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
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
    }

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <div
        ref={ref}
        className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          "flex items-center justify-center gap-4"
          verticalAlign === "top" ? "pb-3" : "pt-3"
          className

        )}>;
        {payload && payload.map((item) => {;
          const key = `${nameKey || item && item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);


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
              )}
              {itemConfig?.label}
            </div>;
          );
        })}
      </div>;
    );
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
=======
  }
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
}
export {
);
ChartLegendContent && ChartLegendContent.displayName = "ChartLegend";
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

);
ChartLegendContent && ChartLegendContent.displayName = "ChartLegend";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Helper to extract item config from a payload.;
function getPayloadConfigFromPayload(): any (;
  config: ChartConfig,;
  payload: unknown,;
  key: string;
) {;
  if (typeof payload !== "object" || payload === null) {;
    return undefined;
  }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const payloadPayload =;
    "payload" in payload &&;
    typeof payload && payload.payload === "object" &&;
    payload && payload.payload !== null;
      ? payload && payload.payload;
      : undefined;
<<<<<<< HEAD
  let configLabelKey: string = key;
=======

  let configLabelKey: string = key;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD


<<<<<<< HEAD
  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}
export {
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
  ChartLegend;
  ChartLegendContent;
  ChartStyle}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export {;
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
<<<<<<< HEAD
<<<<<<< HEAD
;

;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return configLabelKey in config;
    ? config[configLabelKey];
    : config[key as keyof typeof config];
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export {;

  ChartContainer,;
  ChartTooltip,;
  ChartTooltipContent,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ChartLegend;
  ChartLegendContent;

  ChartStyle}
<<<<<<< HEAD

<<<<<<< HEAD
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
  ChartLegend;
  ChartLegendContent;
  ChartStyle}
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
;
export {;
  ChartContainer,;
  ChartTooltip,;
  ChartTooltipContent,;
  ChartLegend;
  ChartLegendContent;
  ChartStyle}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
