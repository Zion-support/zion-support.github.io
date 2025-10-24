import { describe, test, expect     } from '@jest/globals';
import { render, screen     } from '@testing-library/react';
import { HelmetProvider     } from 'react-helmet-async';
import '@testing-library/jest-dom';
import Loading from '../app/components/Loading';
import SEOHeadWrapper from '../app/components/SEOHeadWrapper'
describe('Loading Component', () => {
test('renders loading text', () => {
render(
      <HelmetProvider></HelmetProvider>
        <Loading /></Loading>
      </HelmetProvider>)
    )
    expect(screen.getByText('Loading')).toBeTruthy()
  })
})
describe('SEOHeadWrapper Component', () => {
test('renders without crashing', () => {
const { container } = render(
      <HelmetProvider></HelmetProvider>
        <SEOHeadWrappertitle="Test Title"
description="Test Description"
keywords={['test', 'keywords']} /></SEOHeadWrapper>
      </HelmetProvider>)
    )
    expect(container).toBeTruthy()
  })
})