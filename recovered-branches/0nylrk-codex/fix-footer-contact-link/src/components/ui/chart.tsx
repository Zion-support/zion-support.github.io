import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"
import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"
import {useReactId} from "@/hooks/useReactId"
import {cn} from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }

  ChartStyle}

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: "", dark: ".dark" } as const
export type ChartConfig = Record<
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
import React from 'react';
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

"
import { useReactId } from "@/hooks/useReactId"
"
import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
";
const THEMES = { light: "", dark: ".dark" } as const;
export type ChartConfig = Record<
;
import React from 'react';"
import * as React from "react";"
import type { CSSProperties } from "react";"
import * as RechartsPrimitive from "recharts";"
import {useReactId} from "@/hooks/useReactId";
"
import {cn} from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }"
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = Record<;

  string;
  {;
    label?: React && React.ReactNode;
    icon?: React && React.ComponentType;
  } & (;
    | { color?: string, theme?: never }
    | { color?: never, theme: Record<keyof typeof THEMES, string> }
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
// Format: { THEME_NAME: CSS_SELECTOR }"
const THEMES = { light: "", dark: ".dark" } as const;
export type ChartConfig = Record<;
  string;
import { useReactId } from "@/hooks/useReactId"

import { cn } from "@/lib/utils"

  {}
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string, theme?: never }

  );
const ChartContainer = React.forwardRef<  );
const ChartContainer = React.forwardRef<  );
>;

// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: "", dark: ".dark" } as const
export type ChartConfig = Record<
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

const ChartContainer = React.forwardRef<
type ChartContextProps = {
  config: ChartConfig;
}
  HTMLDivElement;

type ChartContextProps = {}
  config: ChartConfig;
}

  HTMLDivElement;"
