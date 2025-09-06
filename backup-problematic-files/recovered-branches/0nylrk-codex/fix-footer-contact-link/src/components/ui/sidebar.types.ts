
import React from 'react'
export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'
 We need to use a type that is compatible with both Slot's ref and React'