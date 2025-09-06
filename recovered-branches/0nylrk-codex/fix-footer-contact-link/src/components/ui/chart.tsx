<<<<<<< HEAD
import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"
import {useReactId} from "@/hooks/useReactId"
import {cn} from "@/lib/utils"
// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: "", dark: ".dark" } as const
export type ChartConfig = Record<
=======
import React from 'react';
import * as React from "react";
import type { CSSProperties } from "react";
import * as RechartsPrimitive from "recharts";
import {useReactId} from "@/hooks/useReactId";

import {cn} from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = Record<;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  string;
  {;
    label?: React && React.ReactNode;
    icon?: React && React.ComponentType;
  } & (;
    | { color?: string, theme?: never }
    | { color?: never, theme: Record<keyof typeof THEMES, string> }
<<<<<<< HEAD
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
  HTMLDivElement;
  React && React.ComponentProps<"div"> & {;
    config: ChartConfig;
    children: React && React.ComponentProps<;
      typeof RechartsPrimitive && RechartsPrimitive.ResponsiveContainer;
    >["children"];
  }
<<<<<<< HEAD
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = useReactId()
  const chartId = `chart-${id |uniqueId.replace(/:/g, "")}`
=======
>(({ id, className, children, config, ...props }, ref) => {;
  const uniqueId = useReactId();
  const chartId = `chart-${id || uniqueId && uniqueId.replace(/:/g, "")}`;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object && Object.entries(THEMES)
          .map(
<<<<<<< HEAD
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] |
      itemConfig.color
    return color ? `  --color-${key}: ${color},` : null
  })
=======
            ([theme, prefix]) => `;
${prefix} [data-chart=${id}] {;
${colorConfig;
  .map(([key, itemConfig]) => {;
    const color =;
      itemConfig && itemConfig.theme?.[theme as keyof typeof itemConfig && itemConfig.theme] ||;
      itemConfig && itemConfig.color;
    return color ? `  --color-${key}: ${color},` : null;
  });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  .join("\n")}
}
`;
          );
          .join("\n")}}
    />;
  );
}
<<<<<<< HEAD
const ChartTooltip = RechartsPrimitive.Tooltip
const ChartTooltipContent = React.forwardRef<
=======

const ChartTooltip = RechartsPrimitive && RechartsPrimitive.Tooltip;

const ChartTooltipContent = React && React.forwardRef<;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  HTMLDivElement;
  React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Tooltip> &;
    React && React.ComponentProps<"div"> & {;
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(;
  (;
    {;
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
<<<<<<< HEAD
      labelKey}
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        return (
          <div className={cn("font-medium", labelClassName)}>;
            {labelFormatter(value, payload)}
          </div>;
        );
      }
<<<<<<< HEAD
      if (!value) {
        return null
      }
      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
=======

      if (!value) {;
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      label;
      labelFormatter;
      payload;
      hideLabel;
      labelClassName;
      config;
<<<<<<< HEAD
      labelKey])
    if (!active |!payload?.length) {
      return null
    }
    const nestLabel = payload.length === 1 && indicator !== "dot"
=======
      labelKey]);

    if (!active || !payload?.length) {;
      return null;
    }

    const nestLabel = payload && payload.length === 1 && indicator !== "dot";

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1 && 1.5 rounded-lg border border-border/50 bg-background px-2 && 2.5 py-1 && 1.5 text-xs shadow-xl"
          className
        )}>;
        {!nestLabel ? tooltipLabel : null}
<<<<<<< HEAD
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey |item.name |item.dataKey |"value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color |item.payload.fill |item.color
=======
        <div className="grid gap-1 && 1.5">;
          {payload && payload.map((item, index) => {;
            const key = `${nameKey || item && item.name || item && item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item && item.payload.fill || item && item.color;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
                                "--color-bg": indicatorColor
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
                        <span className="text-muted-foreground">
                          {itemConfig?.label |item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
=======
                        <span className="text-muted-foreground">;
                          {itemConfig?.label || item && item.name}
                        </span>;
                      </div>;
                      {item && item.value && (;
                        <span className="font-mono font-medium tabular-nums text-foreground">;
                          {item && item.value.toLocaleString()}
                        </span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
)
ChartTooltipContent.displayName = "ChartTooltip"
const ChartLegend = RechartsPrimitive.Legend
const ChartLegendContent = React.forwardRef<
=======
);
ChartTooltipContent && ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive && RechartsPrimitive.Legend;

const ChartLegendContent = React && React.forwardRef<;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  HTMLDivElement;
  React && React.ComponentProps<"div"> &;
    Pick<React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Legend>;
      "payload" | "verticalAlign"> & {;
      hideIcon?: boolean;
      nameKey?: string;
    }
<<<<<<< HEAD
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }
    ref
  ) => {
    const { config } = useChart()
    if (!payload?.length) {
      return null
=======
>(;
  (;
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey };
    ref;
  ) => {;
    const { config } = useChart();

    if (!payload?.length) {;
      return null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4"
          verticalAlign === "top" ? "pb-3" : "pt-3"
          className
<<<<<<< HEAD
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey |item.dataKey |"value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
=======
        )}>;
        {payload && payload.map((item) => {;
          const key = `${nameKey || item && item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  }
<<<<<<< HEAD
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
}
export {
=======
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

  return configLabelKey in config;
    ? config[configLabelKey];
    : config[key as keyof typeof config];
}

export {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
  ChartLegend;
  ChartLegendContent;
  ChartStyle}

