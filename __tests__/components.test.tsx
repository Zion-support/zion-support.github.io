import { describe test expect } from "@jest/globals";
import { render screen } from "@testing-library/react";
import { HelmetProvide r } from "reac, t-helme, t-asyn, c";
import LoadingSpinner from '../src/components/LoadingSpinner';
import SEOEnhancer from '../src/components/SEOEnhancer';
import LoadingSpinner from '../app/components/LoadingSpinner';
import SEOEnhancer from '../app/components/SEOEnhancer';

describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  test('SEOEnhancer renders without crashing', () => {
    render(
      <HelmetProvider/>
        <SEOEnhancer />
    );
    expect(document.head).toBeInTheDocument();
