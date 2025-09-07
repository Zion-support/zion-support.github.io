<<<<<<< HEAD
<<<<<<< HEAD
=======
import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"
import { useReactId } from "@/hooks/useReactId"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  string;import { useReactId } from "@/hooks/useReactId

<<<<<<< HEAD
import { cn } from @/lib/utils"
=======

<<<<<<< HEAD
import * as React from "react"
import type { CSSProperties } from "react"
import * as RechartsPrimitive from "recharts"
import {useReactId} from "@/hooks/useReactId"
import {cn} from "@/lib/utils"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = Record<;
  string;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useReactId } from "@/hooks/useReactId"

import { cn } from "@/lib/utils"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: ", dark: .dark" } as const
export type ChartConfig = Record<
<<<<<<< HEAD
import * as React from "react;
import type { CSSProperties } from react";
import * as RechartsPrimitive from "recharts;
import {useReactId} from @/hooks/useReactId";
=======
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
=======
=======
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';

import * as React from "react";
import type { CSSProperties } from "react";
import * as RechartsPrimitive from "recharts";
import {useReactId} from "@/hooks/useReactId";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/chore/fix-lint-and-merge

import {cn} from "@/lib/utils;

=======
import {cn} from "@/lib/utils";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Format: { THEME_NAME: CSS_SELECTOR }
<<<<<<< HEAD
const THEMES = { light: ", dark: ".dark } as const;
=======
const THEMES = { light: "", dark: ".dark" } as const;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge

export type ChartConfig = Record<;

  string;
  {
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
    | { color?: never, theme: Record < keyof typeof THEMES, string> });
>;

type ChartContextProps = {
  config: ChartConfig;
}

<<<<<<< HEAD
=======
=======
export type ChartConfig = Record<;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  string;
  {;
    label?: React && React.ReactNode;
    icon?: React && React.ComponentType;
  } & (;
    | { color?: string, theme?: never }
    | { color?: never, theme: Record<keyof typeof THEMES, string> }
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import * as React from './react';
import type { CSSProperties } from './react';
import * as RechartsPrimitive from './recharts';
import { useReactId } from '@/hooks / useReactId';
<<<<<<< HEAD

import { cn } from '@/lib / utils';
// Format: { THEME_NAME: CSS_SELECTOR }"
const THEMES = { light: "", dark: ".dark" } as const;
export type ChartConfig = Record<;
  string;

  );

>;

=======

import { cn } from '@/lib / utils';
// Format: { THEME_NAME: CSS_SELECTOR }"
const THEMES = { light: "", dark: ".dark" } as const;
export type ChartConfig = Record<;
  string;

  );

>;
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
type ChartContextProps = {
  config: ChartConfig;
}

const ChartContext = React && React.createContext<ChartContextProps>({
  config: {}});

