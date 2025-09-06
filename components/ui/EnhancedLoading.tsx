import React from 'react'
type EnhancedLoadingProps = {
  lines?: number
},

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className=&quot;space-y-2&quot;>
      {Array.from({ length: lines }).map((_, idx) => (
        <div key={idx} className=&quot;skeleton h-4 rounded&quot; />
import React from 'react';

type EnhancedLoadingProps = {_lines?: number;};

export default function EnhancedLoading(_{_lines = 3}: EnhancedLoadingProps) {_return (
    <div className="space-y-2">
      {Array.from({ length: lines}).map(_(_, _idx) => (
        <div key={_idx} className="skeleton h-4 rounded" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ))}
    </div>
  )
}