type ChartContextProps = {
  config: ChartConfig;
}
  HTMLDivElement;
  React && React.ComponentProps<"div"> & {;
    config: ChartConfig;
    children: React && React.ComponentProps<;
      typeof RechartsPrimitive && RechartsPrimitive.ResponsiveContainer;
return (

    >["children"];
  }

>(({ id, className, children, config, ...props }, ref) => {;
  const uniqueId = useReactId();
  const chartId = `chart-${id || uniqueId && uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext && ChartContext.Provider value={{ config }}>;
  return (
    <ChartContext && ChartContext.Provider value={{ config }}>;
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_ && _.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_ && _.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_ && _.recharts-curve && curve.recharts-tooltip-cursor]:stroke-border [&_ && _.recharts-dot[stroke='#fff']]:stroke-transparent [&_ && _.recharts-layer]:outline-none [&_ && _.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_ && _.recharts-radial-bar-background-sector]:fill-muted [&_ && _.recharts-rectangle && rectangle.recharts-tooltip-cursor]:fill-muted [&_ && _.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_ && _.recharts-sector[stroke='#fff']]:stroke-transparent [&_ && _.recharts-sector]:outline-none [&_ && _.recharts-surface]:outline-none"
          className
        )}
        {...props}>;
        <ChartStyle id={chartId} config={config} />;
        <RechartsPrimitive && RechartsPrimitive.ResponsiveContainer>;
          {children}

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

            ([theme, prefix]) => `;
${prefix} [data-chart=${id}] {;
${colorConfig;
  .map(([key, itemConfig]) => {;
    const color =;
      itemConfig && itemConfig.theme?.[theme as keyof typeof itemConfig && itemConfig.theme] ||;
      itemConfig && itemConfig.color;
    return color ? `  --color-${key}: ${color},` : null;
  });

  .join("\n")}
}
`;
          );
          .join("\n")}}
    />;
  );
}

const ChartTooltip = RechartsPrimitive && RechartsPrimitive.Tooltip;

const ChartTooltipContent = React && React.forwardRef<;

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
    <ChartContext && ChartContext.Provider value={{ config }}>;

      <div;
        data-chart={chartId}
        ref={ref}
        className={cn(

        </RechartsPrimitive && RechartsPrimitive.ResponsiveContainer>;
      </div>;
    </ChartContext && ChartContext.Provider>;
  );
});"
ChartContainer && ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) => {;
  const colorConfig = Object && Object.entries(config).filter(;
    ([_, config]) => config && config.theme || config && config.color;
  );

const ChartContext = React.create_context < ChartContextProps>({}
  config: {}});
function use_chart (): ChartContextProps {}
  return React.useContext (ChartContext);
}
const ChartContainer = React.forward_ref<;
  HTMLDivElement;"
  React.ComponentProps<"div"> & {}
    config: ChartConfig;
    children: React.ComponentProps<;
      typeof RechartsPrimitive.ResponsiveContainer;"
    >["children"];
  }
>(({ id, class_name, children, config, ...props }, ref) => {}
  const unique_id = useReactId ();"
  const chart_id = `chart-${id || unique_id.replace (/:/g, "")}`;
  return (
    <ChartContext.Provider value={{ config }}>;
      <div;
        data - chart={chart_id}
        ref={ref}
        className={cn ('"
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
});"
ChartContainer.display_name = "Chart";
const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) =>: any {}
  const color_config = Object.entries (config).filter (
    ([_, config]) => config.theme || config.color);
  // Check condition;
if ( {) {}
  $2;
}
    return null;

  }
  return (
    <style;
      dangerouslySetInnerHTML={{}`
            ([theme, prefix]) => `;
${prefix} [data-chart=${id}] {;
${colorConfig;
  .map(([key, itemConfig]) => {;
    const color =;

"
  .join("\n")}
}`
`;
          );"
          .join("\n")}}
    />;
  );
}

  HTMLDivElement;
  React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Tooltip> &;"
    React && React.ComponentProps<"div"> & {;
      hideLabel?: boolean;
      hideIndicator?: boolean;"
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;

        __html: Object.entries (THEMES);
          .map (`
            ([theme, prefix]) => `;
${prefix} [data - chart=${id}] {}
${color_config;
  .map (([key, item_config]) => {}
    const color =;
      item_config.theme?.[theme as keyof typeof item_config.theme] ||;
      item_config.color;`
    return color ? `  --color-${key}: ${color}, ` : null;
  });"
  .join ("\n")}
}`
`);"
          .join ("\n")}}
    />);
}
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forward_ref<;
  HTMLDivElement;
  React.ComponentProps < typeof RechartsPrimitive.Tooltip> &;"
    React.ComponentProps<"div"> & {}
      hide_label?: boolean;
      hide_indicator?: boolean;"
      indicator?: "line" | "dot" | "dashed";
      name_key?: string;
      label_key?: string;
}

>(
  (
    {

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
      active,
      active,
      payload,
      className,"
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



    }
    ref
  ) => {

    ref;
  ) => {}
    const { config } = useChart()
    const tooltipLabel = React.useMemo(() => {}
      if (hideLabel |!payload?.length) {}
        return null;
      }
      const [item] = payload"`
      const key = `${labelKey |item.dataKey |item.name |"value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value ="
        !labelKey && typeof label === "string"
? config[label as keyof typeof config]?.label |label
          : itemConfig?.label
      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }
      if (!value) {
        return null
      }
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
      if (labelFormatter) {
      labelKey};
    ref;
  ) => {;
    const { config } = useChart();

    const tooltipLabel = React && React.useMemo(() => {;
      if (hideLabel || !payload?.length) {;
        return null;
      }

const [item] = payload;"`
      const key = `${labelKey || item && item.dataKey || item && item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =;"
        !labelKey && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : itemConfig?.label;

      if (labelFormatter) {;
        return (
      if (labelFormatter) {        return (

        return ("
        return (
          <div className={cn("font-medium", labelClassName)}>;
            {labelFormatter(value, payload)}
          </div>;
        );
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, []
      if (!value) {;
        return null;
      }
"
      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [

      if (!value) {;
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
      name_key;
      label_key}
ref) => {}
    const { config } = use_chart ();
    const tooltip_label = React.useMemo (() => {}
      // Check condition;
if ( {) {}
  $2;
}
        return null;
      }
      const [item] = payload;"`
      const key = `${label_key || item.data_key || item.name || "value"}`;
      const item_config = getPayloadConfigFromPayload (config, item, key);
      const value =;"
        !label_key && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : item_config?.label;
      // Check condition;
if ( {) {}
  $2;
}
        return ("
          <div className={cn ("font - medium", labelClassName)}>;
            {label_formatter (value, payload)}
          </div>);
      }
