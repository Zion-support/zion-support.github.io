import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../src/components/Card';

describe('Card', () => {
  test('renders without crashing', () => {
    render(<Card title="Test Title" description="Test Description" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('renders with icon', () => {
    render(
      <Card title="Test Title" description="Test Description" icon="🚀" />,
    );
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });
});