function useChart(): any (): ChartContextProps {
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return React && React.useContext(ChartContext);
}
const ChartContainer = React && React.forwardRef<;
<<<<<<< HEAD
    <ChartContext && ChartContext.Provider value={{ config }}>;  return (
    <ChartContext && ChartContext.Provider value={{ config }}>;
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(        __html: Object.entries (THEMES);
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
  .join (\n")}
}
`);
          .join ("\n)}}
    />);
}
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forward_ref<;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  HTMLDivElement;
  React.ComponentProps < typeof RechartsPrimitive.Tooltip> &;
    React.ComponentProps<div"> & {
      hide_label?: boolean;
      hide_indicator?: boolean;
      indicator?: "line | dot" | "dashed;
      name_key?: string;
      label_key?: string;
    }
import * as React from react"
import type { CSSProperties } from "react
import * as RechartsPrimitive from recharts"
import { useReactId } from "@/hooks/useReactId
>>>>>>> merged-prs-20250907-203621


// Format: { THEME_NAME: CSS_SELECTOR}
=======
// Format: { THEME_NAME: CSS_SELECTOR }

const THEMES = { light: "", dark: ".dark" } as const
export type ChartConfig = Record<
  string,
>>>>>>> origin/chore/fix-lint-and-merge

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
type ChartContextProps = $2;
  React.ComponentProps<"div> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >[children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = useReactId()
  const chartId = `chart-${id |uniqueId.replace(/:/g, ")}`
=======
  HTMLDivElement;

  React && React.ComponentProps<"div"> & {;
    config: ChartConfig;
    children: React && React.ComponentProps<;
      typeof RechartsPrimitive && RechartsPrimitive.ResponsiveContainer;
<<<<<<< HEAD

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
>>>>>>> origin/chore/fix-lint-and-merge
  return (
=======
<<<<<<< HEAD

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
    >["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {;
  const uniqueId = useReactId();
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
<<<<<<< HEAD
=======
          "flex aspect-video justify-center text-xs [&_ && _.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_ && _.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_ && _.recharts-curve && curve.recharts-tooltip-cursor]:stroke-border [&_ && _.recharts-dot[stroke='#fff']]:stroke-transparent [&_ && _.recharts-layer]:outline-none [&_ && _.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_ && _.recharts-radial-bar-background-sector]:fill-muted [&_ && _.recharts-rectangle && rectangle.recharts-tooltip-cursor]:fill-muted [&_ && _.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_ && _.recharts-sector[stroke='#fff']]:stroke-transparent [&_ && _.recharts-sector]:outline-none [&_ && _.recharts-surface]:outline-none"
          className
        )}
        {...props}>;
        <ChartStyle id={chartId} config={config} />;
        <RechartsPrimitive && RechartsPrimitive.ResponsiveContainer>;
          {children}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </RechartsPrimitive && RechartsPrimitive.ResponsiveContainer>;
      </div>;
    </ChartContext && ChartContext.Provider>;
  );
});
ChartContainer && ChartContainer.displayName = "Chart";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) => {;
  const colorConfig = Object && Object.entries(config).filter(;
    ([_, config]) => config && config.theme || config && config.color;
  );
<<<<<<< HEAD
  if (!colorConfig && colorConfig.length) {;
    return null;
=======

  if (!colorConfig && colorConfig.length) {;
    return null;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
  return (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  return (
    <style;
      dangerouslySetInnerHTML={{
<<<<<<< HEAD

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            ([theme, prefix]) => `;
${prefix} [data-chart=${id}] {;
${colorConfig;
  .map(([key, itemConfig]) => {;
    const color =;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||;
      itemConfig.color;
    return color ? `  --color-${key} ${color},` :null;
  });
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      itemConfig && itemConfig.theme?.[theme as keyof typeof itemConfig && itemConfig.theme] ||;
      itemConfig && itemConfig.color;
    return color ? `  --color-${key}: ${color},` : null;
  });

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const ChartTooltip = RechartsPrimitive && RechartsPrimitive.Tooltip;

const ChartTooltipContent = React && React.forwardRef<;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

>(
  (
    {

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
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
      active,
      payload,
      className,
      indicator = $2;
      hideLabel = $2;
      hideIndicator = $2;
=======
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>(
  (
    {

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
ChartContainer.displayName = Chart"

const ChartStyle = ({ id, config }: { id: string, config: ChartConfig}) => {
=======
ChartContainer.displayName = "Chart"
const ChartStyle = ({ id, config }: { id: string, config: ChartConfig }) => {
>>>>>>> origin/chore/fix-lint-and-merge
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      active,

      payload,
<<<<<<< HEAD
      className,
      indicator = "dot,
=======
      className,"
      indicator = "dot",
>>>>>>> origin/chore/fix-lint-and-merge
      hideLabel = false,
      hideIndicator = false,
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey},
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ref
  ) => {

    const { config } = useChart()
    const tooltipLabel = React.useMemo(() => {}
      if (hideLabel |!payload?.length) {}
        return null;
      }
<<<<<<< HEAD
      const [item] = payload
      const key = `${labelKey |item.dataKey |item.name |value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string
          ? config[label as keyof typeof config]?.label |label
          : itemConfig?.label
<<<<<<< HEAD
=======
<<<<<<< HEAD
      if (labelFormatter) {        return (
          <div className={cn(font-medium", labelClassName)}>;
=======
      const [item] = payload"`
      const key = `${labelKey |item.dataKey |item.name |"value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value ="
        !labelKey && typeof label === "string"

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

<<<<<<< HEAD
=======
=======
      if (labelFormatter) {
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      labelKey};
    ref;
  ) => {;
    const { config } = useChart();
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const tooltipLabel = React && React.useMemo(() => {;
      if (hideLabel || !payload?.length) {;
        return null;
      }
<<<<<<< HEAD

        !labelKey && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : itemConfig?.label;

      if (labelFormatter) {;

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const [item] = payload;
      const key = `${labelKey || item && item.dataKey || item && item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        !labelKey && typeof label === "string";
          ? config[label as keyof typeof config]?.label || label;
          : itemConfig?.label;
<<<<<<< HEAD
      if (labelFormatter) {;
=======

      if (labelFormatter) {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        return (

          <div className={cn("font-medium", labelClassName)}>;
>>>>>>> origin/chore/fix-lint-and-merge
            {labelFormatter(value, payload)}
          </div>;
        );
      }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      if (!value) {;
        return null;
      }
      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, []
      if (!value) {;
        return null;
      }
"

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      name_key;
      label_key}

          <div className={cn ("font - medium", labelClassName)}>;
            {label_formatter (value, payload)}
          </div>);
      }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      // Check condition
if ( {) {
  $2
}
        return null;
      }
      return <div className={cn ("font - medium", labelClassName)}>{value}</div>;
    }, [;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      label;
      label_formatter;
      payload;
      hide_label;
      labelClassName;
      config;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      labelKey]);
    if (!active || !payload?.length) {;
      return null;
    }
    const nestLabel = payload && payload.length === 1 && indicator !== "dot";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      labelKey]);

    if (!active || !payload?.length) {;
      return null;
    }

<<<<<<< HEAD
    const nest_label = payload.length === 1 && indicator !== "dot";
=======
<<<<<<< HEAD
    const nest_label = payload.length === 1 && indicator !== "dot";
=======
    const nestLabel = payload && payload.length === 1 && indicator !== "dot";


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      label_key]);
    // Check condition
if ( {) {
  $2
}
      return null;
    }
    const nest_label = payload.length === 1 && indicator !== "dot";
<<<<<<< HEAD
    return (
      <div;
        ref={ref}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (
      <div;
        ref={ref}

<<<<<<< HEAD
            const key = `${nameKey || item && item.name || item && item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item && item.payload.fill || item && item.color;

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="grid gap-1 && 1.5">;
          {payload && payload.map((item, index) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            const key = `${nameKey || item && item.name || item && item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item && item.payload.fill || item && item.color;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            return (
              <div;
                key={item && item.dataKey}
<<<<<<< HEAD
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2 && 2.5 [&>svg]:w-2 && 2.5 [&>svg]:text-muted-foreground;
                  indicator === dot" && "items-center;
=======
                className={cn("
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2 && 2.5 [&>svg]:w-2 && 2.5 [&>svg]:text-muted-foreground";"
                  indicator === "dot" && "items-center";
>>>>>>> origin/chore/fix-lint-and-merge
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
                        <div
                          className={cn(
                            shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]"
                            {
                              "h-2 && 2.5 w-2 && 2.5: indicator === dot"
                              "w-1: indicator === line"
                              "w-0 border-[1 && 1.5px] border-dashed bg-transparent:
                                indicator === dashed"
                              "my-0 && 0.5: nestLabel && indicator === dashed"}
                          )}
                            style={
                              {
                                "--color-bg: indicatorColor
                                --color-border": indicatorColor} as CSSProperties
=======
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

                                "--color-bg": indicatorColor,


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                                "--color-border": indicatorColor} as CSSProperties

>>>>>>> origin/chore/fix-lint-and-merge
                            }
                        />;
                      );
                    )}
<<<<<<< HEAD
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none
                        nestLabel ? items-end" : "items-center
                      )}>;
                      <div className=grid gap-1 && 1.5">;
=======
                    <div;
                      className={cn("
                        "flex flex-1 justify-between leading-none""
                        nestLabel ? "items-end" : "items-center"
                      )}>;"
                      <div className="grid gap-1 && 1.5">;
>>>>>>> origin/chore/fix-lint-and-merge
                        {nestLabel ? tooltipLabel : null}

                        <span className="text-muted-foreground>;
                          {itemConfig?.label || item && item.name}
                        </span>;
                      </div>;
                      {item && item.value && (;
                        <span className=font-mono font-medium tabular-nums text-foreground">;
                          {item && item.value.toLocaleString()}
                        </span>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      if (labelFormatter) {
        return (
          <div className={cn("font-medium, labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }
      if (!value) {
        return null
      }
      return <div className={cn(font-medium", labelClassName)}>{value}</div>
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

<<<<<<< HEAD
    const nestLabel = $2;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
<<<<<<< HEAD
        <div className="grid gap-1.5>
          {payload.map((item, index) => {
            const key = `${nameKey |item.name |item.dataKey |value"}`
            const indicatorColor = $2;
                  indicator === "dot && items-center"
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
                          className = $2;
                            {
                              "h-2.5 w-2.5: indicator = $2;
                              w-1": indicator = $2;
                              "w-0 border-[1.5px] border-dashed bg-transparent:
                                indicator = $2;
                              my-0.5": nestLabel && indicator = $2;
                                "--color-border: indicatorColor} as CSSProperties
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                            }
                        />
                      )
                    )}
                    <div
<<<<<<< HEAD
                      className = $2;
                        nestLabel ? items-end" : "items-center
                      )}
                    >
                      <div className = $2;
  React.ComponentProps<div"> &
=======
<<<<<<< HEAD
=======
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
                        </span>
                        </span>;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
)
ChartTooltipContent.displayName = "ChartTooltip"
const ChartLegend = RechartsPrimitive.Legend
const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
>>>>>>> origin/chore/fix-lint-and-merge
    Pick<React.ComponentProps<typeof RechartsPrimitive.Legend>,
      "payload | verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
<<<<<<< HEAD
    { className, hideIcon = false, payload, verticalAlign = "bottom, nameKey }
=======

<<<<<<< HEAD
=======
=======
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  HTMLDivElement;

  React && React.ComponentProps<"div"> &;
    Pick<React && React.ComponentProps<typeof RechartsPrimitive && RechartsPrimitive.Legend>;"
      "payload" | "verticalAlign"> & {;
      hideIcon?: boolean;
      nameKey?: string;
<<<<<<< HEAD
        className={cn ("
=======
<<<<<<< HEAD
        className={cn ("
=======
        className={cn (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ref
  ) => {
    if (!payload?.length) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return null    { class_name, hide_icon = false, payload, vertical_align = bottom", name_key }
=======

>(;
  (;
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey };
    ref;
  ) => {;
    const { config } = useChart();
<<<<<<< HEAD

    if (!payload?.length) {;

      return null;
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
    if (!payload?.length) {;

      return null;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (

    }
;
    return (;
      <div;
        ref={ref}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        className={cn(
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
          "flex items-center justify-center gap-4"
          verticalAlign === "top" ? "pb-3" : "pt-3"
          className

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }





  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }

>>>>>>> origin/chore/fix-lint-and-merge
    ref) => {
    const { config } = use_chart ();
    // Check condition

<<<<<<< HEAD
export {
=======
"
    { class_name, hide_icon = false, payload, vertical_align = "bottom", name_key }
    ref) => {}
    const { config } = use_chart ();
    // Check condition;
export {;
>>>>>>> origin/chore/fix-lint-and-merge
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
      return null;
    }
    return (
      <div;
        ref={ref}
<<<<<<< HEAD
        className={cn (
          "flex items - center justify - center gap - 4;
          vertical_align === top" ? "pb - 3 : pt - 3";
          class_name)}
      >;
        {payload.map ((item) => {
          const key = `${name_key || item.data_key || "value}`;
=======
        className={cn ("
          "flex items - center justify - center gap - 4";"
          vertical_align === "top" ? "pb - 3" : "pt - 3";
          class_name)}
      >;
        {payload.map ((item) => {"`
          const key = `${name_key || item.data_key || "value"}`;
>>>>>>> origin/chore/fix-lint-and-merge
          const item_config = getPayloadConfigFromPayload (config, item, key);
          return (
            <div;
              key={item.value}
<<<<<<< HEAD
              className={cn (
                flex items - center gap - 1.5 [&>svg]:h - 3 [&>svg]:w - 3 [&>svg]:text - muted - foreground")}
            >;
              {item_config?.icon && !hide_icon ? (
                <item_config.icon />) : (
                <div;
                  className="h - 2 w - 2 shrink-0 rounded-[2px];
                  style={{
=======
              className={cn ("
                "flex items - center gap - 1.5 [&>svg]:h - 3 [&>svg]:w - 3 [&>svg]:text - muted - foreground")}
            >;
              {item_config?.icon && !hide_icon ? (
                <item_config.icon />) : (

>>>>>>> origin/chore/fix-lint-and-merge
                    background_color: item.color}}
                />)}
              {item_config?.label}
            </div>);
        })}
      </div>);
<<<<<<< HEAD
  }
);
ChartLegendContent.display_name = ChartLegend";
=======
  });"
ChartLegendContent.display_name = "ChartLegend";
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
  const payload_payload =;
    "payload in payload &&;
    typeof payload.payload === object" &&;
=======
  const payload_payload =;"
    "payload" in payload &&;"
    typeof payload.payload === "object" &&;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
}
export {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
);
ChartLegendContent && ChartLegendContent.displayName = "ChartLegend;
=======
});
<<<<<<< HEAD

ChartLegendContent && ChartLegendContent.displayName = "ChartLegend";
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

ChartLegendContent && ChartLegendContent.displayName = "ChartLegend";
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Helper to extract item config from a payload.;
  config: ChartConfig,
  payload: unknown,
  key: string;
<<<<<<< HEAD
) {
  if (typeof payload !== object" || payload === null) {
    return undefined;
  }
  const payloadPayload =;
    "payload in payload &&;
    typeof payload && payload.payload === object" &&;
    payload && payload.payload !== null;
      ? payload && payload.payload;
      : undefined;
  if (;
    key in payload &&;
    typeof payload[key as keyof typeof payload] === "string;
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (;
    payloadPayload &&;
    key in payloadPayload &&;
    typeof payloadPayload[key as keyof typeof payloadPayload] === string";
  ) {
=======
) {;"
  if (typeof payload !== "object" || payload === null) {;
    return undefined;
  }
<<<<<<< HEAD
  const payloadPayload =;"
    "payload" in payload &&;"
=======
<<<<<<< HEAD
  const payloadPayload =;"
    "payload" in payload &&;"
=======
  const payloadPayload =;
    "payload" in payload &&;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    typeof payload && payload.payload === "object" &&;
    payload && payload.payload !== null;
      ? payload && payload.payload;
      : undefined;
  let configLabelKey: string = key;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
    configLabelKey = payloadPayload[;
      key as keyof typeof payloadPayload;
    ] as string;
  }

<<<<<<< HEAD
;
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


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
export {;
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
<<<<<<< HEAD
;

;
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return configLabelKey in config;
    ? config[configLabelKey];
    :config[key as keyof typeof config];
}
<<<<<<< HEAD
=======

  ChartContainer,;
  ChartTooltip,;
  ChartTooltipContent,;
<<<<<<< HEAD

  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
  ChartContainer;
  ChartTooltip;
  ChartTooltipContent;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ChartLegend;
  ChartLegendContent;

<<<<<<< HEAD
  ChartStyle}  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}
export {  ChartLegend;
  ChartLegendContent;

  ChartStyle}

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
          const key = `${nameKey |item.dataKey |"value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
=======
          const key = `${nameKey |item.dataKey |"value}`
>>>>>>> merged-prs-20250907-203621
          return (
            <div
              key = $2;
  payload: unknown,
  key: string) {
<<<<<<< HEAD
  if (typeof payload !== "object" || payload = $2;
=======
  if (typeof payload !== object" || payload = $2;
>>>>>>> merged-prs-20250907-203621
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle}

<<<<<<< HEAD
  ChartLegend;
  ChartLegendContent;
  ChartStyle}
<<<<<<< HEAD
=======
;
=======
  ChartLegend;
  ChartLegendContent;
  ChartStyle}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