// Check condition;
if ( {) {}
  $2;
}
        return null;
      }"
      return <div className={cn ("font - medium", labelClassName)}>{value}</div>;
    }, [;
      label;
      label_formatter;
      payload;
      hide_label;
      labelClassName;
      config;

      labelKey]);

    if (!active || !payload?.length) {;
      return null;
    }
"
    const nestLabel = payload && payload.length === 1 && indicator !== "dot";

      label_key]);
    // Check condition;
if ( {) {}
  $2;
}
      return null;
    }"
    const nest_label = payload.length === 1 && indicator !== "dot";
    return (
      <div;
        ref={ref}
"
        <div className="grid gap-1 && 1.5">;
          {payload && payload.map((item, index) => {;"`
            const key = `${nameKey || item && item.name || item && item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item && item.payload.fill || item && item.color;


            return (
              <div;
                key={item && item.dataKey}
                className={cn("
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2 && 2.5 [&>svg]:w-2 && 2.5 [&>svg]:text-muted-foreground";"
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
                        <div;
                          className={cn("
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]"
                            {"
                              "h-2 && 2.5 w-2 && 2.5": indicator === "dot""
                              "w-1": indicator === "line""
                              "w-0 border-[1 && 1.5px] border-dashed bg-transparent":"
                                indicator === "dashed""
                              "my-0 && 0.5": nestLabel && indicator === "dashed"}
                          )}
style={
                              {
"--color-bg": indicatorColor,
                                "--color-border": indicatorColor} as CSSProperties
                            style={}
                              {"
                                "--color-bg": indicatorColor"
                                "--color-border": indicatorColor} as CSSProperties;
                            }
                        />;
                      );
                    )}
                    <div;
                      className={cn("
                        "flex flex-1 justify-between leading-none""
                        nestLabel ? "items-end" : "items-center"
                      )}>;"
                      <div className="grid gap-1 && 1.5">;
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label |item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}

                        <span className="text-muted-foreground">;
                          {itemConfig?.label || item && item.name}
                        </span>;
                      </div>;
                      {item && item.value && (;
                        <span className="font-mono font-medium tabular-nums text-foreground">;
                          {item && item.value.toLocaleString()}
                        </span>;


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

const ChartLegendContent = React && React.forwardRef<;
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
  HTMLDivElement;
  HTMLDivElement;"
  React && React.ComponentProps<"div"> &;
    Pick<React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Legend>;"
      "payload" | "verticalAlign"> & {;
      hideIcon?: boolean;
      nameKey?: string;
        className={cn ("
          "grid min - w-[8rem] items - start gap - 1.5 rounded - lg border border - border / 50 bg - background px - 2.5 py - 1.5 text - xs shadow - xl";
          class_name)}
      >;
        {!nest_label ? tooltip_label : null}"
        <div className="grid gap - 1.5">;
          {payload.map ((item, index) => {"`

);
ChartTooltipContent && ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive && RechartsPrimitive.Legend;

const ChartLegendContent = React && React.forwardRef<;

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
className={cn ("
                  "flex w - full flex - wrap items - stretch gap - 2 [&>svg]:h - 2.5 [&>svg]:w - 2.5 [&>svg]:text - muted - foreground";"
                  indicator === "dot" && "items - center")}
              >;
                {formatter && item?.value !== undefined && item.name ? (
                  formatter (item.value, item.name, item, index, item.payload)) : (
                  <>;
                    {item_config?.icon ? (
                      <item_config.icon />) : (
                      !hide_indicator && (
                        <div;
className={cn ("
                            "shrink - 0 rounded-[2px] border-[--color - border] bg-[--color - bg]";
                            {"
                              "h - 2.5 w - 2.5": indicator === "dot";"
                              "w - 1": indicator === "line";"
                              "w - 0 border-[1.5px] border - dashed bg - transparent":;"
                                indicator === "dashed";"
                              "my - 0.5": nest_label && indicator === "dashed"}
                          )}
                            style={}
                              {"
                                "--color - bg": indicator_color;"
                                "--color - border": indicator_color} as CSSProperties;
                            }
                        />))}
                    <div;
className={cn ("
                        "flex flex - 1 justify - between leading - none";"
                        nest_label ? "items - end" : "items - center")}
                    >;"
                      <div className="grid gap - 1.5">;
                        {nest_label ? tooltip_label : null}"
                        <span className="text - muted - foreground">;
                          {item_config?.label || item.name}
                        </span>;
                      </div>;
{item.value && ("
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
);"
ChartTooltipContent.display_name = "ChartTooltip";
const ChartLegend = RechartsPrimitive.Legend;
const ChartLegendContent = React.forward_ref<;
  HTMLDivElement;"
  React.ComponentProps<"div"> &;
    Pick < React.ComponentProps < typeof RechartsPrimitive.Legend>;"
      "payload" | "vertical_align"> & {}
      hide_icon?: boolean;
      name_key?: string;
    }

"
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
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

    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },

    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()
    if (!payload?.length) {
      return null

>(;
  (;
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey };
    ref;
  ) => {;
    const { config } = useChart();

    if (!payload?.length) {;

      return null;
>(;
  (;"
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey };
    ref;
  ) => {;
    const { config } = useChart();"
ChartTooltipContent.displayName = "ChartTooltip";
;
const ChartLegend = RechartsPrimitive.Legend;
;
const ChartLegendContent = React.forwardRef<;
HTMLDivElement,;"
  React.ComponentProps<"div"> &;
    Pick<React.ComponentProps<typeof RechartsPrimitive.Legend>,;"
      "payload" | "verticalAlign"> & {;
      hideIcon?:boolean;
      nameKey?:string;
    }
>(;
(;"
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },;
    ref;
  ) => {;
    const { config } = useChart();
;
    if (!payload?.length) {;
      return null;
    }

    return (
<div;
    }
;
    return (;
      <div;
        ref={ref}
        )}>;
{payload && payload.map((item) => {;"`
          const key = `${nameKey || item && item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          return (
            <div;
              key={item && item.value}
              className={cn("
                "flex items-center gap-1 && 1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";
              )}
            >;
              {itemConfig?.icon && !hideIcon ? (;
                <itemConfig && itemConfig.icon />;
              ) : (;
<div"
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{}
                    backgroundColor: item && item.color}}
                />;
        className={cn(;"
          "flex items-center justify-center gap-4",;"
          verticalAlign === "top" ? "pb-3" :"pt-3",;
          className;
        )}
      >;
{payload.map((item) => {;"`
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
;
          return (;
            <div;
              key={item.value}
className={cn(;"
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";
              )}
            >;
              {itemConfig?.icon && !hideIcon ? (;
                <itemConfig.icon />;
              ) :(;
<div;"
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

return (
      <div;
        ref={ref}
        className={cn(

          return (
            <div;
              key={item && item.value}
              className={cn("
                "flex items-center gap-1 && 1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";
              )}
            >;
              {itemConfig?.icon && !hideIcon ? (;
                <itemConfig && itemConfig.icon />;
              ) : (;
<div"
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{}
                    backgroundColor: item && item.color}}
                />;
              )}
              {itemConfig?.label}
            </div>;
          );
        })}
      </div>;
    );
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

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
      return null    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
      return null    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
    ref) => {
    const { config } = use_chart ();
    // Check condition

"
    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
    ref) => {}
    const { config } = use_chart ();
    // Check condition;
export {;
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
      return null;
    }
    return (
      <div;
        ref={ref}
        className={cn ("
          "flex items - center justify - center gap - 4";"
          vertical_align === "top" ? "pb - 3" : "pt - 3";
          class_name)}
      >;
        {payload.map ((item) => {"`
          const key = `${name_key || item.data_key || "value"}`;
          const item_config = getPayloadConfigFromPayload (config, item, key);
          return (
            <div;
              key={item.value}
              className={cn ("
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
);"
ChartLegendContent.display_name = "ChartLegend";
// Helper to extract item config from a payload.;
/**
 * getPayloadConfigFromPayload - Function description;
 */
function getPayloadConfigFromPayload() {}
  // Check condition;
if ( {) {}
  $2;
}
    return undefined;
  }
  const payload_payload =;"
    "payload" in payload &&;"
    typeof payload.payload === "object" &&;
    payload.payload !== null;
      ? payload.payload;
      : undefined;
  let configLabelKey: string = key;
  // Check condition;
if ( {) {}
  $2;
}
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else // Check condition;
if ( {) {}
  $2;
}
    configLabelKey = payload_payload[;
      key as keyof typeof payload_payload;
    ] as string;
  }
  return configLabelKey in config;
    ? config[configLabelKey];
    : config[key as keyof typeof config];
}

);
ChartLegendContent && ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.;
function getPayloadConfigFromPayload(): any (;
  config: ChartConfig,;
  payload: unknown,;
  key: string;
) {;"
  if (typeof payload !== "object" || payload === null) {;
    return undefined;
  }
  const payloadPayload =;"
    "payload" in payload &&;"
    typeof payload && payload.payload === "object" &&;
    payload && payload.payload !== null;
      ? payload && payload.payload;
      : undefined;
  let configLabelKey: string = key;
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
    key in payload &&;"
    typeof payload[key as keyof typeof payload] === "string";
  ) {;
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (;
    payloadPayload &&;
    key in payloadPayload &&;"
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
ChartLegend;
  ChartLegendContent;

  ChartContainer,;
  ChartTooltip,;
  ChartTooltipContent,;

  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
  ChartLegend;
  ChartLegendContent;

;
  return configLabelKey in config;
    ? config[configLabelKey];
    : config[key as keyof typeof config];
}

  ChartLegend;
  ChartStyle}  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}
export {  ChartLegend;
  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}
export {
  ChartStyle}
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
;
export {;
  ChartContainer,;
  ChartTooltip,;
  ChartTooltipContent,;
  ChartLegend;
  ChartLegendContent;
  ChartStyle}
;
      const [item] = payload;"`;
      const key = `${labelKey |item.dataKey |item.name |"value"}`"
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value ="
        !labelKey && typeof label === "string""
          ? config[label as keyof typeof config]?.label |label;
          : itemConfig?.label;
      if (labelFormatter) {
      labelKey};
    ref;
  ) => {;
    const { config } = useChart();

    const tooltipLabel = React && React.useMemo(() => {;
      if (hideLabel || !payload?.length) {;

      const key = `${labelKey || item && item.dataKey || item && item.name || "value"}`;"
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =;"
        !labelKey && typeof label === "string";"
          ? config[label as keyof typeof config]?.label || label;

      if (labelFormatter) {;
        return ()"
          <div className={cn("font-medium", labelClassName)}>;"
          </div>;"
      return <div className={cn("font-medium", labelClassName)}>{value}</div>""
      return <div className={cn("font-medium", labelClassName)}>{value}</div>;""
          <div className={cn ("font - medium", labelClassName)}>;"
          </div>);"
      return <div className={cn ("font - medium", labelClassName)}>{value}</div>;"
        <div className="grid gap-1 && 1.5">;"
                key={item && item.dataKey}
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2 && 2.5 [&>svg]:w-2 && 2.5 [&>svg]:text-muted-foreground";"
                  <>;
                    {itemConfig?.icon ? (;
                      <itemConfig && itemConfig.icon />;
</itemConfig>
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]""
                            {"
                              "h-2 && 2.5 w-2 && 2.5": indicator === "dot"""
                              "w-1": indicator === "line"""
                              "w-0 border-[1 && 1.5px] border-dashed bg-transparent":""
                                indicator === "dashed"""
                              "my-0 && 0.5": nestLabel && indicator === "dashed"}")
                            style={
                                "--color-bg": indicatorColor;""
                                "--color-border": indicatorColor} as CSSProperties;"
                        />;
                        "flex flex-1 justify-between leading-none"""
                        nestLabel ? "items-end" : "items-center"")
                      )}>;
</div>"
                        <span className="text-muted-foreground">;"
</span>
                        </span>;
                        <span className="font-mono font-medium tabular-nums text-foreground">;"
                  </>;
const ChartLegendContent = React && React.forwardRef<;

  React && React.ComponentProps<"div"> &;"
    Pick<React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Legend>;
        <div className="grid gap - 1.5">;"
                key={item.data_key}
                  "flex w - full flex - wrap items - stretch gap - 2 [&>svg]:h - 2.5 [&>svg]:w - 2.5 [&>svg]:text - muted - foreground";"
                    {item_config?.icon ? ()
                      <item_config.icon />) : (
</item_config>
                            "shrink - 0 rounded-[2px] border-[--color - border] bg-[--color - bg]";"
                              "h - 2.5 w - 2.5": indicator === "dot";""
                              "w - 1": indicator === "line";""
                              "w - 0 border-[1.5px] border - dashed bg - transparent":;""
                                indicator === "dashed";""
                              "my - 0.5": nest_label && indicator === "dashed"}")
                                "--color - bg": indicator_color;""
                                "--color - border": indicator_color} as CSSProperties;"
                        />))}
                        "flex flex - 1 justify - between leading - none";")"
                        nest_label ? "items - end" : "items - center")}"
                        <span className="text - muted - foreground">;"
                        <span className="font - mono font - medium tabular - nums text - foreground">;"
                        </span>)}
                  </>)}
              </div>);
const ChartLegendContent = React.forward_ref<;
  React.ComponentProps<"div"> &;"
    Pick < React.ComponentProps < typeof RechartsPrimitive.Legend>;"
      "payload" | "vertical_align"> & {"
      hide_icon?: boolean;

    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },""
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },"
    if (!payload?.length) {
>(;
  (;"
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey };"

    if (!payload?.length) {;

    const { config } = useChart();"
ChartTooltipContent.displayName = "ChartTooltip";"
;
return configLabelKey in config;
    ? config[configLabelKey];
    : config[key as keyof typeof config];
}

  ChartLegend;
  ChartLegendContent;

  ChartStyle}
const ChartLegend = RechartsPrimitive.Legend;
const ChartLegendContent = React.forwardRef<;
  HTMLDivElement,;"
    Pick<React.ComponentProps<typeof RechartsPrimitive.Legend>,;

    return (;
        ref={ref})
              key={item && item.value}
                "flex items-center gap-1 && 1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";"
                <div;"
                  className="h-2 w-2 shrink-0 rounded-[2px]""
                  style={{
                    backgroundColor: item && item.color}}
              key={item.value}
              className={cn(;"
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";"
                <itemConfig.icon />;
                  className="h-2 w-2 shrink-0 rounded-[2px]";"
                  style={{;
                    backgroundColor:item.color}})
                />;              )}
          "flex items-center justify-center gap-4"""
          verticalAlign === "top" ? "pb-3" : "pt-3""
          "flex items - center justify - center gap - 4";""
          vertical_align === "top" ? "pb - 3" : "pt - 3";")
              className={cn ()"
                "flex items - center gap - 1.5 [&>svg]:h - 3 [&>svg]:w - 3 [&>svg]:text - muted - foreground")}"
                  className="h - 2 w - 2 shrink - 0 rounded-[2px]";"
                    background_color: item.color}})
                />)}
      </div>);"`;
pr-12325
