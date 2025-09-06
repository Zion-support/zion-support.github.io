import React from 'react'
export function Select({ children, value, onValueChange, defaultValue, className = ''
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || '';
export function SelectTrigger({ children, className = ''