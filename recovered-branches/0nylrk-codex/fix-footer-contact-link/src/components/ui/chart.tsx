


// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: ", dark: .dark" } as const
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



>(
  (
    {


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
    const tooltipLabel = React.useMemo(() => {}
      if (hideLabel |!payload?.length) {}
        return null;
      }


      labelKey};
    ref;
  ) => {;
    const { config } = useChart();



    const tooltipLabel = React && React.useMemo(() => {;
      if (hideLabel || !payload?.length) {;
        return null;
      }



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




      name_key;
      label_key}

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


      labelKey]);

    if (!active || !payload?.length) {;
      return null;
    }


    return (
      <div;
        ref={ref}



        <div className="grid gap-1 && 1.5">;
          {payload && payload.map((item, index) => {;

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



                                "--color-border": indicatorColor} as CSSProperties


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

                        <span className="text-muted-foreground>;
                          {itemConfig?.label || item && item.name}
                        </span>;
                      </div>;
                      {item && item.value && (;
                        <span className=font-mono font-medium tabular-nums text-foreground">;
                          {item && item.value.toLocaleString()}
                        </span>;






    return (

    }
;
    return (;
      <div;
        ref={ref}

        className={cn(

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


                    background_color: item.color}}
                />)}
              {item_config?.label}
            </div>);
        })}
      </div>);

  });"
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
export {

);
ChartLegendContent && ChartLegendContent.displayName = "ChartLegend;


