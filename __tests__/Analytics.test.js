import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analytics from '../components/Analytics';

describe('Analytics', () => {
  it('renders without crashing', () => {
    render(<Analytics />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('tracks page views', () => {
    render(<Analytics />);
    const trackButton = screen.getByText('Track Page View');
    fireEvent.click(trackButton);
    expect(trackButton).toBeInTheDocument();
  });

  it('handles event tracking', () => {
    render(<Analytics />);
    const eventButton = screen.getByText('Track Event');
    fireEvent.click(eventButton);
    expect(eventButton).toBeInTheDocument();
  });

  it('displays analytics data', () => {
    render(<Analytics />);
    const dataElement = screen.getByText('Analytics Data');
    expect(dataElement).toBeInTheDocument();
  });
});