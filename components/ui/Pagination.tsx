import React from 'react'
import EnhancedButton from './EnhancedButton'
export type PaginationProps = {
  page: number,
  pageSize: number,
  total: number,
  onChange: (nextPage: number) => void
},

export default function Pagination({ page, pageSize, total, onChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize)),
  const canPrev = page > 1
  const canNext = page < totalPages

  const goTo = (p: number) => {
    if (p >= 1 && p <= totalPages) onChange(p)
  },

  return (_<div className="flex items-center justify-between gap-2 mt-4">
      <EnhancedButton variant="secondary" size="md" onClick={_() => goTo(page - 1)} disabled={_!canPrev}>
        Prev
      </EnhancedButton>
      <div className="text-sm">
        Page {_page} of {_totalPages}
      </div>
      <EnhancedButton variant="secondary" size="md" onClick={_() => goTo(page + 1)} disabled={_!canNext}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        Next
      </EnhancedButton>
    </div>
  )
}