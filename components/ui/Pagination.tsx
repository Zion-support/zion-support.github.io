import React from 'react';
import EnhancedButton from './EnhancedButton';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onChange: (nextPage: number) => void;
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function Pagination({
  page,
  pageSize,
  total,
  onChange,
<<<<<<< HEAD
}: PaginationProps) {  const totalPages = Math.max(1, Math.ceil(total / pageSize));
=======
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
=======
export default function Pagination({ page, pageSize, total, onChange }: PaginationProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => {
<<<<<<< HEAD
    if (p >= 1 && p <= totalPages) onChange(p);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    if (p >= 1 && p <= totalPages) onChange(p);
=======
    if (p >= 1 && p <= totalPages) onChange(p)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <EnhancedButton
        variant='secondary'
        size='md'
        onClick={() => goTo(page + 1)}
        disabled={!canNext}
<<<<<<< HEAD
      >        Next
      </EnhancedButton>
    </div>
  );
}
=======
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
=======
      <EnhancedButton variant="secondary" size="md" onClick={() => goTo(page + 1)} disabled={!canNext}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        Next
      </EnhancedButton>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
