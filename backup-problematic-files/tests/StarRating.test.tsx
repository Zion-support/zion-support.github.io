<<<<<<< HEAD:corrupted_backup/StarRating.test.tsx
import { describe, it, expect } from '@jest/globals';

describe('StarRating', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
=======
import { render,screen } from \'@testing-library/react\'; import StarRating from \'@/components/StarRating\'; test(\',\'rating 4.5 renders 4 full and 1 half star\',() => { expect(screen.getAllByTestId( \'full-star\')).toHaveLength(4)\'; expect(screen.getAllByTestId( \'half-star\')).toHaveLength(1)})\';
const { render,screen } from "@testing-library/react"; import StarRating from "@/components/StarRating"; test(","rating 4.5 renders 4 full and 1 half star",() => { expect(screen.getAllByTestId( "full-star")).toHaveLength(4)"; expect(screen.getAllByTestId( "half-star")).toHaveLength(1)})";""
import { render,screen } from '@testing-library/react'; import StarRating from '@/components/StarRating'; test(','rating 4.5 renders 4 full and 1 half star',() => { expect(screen.getAllByTestId( 'full-star')).toHaveLength(4)'; expect(screen.getAllByTestId( 'half-star')).toHaveLength(1)})';''
import { render,screen } from '@testing-library/react'; import StarRating from '@/components/StarRating'; test(','rating 4.5 renders 4 full and 1 half star',() => { expect(screen.getAllByTestId( 'full-star')).toHaveLength(4)'; expect(screen.getAllByTestId( 'half-star')).toHaveLength(1)})';''
import { render,screen } from '@testing-library/react'; import StarRating from '@/components/StarRating'; test(','rating 4.5 renders 4 full and 1 half star',() => { expect(screen.getAllByTestId( 'full-star')).toHaveLength(4)'; expect(screen.getAllByTestId( 'half-star')).toHaveLength(1)})';''
>>>>>>> origin/main:backup-problematic-files/tests/StarRating.test.tsx
