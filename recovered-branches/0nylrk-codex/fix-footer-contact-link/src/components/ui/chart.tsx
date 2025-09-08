<<<<<<< HEAD



// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: ", dark: .dark" } as const
=======
  string;import { useReactId } from "@/hooks/useReactId"
  string;import { useReactId } from "@/hooks/useReactId


import { cn } from @/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: "", dark: ".dark" } as const
>>>>>>> origin/cursor/delete-old-data-records-6bba
export type ChartConfig = Record<

// Format: { THEME_NAME: CSS_SELECTOR }

  ChartStyle}

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



// Format: { THEME_NAME: CSS_SELECTOR}


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


  HTMLDivElement;

  React && React.ComponentProps<"div"> & {;
    config: ChartConfig;
    children: React && React.ComponentProps<;
      typeof RechartsPrimitive && RechartsPrimitive.ResponsiveContainer;
=======
import React from 'react';

import * as React from "react";
import type { CSSProperties } from "react";
import * as RechartsPrimitive from "recharts";
import {useReactId} from "@/hooks/useReactId";


import {cn} from "@/lib/utils;

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: ", dark: ".dark } as const;
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
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string, theme?: never }
    | { color?: never, theme: Record < keyof typeof THEMES, string> }
import * as React from './react';
import type { CSSProperties } from './react';
import * as RechartsPrimitive from './recharts';
import { useReactId } from '@/hooks / useReactId';

import { cn } from '@/lib / utils';
// Format: { THEME_NAME: CSS_SELECTOR }"
const THEMES = { light: "", dark: ".dark" } as const;
export type ChartConfig = Record<;
  string;

  );

>;




    <ChartContext && ChartContext.Provider value={{ config }}>;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  return (
    <style;
      dangerouslySetInnerHTML={{

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            ([theme, prefix]) => `;
${prefix} [data-chart=${id}] {;
${colorConfig;
  .map(([key, itemConfig]) => {;
    const color =;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      itemConfig && itemConfig.theme?.[theme as keyof typeof itemConfig && itemConfig.theme] ||;
      itemConfig && itemConfig.color;
    return color ? `  --color-${key}: ${color},` : null;
  });

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  .join("\n")}
}
`;
          );
          .join("\n")}}
    />;
  );
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

const ChartTooltip = RechartsPrimitive && RechartsPrimitive.Tooltip;

