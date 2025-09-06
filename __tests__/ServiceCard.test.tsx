import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServiceCard from '../src/components/ServiceCard';

describe('ServiceCard', () => {
  test('renders without crashing', () => {
    const features = ['Feature 1', 'Feature 2', 'Feature 3'];
    render(
      <ServiceCard
        title="Test Service"
        description="Test Description"
        icon="🚀"
        features={features}
      />,
    );
    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('renders features list', () => {
    const features = ['Feature 1', 'Feature 2', 'Feature 3'];
    render(
      <ServiceCard
        title="Test Service"
        description="Test Description"
        icon="🚀"
        features={features}
      />,
    );
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Feature 3')).toBeInTheDocument();
  });
});
