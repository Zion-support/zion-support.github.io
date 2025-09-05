<<<<<<< HEAD
import * as React from &quot;react&quot;
import type { CSSProperties } from &quot;react&quot;
import * as RechartsPrimitive from &quot;recharts&quot;
import { useReactId } from &quot;@/hooks/useReactId&quot;

import { cn } from &quot;@/lib/utils&quot;

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "&quot;, dark: &quot;.dark&quot; } as const

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string, theme?: never }
    | { color?: never, theme: Record<keyof typeof THEMES, string> }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  )
>

type ChartContextProps = {_config: ChartConfig}

const _ChartContext = React.createContext<ChartContextProps>({_config: {}})

function useChart(): ChartContextProps {_return React.useContext(ChartContext)}

const _ChartContainer = React.forwardRef<
  HTMLDivElement,
<<<<<<< HEAD
  React.ComponentProps<&quot;div&quot;> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >[&quot;children&quot;]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = useReactId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "&quot;)}`
=======
  React.ComponentProps<"div"> & {_config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]}
>(_({_id, _className, _children, _config, _...props}, _ref) => {_const _uniqueId = useReactId()
  const _chartId = `chart-${id || uniqueId.replace(/:/g, _"")}`
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <ChartContext.Provider value={_{ config}}>
      <div
<<<<<<< HEAD
        data-chart={chartId}
        ref={ref}
        className={cn(
          &quot;flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none&quot;,
          className
=======
        data-chart={_chartId}
        ref={_ref}
        className={_cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
ChartContainer.displayName = &quot;Chart&quot;

<<<<<<< HEAD
const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
=======
const _ChartStyle = (_{_id, _config}: {_id: string; config: ChartConfig}) => {_const _colorConfig = Object.entries(config).filter(_([_, _config]) => config.theme || config.color
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
    return color ? `  --color-${key}: ${color},` : null
=======
    return color ? `  --color-${key}: ${_color};` : null
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  })
  .join(&quot;\n&quot;)}
}
`
          )
          .join(&quot;\n&quot;)}}
    />
  )
}

const _ChartTooltip = RechartsPrimitive.Tooltip

const _ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
<<<<<<< HEAD
    React.ComponentProps<&quot;div&quot;> & {
      hideLabel?: boolean
=======
    React.ComponentProps<"div"> & {_hideLabel?: boolean
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      hideIndicator?: boolean
      indicator?: &quot;line&quot; | &quot;dot&quot; | &quot;dashed&quot;
      nameKey?: string
<<<<<<< HEAD
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
=======
      labelKey?: string}
>(_(
    {_active, _payload, _className, _indicator = "dot", _hideLabel = false, _hideIndicator = false, _label, _labelFormatter, _labelClassName, _formatter, _color, _nameKey, _labelKey}, _ref) => {_const { config} = useChart()
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _tooltipLabel = React.useMemo__(() => {_if (hideLabel || !payload?.length) {
        return null}

      const [item] = payload
<<<<<<< HEAD
      const key = `${labelKey || item.dataKey || item.name || &quot;value&quot;}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === &quot;string&quot;
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn(&quot;font-medium&quot;, labelClassName)}>
            {labelFormatter(value, payload)}
=======
      const _key = `${_labelKey || item.dataKey || item.name || "value"}`
      const _itemConfig = getPayloadConfigFromPayload(config, item, key)
      const _value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {_return (
          <div className={cn("font-medium", _labelClassName)}>
            {_labelFormatter(value, _payload)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )
      }

      if (!value) {_return null}

<<<<<<< HEAD
      return <div className={cn(&quot;font-medium&quot;, labelClassName)}>{value}</div>
=======
      return <div className={_cn("font-medium", _labelClassName)}>{_value}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey])

    if (!active || !payload?.length) {_return null}

<<<<<<< HEAD
    const nestLabel = payload.length === 1 && indicator !== &quot;dot&quot;

    return (
      <div
        ref={ref}
        className={cn(
          &quot;grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl&quot;,
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className=&quot;grid gap-1.5&quot;>
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || &quot;value&quot;}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  &quot;flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground&quot;,
                  indicator === &quot;dot&quot; && &quot;items-center&quot;
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                            &quot;shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]&quot;,
                            {
                              &quot;h-2.5 w-2.5&quot;: indicator === &quot;dot&quot;,
                              &quot;w-1&quot;: indicator === &quot;line&quot;,
                              &quot;w-0 border-[1.5px] border-dashed bg-transparent&quot;:
                                indicator === &quot;dashed&quot;,
                              &quot;my-0.5&quot;: nestLabel && indicator === &quot;dashed&quot;}
                          )}
                            style={
                              {
                                &quot;--color-bg&quot;: indicatorColor,
                                &quot;--color-border&quot;: indicatorColor} as CSSProperties
=======
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", _{
                              "h-2.5 w-2.5": indicator === "dot", _"w-1": indicator === "line", _"w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed", _"my-0.5": nestLabel && indicator === "dashed"}
                          )}
                            style={_{
                                "--color-bg": indicatorColor, _"--color-border": indicatorColor} as CSSProperties
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            }
                        />
                      )
                    )}
                    <div
<<<<<<< HEAD
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
                        <span className=&quot;font-mono font-medium tabular-nums text-foreground&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
ChartTooltipContent.displayName = &quot;ChartTooltip&quot;

const _ChartLegend = RechartsPrimitive.Legend

const _ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<&quot;div&quot;> &
    Pick<React.ComponentProps<typeof RechartsPrimitive.Legend>,
<<<<<<< HEAD
      &quot;payload&quot; | &quot;verticalAlign&quot;> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = &quot;bottom&quot;, nameKey },
    ref
  ) => {
    const { config } = useChart()
=======
      "payload" | "verticalAlign"> & {_hideIcon?: boolean
      nameKey?: string}
>(_(
    {_className, _hideIcon = false, _payload, _verticalAlign = "bottom", _nameKey}, _ref) => {_const { config} = useChart()
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    if (!payload?.length) {_return null}

    return (
      <div
<<<<<<< HEAD
        ref={ref}
        className={cn(
          &quot;flex items-center justify-center gap-4&quot;,
          verticalAlign === &quot;top&quot; ? &quot;pb-3&quot; : &quot;pt-3&quot;,
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || &quot;value&quot;}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                &quot;flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground&quot;
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            >
              {_itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className=&quot;h-2 w-2 shrink-0 rounded-[2px]&quot;
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
ChartLegendContent.displayName = &quot;ChartLegend&quot;

// Helper to extract item config from a payload.
<<<<<<< HEAD
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== &quot;object&quot; || payload === null) {
    return undefined
  }

  const payloadPayload =
    &quot;payload&quot; in payload &&
    typeof payload.payload === &quot;object&quot; &&
=======
function getPayloadConfigFromPayload(_config: ChartConfig, _payload: unknown, _key: string) {_if (typeof payload !== "object" || payload === null) {
    return undefined}

  const _payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
<<<<<<< HEAD
    typeof payload[key as keyof typeof payload] === &quot;string&quot;
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === &quot;string&quot;
  ) {
    configLabelKey = payloadPayload[
=======
    typeof payload[key as keyof typeof payload] === "string"
  ) {_configLabelKey = payload[key as keyof typeof payload] as string} else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {_configLabelKey = payloadPayload[
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      key as keyof typeof payloadPayload
    ] as string}

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {_ChartContainer, _ChartTooltip, _ChartTooltipContent, _ChartLegend, _ChartLegendContent, _ChartStyle}
