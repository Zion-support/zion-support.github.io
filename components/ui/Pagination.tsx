import React from 'react';
import EnhancedButton from './EnhancedButton';
<<<<<<< HEAD

export type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onChange: (nextPage: number) => void;
};

export default function Pagination({
  page,
  pageSize,
  total,
  onChange,
}: PaginationProps) {
=======
export type PaginationProps = {
  page: number,
  pageSize: number,
  total: number,
  onChange: (nextPage: number) => void
};

export default function Pagination({ page, pageSize, total, onChange }: PaginationProps) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => {
<<<<<<< HEAD
    if (p >= 1 && p <= totalPages) onChange(p);
  };

  return (
    <div className='flex items-center justify-between gap-2 mt-4'>
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() => goTo(page - 1)}
        disabled={!canPrev}
      >
        Prev
      </EnhancedButton>
      <div className='text-sm'>
        Page {page} of {totalPages}
      </div>
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() => goTo(page + 1)}
        disabled={!canNext}
      >
=======
    if (p >= 1 && p <= totalPages) onChange(p)
  };

  return (
    <div className="flex items-center justify-between gap-2 mt-4">
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page - 1)} disabled={!canPrev}>
        Prev
      </EnhancedButton>
      <div className="text-sm">
        Page {page} of {totalPages}
      </div>
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page + 1)} disabled={!canNext}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        Next
      </EnhancedButton>
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
