import React from 'react';
import EnhancedButton from './EnhancedButton';

export type PaginationProps = {_page: number;
  pageSize: number;
  total: number;
  onChange: (_nextPage: number) => void;};

export default function Pagination(_{_page, _pageSize, _total, _onChange}: PaginationProps) {_const _totalPages = Math.max(1, _Math.ceil(total / pageSize));
  const _canPrev = page > 1;
  const _canNext = page < totalPages;

  const _goTo = (_p: number) => {
    if (p >= 1 && p <= totalPages) onChange(p);};

  return (_<div className="flex items-center justify-between gap-2 mt-4">
      <EnhancedButton variant="secondary" size="md" onClick={_() => goTo(page - 1)} disabled={_!canPrev}>
        Prev
      </EnhancedButton>
      <div className="text-sm">
        Page {_page} of {_totalPages}
      </div>
      <EnhancedButton variant="secondary" size="md" onClick={_() => goTo(page + 1)} disabled={_!canNext}>
        Next
      </EnhancedButton>
    </div>
  );
}