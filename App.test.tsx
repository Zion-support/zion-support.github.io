import React from 'react'
import { render, screen } from '@testing-library/react'

describe('Smoke', () => {
  it('renders a basic component', () => {
    function Dummy() {
      return <main>ok</main>
    }
    render(<Dummy  />)
    expect(screen.getByRole('main')).toHaveTextContent('ok')
  })
})
