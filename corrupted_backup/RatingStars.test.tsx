import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingStars from '../components/RatingStars';
describe('RatingStars', () => {test('renders without crashing', () => {render(<RatingStars />)expect(screen.getByTestId('ratingstars')).toBeInTheDocument()})test('displays correct content', () => {render(<RatingStars />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<RatingStars />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<RatingStars />)// Add styling tests here;
  })})
import { render } from \'@testing-library/react\'; import { RatingStars } from \'@/components/RatingStars\'; test( \'"rating\": 4.7 shows 4 filled and 1 half star\',() => {\'; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( \'[data-testid=\'star-filled\']\')\'; const half = container.querySelectorAll( \'[data-testid=\'star-half\']\')\'; const outline = container.querySelectorAll( \'[data-testid=\'star-outline\']\')\'; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})
const { render } from "@testing-library/react"; import { RatingStars } from "@/components/RatingStars"; test( "rating: 4.7 shows 4 filled and 1 half star",() => {"; const { container } = render(<RatingStars value={4.7} />); const filled = container.querySelectorAll( "[data-testid="star-filled"]")"; const half = container.querySelectorAll( "[data-testid="star-half"]")"; const outline = container.querySelectorAll( "[data-testid="star-outline"]")"; expect(filled).toHaveLength(4); expect(half).toHaveLength(1); expect(filled.length + half.length + outline.length).toBe(5)})'"'"
}
