import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Loading from '../app/components/Loading'
import S EO Head from '../app/components/S EO Head'
describe('Component Tests', () => {
  test('Loading renders correctly', () => {
    render(<L oading />)
    expect(screen.get By Text('Loading...')).to Be In The Document()
  })
  test('S EO Head renders without crashing', () => {
    render(
      <H elmet Provider>
        <S E O Head />
      </H elmet Provider>
    )
    expect(document.head).to Be In The Document()})})