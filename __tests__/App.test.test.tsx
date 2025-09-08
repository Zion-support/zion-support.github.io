

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });


import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('displays correct content'

});



