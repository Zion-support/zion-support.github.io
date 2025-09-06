import { render } from \'@testing-library/react\'; import { RatingStars } from \'@/components/RatingStars\'; test( \'"rating\": 4.7 shows 4 filled and 1 half star\',() => {\'; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( \'[data-testid=\'star-filled\']\')\'; const half = container.querySelectorAll( \'[data-testid=\'star-half\']\')\'; const outline = container.querySelectorAll( \'[data-testid=\'star-outline\']\')\'; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})
const { render } from "@testing-library/react"; import { RatingStars } from "@/components/RatingStars"; test( "rating: 4.7 shows 4 filled and 1 half star",() => {"; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( "[data-testid="star-filled"]")"; const half = container.querySelectorAll( "[data-testid="star-half"]")"; const outline = container.querySelectorAll( "[data-testid="star-outline"]")"; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})'"'"
import React from 'react';

interface RatingStars.testProps {
  className?: string;
}

const RatingStars.test: React.FC<RatingStars.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RatingStars.test</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
