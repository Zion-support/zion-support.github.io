import * as React from "react"
import type {_CSSProperties} from "react"
import * as RechartsPrimitive from "recharts"


// Format: {_THEME_NAME: CSS_SELECTOR}
const _THEMES = {_light: "", _dark: ".dark"} as const

export type ChartConfig = Record<
  string,
  {_label?: React.ReactNode
    icon?: React.ComponentType} & (
    | {_color?: string; theme?: never}
    | {_color?: never; theme: Record<keyof typeof THEMES, _string>}
  )
>

type ChartContextProps = {_config: ChartConfig}

const _ChartContext = React.createContext<ChartContextProps>({_config: {}})

function useChart(): ChartContextProps {_return React.useContext(ChartContext)}

const _ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {_config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]}
>(_({_id, _className, _children, _config, _...props}, _ref) => {_const _uniqueId = useReactId()
  const _chartId = `chart-${id || uniqueId.replace(/:/g, _"")}`

  return (
    <ChartContext.Provider value={_{ config}}>
      <div
        data-chart={_chartId}
        ref={_ref}
        className={_cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", _className
        )}
        {_...props}
      >
        <ChartStyle id={_chartId} config={_config} />
        <RechartsPrimitive.ResponsiveContainer>
          {_children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const _ChartStyle = (_{_id, _config}: {_id: string; config: ChartConfig}) => {_const _colorConfig = Object.entries(config).filter(_([_, _config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null}

  return (
    <style
      dangerouslySetInnerHTML={_{
        __html: Object.entries(THEMES)
          .map(_([theme, _prefix]) => `
${prefix} [data-chart=${_id}] {_${colorConfig
  .map(_([key, _itemConfig]) => {
    const _color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${_color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n")}}
    />
  )
}

const _ChartTooltip = RechartsPrimitive.Tooltip

const _ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {_hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string}
>(_(
    {_active, _payload, _className, _indicator = "dot", _hideLabel = false, _hideIndicator = false, _label, _labelFormatter, _labelClassName, _formatter, _color, _nameKey, _labelKey}, _ref) => {_const { config} = useChart()

    const _tooltipLabel = React.useMemo__(() => {_if (hideLabel || !payload?.length) {
        return null}

      const [item] = payload
      const _key = `${_labelKey || item.dataKey || item.name || "value"}`
      const _itemConfig = getPayloadConfigFromPayload(config, item, key)
      const _value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {_return (
          <div className={cn("font-medium", _labelClassName)}>
            {_labelFormatter(value, _payload)}
          </div>
        )
      }

      if (!value) {_return null}

      return <div className={_cn("font-medium", _labelClassName)}>{_value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey])

    if (!active || !payload?.length) {_return null}

    const _nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={_ref}
        className={_cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", _className
        )}
      >
        {_!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {_payload.map(_(item, _index) => {
            const _key = `${nameKey || item.name || item.dataKey || "value"}`
            const _itemConfig = getPayloadConfigFromPayload(config, item, key)
            const _indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={_item.dataKey}
                className={_cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", _indicator === "dot" && "items-center"
                )}
              >
                {_formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, _item.name, _item, _index, _item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", _{
                              "h-2.5 w-2.5": indicator === "dot", _"w-1": indicator === "line", _"w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed", _"my-0.5": nestLabel && indicator === "dashed"}
                          )}
                            style={_{
                                "--color-bg": indicatorColor, _"--color-border": indicatorColor} as CSSProperties
                            }
                        />
                      )
                    )}
                    <div
                      className={_cn(
                        "flex flex-1 justify-between leading-none", _nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {_nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {_itemConfig?.label || item.name}
                        </span>
                      </div>
                      {_item.value && (
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

const _ChartLegend = RechartsPrimitive.Legend

const _ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<React.ComponentProps<typeof RechartsPrimitive.Legend>,
      "payload" | "verticalAlign"> & {_hideIcon?: boolean
      nameKey?: string}
>(_(
    {_className, _hideIcon = false, _payload, _verticalAlign = "bottom", _nameKey}, _ref) => {_const { config} = useChart()

    if (!payload?.length) {_return null}

    return (
      <div
        ref={_ref}
        className={_cn(
          "flex items-center justify-center gap-4", _verticalAlign === "top" ? "pb-3" : "pt-3", _className
        )}
      >
        {_payload.map(_(item) => {
          const _key = `${nameKey || item.dataKey || "value"}`
          const _itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={_item.value}
              className={_cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {_itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color}}
                />
              )}
              {_itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(_config: ChartConfig, _payload: unknown, _key: string) {_if (typeof payload !== "object" || payload === null) {
    return undefined}

  const _payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {_configLabelKey = payload[key as keyof typeof payload] as string} else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {_configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string}

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {_ChartContainer, _ChartTooltip, _ChartTooltipContent, _ChartLegend, _ChartLegendContent, _ChartStyle}