const ChartTooltipContent = React && React.forwardRef<;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  HTMLDivElement;
  React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Tooltip> &;
    React && React.ComponentProps<"div"> & {;
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        __html: Object.entries (THEMES);
          .map (

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

>(
  (
    {


<<<<<<< HEAD
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
  .join("\n)}
}
`
          )
          .join(\n")}}
    />
  )
}
const ChartTooltip = RechartsPrimitive.Tooltip
const ChartTooltipContent = React.forwardRef<
  HTMLDivElement;
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: line" | "dot | dashed"
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

      payload,

      className,"
      indicator = "dot",

      hideLabel = false,
      hideIndicator = false,

=======
      active,

      payload,
      className,
      indicator = "dot,
      hideLabel = false,
      hideIndicator = false,
>>>>>>> origin/cursor/delete-old-data-records-6bba
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey},
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ref
  ) => {
    const { config } = useChart()
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel |!payload?.length) {
        return null
      }
<<<<<<< HEAD


=======
      const [item] = payload
      const key = `${labelKey |item.dataKey |item.name |"value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label |label
          : itemConfig?.label
      if (labelFormatter) {        return (

>>>>>>> origin/cursor/delete-old-data-records-6bba
      labelKey};
    ref;
  ) => {;
    const { config } = useChart();

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const tooltipLabel = React && React.useMemo(() => {;
      if (hideLabel || !payload?.length) {;
        return null;
      }

<<<<<<< HEAD


        !labelKey && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : itemConfig?.label;


      if (labelFormatter) {;


        return (

          <div className={cn("font-medium", labelClassName)}>;

=======
        !labelKey && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : itemConfig?.label;

      if (labelFormatter) {;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {labelFormatter(value, payload)}
          </div>;
        );
      }


<<<<<<< HEAD

=======
      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, []
      if (!value) {;
        return null;
      }
"

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
>>>>>>> origin/cursor/delete-old-data-records-6bba

      name_key;
      label_key}

          <div className={cn ("font - medium", labelClassName)}>;
            {label_formatter (value, payload)}
          </div>);
      }

<<<<<<< HEAD
      // Check condition
if ( {) {
  $2
}
        return null;
      }
      return <div className={cn ("font - medium", labelClassName)}>{value}</div>;
    }, [;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      label;
      label_formatter;
      payload;
      hide_label;
      labelClassName;
      config;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      labelKey]);

    if (!active || !payload?.length) {;
      return null;
    }


<<<<<<< HEAD
=======
    const nest_label = payload.length === 1 && indicator !== "dot";
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <div;
        ref={ref}


<<<<<<< HEAD

        <div className="grid gap-1 && 1.5">;
          {payload && payload.map((item, index) => {;

            const key = `${nameKey || item && item.name || item && item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item && item.payload.fill || item && item.color;



=======
            const key = `${nameKey || item && item.name || item && item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item && item.payload.fill || item && item.color;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            return (
              <div
                key={item && item.dataKey}
<<<<<<< HEAD

                className={cn("
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2 && 2.5 [&>svg]:w-2 && 2.5 [&>svg]:text-muted-foreground";"
                  indicator === "dot" && "items-center";

=======
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2 && 2.5 [&>svg]:w-2 && 2.5 [&>svg]:text-muted-foreground";
                  indicator === "dot" && "items-center";
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

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



                                "--color-border": indicatorColor} as CSSProperties


=======
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
                                "--color-bg": indicatorColor
                                "--color-border": indicatorColor} as CSSProperties
>>>>>>> origin/cursor/delete-old-data-records-6bba
                            }
                        />;
                      );
                    )}
<<<<<<< HEAD

                    <div;
                      className={cn("
                        "flex flex-1 justify-between leading-none""
=======
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        nestLabel ? "items-end" : "items-center"
                      )}>;
                      <div className="grid gap-1 && 1.5">;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        {nestLabel ? tooltipLabel : null}

                        <span className="text-muted-foreground">;
                          {itemConfig?.label || item && item.name}
                        </span>;
                      </div>;
                      {item && item.value && (;
                        <span className="font-mono font-medium tabular-nums text-foreground">;
                          {item && item.value.toLocaleString()}
                        </span>;
<<<<<<< HEAD






    return (

    }
;
    return (;
      <div;
        ref={ref}

        className={cn(

    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }


=======
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

    const nestLabel = $2;
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey |item.name |item.dataKey |"value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = $2;
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
                          className = $2;
                            {
                              "h-2.5 w-2.5": indicator = $2;
                              "w-1": indicator = $2;
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator = $2;
                              "my-0.5": nestLabel && indicator = $2;
                                "--color-border": indicatorColor} as CSSProperties
                            }
                        />
                      )
                    )}
                    <div
                      className = $2;


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



  HTMLDivElement;

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

            const key = `${name_key || item.name || item.data_key || "value"}`;
            const item_config = getPayloadConfigFromPayload (config, item, key);
            const indicator_color = color || item.payload.fill || item.color;
            return (
              <div;
                key={item.data_key}

                  indicator === "dot" && "items - center")}
              >;
                {formatter && item?.value !== undefined && item.name ? (
                  formatter (item.value, item.name, item, index, item.payload)) : (
                  <>;
                    {item_config?.icon ? (
                      <item_config.icon />) : (
                      !hide_indicator && (
                        <div;

                                "--color - border": indicator_color} as CSSProperties;
                            }
                        />))}
                    <div;

                        <span className="text - muted - foreground">;
                          {item_config?.label || item.name}
                        </span>;
                      </div>;

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
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },

    ref
  ) => {
    const { config } = useChart()
    if (!payload?.length) {
      return null    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
      return null    { class_name, hide_icon = false, payload, vertical_align = bottom", name_key }

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

      "payload" | "verticalAlign"> & {;
      hideIcon?:boolean;
      nameKey?:string;
    }
>(;

    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },;
    ref;
  ) => {;
    const { config } = useChart();
;
    if (!payload?.length) {;
      return null;
    }


    return (

    }
;
    return (;
      <div;
        ref={ref}

        )}>;

                "flex items-center gap-1 && 1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";
              )}
            >;
              {itemConfig?.icon && !hideIcon ? (;
                <itemConfig && itemConfig.icon />;
              ) : (;

          verticalAlign === "top" ? "pb-3" :"pt-3",;
          className;
        )}
      >;

          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
;
          return (;
            <div;
              key={item.value}

                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";
              )}
            >;
              {itemConfig?.icon && !hideIcon ? (;
                <itemConfig.icon />;
              ) :(;

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

                "flex items-center gap-1 && 1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground";
              )}
            >;
              {itemConfig?.icon && !hideIcon ? (;
                <itemConfig && itemConfig.icon />;
              ) : (;

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


    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }

>>>>>>> origin/cursor/delete-old-data-records-6bba
    ref) => {
    const { config } = use_chart ();
    // Check condition

<<<<<<< HEAD

"
    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
    ref) => {}
    const { config } = use_chart ();
    // Check condition;
export {;

=======
export {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
      return null;
    }
    return (
      <div;
        ref={ref}
<<<<<<< HEAD

        className={cn ("
          "flex items - center justify - center gap - 4";"
=======
        className={cn (
          "flex items - center justify - center gap - 4";
>>>>>>> origin/cursor/delete-old-data-records-6bba
          vertical_align === "top" ? "pb - 3" : "pt - 3";
          class_name)}
      >;
        {payload.map ((item) => {
          const key = `${name_key || item.data_key || "value"}`;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          const item_config = getPayloadConfigFromPayload (config, item, key);
          return (
            <div;
              key={item.value}
<<<<<<< HEAD

              className={cn ("
=======
              className={cn (
>>>>>>> origin/cursor/delete-old-data-records-6bba
                "flex items - center gap - 1.5 [&>svg]:h - 3 [&>svg]:w - 3 [&>svg]:text - muted - foreground")}
            >;
              {item_config?.icon && !hide_icon ? (
                <item_config.icon />) : (
<<<<<<< HEAD


                    background_color: item.color}}
=======
                <div;
                  className="h - 2 w - 2 shrink-0 rounded-[2px]";
                  style={
                    background_color: item.color}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                />)}
              {item_config?.label}
            </div>);
        })}
      </div>);
<<<<<<< HEAD

  });"
ChartLegendContent.display_name = "ChartLegend";

=======
  }
);
ChartLegendContent.display_name = "ChartLegend";
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  const payload_payload =;"
    "payload" in payload &&;"
    typeof payload.payload === "object" &&;

=======
  const payload_payload =;
    "payload" in payload &&;
    typeof payload.payload === "object" &&;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

);
ChartLegendContent && ChartLegendContent.displayName = "ChartLegend;

<<<<<<< HEAD
=======
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

  const payloadPayload =;"
    "payload" in payload &&;"
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


;

  return configLabelKey in config;
    ? config[configLabelKey];
    : config[key as keyof typeof config];
}


  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
  ChartLegend;
  ChartLegendContent;

  ChartStyle}  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}
export {  ChartLegend;
  ChartLegendContent;

  ChartStyle}

      return null
    }
    return (
      <div
        ref = $2;
          verticalAlign = $2;
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey |item.dataKey |"value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          return (
            <div
              key = $2;
  payload: unknown,
  key: string) {
  if (typeof payload !== "object" || payload = $2;
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle}

  ChartLegend;
  ChartLegendContent;
  ChartStyle}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

