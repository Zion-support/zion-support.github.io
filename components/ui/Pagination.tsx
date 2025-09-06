import React from 'react';
import EnhancedButton from './EnhancedButton';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
}: PaginationProps) {  const totalPages = Math.max(1, Math.ceil(total / pageSize));
=======
export default function Pagination({ page, pageSize, total, onChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => {
    if (p >= 1 && p <= totalPages) onChange(p);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
      >        Next
      </EnhancedButton>
    </div>
  );
}
=======
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page + 1)} disabled={!canNext}>
        Next
      </EnhancedButton>
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
