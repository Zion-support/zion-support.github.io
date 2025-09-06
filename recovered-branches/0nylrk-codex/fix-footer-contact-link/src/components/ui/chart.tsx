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
>(
  (
    {
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
>(
  (
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
export {
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
  ChartLegend;
  ChartLegendContent;
  ChartStyle}