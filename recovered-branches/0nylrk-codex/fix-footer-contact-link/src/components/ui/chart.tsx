import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"
import { useReactId } from "@/hooks/useReactId"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
<<<<<<< HEAD
const THEMES = { light: ""dark: ".dark" } as const
=======
const THEMES = { light: "", dark: ".dark" } as const
>>>>>>> origin/auto/autonomy-17186719616

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
<<<<<<< HEAD
    | { color?: never; theme: Record<keyof typeof THEMESstring> }
=======
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
>>>>>>> origin/auto/autonomy-17186719616
  )
>

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps>({
<<<<<<< HEAD
  config: {}})
=======
  config: {},
})
>>>>>>> origin/auto/autonomy-17186719616

function useChart(): ChartContextProps {
  return React.useContext(ChartContext)
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
<<<<<<< HEAD
>(({ idclassNamechildrenconfig...props }ref) => {
  const uniqueId = useReactId()
  const chartId = `chart-${id || uniqueId.replace(/:/g"")}`
=======
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = useReactId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
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

<<<<<<< HEAD
const ChartStyle = ({ idconfig }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_config]) => config.theme || config.color
=======
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
>>>>>>> origin/auto/autonomy-17186719616
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
<<<<<<< HEAD
            ([themeprefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([keyitemConfig]) => {
=======
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
>>>>>>> origin/auto/autonomy-17186719616
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
<<<<<<< HEAD
          .join("\n")}}
=======
          .join("\n"),
      }}
>>>>>>> origin/auto/autonomy-17186719616
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
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
<<<<<<< HEAD
      labelKey},
=======
      labelKey,
    },
>>>>>>> origin/auto/autonomy-17186719616
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
<<<<<<< HEAD
      const itemConfig = getPayloadConfigFromPayload(configitemkey)
=======
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
>>>>>>> origin/auto/autonomy-17186719616
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
<<<<<<< HEAD
          <div className={cn("font-medium"labelClassName)}>
            {labelFormatter(valuepayload)}
=======
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
>>>>>>> origin/auto/autonomy-17186719616
          </div>
        )
      }

      if (!value) {
        return null
      }

<<<<<<< HEAD
      return <div className={cn("font-medium"labelClassName)}>{value}</div>
    }[
=======
      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
>>>>>>> origin/auto/autonomy-17186719616
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
<<<<<<< HEAD
      labelKey])
=======
      labelKey,
    ])
>>>>>>> origin/auto/autonomy-17186719616

    if (!active || !payload?.length) {
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
<<<<<<< HEAD
          {payload.map((itemindex) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(configitemkey)
=======
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
>>>>>>> origin/auto/autonomy-17186719616
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
<<<<<<< HEAD
                  formatter(item.valueitem.nameitemindexitem.payload)
=======
                  formatter(item.value, item.name, item, index, item.payload)
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                              "my-0.5": nestLabel && indicator === "dashed"}
=======
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
>>>>>>> origin/auto/autonomy-17186719616
                          )}
                            style={
                              {
                                "--color-bg": indicatorColor,
<<<<<<< HEAD
                                "--color-border": indicatorColor} as CSSProperties
=======
                                "--color-border": indicatorColor,
                              } as CSSProperties
>>>>>>> origin/auto/autonomy-17186719616
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
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
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
<<<<<<< HEAD
    { classNamehideIcon = falsepayloadverticalAlign = "bottom"nameKey },
=======
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
>>>>>>> origin/auto/autonomy-17186719616
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

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
          const key = `${nameKey || item.dataKey || "value"}`
<<<<<<< HEAD
          const itemConfig = getPayloadConfigFromPayload(configitemkey)
=======
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
                    backgroundColor: item.color}}
=======
                    backgroundColor: item.color,
                  }}
>>>>>>> origin/auto/autonomy-17186719616
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
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
<<<<<<< HEAD
  ChartStyle}
=======
  ChartStyle,
}
>>>>>>> origin/auto/autonomy-17186719616
