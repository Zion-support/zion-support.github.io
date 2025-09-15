import * as React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = RadixTooltip.Provider
export const Tooltip = RadixTooltip.Root
export const TooltipTrigger = RadixTooltip.Trigger

export function TooltipContent({ children }: { children: React.ReactNode }) {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content className="z-50 rounded-md bg-black/80 px-3 py-2 text-sm text-white shadow">
        {children}
        <RadixTooltip.Arrow className="fill-black/80" />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  )
}

