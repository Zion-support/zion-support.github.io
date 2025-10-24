"use client"

import React from 'react'

interface ContentStatisticsProps {
  children?: React.ReactNode
}

export default function ContentStatistics({ children }: ContentStatisticsProps) {
  return (
    <div className="content-statistics">
      {children}
    </div>
  )
}